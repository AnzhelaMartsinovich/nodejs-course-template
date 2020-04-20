const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const tasksRouter = require('./resources/tasks/task.router');
const boardsRouter = require('./resources/boards/board.router');
const { INTERNAL_SERVER_ERROR, getStatusText } = require('http-status-codes');

const logger = require('./loggers/logger');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

// app.use('/', (req, res, next) => {
//   logger.info(
//     JSON.stringify({
//       url: req.url,
//       queryParam: req.query,
//       body: req.body
//     })
//   );
//   next();
// });

app.use('/', (err, req, res, next) => {
  if (err) {
    logger.error(getStatusText(INTERNAL_SERVER_ERROR));
    return;
  }
  next();
});

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/users', userRouter);
app.use('/boards/:boardId/tasks', tasksRouter);
app.use('/boards', boardsRouter);

module.exports = app;
