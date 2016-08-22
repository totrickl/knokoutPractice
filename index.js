var http = require('http');
var fs = require('fs');
// var index = fs.readFileSync('index.html');
var app = require('express');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log("resp", res);
    res.json({
        success: true,
        message: "Good to go!"
    });
}).listen(3000);