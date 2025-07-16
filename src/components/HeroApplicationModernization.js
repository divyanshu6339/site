import React from 'react';
import { motion } from 'framer-motion';
import modernizationImage from '../Assets/Assests2/46.png';

const HeroApplicationModernization = () => {
  return (
    <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left lg:col-span-4"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Application Modernization
              <span className="text-blue-400"> Services</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-xl">
              Revolutionize your business with our legacy application modernization Services by upgrading their design, functionality, architecture, and technology stack. Our seasoned developers are adept at modernizing your legacy software infrastructure, emphasizing security, user-friendliness, and scalability.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get a custom quote &rarr;
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center lg:col-span-8"
          >
            <img src={modernizationImage} alt="Application Modernization" className="rounded-lg shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroApplicationModernization; 