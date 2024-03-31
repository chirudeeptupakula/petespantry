// import React from 'react';
// import { Link } from 'react-router-dom';
// import './HomePage.css'; // Assuming you will create this CSS file for styling

// function HomePage() {
//   return (
//     <div className="home-container">
//       <div className='petespantry'>
//       <Link to="/petes-pantry" className="tile tile-pantry">
//       </Link>
//       </div>

//       <div className='peteseats'>
//       <Link to="/petes-eats" className="tile tile-eats">
//       </Link>
//     </div>
//     </div>
//   );
// }

// export default HomePage;



import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Make sure this path is correct

function HomePage() {
  return (
    <scrollbars>
    <div className="home-container">
      <div className='section alignl'>
    <Link to="/petes-pantry" className="tile tile-pantry"></Link>

      <div className="section petespantry">
        <div className="content">
          <h2>About Pete's Pantry</h2>
          <p>Pete's Pantry, emerging from a heartfelt collaboration between Campus Life and Our Daily Bread, is our unwavering commitment to the well-being of the OSU community. This initiative ensures that every member of our Cowboy Family has access to essential nourishment and personal care items, simply by presenting their OSU ID. Nestled in the Student Union basement, room 042, it's a sanctuary for those facing food insecurity or needing personal products. Here, you're embraced by a community eager to support and uplift you. Let Pete's Pantry be your haven, reinforcing our pledge to care for every Cowboy</p>
        </div>
      </div>
      </div>

      <div className="section peteseats">
        <div className='section alignr'>
        <Link to="/petes-eats" className="tile tile-eats"></Link>
        <div className="content">
          <h2>About Pete's Eats</h2>
          <p>Pete's Eat, an OSU initiative, guarantees a daily meal for every cowboy. To enhance this service, we propose a dedicated page detailing daily meal box contents, empowering students to make informed dietary choices. This strategy aims to reduce wait times, prevent food waste, and ensure satisfaction by allowing students to preview the day's offerings in advance. Our goal is a streamlined, efficient, and waste-conscious dining experience that prioritizes student well-being and convenience.</p>
        </div>
      </div>
      </div>
    </div>
    </scrollbars>
  );
}

export default HomePage;
