import React from 'react';
import logo from '../assets/logo-inesc.png';
import vec from '../assets/Vector.png';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">
      <div className="flex items-center ml-10">
        <img src={logo} alt="INESC TEC" className="h-20" />
      </div>
      <div className="flex items-center space-x-4 mr-10">
        <img src={vec} alt="vector" className="h-5" />
        <button className="text-2xl">
          <i className="fas fa-sun"></i>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
