import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: 'What is a Web Development Application?',
    answer: 'A web development application is software used by developers to create, manage, and deploy web applications. It includes tools for coding, debugging, and testing. Web app development companies utilize these applications to deliver high-quality web app development services and custom web application development services.',
  },
  {
    question: 'What is Needed to Develop a Web App?',
    answer: 'Developing a web app requires a clear project plan, skilled developers, and tools for coding, design, and testing. Web application development companies provide expertise, custom web application development services, and web application design services to ensure the app meets business requirements and user expectations.',
  },
  {
    question: 'How Much Does Web Application Development Cost?',
    answer: 'The cost of web application development varies widely based on project complexity, features, and the development team\'s location. Engaging a web application development company can range from $5,000 to $500,000. Website application development services from countries like India may offer more competitive pricing.',
  },
  {
    question: 'What are Web Applications and Services?',
    answer: 'Web applications are interactive programs that run on web servers and are accessed via web browsers. Web app development services encompass the creation, deployment, and maintenance of these applications. Custom web application development services and web application design services ensure tailored solutions and optimal user experiences.',
  },
  {
    question: 'Why Should I Work with a Web App Development Company in India?',
    answer: 'Yes, partnering with a web app development company in India is a smart choice. As a trusted web application development company, we bring the right expertise, technical skills, and a commitment to delivering scalable and secure web applications that meet your business goals.',
  },
  {
    question: 'Do You Provide Ongoing Support After Web App Development?',
    answer: 'Yes, we offer continuous post-launch support. As a reliable web app development company, we provide ongoing maintenance, feature enhancements, and security updates after the application goes live. Our web application development services in India include performance optimization, bug fixes, and periodic upgrades to ensure your application stays relevant and secure.',
  },
  {
    question: 'What Industries Do You Serve with Your Web App Development Services?',
    answer: 'Yes, we work across multiple industries. Our web application development company has delivered solutions for fintech, healthcare, retail, education, logistics, and other sectors. Whether you\'re looking to build a customer portal, an eCommerce platform, or a SaaS product, our web app development services are tailored to meet the unique requirements of your industry.',
  },
  {
    question: 'Can You Help with Custom Web Application Development?',
    answer: 'Yes, we specialize in building custom web applications. As a top web app development company in India, we offer tailor-made solutions that align with your business goals. Our web application development services in India include creating intuitive, feature-rich, and scalable applications using the latest technologies, such as React, Angular, Node.js, and more.',
  },
];

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        className="w-full flex justify-between items-center text-left py-6 px-4 focus:outline-none"
        onClick={onClick}
      >
        <span className={`text-lg font-semibold ${isOpen ? 'text-blue-400' : 'text-white'}`}>{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaMinus className="text-blue-400" /> : <FaPlus className="text-gray-400" />}
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="text-gray-300 pb-6 px-4 leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const WebAppFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          FAQ's
        </motion.h2>
        <motion.div 
          className="bg-gray-900 rounded-lg shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {faqData.map((item, index) => (
            <AccordionItem 
              key={index} 
              item={item} 
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WebAppFAQ;