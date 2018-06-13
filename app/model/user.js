'use strict';

const mongoose = require('mongoose'),
      bcrypt = require('bcrypt'),
      saltRounds = 10
      
      ;

var User = mongoose.model('User', mongoose.Schema({
  username: {
    type: String,
    // required: true
  },
  password: {
    type: String,
    // required: true
  },
  emails: [],
  facebook: {
    id: String,
    token: String,
    name: String,
  },
  details: {
    fullname: String,
    email: String,
    avatar: String,
    phone: String,
    address: String,
    description: String
  },
  created: {
    type: Date,
    default: new Date()
  },
  updated: {
    type: Date,
    default: new Date()
  },
  isBlocked: {
    type: Boolean,
    default: false
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
}));

User.upsertFbUser = function (accessToken, refreshToken, profile, callback) {
  let self = this;
  return self.findOneAndUpdate({
    'facebook.id': profile.id
  }, {
    $set: {
      emails: profile.emails,
      facebook: {
        id: profile.id,
        token: accessToken
      }
    }
  }, {
    upsert: true,
    new: true
  }, callback);
};

User.signup = function (user) {
  return new Promise((resolve, reject) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    user.password = bcrypt.hashSync(user.password, salt);
    const newUser = new User(user);
    newUser.save((err, userSaved) => {
      if (!err) {
        resolve(userSaved._id);
      } else {
        reject(err);
      }
    });
  });
};

User.signin = async function (username, password) {
  const self = this;
  const user = await self.findOne({
    username: username
  });
  if (user !== null) {
    if (bcrypt.compareSync(password, user.password)) {
      delete user.password;
      return user._id;
    } else {
      return -1;
    }
  } else {
    return 0;
  }
};

module.exports = User;