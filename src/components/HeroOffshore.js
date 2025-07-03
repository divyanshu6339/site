import React from 'react';
import robotImage from '../Assets/27.png';

const HeroOffshore = () => {
  return (
    <div className="relative bg-[#020c1b] text-white">
      <div className="">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen pb-12 lg:pb-0">
          
          {/* Left side content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-6 lg:px-8">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
              Build <span className="text-cyan-400">High-Performance</span> Apps with Our Offshore Talent
            </h1>
            <p className="text-gray-300 mt-6 text-xl max-w-2xl mx-auto lg:mx-0">
              From MVPs to enterprise platforms, we provide offshore specialists who work as an extension of your in-house team.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md text-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Right side image */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-end relative">
            <img src={robotImage} alt="Offshore Development" className="max-w-full h-auto" />
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#020c1b] to-transparent"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroOffshore; 