

// events.js--bonus
const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();




// Defining the event listeners
myEmitter.on('statusCode', (code) => {
    const logMessage = `HTTP Status Code: ${code}\n`;
    writeToLogFile(logMessage);
    console.log(logMessage);
});

myEmitter.on('routeAccessed', (message) => {
    const logMessage = `${message}\n`;
    writeToLogFile(logMessage);
    console.log(logMessage);
});

myEmitter.on('fileRead', (filePath) => {
    const logMessage = `File successfully read: ${filePath}\n`;
    writeToLogFile(logMessage);
    console.log(logMessage);
});

myEmitter.on('fileNotFound', (filePath) => {
    const logMessage = `File not found: ${filePath}\n`;
    writeToLogFile(logMessage);
    console.log(logMessage);
});

// Function...write logs to daily log files
const writeToLogFile = (logMessage) => {
    const currentDate = new Date();
    const logFileName = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)}-${currentDate.getDate()}.log`;
    const logFilePath = path.join(__dirname, 'logs', logFileName);

    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error(`Error writing to log file: ${err}`);
        }
    });
};

module.exports = myEmitter;

