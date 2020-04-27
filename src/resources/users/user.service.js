const {
  getAllRep,
  getByIdRep,
  createRep,
  updateRep,
  deleteRep,
  getByLoginRep
} = require('./user.db.repository');
const tasksService = require('../tasks/task.service');

const getAll = async () => await getAllRep();
const getById = async id => await getByIdRep(id);
const create = userData => createRep(userData);
const update = (id, userData) => updateRep(id, userData);
const deleteById = async id => {
  await tasksService.resetUser(id);
  return await deleteRep(id);
};

const getUserByLogin = login => getByLoginRep(login);

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  getUserByLogin
};
