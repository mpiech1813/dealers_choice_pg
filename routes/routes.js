const router = require('express').Router();
const conn = require('../db/db');

const allAliens = 'SELECT * FROM xeno';

router.get('/', async (req, res, next) => {
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

router.get('/:id', async (req, res, next) => {
  try {
    const idNum = req.params.id;
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
