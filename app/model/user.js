'use strict';

const mongoose = require('mongoose');

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
}

module.exports = User;