const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const axios = require('axios');


// Load config once
let appconfig;
try {
  appconfig = JSON.parse(fs.readFileSync(path.join(__dirname, '../embedConfig.json')));
} catch (error) {
  console.error('Error: embedConfig.json file not found.');
  process.exit(1);
}



// POST /api/TokenGeneration
router.post('/TokenGeneration', async (req, res) => {
  try {
    console.log('Received TokenGeneration request');
    console.log(appconfig)

    if (!appconfig.ServerUrl || !appconfig.EmbedSecret) {
      return res.status(400).json({ error: 'Missing required fields: serverurl, embedsecret, dashboard.id' });
    }

    const targetUrl = (appconfig.SiteIdentifier && appconfig.SiteIdentifier.toString().trim() !== '')
      ? `${appconfig.ServerUrl.replace(/\/$/, '')}/api/${appconfig.SiteIdentifier}/embed/authorize`
      : `${appconfig.ServerUrl.replace(/\/$/, '')}/api/embed/authorize`;

    const payload = {
      email: appconfig.UserEmail,
      serverurl: appconfig.ServerUrl,
      siteidentifier: appconfig.SiteIdentifier,
      embedsecret: appconfig.EmbedSecret,
      dashboard: { id: appconfig.DashboardId }
    };

    const response = await axios.post(targetUrl, payload, {
      headers: { 'Content-Type': 'application/json' },
      timeout: 10000
    });


    // Return the Bold BI response directly (contains Data.access_token)
    return res.status(response.status).json(response.data.Data.access_token);
  } catch (err) {
    console.error('TokenGeneration error:', err && err.message ? err.message : err);
    const status = (err.response && err.response.status) ? err.response.status : 500;
    const data = (err.response && err.response.data) ? err.response.data : { error: err.message };
    return res.status(status).json(data);
  }
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
