// работа с хранилищем данных
const User = require('./user.model');
const usersJSON = require('./../../data/users.json');

const usersArr = usersJSON.map(user => new User(user));

const getAll = () => {
  return usersArr;
};

const getById = () => {
  const users = getAll();
  const id = users.find(user => user.id);
  return id;
};

module.exports = { getAll, getById };
