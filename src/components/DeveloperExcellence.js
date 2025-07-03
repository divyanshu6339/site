import React from 'react';
import robotImage from '../Assets/27.1.png';

const services = [
  {
    title: 'Node.js CMS Development',
    description: 'Hire Node.js developers to create dynamic, scalable CMS platforms with robust features and seamless content management tailored to your needs.',
  },
  {
    title: 'Node.js API Development',
    description: 'We develop secure, high-performance APIs using Node.js, ensuring efficient communication and robust integrations for web and mobile applications.',
  },
  {
    title: 'Node.js App Migration',
    description: 'Hire Node.js experts to migrate legacy systems to Node.js, enhancing scalability, performance, and compatibility with modern application architectures.',
  },
  {
    title: 'Node Web App Development',
    description: 'Hire Node.js programmers to develop feature-rich, real-time web applications using Node.js, ensuring optimal performance and user engagement.',
  },
];

const ServiceCard = ({ title, description }) => (
  <div className="border border-gray-700 rounded-lg p-6 bg-[#0a192f] hover:border-cyan-400 transition-colors duration-300 h-full">
    <h3 className="text-2xl font-semibold text-cyan-400 mb-4">{title}</h3>
    <p className="text-gray-300 text-base">{description}</p>
  </div>
);

const DeveloperExcellence = () => {
  return (
    <div className="bg-[#020c1b] text-white py-20 sm:py-28">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold">
            Excellence of Our{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Node.js Developers</span>
              <svg
                className="absolute left-0 -bottom-3 w-full h-auto text-cyan-400 z-0"
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

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3 flex-shrink-0">
            <img src={robotImage} alt="Developer Excellence" className="w-full h-auto" />
          </div>
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-28">
        <div className="bg-gradient-to-r from-[#3a5a9a] to-[#2c4b8d]">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <h3 className="text-4xl sm:text-5xl font-bold mb-8 md:mb-0 max-w-3xl">
                Ready to Transform Your Software Projects?
              </h3>
              <a
                href="#contact"
                className="inline-block border-2 border-white text-white font-bold py-4 px-10 rounded-md text-xl hover:bg-white hover:text-[#2a4b8d] transition-colors duration-300 flex-shrink-0"
              >
                Hire Our Node.js Developers
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperExcellence; 