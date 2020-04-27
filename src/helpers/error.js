const logger = require('../loggers/logger');

const handler = (res, status, message) => {
  res.status(status).json(message);
  logger.error(message, status);
};

module.exports = handler;
