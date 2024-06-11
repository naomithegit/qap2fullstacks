// events.js
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();



//Event listeners....
myEmitter.on('statusCode', (code) => {
    console.log(`HTTP Status Code: ${code}`);
});

myEmitter.on('routeAccessed', (message) => {
    console.log(message);
});




myEmitter.on('fileRead', (filePath) => {
    console.log(`File successfully read: ${filePath}`);
});

myEmitter.on('fileNotFound', (filePath) => {
    console.log(`File not found: ${filePath}`);
});

module.exports = myEmitter;
