import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroImageSide from '../components/HeroImageSide';
import CompanyLogos from '../components/CompanyLogos';
import Services from '../components/Services';
import ConnectForm from '../components/ConnectForm';
import WorkMatery from '../components/WorkMatery';
import WorkTabs from '../components/WorkTabs';
import CapabilitiesGrid from '../components/CapabilitiesGrid';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import WhyChooseUs from '../components/WhyChooseUs';
import ExcitedCTA from '../components/ExcitedCTA';
import DevelopmentGuide from '../components/DevelopmentGuide';
import EngagementModel from '../components/EngagementModel';
import NewContactForm from '../components/NewContactForm';
import MobileAppFAQ from '../components/MobileAppFAQ';
import LatestInsights from '../components/LatestInsights';

import mobileAppImage from '../Assets/Assests2/45.png';
import logo1 from '../Assets/1.1.png';
import logo2 from '../Assets/1.5.png';
import logo3 from '../Assets/26.2.png';
import logo4 from '../Assets/26.4.png';

import iosDev from '../Assets/Assests2/5.png';
import androidDev from '../Assets/Assests2/6.png';
import hybridDev from '../Assets/Assests2/7.png';
import ondemandDev from '../Assets/Assests2/8.png';
import wearableDev from '../Assets/Assests2/9.png';
import crossplatformDev from '../Assets/Assests2/10.png';

const trustedByLogos = [
  { src: logo1, alt: 'Company Logo 1' },
  { src: logo2, alt: 'Company Logo 2' },
  { src: logo3, alt: 'RedQuanta' },
  { src: logo4, alt: 'Heffernan Group' },
];

const mobileAppServices = [
  {
    imgSrc: iosDev,
    title: 'iOS App Development',
    description: 'At Alpixn Technologies, our high-caliber mobile app developers specialize in iPhone app development, designing, and building code right up to support, and maintenance of your app. Incorporating advanced technologies- Swift, Xcode, SwiftUI, and React Native—we ensure fast performance and secure iPhone & iPad applications, aligning seamlessly with your business goals.',
  },
  {
    imgSrc: androidDev,
    title: 'Android App Development',
    description: 'Our skilled Android app developers prioritize high-performance and secure app development for upscaling businesses. We focus on app optimization and leverage cutting-edge technologies- Kotlin, Compose, React Native for seamless single-touch interfaces to bespoke Android applications. We excel in custom Android app development services for tailored mobile app services.',
  },
  {
    imgSrc: hybridDev,
    title: 'Hybrid App Development',
    description: 'Alpixn Technologies provides end-to-end hybrid app development, ensuring seamless deployment from ideation. Our expert hybrid app developers employ leading hybrid application technologies like React Native, Ionic Framework, NativeScript, and Quasar. Experience robust mobile app development, which offers a smooth development approach, cost savings, and compatibility across a variety of platforms.',
  },
  {
    imgSrc: ondemandDev,
    title: 'On-Demand App Development',
    description: 'Our high-caliber app developers focus on producing business-focused client-centric solutions. We specialize in developing scalable on-demand apps—receive or schedule services or instant delivery, ensuring a seamless user experience across multiple platforms—iOS & Android. We administer custom on-demand app development solutions to empower businesses to build a new market reputation.',
  },
  {
    imgSrc: wearableDev,
    title: 'Wearable App Development',
    description: 'We at Alpixn Technologies are proficient in wearable app development with advanced technology integration—Agile. Our wearable tech app developers provide custom wearable applications that track movement, heart action, mind action, and muscle exercises seamlessly with multiplatform integration. Advance your business with us by utilizing this trending technology.',
  },
  {
    imgSrc: crossplatformDev,
    title: 'Cross-platform App Development',
    description: 'We provide cross-platform application development, employing advanced technologies to deliver custom apps, ensuring an exceptional experience across multiple platforms. With proficiency in React Native, Flutter, and Xamarin, we empower businesses to reach a wider audience while maintaining security and high performance across various devices and operating systems.',
  },
];


const MobileAppDevelopmentPage = () => {
  return (
    <div className="bg-black font-poppins overflow-x-hidden">
      <Header />
      <main>
        <HeroImageSide 
          title="Mobile App Development Company"
          description="We are a full-cycle mobile app development company that delivers innovative solutions for iOS, Android, and cross-platform applications. Our team of expert mobile app developers creates intuitive, engaging, and scalable apps that help businesses grow."
          imageSrc={mobileAppImage}
          />
        <CompanyLogos 
          title="Trusted by Top Companies"
          logos={trustedByLogos}
          />
        <Services 
          title="End-to-End Mobile App Development Services"
          services={mobileAppServices}
          />
        <WorkMatery />
        <WorkTabs />
        <CapabilitiesGrid />
        <ClutchTestimonials />
        <TechStackTabs />
        <WhyChooseUs />
        <ExcitedCTA />
        <DevelopmentGuide />
        <EngagementModel />
        <NewContactForm 
          title="Connect with Our Mobile App Development Experts"
          subtitle="Connect with our mobile app development experts to transform your concepts into cutting-edge solutions and tangible user experiences."
        />
        <MobileAppFAQ />
        <LatestInsights />
      </main>
      <Footer />
    </div>
  );
};

export default MobileAppDevelopmentPage; 