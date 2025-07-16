import React from 'react';
import { motion } from 'framer-motion';

const ConnectWithAnExpert = () => {
  return (
    <div className="bg-blue-600">
      <div className="max-w-screen-2xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
        >
          <span className="block">Connect With An Application Modernization Services Expert Now!</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 lg:mt-0 lg:flex-shrink-0"
        >
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Email id"
              className="w-full px-5 py-3 border border-transparent rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            />
            <select className="w-full px-5 py-3 border border-transparent rounded-md shadow-sm text-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <option>Please choose service</option>
              <option>Application Modernization Consulting</option>
              <option>Legacy App Migration to Cloud</option>
              <option>Legacy Application Reengineering</option>
              <option>Re-Platform Legacy Applications</option>
              <option>End-To-End Digital Transformation</option>
              <option>UI/UX Modernization</option>
            </select>
            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
            >
              Let's Talk
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ConnectWithAnExpert; 