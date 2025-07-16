import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSaaS from '../components/HeroSaaS';
import CompanyLogos from '../components/CompanyLogos';
import SaaSServices from '../components/SaaSServices';
import SaaSConnectForm from '../components/SaaSConnectForm';
import SaaSWorkMastery from '../components/SaaSWorkMastery';
import SaaSSolutionTypes from '../components/SaaSSolutionTypes';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStack from '../components/TechStack';
import WhyChooseSaaS from '../components/WhyChooseSaaS';
import SaaSEssentialGuide from '../components/SaaSEssentialGuide';
import SaaSEngagementModel from '../components/SaaSEngagementModel';
import SaaSFaq from '../components/SaaSFaq';
import LatestInsights from '../components/LatestInsights';

import logo1 from '../Assets/1.1.png';
import logo2 from '../Assets/26.3.png';
import logo3 from '../Assets/26.2.png';
import logo4 from '../Assets/26.4.png';

const trustedLogos = [
  { src: logo1, alt: 'Payleadr' },
  { src: logo2, alt: 'Patra' },
  { src: logo3, alt: 'RedQuanta' },
  { src: logo4, alt: 'Heffernan' },
];

const SaaSDevelopmentPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden">
      <Header />
      <HeroSaaS />
      <div className="bg-white py-12">
        <CompanyLogos logos={trustedLogos} title="Trusted By" />
      </div>
      <SaaSServices />
      <SaaSConnectForm />
      <SaaSWorkMastery />
      <SaaSSolutionTypes />
      <WhyChooseSaaS />
      <SaaSEssentialGuide />
      <SaaSEngagementModel />
      <TechStack />
      <ClutchTestimonials />
      <SaaSFaq />
      <LatestInsights />
      <Footer />
    </div>
  );
};

export default SaaSDevelopmentPage; 