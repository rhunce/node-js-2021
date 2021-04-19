// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
  console.log(`data received user ${name} with id:${id}`);
});

customEmitter.on('response', () => {
  console.log('some other logic here');
});

customEmitter.on('response2', (statement) => {
  console.log(statement);
});

// Order matters. Must listen for event first, with the .on method, then emit it.
customEmitter.emit('response', 'john', 34);
customEmitter.emit('response2', 'it works');
