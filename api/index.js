const { createReadStream } = require('fs');
const { join } = require('path');

module.exports = (req, res) => {
  // For all requests, serve index.html
  const indexPath = join(__dirname, '../dist/counter-app/index.html');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  const stream = createReadStream(indexPath);
  stream.pipe(res);
};
