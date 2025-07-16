import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Image Imports
import payleadrLogo from '../Assets/1.1.png';
import keeyLogo from '../Assets/1.2.png';
import corporateCabsLogo from '../Assets/1.3.png';
import beiqLogo from '../Assets/1.4.png';
import patraLogo from '../Assets/1.5.png';

import payleadrProjectImg from '../Assets/Assests2/51.png';
import keeyProjectImg from '../Assets/Assests2/48.png';
import corporateCabsProjectImg from '../Assets/Assests2/49.png';
import beiqProjectImg from '../Assets/Assests2/50.png';
import patraProjectImg from '../Assets/Assests2/47.png';

import australiaFlag from '../Assets/Assests2/54.png';
import germanyFlag from '../Assets/Assests2/52.png';
import ukFlag from '../Assets/Assests2/53.png';
import usFlag from '../Assets/Assests2/55.png';
// NOTE: New Zealand flag path was not provided. Using a placeholder.


const workData = [
  {
    id: 'payleadr',
    companyLogo: payleadrLogo,
    projectImage: payleadrProjectImg,
    title: 'A Direct Debit Payment Service System, Enhancing Security, Efficient Scheduling, Streamlining Operations, and Driving Business Growth',
    features: [
      'Secure transactions through the integration of a PCI-compliant payment gateway',
      'Operational efficiency streamlined through schedulers and caching, reducing data latency',
      "Platform's customizable nature attracted a new client base, driving revenue",
      'Custom development tailored to specific business needs and requirements',
    ],
    description: 'Jellyfish Technologies collaborated with Payleadr to create a customizable platform, integrating a PCI-compliant payment gateway, mobile-centric web app, and efficient scheduling, streamlining transactions, enhancing customer support, and driving business growth.',
    location: { name: 'AUSTRALIA', flag: australiaFlag },
    tags: ['REACT', 'FACILITY MANAGEMENT'],
  },
  {
    id: 'keey',
    companyLogo: keeyLogo,
    projectImage: keeyProjectImg,
    title: 'The Mobile App Provides a Complete Solution for Users Sharing Holiday Apartments with Friends & Family and Offers Exciting Functionalities',
    features: [
      'Availability & Booking Management allows users to manage, and book apartments',
      'Seamless Checkout Process, streamlining the payment and booking confirmation steps',
      'In-app chat functionality offers direct communication between users and owners',
      'Enhanced user satisfaction with intuitive UI/UX, drives user retention in real estate',
    ],
    description: "Jellyfish Technologies partnered with Keey, a prop-tech business, to realize their real-estate idea. Integrating reliable tech stacks—React Native and Node.js, we delivered a mobile app enabling users to rent properties. With its intuitive UI/UX design and enhanced security features, our solution propelled Keey to wider audiences.",
    location: { name: 'GERMANY', flag: germanyFlag },
    tags: ['NODE.JS, SAILS', 'INSURTECH'],
  },
  {
    id: 'corporate-cabs',
    companyLogo: corporateCabsLogo,
    projectImage: corporateCabsProjectImg,
    title: 'Responsive Android App for Cabs in New Zealand with Seamless Online Payments via POS Terminals and Modernizing User Experiences',
    features: [
      'Established reliable connectivity between POS devices and the application',
      '24*7 technical consultation for support & maintenance',
      'Used Transmission Control Protocol (TCP) for smooth and faster operations',
      'Implemented measures to strengthen data security within the application',
    ],
    description: "Corporate Cabs, a renowned taxi service provider in New Zealand, sought the expertise of Jellyfish Technologies to develop an Android app for their POS terminals. Our smart solution optimized transaction processes, enhanced data security measures, and improved customer satisfaction.",
    location: { name: 'NEW ZEALAND', flag: null }, // Placeholder
    tags: ['JS, GOLANG', 'IT'],
  },
  {
    id: 'beiq',
    companyLogo: beiqLogo,
    projectImage: beiqProjectImg,
    title: 'A Leading Fintech Platform With A Behavioral Rating Scale, A Groundbreaking BRS For Investment Planning, And Much More',
    features: [
      'Innovative behavioral research and engagement strategies for financial insights',
      'Outcomes like Be-IQ profiles, BRS for investment planning, & Myers-Briggs reports',
      'Gamified quizzes through secure iFrames, engaging UI, and theme-specific interfaces',
      'Data security measures and scalable solutions ensured protection of sensitive financial data',
    ],
    description: "In collaboration with Be-IQ, Jellyfish Technologies brought their gamified quizzes to reality. We implemented secure iFrames, and responsive UI, and designed theme-specific interfaces. Moreover, our Be-IQ Profiler, incorporating a Behavioral Rating Scale, identified financial vulnerability, delivering unique, market-leading outcomes.",
    location: { name: 'UK', flag: ukFlag },
    tags: ['JAVA-SPRING BOOT', 'INSURTECH'],
  },
  {
    id: 'patra',
    companyLogo: patraLogo,
    projectImage: patraProjectImg,
    title: 'A Secure Web-Based Finance Solution for Smooth Payments, Automated Emails, Premium Financing with Robust Security Measures',
    features: [
      'Integrated advanced fintech solutions for enhanced user experience',
      'Automated tasks reduce task time by 85%, saving costs up to 75%',
      'Seamless checkouts and automated email notifications for efficient operation',
      'Robust security measures to safeguard financial data and transactions',
    ],
    description: "In partnership with Patra Corporation, Jellyfish Technologies developed a cutting-edge web application for seamless payment automation in the insurance industry, delivering enhanced security, efficiency, and user experience, driving growth and client satisfaction.",
    location: { name: 'US', flag: usFlag },
    tags: ['IONIC-ANGULAR', 'PROPTECH'],
  },
];

const WorkMastery = () => {
  const [activeTab, setActiveTab] = useState(workData[0].id);
  const activeWork = workData.find(work => work.id === activeTab);

  return (
    <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold">Our Dedicated Application Modernization Work Mastery</h2>
          <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
            With deep expertise in modernizing legacy systems, we integrate advanced technologies like <span className="text-blue-400">AI</span>, <span className="text-blue-400">IoT</span>, and <span className="text-blue-400">low-code</span> solutions to drive efficiency and scalability. Our dedicated team ensures seamless transitions and continuous support, empowering your business for the future.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1 border-b border-gray-700 mb-12">
          {workData.map(work => (
            <button
              key={work.id}
              onClick={() => setActiveTab(work.id)}
              className={`relative w-full py-4 px-2 text-center transition-colors duration-300 ${activeTab === work.id ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <img src={work.companyLogo} alt={`${work.id} logo`} className="h-10 sm:h-12 mx-auto filter grayscale hover:grayscale-0 transition-all duration-300" />
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            <div className="lg:col-span-5">
                <img src={activeWork.projectImage} alt={activeWork.title} className="rounded-lg shadow-2xl w-full" />
            </div>

            <div className="lg:col-span-7">
                <h3 className="text-3xl font-bold mb-6">{activeWork.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                    {activeWork.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                           <span className="text-blue-400 mr-3 mt-1">&#10003;</span>
                           <p className="text-gray-300 text-lg">{feature}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                    <div>
                        <p className="text-lg text-gray-400">{activeWork.description}</p>
                    </div>
                    <div className="text-right">
                        <div className="flex items-center justify-end mb-4">
                            {activeWork.location.flag ? (
                                <img src={activeWork.location.flag} alt={activeWork.location.name} className="h-6 w-10 mr-3" />
                            ) : <span className="mr-3 text-sm">(Flag)</span>}
                            <p className="font-semibold">{activeWork.location.name}</p>
                        </div>
                        <p className="text-gray-500 text-sm tracking-widest">{activeWork.tags.join(' | ')}</p>
                        <a href="#view-case-study" className="inline-block mt-6 font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                            View Case Study &rarr;
                        </a>
                    </div>
                </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WorkMastery; 