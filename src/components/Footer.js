import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-dark-blue to-light-blue text-white p-4 font-mono">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-14 text-sm md:text-base">
          <a href="https://inesctec.pt" className="hover:underline">Contacts</a>
          <a href="https://inesctec.pt" className="hover:underline">Code of Conduct</a>
          <a href="https://inesctec.pt" className="hover:underline">Copyright</a>
        </div>
        <div className="mt-4 md:mt-0 text-center md:text-right">
          2024, INESC TEC
        </div>
      </div>
    </footer>
  );
};

export default Footer;
