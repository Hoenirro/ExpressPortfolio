// Jorge Enrique Oviedo Samaniego
// Student ID: 301254998
// 27 09 2023


var express = require('./config/express');
var app = express();
app.listen(8080);

module.exports = app;

console.log('Server is listening on http://localhost:8080/');