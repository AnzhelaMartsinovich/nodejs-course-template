const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const allBoards = await boardService.getAll();
  res.json(allBoards.map(board => Board.toResponse(board)));
});

router.route('/:id').get(async (req, res) => {
  const id = req.params.id;
  res.json(Board.toResponse(await boardService.getById(id)));
});

router.route('/').post(async (req, res) => {
  const body = req.body;
  res.json(Board.toResponse(await boardService.create(body)));
});

router.route('/:id').put(async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  res.json(Board.toResponse(await boardService.update(id, body)));
});

module.exports = router;
