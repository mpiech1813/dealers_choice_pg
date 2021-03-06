const express = require('express');
const syncAndSeed = require('./db/syncAndSeed');
const conn = require('./db/db');

const app = express();
const PORT = process.env.PORT || 1813;

app.use('/', require('./routes/routes'));

const run = async () => {
  try {
    app.listen(PORT, () => console.log(`listening on ${PORT}`));
    await conn.connect();
    await syncAndSeed();
  } catch (error) {
    console.log(error);
  }
};

run();
