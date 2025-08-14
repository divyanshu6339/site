import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data Object for FAQ ---
const faqData = {
    title: "FAQ's",
    content: [
        {
            question: "What is software product development?",
            answer: "Software product development is the process of creating and delivering software applications or systems to meet specific user needs or business requirements, involving various stages from ideation to deployment and maintenance."
        },
        {
            question: "What are the 4 major types of product development?",
            answer: "The 4 major types of product development are: 1) New product development, 2) Product improvement, 3) Product line extension, and 4) Product repositioning, each involving different levels of innovation and risk."
        },
        {
            question: "What are the 5 stages of product development?",
            answer: "The 5 stages of product development are: 1) Ideation and concept generation, 2) Product design development services and prototyping, 3) Development and testing, 4) Launch and deployment, and 5) Maintenance and support, ensuring a structured approach."
        },
        {
            question: "What is the difference between a product developer and a software developer?",
            answer: "A product developer focuses on the overall product strategy, market analysis, digital product design and development, and user experience, while a software developer concentrates on writing the actual code and implementing the technical aspects of the product."
        }
    ]
};


// --- SVG Icon Component ---
const ChevronDownIcon = ({ isOpen }) => (
    <motion.svg
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-6 h-6 text-slate-400 flex-shrink-0 ml-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </motion.svg>
);

// --- FAQ Item Component ---
const FaqItem = ({ item, index, openIndex, setOpenIndex }) => {
    const isOpen = index === openIndex;

    return (
        <div className="border-b border-slate-700">
            <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex justify-between items-center w-full py-5 text-left transition-colors duration-300 hover:bg-slate-800/50 px-2 rounded-md"
            >
                <h3 className="text-lg font-medium text-white">{item.question}</h3>
                <ChevronDownIcon isOpen={isOpen} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-5 pt-2 pr-8 text-slate-400">{item.answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


// --- Main App Component ---
export default function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans antialiased flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 w-full">
        
        {/* --- FAQ Section --- */}
        <section>
            <header className="text-center mb-12">
                 <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white"
                 >
                    {faqData.title}
                </motion.h2>
            </header>
            <main className="bg-slate-800/50 p-4 sm:p-6 rounded-xl border border-slate-700">
                {faqData.content.map((item, index) => (
                    <FaqItem 
                        key={index}
                        item={item}
                        index={index}
                        openIndex={openFaqIndex}
                        setOpenIndex={setOpenFaqIndex}
                    />
                ))}
            </main>
        </section>

      </div>
    </div>
  );
}