const { createReadStream } = require('fs');

// default 64kb buffer size
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt');
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 });
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8' });
const stream = createReadStream('./content/big.txt', {
  highWaterMark: 90000,
  encoding: 'utf8',
});

stream.on('data', (chunk) => {
  console.log(chunk);
});
stream.on('error', (err) => console.log(err));
