import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Import assets
import phoneIcon from '../Assets/phone.svg';
import peopleIcon from '../Assets/people.svg';
import rocketIcon from '../Assets/rocket.svg';

const guideContent = {
  'why-opt': {
    title: 'Why Opt For Node.JS Development Services?',
    description: 'Node.js is a powerful runtime environment for building fast and scalable network applications. Its non-blocking, event-driven architecture makes it ideal for data-intensive real-time applications that run across distributed devices. Opting for Node.js means choosing performance, scalability, and a vast ecosystem of open-source libraries.',
  },
  'frameworks': {
    title: 'Top Node.js Frameworks',
    frameworks: [
      { name: 'Express.js', desc: 'Express.js is one of the most popular and widely used Node.js frameworks. It provides a minimal, flexible framework with a robust set of features for web and mobile applications. Express.js simplifies the development process by offering a variety of middleware options and supporting a wide range of HTTP methods.' },
      { name: 'Koa.js', desc: 'Developed by the creators of Express.js, Koa.js is designed to be a lightweight and modern framework. Koa.js offers improved control over middleware and is ideal for building highly customizable Node.js applications.' },
      { name: 'NestJS', desc: 'NestJS is a progressive Node.js framework that combines elements of object-oriented programming, functional programming, and reactive programming. NestJS is favored for building scalable, enterprise-grade applications due to its modular architecture and robust support for dependency injection.' },
      { name: 'Sails.js', desc: 'Sails.js is a MVC (Model-View-Controller) framework that is designed to build data-driven APIs and service-oriented architectures. Sails.js is ideal for building real-time applications like chat apps and collaborative platforms.' },
      { name: 'Meteor.js', desc: 'Meteor.js is a full-stack framework that simplifies the development of real-time web and mobile applications. Meteor.js is particularly effective for building real-time features and applications with rapid development cycles.' },
      { name: 'Adonis.js', desc: 'Adonis.js is a full-stack framework that offers a robust set of tools and features for building scalable applications. It provides a well-defined structure for organizing your code and includes built-in support for authentication, ORM, and validations.' },
    ],
  },
  'benefits': {
    title: 'Benefits of Using Node.js for Software Development',
    description: 'Node.js offers numerous benefits, including high performance, easy scalability, a rich package ecosystem (npm), and the ability to use JavaScript for both frontend and backend development, which streamlines the development process and fosters code reusability.',
  },
  'types-of-apps': {
    title: 'Types of Apps & Software Can Build with Node JS',
    description: 'Node.js is versatile and can be used to build a wide range of applications, such as single-page applications (SPAs), real-time chat applications, RESTful APIs, microservices, IoT applications, and server-side rendered (SSR) web applications.',
  },
  'industries': {
    title: 'Industries That Benefit from Node.js Development',
    description: 'Many industries benefit from Node.js, including FinTech, e-commerce, healthcare, social media, and streaming services. Its ability to handle concurrent connections and real-time data makes it a strong choice for applications in these sectors.',
  },
  'top-skills': {
    title: 'Top Skills to Look for When You Hire Node.js Developers',
    description: 'When hiring Node.js developers, look for proficiency in JavaScript/TypeScript, experience with Node.js frameworks (like Express), knowledge of asynchronous programming, database management (SQL/NoSQL), API design (REST/GraphQL), and familiarity with cloud platforms and CI/CD practices.',
  },
};

const hiringSteps = [
    { icon: phoneIcon, title: 'Schedule a Call', description: 'Share your project details and developer requirements with our experts.' },
    { icon: peopleIcon, title: 'Select Your Team', description: 'Interview and handpick the best developers tailored to your needs.' },
    { icon: rocketIcon, title: 'Start Your Project', description: 'The hand-picked developers are made to sign an NDA and are onboarded for the project.' },
];

const TabButton = ({ title, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full text-left p-5 rounded-lg text-xl transition-colors duration-300 ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
    >
        {title}
    </button>
);

const HiringGuide = () => {
  const [activeTab, setActiveTab] = useState('frameworks');

  return (
    <div className="bg-[#020c1b] text-white">
      {/* Essential Guide Section */}
      <div className="py-20 sm:py-28">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-5xl sm:text-6xl font-bold">
                    Essential Guide to <span className="relative inline-block">
                        <span className="relative z-10">Hiring Best</span>
                        <svg className="absolute left-0 -bottom-2 w-full h-auto text-cyan-400 z-0" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M1 6 C 10 2, 20 7, 30 5 C 40 3, 50 8, 60 5 C 70 2, 80 7, 90 4 C 95 2, 99 5, 99 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span> Node.js Developers
                </h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3 flex flex-col gap-2">
                    {Object.keys(guideContent).map(key => (
                        <TabButton key={key} title={guideContent[key].title} isActive={activeTab === key} onClick={() => setActiveTab(key)} />
                    ))}
                </div>
                <div className="lg:w-2/3 bg-[#0a192f] border border-gray-700 rounded-lg p-10 min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-3xl font-bold text-white mb-4">{guideContent[activeTab].frameworks ? 'Top Node.js Frameworks' : guideContent[activeTab].title}</h3>
                            {guideContent[activeTab].frameworks ? (
                                <div className="space-y-6">
                                    {guideContent[activeTab].frameworks.map(fw => (
                                        <div key={fw.name}>
                                            <h4 className="font-bold text-xl text-cyan-400">{fw.name}</h4>
                                            <p className="text-gray-300 text-lg">{fw.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-300 text-xl">{guideContent[activeTab].description}</p>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
      </div>

      {/* 3 Simple Steps Section */}
      <div className="pb-20 sm:pb-28">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-5xl sm:text-6xl font-bold">
                        Hire Top Node.js Developers in <br/>
                        <span className="relative inline-block">
                            <span className="relative z-10">3 Simple Steps</span>
                            <svg className="absolute left-0 -bottom-2 w-full h-auto text-cyan-400 z-0" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <path d="M1 6 C 10 2, 20 7, 30 5 C 40 3, 50 8, 60 5 C 70 2, 80 7, 90 4 C 95 2, 99 5, 99 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </h2>
                    <a href="#contact" className="mt-10 inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-5 px-10 rounded-md text-xl transition-colors duration-300">
                        Hire Top 1% Talent Now
                    </a>
                </div>
                <div className="lg:w-1/2 w-full">
                    <div className="relative flex flex-col items-start gap-12">
                        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-700 hidden sm:block"></div>
                        {hiringSteps.map((step, index) => (
                            <div key={index} className="flex items-center gap-6 relative w-full">
                                <div className="relative z-10 flex-shrink-0">
                                    <div className="bg-gray-800 rounded-full h-12 w-12 flex items-center justify-center border-2 border-gray-600">
                                        <div className="bg-cyan-500 rounded-full h-8 w-8 flex items-center justify-center">
                                          <img src={step.icon} alt="" className="h-5 w-5"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-2xl font-bold text-white">{step.title}</h4>
                                    <p className="text-gray-300 text-lg">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HiringGuide; 