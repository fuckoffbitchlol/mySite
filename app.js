// personal site router file
// [todo] add jlint check

"use strict";

var http = require("http");
var express = require("express");
var app = express();
var server = http.createServer(app);


// handle http request
app.configure(function(){
    app.use(express.static(__dirname + "/"));
    // this is like import router.js, this seems fun
    app.use(app.router);
});

app.get("/", function(req, res){
    // redirect return website
    res.redirect("/index.html")
});

server.listen(3000);
