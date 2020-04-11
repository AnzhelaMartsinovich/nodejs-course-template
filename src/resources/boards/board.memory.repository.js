const Board = require('./board.model');
const boardsJSON = require('./../../data/boards.json');

let boards = boardsJSON.map(board => new Board(board));

const getAllRep = async () => {
  return boards;
};

const getByIdRep = async id => {
  return boards.find(board => board.id === id);
};

const createRep = async boardData => {
  const newBoard = new Board(boardData);
  boards.push(newBoard);
  return newBoard;
};

const updateRep = async (id, boardData) => {
  const i = boards.findIndex(board => board.id === id);
  boards[i] = { ...boards[i], ...boardData };
};

const deleteRep = async id => {
  boards = boards.filter(board => board.id !== id);
};

module.exports = { getAllRep, getByIdRep, createRep, updateRep, deleteRep };
