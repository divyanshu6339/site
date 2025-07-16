import React from 'react';

const ConnectForm = () => {
  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-4xl font-bold text-white mb-6 md:mb-0 text-center md:text-left">
            Connect With Our Mobile App Development Experts Now!
          </h2>
          <form className="w-full md:w-auto flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Email id" 
              className="bg-white bg-opacity-20 text-white placeholder-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white w-full md:w-auto text-lg"
            />
            <select className="bg-white bg-opacity-20 text-white placeholder-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white w-full md:w-auto text-lg">
              <option className="bg-blue-700">Please choose service</option>
              <option className="bg-blue-700">Mobile App Development</option>
              <option className="bg-blue-700">Software Development</option>
              <option className="bg-blue-700">AI Solutions</option>
            </select>
            <button 
              type="submit" 
              className="bg-white text-blue-600 font-bold px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300 w-full md:w-auto text-lg"
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConnectForm; 