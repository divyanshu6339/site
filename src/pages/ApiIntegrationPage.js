import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import apiIntegrationImage from '../Assets/Assests2/89.png';
import TrustedBy from '../components/TrustedBy';
import ApiWorkMastery from '../components/ApiWorkMastery';
import ApiPossibilities from '../components/ApiPossibilities';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStack from '../components/TechStack';
import ApiEssentialGuide from '../components/ApiEssentialGuide';
import ApiEngagementModel from '../components/ApiEngagementModel';
import ApiFAQ from '../components/ApiFAQ';
import Insights from '../components/Insights';

const APIIntegrationPage = () => {
  const services = [
    {
      title: 'Custom API Development',
      description: 'We provide custom API development for desktop, mobile, and cloud apps, Web Sockets, Service-Oriented Architectures (SOA), firmware/middleware, browsers, databases, and operating systems. At Alpixn Technologies, we offer support at each stage of creating an API for your product, from research and design to performance optimization.',
    },
    {
      title: 'Third-party API Integrations',
      description: 'We emphasize third-party application integration services. Leveraging current resources and technologies, our developers use REST, XML-RPC, JSON, SOAP, and the latest tech for seamless API integration. Our custom API integration services enhance business productivity, integrating unique features for positive results.',
    },
    {
      title: 'API Consulting Services',
      description: 'Alpixn Technologies is among the leading API development companies, providing customized API solutions. Our API consulting services guide you from initial concept to long-term management, ensuring effective planning and revenue maximization. Rely on our qualified team for advanced development and integration support throughout the API cycle.',
    },
    {
      title: 'API Automation',
      description: 'Our API automation services streamline and enhance your workflow, automating processes for efficiency. With a focus on reliability and scalability, we ensure seamless integration, allowing you to optimize operations and accelerate your development cycles. We change the tech meta with our customized API solutions.',
    },
    {
      title: 'API Configuration',
      description: 'Our API configuration services provide end-to-end solutions to optimize API setups. Alpixn Technologies specializes in configuring APIs for seamless integration, ensuring compatibility, security, and optimal performance. Our skilled developers automate tasks that your project requires, frequently or in large batches.',
    },
    {
      title: 'API Support and Maintenance',
      description: 'Our API support and maintenance services ensure your API infrastructure’s continuous and reliable operation. With proactive monitoring, timely updates, and expert troubleshooting, we guarantee the stability and performance of your APIs, allowing you to focus on your core business functions with confidence.',
    },
  ];

  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <motion.section
          className="relative bg-gradient-to-r from-blue-900 via-black to-black text-white py-20 px-4 sm:px-6 lg:px-8 flex items-center" 
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
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">API Integration Services</h1>
              <p className="text-lg md:text-xl mb-6">
                At Alpixn Technologies we streamline your business with custom API development services across multiple platforms—iOS/Android/web app. Our certified developers use different API authentication methods, including basic OAuth, OAuth1, OAuth2, JSON Web Token (JWT), SAML, and many more. Our IT services drive modernization, ensuring a synchronized and streamlined digital ecosystem.
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
              <img src={apiIntegrationImage} alt="API Integration" className="w-full max-w-md rounded-lg" />
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
              API Integration Services We Offer
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 max-w-3xl mx-auto mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Alpixn Technologies is a premier API development company specializing in API development and integration. We are the finest API integration company, providing top-tier quality services such as API development, consulting, and many more that will enhance your project's success.
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
              Connect With Our API Experts Now!
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
                <option>Custom API Development</option>
                <option>Third-party API Integrations</option>
                <option>API Consulting Services</option>
              </select>
              <button type="submit" className="w-full md:w-auto bg-gray-800 text-white font-bold px-6 py-3 rounded-md hover:bg-gray-700 transition duration-300">Let's Talk</button>
            </motion.form>
          </div>
        </section>
        <ApiWorkMastery />
        <ApiPossibilities />
        <TechStack />
        <ApiEssentialGuide />
        <ApiEngagementModel />
        <ClutchTestimonials />
        <ApiFAQ />
        <Insights />
      </main>
      <Footer />
    </div>
  );
};

export default APIIntegrationPage;
