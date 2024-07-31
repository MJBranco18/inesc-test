import React from 'react';
import logo from '../assets/INESCTEC_logotipo_color_rgb.png';

const Header = () => {
  return (
    <header className="p-8 bg-white text-black">
      <div className="flex justify-between items-center mb-8">
        <img src={logo} alt="INESC TEC" className="h-16" />
        <div className="flex items-center space-x-4">
          <button className="text-2xl">
            <i className="fas fa-moon"></i>
          </button>
        </div>
      </div>
      <h1 className="text-6xl font-bold mb-4">INESC TEC</h1>
      <div className="flex space-x-4 mb-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full">All</button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded-full">Energy</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-full">Health</button>
        <button className="px-4 py-2 bg-blue-700 text-white rounded-full">Sea</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-full">Industry</button>
      </div>
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus luctus enim sed semper. Aliquam pellentesque sem in gravida aliquet.
      </p>
      <div className="flex items-center w-full max-w-3xl mb-8">
        <input
          type="text"
          className="flex-grow p-2 rounded-l-full bg-gray-200 text-black"
          placeholder="Search project"
        />
        <button className="px-4 py-2 bg-gray-300 rounded-r-full">Search</button>
      </div>
    </header>
  );
};

export default Header;
