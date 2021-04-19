// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

// console.log(names);
// console.log(sayHi);
// console.log(data);
// console.log(require('./7-mind-grenade'));

require('./7-mind-grenade');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
