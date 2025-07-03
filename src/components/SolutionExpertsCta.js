import React from 'react';
import logo1 from '../Assets/26.1.png';
import logo2 from '../Assets/26.2.png';
import logo3 from '../Assets/26.3.png';
import logo4 from '../Assets/26.4.png';
import logo5 from '../Assets/26.5.png';
import logo6 from '../Assets/26.6.png';

const logos = [
  { src: logo1, alt: 'CertVault by Patra' },
  { src: logo2, alt: 'redquanta' },
  { src: logo3, alt: 'Patra' },
  { src: logo4, alt: 'Heffernan Group' },
  { src: logo5, alt: 'Revjer' },
  { src: logo6, alt: 'KFM24' },
];

const SolutionExpertsCta = () => {
  return (
    <section>
      <div className="bg-[#0a192f] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-6 gap-8 items-center">
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <img
                  className="max-h-24 w-auto object-contain"
                  src={logo.src}
                  alt={logo.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#2563eb] relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-48 h-48 md:w-64 md:h-64 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-48 h-48 md:w-64 md:h-64 bg-white/5 rounded-full"></div>
        
        <div className="relative max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Want to speak with our solution experts?
          </h2>
          <div className="mt-8 flex justify-center">
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-blue-600 transition-colors">
              Book a Meeting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionExpertsCta; 