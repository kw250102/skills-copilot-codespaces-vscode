// Purpose: Create a simple web server that returns a JSON file
// Create Web Server: node server.js
// Test: http://localhost:3000/comments

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
    var url_parts = url.parse(request.url);
    console.log(url_parts);
    if(url_parts.pathname == '/comments') {
        // Read comments from file
        fs.readFile('comments.json', function(err, data) {
            if(err) {
                console.log(err);
                response.writeHead(400, {'Content-Type': 'text/plain'});
                response.end('Error reading comments file');
            } else {
                response.writeHead(200, {'Content-Type': 'application/json'});
                response.end(data);
            }
        });
    } else {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello World\n');
    }
});

// Listen on port 3000, IP defaults to
