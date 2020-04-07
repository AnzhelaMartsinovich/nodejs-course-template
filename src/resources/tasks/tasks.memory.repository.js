const Task = require('./tasks.model');
const tasksJSON = require('./../../data/tasks.json');

const tasks = tasksJSON.map(user => new Task(user));
// GET
const getAllRep = () => {
  return tasks;
};

const getByIdRep = boardId => {
  return tasks.find(task => task.id === boardId);
};

// POST
// const createTaskRep = task => {
// };

module.exports = { getAllRep, getByIdRep };
