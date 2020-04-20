const router = require('express').Router({ mergeParams: true });

const Task = require('./task.model');
const { getAll, getByIdTask, create, update } = require('./task.service');

router.route('/').get(async (req, res) => {
  const allBoards = await getAll();
  res.json(allBoards.map(board => Task.toResponse(board)));
});

router.route('/:id').get(async (req, res) => {
  const id = req.params.id;
  res.json(Task.toResponse(await getByIdTask(id)));
});

router.route('/').post(async (req, res) => {
  const body = req.body;
  res.json(Task.toResponse(await create(body)));
});
//
router.route('/:id').put(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  res.json(Task.toResponse(await update(id, body)));
});

module.exports = router;
