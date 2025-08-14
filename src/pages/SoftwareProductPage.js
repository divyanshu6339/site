import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import SoftwareProductImage from '../Assets/Assests2/90.png';
import TrustedBy from '../components/TrustedBy';
import ApiWorkMastery from '../components/ApiWorkMastery';
import SoftwareProductPossibilities from '../components/SoftwareProductPossibilites';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import SoftwareEssential from '../components/SoftwareEssential';
import SoftwareProductEngagementModel from '../components/SoftwareProductEngagementModel';
import SPFaq from '../components/SPFaq';
import Insights from '../components/Insights';

const SoftwareProductPage = () => {
  const services = [
    {
      title: 'Custom ERP System Development',
      description: 'Our dedicated team delivers cutting-edge software products such as SaaS products, enterprise applications, digital platforms, and web & mobile solutions as per your business requirements and assists you throughout your product development cycle.',
    },
    {
      title: 'Product Ideation & Consulting',
      description: 'Our Product Ideation & Consulting Services transform complex ideas into validated prototypes, guided by UX experts and product engineers. We assist with market analysis, business needs elicitation, regulatory compliance, and strategic roadmapping, ensuring your project aligns with business objectives and stays on track.',
    },
    {
      title: 'POC & MVP Development',
      description: 'Our POC & MVP development services enable rapid prototyping to validate ideas, gather user feedback, and iterate quickly. We conduct product discovery and prioritize essential features to develop scalable, quality solutions that align with your business goals.',
    },
    {
      title: 'Product Modernization & Migration',
      description: 'Our Product Modernization & Migration services revitalize your custom business software system by optimizing legacy code, reengineering architecture, and adopting modern tech stacks. We ensure that the migrated and modernized product seamlessly integrates with your existing business processes, increasing efficiency and performance.',
    },
    {
      title: 'Product Architecture Design',
      description: 'We provide end-to-end product design development services, ensuring optimal performance and scalability. Our custom business software experts assess your IT landscape to plan, design, and develop solutions, including on-premises, cloud-based, and microservices architectures.',
    },
    {
      title: 'Product Testing & QA',
      description: 'Our product & QA services ensure your software’s reliability, performance, and security through rigorous manual and automated testing. Our expert QA team conducts validation, functional, performance, smoke, and UAT testing to deliver stable, scalable, and secure product development software solutions.',
    },
  ];

  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <motion.section
          className="relative bg-gradient-to-r from-blue-900 via-black to-black text-white py-20 pl-5 pr-4 sm:pl-10 sm:pr-6 md:pl-16 lg:pl-24 xl:pl-36 2xl:pl-48 flex items-center" 
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
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Software Product Development Services</h1>
              <p className="text-lg md:text-xl mb-6">
               Our software product development services deliver innovative, scalable solutions. Our dedicated product developers employ advanced tech stack and agile methodologies from ideation to deployment to ensure your software engineering product is robust, user-friendly, and market-ready, driving your business growth and success.
              </p>
              <motion.button
                className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300"
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
              <img src={SoftwareProductImage} alt="API Integration" className="w-full max-w-md rounded-lg" />
            </motion.div>
          </div>
        </motion.section>

        <TrustedBy backgroundColor="bg-white" />

        {/* API Integration Services We Offer */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              Software Product Development Services We Offer
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 max-w-3xl mx-auto mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Offering end-to-end software product development services, we conduct in-depth market analysis, strategic business assessment, and business design and development processes. We turn your vision into a profitable product that aligns seamlessly with your business goals through our software product development expertise.
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

        {/* Connect with our API Experts Now! */}
        <section className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              Connect With Our Software Product Development Services Experts Now!
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
                <option>Custom ERP System Development</option>
                <option>Product Ideation & Consulting</option>
                <option>POC & MVP Development</option>
                <option>Product Modernization & Migration</option>
                <option>Product Architecture Design</option>
                <option>Product Testing & QA</option>

              </select>
              <button type="submit" className="w-full md:w-auto bg-gray-800 text-white font-bold px-6 py-3 rounded-md hover:bg-gray-700 transition duration-300">Let's Talk</button>
            </motion.form>
          </div>
        </section>
        <ApiWorkMastery />
        <SoftwareProductPossibilities />
        <TechStackTabs />
        <SoftwareEssential />
        <SoftwareProductEngagementModel/>
        <ClutchTestimonials />
        <SPFaq />
        <Insights />
      </main>
      <Footer />
    </div>
  );
};

export default SoftwareProductPage;