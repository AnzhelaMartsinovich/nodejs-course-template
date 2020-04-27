const Task = require('./task.model');

const getAllRep = async () => {
  return Task.find({});
};

const getByIdRep = async (boardId, id) => {
  return Task.findById({ boardId, _id: id });
};

const createRep = async taskData => {
  return Task.create(taskData);
};

const updateRep = async (id, boardData) => {
  return Task.updateOne({ _id: id }, boardData);
};

const deleteRep = async (boardId, id) => {
  return Task.deleteOne({ boardId, _id: id });
};

const deleteUserRep = async id => {
  return Task.updateMany({ userId: id }, { userId: null });
};

const deleteByBoardRep = async id => {
  return Task.deleteMany({ boardId: id });
};

module.exports = {
  getAllRep,
  getByIdRep,
  createRep,
  updateRep,
  deleteRep,
  deleteUserRep,
  deleteByBoardRep
};
