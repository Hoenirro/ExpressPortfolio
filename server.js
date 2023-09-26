var express = require('express');
var app = express();

app.use(express.static('./public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// projects page
app.get('/projects', function(req, res) {
  res.render('pages/projects');
});

// Services page
app.get('/services', function(req, res) {
  res.render('pages/services'); // Renders the "services.ejs" template
});

// Contact page
app.get('/contact', function(req, res) {
  res.render('pages/contact');
});

app.listen(8080);
console.log('Server is listening on http://localhost:8080/');