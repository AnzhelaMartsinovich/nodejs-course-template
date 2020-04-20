const mongoose = require('mongoose');
const User = require('./../resources/users/user.model');
const { MONGO_CONNECTION_STRING } = require('./../common/config');
const usersJSON = require('./../data/users.json');

const users = usersJSON.map(user => new User(user));

const connectToDB = cb => {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  // mongoose.connect(
  //   'mongodb+srv://admin:admin@cluster0-bmwwz.mongodb.net/rest?retryWrites=true&w=majority',
  //   {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true
  //   }
  // );

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('we are connected!');
    db.dropDatabase();
    users.forEach(user => user.save());
    cb();
  });
};

module.exports = connectToDB;
