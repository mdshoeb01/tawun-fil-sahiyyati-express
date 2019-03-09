const mysql = require('mysql2/promise');
const config = require('../config/create-db-config');

const pool = mysql.createPool(config);

async function createDb() {
  await pool.execute('create database masjid');
  pool.end();
}
createDb();
