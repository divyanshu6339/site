import React from 'react';
import Header from '../components/Header';
import OffshoreFooter from '../components/OffshoreFooter';
import HeroOffshore from '../components/HeroOffshore';
import CompanyLogos from '../components/CompanyLogos';
import DeveloperExcellence from '../components/DeveloperExcellence';
import WhyPartner from '../components/WhyPartner';
import Testimonials from '../components/Testimonials';
import WorkSlider from '../components/WorkSlider';
import NodeServices from '../components/NodeServices';
import HiringGuide from '../components/HiringGuide';
import EngagementFAQ from '../components/EngagementFAQ';
import LatestInsights from '../components/LatestInsights';

import logo1 from '../Assets/26.1.png';
import logo2 from '../Assets/26.2.png';
import logo3 from '../Assets/26.3.png';
import logo4 from '../Assets/26.4.png';
import logo5 from '../Assets/26.5.png';
import logo6 from '../Assets/26.6.png';

const offshoreLogos = [
  { src: logo1, alt: 'CertVault' },
  { src: logo2, alt: 'RedQuanta' },
  { src: logo3, alt: 'Patra' },
  { src: logo4, alt: 'Heffernan Group' },
  { src: logo5, alt: 'Revjer' },
  { src: logo6, alt: 'KFM 24/7' },
];

const OffshoreDeveloperPage = () => {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Header />
      <HeroOffshore />
      <CompanyLogos logos={offshoreLogos} />
      <DeveloperExcellence />
      <WhyPartner />
      <Testimonials />
      <WorkSlider />
      <NodeServices />
      <HiringGuide />
      <EngagementFAQ />
      <LatestInsights />
      <OffshoreFooter />
    </div>
  );
};

export default OffshoreDeveloperPage; 