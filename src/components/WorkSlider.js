import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Import assets
import image1 from '../Assets/31.png';
import image2 from '../Assets/32.png';
import image3 from '../Assets/33.png';
import image4 from '../Assets/34.png';
import image5 from '../Assets/35.png';

const slidesData = [
  {
    id: 1,
    image: image1,
    title: 'Unify All FM Operations On A Single Platform To Enhance Efficiency And Cut Costs.',
    description: 'Integrated FM Group, a leading facility management provider, collaborated with Jellyfish Technologies to streamline operations. The developed platform integrates work orders, asset management, preventive maintenance, and vendor management, enhancing efficiency and reducing costs.',
    features: [
        "Analyzed client's operations and FM trends, and followed a structured dev process.",
        "Conducted constructive user testing sessions during the development phase.",
        "The work order and management feature was added to create, assign, and track.",
        "Enhanced facility managers to oversee service providers and suppliers."
    ],
    theme: 'dark'
  },
  {
    id: 2,
    image: image2,
    title: 'Empowers Brokers and Integrates With Top US Insurers For Swift Certificate Issuance And Optimal Premium Quotes.',
    description: 'Patra Corporation partnered with Jellyfish Technologies to develop a secure, web-based payment automation solution for premium finance in the insurance industry. The result improved task efficiency, reduced costs, and enhanced the overall user experience.',
    features: [
        'API integration module with configuration based approach.',
        'XML transports diverse data formats in a flexible and readable structure.',
        'The integration module has robust authorization mechanisms for secure data exchange.',
        'Underwriting questions for risk assessment stored in XML databases for insurance standards.'
    ],
    theme: 'light'
  },
  {
    id: 3,
    image: image3,
    title: 'A SaaS Solution to Streamline Google Workspace User Management, Automating Tasks for Efficiency.',
    description: 'Jellyfish Technologies facilitated the launch of Patronum (Bespin Labs). The developed platform streamlines Google Workspace tasks, offering enhanced control over user files, efficient sharing, copying, and backup options, adding another satisfied client to our list.',
    features: [
        'Code optimized for seamless handling of synchronous requests and high-volume traffic.',
        'Integrated Google API, enhancing product functionality and connectivity.',
        'Real-time updates for unstructured data were generated using MongoDB.',
        'Automated provisioning and de-provisioning users within Google Workspace.'
    ],
    theme: 'light'
  },
  {
    id: 4,
    image: image4,
    title: "Develop An Internal Insurance App For Daily Storage Of Client's Private Data By Employees.",
    description: "Heffernan, a leading US insurance brokerage, partnered with Jellyfish Technologies to develop a secure internal application for client data storage. The solution included robust authentication, responsive UI, file storage, and report generation, resulting in a fast and secure data management system.",
    features: [
        'With planning & research, evaluated app functionalities and architectural needs.',
        'Developed a responsive UI with full accessibility, integrating Bootstrap design.',
        'Top-notch user experience drove the design, resulting in a clean, intuitive UX.',
        'App creates reports in CSV/PDF formats for data analysis and sharing.'
    ],
    theme: 'light'
  },
  {
    id: 5,
    image: image5,
    title: 'Visual Solutions For Builders/Homebuyers And Provides Weekly Build Progress Reports Via Photos.',
    description: 'Jellyfish Technologies collaborated with Builder Digital Solutions to create and deliver various visual marketing and engagement solutions for builders and new home buyers.',
    features: [
        'Improved UI with enhanced design elements and navigation.',
        'Developed a responsive UI with full accessibility, integrating Bootstrap design.',
        'Identified key features for mobile and web app performance enhancements.',
        'We addressed bugs, refining existing features for improved functionality & UX.'
    ],
    theme: 'light'
  }
];

const Arrow = ({ direction, onClick, disabled, theme }) => {
    const iconColor = theme === 'dark' ? 'white' : 'black';
    const bgColor = theme === 'dark' ? 'bg-gray-800/50 hover:bg-gray-700/70' : 'bg-gray-200/70 hover:bg-gray-300/90';
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300 ${bgColor} disabled:opacity-50 disabled:cursor-not-allowed`}
        >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={direction === 'left' ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
}

const FeatureListItem = ({ children, theme }) => (
    <li className="flex items-start gap-3">
        <svg className={`flex-shrink-0 w-5 h-5 mt-1 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{children}</span>
    </li>
);

const WorkSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
    };

    const currentSlide = slidesData[currentIndex];
    const sectionBg = currentSlide.theme === 'dark' ? 'bg-[#020c1b]' : 'bg-white';
    const textColor = currentSlide.theme === 'dark' ? 'text-white' : 'text-gray-900';
    const subtextColor = currentSlide.theme === 'dark' ? 'text-gray-300' : 'text-gray-600';

    return (
        <section className={`relative transition-colors duration-500 ${sectionBg} py-16 sm:py-24`}>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl sm:text-5xl font-bold ${textColor}`}>Our Work Speaks for Itself</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg ${subtextColor}`}>
                        Explore how our dedicated <a href="#" className="text-blue-500 hover:underline">Node.js developers</a> have transformed businesses by delivering scalable, secure, and cost-effective solutions tailored to meet <a href="#" className="text-blue-500 hover:underline">diverse industry</a> needs and challenges.
                    </p>
                </div>
                
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
                    >
                        <div className="lg:w-1/2">
                            <img src={currentSlide.image} alt={currentSlide.title} className="max-w-full h-auto mx-auto" />
                        </div>
                        <div className="lg:w-1/2">
                            <h3 className={`text-3xl font-bold ${textColor}`}>{currentSlide.title}</h3>
                            <p className={`mt-4 text-lg ${subtextColor}`}>{currentSlide.description}</p>
                            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                {currentSlide.features.map((feature, index) => (
                                    <FeatureListItem key={index} theme={currentSlide.theme}>{feature}</FeatureListItem>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="flex justify-end items-center mt-12 gap-4">
                    <Arrow direction="left" onClick={handlePrev} theme={currentSlide.theme} />
                    <Arrow direction="right" onClick={handleNext} theme={currentSlide.theme} />
                </div>
            </div>
        </section>
    );
};

export default WorkSlider; 