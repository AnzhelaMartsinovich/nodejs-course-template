const router = require('express').Router();
// const Task = require('./tasks.model');
const { getAll, getById } = require('./tasks.service');

router.route('/').get(async (req, res) => {
  const tasks = await getAll();
  res.json(tasks);
});

router.route('/:boardId').get(async (req, res) => {
  const boardId = req.params.boardId;
  const task = await getById(boardId);
  res.json(task);
});

// router.route('/').post(async (req, res) => { });

module.exports = router;
