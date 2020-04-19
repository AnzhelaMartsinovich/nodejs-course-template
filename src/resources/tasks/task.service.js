const {
  getAllRep,
  getByIdRep,
  createRep,
  updateRep,
  updateByIdRep,
  deleteByIdRep,
  deleteByBoardIdRep
} = require('./task.memory.repository');

const getAll = () => getAllRep();
const getById = boardId => getByIdRep(boardId);
const create = task => createRep(task);
const update = (taskId, boardId, params) => updateRep(taskId, boardId, params);
const updateByUserId = userId => updateByIdRep(userId);
const deleteById = id => deleteByIdRep(id);
const deleteByBoardId = boardId => deleteByBoardIdRep(boardId);

module.exports = {
  getAll,
  create,
  getById,
  update,
  updateByUserId,
  deleteById,
  deleteByBoardId
};
