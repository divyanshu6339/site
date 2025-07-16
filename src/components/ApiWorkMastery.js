import React, { useState } from 'react';
import { motion } from 'framer-motion';
import payleadrLogo from '../Assets/1.1.png';
import keeyLogo from '../Assets/1.2.png';
import corporateCabsLogo from '../Assets/1.3.png';
import beiqLogo from '../Assets/1.4.png';
import patraLogo from '../Assets/1.5.png';
import corporateCabsImage from '../Assets/Assests2/49.png';
import payleadrImage from '../Assets/Assests2/51.png';
import keeyImage from '../Assets/Assests2/48.png';
import beiqImage from '../Assets/Assests2/50.png';
import patraImage from '../Assets/Assests2/47.png';

const masteryData = {
  payleadr: {
    logo: payleadrLogo,
    image: payleadrImage,
    title: 'A Direct Debit Payment Service System, Enhancing Security, Efficient Scheduling, Streamlining Operations, and Driving Business Growth',
    description: 'Jellyfish Technologies collaborated with Payleadr to create a customizable platform, integrating a PCI-compliant payment solution, supporting in-store apps, and efficient scheduling, streamlining operations, enhancing customer support, and driving business growth.',
    features: [
      'Seamless efficiency through the integration of a PCI-compliant payment solution',
      'Streamlined through scheduled and caching, enhancing performance',
      'Platform’s customizable features attracted a new client base, driving revenue',
      'Custom development tailored to specific business needs and requirements',
    ],
    location: 'AUSTRALIA',
    tags: ['REACT', 'FACILITY MANAGEMENT'],
  },
  keey: {
    logo: keeyLogo,
    image: keeyImage,
    title: 'The Mobile App Provides a Complete Solution for Users Sharing Holiday Apartments with Friends & Family and Offers Exciting Functionalities',
    description: 'Jellyfish Technologies partnered with Keey, a prop-tech business, to realize their real-estate idea. Integrating reliable tech stacks—React Native and Node.js, we delivered a mobile app enabling users to rent properties. With its intuitive UI/UX design and enhanced security features, our solution propelled Keey to wider audiences.',
    features: [
      'Availability & Booking Management allows users to manage, and book apartments',
      'Seamless Checkout Process, streamlining the payment and booking confirmation steps',
      'In-app chat functionality offers direct communication between users and owners',
      'Enhanced user satisfaction with intuitive UI/UX, drives user retention in real estate',
    ],
    location: 'GERMANY',
    tags: ['NODE.JS', 'SAILS', 'INSURTECH'],
  },
  'corporate-cabs': {
    logo: corporateCabsLogo,
    image: corporateCabsImage,
    title: 'Responsive Android App for Cabs in New Zealand with Seamless Online Payments via POS Terminals and Modernizing User Experiences',
    description: 'Corporate Cabs, a renowned taxi service provider in New Zealand, sought the expertise of Jellyfish Technologies to develop an Android app for their POS terminals. Our smart solution optimized transaction processes, enhanced data security measures, and improved customer satisfaction.',
    features: [
      'Established reliable connectivity between POS devices and the application',
      'Used Transmission Control Protocol (TCP) for smooth and faster operations',
      '24/7 technical consultation for support & maintenance',
      'Implemented measures to strengthen data security within the application',
    ],
    location: 'NEW ZEALAND',
    tags: ['JS', 'GOLANG', 'IT'],
  },
  beiq: {
    logo: beiqLogo,
    image: beiqImage,
    title: 'A Leading Fintech Platform With A Behavioral Rating Scale, A Groundbreaking BRS For Investment Planning, And Much More',
    description: 'In collaboration with Be-IQ, Jellyfish Technologies brought their gamified quizzes to reality. We implemented secure iFrames, and responsive UI, and designed theme-specific interfaces. Moreover, our Be-IQ Profiler, incorporating a Behavioral Rating Scale, identified financial vulnerability, delivering unique, market-leading outcomes.',
    features: [
      'Innovative behavioral research and engagement strategies for financial insights',
      'Gamified quizzes through secure iFrames, engaging UI, and theme-specific interfaces',
      'Outcomes like Be-IQ profiler, BRS for investment planning, & Myers-Briggs reports',
      'Data security measures and scalable solutions ensured protection of sensitive financial data',
    ],
    location: 'UK',
    tags: ['JAVA-SPRING BOOT', 'INSURTECH'],
  },
  patra: {
    logo: patraLogo,
    image: patraImage,
    title: 'A Secure Web-Based Finance Solution for Smooth Payments, Automated Emails, Premium Financing with Robust Security Measures',
    description: 'In partnership with Patra Corporation, Jellyfish Technologies developed a cutting-edge web application for seamless payment automation in the insurance industry, delivering enhanced security, efficiency, and user experience, driving growth and client satisfaction.',
    features: [
      'Integrated advanced fintech solutions for enhanced user experience',
      'Seamless checkouts and automated email notifications for efficient operation',
      'Automated tasks reduce task time by 85%, saving costs up to 75%',
      'Robust security measures to safeguard financial data and transactions',
    ],
    location: 'US',
    tags: ['IONIC-ANGULAR', 'PROPTECH'],
  },
};

const ApiWorkMastery = () => {
  const [activeTab, setActiveTab] = useState('payleadr');

  const renderContent = () => {
    const data = masteryData[activeTab];
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center">
          <img src={data.image} alt={data.title} className="rounded-lg shadow-lg mx-auto" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">{data.title}</h3>
          <p className="text-gray-400 mb-6">{data.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {data.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">✔</span>
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">{data.location}</p>
              <div className="flex space-x-2 mt-1">
                {data.tags.map(tag => <span key={tag} className="bg-gray-700 text-gray-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>)}
              </div>
            </div>
            <a href="#" className="text-blue-400 hover:text-blue-500 font-semibold">View Case Study ➔</a>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Dedicated Custom API Integration Work Mastery</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto text-center mb-12">Our dedicated software developers offer a range of benefits, with certified professionals skilled in emerging technologies like AI, low code/no-code, and IoT. Hire dedicated software developers to integrate core tech strength and 24/7 support, ensuring seamless maintenance from code to production, offering your project success and scalability.</p>
                <div className="flex flex-wrap justify-center items-center gap-4 border-b border-gray-700 pb-4 mb-8">
          {Object.keys(masteryData).map(key => (
                        <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`p-4 rounded-lg transition-all duration-300 ${activeTab === key ? 'bg-blue-600 shadow-lg' : 'bg-gray-800 hover:bg-gray-700'}`}>
              <img src={masteryData[key].logo} alt={`${key} logo`} className="h-8 w-auto object-contain" />
            </button>
          ))}
        </div>
        {renderContent()}
      </div>
    </section>
  );
};

export default ApiWorkMastery;
