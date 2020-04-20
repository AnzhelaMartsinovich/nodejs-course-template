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

module.exports = { getAllRep, getByIdRep, createRep, updateRep };
