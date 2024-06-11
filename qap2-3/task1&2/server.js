/*const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(`Request received for ${url}`);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    switch (url) {
        case '/about':
            console.log("About page requested");
            res.write('About Page');
            break;
        case '/contact':
            console.log("Contact page requested");
            res.write('Contact Page');
            break;
        case '/products':
            console.log("Products page requested");
            res.write('Products Page');
            break;
        case '/':
            console.log("Home page requested");
            res.write('Home Page');
            break;
        case '/subscribe':
            console.log("Subscribe page requested");
            res.write('Subscribe Page');
            break;
        default:
            res.statusCode = 404;
            console.log("Page not found");
            res.write('Page Not Found');
            break;
    }

    res.end();
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});  */

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(`Request received for ${url}`);
    
    let filePath = '';
    
    switch (url) {
        case '/about':
            console.log("About page requested");
            filePath = path.join(__dirname, 'views', 'about.html');
            break;
        case '/contact':
            console.log("Contact page requested");
            filePath = path.join(__dirname, 'views', 'contact.html');
            break;
        case '/products':
            console.log("Products page requested");
            filePath = path.join(__dirname, 'views', 'products.html');
            break;
        case '/':
            console.log("Home page requested");
            filePath = path.join(__dirname, 'views', 'home.html');
            break;
        case '/subscribe':
            console.log("Subscribe page requested");
            filePath = path.join(__dirname, 'views', 'subscribe.html');
            break;
        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.write('Page Not Found');
            res.end();
            return;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.write('Page Not Found');
            res.end();
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        }
    });
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

