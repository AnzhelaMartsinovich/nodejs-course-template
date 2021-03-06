// работа с запросом и ответом
const router = require('express').Router();
const User = require('./user.model');
const {
  getAll,
  getById,
  create,
  deleteById,
  update
} = require('./user.service');
const { updateByUserId } = require('../tasks/task.service');

router.route('/').get(async (req, res) => {
  res.json(await getAll());
});

router.route('/:id').get(async (req, res) => {
  const id = req.params.id;
  res.json(await getById(id));
});

router.route('/').post(async (req, res) => {
  const body = req.body;
  const newUser = await create(body);
  res.json(User.toResponse(newUser));
});

router.route('/:id').put(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  res.json(await update(id, body));
});

router.route('/:id').delete(async (req, res) => {
  const id = req.params.id;
  await updateByUserId(id);
  res.json(await deleteById(id));
});

module.exports = router;
