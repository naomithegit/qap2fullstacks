// server.js
const http = require('http');
const handleRequest = require('./routes');



const port = 3002;

const server = http.createServer(handleRequest);

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
