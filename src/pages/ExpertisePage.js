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

// Import images for services
import customSoftwareDev from '../Assets/7f26b76b638d81b119ab24bd93a9ee7dbab7076a.png';
import enterpriseSoftwareDev from '../Assets/2.png';
import softwareProductDev from '../Assets/3.png';
import softwareConsulting from '../Assets/4.png';
import offshoreDev from '../Assets/5.png';
import softwareIntegration from '../Assets/6.png';

const expertiseServices = [
  {
    imgSrc: customSoftwareDev,
    title: 'Custom Software Development',
    description: 'Tailored software solutions built specifically around your business needs—ensuring scalability, flexibility, and competitive advantage.',
  },
  {
    imgSrc: enterpriseSoftwareDev,
    title: 'Enterprise Software Development',
    description: 'Robust, secure, and scalable enterprise applications to streamline workflows, improve productivity, and drive digital transformation.',
  },
  {
    imgSrc: softwareProductDev,
    title: 'Software Product Development',
    description: 'From concept to launch—we transform ideas into full-fledged, market-ready products with intuitive design and reliable performance.',
  },
  {
    imgSrc: softwareConsulting,
    title: 'Software Consulting Development',
    description: 'Leverage our technical expertise to make strategic decisions. We help you choose the right architecture, technologies, and roadmap.',
  },
  {
    imgSrc: offshoreDev,
    title: 'Offshore Software Development',
    description: 'Access global talent and reduce costs. Our offshore teams integrate seamlessly with your operations and deliver high-quality code.',
  },
  {
    imgSrc: softwareIntegration,
    title: 'Software Integration Development',
    description: 'Ensure all your business systems talk to each other. We integrate APIs, legacy software, and cloud solutions for smoother workflows.',
  },
];


const ExpertisePage = () => {
  return (
    <div className="App bg-black">
      <Header />
      <MainContent 
        title="Software Development Service"
        subtitle='"Empowering Innovation Through Custom Software Solutions"'
        description='"Scalable. Secure. Tailored to Your Business."'
        buttonText="Get a custom"
      />
      <Services 
        title="Software Development Service we offer"
        description='"Building Intelligent Software That Powers Business Growth."'
        servicesData={expertiseServices}
      />
      <ContactForm />
      <WorkMatery 
        title="Our Dedicated Software Development Work Matery"
        description="Our Dedicated Software Development Offer a range of benefits, with certified professionals skilled in emerging technologies like AI, low code/no code, and IoT. Hire dedicated software developers to integrate core tech strength and 24/7 support, ensuring seamless maintenance from code to production, offering your project success and scalability."
      />
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