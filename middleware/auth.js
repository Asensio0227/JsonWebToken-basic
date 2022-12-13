const jwt = require('jsonwebtoken');
const { UnAuthorizedError } = require('../../errors');

const authenticationMiddleware = async (req, res, next) => {
  console.log('hello world ');
  next();
}

module.exports = authenticationMiddleware;