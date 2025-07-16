import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import corporateCabsLogo from '../Assets/1.3.png';
import fmIntegratedLogo from '../Assets/1.8.png';
import photos149Logo from '../Assets/1.9.png';
import keeyLogo from '../Assets/1.2.png';

import corporateCabsImg from '../Assets/31.1.png';
import fmIntegratedImg from '../Assets/31.png';
import photos149Img from '../Assets/31.2.png';
import keeyImg from '../Assets/31.3.png';

const workData = [
  {
    id: 'corporate-cabs',
    logo: corporateCabsLogo,
    title: 'Streamlining POS Payments to Enhance Customer Experience and Operational Efficiency',
    description: 'Corporate Cabs, a premier taxi service provider, partnered with Jellyfish Technologies to improve payment processing. We developed a user-friendly Android POS app, reducing transaction times, enhancing customer satisfaction, and boosting operational efficiency.',
    image: corporateCabsImg,
    tags: ['NEW ZEALAND', 'ANDROID APP DEVELOPMENT', 'TRAVEL, TRANSPORT AND HOSPITALITY'],
    features: [
      'Developed an intuitive Android app for seamless POS transactions',
      'Integrated advanced features for faster checkouts and data collection',
      'Established TCP connectivity for reliable POS terminal integration',
      'Employed robust security protocols for protecting customer data',
    ],
  },
  {
    id: 'fm-integrated',
    logo: fmIntegratedLogo,
    title: 'Unify All FM Operations On A Single Platform To Enhance Efficiency And Cut Costs.',
    description: 'Integrated FM Group, a leading facility management provider, worked with Jellyfish Technologies to streamline operations. The developed platform integrates work orders, asset management, preventive maintenance, and vendor management, enhancing efficiency and reducing costs.',
    image: fmIntegratedImg,
    tags: ['US', 'USER-CENTRIC DESIGN AND TESTING', 'FACILITY MANAGEMENT'],
    features: [
      'Analyzed client’s operations and FM trends, and followed a structured dev process',
      'Conducted constructive user testing sessions during the development phase',
      'The work order and management feature was added to create, assign, and track',
      'Enhanced facility managers to oversee service providers and suppliers',
    ],
  },
  {
    id: '149-photos',
    logo: photos149Logo,
    title: 'Visual Solutions For Builders/Homebuyers And Provides Weekly Build Progress Reports Via Photos.',
    description: 'Jellyfish Technologies collaborated with Builder Digital Solutions to create and deliver various visual marketing and engagement solutions for builders and new home buyers.',
    image: photos149Img,
    tags: ['LEGACY APP MODERNIZATION', 'PROPTECH'],
    features: [
      'Improved UI with enhanced design elements and navigation',
      '24/7 maintenance & support for uninterrupted system reliability',
      'Identified key features for mobile and web app performance enhancements',
      'We addressed bugs, refining existing features for improved functionality & UX',
    ],
  },
  {
    id: 'keey',
    logo: keeyLogo,
    title: 'Revolutionizing Private Property Rentals with a Secure, User-Friendly Mobile App',
    description: 'Keey, a real-estate booking platform collaborated with Jellyfish Technologies to bring their real-estate booking platform to life, creating a secure, intuitive app that allows users to rent out their properties privately, boosting both engagement and trust.',
    image: keeyImg,
    tags: ['CUSTOMIZED MOBILE APP DEVELOPMENT', 'PROPTECH'],
    features: [
      'Created a feature-rich mobile app for private real-estate bookings',
      'Integrated intuitive UI/UX for smooth navigation and user engagement',
      'Streamlined the checkout process for seamless transactions',
      'Implemented high-level security protocols to protect user data',
    ],
  },
];

const WebAppWorkMastery = () => {
  const [activeTab, setActiveTab] = useState(workData[0].id);

  const activeWork = workData.find((work) => work.id === activeTab);

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Our Dedicated Web App Development Work Mastery
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-400 max-w-4xl mx-auto text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our dedicated web developers offer a range of benefits, with certified professionals skilled in emerging technologies like AI, low code/no code, and IoT. Hire dedicated web app developers to integrate core tech strength and 24/7 support, ensuring seamless maintenance from code to production, offering your project success and scalability.
        </motion.p>

        <div className="flex flex-wrap justify-center border-b border-gray-700 mb-12">
          {workData.map((work) => (
            <button
              key={work.id}
              className={`px-4 sm:px-8 py-4 text-sm sm:text-base font-medium transition-colors duration-300 relative ${activeTab === work.id ? 'text-white' : 'text-gray-500 hover:text-white'}`}
              onClick={() => setActiveTab(work.id)}
            >
              <div className="bg-white p-2 rounded-md">
                <img src={work.logo} alt={`${work.id} logo`} className="h-6 mx-auto" />
              </div>
              {activeTab === work.id && (
                <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500" layoutId="underline" />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="flex justify-center">
              <img src={activeWork.image} alt={activeWork.title} className="max-w-xs md:max-w-sm rounded-lg" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">{activeWork.title}</h3>
              <p className="text-gray-400 mb-6">{activeWork.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {activeWork.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  {activeWork.tags.join(' | ')}
                </div>
                <a href="#" className="text-red-500 font-semibold hover:underline flex items-center">
                  View Case Study ➔
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WebAppWorkMastery;
