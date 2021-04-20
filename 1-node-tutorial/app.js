// console.log('Node Tutorial');

var http = require('http');
var fs = require('fs');

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8');
    // res.end(text);
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', () => {
      fileStream.pipe(res);
    });
    fileStream.on('error', (err) => {
      res.end(err);
    });
  })
  .listen(5000, () => console.log('Listening on localhost 5000...'));

// in the browser, open up console and look at Network tab. Compare stats for both scenarios above in the Network tab (and click on localhost in Network tab to see more info).
