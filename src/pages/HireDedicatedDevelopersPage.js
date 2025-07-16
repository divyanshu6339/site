import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroHireDevelopers from '../components/HeroHireDevelopers';
import CompanyLogos from '../components/CompanyLogos';
import DeveloperGrid from '../components/DeveloperGrid';
import WorkMasteryTabs from '../components/WorkMasteryTabs';
import BenefitsGrid from '../components/BenefitsGrid';
import TechStack from '../components/TechStack';
import ProcessPathway from '../components/ProcessPathway';
import HiringGuideTabs from '../components/HiringGuideTabs';
import EngagementModel from '../components/EngagementModel';
import FAQ from '../components/FAQ';
import Insights from '../components/Insights';
import HireDevelopersForm from '../components/HireDevelopersForm';
import ConnectWithCTO from '../components/ConnectWithCTO';

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

const HireDedicatedDevelopersPage = () => {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Header />
      <HeroHireDevelopers />
      <CompanyLogos logos={trustedLogos} title="Trusted By" />
      <DeveloperGrid />
      <ConnectWithCTO />
      <WorkMasteryTabs />
      <BenefitsGrid />
      <TechStack />
      <ProcessPathway />
      <HiringGuideTabs />
      <EngagementModel />
      <HireDevelopersForm />
      <FAQ />
      <Insights />
      
      <Footer />
    </div>
  );
};

export default HireDedicatedDevelopersPage; 