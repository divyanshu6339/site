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

const OffshoreDeveloperPage = () => {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Header />
      <HeroOffshore />
      <CompanyLogos />
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