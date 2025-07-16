import React from 'react';
import { motion } from 'framer-motion';

const HireDevelopersForm = () => {
  return (
    <section className="bg-gray-900 py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl lg:text-5xl font-extrabold text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Connect With Us To Hire Dedicated Software Developers
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Connect with us to hire dedicated software developers to transform your concepts into cutting-edge solutions and tangible user experiences.
          </motion.p>
        </div>
        <motion.form
          className="bg-gray-800 p-8 rounded-lg shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input type="text" placeholder="Name" className="bg-gray-700 text-white rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 placeholder-gray-400" />
            <input type="tel" placeholder="Phone" className="bg-gray-700 text-white rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 placeholder-gray-400" />
            <input type="email" placeholder="Email" className="bg-gray-700 text-white rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 placeholder-gray-400" />
            <input type="text" placeholder="Company" className="bg-gray-700 text-white rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 placeholder-gray-400" />
          </div>
          <textarea
            placeholder="Tell us about your project"
            rows="6"
            className="w-full bg-gray-700 text-white rounded-md p-4 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 placeholder-gray-400"
          ></textarea>
          <div className="text-center">
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:from-blue-600 hover:to-blue-700 transition duration-300 transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default HireDevelopersForm; 