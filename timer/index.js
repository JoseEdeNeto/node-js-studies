/* setInterval( () => console.log('TCS'), 5000);

setTimeout( () => console.log('TCS'), 2000); */

var i = setInterval( () => console.log('TCS'), 2000);
setTimeout( () => clearInterval(i), 10000);