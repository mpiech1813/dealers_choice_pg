const express = require('express');
const pg = require('pg');

const app = express();
const PORT = process.env.PORT || 1813;
const conn = new pg.Client(
  process.env.DATABASE_URL || 'postgres://localhost/alien'
);

conn.connect();

const allAliens = 'SELECT * FROM xeno';

app.get('/', async (req, res, next) => {
  try {
    const data = await conn.query(allAliens);
    const list = data.rows;
    const HTML = `
        <html>
            <head></head>
            <body>
                <h1>hello</h1>
                <ul>
                ${list
                  .map((alien) => {
                    return `<li><a>${alien.name}</a></li>`;
                  })
                  .join('')}
                </ul>
            </body>
        </html>
        `;

    res.send(HTML);
  } catch (error) {
    console.log(error);
  }
});

const syncAndSeed = async () => {};

const run = () => {
  app.listen(PORT, () => console.log(`listening on ${PORT}`));
};

run();
