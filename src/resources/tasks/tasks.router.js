const router = require('express').Router();
const Tasks = require('./tasks.model');
const { getAll, getById } = require('./tasks.service');

router.route('/:boardId/tasks').get(async (req, res) => {
  const tasks = await getAll();
  // res.json(tasks);
  res.json(tasks.map(Tasks.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const id = req.params.id;
  const task = await getById(id);
  res.json(Tasks.toResponse(task));
});

module.exports = router;
