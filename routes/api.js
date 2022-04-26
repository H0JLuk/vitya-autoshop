var express = require('express');
var router = express.Router();
const passport = require('passport');
const { Feedback, Car } = require('../models');

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
  }),
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.post('/feedback', async (req, res) => {
  const { name, email, website, message } = req.body;

  try {
    await Feedback.create({
      name,
      email,
      website,
      message,
      UserId: req.user?.id || null,
    });
    res.redirect('/');
  } catch {
    res.render('error', { message: 'Server error', error: {} });
  }
});

module.exports = router;
