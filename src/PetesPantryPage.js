import React, { useState, useEffect } from 'react';
import './PetesPantryPage.css'; // Ensure you have the corresponding CSS file

function PetesPantryPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Ensure this URL matches your actual backend server's address and port
    fetch('http://localhost:3000/api/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  // Function to fetch products by category
  const fetchProducts = (categoryId) => {
    // Implement fetching logic here
    // This would fetch products and their nutritional facts based on the category ID
  };

  return (
    <div className="pantry-container">
      {categories.map((category, index) => (
        <div key={index} className="category-tile" onMouseEnter={() => fetchProducts(category.category_id)}>
          <img src={category.imageUrl} alt={category.category_name} className="category-image" />
          <div className="category-details">
            <h3>{category.category_name}</h3>
            {/* Add additional details you want to show on hover here */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PetesPantryPage;
