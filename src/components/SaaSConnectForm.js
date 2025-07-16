import React from 'react';
import { motion } from 'framer-motion';

const SaaSConnectForm = () => {
  return (
    <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold text-white sm:text-4xl"
        >
          Connect With Our SaaS Development Services Experts Now!
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 bg-gray-800 p-8 rounded-2xl shadow-2xl"
        >
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <input
              type="email"
              placeholder="Email id"
              className="md:col-span-1 w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              className="md:col-span-1 w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Please choose service</option>
              <option>SaaS Application Development</option>
              <option>Custom SaaS Product Development</option>
              <option>SaaS Cloud Migration</option>
              <option>SaaS Architecture Design</option>
              <option>SaaS Integration Services</option>
              <option>SaaS Modernization & Migration</option>
            </select>
            <button
              type="submit"
              className="md:col-span-1 w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg transform hover:scale-105"
            >
              Let's Talk
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SaaSConnectForm; 