import React from 'react';
import { motion } from 'framer-motion';

const HireDevelopersConnect = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Connect With Us To Hire Skilled Web App Developers
        </motion.h2>
        <motion.p 
          className="text-lg max-w-3xl mx-auto mb-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Let's transform your vision into reality and craft outstanding, customized mobile app solutions collaboratively. Start your mobile app development journey with us today.
        </motion.p>
        <motion.button 
          className="bg-white text-blue-500 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105"
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          Get an Estimate of Your Project Today
        </motion.button>
      </div>
    </section>
  );
};

export default HireDevelopersConnect;
