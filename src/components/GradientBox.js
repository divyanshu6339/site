import React from 'react';

// Import logos
import payleadrLogo from '../Assets/1.1.png';
import keeyLogo from '../Assets/1.2.png';
import corporateCabsLogo from '../Assets/1.3.png';
import beiqLogo from '../Assets/1.4.png';
import patraLogo from '../Assets/1.5.png';

// Import other images
import deskImage from '../Assets/1.6.jpg';
import ausFlag from '../Assets/1.7.png';

const logos = [payleadrLogo, keeyLogo, corporateCabsLogo, beiqLogo, patraLogo];

const featureData = [
  { text: 'Secure transactions through the integration of a PCI-compliant payment gateway' },
  { text: 'Operational efficiency streamlined through schedulers and caching, reducing data latency' },
  { text: "Platform's customizable nature attracted a new client base, driving revenue" },
  { text: 'Custom development tailored to specific business needs and requirements' },
];

const ArrowIcon = () => (
  <svg className="w-6 h-6 ml-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const CaseStudy = () => {
  return (
    <div className="bg-[#00070E] py-16 px-4 md:px-8">
      <div className="bg-gradient-to-b from-[#A2A4A8] to-[#46474A] text-gray-800 rounded-xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] p-8 max-w-6xl mx-auto">
        {/* Logo Bar */}
        <div className="flex justify-around items-center flex-wrap gap-8 border-b border-gray-500 pb-8 mb-12">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`logo-${index}`} className="h-10 object-contain" />
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div>
            <img src={deskImage} alt="Desk Setup" className="rounded-lg shadow-lg w-full" />
          </div>

          {/* Right Column - Details */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-black leading-tight">
              A Direct Debit Payment Service System, Enhancing Security, Efficient Scheduling, Streamlining Operations, and Driving Business Growth
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featureData.map((feature, index) => (
                <div key={index} className="bg-gray-300 bg-opacity-50 p-4 rounded-lg border-l-4 border-blue-700 transform hover:scale-105 transition-transform duration-300 ease-in-out">
                  <p className="text-sm text-gray-900">{feature.text}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-700">
              Jellyfish Technologies collaborated with Payleadr to create a customizable platform, integrating a PCI-compliant payment gateway, mobile-centric web app, and efficient scheduling, streamlining transactions, enhancing customer support, and driving business growth.
            </p>

            <div className="border-t border-gray-500 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-4">
                <img src={ausFlag} alt="Australian Flag" className="w-8 h-8" />
                <span className="font-semibold text-black">AUSTRALIA</span>
                <span className="text-gray-600">|</span>
                <span className="text-gray-800">REACT | FACILITY MANAGEMENT</span>
              </div>
              <a href="#" className="flex items-center text-blue-700 font-semibold hover:text-blue-900 transition-colors duration-300">
                View Case Study <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
