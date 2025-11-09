const http = require('http');

const opts = { hostname: 'localhost', port: process.env.PORT || 3000, path: '/health', method: 'GET' };

const req = http.request(opts, res => {
  if (res.statusCode === 200) {
    console.log('OK');
    process.exit(0);
  } else {
    console.error('NOT OK', res.statusCode);
    process.exit(1);
  }
});
req.on('error', err => { console.error(err); process.exit(1); });
req.end();
