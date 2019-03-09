const pool = require('../config/pool');

async function createTables() {
  try {
    await pool.execute('create table sample(id tinyint(255) primary key auto_increment, name varchar(255) not null)');
  } catch (err) {
    throw err;
  } finally {
    pool.end();
  }
}
createTables();
