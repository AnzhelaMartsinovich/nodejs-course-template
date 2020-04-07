// бизнес - логика
const {
  getAllRep,
  getByIdRep,
  createUserRep
} = require('./user.memory.repository');

const getAll = () => getAllRep();
const getById = id => getByIdRep(id);
const createUser = newUser => createUserRep(newUser);

module.exports = { getAll, getById, createUser };
