const usersRepo = require('./boards.memory.repository');

const getAll = () => usersRepo.getAll();

module.exports = { getAll };
