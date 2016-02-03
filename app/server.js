/*
	Server file
	Created by: Jesse Jurman
*/

var express = require('express');
var app = express();

// expose the html, css, and js from src
app.use(express.static(__dirname + '/dist'));

// run the server application
app.listen(4000, function() {
	console.log("Listening on Port 4000");
});
