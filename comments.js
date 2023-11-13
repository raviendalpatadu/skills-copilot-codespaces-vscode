// Create web server application
// 1. Create a web server application that can listen to incoming requests for the following URLs
// http://localhost:3000/ or http://localhost:3000/home
// http://localhost:3000/about
// http://localhost:3000/contact-us
// 2. For all other URLs, show a 404 error page.
// 3. The 404 error page should display the following message:
// “404 - Sorry! We can’t find the page you are looking for.”
// 4. The 404 error page should return a 404 HTTP status code.

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const port = 3000;
const hostname = 'localhost';

const server = http.createServer((req, res) => {
    // console.log(req.url);
    let urlPath = url.parse(req.url).pathname;
    // console.log(urlPath);
    if(urlPath === '/' || urlPath === '/home'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Home Page</h1>');
    }else if(urlPath === '/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>About Page</h1>');
    }else if(urlPath === '/contact-us'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Contact Us Page</h1>');
    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>404 - Sorry! We can’t find the page you are looking for.</h1>');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});