import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Import assets
import keeyImage from '../Assets/31.3.png';
import corporateCabsImage from '../Assets/31.1.png';
import fmGroupImage from '../Assets/31.png';
import builderSolutionsImage from '../Assets/31.2.png';

import keeyLogo from '../Assets/1.2.png';
import corporateCabsLogo from '../Assets/1.3.png';
import fcIntegratedLogo from '../Assets/1.8.png';
import photos149Logo from '../Assets/1.9.png';

import usaFlag from '../Assets/USA.png';
import nzFlag from '../Assets/1.7.png';

const workData = [
  {
    id: 'keey',
    company: 'Keey',
    logo: keeyLogo,
    image: keeyImage,
    title: 'Revolutionizing Private Property Rentals with a Secure, User-Friendly Mobile App',
    description: 'Keey, a real-estate booking platform collaborated with Jellyfish Technologies to bring their real-estate booking platform to life, creating a secure, intuitive app that allows users to rent out their properties privately, boosting both engagement and trust.',
    features: [
      "Created a feature-rich mobile app for private real-estate bookings.",
      "Integrated intuitive UI/UX for smooth navigation and user engagement",
      "Streamlined the checkout process for seamless transactions.",
      "Implemented high-level security protocols to protect user data."
    ],
    tags: ['CUSTOMIZED MOBILE APP DEVELOPMENT', 'PROPTECH'],
    country: { name: 'US', flag: usaFlag },
    caseStudyLink: '#'
  },
  {
    id: 'corporate-cabs',
    company: 'Corporate Cabs',
    logo: corporateCabsLogo,
    image: corporateCabsImage,
    title: 'Streamlining POS Payments to Enhance Customer Experience and Operational Efficiency',
    description: "Corporate Cabs, a premier taxi service provider, partnered with Jellyfish Technologies to improve payment processing by integrating a user-friendly Android POS app, reducing transaction times, enhancing customer satisfaction, and boosting operational efficiency.",
    features: [
      'Developed an intuitive Android app for seamless POS transactions',
      'Integrated advanced features for faster checkouts and data collection',
      'Established TCP connectivity for reliable POS terminal integration',
      'Employed robust security protocols for protecting customer data'
    ],
    tags: ['ANDROID APP DEVELOPMENT', 'TRAVEL, TRANSPORT, AND HOSPITALITY'],
    country: { name: 'New Zealand', flag: nzFlag },
    caseStudyLink: '#'
  },
  {
    id: 'fc-integrated',
    company: 'FC Integrated',
    logo: fcIntegratedLogo,
    image: fmGroupImage,
    title: 'Unify All FM Operations On A Single Platform To Enhance Efficiency And Cut Costs.',
    description: 'Integrated FM Group, a leading facility management provider, worked with Jellyfish Technologies to streamline operations. The developed platform integrates work orders, asset management, preventive maintenance, and vendor management, enhancing efficiency and reducing costs.',
    features: [
      "Analyzed client's operations and FM trends, and followed a structured dev process",
      "Conducted constructive user testing sessions during the development phase",
      "The work order and management feature was added to create, assign, and track",
      "Enhanced facility managers to oversee service providers and suppliers"
    ],
    tags: ['USER-CENTRIC DESIGN AND TESTING', 'FACILITY MANAGEMENT'],
    country: { name: 'US', flag: usaFlag },
    caseStudyLink: '#'
  },
  {
    id: '149-photos',
    company: '149 Photos',
    logo: photos149Logo,
    image: builderSolutionsImage,
    title: 'Visual Solutions For Builders/Homebuyers And Provides Weekly Build Progress Reports Via Photos.',
    description: 'Jellyfish Technologies collaborated with Builder Digital Solutions to create and deliver various visual marketing and engagement solutions for builders and new home buyers.',
    features: [
      'Improved UI with enhanced design elements and navigation',
      '24/7 maintenance & support for uninterrupted system reliability',
      'Identified key features for mobile and web app performance enhancements',
      'We addressed bugs, refining existing features for improved functionality & UX'
    ],
    tags: ['LEGACY APP MODERNIZATION', 'PROPTECH'],
    country: { name: 'US', flag: usaFlag },
    caseStudyLink: '#'
  }
];

const FeatureListItem = ({ children }) => (
    <li className="flex items-start gap-3">
        <svg className="flex-shrink-0 w-5 h-5 mt-1 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-gray-600">{children}</span>
    </li>
);

const WorkTabs = () => {
    const [activeTab, setActiveTab] = useState(workData[0].id);
    const activeWork = workData.find(work => work.id === activeTab);

    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-b border-gray-200 mb-12">
                    <nav className="-mb-px flex justify-around" aria-label="Tabs">
                        {workData.map((work) => (
                            <button
                                key={work.id}
                                onClick={() => setActiveTab(work.id)}
                                className={`${
                                    activeTab === work.id
                                        ? 'border-red-500'
                                        : 'border-transparent'
                                } w-1/4 py-4 px-1 text-center border-b-4 transition-colors duration-300 focus:outline-none`}
                            >
                                <img src={work.logo} alt={`${work.company} logo`} className="h-8 mx-auto" />
                            </button>
                        ))}
                    </nav>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeWork.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                            <div className="lg:w-2/5">
                                <img src={activeWork.image} alt={activeWork.title} className="max-w-full h-auto mx-auto rounded-lg shadow-lg" />
                            </div>
                            <div className="lg:w-3/5">
                                <h3 className="text-4xl font-bold text-gray-900 leading-tight">{activeWork.title}</h3>
                                <p className="mt-5 text-xl text-gray-600">{activeWork.description}</p>
                                <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                                    {activeWork.features.map((feature, index) => (
                                        <FeatureListItem key={index}>{feature}</FeatureListItem>
                                    ))}
                                </ul>
                                <div className="mt-10 flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <img src={activeWork.country.flag} alt={activeWork.country.name} className="w-10 h-auto rounded-full" />
                                        <div className="text-base">
                                            {activeWork.tags.map(tag => <p key={tag} className="font-semibold text-gray-500 tracking-wide">{tag}</p>)}
                                        </div>
                                    </div>
                                    <a href={activeWork.caseStudyLink} className="text-red-600 font-bold text-lg hover:underline flex items-center gap-2">
                                        View Case Study
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default WorkTabs; 