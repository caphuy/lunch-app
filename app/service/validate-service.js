'use strict';

module.exports = {

  validateNumber: (value) => {
    return !isNaN(value);
  },

  validateNull: (value) => {
    return (value !== void(0) && value !== null && value !== '');
  },

  validateSpecialCharacter: (value) => {
    const regex = /^[a-zA-Z0-9]+$/g;
    return !value.match(regex);
  },

  validateMaxLength: (value, length) => {
    return value.trim().length < length;
  }

}
