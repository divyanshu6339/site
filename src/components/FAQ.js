import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
    {
      question: "How much does it cost to hire a software developer in the US?",
      answer: "At Alpixn Technologies, we understand that the cost of hiring software engineers in the US varies based on experience, skill set, and location. On average, salaries range from $80,000 to $150,000 annually, with senior developers commanding higher rates."
    },
    {
      question: "How much does it cost to hire a team of software developers?",
      answer: "When you hire a dedicated software development team from Alpixn Technologies, costs typically range from $100,000 to $500,000 annually. We offer competitive pricing, especially for offshore teams, while ensuring top-tier quality and results for complex projects."
    },
    {
      question: "How do I hire a good software developer?",
      answer: "To hire top software developers, we recommend clearly defining your project's technical requirements and preferred tech stack. Our team ensures that we assess problem-solving skills, technical expertise, and passion for growth, helping you attract the best talent in the industry."
    },
    {
      question: "Why hire dedicated developers instead of freelancers?",
      answer: "We believe that hiring dedicated developers from Alpixn Technologies ensures you get a committed, stable team focused solely on your project. Unlike freelancers, we offer consistent quality, seamless collaboration, and adherence to security protocols, making your project a priority."
    },
    {
      question: "How do I hire experienced software developers for enterprise applications?",
      answer: "At Alpixn Technologies, we specialize in hiring experienced software developers for enterprise applications. Our developers bring deep expertise in technologies like .NET and PHP, ensuring the creation of scalable, secure, and efficient solutions tailored to your unique business needs."
    },
    {
      question: "What are the benefits of hiring dedicated software engineers for long-term projects?",
      answer: "Hiring dedicated software engineers from Alpixn Technologies ensures that your long-term project receives focused attention, reducing disruptions and enhancing collaboration. Our engineers provide specialized expertise, ensuring that your solution is scalable, high-quality, and delivered on time."
    },
    {
      question: "How do I find the right software developer for my project?",
      answer: "To find the right software developer, we recommend outlining your technical needs and conducting thorough assessments. At Alpixn Technologies, we focus on candidates with the right skill set, problem-solving abilities, and a collaborative mindset to ensure the perfect match for your project."
    },
    {
      question: "What is the advantage of hiring developers from a reputed company?",
      answer: "Hiring from a reputed company like Alpixn Technologies provides access to a vetted talent pool, established development processes, and a strong support structure. This ensures accountability, reliability, and high-quality deliverables, backed by the company's reputation and track record."
    }
  ];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
      <div className="border-b border-gray-700">
        <button
          onClick={onClick}
          className="w-full flex justify-between items-center text-left py-6"
        >
          <span className="text-xl font-medium text-white">{question}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
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
              <p className="pb-6 text-gray-300">
                {answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-gray-900 py-20 sm:py-28">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-white">FAQ's</h2>
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
        </section>
    );
}

export default FAQ; 