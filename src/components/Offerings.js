import React from 'react';

// Import images
import softwareDevImage from '../Assets/42.png';
import dataAnalyticsImage from '../Assets/43.png';
import cloudEngImage from '../Assets/44.png';
import appModernizationImage from '../Assets/45.png';
import aiDevImage from '../Assets/46.png';
import devopsImage from '../Assets/47.png';

const offeringsData = [
  {
    image: softwareDevImage,
    title: 'Software Development',
    description: 'We specialize in software development and customized solutions, utilizing the latest technologies (blockchain, web3, ML, AI) and industry best practices to help businesses achieve their digital goals.',
  },
  {
    image: dataAnalyticsImage,
    title: 'Data Analytics',
    description: 'Unlock the potential of data through advanced visualization and our team of expert data analysts. Our data analytics services harness cutting-edge technology to extract actionable insights and customize solutions for your business\'s success.',
  },
  {
    image: cloudEngImage,
    title: 'Cloud Engineering',
    description: 'Our cloud engineering services facilitate the re-platforming, re-hosting, and re-engineering of applications, optimizing them for cloud environments. You can harness the power of the cloud to effectively address intricate business challenges.',
  },
  {
    image: appModernizationImage,
    title: 'Application Modernization',
    description: 'Our application modernization services can breathe new life into your existing software, enhancing performance, security, and user experience. We\'re committed to supporting you every step of the way on your application modernization journey.',
  },
  {
    image: aiDevImage,
    title: 'AI Development',
    description: 'Our AI services bring expertise and experience in natural language processing, machine learning, automated ML, generative AI, responsible AI, and more to help you deliver innovative solutions at scale.',
  },
  {
    image: devopsImage,
    title: 'DevOps Services',
    description: 'With our DevOps services and solutions, we optimize workflows with automation and collaboration, ensuring efficient software delivery. Our certified DevOps experts incorporate best practices to enhance scalability and reliability in the ever-evolving tech landscape.',
  },
];

const OfferingCard = ({ image, title, description }) => (
    <div className="relative bg-gradient-to-b from-[#0e214b] to-[#040e2a] p-8 rounded-2xl border border-blue-800/50 h-full transform transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400">
        <div className="mb-6">
            <img src={image} alt={title} className="w-24 h-24 mx-auto" />
        </div>
        <h3 className="text-2xl font-bold text-white text-center mb-4">{title}</h3>
        <p className="text-gray-400 text-center text-base">{description}</p>
    </div>
);


const WavyUnderline = () => (
    <svg className="w-full h-auto text-blue-400" viewBox="0 0 100 6" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M1 4.5 C 10 1.5, 20 5.5, 30 3.5 C 40 1.5, 50 6.5, 60 3.5 C 70 0.5, 80 5.5, 90 2.5 C 95 0.5, 99 3.5, 99 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);


const Offerings = () => {
  return (
    <div className="bg-[#04102a] text-white py-20 sm:py-28">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Explore Our <span className="relative inline-block">
                <span className="relative z-10">Offerings</span>
                <div className="absolute left-0 -bottom-1 w-full h-2">
                    <WavyUnderline />
                </div>
            </span>
          </h2>
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
            Whether you're building from scratch or scaling up, our expert services in software, AI, and app development are designed to meet your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offeringsData.map((offering, index) => (
            <OfferingCard key={index} {...offering} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offerings; 