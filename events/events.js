const events = require('events');
const MyEvent = new events.EventEmitter();

const Myfunc = () => console.log('HI THERE ! HAPPY LEARNING');

MyEvent.on('MyEvent', Myfunc);
MyEvent.emit('MyEvent');