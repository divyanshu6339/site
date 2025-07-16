import React from 'react';
import { motion } from 'framer-motion';

const models = [
  {
    title: 'Dedicated Team',
    description: 'With Alpixn Technologies, you get hire dedicated team of software developers who work exclusively on your project. It ensures complete focus, seamless collaboration, and a deep understanding of your requirements.',
    features: [
      'Client-Centric Team Formation',
      'Direct Reporting And Transparency',
      'Scalability And Flexibility',
      'Quality And Efficiency'
    ]
  },
  {
    title: 'Staff Augmentation',
    description: 'Augment your existing in-house team with our skilled software developers to bridge talent gaps and meet project demands. This flexible model allows efficient resource allocation and cost-effective solutions.',
    features: [
      'Tailored Expertise',
      'Seamless Integration',
      'Cost-Effective Solution',
      'Transparent Communication'
    ]
  },
  {
    title: 'Project-Based',
    description: 'Alpixn Technologies offers project-based model for specific software development projects and initiatives with defined scope and timelines. We assemble a specialized team to deliver high-quality solutions within your budget and timeline constraints.',
    features: [
      'Fixed Budget',
      'Milestones And Deliverables',
      'Resource Allocation',
      'Risk Mitigation'
    ]
  }
];

const EngagementModel = () => {
  return (
    <section className="bg-gray-900 text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold">Engagement Model</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Alpixn Technologies offers versatile engagement models to hire dedicated software developers for custom software development, providing innovative solutions to match clients' unique requirements. Let's explore these engagement models
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <div className="bg-blue-600 p-4 rounded-t-lg -mx-8 -mt-8 mb-8">
                <h3 className="text-2xl font-bold text-center">{model.title}</h3>
              </div>
              <p className="text-gray-400 mb-6 flex-grow">{model.description}</p>
              <ul className="space-y-3">
                {model.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    <span>{feature}</span>
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

export default EngagementModel; 