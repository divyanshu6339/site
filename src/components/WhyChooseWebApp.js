import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Extend Operation Efficiency',
    description: 'As a leading web app development agency, we build custom web applications that streamline processes, automate workflows, and extend operational efficiency for your business.',
  },
  {
    title: 'Secure AWS Investment',
    description: 'Our web application development firm leverages AWS cloud for secure, scalable, and cost-effective hosting, ensuring your investment is protected and future-ready.',
  },
  {
    title: 'Scalable Solutions',
    description: 'We at Jellyfish Technologies deliver future-proof solutions with scalability in mind, allowing your web application to grow seamlessly as your business expands.',
  },
  {
    title: 'Dedicated Support',
    description: 'With our website application development services, you get dedicated support from skilled web developers, ensuring your web app runs smoothly and issues are resolved promptly.',
  },
  {
    title: 'Better Code Quality',
    description: 'At Jellyfish Technologies, a premier web app development company in India, we prioritize code quality through rigorous testing and adherence to best practices.',
  },
  {
    title: 'Competitive Pricing Structure',
    description: 'Our custom web application development services are competitively priced, offering exceptional value without compromising on quality or features.',
  },
];

const WhyChooseWebApp = () => {
  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Jellyfish Technologies as Your Web Application Development Provider?
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-400 max-w-4xl mx-auto text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Jellyfish Technologies offers custom web application development services backed by our expertise as a top web app development company in the US. We offer end-to-end services integrating next-gen tech stack, and agile methodologies to deliver high-performance website application development services.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 p-8 rounded-lg border border-gray-700 transform transition duration-500 hover:scale-105 hover:border-blue-500"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseWebApp;
