const jwt = require('jsonwebtoken');
const handler = require('./../helpers/error');
const { UNAUTHORIZED } = require('http-status-codes');
const { JWT_SECRET_KEY, HEADER_AUTHORIZATION } = require('./../common/config');

const authorization = (req, res, next) => {
  try {
    req.user = jwt.verify(
      req.header(HEADER_AUTHORIZATION).slice(7),
      JWT_SECRET_KEY
    );
  } catch (err) {
    handler(res, UNAUTHORIZED, 'user is unauthorized!');
    return;
  }
  next();
};

module.exports = authorization;
