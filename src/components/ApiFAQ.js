import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'What is your API development process?',
    answer: 'Our API development process begins with a comprehensive strategy, identifying business goals and defining data sources. We evaluate the technology ecosystem, specify API requirements, and choose appropriate data exchange architecture and authentication methods. Development involves creating a detailed API specification, planning for versioning, and ensuring robust deployment. Continuous monitoring and reliability checks refine the API, providing a scalable, efficient, and secure solution tailored to client needs.',
  },
  {
    question: 'How do you ensure API security?',
    answer: 'API security is ensured through multiple layers, including HTTPS encryption, proper authentication methods like API keys, OAuth, or JWT tokens. We implement thorough input validation, employ rate limiting, and conduct regular security audits. Continuous monitoring, regular updates, and adherence to industry best practices safeguard against potential threats and vulnerabilities.',
  },
  {
    question: 'How much does it cost for API development?',
    answer: 'Here’s a breakdown of API development cost ranges: Simple APIs: Basic functionality, few endpoints, limited data access (~$10,000 – $25,000). Moderate Complexity: Multiple endpoints, complex data structures, integrations with external systems (~$25,000 – $50,000). Highly Complex: Large-scale, intricate data models, real-time capabilities, advanced security features (~$50,000 and above).',
  },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-6 px-4 focus:outline-none"
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4 text-gray-400 bg-gray-900">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ApiFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
        <div className="bg-gray-800 rounded-lg shadow-lg">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApiFAQ;
