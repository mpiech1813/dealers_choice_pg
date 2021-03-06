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
                      return `<li><a href='/${alien.id}'>${alien.name}</a></li>`;
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
    const singleAlien = `SELECT name AS "Name", size AS "Size", growth as "Growth" FROM xeno WHERE id = ${idNum}`;
    const data = await conn.query(singleAlien);
    const details = data.rows;
    const HTML = `
        <html>
          <body>
            <h1>${details[0].Name}</h1>
            <p>Size: ${details[0].Size}</p> <p>Growth Stage: ${details[0].Growth} </p>
          </body>
        </html>
      `;
    res.send(HTML);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
