const router = require('express').Router();
const Board = require('./board.model');
const {
  getAll,
  getById,
  create,
  update,
  deleteById
} = require('./board.service');
const { Handler } = require('../../helpers/error');

router.route('/').get(async (req, res) => {
  const allBoards = await getAll();
  res.json(allBoards.map(board => Board.toResponse(board)));
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const id = req.params.id;
    const board = await getById(id);

    if (!board) {
      throw new Handler(404, 'Board not found');
    }
    res.status(200).json(Board.toResponse(board));
  } catch (err) {
    return next(err);
  }
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
