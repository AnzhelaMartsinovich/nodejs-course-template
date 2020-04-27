const {
  getAllRep,
  getByIdRep,
  createRep,
  updateRep,
  deleteRep,
  delUsersRep,
  removeByBoardRep
} = require('./task.db.repository');
const Task = require('./task.model');

const getAll = () => getAllRep();
const getById = async params => await getByIdRep(params.boardId, params.id);
const create = async (boardId, taskData) => {
  const task = new Task({ ...taskData, boardId });
  return await createRep(task);
};
const update = (id, task) => updateRep(id, task);
const deleteById = async params => await deleteRep(params.boardId, params.id);
const resetUser = async id => await delUsersRep(id);
const removeByBoard = async id => await removeByBoardRep(id);

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  resetUser,
  removeByBoard
};
