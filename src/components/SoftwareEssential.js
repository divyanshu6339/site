import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Data Object ---
// I've parsed and structured the content you provided into a more manageable format.
const guideData = {
  technologies: {
    title: 'Advanced Technologies',
    description: 'Enhancing your software product with advanced technologies can significantly improve its functionality, user experience, and competitive edge. Here are some advanced technologies you might consider integrating:',
    content: [
      { subtitle: 'Artificial Intelligence (AI) and Machine Learning (ML)', points: ['Personalization: Use AI to tailor user experiences based on behavior and preferences.', 'Predictive Analytics: Implement ML algorithms to predict user actions or product demand.', 'Automation: Automate repetitive tasks to increase efficiency and accuracy.'] },
      { subtitle: 'Internet of Things (IoT)', points: ['Connectivity: Connect devices and gather data to provide more contextual services.', 'Automation: Use IoT devices to automate processes and improve efficiency.', 'Data Collection: Collect and analyze data from IoT devices for better insights and decision-making.'] },
      { subtitle: 'Augmented Reality (AR) and Virtual Reality (VR)', points: ['Enhanced User Experience: Provide immersive experiences for users in gaming, education, and training.', 'Visualization: Use AR/VR for product visualization, especially in retail and real estate.'] },
      { subtitle: 'Edge Computing', points: ['Reduced Latency: Process data closer to where it is generated for faster response times.', 'Bandwidth Optimization: Reduce the amount of data sent to centralized data centers.'] },
      { subtitle: 'Cybersecurity Technologies', points: ['Advanced Threat Protection: Implement AI-driven threat detection and response.', 'Encryption: Use advanced encryption techniques to protect sensitive data.', 'Identity Management: Enhance security with biometrics and multi-factor authentication.'] },
      { subtitle: 'Quantum Computing (Future-ready)', points: ['Complex Problem Solving: Prepare for future advancements where quantum computing can solve complex problems faster than classical computers.', 'Cryptography: Stay ahead in the field of cryptography with quantum-safe algorithms.'] },
      { subtitle: 'Natural Language Processing (NLP)', points: ['Chatbots and Virtual Assistants: Enhance customer support and engagement with AI-driven chatbots.', 'Sentiment Analysis: Analyze user feedback and sentiment for better product decisions.'] },
      { subtitle: 'Big Data and Analytics', points: ['Data-Driven Insights: Leverage big data analytics to gain insights into user behavior and trends.', 'Real-Time Analytics: Implement real-time data processing for immediate insights and actions.'] },
      { subtitle: 'Microservices Architecture', points: ['Modularity: Break down your application into smaller, manageable services.', 'Flexibility: Update and deploy individual components without affecting the whole system.', 'Scalability: Scale specific parts of your application as needed.'] },
      { subtitle: 'DevOps and CI/CD', points: ['Automation: Automate testing and deployment processes to improve efficiency.', 'Collaboration: Enhance collaboration between prototype development and operations teams.', 'Quality: Ensure high-quality software through continuous testing and monitoring.'] },
      { subtitle: 'Robotic Process Automation (RPA)', points: ['Efficiency: Automate repetitive tasks to save time and reduce errors.', 'Cost Reduction: Lower operational costs by reducing manual labor.'] },
      { subtitle: '5G Technology', points: ['High-Speed Connectivity: Enhance user experience with faster internet speeds.', 'Low Latency: Improve the performance of real-time applications like gaming and video conferencing.'] },
    ]
  },
  lifecycle: {
    title: 'Development Lifecycle',
    description: 'Here are the typical steps in a software product development lifecycle:',
    content: [
      { subtitle: '1. Ideation and Concept Validation', points: ['Gathering ideas, conducting market research, and validating the product concept’s viability and potential market demand.'] },
      { subtitle: '2. Requirements Gathering and Analysis', points: ['Defining detailed product requirements, user stories, and specifications based on stakeholder input and market analysis.'] },
      { subtitle: '3. Product Design Development', points: ['Creating wireframes, prototypes, and user interface designs, as well as defining the overall product architecture and technology stack.'] },
      { subtitle: '4. Development and Implementation', points: ['Building the actual product through iterative development cycles, following agile methodologies like Scrum or Kanban.'] },
      { subtitle: '5. Testing and Quality Assurance', points: ['Performing various types of testing (unit, integration, system, performance, and user acceptance) to ensure the product meets requirements and quality standards.'] },
      { subtitle: '6. Deployment and Release', points: ['Launching the product to production environments, either through a phased rollout or a full release.'] },
      { subtitle: '7. Monitoring and Maintenance', points: ['Monitoring the product’s performance, gathering user feedback, and addressing any issues or bugs through regular maintenance and updates.'] },
      { subtitle: '8. Continuous Improvement', points: ['Analyzing user data, market trends, and feedback to identify areas for improvement and plan for future product enhancements or new feature releases.'] },
    ]
  },
  useCases: {
    title: 'Top Use Cases',
    description: 'Here are some of the top use cases for software product development:',
    content: [
      { subtitle: 'Enterprise Resource Planning (ERP) Systems', points: ['Custom ERP software solutions are developed to streamline business processes, integrate operations, and provide real-time data visibility across departments like finance, human resources, supply chain, and inventory management.'] },
      { subtitle: 'Customer Relationship Management (CRM) Solutions', points: ['CRM software products are designed to manage customer interactions, sales pipelines, marketing campaigns, and customer service, enabling businesses to build stronger relationships with their clients.'] },
      { subtitle: 'E-commerce Platforms', points: ['Custom e-commerce solutions are developed to create seamless online shopping experiences, enable secure transactions, manage inventory, and integrate with payment gateways and shipping providers.'] },
      { subtitle: 'Healthcare Applications', points: ['Software products like electronic health record (EHR) systems, telemedicine platforms, and medical device software are developed to improve patient care, streamline clinical workflows, and ensure compliance with industry regulations.'] },
      { subtitle: 'Financial Software', points: ['Products like banking applications, trading platforms, and investment management tools are developed to facilitate secure financial transactions, enable real-time data analysis, and comply with regulatory requirements.'] },
    ]
  },
  outsourcing: {
    title: 'Benefits of Outsourcing',
    description: 'Outsourcing software product development offers numerous benefits. By partnering with top product development companies, organizations can access a wide pool of skilled talent. Here are some key benefits:',
    content: [
      { subtitle: 'Access to Specialized Expertise', points: ['By outsourcing, you gain access to a pool of highly skilled and experienced developers, designers, and subject matter experts who specialize in various technologies and domains.'] },
      { subtitle: 'Cost Optimization', points: ['Outsourcing to countries with lower labor costs can significantly reduce development expenses, especially for long-term projects or when scaling teams.'] },
      { subtitle: 'Accelerated Time-to-Market', points: ['Outsourcing partners often have dedicated teams that can begin working on your project immediately, allowing for faster development cycles.'] },
      { subtitle: 'Risk Mitigation', points: ['Partnering with experienced outsourcing companies can mitigate risks associated with software development, such as project management challenges and compliance issues.'] },
      { subtitle: 'Focus on Core Competencies', points: ['Outsourcing non-core activities allows your in-house team to focus on your organization’s core competencies and strategic initiatives.'] },
    ]
  },
  industries: {
    title: 'Benefiting Industries',
    description: 'Here are some key industries that benefit significantly from software product development:',
    content: [
      { subtitle: 'Healthcare', points: ['Custom software solutions like electronic health records (EHR) systems, telemedicine platforms, and medical imaging software enhance patient care and streamline clinical workflows.'] },
      { subtitle: 'Finance and Banking', points: ['Financial institutions rely on software products such as trading platforms, investment management tools, and banking applications to facilitate secure transactions.'] },
      { subtitle: 'Retail and E-commerce', points: ['E-commerce platforms, inventory management systems, and CRM solutions help retailers create seamless online shopping experiences.'] },
      { subtitle: 'Manufacturing and Automotive', points: ['Industrial automation systems, predictive maintenance software, and supply chain management solutions optimize manufacturing processes.'] },
      { subtitle: 'Education', points: ['EdTech solutions, such as learning management systems (LMS) and virtual classrooms, enhance the educational experience.'] },
    ]
  }
};

// --- SVG Icon Component ---
const CheckIcon = () => (
  <svg className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);


// --- Main App Component ---
export default function App() {
  const [activeTab, setActiveTab] = useState(Object.keys(guideData)[0]);

  const activeData = guideData[activeTab];

  // Animation variants for the content area
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans antialiased">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">

        {/* --- Header Section --- */}
        <header className="text-center mb-12 md:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight"
          >
            Software Product Development Guide
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeIn' }}
            className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-400"
          >
            A comprehensive overview of the technologies, processes, and strategies shaping modern software creation.
          </motion.p>
        </header>

        {/* --- Main Content Layout --- */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">

          {/* --- Sidebar Navigation --- */}
          <aside className="lg:w-1/4">
            <nav className="lg:sticky lg:top-24">
              <ul className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 space-x-2 lg:space-x-0 lg:space-y-2">
                {Object.keys(guideData).map(key => (
                  <li key={key} className="flex-shrink-0 lg:flex-shrink">
                    <button
                      onClick={() => setActiveTab(key)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 whitespace-nowrap ${
                        activeTab === key
                          ? 'bg-blue-600 text-white shadow-lg transform lg:scale-105'
                          : 'bg-slate-800 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      {guideData[key].title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* --- Content Display Area --- */}
          <main className="lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 shadow-2xl"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{activeData.title}</h2>
                <p className="text-slate-400 mb-8 text-base md:text-lg">{activeData.description}</p>
                
                <div className="space-y-6">
                  {activeData.content.map((section, index) => (
                    <motion.div key={index} variants={itemVariants} className="border-l-4 border-blue-500 pl-4 md:pl-6">
                      <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-3">{section.subtitle}</h3>
                      <ul className="space-y-3">
                        {section.points.map((point, i) => (
                          <li key={i} className="flex items-start text-sm md:text-base">
                            <CheckIcon />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}