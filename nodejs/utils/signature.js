const crypto = require('crypto');

function getSignatureUrl(queryString, embedSecret) {
  const keyBytes = Buffer.from(embedSecret);
  const hmac = crypto.createHmac('sha256', keyBytes);
  hmac.update(queryString);
  const gen_hmac = hmac.digest().toString('base64');
  return gen_hmac;
}

module.exports = { getSignatureUrl };
