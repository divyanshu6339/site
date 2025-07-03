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
  <div className="bg-[#00070E] border border-gray-800 rounded-lg p-8 text-center flex flex-col items-center h-full">
    <img src={imgSrc} alt={title} className="h-20 mb-6" />
    <h3 className="text-xl font-semibold text-blue-500 mb-4">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const Services = () => {
  return (
    <div className="py-24 px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Software Development Service we offer</h2>
        <p className="text-lg text-gray-400">"Building Intelligent Software That Powers Business Growth."</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services; 