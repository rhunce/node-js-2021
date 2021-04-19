const { readFileSync, writeFileSync } = require('fs');

console.log('start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second} \n`,
  { flag: 'a' } // This flag has node append the data in the second argument to the file in the first argument, as opposed to overwriting the file contents.
);

console.log('done with this task');

console.log('starting the next one');
