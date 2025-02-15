import { EventEmitter, errorMonitor } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();


// myEmitter.on('error', (err) => {
//    console.error('whoops! there was an error');
// });



myEmitter.on( errorMonitor,(err)=>{
   console.log('no sure what is this')
})



// myEmitter.emit('error', new Error('whoops!'));
// myEmitter.emit('error', new Error('whoops!'));
// myEmitter.emit('error', new Error('whoops!'));


myEmitter.emit('error', new Error('whoops!'));//here nodejs crashes


// myEmitter.emit('error', new Error('whoops!'));
// myEmitter.emit('error', new Error('whoops!'));
// myEmitter.emit('error', new Error('whoops!'));

console.log('the script end here')