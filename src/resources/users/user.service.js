const {
  getAllRep,
  getByIdRep,
  createRep,
  updateRep,
  deleteRep
} = require('./user.db.repository');
const tasksService = require('../tasks/task.service');

const getAll = async () => await getAllRep();
const getById = async id => await getByIdRep(id);
const create = userData => createRep(userData);
const update = (id, userData) => updateRep(id, userData);
const deleteById = async id => {
  const result = await deleteRep(id);
  await tasksService.resetUser(id);
  return result;
};

module.exports = { getAll, getById, create, update, deleteById };
