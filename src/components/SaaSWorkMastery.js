import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import payleadrLogo from '../Assets/1.1.png';
import keeyLogo from '../Assets/1.2.png';
import corporateCabsLogo from '../Assets/1.3.png';
import beIqLogo from '../Assets/1.4.png';
import patraLogo from '../Assets/1.5.png';

import payleadrImg from '../Assets/Assests2/51.png';
import keeyImg from '../Assets/Assests2/48.png';
import corporateCabsImg from '../Assets/Assests2/49.png';
import beIqImg from '../Assets/Assests2/50.png';
import patraImg from '../Assets/Assests2/47.png';

import usFlag from '../Assets/Assests2/55.png';
import australiaFlag from '../Assets/Assests2/54.png';
import germanyFlag from '../Assets/Assests2/52.png';
import newzealandFlag from '../Assets/Assests2/87.png';
import ukFlag from '../Assets/Assests2/53.png';

const workData = [
    {
        id: 'payleadr',
        logo: payleadrLogo,
        image: payleadrImg,
        title: 'A Direct Debit Payment Service System, Providing Automated Invoicing, In-App Messaging, Streamlining Operations, and Driving Business Growth',
        description: 'Alpixn Technologies partnered with Payleadr to create a secure online direct debit payment gateway. The platform offers a seamless checkout experience, automated invoicing, and in-app messaging, enhancing operational efficiency and customer engagement.',
        features: [
            "Operational efficiency through PC-compliant payment gateway",
            "Automated invoicing, ensuring accurate billing",
            "In-app messaging for direct customer communication",
            "Secure data specific to the user"
        ],
        location: 'AUSTRALIA',
        countryFlag: australiaFlag,
        tags: 'NODE.JS, ANGULAR | FINTECH'
    },
    {
        id: 'keey',
        logo: keeyLogo,
        image: keeyImg,
        title: 'The Mobile App Provides a Complete Solution for Users Sharing Holiday Apartments with Friends & Family and Offers Exciting Functionalities',
        description: 'Alpixn partnered with Keey, a prop-tech business, to realize their real-estate idea. Integrating reliable tech stacks—React Native and Node.js, we delivered a mobile app enabling users to rent properties. With its intuitive UI/UX design and enhanced security features, our solution propelled Keey to wider audiences.',
        features: [
            "Availability & Booking Management allows users to manage, and book apartments",
            "Seamless Checkout Process, streamlining the payment and booking confirmation steps",
            "In-app chat functionality offers direct communication between users and owners",
            "Enhanced user satisfaction with intuitive UI/UX, drives user retention in real estate"
        ],
        location: 'GERMANY',
        countryFlag: germanyFlag,
        tags: 'NODE.JS, SAILS | PROPTECH'
    },
    {
        id: 'corporate-cabs',
        logo: corporateCabsLogo,
        image: corporateCabsImg,
        title: 'Responsive Android App for Cabs in New Zealand with Seamless Online Payments via POS Terminals and Modernizing User Experiences',
        description: 'Corporate Cabs, a renowned taxi service provider in New Zealand, sought the expertise of Alpixn to develop an Android app for their POS terminals. Our smart solution optimized transaction processes, enhanced data security measures, and improved customer satisfaction.',
        features: [
            "Established reliable connectivity between POS devices and the application",
            "Used Transmission Control Protocol (TCP) for smooth and faster operations",
            "24*7 technical consultation for support & maintenance",
            "Implemented measures to strengthen data security within the application"
        ],
        location: 'NEW ZEALAND',
        countryFlag: newzealandFlag,
        tags: 'JS, GOLANG | IT'
    },
    {
        id: 'be-iq',
        logo: beIqLogo,
        image: beIqImg,
        title: 'A Leading Fintech Platform With A Behavioral Rating Scale, A Groundbreaking BRS For Investment Planning, And Much More',
        description: 'In collaboration with Be-IQ, Alpixn brought their gamified quizzes to reality. We developed secure iFrames, and responsive UI, and designed theme-specific interfaces. Moreover, our Be-IQ Profiler, incorporating a Behavioral Rating Scale, identified financial vulnerability, delivering unique, market-leading outcomes.',
        features: [
            "Innovative behavioral research and engagement strategies for financial insights",
            "Gamified quizzes through secure iFrames, engaging UI, and theme-specific interfaces",
            "Outcomes like Be-IQ profiler, BRS for investment planning, & Myers-Briggs reports",
            "Data security measures and scalable solutions ensured protection of sensitive financial data"
        ],
        location: 'UK',
        countryFlag: ukFlag,
        tags: 'JAVA-SPRING BOOT | INSURTECH'
    },
    {
        id: 'patra',
        logo: patraLogo,
        image: patraImg,
        title: 'A Secure Web-Based Finance Solution for Smooth Payments, Automated Emails, Premium Financing with Robust Security Measures',
        description: 'In partnership with Patra Corporation, Alpixn developed a cutting-edge web application for seamless payment automation in the insurance industry, delivering enhanced security, efficiency, and user experience, driving growth and client satisfaction.',
        features: [
            "Integrated advanced fintech solutions for enhanced user experience",
            "Seamless checkouts and automated email notifications for efficient operation",
            "Automated tasks reduce task time by 85%, saving costs up to 75%",
            "Robust security measures to safeguard financial data and transactions"
        ],
        location: 'US',
        countryFlag: usFlag,
        tags: 'IONIC-ANGULAR | PROPTECH'
    },
];

const Feature = ({ text }) => (
    <div className="flex items-start">
        <span className="text-blue-500 font-bold mr-2 mt-1">&#8226;</span>
        <p className="text-gray-300">{text}</p>
    </div>
)

const SaaSWorkMastery = () => {
  const [activeTab, setActiveTab] = useState(workData[0].id);
  const activeWork = workData.find(work => work.id === activeTab);

  return (
    <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Our Dedicated SaaS Development Services Work Mastery
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-4xl mx-auto">
          Our dedicated SaaS developers offer a range of benefits, with certified professionals skilled in emerging technologies like AI, low-code/no-code, and IoT. Hire dedicated software developers to integrate core tech strength and 24/7 support, ensuring seamless transition from code to production, offering your project success and scalability.
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto mt-16 bg-gray-800 rounded-2xl shadow-2xl p-4 sm:p-8 border border-gray-700">
        <div className="flex flex-wrap justify-center border-b border-gray-700 mb-8">
          {workData.map((work) => (
            <button
              key={work.id}
              onClick={() => setActiveTab(work.id)}
              className={`px-4 sm:px-6 py-4 transition-all duration-300 relative focus:outline-none ${
                activeTab === work.id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <img src={work.logo} alt={`${work.id} logo`} className="h-8 sm:h-10 mx-auto filter grayscale hover:grayscale-0 transition-all duration-300" />
              {activeTab === work.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"
                  layoutId="saas-underline"
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
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-5">
              <img src={activeWork.image} alt={activeWork.title} className="rounded-lg w-full shadow-lg" />
            </div>
            <div className="lg:col-span-7 text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{activeWork.title}</h3>
                <p className="text-gray-400 mb-6 text-base">{activeWork.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-6">
                    {activeWork.features.map((feature, index) => (
                        <Feature key={index} text={feature} />
                    ))}
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-8 pt-4 border-t border-gray-700">
                    <div className="flex items-center mb-4 sm:mb-0">
                        <img src={activeWork.countryFlag} alt={activeWork.location} className="h-6 w-auto mr-3 rounded" />
                        <span className="text-gray-300 font-semibold">{activeWork.location}</span>
                    </div>
                    <span className="text-blue-400 font-semibold tracking-wider text-sm sm:text-base">{activeWork.tags}</span>
                </div>
                 <a href="#view-case-study" className="mt-6 inline-block text-white font-semibold hover:text-blue-400 transition-colors duration-300 group">
                    View Case Study <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SaaSWorkMastery; 