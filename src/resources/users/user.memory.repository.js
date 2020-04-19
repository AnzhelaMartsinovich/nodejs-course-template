// работа с хранилищем данных
const User = require('./user.model');
const usersJSON = require('./../../data/users.json');

let users = usersJSON.map(user => new User(user));

// GET
const getAllRep = async () => {
  return users;
};

const getByIdRep = async id => {
  return users.find(user => user.id === id);
};

// POST
const createRep = async userData => {
  const newUser = new User(userData);
  users.push(newUser);
  return newUser;
};

// PUT
const updateRep = async (id, userData) => {
  const i = users.findIndex(board => board.id === id);
  users[i] = { ...users[i], ...userData };
};

// DELETE
const deleteRep = async id => {
  users = users.filter(user => user.id !== id);
};

module.exports = { getAllRep, createRep, getByIdRep, updateRep, deleteRep };
