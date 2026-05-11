// The code below creates a basic web server

import http from 'http';
// Imports Node's built-in HTTP module
// This module allows Node to create web servers, receive requests, send responses

const server = http.createServer((req, res)=>{
    res.writeHead(200, { 'Content-Type':'text/plain'});
    res.end('Hello from Node.js server!');
});
// line 7 creates a web server
// Node says: "Whenever someone connects to the server, run this function."
// (req, res) => {} runs every time a request arrives
// req(request object) contains information ABOUT the browser request
// Examples: URL visited, headers, request type (GET/POST)
// res(response object) is used to send data BACK to the browser.
// For line 8, Sends HTTP response headers
// 200 HTTP status code means Success
// 404 means Not found
// 500 means Server error
//  'Content-Type':'text/plain' } tells browser "The response is plain text."
// text/plain	plain text
// text/html	HTML webpage
// application/json	JSON data
// If changed to: 'Content-Type': 'text/html'
// we could send HTML pages
// end(): sends data and finishes the response
// Browser receives: Hello from Node.js server!


server.listen(3000, ()=>{
    console.log('Server running at http://localhost:3000');
});
// server.listen(3000, ()=>{ 
// This starts the server listening for connections on port 3000
// If a computer like a building
// then ports are like door numbers
// different programs listen on different ports
// examples: 3000, 8080, 5000
// localhost means your own computer
// So: http://localhost:3000 means: "Connect to port 3000 on my own machine."
// line 32 prints a message once the server starts successfully.