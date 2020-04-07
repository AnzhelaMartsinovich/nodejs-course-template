const { getAllRep, getByIdRep } = require('./tasks.memory.repository');

const getAll = boardId => getAllRep(boardId);
console.log(getAll());
const getById = id => getByIdRep(id);

module.exports = { getAll, getById };
