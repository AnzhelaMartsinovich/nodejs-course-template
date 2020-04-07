const Task = require('./tasks.model');
const tasksJSON = require('./../../data/tasks.json');

// GET
const getAllRep = boardId => {
  const tasks = tasksJSON.map(user => new Task(user));
  console.log(`boardId ${boardId}`);
  return tasks.filter(task => task.boardId === boardId);
};

const getByIdRep = id => {
  const tasks = getAllRep();
  return tasks.find(task => task.id === id);
};

// POST
// const createUserRep = userData => {
//   const newUser = new Task(userData);
//   usersJSON.push(newUser);
//   return newUser;
// };

module.exports = { getAllRep, getByIdRep };
