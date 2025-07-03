import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';
import WorkMatery from '../components/WorkMatery';
import Benefits from '../components/Benefits';
import GradientBox from '../components/GradientBox';
import Testimonials from '../components/Testimonials';
import TechnologyAndExpertise from '../components/TechnologyAndExpertise';
import SoftwareGuide from '../components/SoftwareGuide';
import NewContactForm from '../components/NewContactForm';
import EngagementFAQ from '../components/EngagementFAQ';
import Insights from '../components/Insights';
import Footer from '../components/Footer';

const ExpertisePage = () => {
  return (
    <div className="App bg-black">
      <Header />
      <MainContent />
      <Services />
      <ContactForm />
      <WorkMatery />
      <GradientBox />
      <Benefits />
      <Testimonials />
      <TechnologyAndExpertise />
      <SoftwareGuide />
      <NewContactForm />
      <EngagementFAQ />
      <Insights />
      <Footer />
    </div>
  );
};

export default ExpertisePage; 