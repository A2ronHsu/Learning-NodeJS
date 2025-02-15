import EventEmitter from 'events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
let m = 0;
myEmitter.on('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
// Prints: 1
myEmitter.emit('event');
// Prints: 2w
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');



myEmitter.once('event1', ()=>{
   console.log('this is called only once no matter how many times you emit it');
})

myEmitter.emit('event1');
myEmitter.emit('event1');
myEmitter.emit('event1');