'use strict';
const mongoose = require('mongoose');


const user = mongoose.model('User', mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
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

const friend = mongoose.model('Friend', mongoose.Schema({
  requester: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  confirmer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
}));

const group = mongoose.model('Group', mongoose.Schema({
  company: String,
  location: {
    country: String,
    province: String,
    street: String
  }
}));

const dish = mongoose.model('Dish', mongoose.Schema({
  name: String,
  isDeleted: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: new Date()
  },
  updated: {
    type: Date,
    default: new Date()
  },
//   location: {
//     country: String,
//     province: String,
//     street: String
//   }
}));

const piece = mongoose.model('Piece', mongoose.Schema({
    dish: mongoose.Schema.Types.ObjectId,
    fillStyle: String,
    
}));

const message = mongoose.model('Message', mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  send_date: {
    type: Date,
    default: new Date()
  },
  status: {
    type: Boolean,
    required: true
  },
  from: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  isDeleted: {
    type: mongoose.Schema.Types.ObjectId,
    default: false
  }
}));

const listGroupDish = mongoose.model('ListGroupDish', mongoose.Schema({
  group: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  dish: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
}));

const spin = mongoose.model('Spin', mongoose.Schema({
  won: {
    type: Number,
    required: true
  },
  user: mongoose.Schema.Types.ObjectId,
  group: mongoose.Schema.Types.ObjectId,
  created: {
    type: Date,
    default: new Date()
  }
}));

module.exports = {
    spin: spin,
    dish: dish
}