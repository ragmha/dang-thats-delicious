const passport = require('passport');

exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: 'Failed Login!',
  successRedirect: '/',
  successFlash: 'You are now logged in!',
});

exports.logout = (req, res) => {
  req.logout();
  req.flash('success', 'You are now logged out! 👋');
  res.redirect('/');
};

exports.isLoggedIn = (req, res, next) => {
  // Checks if user is authenticated
  if (req.isAuthenticated()) {
    next(); // carry on! its logged in
    return;
  }
  req.flash('error', 'Ooops you must be logged in to do that!');
  res.redirect('/login');
};
