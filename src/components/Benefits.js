import React from 'react';
import benefitsImage from '../Assets/2.1.jpg';

const benefitsData = [
  {
    number: '01',
    title: 'Streamlined Operations',
    description: 'Automate repetitive tasks and optimize workflows to improve team efficiency and reduce manual errors.',
  },
  {
    number: '02',
    title: 'Enhanced Customer Experience',
    description: 'Deliver personalized, user-friendly solutions that increase engagement, satisfaction, and loyalty.',
  },
  {
    number: '03',
    title: 'Accurate Data Analysis',
    description: 'Gain actionable insights with reliable data tracking and reporting tools, empowering smarter business decisions.',
  },
  {
    number: '04',
    title: 'Scalable & Future-Ready',
    description: 'Built with flexibility in mind, our solutions grow with your business—adapting to new challenges and market demands.',
  },
  {
    number: '05',
    title: 'Advanced Security',
    description: 'We implement enterprise-grade encryption, secure coding practices, and threat monitoring for full data protection.',
  },
  {
    number: '06',
    title: 'Increased Productivity',
    description: 'Enable faster project delivery and internal collaboration through intelligent automation and intuitive design.',
  },
  {
    number: '07',
    title: 'Business-Aligned Architecture',
    description: 'Solutions tailored specifically to your goals, reducing tech waste and maximizing ROI.',
  },
  {
    number: '08',
    title: 'Cost-Effective Delivery',
    description: 'Maximize value with smart development strategies, efficient planning, and transparent pricing.',
  },
  {
    number: '09',
    title: 'World-Class UX/UI',
    description: 'Delight users with beautiful, intuitive interfaces that combine form and function.',
  },
];

const BenefitCard = ({ number, title, description }) => (
  <div className="bg-black bg-opacity-30 backdrop-blur-sm p-6 rounded-lg border-2 border-dashed border-blue-900/50 hover:border-blue-400 hover:bg-opacity-40 transition-all duration-300 transform hover:-translate-y-1">
    <p className="text-blue-400 font-semibold text-lg mb-2">{number}</p>
    <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const Benefits = () => {
  return (
    <div className="bg-[#00070E] pt-24 pb-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Text Content */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Benefits of Our Custom Software Development Services
          </h2>
          <p className="text-gray-400 text-2xl leading-relaxed">
            Our bespoke software development services are tailored to your unique needs, delivering solutions that perfectly fit your business. Find out the benefits of our custom software development services.
          </p>
        </div>

        {/* Image with Overlay Grid */}
        <div
          className="relative bg-cover bg-center rounded-lg shadow-2xl overflow-hidden"
          style={{ backgroundImage: `url(${benefitsImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-75 z-0" />
          {/* Overlay Content */}
          <div className="relative z-10 p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {benefitsData.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits; 