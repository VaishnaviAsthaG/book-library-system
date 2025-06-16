const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'book_library',
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL Database');
});

module.exports = connection;
