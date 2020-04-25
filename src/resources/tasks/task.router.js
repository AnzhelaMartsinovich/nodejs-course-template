const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const {
  getAll,
  getById,
  create,
  update,
  deleteById
} = require('./task.service');
const { Handler } = require('../../helpers/error');

router.route('/').get(async (req, res) => {
  const allBoards = await getAll();
  res.json(allBoards.map(board => Task.toResponse(board)));
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const task = await getById(req.params);

    if (!task) {
      throw new Handler(404, 'Task not found');
    }
    res.status(200).json(Task.toResponse(task));
  } catch (err) {
    return next(err);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const task = await create(req.params.boardId, req.body);

    if (!task) {
      throw new Handler(400, 'Bad request');
    }
    res.status(200).json(Task.toResponse(task));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').put(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  res.json(Task.toResponse(await update(id, body)));
});

router.route('/:id').delete(async (req, res) => {
  res.json(Task.toResponse(await deleteById(req.params)));
});

module.exports = router;
