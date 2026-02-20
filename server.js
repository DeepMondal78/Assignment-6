// import http...
let http = require('http');
// import path here...
let path = require("path");
// import fs here...
let fs = require("fs");

// create server logic here...
let app = http.createServer((req, res) => {
    // path name variable here..
    let pathName;
    // destructor  here logic here  { url, methoed ,headers} = req 
    const { url } = req;
    if (url === '/' || url.toLowerCase() === '/home') {
        pathName = path.join(__dirname, "pages", "home.html");
    }
    else if (url.toLowerCase() === "/about") {
        pathName = path.join(__dirname, "pages", "about.html");
    }
    else if (url.toLowerCase() === "/contact") {
        pathName = path.join(__dirname, "pages", "contact.html");
    }
    else {
        pathName = path.join(__dirname, "pages", "404.html");
    }
    // file stystem  login here.....
    fs.readFile(pathName, (error, data) => {
        if (error) {
            res.writeHead(400, { "Content-type": "text/pain" })
            res.end("internal server error plz try agin leater")
        }
        else {
            res.writeHead(200, { "Content-type": "text/html" })
            res.end(data)
        }
    })
})

// port name here...
let Port = 3000;

// run server logic  here....
app.listen(Port, () => {
    console.log(`your node.js server is running http://localhost:${Port}`);
})

