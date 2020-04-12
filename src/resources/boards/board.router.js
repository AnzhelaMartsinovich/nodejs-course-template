const router = require('express').Router();
const {
  getAll,
  getById,
  create,
  update,
  deleteById
} = require('./board.service');
const { deleteByBoardId } = require('../tasks/task.service');

router.route('/').get(async (req, res) => {
  res.json(await getAll());
});

router.route('/:id').get(async (req, res) => {
  const id = req.params.id;
  const board = await getById(id);
  if (board) {
    res.json(board);
  } else {
    res.status(404).json({ message: 'Not found' });
  }
});

router.route('/').post(async (req, res) => {
  const body = req.body;
  res.json(await create(body));
});

router.route('/:id').put(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  res.json(await update(id, body));
});

router.route('/:id').delete(async (req, res) => {
  const id = req.params.id;
  await deleteByBoardId(id);
  res.json(await deleteById(id));
});

module.exports = router;
