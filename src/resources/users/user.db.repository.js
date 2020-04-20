const User = require('./user.model');

// GET
const getAllRep = async () => {
  return User.find({});
};

const getByIdRep = async id => {
  return User.findById(id);
};

// POST
const createRep = async user => {
  return User.create(user);
};

// PUT
const updateRep = async (id, user) => {
  return User.updateOne({ _id: id }, user);
};

// DELETE
const deleteRep = async id => {
  return (await User.deleteOne({ _id: id })).deletedCount;
};

module.exports = { getAllRep, getByIdRep, createRep, updateRep, deleteRep };
