// Jorge Enrique Oviedo Samaniego
// Student ID: 301254998
// 27 09 2023

var express = require('express');
var router = express.Router();



// homepage
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// about page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

// projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

// contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

// services page
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

module.exports = router;
