var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/contact-us', (req, res, next) => {
  res.render('contact-us');
});

router.get('/articles', (req, res, next) => {
  res.render('articles');
});

router.get('/articles/:id', (req, res, next) => {
  res.render('article');
});

router.get('/about-us', (req, res, next) => {
  res.render('about-us');
});

module.exports = router;
