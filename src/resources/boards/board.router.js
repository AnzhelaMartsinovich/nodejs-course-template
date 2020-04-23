const router = require('express').Router();
const Board = require('./board.model');
const { getAll, create, update, deleteById } = require('./board.service');

router.route('/').get(async (req, res) => {
  const allBoards = await getAll();
  res.json(allBoards.map(board => Board.toResponse(board)));
});

router.route('/').post(async (req, res) => {
  const body = req.body;
  res.json(Board.toResponse(await create(body)));
});

router.route('/:id').put(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  res.json(Board.toResponse(await update(id, body)));
});

router.route('/:id').delete(async (req, res) => {
  const id = req.params.id;
  res.json(Board.toResponse(await deleteById(id)));
});

module.exports = router;
