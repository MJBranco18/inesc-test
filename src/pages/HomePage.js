import React from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/INESCTEC_logotipo_monocrom_white.png';
import Footer from '../components/Footer'; 

const HomePage = () => {
  return (
    <div className="font-mono">
      <main className="flex items-center justify-center bg-gradient-to-r from-dark-blue to-light-blue min-h-screen text-white">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl p-8">
          <div className="flex flex-col items-center md:items-center md:mr-8">
            <img src={logo} alt="INESC TEC" className="h-36" />
            <h2 className="text-2xl md:text-3xl">Open Source Software</h2>
          </div>
          <div className="flex flex-col items-center md:items-start mt-8 md:mt-6">
            <ScrollLink
              to="vision"
              smooth={true}
              duration={500}
              className="text-xl md:text-2xl hover:underline mb-6 cursor-pointer"
            >
              {'>'} Our Vision
            </ScrollLink>
            <RouterLink
              to="/projects"
              className="text-xl md:text-2xl hover:underline cursor-pointer"
            >
              {'>'} Our Projects
            </RouterLink>
          </div>
        </div>
      </main>
      <Element name="vision" className="min-h-screen bg-white p-8">
        <div className='mx-20'>
          <h1 className="text-4xl mt-6 mb-4 gradient-text text-start">Open Source</h1>
          <hr className="border-0 h-1 bg-gradient-to-r from-dark-blue to-light-blue mb-8" />
          <div className="mt-20">
            <h2 className="text-xl text-black text-start mb-4 font-bold">Our Vision</h2>
            <p className="text-md text-black text-start mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus luctus enim sed semper. Aliquam pellentesque sem in gravida aliquet.
            </p>
            <h2 className="text-xl text-black text-start mb-4 font-bold">Where to start?</h2>
            <p className="text-md text-black text-start mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus luctus enim sed semper. Aliquam pellentesque sem in gravida aliquet.
            </p>
            <h2 className="text-xl text-black text-start mb-4 font-bold">Contacts</h2>
            <p className="text-md text-black text-start mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus luctus enim sed semper. Aliquam pellentesque sem in gravida aliquet.
            </p>
          </div>
        </div>
      </Element>
      <Footer />
    </div>
  );
};

export default HomePage;
