import React from 'react';
import './App.css';
import Nav from './components/Nav';
import HomePage from './HomePage';
// import FeaturedProjects from './FeaturedProjects';

function App() {
  // const organization = 'INESCTEC'; 
  // const areaName = 'energy'; 

  return (
    <div className="App">
      <Nav />
      <HomePage />
      {/* <FeaturedProjects org={organization} areaName={areaName} /> */}
    </div>
  );
}

export default App;
