const express = require('express'),
      router = express.Router(),
      model = require('../model/model'),
      userController = require('../controller/user-controller'),
      authService = require('../service/auth-service');

router.get('/auth/me', authService.authenticate, userController.authMe);

router.post('/signin', userController.signin);

router.post('/signup', userController.signup);

router.get('/spin', (req, res) => {
  const won = Math.floor(Math.random() * 360);
  res.json({
    status: 1,
    won: won
  });
});

router.get('/get_dishes', async (req, res) => {
    model.dish.find().then(data => {
        res.json({
            status: 1,
            dishes: data
        });
    }).catch(e => {
        res.json({
            status: 0,
            error: e
        });
    });
});

router.post('/add_dish', async (req, res) => {
    let name = req.body.name;
    model.dish.create({
        name: name
    }).then(data => {
        res.json({
            status: 1,
            data: data
        });
    }).catch(e => {
        res.json({
            status: 0,
            error: e
        });
    });
});

module.exports = router;