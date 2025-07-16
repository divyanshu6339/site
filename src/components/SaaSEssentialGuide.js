import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const guideData = {
  'Benefits of SaaS Product Development': {
    content: `SaaS product development offers numerous advantages for businesses. SaaS software development companies provide solutions that reduce overhead costs and maintenance.`, 
    points: [
        'Cost-Effectiveness: SaaS eliminates upfront costs with no hardware or software installations, and maintenance.',
        'Accessibility: SaaS applications are accessible from anywhere with an internet connection, promoting flexibility and remote work.',
        'Scalability: SaaS solutions can easily scale up or down based on business requirements.',
        'Automatic Updates: SaaS providers handle regular updates and maintenance, ensuring applications remain up-to-date and secure.',
        'Reduced Time-to-Benefit: SaaS solutions can be deployed quickly, reducing the time-to-benefit, including the burden on in-house IT teams.',
    ]
  },
  'Benefits of Outsourcing the SaaS Development': {
    content: 'Outsourcing SaaS development to a professional SaaS app development company offers significant benefits. SaaS development companies bring specialized expertise, ensuring high-quality and innovative solutions.',
    points: [
        'Access to Specialized Expertise: By outsourcing to a dedicated SaaS development company, you gain access to a team of experts with extensive knowledge and experience in building robust, scalable SaaS applications, leveraging the latest technologies and best practices.',
        'Cost Optimization: Outsourcing SaaS development can be more cost-effective compared to building an in-house team. You only pay for the resources and expertise you need, without incurring additional overhead costs such as infrastructure, training, and employee benefits.',
        'Accelerated Time-to-Market: Experienced SaaS development teams can streamline the development process, allowing you to launch your SaaS product faster and gain a competitive advantage in the market.',
    ]
  },
  'SaaS Product Development Process': {
    content: 'Here are the typical steps in the SaaS product development process:',
    points: [
        '1. Requirement Gathering and Analysis',
        '2. Design and Architecture',
        '3. Development',
        '4. Integration',
        '5. Testing and Quality Assurance',
        '6. Deployment and Launch',
        '7. Training and Support',
        '8. Maintenance and Updates',
    ]
  },
  'Industries that Benefit from Custom SaaS Development': {
    content: 'Custom SaaS development caters to diverse industries, providing tailored solutions to meet specific needs.',
    points: [
        'Healthcare, for instance, benefits from SaaS platforms for patient management and telemedicine.',
        'E-commerce companies leverage SaaS development services for inventory and sales management.',
        'The education sector utilizes SaaS app development for virtual learning environments.',
        'Financial services adopt SaaS software development for secure transaction processing and compliance management.',
    ]
  },
  'Key Technologies Used in SaaS Software Development': {
    content: 'At our SaaS software development company, we use a wide range of advanced technologies to build reliable, scalable, and high-performing SaaS applications. From cloud infrastructure to modern programming languages and frameworks, we leverage the latest innovations to ensure that your application delivers seamless experiences to users while meeting business requirements. Here’s a breakdown of the key technologies we use in our SaaS app development services.',
    points: [
        'Cloud Infrastructure and Platforms: We rely on leading cloud platforms such as Amazon Web Services (AWS), Microsoft Azure, and Google Cloud to build and deploy SaaS applications.',
        'Microservices Architecture: To enhance scalability and maintainability, we implement microservices architecture. This allows us to break down the SaaS application into smaller, independent services, each responsible for specific business functionalities.',
    ]
  },
};

const SaaSEssentialGuide = () => {
  const [activeTab, setActiveTab] = useState(Object.keys(guideData)[0]);

  return (
    <motion.div
      className="bg-gray-900 text-white py-16 sm:py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12">An Essential Guide to SaaS Product Development</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <ul className="space-y-2">
              {Object.keys(guideData).map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => setActiveTab(tab)}
                    className={`w-full text-left px-6 py-4 rounded-lg transition-colors duration-300 ${
                      activeTab === tab
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}>
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-2/3 bg-gray-800 p-8 rounded-lg relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <h3 className="text-2xl font-bold mb-4">{activeTab}</h3>
                <p className="text-gray-400 mb-6">{guideData[activeTab].content}</p>
                <ul className="space-y-4">
                  {guideData[activeTab].points.map((point, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <span className="text-blue-500 mr-3 mt-1">&#10003;</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SaaSEssentialGuide;
