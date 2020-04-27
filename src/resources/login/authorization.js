const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../../common/config');
const handler = require('../../helpers/error');
const { UNAUTHORIZED } = require('http-status-codes');

const authorization = (req, res, next) => {
  const token = req.header('Authorization');
  try {
    req.user = jwt.verify(token.slice(7), JWT_SECRET_KEY);
  } catch (err) {
    handler(res, UNAUTHORIZED, 'user is unauthorized');
    return;
  }
  next();
};

module.exports = authorization;
