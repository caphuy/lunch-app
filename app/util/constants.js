'use strict';

module.exports = {

  // DB path
  DB_PATH: 'mongodb://localhost/lunchdb',

  // Port
  PORT: process.env.PORT || 9000,

  // Authentication
  SECRET: 'my-lunch-app',
  HEADER_AUTH: 'x-auth-token',

  // Error code
  ERR_USERNAME: 'E001',
  ERR_PASSWORD: 'E002',

}