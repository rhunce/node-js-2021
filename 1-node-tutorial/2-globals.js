// GLOBALS  - NO WINDOW !!!!

// These are some of Node's global variables....not all of them.

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log('dirname: ', __dirname);
console.log('filename: ', __filename);
setInterval(() => {
  console.log('hello world');
}, 1000);
// console.log('process: ', process);
