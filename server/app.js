require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

// Use CORS and express.json middleware
app.use(cors());
app.use(express.json());

// Create a MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define a test route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to Pete's Pantry API!" });
});

// Define more routes here to interact with the database

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
