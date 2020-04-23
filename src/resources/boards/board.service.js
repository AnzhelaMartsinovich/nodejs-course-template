const {
  getAllRep,
  getByIdRep,
  createRep,
  updateRep,
  deleteRep
} = require('./board.db.repository');
const tasksService = require('../tasks/task.service');

const getAll = async () => await getAllRep();
const getById = async id => await getByIdRep(id);
const create = boardData => createRep(boardData);
const update = (id, boardData) => updateRep(id, boardData);
const deleteById = async id => {
  const result = await deleteRep(id);
  await tasksService.removeByBoard(id);

  return result;
};

module.exports = { getAll, getById, create, update, deleteById };
