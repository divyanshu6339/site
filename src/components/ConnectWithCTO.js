import React from 'react';

const ConnectWithCTO = () => {
  return (
    <div className="bg-[#1E6A9C] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-white mb-8">
          Connect With Our Certified Software Development Experts Now!
        </h2>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Email id"
            className="bg-white text-gray-900 rounded-md py-3 px-4 w-full sm:w-auto flex-grow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          />
          <div className="relative w-full sm:w-auto flex-grow">
            <select
              className="appearance-none bg-white text-gray-500 rounded-md py-3 px-4 pr-8 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <option>Please choose service</option>
              <option>Web Development</option>
              <option>Mobile Development</option>
              <option>UI/UX Design</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <button
            type="submit"
            className="bg-white text-[#1E6A9C] font-semibold rounded-md py-3 px-6 w-full sm:w-auto hover:bg-gray-100 transition duration-300"
          >
            Let's Talk
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConnectWithCTO; 