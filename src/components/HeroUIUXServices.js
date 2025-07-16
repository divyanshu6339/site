import React from 'react';
import { motion } from 'framer-motion';
import uiuxImage from '../Assets/Assests2/57.png';

const HeroUIUXServices = () => {
  return (
    <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left lg:col-span-5"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              UI & UX Design
              <span className="text-blue-400"> Services</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-xl">
            We believe in creating brilliant experiences that speak to the heart of your target audience. Our skilled UI/UX designers work hard to understand your specific requirements, vision, and the essence of your project. We create an intuitive, beautiful, and engaging user experience by integrating cutting-edge tools like Sketch, InVision, and Adobe XD to delight your customers and outperform your competition.
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
            className="flex justify-center items-center lg:col-span-7"
          >
            <img src={uiuxImage} alt="UI/UX Design Services" className="rounded-lg shadow-2xl w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroUIUXServices; 