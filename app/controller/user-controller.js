'use strict';

const User = require('../model/user'),
      authService = require('../service/auth-service'),
      reponseFactory = require('../factory/response-factory'),
      commonFactory = require('../factory/common-factory'),
      Constanst = require('../util/constants')
      ;

const USERNAME = 'username',
      PASSWORD = 'password';

module.exports = {

  signin: (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.signin(username, password).then(data => {
      if (data === -1) {
        reponseFactory.errorResponse(res, 400, 400, [
          commonFactory.errorBean(Constanst.ERR_USERNAME, USERNAME)
        ]);
      } else if (data === 0) {
        reponseFactory.errorResponse(res, 400, 400, [
          commonFactory.errorBean(Constanst.ERR_PASSWORD, PASSWORD)
        ]);
      } else {
        const token = authService.createToken({id: data});
        req.token = token; 
        authService.sendToken(req, res);
      }
    }).catch(err => {
      reponseFactory.errorResponse(res, 500, 500, err);
    });
  },

  signup: (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.signup({
      username: username,
      password: password
    }).then(data => {
      const token = authService.createToken({id: data});
      req.token = token;
      authService.sendToken(req, res);
    }).catch(err => {
      reponseFactory.errorResponse(res, 500, 500, err);
    });
  },

  authMe: (req, res) => {
    res.status(200).json();
  }

}