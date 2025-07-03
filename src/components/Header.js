import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import companyLogo from '../Assets/companylogo.jpg';

const DownArrow = () => (
  <svg className="ml-1 h-5 w-5 text-gray-400 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = isScrolled 
    ? "fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-lg border-b border-gray-700 shadow-lg transition-all duration-300"
    : "relative bg-transparent transition-all duration-300";

  return (
    <nav className={navClass}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-10 rounded-full" src={companyLogo} alt="Company Logo" />
            </Link>
          </div>

          {/* Nav links in the center */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-6">
              <Link to="/expertise" className="group text-gray-300 hover:text-white px-3 py-2 text-lg font-medium flex items-center relative">
                <span>Our Expertise</span>
                <DownArrow />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </Link>
              {['Technologies', 'Offshore Developer', 'Products'].map(item => (
                <Link key={item} to={`/${item.toLowerCase().replace(' ', '-')}`} className="group text-gray-300 hover:text-white px-3 py-2 text-lg font-medium flex items-center relative">
                  <span>{item}</span>
                  <DownArrow />
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </Link>
              ))}
              <Link to="/about" className="group text-gray-300 hover:text-white px-3 py-2 text-lg font-medium relative">
                <span>About</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </Link>
              <Link to="/resources" className="group text-gray-300 hover:text-white px-3 py-2 text-lg font-medium flex items-center relative">
                <span>Resources</span>
                <DownArrow />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
              </Link>
            </div>
          </div>

          {/* Contact button on the right */}
          <div className="hidden md:block">
            <Link to="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-5 py-2.5 rounded-md text-base font-medium transition-all duration-300 transform hover:scale-105">
              Contact Us
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-80 backdrop-blur-md" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/expertise" className="group text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between">
              <span>Our Expertise</span>
              <DownArrow />
            </Link>
            {['Technologies', 'Offshore Developer', 'Products', 'Resources'].map(item => (
                 <Link key={item} to={`/${item.toLowerCase().replace(' ', '-')}`} className="group text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between">
                    <span>{item}</span>
                    <DownArrow />
                 </Link>
            ))}
            <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/contact" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white block w-full text-center px-3 py-2 rounded-md text-base font-medium mt-2">
              Contact Us
            </Link>
          </div>
        </div>
      )}

      {/* Decorative separator for non-scrolled state */}
      {!isScrolled && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 [background-size:200%_auto] animate-disco" />
      )}
    </nav>
  );
};

export default Header; 