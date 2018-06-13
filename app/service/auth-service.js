const jwt = require('jsonwebtoken'),
      Constants = require('../util/constants'),
      reponseFactory = require('../factory/response-factory');

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
    res.setHeader(Constants.HEADER_AUTH, req.token);
    res.status(200).send(req.auth);
  },

  authenticate: (req, res, next) => {
    const token = req.headers[Constants.HEADER_AUTH];
    if (token !== void(0)) {
      jwt.verify(token, Constants.SECRET, (err, decoded) => {
        if (!err) {
          req.uid = decoded.id;
          next();
        } else {
          res.status(401).json(
            reponseFactory.errorResponse(res, 401, 401)
          );
        }
      });
    } else {
      res.status(401).json({
        err: 'not auth'
      });
    }
  }

}
