import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Assuming you will create this CSS file for styling

function HomePage() {
  return (
    <div className="home-container">
      <Link to="/petes-pantry" className="tile tile-pantry">
        <div>Pete's Pantry</div>
      </Link>
      <Link to="/petes-eats" className="tile tile-eats">
        <div>Pete's Eats</div>
      </Link>
    </div>
  );
}

export default HomePage;
