// работа с запросом и ответом
const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users);
});

router.route('/:id').get(async (req, res) => {
  const id = req.params.id;
  const user = await usersService.getById(id);
  res.json(user);
});

router.route('/').post(async (req, res) => {
  const body = req.body;
  const newUser = await usersService.createUser(body);
  res.json(User.toResponse(newUser));
});

// router.route('/:id').put(async (req, res) => {
//   const updateUser = await usersService.update(req.body);
//   res.json(User.toResponse(updateUser));
// });

// router.route('/:id').delete(async (req, res) => {
//   // const deleteUser = await usersService.deleteUser(res);
//   // res.json(User.toResponse(deleteUser));
//   usersService.deleteUser(req.params.id);
//   console.log(`res ${req.params.id}`);
// });

module.exports = router;
