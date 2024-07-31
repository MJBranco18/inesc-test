import React from 'react';
import { Link, Element } from 'react-scroll';
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
            <Link
              to="vision"
              smooth={true}
              duration={500}
              className="text-xl md:text-2xl hover:underline mb-6 cursor-pointer"
            >
              {'>'} Our Vision
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-xl md:text-2xl hover:underline cursor-pointer"
            >
              {'>'} Our Projects
            </Link>
          </div>
        </div>
      </main>
      <Element name="vision" className="min-h-screen bg-white p-8">
        <h1 className="text-4xl mb-4 gradient-text">Open Source</h1>
        <hr className="border-0 h-1 bg-gradient-to-r from-dark-blue to-light-blue mb-8" />
        <h2 className="text-3xl mb-4">Our Vision</h2>
        <p className="text-xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus luctus enim sed semper. Aliquam pellentesque sem in gravida aliquet.
        </p>
        <h2 className="text-3xl mb-4">Where to start?</h2>
        <p className="text-xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus luctus enim sed semper. Aliquam pellentesque sem in gravida aliquet.
        </p>
        <h2 className="text-3xl mb-4">Contacts</h2>
        <p className="text-xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus luctus enim sed semper. Aliquam pellentesque sem in gravida aliquet.
        </p>
      </Element>
      <Footer />
    </div>
  );
};

export default HomePage;
