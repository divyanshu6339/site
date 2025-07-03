import React from 'react';

// Import images
import goodfirmsTopDev from '../Assets/48.png';
import salesforceLogo from '../Assets/49.png';
import clutchLogo from '../Assets/14.1.png';
import greatPlaceToWork from '../Assets/55.png';
import goodfirmsBestCompany from '../Assets/50.png';

const awardsData = [
  {
    image: goodfirmsTopDev,
    label: '5/5 Verified Rating on Goodfirms',
  },
  {
    image: salesforceLogo,
    label: 'Top Developers On Clutch',
  },
  {
    image: clutchLogo,
    label: 'Salesforce Certified Developer',
  },
  {
    image: greatPlaceToWork,
    label: 'Great Place to Work Certified',
  },
  {
    image: goodfirmsBestCompany,
    label: 'Best Company Goodfirms',
  },
];

const AwardItem = ({ image, label, className }) => (
    <div className={`flex flex-col items-center text-center ${className}`}>
        <img src={image} alt={label} className="h-32 object-contain mb-4" />
        <p className="text-gray-300 font-semibold text-base">{label}</p>
    </div>
);

const Awards = () => {
  return (
    <div className="bg-[#04102a] text-white py-20 sm:py-28">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left side content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-5xl sm:text-6xl font-bold mb-8">
                Awards & Recognitions
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Over the past <span className="text-blue-400">14+ years</span>, Jellyfish Technologies has worked with <span className="text-blue-400">startups</span>, <span className="text-blue-400">agencies</span>, and <span className="text-blue-400">enterprises</span> across the globe. Our dedicated and passion-driven work for our clients has earned us multiple awards & recognitions.
            </p>
          </div>

          {/* Right side awards grid */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-2 gap-y-12 items-center">
                {/* Row 1 */}
                <AwardItem {...awardsData[0]} className="col-start-1" />
                <AwardItem {...awardsData[1]} className="col-start-2" />

                {/* Row 2 */}
                <AwardItem {...awardsData[2]} className="col-span-2 justify-self-center mt-4" />

                {/* Row 3 */}
                <AwardItem {...awardsData[3]} className="col-start-1" />
                <AwardItem {...awardsData[4]} className="col-start-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards; 