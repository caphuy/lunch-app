/**
 * app/config/passport.js
 * 
 */

const FacebookTokenStrategy = require('passport-facebook-token'),
      User = require('../model/user'),
      configAuth = require('./auth');

module.exports = (passport) => {

  passport.use(new FacebookTokenStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret
  }, (accessToken, refreshToken, profile, done) => {
    User.upsertFbUser(accessToken, refreshToken, profile, (err, user) => {
      return done(err, user);
    });
  }));

}