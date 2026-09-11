const https = require('https');
const options = {
  hostname: 'api.api-ninjas.com',
  path: '/v1/commodityprice?name=gold',
  method: 'GET',
  headers: { 'X-Api-Key': 'F47ROzBXXV5Cex41ZAiVRdKa8UcGCHmwOE8kZuhs' }
};
const req = https.request(options, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log('Single:', res.statusCode, data));
});
req.end();

const options2 = {
  hostname: 'api.api-ninjas.com',
  path: '/v1/commodityprice?names=gold,silver,platinum,palladium',
  method: 'GET',
  headers: { 'X-Api-Key': 'F47ROzBXXV5Cex41ZAiVRdKa8UcGCHmwOE8kZuhs' }
};
const req2 = https.request(options2, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log('Multi names:', res.statusCode, data));
});
req2.end();
