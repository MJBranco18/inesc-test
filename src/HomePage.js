import React from 'react';
import mainImage from './assets/random-image.png';

const HomePage = () => {
  return (
    <main className="flex flex-col md:flex-row justify-between items-center p-8 text-white">
      <div className="text-section md:w-1/2 md:pr-8 text-left">
        <h1 className="text-6xl md:text-8xl font-bold leading-tight ml-24">
          <div className="flex items-baseline mb-4">
            <span className="text-white text-4xl md:text-6xl text-white">O</span>
            <span className="text-2xl md:text-5xl text-inesc-blue">pen</span>
          </div>
          <div className="flex items-baseline mb-4">
            <span className="text-6xl md:text-6xl text-white">S</span>
            <span className="text-4xl md:text-5xl text-inesc-blue">ource</span>
          </div>
          <div className="flex items-baseline mb-4">
            <span className="text-6xl md:text-6xl text-white">S</span>
            <span className="text-4xl md:text-5xl text-inesc-blue">oftware</span>
          </div>
        </h1>
        <a href="#explore" className="inline-block mt-8 text-xl hover:underline ml-24">
          Explore {'>'}
        </a>
      </div>
      <div className="image-section md:w-1/2">
        <img src={mainImage} alt="Open Source Software" className="w-full max-w-lg" />
      </div>
    </main>
  );
};

export default HomePage;
