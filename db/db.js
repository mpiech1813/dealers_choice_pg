const pg = require('pg');

const conn = new pg.Client(
  process.env.DATABASE_URL || 'postgres://localhost/alien'
);

module.exports = conn;
