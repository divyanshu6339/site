import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white bg-opacity-95 rounded-2xl shadow-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6 px-8 focus:outline-none"
      >
        <span className="text-2xl font-medium text-gray-900">{question}</span>
        <svg
          className={`w-8 h-8 text-gray-800 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-8 pb-8 text-gray-600">
           <div className="border-t border-gray-200 pt-6">
            <p className="text-xl">{answer}</p>
           </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
    const faqData = [
    {
      question: 'What is JFT AI Chatbot?',
      answer: 'JFT AI Chatbot is an AI-driven customer support solution that integrates with your digital platforms to provide real-time, intelligent responses to customer inquiries, enhancing user engagement and satisfaction.',
    },
    {
      question: 'How does the chatbot learn and adapt?',
      answer: 'Our chatbot uses machine learning algorithms to analyze interactions and user feedback. This continuous learning process allows it to improve its understanding, adapt its responses, and become more effective over time.',
    },
    {
      question: 'Is JFT AI Chatbot easy to integrate?',
      answer: 'Yes, our chatbot is designed for seamless integration. We provide comprehensive documentation and support to help you connect it with your existing websites, applications, and internal systems with minimal effort.',
    },
    {
      question: 'How does JFT AI Chatbot handle sensitive data?',
      answer: 'We prioritize data security. All interactions are encrypted, and the chatbot complies with industry-standard privacy regulations. We have robust protocols in place to ensure sensitive customer information is handled securely.',
    },
    {
      question: 'Can I customize the chat flows?',
      answer: 'Absolutely. We offer powerful tools that allow you to customize chat flows to match your specific business requirements, ensuring the chatbot guides customers through a journey that aligns with your processes.',
    },
    {
        question: 'What support options are available?',
        answer: 'We offer a range of support options, including detailed documentation, email support, and dedicated technical assistance to ensure you get the most out of our chatbot solution.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-white">FAQs about <span className="text-cyan-400">JFT AI Chatbot</span></h2>
      </div>
      <div className="space-y-6">
        {faqData.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ; 