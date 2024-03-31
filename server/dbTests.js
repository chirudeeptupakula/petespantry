const mysql = require('mysql2');

// Use your actual database configuration here
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1306',
  database: 'petespantrysql'
});

connection.connect(error => {
  if (error) {
    console.error('An error occurred while connecting to the DB:', error);
    return;
  }

  console.log('Successfully connected to the database.');
});

// Don't forget to close the connection
connection.end();
