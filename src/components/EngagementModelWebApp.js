import React from 'react';
import { motion } from 'framer-motion';

const models = [
  {
    title: 'Dedicated Team',
    description: 'Our dedicated team model offers a committed, skilled team working exclusively on your web application project, ensuring focused attention, seamless communication, and timely delivery of high-quality results.',
    points: [
      'Client-Centric Team Formation',
      'Direct Reporting And Transparency',
      'Scalability And Flexibility',
      'Quality And Efficiency',
    ],
  },
  {
    title: 'Team Augmentation',
    description: 'Enhance your in-house capabilities with our team augmentation model, where our expert web application developers seamlessly integrate with your team, bringing specialized skills to accelerate your development process.',
    points: [
      'Tailored Expertise',
      'Seamless Integration',
      'Cost-Effective Solution',
      'Transparent Communication',
    ],
  },
  {
    title: 'Project-Based',
    description: 'Our project-based model provides end-to-end web application development services, from ideation to deployment, with a fixed scope, timeline, and budget, ensuring predictable results aligned with your business goals.',
    points: [
      'Fixed Budget',
      'Milestones And Deliverables',
      'Resource Allocation',
      'Risk Mitigation',
    ],
  },
];

const EngagementModelWebApp = () => {
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
          Engagement Model
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-400 max-w-4xl mx-auto text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Jellyfish Technologies offers versatile engagement models for web application development services, providing innovative solutions to match clients' unique requirements. Let's explore these engagement models.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col border border-gray-700 rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-blue-600 p-6">
                <h3 className="text-2xl font-bold text-white text-center">{model.title}</h3>
              </div>
              <div className="p-8 bg-gray-800 flex-grow flex flex-col">
                <p className="text-gray-300 mb-6 flex-grow">{model.description}</p>
                <ul className="space-y-3">
                  {model.points.map((point, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="text-blue-500 mr-3">»</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModelWebApp;
