const logger = require('../loggers/logger');

const handler = (res, status, message) => {
  res.status(status).json(message);
  logger.error(`status: ${status}, message: ${message}`);
};

module.exports = handler;
