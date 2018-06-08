const express = require('express'),
      router = express.Router(),
      authService = require('../service/auth-service')
      ;

module.exports = (passport) => {
  
  router.route('/auth/facebook').post(passport.authenticate('facebook-token', {session: false}), (req, res, next) => {
    if(!req.user) {
      return res.send(400, 'User not authenticated');
    }
    req.auth = {
      id: req.user.id
    };
    next();
  }, authService.generateToken, authService.sendToken);

  return router;
}