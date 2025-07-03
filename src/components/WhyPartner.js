import React from 'react';
import BlurCircle from './BlurCircle';
import FeatureCard from './FeatureCard';

// Import logos
import sequelizeLogo from '../Assets/13.4.png';
import typescriptLogo from '../Assets/13.6.png';
import mongooseLogo from '../Assets/13.2.png';
import webpackLogo from '../Assets/13.7.png';
import nestjsLogo from '../Assets/13.3.png';
import jestLogo from '../Assets/13.1.png';
import socketioLogo from '../Assets/13.5.png';

const features = [
    {
      title: "Stable & Secured Solutions",
      description: "Hire Node.js developers to deliver stable, secure applications. Our Node.js development team ensures robust architectures and data protection for every project.",
      variant: "left"
    },
    {
      title: "Superior Quality of Work",
      description: "Hire Node.js programmers skilled in crafting high-performance solutions with clean, maintainable code that exceeds industry standards and client expectations.",
      variant: "right"
    },
    {
      title: "Full Stack Developers",
      description: "Hire full-stack Node.js developers who excel in frontend and backend development, ensuring seamless application functionality and dynamic user experiences.",
      variant: "left"
    },
    {
      title: "Cost Effectiveness",
      description: "Collaborate with our Node.js development agency to access expert developers at competitive rates, optimizing your investment without compromising on quality.",
      variant: "right"
    }
];

const techExpertise = [
    { src: sequelizeLogo, alt: 'Sequelize' },
    { src: typescriptLogo, alt: 'Typescript' },
    { src: mongooseLogo, alt: 'Mongoose' },
    { src: webpackLogo, alt: 'Webpack' },
    { src: nestjsLogo, alt: 'Nest.js' },
    { src: jestLogo, alt: 'Jest' },
    { src: socketioLogo, alt: 'Socket.io' },
];

const TechLogo = ({ src, alt }) => (
    <div className="flex flex-col items-center justify-center gap-3 transition-transform duration-300 hover:scale-110 group">
      <div className="bg-white rounded-lg p-2 flex items-center justify-center h-24 w-24 shadow-lg transition-all duration-300 group-hover:shadow-cyan-400/30">
        <img className="max-h-full max-w-full object-contain" src={src} alt={alt} />
      </div>
      <p className="text-white font-semibold text-lg">{alt}</p>
    </div>
);

const WhyPartner = () => {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
            />
            <section className="overflow-hidden relative w-full bg-gray-950 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
                {/* Background Blur Circles */}
                <div className="absolute inset-0 overflow-hidden hidden md:block">
                    <BlurCircle variant={1} />
                    <BlurCircle variant={2} />
                    <BlurCircle variant={3} />
                    <BlurCircle variant={4} />
                </div>
                
                <div className="relative max-w-screen-xl mx-auto">
                    <header className="flex justify-between items-center w-full max-md:flex-col max-md:gap-8 max-md:items-center max-sm:gap-6 mb-16 sm:mb-24">
                        <h1 className="text-4xl sm:text-5xl font-bold text-white max-md:text-3xl max-md:text-center">
                            Why Partner with Our Dedicated<br/>Node.js Development Team
                        </h1>
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-md text-lg transition-colors duration-300 flex-shrink-0 cursor-pointer max-sm:w-full max-sm:max-w-[200px]">
                            Talk to an Expert
                        </button>
                    </header>
    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-8 lg:gap-y-12 mb-28">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                title={feature.title}
                                description={feature.description}
                                variant={feature.variant}
                            />
                        ))}
                    </div>
                </div>

                {/* Technical Expertise Section */}
                <div className="relative max-w-screen-xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="lg:w-auto lg:flex-shrink-0 text-center lg:text-left mb-10 lg:mb-0">
                            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
                                Technical Expertise of<br />
                                <span className="relative inline-block mt-2">
                                    <span className="relative z-10">Our Node.js Developers</span>
                                    <svg
                                        className="absolute left-0 -bottom-4 w-full h-auto text-cyan-400 z-0"
                                        viewBox="0 0 100 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            d="M1 6 C 10 2, 20 7, 30 5 C 40 3, 50 8, 60 5 C 70 2, 80 7, 90 4 C 95 2, 99 5, 99 5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </h2>
                        </div>
                        <div className="w-full lg:w-auto">
                            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-8">
                                {techExpertise.map((tech, index) => (
                                    <TechLogo key={index} {...tech} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyPartner; 