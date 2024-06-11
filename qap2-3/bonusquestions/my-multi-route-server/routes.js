// routes.js
const fs = require('fs');
const path = require('path');
const myEmitter = require('./events');

const routes = {
    '/about': 'about.html',
    '/contact': 'contact.html',
    '/products': 'products.html',
    '/': 'home.html',
    '/subscribe': 'subscribe.html',
};



const handleRequest = (req, res) => {
    const url = req.url;
    console.log(`Request received for ${url}`);

    const fileName = routes[url];
    if (!fileName) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.write('Page Not Found');
        res.end();
        myEmitter.emit('statusCode', 404);
        myEmitter.emit('fileNotFound', url);
        return;
    }



    const filePath = path.join(__dirname, 'views', fileName);




    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.write('Page Not Found');
            res.end();
            myEmitter.emit('statusCode', 404);
            myEmitter.emit('fileNotFound', filePath);
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
            myEmitter.emit('statusCode', 200);
            myEmitter.emit('fileRead', filePath);
        }
        
    });

    if (url === '/contact') {
        myEmitter.emit('routeAccessed', 'Contact page accessed');
    }
};

module.exports = handleRequest;
