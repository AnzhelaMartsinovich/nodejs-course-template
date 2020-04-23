const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const {
  getAll,
  // getById,
  // create,
  update,
  deleteById
} = require('./task.service');

router.route('/').get(async (req, res) => {
  const allBoards = await getAll();
  res.json(allBoards.map(board => Task.toResponse(board)));
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
