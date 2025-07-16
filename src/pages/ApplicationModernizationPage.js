import React from 'react';
import HeroApplicationModernization from '../components/HeroApplicationModernization';
import TrustedBy from '../components/TrustedBy';
import ModernizationServices from '../components/ModernizationServices';
import WorkMastery from '../components/WorkMastery';
import ModernizationBenefits from '../components/ModernizationBenefits';
import ModernizationTestimonials from '../components/ModernizationTestimonials';
import WhyChooseJellyfish from '../components/WhyChooseJellyfish';
import ReadyToGetStarted from '../components/ReadyToGetStarted';
import ModernizationGuide from '../components/ModernizationGuide';
import ModernizationEngagementModel from '../components/ModernizationEngagementModel';
import ModernizationContactForm from '../components/ModernizationContactForm';
import ModernizationFAQ from '../components/ModernizationFAQ';
import LatestInsights from '../components/LatestInsights';
import ConnectWithAnExpert from '../components/ConnectWithAnExpert';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ApplicationModernizationPage = () => {
  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <Header />
      <HeroApplicationModernization />
      <TrustedBy />
      <ModernizationServices />
      <WorkMastery />
      <ModernizationBenefits />
      <ModernizationTestimonials />
      <WhyChooseJellyfish />
      <ReadyToGetStarted />
      <ModernizationGuide />
      <ModernizationEngagementModel />
      <ModernizationContactForm />
      <ModernizationFAQ />
      <LatestInsights />
      <ConnectWithAnExpert />
      <Footer />
    </div>
  );
};

export default ApplicationModernizationPage; 