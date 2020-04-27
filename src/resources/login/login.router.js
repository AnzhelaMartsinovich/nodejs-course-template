const router = require('express').Router();
const handler = require('../../helpers/error');
const { getByLogin } = require('../users/user.service');
const { FORBIDDEN } = require('http-status-codes');
const loginService = require('./login.service');

router.route('/').post(async (req, res) => {
  const login = req.body.login;
  const user = await getByLogin(login);

  if (user) {
    loginService(user, res, req);
  } else {
    handler(res, FORBIDDEN, 'access is denied');
  }
});

module.exports = router;
