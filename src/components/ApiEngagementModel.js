import React from 'react';
import { motion } from 'framer-motion';

const models = [
  {
    title: 'Dedicated Team',
    description: 'Jellyfish Technologies’ dedicated team model functions as an Offshore Development Center (ODC), delivering a tailored approach. This specialized center works exclusively on the client’s project, ensuring cost-effectiveness, scalability, optimized outcomes, efficiency, and high-quality standards.',
    points: [
      'Client-Centric Team Formation',
      'Direct Reporting And Transparency',
      'Scalability And Flexibility',
      'Quality And Efficiency',
    ],
  },
  {
    title: 'Team Augmentation',
    description: 'Jellyfish Technologies offers a team augmentation approach, ideal for short-term support or filling skill gaps, this model provides flexibility and immediate access to the expertise required. Ideal for companies aiming to enhance their productivity with specific expertise for better project outcomes.',
    points: [
      'Tailored Expertise',
      'Seamless Integration',
      'Cost-Effective Solution',
      'Transparent Communication',
    ],
  },
  {
    title: 'Project-Based',
    description: 'Jellyfish Technologies’ project-based engagement model offers a structured approach for well-defined projects within a set scope, time, and budget. This model guarantees timely, on-budget delivery meeting quality standards, and fostering collaboration for successful outcomes.',
    points: [
      'Fixed Budget',
      'Milestones And Deliverables',
      'Resource Allocation',
      'Risk Mitigation',
    ],
  },
];

const ApiEngagementModel = () => {
  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Engagement Model</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto text-center mb-12">Jellyfish Technologies offers versatile engagement models for IT services, providing tailored solutions to meet diverse client needs. Let’s explore these engagement models:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {models.map((model, index) => (
                        <motion.div
              key={index}
              className={`rounded-xl p-8 flex flex-col transition-all duration-300 ease-in-out ${index === 1 ? 'bg-blue-600 text-white shadow-blue-500/30' : 'bg-gray-900 hover:bg-gray-800'} shadow-lg hover:shadow-2xl hover:-translate-y-2`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
                            <h3 className={`text-2xl font-bold mb-4 ${index === 1 ? 'text-white' : 'text-blue-400'}`}>{model.title}</h3>
                            <p className={`flex-grow ${index === 1 ? 'text-gray-200' : 'text-gray-400'} mb-6`}>{model.description}</p>
              <ul className="space-y-2">
                {model.points.map((point, i) => (
                                    <li key={i} className="flex items-start">
                    <span className={`mr-3 mt-1 ${index === 1 ? 'text-white' : 'text-blue-500'}`}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    </span>
                    <p className={`${index === 1 ? 'text-gray-100' : 'text-gray-300'}`}>{point}</p>
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

export default ApiEngagementModel;
