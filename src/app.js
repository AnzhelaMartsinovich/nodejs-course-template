const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const loginRouter = require('./resources/login/login.router');
const { INTERNAL_SERVER_ERROR, getStatusText } = require('http-status-codes');
const logger = require('./loggers/logger');
const authorization = require('./helpers/authorization');

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

app.use('/', (req, res, next) => {
  logger.info(
    JSON.stringify({
      url: req.url,
      queryParam: req.query,
      body: req.body
    })
  );
  next();
});

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/users', authorization, userRouter);
app.use('/boards', authorization, boardRouter);
app.use('/boards/:boardId/tasks', taskRouter);
app.use('/login', loginRouter);

app.use((err, req, res, next) => {
  if (err) {
    const { statusCode, message } = err;

    logger.error(
      `status: ${statusCode ? statusCode : INTERNAL_SERVER_ERROR} method: ${
      /* eslint-disable */
      req.method
      } url: ${req.url} message: ${
      message ? message : getStatusText(INTERNAL_SERVER_ERROR)
      }`
    );
  }

  next();
});

module.exports = app;
