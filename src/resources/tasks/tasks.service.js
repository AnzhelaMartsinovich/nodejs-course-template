const { getAllRep, getByIdRep } = require('./tasks.memory.repository');

const getAll = () => getAllRep();
const getById = boardId => getByIdRep(boardId);
// const createTask = task => createTaskRep(task);

module.exports = { getAll, getById };
