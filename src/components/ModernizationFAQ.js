import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'How much does it cost for legacy application modernization?',
    answer: 'The cost of legacy application modernization depends on system complexity, scope, and required services. It covers assessment, planning, testing, deployment, and maintenance, including possible licensing fees and downtime during the transition.',
  },
  {
    question: 'Do you sign an NDA for application modernization solutions?',
    answer: 'Yes, confidentiality is our priority. As a trusted Legacy Modernization Company, we sign Non-Disclosure Agreements (NDAs) to protect your proprietary information, ensuring complete security and discretion throughout the modernization process.',
  },
  {
    question: 'Can I add new features to my application during the modernization process?',
    answer: 'Yes, integrating new features into your legacy application during the modernization process is not only feasible but also a key benefit of legacy app modernization services, ensuring it evolves with modern technologies and delivers an improved, competitive product.',
  },
  {
    question: 'What factors to consider when choosing an application modernization service provider?',
    answer: "When selecting an application modernization service provider, consider expertise, scalability, and security measures crucial for a successful transformation. The following are the points to remember:\n\n- Expertise in diverse modernization approaches (cloud migration, containerization, etc.)\n- Scalability of services to adapt to evolving business needs\n- Robust security measures to protect sensitive data\n- Proven track record in successful application modernization projects",
  },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        className="flex justify-between items-center w-full py-6 text-left text-xl font-semibold text-white"
        onClick={onClick}
      >
        <span>{question}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-lg text-gray-300 whitespace-pre-line">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ModernizationFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">FAQ's</h2>
        </div>
        <div>
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
    </div>
  );
};

export default ModernizationFAQ; 