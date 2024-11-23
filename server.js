/**
 * Exercise 3: Create an HTTP web server
 */


const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
  if (req.url === '/') {
  
    const htmlPath = path.join(process.cwd(), 'index.html'); 

    fs.readFile(htmlPath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error reading the HTML file');
        console.error('Error:', err);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);  
      }
    });


  } else if (req.url === '/index.js') {
   
    const jsPath = path.join(process.cwd(), 'index.js'); 

    fs.readFile(jsPath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error reading the JavaScript file');
        console.error('Error:', err);
      } else {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.end(data);  
      }
    });
   
  } else if(req.url === '/css.css'){
    const cssPath = path.join(process.cwd(), 'css.css'); 

    fs.readFile(cssPath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error reading the style sheet file');
        console.error('Error:', err);
      } else {
        res.writeHead(200, { 'Content-Type': 'style/css' });
        res.end(data);  
      }
    });

  }
});


server.listen(3000)

