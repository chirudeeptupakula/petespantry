require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

// Database connection
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '1306',
  database: process.env.DB_DATABASE || 'petespantrysql'
};

app.use(express.json());

connection.connect(error => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
});

// Use the PORT environment variable, with a fallback to 3000 if not defined
const port = process.env.PORT || 3000;
console.log(process.env.DB_USER, process.env.DB_PASSWORD); // Check the output

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


// Get all categories
app.get('/api/categories', async (req, res) => {
    try {
      const connection = await mysql.createConnection(dbConfig);
      const [categories] = await connection.query('SELECT * FROM categories');
      await connection.end();
      res.json(categories);
    } catch (error) {
      res.status(500).send('Error fetching categories: ' + error.message);
    }
  });
  
  // Get subcategories for a specific category
  app.get('/api/subcategories/:categoryId', async (req, res) => {
    const categoryId = req.params.categoryId;
    try {
      const connection = await mysql.createConnection(dbConfig);
      const [subcategories] = await connection.query(
        'SELECT * FROM subcategories WHERE category_id = ?',
        [categoryId]
      );
      await connection.end();
      res.json(subcategories);
    } catch (error) {
      res.status(500).send('Error fetching subcategories: ' + error.message);
    }
  });
  
  // Add more endpoints as necessary for products, nutrition facts, etc.
// Get nutritional facts for a specific product
app.get('/api/nutrition-facts/:productId', async (req, res) => {
    const productId = req.params.productId;
    try {
      const connection = await mysql.createConnection(dbConfig);
      const [nutritionFacts] = await connection.query(
        'SELECT * FROM nutrition_facts WHERE product_id = ?',
        [productId]
      );
      await connection.end();
      res.json(nutritionFacts);
    } catch (error) {
      res.status(500).send('Error fetching nutrition facts: ' + error.message);
    }
  });
    