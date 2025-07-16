import React from 'react';

// Import images
import customSoftwareDev from '../Assets/7f26b76b638d81b119ab24bd93a9ee7dbab7076a.png';
import enterpriseSoftwareDev from '../Assets/2.png';
import softwareProductDev from '../Assets/3.png';
import softwareConsulting from '../Assets/4.png';
import offshoreDev from '../Assets/5.png';
import softwareIntegration from '../Assets/6.png';

const servicesData = [
  {
    imgSrc: customSoftwareDev,
    title: 'Custom Software Development',
    description: 'Tailored software solutions built specifically around your business needs—ensuring scalability, flexibility, and competitive advantage.',
  },
  {
    imgSrc: enterpriseSoftwareDev,
    title: 'Enterprise Software Development',
    description: 'Robust, secure, and scalable enterprise applications to streamline workflows, improve productivity, and drive digital transformation.',
  },
  {
    imgSrc: softwareProductDev,
    title: 'Software Product Development',
    description: 'From concept to launch—we transform ideas into full-fledged, market-ready products with intuitive design and reliable performance.',
  },
  {
    imgSrc: softwareConsulting,
    title: 'Software Consulting Development',
    description: 'Leverage our technical expertise to make strategic decisions. We help you choose the right architecture, technologies, and roadmap.',
  },
  {
    imgSrc: offshoreDev,
    title: 'Offshore Software Development',
    description: 'Access global talent and reduce costs. Our offshore teams integrate seamlessly with your operations and deliver high-quality code.',
  },
  {
    imgSrc: softwareIntegration,
    title: 'Software Integration Development',
    description: 'Ensure all your business systems talk to each other. We integrate APIs, legacy software, and cloud solutions for smoother workflows.',
  },
];

const ServiceCard = ({ imgSrc, title, description }) => (
  <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 text-center flex flex-col items-center h-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
    <h3 className="text-3xl font-bold text-white mb-5">{title}</h3>
    <p className="text-gray-300 text-lg">{description}</p>
  </div>
);

const Services = ({ title, description, services }) => {
  return (
    <div className="py-24 px-4 bg-black">
      <div className="text-center mb-20 max-w-screen-xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">{title}</h2>
        <p className="text-xl text-gray-300">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services && services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services; 