import React from 'react';
import circuitIcon from '../Assets/circuit.svg';

const servicesData = [
  {
    title: 'Custom Node.js Development',
    description: 'Hire Node.js developers to create tailored applications that meet specific business needs, delivering innovative solutions with robust, scalable architectures.',
    highlighted: true,
  },
  {
    title: 'Enterprise Node.js Web Apps',
    description: 'Hire Node.js development experts to build enterprise-grade web applications that ensure seamless performance and meet complex organizational demands.',
  },
  {
    title: 'Node.js Application Modernization',
    description: 'Modernize legacy systems by hiring Node.js consultants for efficient upgrades, enhanced compatibility, and performance improvements using the latest technologies.',
  },
  {
    title: 'Microservice Architecture Development',
    description: 'Hire Node.js programmers to design and implement modular microservices, ensuring flexibility, scalability, and seamless integration.',
  },
  {
    title: 'Real-Time Chat Apps',
    description: 'Build feature-rich real-time chat applications with our Node.js experts for enhanced communication, user engagement, and scalability.',
  },
  {
    title: 'Node.js Plugin Development',
    description: "Hire Node.js developers to create custom plugins that extend your application's functionality and optimize performance for specific requirements.',"
  },
  {
    title: 'Node.js Developer Augmentation',
    description: 'Hire dedicated Node.js developers to augment your existing team, accelerating project delivery and enhancing technical expertise.',
  },
  {
    title: 'Node.js Development Consulting',
    description: 'Find Node.js developers for your project with expert consulting, addressing challenges and ensuring optimal implementation strategies.',
  },
  {
    title: 'Node.js Maintenance and Support',
    description: 'Hire remote Node.js developers for maintenance and support services, keeping your application secure, updated, and performing optimally.',
  },
];

const ServiceCard = ({ title, description, highlighted }) => {
    const cardClasses = highlighted
        ? 'bg-blue-600'
        : 'bg-[#0a192f]';

    return (
        <div className={`relative border border-gray-700 rounded-lg p-6 flex flex-col transition-all duration-300 hover:border-cyan-400 hover:-translate-y-1 ${cardClasses}`}>
            <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-400/20 rounded-full p-3">
                    <img src={circuitIcon} alt="Icon" className="h-8 w-8" />
                </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className={`text-base leading-relaxed ${highlighted ? 'text-blue-100' : 'text-gray-400'}`}>{description}</p>
        </div>
    );
};


const NodeServices = () => {
  return (
    <div className="bg-[#020c1b] text-white py-16 sm:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Hire Node.js Developers for Reliable{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Software Solutions</span>
              <svg
                className="absolute left-0 -bottom-2 w-full h-auto text-cyan-400 z-0"
                viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
              >
                <path d="M1 6 C 10 2, 20 7, 30 5 C 40 3, 50 8, 60 5 C 70 2, 80 7, 90 4 C 95 2, 99 5, 99 5"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </h2>
          <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-400">
            Our Node.js development services provide businesses with scalable, high-performance applications, seamless API integration, real-time data processing capabilities, robust security, microservices architecture, and reduced development costs and time, all tailored to meet your specific needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      
      <div className="mt-24">
        <div className="bg-gradient-to-r from-blue-900 to-blue-800">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
                <h3 className="text-3xl sm:text-4xl font-bold">
                    Want to speak with our solution experts?
                </h3>
                <a
                    href="#contact"
                    className="inline-block border-2 border-white text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-white hover:text-blue-900 transition-colors duration-300 flex-shrink-0"
                >
                    Book a Meeting
                </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NodeServices; 