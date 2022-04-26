var express = require('express');
var router = express.Router();
const passport = require('passport');

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
    // failureFlash: true,
  }),
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
