import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import fmIntegratedLogo from '../Assets/1.8.png';
import patraLogo from '../Assets/26.3.png';
import patronumLogo from '../Assets/26.7.png';
import heffernanLogo from '../Assets/26.4.png';
import photos149Logo from '../Assets/1.9.png';

import fmIntegratedImg from '../Assets/31.png';
import patraImg from '../Assets/32.png';
import patronumImg from '../Assets/33.png';
import heffernanImg from '../Assets/34.png';
import photos149Img from '../Assets/35.png';
import usFlag from '../Assets/Assests2/55.png';

const workData = [
  {
    id: 'fc-integrated',
    logo: fmIntegratedLogo,
    image: fmIntegratedImg,
    title: 'Unity All-in-One Platform To Enhance Efficiency And Cut Costs.',
    description: 'Integrated FM Group, a leading facility management company in the UAE, partnered with Jellyfish Technologies to develop a single, integrated platform that simplifies facility management, asset management, and operations. This state-of-the-art solution streamlines service delivery while enhancing efficiency and reducing costs.',
    features: [
      'Integrated works orders, asset management, and PPM schedules.',
      'A powerful tool for managing facilities, enhancing efficiency and reducing costs.'
    ],
    location: 'US',
    tags: 'FACILITY MANAGEMENT'
  },
  {
    id: 'patra',
    logo: patraLogo,
    image: patraImg,
    title: 'Empowers Brokers and Integrates With Top US Insurers For Swift Certificate Issuance And Optimal Premium Quotes.',
    description: 'Patra Corporation partnered with Jellyfish Technologies to develop a secure, web-based payment automation solution for premium finance in the insurance industry. The result improved task efficiency, reduced costs, and enhanced the overall user experience.',
    features: [
        'API integration module with configuration based approach.',
        'XML transports diverse data formats in a flexible and readable structure.',
        'The integration module has robust authorization mechanisms for secure data exchange.',
        'Underwriting questions for risk assessment stored in XML databases for insurance standards.'
    ],
    location: 'US',
    tags: 'NODE.JS, SAILS | INSURTECH'
  },
  {
    id: 'patronum',
    logo: patronumLogo,
    image: patronumImg,
    title: 'A SaaS Solution to Streamline Google Workspace User Management, Automating Tasks for Efficiency.',
    description: 'Jellyfish Technologies facilitated the launch of Patronum (Bespin Labs). The developed platform streamlines Google Workspace tasks, offering enhanced control over user files, efficient sharing, copying, and backup options, adding another satisfied client to our list.',
    features: [
        'Code optimized for seamless handling of synchronous requests and high-volume traffic.',
        'Integrated Google API, enhancing product functionality and connectivity.',
        'Real-time updates for unstructured data were generated using MongoDB',
        'Automated provisioning and de-provisioning users within Google Workspace'
    ],
    location: 'US',
    tags: 'JS, GOLANG | IT'
  },
  {
    id: 'heffernan',
    logo: heffernanLogo,
    image: heffernanImg,
    title: 'Develop An Internal Insurance App For Daily Storage Of Client’s Private Data By Employees.',
    description: 'Heffernan, a leading US insurance brokerage, partnered with Jellyfish Technologies to develop a secure internal application for daily client data storage. The solution included robust authentication, responsive UI, file storage, and report generation, resulting in a fast and secure data management system.',
    features: [
        'With planning & research, evaluated app functionalities and architectural needs.',
        'Developed a responsive UI with full accessibility, integrating Bootstrap design.',
        'Top-notch user experience drove the design, resulting in a clean, intuitive UX.',
        'App creates reports in CSV/PDF formats for data analysis and sharing.'
    ],
    location: 'US',
    tags: 'JAVA-SPRING BOOT | INSURTECH'
  },
  {
    id: '149photos',
    logo: photos149Logo,
    image: photos149Img,
    title: 'Visual Solutions For Builders/Homebuyers And Provides Weekly Build Progress Reports Via Photos.',
    description: 'Jellyfish Technologies collaborated with Builder Digital Marketing to create and deliver various visual marketing and engagement solutions for builders and new home buyers.',
    features: [
        'Improved UI with enhanced design elements and navigation.',
        '24/7 maintenance & support for uninterrupted system reliability.',
        'Identified key features for mobile and web app performance enhancements.',
        'We addressed bugs, refining existing features for improved functionality & UX.'
    ],
    location: 'US',
    tags: 'IONIC-ANGULAR | PROPTECH'
  },
];

const UIUXWorkMastery = () => {
  const [activeTab, setActiveTab] = useState(workData[0].id);
  const activeWork = workData.find(work => work.id === activeTab);

  return (
    <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Our Dedicated UI/UX Design Work Mastery
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
          Our expert UI/UX designers deliver intuitive and visually captivating user experiences tailored to your brand identity. With a deep understanding of user-centered design principles and proficiency in tools like Figma, Sketch, and Adobe XD, we craft solutions that enhance engagement and drive conversions.
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto mt-16 bg-gray-800 rounded-2xl shadow-2xl p-4 sm:p-8">
        <div className="flex flex-wrap justify-center border-b border-gray-700 mb-8">
          {workData.map((work) => (
            <button
              key={work.id}
              onClick={() => setActiveTab(work.id)}
              className={`px-4 sm:px-6 py-3 transition-all duration-300 relative focus:outline-none ${
                activeTab === work.id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <img src={work.logo} alt={`${work.id} logo`} className="h-10 sm:h-12 mx-auto" />
              {activeTab === work.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"
                  layoutId="underline"
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-5">
              <img src={activeWork.image} alt={activeWork.title} className="rounded-lg w-full" />
            </div>
            <div className="lg:col-span-7 text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{activeWork.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-6">
                    {activeWork.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-blue-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <p className="text-gray-300 text-sm sm:text-base">{feature}</p>
                        </div>
                    ))}
                </div>
                <p className="text-gray-400 mb-6 text-sm sm:text-base">{activeWork.description}</p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div className="flex items-center mb-4 sm:mb-0">
                        <img src={usFlag} alt="US Flag" className="h-6 w-auto mr-2" />
                        <span className="text-gray-400 font-semibold">{activeWork.location}</span>
                    </div>
                    <span className="text-blue-400 font-semibold tracking-wider text-sm sm:text-base">{activeWork.tags}</span>
                </div>
                 <a href="#view-case-study" className="mt-6 inline-block text-white font-semibold hover:text-blue-400 transition-colors duration-300">
                    View Case Study &rarr;
                </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UIUXWorkMastery; 