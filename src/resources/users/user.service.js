const {
  getAllRep,
  getByIdRep,
  createRep,
  updateRep,
  deleteRep
} = require('./user.db.repository');

const getAll = () => getAllRep();
const getById = id => getByIdRep(id);
const create = userData => createRep(userData);
const update = (id, userData) => updateRep(id, userData);
const deleteById = id => deleteRep(id);

module.exports = { getAll, getById, create, update, deleteById };
