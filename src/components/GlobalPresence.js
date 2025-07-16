import React from 'react';

// Import flag images
import usaFlag from '../Assets/USA.png';
import canadaFlag from '../Assets/Canada.png';
import australiaFlag from '../Assets/Australia.png';
import indiaFlag from '../Assets/India.png';

const locations = [
  {
    flag: usaFlag,
    name: 'United State - Utah',
    address: '159 West Broadway #200 Salt Lake City Utah – 84101',
  },
  {
    flag: canadaFlag,
    name: 'Canada - Toronto',
    address: '18 King Street East, Suite 1400, Toronto, ON M5C 1C4',
  },
  {
    flag: australiaFlag,
    name: 'Australia - Sydney',
    address: 'Level 3, 478 George Street, Sydney NSW 2000',
  },
  {
    flag: indiaFlag,
    name: 'India - Noida',
    address: 'D-5, Third Floor, Logix Infotech Park, Sec- 59, Noida – 201301',
  },
];

const LocationCard = ({ flag, name, address }) => (
  <div className="flex flex-col items-center text-center p-6 transition-all duration-300 ease-in-out transform hover:-translate-y-2">
    <div className="mb-6">
      <img src={flag} alt={`${name} flag`} className="w-24 h-24 rounded-full shadow-lg border-4 border-white" />
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-3">{name}</h3>
    <p className="text-gray-600 text-lg leading-relaxed">{address}</p>
  </div>
);

const GlobalPresence = () => {
  return (
    <div className="font-poppins">
      <div className="bg-[#1e3a8a] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 md:mb-0">
            Want to Speak to Our Solution Experts?
          </h2>
          <a
            href="/contact"
            className="bg-white text-blue-900 font-bold py-4 px-10 rounded-lg text-xl hover:bg-gray-200 transition-colors duration-300 flex items-center shadow-lg"
          >
            Book a Meeting
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>
      </div>

      <div className="bg-gray-100 py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {locations.map((location, index) => (
            <LocationCard key={index} {...location} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence; 