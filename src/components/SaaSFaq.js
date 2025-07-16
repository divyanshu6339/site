import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'What is a SaaS tech company?',
    answer: 'A SaaS tech company, or SaaS software development company, specializes in developing, hosting, and maintaining software applications that are delivered over the internet. These companies offer scalable solutions and ongoing support, enabling businesses to use and manage applications remotely without the need for extensive on-premises infrastructure.',
  },
  {
    question: 'What does SaaS mean?',
    answer: 'SaaS, or Software as a Service, is a cloud-based delivery model where software applications are hosted by a SaaS development company and accessed via the internet. This model allows users to subscribe to software without installing it on local devices, offering flexibility, scalability, and automatic updates.',
  },
  {
    question: 'What is SaaS development services?',
    answer: 'SaaS development services encompass the design, development, deployment, and maintenance of cloud-based software solutions. Provided by specialized SaaS application development companies, these services include creating scalable, secure applications, managing infrastructure, and offering continuous support to ensure optimal performance and user satisfaction.',
  },
  {
    question: 'What is the difference between software development and SaaS?',
    answer: 'Software development involves creating standalone applications installed on users\' devices. In contrast, SaaS development, managed by SaaS development companies, focuses on developing software as a service, accessible via the internet. SaaS platforms offer benefits like scalability, remote access, and automatic updates, whereas traditional software requires manual updates and local installation.',
  },
];

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-6 px-4 sm:px-6"
      >
        <span className={`text-lg font-medium ${isOpen ? 'text-blue-400' : 'text-white'}`}>{item.question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
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
            <p className="text-gray-400 pb-6 px-4 sm:px-6">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SaaSFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div 
      className="bg-gray-900 text-white py-16 sm:py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">FAQ's</h2>
        <div className="bg-gray-800 rounded-lg shadow-lg">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SaaSFaq;
