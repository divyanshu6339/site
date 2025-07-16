import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroUIUXServices from '../components/HeroUIUXServices';
import CompanyLogos from '../components/CompanyLogos';
import UIUXServicesOffer from '../components/UIUXServicesOffer';
import ConnectExpertsForm from '../components/ConnectExpertsForm';
import UIUXWorkMastery from '../components/UIUXWorkMastery';
import StunningServices from '../components/StunningServices';
import ClutchTestimonials from '../components/ClutchTestimonials';
import UIUXTechStack from '../components/UIUXTechStack';
import WhyChooseAlpixn from '../components/WhyChooseAlpixn';
import ExcitedToLaunch from '../components/ExcitedToLaunch';
import EssentialGuide from '../components/EssentialGuide';
import UIUXEngagementModel from '../components/UIUXEngagementModel';
import UIUXConnectForm from '../components/UIUXConnectForm';
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

const UIUXServicesPage = () => {
  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <Header />
      <HeroUIUXServices />
      <CompanyLogos logos={trustedLogos} title="Trusted By" />
      <UIUXServicesOffer />
      <ConnectExpertsForm />
      <UIUXWorkMastery />
      <StunningServices />
      <ClutchTestimonials />
      <UIUXTechStack />
      <WhyChooseAlpixn />
      <ExcitedToLaunch />
      <EssentialGuide />
      <UIUXEngagementModel />
      <UIUXConnectForm />
      <LatestInsights />
      <Footer />
    </div>
  );
};

export default UIUXServicesPage; 