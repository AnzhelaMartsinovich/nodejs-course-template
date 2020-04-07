const uuid = require('uuid');

class Columns {
  constructor({ id = uuid(), title = 'Backlog', order = '1' } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  static toResponse(column) {
    const { id, title, order } = column;
    return { id, title, order };
  }
}

module.exports = Columns;
