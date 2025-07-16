import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const guideData = {
  technologies: {
    title: 'Application Modernization Technologies',
    intro: "In today's ever-evolving technological landscape, businesses must adapt to stay competitive. Application modernization solutions are a strategic approach that involves updating legacy systems and applications to align with current demands, improving performance, scalability, and user experience. This process is vital for companies looking to remain agile, secure, and responsive to changing market needs.",
    points: [
      { title: 'Cloud application modernization', text: 'Transitioning applications to cloud-based infrastructures, such as AWS, Azure, or Google Cloud, provides scalability, flexibility, and cost-efficiency.' },
      { title: 'API-First Approach', text: 'Focusing on building robust APIs allows seamless integration, fostering interoperability and collaboration between different applications.' },
      { title: 'DevOps Integration', text: 'Implementing DevOps practices streamlines development, testing, and deployment, ensuring continuous improvement and faster delivery cycles.' },
      { title: 'Automation Tools', text: 'Employing automation tools for testing, deployment, and monitoring reduces manual intervention, enhancing efficiency and reliability.' },
      { title: 'Legacy System Modernization Services', text: 'Bridging modern applications with existing legacy systems via APIs or middleware maintains data integrity and functionality.' },
      { title: 'User Experience Enhancement', text: 'Updating the user interface and experience to meet current design and usability standards improves customer satisfaction and engagement.' },
      { title: 'Data Modernization', text: 'Adopting modern data management techniques and analytics to harness the full potential of data assets for informed decision-making.' },
    ]
  },
  legacy: {
    title: 'Types of Legacy Applications We Modernize',
    intro: "Modernizing legacy applications is a strategic imperative in today's fast-paced technological landscape. Legacy applications, often built on outdated architectures, can pose challenges such as limited scalability, security vulnerabilities, and reduced efficiency. The legacy application modernization process involves rearchitecting, refactoring, or migrating these applications to contemporary technologies, ensuring improved performance, agility, and compatibility with current systems. Following are the legacy application modernization services we offer",
    points: [
      { title: 'Cloud application modernization', text: 'Through containerization, microservices, and DevOps integration, cloud modernization optimizes performance, enabling rapid development, deployment, and scalability in dynamic cloud environments. It revolutionizes traditional software by migrating to scalable, secure cloud infrastructures, ensuring agility and cost-efficiency for evolving business needs' },
      { title: 'Microsoft application modernization', text: "Microsoft application modernization leverages Azure's robust ecosystem, empowering legacy systems to evolve with cutting-edge technologies, and enhancing performance and scalability. It streamlines development processes, ensuring agility and seamless integration for enhanced productivity" },
      { title: 'AWS cloud modernization', text: 'AWS cloud modernization redefines legacy infrastructure by leveraging scalable, secure cloud solutions, fostering agility and innovation for evolving business landscapes. It optimizes performance, enabling streamlined workflows and adaptable, cost-effective solutions for dynamic market demands' },
    ]
  },
  strategy: {
    title: 'Application Modernization Strategy We Follow',
    intro: "A well-crafted application modernization strategy, when tailored to an organization's specific needs and executed effectively, enables businesses to leverage the latest technologies, improve operational efficiency, and maintain a competitive edge in the dynamic market landscape. Here are the strategies we follow.",
    points: [
      { title: 'Assessment of Current State', text: 'We evaluate existing applications to identify weaknesses, outdated technologies, and areas for improvement.' },
      { title: 'Define Goals and Objectives', text: 'Next, we clearly outline the desired outcomes of the modernization process, such as improved performance, cost-efficiency, scalability, or enhanced user experience.' },
      { title: 'Select Modernization Approaches', text: 'Further, we determine the most suitable approach (e.g., rehosting, re-platforming, rearchitecting) based on the specific needs of each application.' },
      { title: 'Security and Compliance Upgrades', text: 'Alpixn Technologies ensures modernized applications meet current security standards and regulatory compliance to safeguard data and user privacy.' },
      { title: 'User Experience Enhancement', text: 'Our Strategy involves revamping of user interfaces and experiences to align with modern design standards, enhancing usability and customer satisfaction.' },
      { title: 'Software Modernization', text: 'We adopt modern data management techniques and analytics for better decision-making and leveraging the full potential of data assets.' },
      { title: 'Continuous Monitoring and Maintenance', text: 'Finally, we implement continuous monitoring and support mechanisms to ensure the sustained effectiveness and relevance of modernized applications.' },
    ]
  }
};

const ModernizationGuide = () => {
  const [activeTab, setActiveTab] = useState('technologies');

  return (
    <div className="bg-gray-900 text-white py-24 sm:py-32">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">An Essential Guide to Application Modernization Services</h2>
        </div>
        <div className="mx-auto mt-16 max-w-screen-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
            <div className="flex flex-col space-y-4">
              {Object.keys(guideData).map(key => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`text-left text-xl font-semibold p-4 rounded-lg transition-all duration-300 ${activeTab === key ? 'bg-blue-600 shadow-lg' : 'bg-gray-800 hover:bg-gray-700'}`}
                >
                  {guideData[key].title}
                </button>
              ))}
            </div>
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700"
                >
                  <p className="text-lg text-gray-300 mb-8">{guideData[activeTab].intro}</p>
                  <div className="space-y-6">
                    {guideData[activeTab].points.map(point => (
                      <div key={point.title}>
                        <h4 className="text-xl font-bold text-blue-400">{point.title}</h4>
                        <p className="mt-2 text-lg text-gray-400">{point.text}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernizationGuide; 