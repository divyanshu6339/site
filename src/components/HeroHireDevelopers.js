import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '../Assets/Assests2/56.png';

const HeroHireDevelopers = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              Hire Dedicated Software Developers
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Take your business to the next level with dedicated software developers boasting over 14+ years of experience in custom software development and IT consulting. With a team of 150+ certified software engineers in diverse technology fields, we are committed to bringing your visions to life.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Get a custom quote &rarr;
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <img src={heroImage} alt="Hire Dedicated Developers" className="max-w-full h-auto rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroHireDevelopers; 