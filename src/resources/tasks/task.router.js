const router = require('express').Router({ mergeParams: true });
const {
  getAll,
  create,
  getById,
  update,
  deleteById
} = require('./task.service');
const Task = require('./task.model');

router.route('/').get(async (req, res) => {
  res.json(await getAll());
});

router.route('/:id').get(async (req, res) => {
  const id = req.params.id;
  const task = await getById(id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

router.route('/').post(async (req, res) => {
  const task = new Task({ ...req.body, boardId: req.params.boardId });
  res.json(await create(task));
});

router.route('/:id').put(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  res.json(await update(id, body));
});

router.route('/:id').delete(async (req, res) => {
  const id = req.params.id;
  res.json(await deleteById(id));
});

module.exports = router;
