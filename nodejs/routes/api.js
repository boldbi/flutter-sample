const express = require('express');
const router = express.Router();
const fs = require('fs');
const url = require('url');
const http = require('http');
const https = require('https');
const path = require('path');

const { getSignatureUrl } = require('../utils/signature');

// Load config once
let appconfig;
try {
  appconfig = JSON.parse(fs.readFileSync(path.join(__dirname, '../embedConfig.json')));
} catch (error) {
  console.error('Error: embedConfig.json file not found.');
  process.exit(1);
}

const embedSecret = appconfig.EmbedSecret;
const userEmail = appconfig.UserEmail;

// POST /api/authorizationserver
router.post('/authorizationserver', async (req, res) => {
  let embedQuerString = req.body.embedQuerString;
  const dashboardServerApiUrl = req.body.dashboardServerApiUrl;

  embedQuerString += "&embed_user_email=" + userEmail;
  embedQuerString += "&embed_server_timestamp=" + Math.round(Date.now() / 1000);
  const embedSignature = "&embed_signature=" + getSignatureUrl(embedQuerString, embedSecret);
  const embedDetailsUrl = "/embed/authorize?" + embedQuerString + embedSignature;

  const serverProtocol = url.parse(dashboardServerApiUrl).protocol === 'https:' ? https : http;

  serverProtocol.get(dashboardServerApiUrl + embedDetailsUrl, function(response) {
    let str = '';
    response.on('data', function(chunk) {
      str += chunk;
    });
    response.on('end', function() {
      res.send(str);
    });
  });
});

// GET /api/getdetails
router.get('/getdetails', (req, res) => {
  const serverEmbedConfigData = path.join(__dirname, '../embedConfig.json');
  const jsonData = fs.readFileSync(serverEmbedConfigData, 'utf8');
  const parsedData = JSON.parse(jsonData);

  const clientEmbedConfigData = {
    DashboardId: parsedData.DashboardId,
    ServerUrl: parsedData.ServerUrl,
    SiteIdentifier: parsedData.SiteIdentifier,
    EmbedType: parsedData.EmbedType,
    Environment: parsedData.Environment
  };
  res.send(clientEmbedConfigData);
});

module.exports = router;
