// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

customEmitter.emit('response', 'john', 34)

//My notes:
//const EventEmitter = require('events')
/*returns a class
 if want to create a custom event will have to extend the class
*/

//const customEmitter = new EventEmitter()

//on method listens for the response event name, the name of the event, and the event action  is declared in the callback function -aka, the second parameter

//the on and emit order matters -first you listen to it and then you emitt it
customEmitter.on('response', (name, id) => {
  console.log(`data received user ${name} with id: ${id}`)
})

customEmitter.on('response', () => {
  console.log(`some logic here`)
})
//the emit method emits an event
customEmitter.emit('response', 'john', 35)
