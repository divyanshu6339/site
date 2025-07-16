import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Application Modernization Consulting',
    description: 'We offer application modernization consulting services, tailoring strategic solutions to revamp outdated or legacy systems. With a focus on scalability and efficiency, we upgrade businesses through the seamless transition to advanced, future-ready technologies, ensuring sustained success.',
  },
  {
    title: 'Legacy App Migration to Cloud',
    description: 'Alpixn Technologies offers seamless legacy app modernization services to revitalize the software, ensuring improved scalability, security, and performance. Through cloud app modernization, businesses can experience enhanced flexibility, cost-efficiency, and accessibility, empowering them to stay competitive in an evolving digital landscape.',
  },
  {
    title: 'Legacy Application Reengineering',
    description: 'With legacy system modernization we modernize the technology of outdated software, and applications and improve performance while making the system more scalable, and cost-efficient. This helps users with reduced technical debt, enhanced security, and increased agility, ensuring sustained relevance.',
  },
  {
    title: 'Re-Platform Legacy Applications',
    description: 'We offer seamless Re-platforming of legacy applications, ensuring smooth transitions to updated frameworks. This provides a wide range of benefits ranging from enhanced performance, and reduced maintenance, to increased scalability. Our service provides cloud-application re-hosting, application re-platforming, or a cloud-native implementation enabling businesses to adapt and innovate.',
  },
  {
    title: 'End-To-End Digital Transformation',
    description: 'Alpixn Technologies provides comprehensive End-To-End digital transformation services, reshaping businesses for the digital era that allows you to experience streamlined operations, increased efficiency, and optimized customer experiences. Our tailored solutions foster innovation, agility, and sustained growth in a competitive market landscape.',
  },
  {
    title: 'UI/UX Modernization',
    description: 'We specialize in UI/UX Modernization, enhancing user interfaces for a superior customer experience. Our service optimizes usability, boosts engagement, and drives conversions. Users can benefit from a fresh, appealing design, increased customer satisfaction, and improved business results.',
  },
];

const ModernizationServices = () => {
  return (
    <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Application Modernization Services We Offer
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            We understand the evolving nature of technology and the need for businesses to adapt swiftly in the digital era. With a focus on your unique business requisites, our legacy software modernization services offer bespoke solutions that boost agility, fuel innovation, and increase resilience, ensuring they remain agile and efficient.
          </p>
        </motion.div>
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg shadow-lg p-10 flex flex-col cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              <p className="mt-4 text-lg text-gray-300 flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernizationServices; 