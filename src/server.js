const connectToDB = require('./db/db.client');
const { PORT } = require('./common/config');
const app = require('./app');
const logger = require('./loggers/logger');

connectToDB(() => {
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});

process
  .on('uncaughtException', error => {
    logger.error(`Uncaught exception ${error.message}`);
  })
  .on('unhandledRejection', reason => {
    logger.error(`Unhandled rejection ${reason.message}`);
  });
