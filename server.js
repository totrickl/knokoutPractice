var http = require('http');
var express = require("express");
// var static = require('node-static');


var app = express();
var server = http.createServer(app).listen(3000);
console.log(server);
console.log("SERVER IS LISTENING TO THE PORT", server.address().port);
app.use(express.static(__dirname +  '/'));

app.get("/", function (req, resp) {
    resp.sendFile('/home/nerd/WebstormProjects/knockoutProject/views/view.html');
    // resp.send({success: true});

});
