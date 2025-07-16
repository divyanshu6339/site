import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import webAppImage from '../Assets/Assests2/88.png'; // Assuming this is the correct path for the hero image
import TrustedBy from '../components/TrustedBy';
import WebAppWorkMastery from '../components/WebAppWorkMastery';
import IndustrySolutions from '../components/IndustrySolutions';
import WhyChooseWebApp from '../components/WhyChooseWebApp';
import HireDevelopersConnect from '../components/HireDevelopersConnect';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStack from '../components/TechStack';
import EssentialGuideWebApp from '../components/EssentialGuideWebApp';
import EngagementModelWebApp from '../components/EngagementModelWebApp';
import WebAppFAQ from '../components/WebAppFAQ';
import Insights from '../components/Insights';

const WebAppDevelopmentPage = () => {
  const services = [
    { title: 'Custom Web Apps Development', description: 'We offer custom web app development services with end-to-end unique web product development for businesses across diverse industries. Our dynamic web applications are designed to digitize your internal operations, business transactions, and customer-facing services.' },
    { title: 'Enterprise Web Apps Development', description: 'Our enterprise web app development services include building enterprise solutions. We provide container deployment on private infrastructures using Docker, optimizing the applications. We also enable scalable integration through APIs and microservice architecture (MSA).' },
    { title: 'Web Portals Development Services', description: 'Our team of expert web developers creates a robust and feature-rich web presence with intuitive and responsive web portals. We offer high-end digital solutions, streamlining heavy workflows with high-quality support to make business applications secure and seamless.' },
    { title: 'E-commerce Web Apps Development Services', description: 'We offer high-tech eCommerce web application development services, from conceptualization to deployment. Our solutions are designed to provide a seamless shopping experience, robust payment gateways, and advanced inventory management capabilities, driving online business growth.' },
    { title: 'SaaS Development Services', description: 'With extensive experience in software-as-a-service (SaaS) development, we build cloud-based applications that are highly scalable, and secure. Our SaaS solutions are designed to enhance productivity, improve collaboration, and provide real-time access to your business-critical data.' },
    { title: 'Single-Page Web Apps Development', description: 'Our team specializes in developing high-performance single-page web applications (SPAs) that offer smooth and responsive user experiences. We leverage modern JavaScript frameworks and libraries to create feature-rich and interactive SPAs that deliver a native-like feel.' },
  ];

  return (
    <div className="bg-black text-white">
      <Header />
      <div>
        {/* Hero Section */}
        <motion.section 
          className="relative bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20 px-4 sm:px-6 lg:px-8 flex items-center" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0" 
              initial={{ x: -100, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Web App Development Services</h1>
              <p className="text-lg md:text-xl mb-6">Our web application development services encompass the entire web app development lifecycle, from ideation and design to development, testing, and deployment. We integrate the latest technologies like PostgreSQL, MongoDB, Angular, Node.js, React, and Python, to streamline complex business operations with innovative web apps.</p>
              <motion.button 
                className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105" 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                Get a custom quote ➔
              </motion.button>
            </motion.div>
            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img src={webAppImage} alt="Web App Development" className="w-full max-w-md"/>
            </motion.div>
          </div>
        </motion.section>

        {/* Trusted By Section */}
        <TrustedBy backgroundColor="bg-white" />

        {/* Services We Offer Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              Web App Development Services We Offer
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-400 max-w-3xl mx-auto mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We offer custom web app development services, prioritizing the right tech stack that aligns with your business goals. We build high-end quality web applications that maximize resource utilization at a low cost. Our certified web app developers also provide technology consultation, migrate to new web architecture, and modernize legacy applications.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-800 p-8 rounded-lg text-left transform transition duration-500 hover:scale-105 hover:bg-gray-700"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Connect Section */}
                <WebAppWorkMastery />
        <IndustrySolutions />
        <HireDevelopersConnect />
        <WhyChooseWebApp />
        
        <ClutchTestimonials />
        <TechStack />
        <section className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              Connect With Our Web App Development Experts Now!
            </motion.h2>
            <motion.form 
              className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <input type="email" placeholder="Email id" className="w-full md:w-auto flex-grow bg-white text-black px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white" />
              <select className="w-full md:w-auto bg-white text-black px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white">
                <option>Please choose service</option>
                <option>Custom Web Apps</option>
                <option>Enterprise Web Apps</option>
                <option>Web Portals</option>
              </select>
              <button type="submit" className="w-full md:w-auto bg-gray-800 text-white font-bold px-6 py-3 rounded-md hover:bg-gray-700 transition duration-300">Let's Talk</button>
            </motion.form>
          </div>
        </section>
        <EssentialGuideWebApp />
        <EngagementModelWebApp />
        <WebAppFAQ />
        <Insights />

      </div>
      <Footer />
    </div>
  );
};

export default WebAppDevelopmentPage;
