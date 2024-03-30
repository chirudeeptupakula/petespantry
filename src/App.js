import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import PetesPantryPage from './PetesPantryPage';
import PetesEatsPage from './PetesEatsPage'; // Make sure this is imported

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/petes-pantry" element={<PetesPantryPage />} />
          <Route path="/petes-eats" element={<PetesEatsPage />} /> {/* Updated this line */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
