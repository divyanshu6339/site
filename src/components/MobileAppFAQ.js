import React, { useState } from 'react';

const faqData = [
  {
    question: 'How to choose a mobile app development platform?',
    answer: 'Selecting a mobile app development platform involves considering factors like target audience, project requirements, and development expertise. Assess the popularity and market share of iOS and Android to align with your user base. Evaluate the costs associated with each platform to make an informed decision that best suits your project goals.',
  },
  {
    question: 'What is cross-platform app development and hybrid mobile app development?',
    answer: 'Cross-platform app development involves creating applications that can run on multiple operating systems such as Android and iOS, using a single codebase. Hybrid mobile app development combines elements of both native and web applications, allowing developers to use a single codebase for different platforms while leveraging web technologies.',
  },
  {
    question: 'What is the cost of mobile app development in 2024?',
    answer: 'The cost to develop a simple app in 2024 may range from $30,000 to $50,000. The cost of developing a complex app may range from $100,000 to $250,000 or more. Also, to develop an advanced app nowadays, it may range from $250,000 to $1,000,000 or more.',
  },
  {
    question: 'How long does it take to build a custom mobile app from scratch?',
    answer: 'Generally, the average time to develop a custom mobile application varies from 3 months to launch an MVP and up to 9 months to scale it to a big product.',
  },
  {
    question: 'Do you provide mobile app development services in India?',
    answer: 'Yes, we do. We are among the trusted providers of mobile app development services in India, offering end-to-end solutions tailored to your business needs—from ideation and UI/UX design to deployment and support.',
  },
  {
    question: 'Can you help scale and maintain my mobile app after launch?',
    answer: 'Yes, we can. As a seasoned mobile app development company in India, we build your app and offer post-launch support, performance optimization, and continuous feature enhancements.',
  },
];

const FaqItem = ({ faq, index, open, toggle }) => {
  return (
    <div className="border-b border-gray-700 py-6">
      <button
        onClick={() => toggle(index)}
        className="w-full flex justify-between items-center text-left text-xl sm:text-2xl font-semibold text-white focus:outline-none"
      >
        <span>{faq.question}</span>
        <span className={`transform transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="mt-4 text-gray-300 text-lg sm:text-xl leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
};

const MobileAppFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-16 sm:py-24 font-poppins">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16">FAQ's</h2>
        <div className="max-w-7xl mx-auto">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              index={index}
              open={openFaq === index}
              toggle={toggleFaq}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileAppFAQ; 