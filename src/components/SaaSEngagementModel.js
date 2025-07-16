import React from 'react';
import { motion } from 'framer-motion';

const models = [
  {
    title: 'Dedicated Team',
    description: 'We offer a dedicated team model, where a team of experts is assigned exclusively to your SaaS project, providing focused attention and seamless collaboration throughout the development lifecycle.',
    points: [
      'Client-Centric Team Formation',
      'Complete Control and Transparency',
      'Scalability And Flexibility',
      'Quality And Efficiency',
    ],
    highlight: false,
  },
  {
    title: 'Team Augmentation',
    description: 'Our team augmentation model allows you to enhance your in-house team with our experienced SaaS professionals, providing the expertise you need to scale up, fill skill gaps, and accelerate development.',
    points: [
      'Tailored Expertise',
      'Seamless Integration',
      'Cost-Effective Solution',
      'Transparent Communication',
    ],
    highlight: true,
  },
  {
    title: 'Project-Based',
    description: 'For specific SaaS development requirements, we offer a project-based model, where our team handles the entire project from ideation to deployment, ensuring timely delivery and high-quality results.',
    points: [
      'Fixed Budget',
      'Defined Scope and Deliverables',
      'Resource Allocation',
      'Risk Mitigation',
    ],
    highlight: false,
  },
];

const SaaSEngagementModel = () => {
  return (
    <motion.div
      className="bg-gray-900 text-white py-16 sm:py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Engagement Model</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
            Jellyfish Technologies offers versatile engagement models for SaaS product development services, providing innovative solutions to match clients' unique requirements. Let's explore these engagement models:
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.title}
              className={`rounded-lg shadow-lg p-8 flex flex-col ${
                model.highlight ? 'bg-blue-600 border-2 border-blue-400' : 'bg-gray-800'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
            >
              <h3 className={`text-2xl font-bold ${model.highlight ? 'text-white' : 'text-blue-400'}`}>{model.title}</h3>
              <p className={`mt-4 flex-grow ${model.highlight ? 'text-blue-100' : 'text-gray-400'}`}>{model.description}</p>
              <ul className="mt-6 space-y-4">
                {model.points.map((point) => (
                  <li key={point} className="flex items-start">
                    <svg className={`flex-shrink-0 h-6 w-6 ${model.highlight ? 'text-white' : 'text-blue-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`ml-3 ${model.highlight ? 'text-white' : 'text-gray-300'}`}>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SaaSEngagementModel;
