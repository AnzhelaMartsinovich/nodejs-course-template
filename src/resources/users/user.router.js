const router = require('express').Router();

const User = require('./user.model');
const {
  getAll,
  getById,
  create,
  update,
  deleteById
} = require('./user.service');
const { getByIdTask } = require('../tasks/task.service');

router.route('/').get(async (req, res) => {
  res.json(await getAll());
});

router.route('/:id').get(async (req, res) => {
  const id = req.params.id;
  res.json(User.toResponse(await getById(id)));
});

router.route('/').post(async (req, res) => {
  const body = req.body;
  res.json(User.toResponse(await create(body)));
});

router.route('/:id').put(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  res.json(User.toResponse(await update(id, body)));
});

router.route('/:id').delete(async (req, res) => {
  const id = req.params.id;
  await getByIdTask(id);
  res.json(User.toResponse(await deleteById(id)));
});

module.exports = router;
