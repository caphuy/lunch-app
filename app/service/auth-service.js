const jwt = require('jsonwebtoken'),
      expressJwt = require('express-jwt'),
      Constants = require('../util/constants')

const X_AUTH_TOKEN = 'x-auth-token',
      REQUEST_PROPERTY = 'auth'
      ;

const self = module.exports = {

  createToken: (auth) => {
    return jwt.sign({
      id: auth.id
    }, Constants.SECRET, {
      expiresIn: 60 * 120
    });
  },
 
  generateToken: (req, res, next) => {
    req.token = self.createToken(req.auth);
    next();
  },

  sendToken: (req, res) => {
    res.setHeader(X_AUTH_TOKEN, req.token);
    res.status(200).send(req.auth);
  },

  authenticate: expressJwt({
    secret: Constants.SECRET,
    requestProperty: REQUEST_PROPERTY,
    getToken: (req) => {
      if (req.headers[X_AUTH_TOKEN]) {
        return req.headers(X_AUTH_TOKEN);
      }
      return null;
    }
  })

}
