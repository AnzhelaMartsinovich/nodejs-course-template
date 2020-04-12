const { PORT } = require('./common/config');
const app = require('./app');
const logger = require('./loggers/logger');

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);

process
  .on('uncaughtException', error => {
    logger.error(`Uncaught exception ${error.message}`);
  })
  .on('unhandledRejection', reason => {
    logger.error(`Unhandled rejection ${reason.message}`);
  });

// from chat RRS
// uncaughtException
setTimeout(() => {
  throw new Error('Oooops!');
}, 1500);

// unhandledRejection
setTimeout(() => {
  Promise.reject(new Error('Oooops!'));
}, 1500);
