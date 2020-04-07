const { getAllRep, getByIdRep } = require('./tasks.memory.repository');

const getAll = () => getAllRep();
const getById = boardId => getByIdRep(boardId);

module.exports = { getAll, getById };
