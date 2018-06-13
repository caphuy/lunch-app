'use strict';

module.exports = {

  errorResponse: (res, errCode, httpStatusCode, errors) => {
    httpStatusCode = httpStatusCode || 500;
    res.status(httpStatusCode).json({
      code: errCode,
      errors: errors
    });
  },

  dataResponse: (res, code, httpStatusCode, data) => {
    httpStatusCode = httpStatusCode || 200;
    res.status(httpStatusCode).json({
      code: code,
      data: data
    });
  }

}