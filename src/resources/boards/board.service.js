const {
  getAllRep,
  getByIdRep,
  createRep,
  updateRep
} = require('./board.db.repository');

const getAll = () => getAllRep();
const getById = id => getByIdRep(id);
const create = boardData => createRep(boardData);
const update = (id, boardData) => updateRep(id, boardData);

module.exports = { getAll, getById, create, update };
