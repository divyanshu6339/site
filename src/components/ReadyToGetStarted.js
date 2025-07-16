import React from 'react';
import { motion } from 'framer-motion';

const ReadyToGetStarted = () => {
  return (
    <div className="bg-gray-800">
      <div className="max-w-screen-2xl mx-auto text-center py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready To Get Started With Our Application Modernization Services?
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-300">
            Are you ready to take your business to the next level? At Alpixn Technologies, we understand the importance of staying ahead in the digital landscape. Our custom software development team is primed and ready to help you turn your vision into reality.
          </p>
          <div className="mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              Get an Estimate of Your Project Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReadyToGetStarted; 