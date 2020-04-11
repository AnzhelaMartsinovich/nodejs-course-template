const {
  getAllRep,
  getByIdRep,
  createRep,
  updateRep,
  deleteRep
} = require('./board.memory.repository');

const getAll = () => getAllRep();
const getById = id => getByIdRep(id);
const create = boardData => createRep(boardData);
const update = (id, boardData) => updateRep(id, boardData);
const deleteById = id => deleteRep(id);

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById
};
