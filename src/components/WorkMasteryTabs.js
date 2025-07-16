import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import fcIntegratedLogo from '../Assets/1.8.png';
import patraLogo from '../Assets/26.3.png';
import patronumLogo from '../Assets/26.7.png';
import heffernanLogo from '../Assets/26.4.png';
import photos149Logo from '../Assets/1.9.png';

import fcIntegratedImg from '../Assets/31.png';
import patraImg from '../Assets/32.png';
import patronumImg from '../Assets/33.png';
import heffernanImg from '../Assets/34.png';
import photos149Img from '../Assets/35.png';
import usaFlag from '../Assets/USA.png';

const workData = [
  {
    id: 'fc-integrated',
    logo: fcIntegratedLogo,
    image: fcIntegratedImg,
    title: 'Unify All FM Operations On A Single Platform to Enhance Efficiency And Cut Costs.',
    description: 'Integrated FM Group, a leading facility management provider, collaborated with Jellyfish Technologies to develop a custom solution for managing work orders, asset management, preventive maintenance, and vendor management, enhancing efficiency and reducing costs.',
    features: [
      'Analyzed client\'s requirements for FM trends, and followed a risk-free development process.',
      'The work order and management feature was designed to create, assign, and track.',
      'Conducted constructive user testing before and during the development phase.',
      'Contract facility managers to oversee daily production and supplies.'
    ],
    location: 'US',
    tech: 'FACILITY MANAGEMENT',
    caseStudyLink: '#'
  },
  {
    id: 'patra',
    logo: patraLogo,
    image: patraImg,
    title: 'Empowers Brokers and Integrates With Top US Insurers For Swift Certificate Issuance And Optimal Premium Quotes.',
    description: 'Patra Corporation partnered with Jellyfish Technologies to develop a secure, web-based payment automation solution for premium finance in the insurance industry. The result improved task efficiency, reduced costs, and enhanced the overall user experience.',
    features: [
        'API integration module with configuration based approach.',
        'The integration module has robust authorization mechanisms for secure data exchange.',
        'XML transports diverse data formats in a flexible and readable structure.',
        'Underwriting questions for risk assessment stored in XML databases for insurance standards.'
    ],
    location: 'US',
    tech: 'NODE.JS, SAILS, INSURTECH',
    caseStudyLink: '#'
  },
  {
    id: 'patronum',
    logo: patronumLogo,
    image: patronumImg,
    title: 'A SaaS Solution to Streamline Google Workspace User Management, Automating Tasks for Efficiency.',
    description: 'Jellyfish Technologies facilitated the launch of Patronum (Bespin Labs). The developed platform streamlines Google Workspace tasks, offering enhanced control over user files, efficient sharing, copying, and backup options, adding another satisfied client to our list.',
    features: [
        'Code optimized for seamless handling of synchronous requests and high-volume traffic.',
        'Real-time updates for unstructured data were generated using MongoDB',
        'Integrated Google API, enhancing product functionality and connectivity.',
        'Automated provisioning and de-provisioning users within Google Workspace'
    ],
    location: 'US',
    tech: 'JS, GOLANG, IT',
    caseStudyLink: '#'
  },
  {
    id: 'heffernan',
    logo: heffernanLogo,
    image: heffernanImg,
    title: 'Develop An Internal Insurance App For Daily Storage Of Client\'s Private Data By Employees.',
    description: 'Heffernan, a leading US insurance brokerage, partnered with Jellyfish Technologies to develop a secure internal application for daily client data storage. The solution included robust authentication, responsive UI, file storage, and report generation, resulting in a fast and secure data management system.',
    features: [
        'With planning & research, evaluated app functionalities and architectural needs.',
        'Top-notch user experience drove the design, resulting in a clean, intuitive UX.',
        'Developed a responsive UI with full accessibility, integrating Bootstrap design.',
        'App creates reports in CSV/PDF formats for data analysis and sharing.'
    ],
    location: 'US',
    tech: 'JAVA-SPRING BOOT, INSURTECH',
    caseStudyLink: '#'
  },
  {
    id: '149photos',
    logo: photos149Logo,
    image: photos149Img,
    title: 'Visual Solutions For Builders/Homebuyers And Provides Weekly Build Progress Reports Via Photos.',
    description: 'Jellyfish Technologies collaborated with Builder Digital Solutions to create and deliver various visual marketing and engagement solutions for builders and new home buyers.',
    features: [
        'Improved UI with enhanced design elements and navigation.',
        'Identified key features for mobile and web app performance enhancements.',
        '24/7 maintenance & support for uninterrupted system reliability.',
        'We addressed bugs, refining existing features for improved functionality & UX.'
    ],
    location: 'US',
    tech: 'IONIC-ANGULAR, PROPTECH',
    caseStudyLink: '#'
  }
];

const WorkMasteryTabs = () => {
  const [activeTab, setActiveTab] = useState(workData[0].id);
  const activeWork = workData.find(work => work.id === activeTab);

  return (
    <section className="bg-gray-900 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            Our Dedicated Software Developers' Work Mastery
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Our dedicated software developers offer a range of benefits, with certified professionals skilled in emerging technologies like AI, low code/no code, and IoT. Hire dedicated software developers to integrate core tech strength and 24/7 support, ensuring seamless maintenance from code to production, offering your project success and scalability.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
          <div className="flex justify-around border-b border-gray-600 mb-8">
            {workData.map((work) => (
              <button
                key={work.id}
                onClick={() => setActiveTab(work.id)}
                className="w-1/5 py-4 px-1 text-center transition-all duration-300 focus:outline-none relative"
              >
                <img src={work.logo} alt={`${work.id} logo`} className="h-8 mx-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                {activeTab === work.id && (
                  <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500" layoutId="underline" />
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
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="flex justify-center">
                <img src={activeWork.image} alt={activeWork.title} className="max-w-full h-auto rounded-lg shadow-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">{activeWork.title}</h3>
                <p className="text-gray-400 mb-6">{activeWork.description}</p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6">
                  {activeWork.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <p className="text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={usaFlag} alt="USA Flag" className="w-6 h-4 mr-2" />
                        <span className="text-gray-400 font-semibold">{activeWork.tech}</span>
                    </div>
                    <a href={activeWork.caseStudyLink} className="text-blue-400 hover:text-blue-300 font-bold flex items-center transition-colors duration-300">
                        View Case Study
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WorkMasteryTabs; 