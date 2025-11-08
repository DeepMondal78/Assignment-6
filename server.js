
const http = require('http');
const fs = require('fs');
const path = require('path');


const PORT = 3000;

const server = http.createServer((req, res) => {
    
    console.log(`Request received for: ${req.url}`);


    let filePath;
    let contentType = 'text/html';
    let statusCode = 200;

    switch (req.url) {
        case '/':
        case '/home':
            filePath = path.join(__dirname, 'pages', 'index.html');
            break;
        case '/about':
            filePath = path.join(__dirname, 'pages', 'about.html');
            break;
        case '/contact':
            filePath = path.join(__dirname, 'pages', 'contact.html');
            break;
        case '/style.css': 
            filePath = path.join(__dirname, 'public', 'style.css');
            contentType = 'text/css';
            break;
        default:
           
            filePath = path.join(__dirname, 'pages', '404.html');
            statusCode = 404;
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
          
            console.error(`Error reading file: ${filePath}`, err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 - Internal Server Error');
        } else {
           
            res.writeHead(statusCode, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});


server.listen(PORT, () => {
    console.log(`Server is running successfully on http://localhost:${PORT}`);
});