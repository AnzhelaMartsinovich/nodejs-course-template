const Task = require('./task.model');

const getAllRep = async () => {
  return Task.find({});
};

const getByIdRep = async id => {
  return Task.findById(id);
};

const createRep = async boardData => {
  return Task.create(boardData);
};

const updateRep = async (id, boardData) => {
  return Task.updateOne({ _id: id }, boardData);
};

module.exports = {
  getAllRep,
  getByIdRep,
  createRep,
  updateRep
};
