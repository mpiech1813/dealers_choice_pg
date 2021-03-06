const conn = require('./db');

const syncAndSeed = async () => {
  const SQL = `
    TRUNCATE TABLE xeno;
  
    CREATE TABLE xeno (
      id SERIAL PRIMARY KEY,
      name TEXT, 
      size TEXT,
      growth TEXT
    );
    
    INSERT INTO xeno (name, size, growth) VALUES ('Egg', 'medium', 'egg');
    INSERT INTO xeno (name, size, growth) VALUES ('Facehugger', 'small', 'young');
    INSERT INTO xeno (name, size, growth) VALUES ('Drone', 'large', 'adult');
    INSERT INTO xeno (name, size, growth) VALUES ('Queen', 'huge', 'adult');
    INSERT INTO xeno (name, size, growth) VALUES ('Runner', 'medium', 'adult');
    INSERT INTO xeno (name, size, growth) VALUES ('Warrior', 'large', 'adult');
    INSERT INTO xeno (name, size, growth) VALUES ('Predalien', 'large', 'Adult');
    INSERT INTO xeno (name, size, growth) VALUES ('Warrior', 'large', 'adult');
    INSERT INTO xeno (name, size, growth) VALUES ('Chestburster', 'small', 'juvenile');
    INSERT INTO xeno (name, size, growth) VALUES ('Pretorian', 'huge', 'adult');
    INSERT INTO xeno (name, size, growth) VALUES ('Bull alien', 'huge', 'adult');
    INSERT INTO xeno (name, size, growth) VALUES ('Scoprion Alien', 'medium', 'adult');
    INSERT INTO xeno (name, size, growth) VALUES ('Arachnid Alien', 'medium', 'adult');
      `;

  await conn.query(SQL);
};

module.exports = syncAndSeed;
