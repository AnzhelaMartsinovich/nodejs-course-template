// работа с хранилищем данных
const User = require('./user.model');
const usersJSON = require('./../../data/users.json');

// GET
const getAllRep = () => {
  const users = usersJSON.map(user => new User(user));
  return users;
};

const getByIdRep = id => {
  const users = getAllRep();
  return users.find(user => user.id === id);
};

// POST
const createUserRep = userData => {
  const newUser = new User(userData);
  usersJSON.push(newUser);
  return newUser;
};

// PUT
// const update = () => { };

// DELETE
// const deleteUser = id => {
//   const users = getAll();
//   const goalUser = users.filter(user => id !== user.id);
//   return goalUser;
//   // usersJSON.pop(goalUser);
//   // console.log(goalUser);
// };
// deleteUser();

module.exports = { getAllRep, getByIdRep, createUserRep };
