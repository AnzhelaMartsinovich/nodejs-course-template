const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const handler = require('../../helpers/error');
const { LOCKED } = require('http-status-codes');
const { JWT_SECRET_KEY, HEADER_AUTHORIZATION } = require('../../common/config');

const loginService = (user, res, req) => {
  const validCheck = bcrypt.compare(user.password, req.body.password);
  if (validCheck) {
    const userId = user._id;
    const login = user.login;

    const token = jwt.sign({ userId, login }, JWT_SECRET_KEY);
    res.header(HEADER_AUTHORIZATION, token).send({ token });
  } else {
    handler(res, LOCKED, 'locked, wrong data');
  }
};

module.exports = loginService;
