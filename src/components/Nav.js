import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/INESCTEC_logotipo_color_rgb.png';
import vec from '../assets/moon.png';

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-2 bg-white text-black shadow-lg z-50">
      <div className="flex items-center ml-10">
        <Link to="/">
          <img src={logo} alt="INESC TEC" className="h-20" />
        </Link>
      </div>
      <div className="flex items-center space-x-4 mr-20">
        <img src={vec} alt="vector" className="h-5" />
        <button className="text-2xl">
          <i className="fas fa-sun"></i>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
