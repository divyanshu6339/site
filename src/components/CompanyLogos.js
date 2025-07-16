import React from 'react';

import logo1 from '../Assets/26.1.png';
import logo2 from '../Assets/26.2.png';
import logo3 from '../Assets/26.3.png';
import logo4 from '../Assets/26.4.png';
import logo5 from '../Assets/26.5.png';
import logo6 from '../Assets/26.6.png';

const logos = [
  { src: logo1, alt: 'CertVault' },
  { src: logo2, alt: 'RedQuanta' },
  { src: logo3, alt: 'Patra' },
  { src: logo4, alt: 'Heffernan Group' },
  { src: logo5, alt: 'Revjer' },
  { src: logo6, alt: 'KFM 24/7' },
];

const CompanyLogos = ({ title, logos }) => {
  const isTrustedBy = title === 'Trusted By';
  const bgColor = isTrustedBy ? 'bg-white' : 'bg-gray-900';
  const textColor = isTrustedBy ? 'text-gray-700' : 'text-gray-300';

  return (
    <div className={`${bgColor} py-12 sm:py-16`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && <h2 className={`text-center text-lg font-semibold ${textColor} uppercase tracking-widest mb-10`}>{title}</h2>}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16 lg:gap-x-20">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img className="h-16 sm:h-20 md:h-24 object-contain" src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos; 