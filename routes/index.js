var express = require('express');
var router = express.Router();
const { Article, Member, Car } = require('../models');

const getLastArticles = () =>
  Article.findAll({
    limit: 2,
    order: [['createdAt', 'DESC']],
  });

router.get('/', async function (req, res, next) {
  res.render('index', {
    user: req.user,
    lastArticles: await getLastArticles(),
  });
});

router.get('/cars', async (req, res, next) => {
  const cars = await Car.findAll();

  res.render('cars', {
    user: req.user,
    lastArticles: await getLastArticles(),
    cars,
  });
});

router.get('/contact-us', async (req, res, next) => {
  res.render('contact-us', {
    user: req.user,
    lastArticles: await getLastArticles(),
  });
});

router.get('/articles', async (req, res, next) => {
  const articles = await Article.findAll();

  res.render('articles', {
    user: req.user,
    lastArticles: await getLastArticles(),
    articles,
  });
});

router.get('/articles/:id', async (req, res, next) => {
  const article = await Article.findByPk(req.params.id);

  res.render('article', {
    user: req.user,
    lastArticles: await getLastArticles(),
    article,
  });
});

router.get('/about-us', async (req, res, next) => {
  const members = await Member.findAll();
  res.render('about-us', {
    user: req.user,
    lastArticles: await getLastArticles(),
    members,
  });
});

module.exports = router;
