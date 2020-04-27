const User = require('./user.model');

// GET
const getAllRep = async () => {
  return User.find({});
};

const getByIdRep = async id => {
  return User.findById(id);
};

// POST
const createRep = async userData => {
  return User.create(userData);
};

// PUT
const updateRep = async (id, userData) => {
  return User.updateOne({ _id: id }, userData);
};

// DELETE
const deleteRep = async id => {
  return (await User.deleteOne({ _id: id })).deletedCount;
};

const getByLoginRep = login => User.findOne({ login });

module.exports = {
  getAllRep,
  getByIdRep,
  createRep,
  updateRep,
  deleteRep,
  getByLoginRep
};
