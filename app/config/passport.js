/**
 * config/passport.js
 * 
 */

const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const User = require('../model/model').User;

const configAuth = require('./auth');

module.exports = (passport) => {
  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  passport.use(new FacebookStrategy({
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL
  }, 

  function(token, refreshToken, profile, done) {
    process.nextTick(() => {
      User.findOne({'facebook.id': profile.id}, (err, user) => {
        if (!err) {
          if (user) {
            return done(null, user);
          } else {
            let newUser = new User();
            newUser.facebook.id = profile.id;
            newUser.facebook.token = profile.token;
            newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
            newUser.facebook.email = profile.emails;
            newUser.create((err, createdUser) => {
              if (!err) {
                return done(null, newUser);
              } else {
                throw err;
              }
            })
          }
        } else {
          return done(err);
        }
      });
    });
  }));

}