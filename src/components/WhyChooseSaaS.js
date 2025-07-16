import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Vast Technical Knowledge',
    description: 'Jellyfish Technologies possesses deep technical expertise, staying current with the latest technologies and industry trends. This knowledge allows us to design and develop robust, scalable, and high-performance architectures and frameworks, providing a competitive edge to your software.',
  },
  {
    title: 'Expertise in SaaS Architecture',
    description: 'We specialize in designing and implementing scalable, secure, and multi-tenant SaaS architectures. Our solutions are built with multi-tenancy, data isolation, and other SaaS-specific considerations to ensure optimal performance and security for your SaaS application.',
  },
  {
    title: '100% Customized SaaS Solution',
    description: 'We provide 100% customized SaaS solutions, tailored to your specific needs. Our flexible approach ensures that the software we develop aligns perfectly with your business requirements, giving you the required to achieve competitive advantage.',
  },
  {
    title: 'Experience-Driven SaaS Development',
    description: 'With years of experience in SaaS development, we have refined our skills and processes. Our proven methodologies and best practices enable us to deliver reliable, timely, delivery, and high-quality SaaS solutions that meet industry standards.',
  },
  {
    title: 'Post-launch Support',
    description: 'Jellyfish Technologies offers optimal post-launch support to ensure your SaaS application remains up-to-date and performs optimally. Our dedicated support team is readily available to address issues, implement updates, and provide assistance as needed.',
  },
  {
    title: 'Transparency & Integrity',
    description: 'We believe in transparency and integrity in all our dealings. We maintain clear and open communication throughout the development process, keeping you informed and involved every step of the way. We uphold integrity in our practices and deliverables.',
  },
];

const WhyChooseSaaS = () => {
  return (
    <motion.div
      className="bg-gray-900 text-white py-16 sm:py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Why Choose Jellyfish Technologies as Your SaaS <br /> Development Services Provider?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            With extensive experience in SaaS development, Jellyfish Technologies offers robust, custom solutions for diverse business needs. Our team of skilled SaaS developers leverages the latest technologies to deliver high-quality, secure, and user-friendly SaaS applications, ensuring seamless integration and driving operational efficiency for your organization.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-gray-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
            >
              <h3 className="text-xl font-bold">{benefit.title}</h3>
              <p className="mt-4 text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-16 text-center bg-gray-800 py-12 px-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Connect With Us To Hire Skilled SaaS Software Developers</h3>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
            Let's transform your vision into reality and craft outstanding, customized mobile app solutions collaboratively. Start your mobile app development journey with us today.
            </p>
            <div className="mt-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
                Get an Estimate of Your Project Today
                </button>
            </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhyChooseSaaS;
