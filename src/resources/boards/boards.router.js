const router = require('express').Router();
const { getAll, getById, createBoard } = require('./boards.service');

router.route('/').get(async (req, res) => {
  const boards = await getAll();
  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  const id = req.params.id;
  const board = await getById(id);
  res.json(board);
});

router.route('/').post(async (req, res) => {
  const body = req.body;
  const newBoard = await createBoard(body);
  res.json(newBoard);
});

module.exports = router;
