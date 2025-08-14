import React from 'react';
import { motion } from 'framer-motion';

// --- Data Object for Engagement Model ---
const engagementData = {
  title: 'Engagement Model',
  description: 'Alpixn Technologies offers versatile engagement models for software product development services, providing innovative solutions to match clients’ unique requirements. Let’s explore these engagement models.',
  content: [
    {
      title: 'Dedicated Team',
      description: 'Alpixn Technologies provides a dedicated team of skilled professionals who work exclusively on your project, ensuring focused attention, seamless collaboration, and efficient delivery tailored to your specific needs and timelines.',
      points: ['Client-Centric Team Formation', 'Direct Reporting And Transparency', 'Scalability And Flexibility', 'Quality And Efficiency']
    },
    {
      title: 'Team Augmentation',
      description: 'Utilize our expertise by augmenting your existing team with specialized talent, enabling you to scale up or down based on project demands while benefitting from our proven methodologies and best practices.',
      points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
      title: 'Project-Based',
      description: 'Our project-based engagement model offers end-to-end software product development services, from ideation to deployment, with a fixed scope, timeline, and budget, providing you with a cost-effective solution.',
      points: ['Fixed Budget', 'Milestones And Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
  ]
};

// --- SVG Icon Component ---
const ArrowIcon = ({ className = "text-blue-400" }) => (
    <svg className={`w-4 h-4 mr-2 flex-shrink-0 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
);


// --- Main App Component ---
export default function App() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans antialiased flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">

        {/* --- Header Section --- */}
        <header className="text-center mb-12 md:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
          >
            {engagementData.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeIn' }}
            className="max-w-3xl mx-auto text-base sm:text-lg text-slate-400"
          >
            {engagementData.description}
          </motion.p>
        </header>

        {/* --- Content Display Area --- */}
        <main>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {engagementData.content.map((card, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants} 
                  className="bg-slate-800 rounded-xl shadow-lg flex flex-col transition-all duration-300 hover:shadow-blue-500/20 hover:scale-[1.03] border border-slate-700"
                >
                  <div className="bg-blue-600 p-5 rounded-t-xl">
                    <h3 className="text-xl font-bold text-white text-center">{card.title}</h3>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-slate-400 mb-6 flex-grow">{card.description}</p>
                    <ul className="space-y-3">
                      {card.points.map((point, i) => (
                        <li key={i} className="flex items-center text-sm text-slate-300">
                          <ArrowIcon className="text-blue-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
        </main>
      </div>
    </div>
  );
}