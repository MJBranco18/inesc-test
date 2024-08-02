import React, { useState } from 'react';
import logo from '../assets/INESCTEC_teste.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular, faCalendarAlt as faCalendarRegular} from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isArrowUp, setIsArrowUp] = useState(true);
  const [calendarArrowUp, setCalendarArrowUp] = useState(true);
  const categories = ['All', 'Energy', 'Industry', 'Ocean', 'Health'];

  const toggleArrow = () => {
    setIsArrowUp(!isArrowUp);
  };

  const toggleCalendarArrow = () => {
    setCalendarArrowUp(!calendarArrowUp);
  }
    
  return (
    <header className="p-8 bg-white text-black font-mono">
      <div className="flex flex-col items-start ml-8 mt-8 mb-6">
        <Link to="/"> 
          <img src={logo} alt="INESC TEC" className="h-16" />
        </Link>
        <span className="text-4xl reverse-gradient-text mt-4 mb-4">Open Source Software</span>
        <div className="flex space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1 text-xs font-semibold rounded-full transition-colors duration-300 ${
                activeCategory === category ? 'bg-light-blue-2 text-white' : 'text-dark-blue-2 bg-white border border-dark-blue-2'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center w-full px-8">
        <div className="flex-grow flex border border-dark-blue-2 rounded-full overflow-hidden">
          <input
            type="text"
            className="flex-grow ml-6 p-2 bg-white outline-none text-dark-blue-2 placeholder-dark-blue-2"
            placeholder="Search project"
          />
          <button className="px-4 py-2 bg-white flex items-center justify-center">
            <FontAwesomeIcon icon={faSearch} className="text-dark-blue-2" />
          </button>
        </div>
        <div className="flex items-center ml-4">
          <span className='text-dark-blue-2'>Sort: </span>
          <div>
            <FontAwesomeIcon icon={faStarRegular} className="text-dark-blue-2 text-md ml-2" />
            <button onClick={toggleArrow} className="focus:outline-none">
              <FontAwesomeIcon icon={isArrowUp ? faArrowUp : faArrowDown} className="text-dark-blue-2 text-md ml-1" />
            </button>
          </div>
          <div className='ml-2'>
            <FontAwesomeIcon icon={faCalendarRegular} className="text-dark-blue-2 text-md ml-2" />
            <button onClick={toggleCalendarArrow} className="focus:outline-none">
              <FontAwesomeIcon icon={calendarArrowUp ? faArrowUp : faArrowDown} className="text-dark-blue-2 text-md ml-1" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
