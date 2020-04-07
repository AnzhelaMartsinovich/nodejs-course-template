const Board = require('./boards.model');
const boardsJSON = require('./../../data/boards.json');

const boards = boardsJSON.map(board => new Board(board));
// GET
const getAllRep = () => {
  return boards;
};

const getByIdRep = id => {
  return boards.find(board => board.id === id);
};

// POST
const createBoardRep = board => {
  const newBoard = new Board(board);
  boardsJSON.push(newBoard);
  return newBoard;
};

module.exports = { getAllRep, getByIdRep, createBoardRep };
