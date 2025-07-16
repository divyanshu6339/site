import React from 'react';
import { motion } from 'framer-motion';

const industries = [
  {
    title: 'Healthcare',
    items: ['EHR/EMR', 'HIPAA-compliant web apps', 'Telehealth platforms', 'Patient portals'],
  },
  {
    title: 'Retail',
    items: ['Ecommerce apps', 'Marketplace web apps', 'Web-based POS', 'Retail CRM'],
  },
  {
    title: 'Finance',
    items: ['Payment web apps', 'Digital wallets web apps', 'Banking CRM', 'Stock trading portals'],
  },
  {
    title: 'Logistics',
    items: ['Route management', 'Warehouse management', 'Fleet management', 'Inventory tracking'],
  },
  {
    title: 'Automotive',
    items: ['Dealership management', 'Vehicle tracking systems', 'Automotive CRM', 'Infotainment systems'],
  },
  {
    title: 'Travel',
    items: ['Booking & Reservation modules', 'Transport Applications', 'Travel Portals', 'Travel Management CRM'],
  },
];

const IndustrySolutions = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Get Industry-specific Web Application Development Services and Solutions
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-400 max-w-4xl mx-auto text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our industry-specific web application development services offer industry-leading web solutions across diverse sectors. From healthcare and finance to e-commerce and logistics, we encompass in-house domain experts to deliver scalable, and secure web applications that address unique business challenges and drive growth within the industry.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 p-8 rounded-lg border border-gray-700 transform transition duration-500 hover:scale-105 hover:border-blue-500"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center"><span className="text-blue-500 mr-3">✓</span>{industry.title}</h3>
              <ul className="space-y-3">
                {industry.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="text-blue-500 mr-3">➔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
