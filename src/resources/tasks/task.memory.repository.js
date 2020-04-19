const Task = require('./task.model');
const tasksJSON = require('./../../data/tasks.json');

let tasks = tasksJSON.map(user => new Task(user));

const getAllRep = async () => {
  return tasks;
};

const getByIdRep = async boardId => {
  return tasks.find(task => task.id === boardId);
};

const createRep = async task => {
  const newTask = new Task(task);
  tasks.push(newTask);
  return newTask;
};

const updateRep = async (id, taskData) => {
  const task = tasks.find(item => item.id === id);
  Object.assign(task, taskData);
  return task;
};

const updateByIdRep = async userId => {
  tasks = tasks.map(task => {
    if (task.userId === userId) {
      task.userId = null;
    }
    return task;
  });
};

const deleteByIdRep = async id => {
  tasks = tasks.filter(task => task.id !== id);
};

const deleteByBoardIdRep = async boardId => {
  tasks = tasks.filter(task => task.boardId !== boardId);
};

module.exports = {
  getAllRep,
  getByIdRep,
  createRep,
  updateRep,
  updateByIdRep,
  deleteByIdRep,
  deleteByBoardIdRep
};
