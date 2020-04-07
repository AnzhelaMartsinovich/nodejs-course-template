const {
  getAllRep,
  getByIdRep,
  createBoardRep
} = require('./boards.memory.repository');

const getAll = () => getAllRep();
const getById = id => getByIdRep(id);
const createBoard = newBoard => createBoardRep(newBoard);

module.exports = { getAll, getById, createBoard };
