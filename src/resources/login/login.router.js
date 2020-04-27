const router = require('express').Router();
const handler = require('../../helpers/error');
const loginService = require('./login.service');
const { FORBIDDEN, LOCKED } = require('http-status-codes');
const userService = require('../users/user.service');

router.route('/').post(async (req, res) => {
  const user = await userService.getUserByLogin(req.body.login);
  if (user) {
    const isValid = await loginService.isPasswordValid(
      user.password,
      req.body.password
    );
    if (isValid) {
      const token = loginService.getToken(user._id, user.login);
      res.header('Authorization', token).send({ token });
    } else {
      handler(res, LOCKED, 'incorrect password');
    }
  } else {
    handler(res, FORBIDDEN, 'user not authorized');
  }
});

module.exports = router;
