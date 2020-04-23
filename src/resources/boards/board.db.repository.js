const Board = require('./board.model');

const getAllRep = async () => {
  return Board.find({});
};

const getByIdRep = async id => {
  return Board.findById(id);
};

const createRep = async boardData => {
  return Board.create(boardData);
};

const updateRep = async (id, boardData) => {
  return Board.updateOne({ _id: id }, boardData);
};

const deleteRep = async id => {
  return (await Board.deleteOne({ _id: id })).deletedCount;
};

module.exports = { getAllRep, getByIdRep, createRep, updateRep, deleteRep };
