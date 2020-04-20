const {
  getAllRep,
  getByIdRep,
  createRep,
  updateRep
} = require('./task.db.repository');

const getAll = () => getAllRep();
const getByIdTask = id => getByIdRep(id);
const create = boardData => createRep(boardData);
const update = (id, task) => updateRep(id, task);

module.exports = {
  getAll,
  getByIdTask,
  create,
  update
};
