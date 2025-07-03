import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const engagementModelsData = [
  {
    title: 'Dedicated Team',
    description: 'Our Dedicated Team model provides clients with a committed group of Node.js developers working exclusively on their projects. This model ensures deep focus, seamless integration with your in-house team, and flexibility in meeting evolving requirements.',
    features: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'],
  },
  {
    title: 'Staff Augmentation',
    description: 'With Staff Augmentation, we integrate our Node.js experts into your existing team to boost capabilities and fill skill gaps. This model enhances productivity and speeds up development by leveraging our specialized talent alongside your internal resources.',
    features: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'],
  },
  {
    title: 'Project-Based',
    description: 'Our Project-based model offers a unique solution for specific Node.js projects. We handle the entire project lifecycle from conception to delivery, ensuring timely completion and quality results based on your unique requirements and objectives.',
    features: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'],
  },
];

const faqData = [
  {
    question: 'How does node.js differ from other server-side programming languages?',
    answer: 'Node.js uses an event-driven, non-blocking I/O model, making it lightweight and efficient for real-time applications with many concurrent connections. Unlike traditional languages that use threads, Node.js operates on a single thread, using an event loop to handle requests asynchronously.',
  },
  {
    question: 'Which companies use node.js for software development?',
    answer: 'Many leading tech companies use Node.js, including Netflix, Uber, LinkedIn, PayPal, and eBay. They leverage its performance, scalability, and speed for various services, from web streaming to online payments.',
  },
  {
    question: 'Why should you outsource node.js development?',
    answer: 'Outsourcing Node.js development provides access to a global talent pool of specialized developers, reduces development costs, and accelerates time-to-market. It allows you to focus on core business activities while experts handle the technical aspects of your project.',
  },
  {
    question: 'What kind of applications can you build using node.js?',
    answer: 'Node.js is highly versatile and can be used to build a wide array of applications, including single-page applications (SPAs), real-time chat apps, APIs, microservices architectures, IoT solutions, and data-intensive applications.',
  },
  {
    question: 'What is the cost of node.js development?',
    answer: 'The cost of Node.js development varies based on project complexity, scope, and developer rates. Factors like whether you hire a Node.js developer or engage a Node.js development company can influence costs. Consulting with Node.js experts can provide a more accurate estimate.',
  },
];

const EngagementCard = ({ title, description, features }) => (
  <div className="relative border border-gray-700 rounded-lg p-8 pt-12 bg-[#0a192f] h-full flex flex-col transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2">
    <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        <div className="bg-blue-600 text-white font-bold px-6 py-2 rounded-md text-base">{title}</div>
    </div>
    <p className="text-gray-300 mb-8 flex-grow text-lg">{description}</p>
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-4">
          <svg className="w-6 h-6 text-blue-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6.343 3.657a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L11.586 11 6.343 5.071a1 1 0 010-1.414z" />
          </svg>
          <span className="text-gray-200 text-base">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const FAQItem = ({ q, a, isOpen, onClick }) => (
  <div className="border-b border-gray-700 py-8">
    <button onClick={onClick} className="w-full flex justify-between items-center text-left gap-4">
      <h3 className="text-2xl font-semibold text-white">{q}</h3>
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
        <svg className="w-7 h-7 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <p className="text-gray-300 text-xl mt-6 pr-10">{a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);


const EngagementFAQ = () => {
    const [openFAQ, setOpenFAQ] = useState(faqData.length - 1); // Last item open by default

  return (
    <div className="bg-[#020c1b] text-white py-20 sm:py-28">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Engagement Models Section */}
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl font-bold">
            <span className="relative inline-block">
                <span className="relative z-10">Engagement Models</span>
                <svg className="absolute left-0 -bottom-2 w-full h-auto text-cyan-400 z-0" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M1 6 C 10 2, 20 7, 30 5 C 40 3, 50 8, 60 5 C 70 2, 80 7, 90 4 C 95 2, 99 5, 99 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span> to Hire Best Node.js
          </h2>
          <p className="mt-8 max-w-4xl mx-auto text-xl text-gray-300">
            Jellyfish Technologies offers versatile engagement models for Node.js application development services, providing innovative solutions. Get the best fit for your business.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {engagementModelsData.map((model, index) => (
            <EngagementCard key={index} {...model} />
          ))}
        </div>

        {/* FAQ Section */}
        <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-bold">
                <span className="relative inline-block">
                    <span className="relative z-10">FAQ's</span>
                    <svg className="absolute left-0 -bottom-2 w-full h-auto text-cyan-400 z-0" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M1 6 C 10 2, 20 7, 30 5 C 40 3, 50 8, 60 5 C 70 2, 80 7, 90 4 C 95 2, 99 5, 99 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </h2>
        </div>
        <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
                <FAQItem 
                    key={index} 
                    q={faq.question} 
                    a={faq.answer} 
                    isOpen={openFAQ === index} 
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default EngagementFAQ; 