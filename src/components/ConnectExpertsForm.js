import React from 'react';
import { motion } from 'framer-motion';

const ConnectExpertsForm = () => {
  return (
    <div className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Connect With Our UI/UX Design Experts Now!
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-2xl"
        >
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <div className="md:col-span-1">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full bg-white bg-opacity-20 text-white placeholder-gray-300 border-2 border-transparent focus:border-white focus:ring-0 rounded-md py-3 px-4 text-lg"
                placeholder="Email*"
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="service" className="sr-only">Service</label>
              <select
                id="service"
                name="service"
                className="block w-full bg-white bg-opacity-20 text-white border-2 border-transparent focus:border-white focus:ring-0 rounded-md py-3 px-4 text-lg"
              >
                <option className="bg-gray-800">Please choose service</option>
                <option className="bg-gray-800">UI/UX Consulting</option>
                <option className="bg-gray-800">Website Design</option>
                <option className="bg-gray-800">Mobile App Design</option>
                <option className="bg-gray-800">Product Design</option>
                <option className="bg-gray-800">Interaction Design</option>
                <option className="bg-gray-800">UI Testing</option>
              </select>
            </div>
            <div className="md:col-span-1">
              <button
                type="submit"
                className="w-full bg-white text-blue-600 font-bold py-3 px-6 rounded-md text-lg hover:bg-gray-200 transition-colors duration-300"
              >
                Let's Talk
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ConnectExpertsForm; 