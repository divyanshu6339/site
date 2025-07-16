import React from 'react';
import { motion } from 'framer-motion';
import saasImage from '../Assets/Assests2/86.png';

const HeroSaaS = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-left lg:col-span-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              SaaS Development Company
            </h1>
            <div className="h-1 w-24 bg-blue-500 mb-6"></div>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl">
              As a leading SaaS development company, we offer end-to-end solutions for building scalable and secure cloud-based applications. Our team of experienced software architects and developers integrates cutting-edge technologies like microservices, containerization, and serverless computing to deliver high-performance SaaS applications.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 text-lg"
            >
              Get a custom quote &rarr;
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            className="flex justify-center items-center lg:col-span-6"
          >
            <img src={saasImage} alt="SaaS Development" className="rounded-lg w-full h-auto shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSaaS; 