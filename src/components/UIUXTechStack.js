import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Tools
import psLogo from '../Assets/Assests2/58.png';
import illustratorLogo from '../Assets/Assests2/59.png';
import sketchLogo from '../Assets/Assests2/60.png';
import figmaLogo from '../Assets/Assests2/61.png';
import corelDrawLogo from '../Assets/Assests2/62.png';
import affinityLogo from '../Assets/Assests2/63.png';
import procreateLogo from '../Assets/Assests2/64.png';
import gimpLogo from '../Assets/Assests2/65.png';
import canvaLogo from '../Assets/Assests2/66.png';
import inkscapeLogo from '../Assets/Assests2/67.png';

// UI Kits
import materialDesignLogo from '../Assets/Assests2/68.png';
import bootstrapLogo from '../Assets/Assests2/69.png';
import semanticUiLogo from '../Assets/Assests2/70.png';
import bulmaLogo from '../Assets/Assests2/71.png';
import tailwindCssLogo from '../Assets/Assests2/72.png';
import uiKitLogo from '../Assets/Assests2/73.png';
import antDesignLogo from '../Assets/Assests2/74.png';
import carbonDesignLogo from '../Assets/Assests2/75.png';
import fluentUiLogo from '../Assets/Assests2/76.png';

// Collaboration
import slackLogo from '../Assets/Assests2/77.png';
import teamsLogo from '../Assets/Assests2/78.png';
import discordLogo from '../Assets/Assests2/79.png';
import zoomLogo from '../Assets/Assests2/80.png';
import meetLogo from '../Assets/Assests2/81.png';
import asanaLogo from '../Assets/Assests2/82.png';
import trelloLogo from '../Assets/Assests2/83.png';
import jiraLogo from '../Assets/Assests2/84.png';
import basecampLogo from '../Assets/Assests2/85.png';

const techData = {
  Tools: [
    { name: 'Photoshop', logo: psLogo },
    { name: 'Illustrator', logo: illustratorLogo },
    { name: 'Sketch', logo: sketchLogo },
    { name: 'Figma', logo: figmaLogo },
    { name: 'CorelDRAW', logo: corelDrawLogo },
    { name: 'Affinity', logo: affinityLogo },
    { name: 'Procreate', logo: procreateLogo },
    { name: 'GIMP', logo: gimpLogo },
    { name: 'Canva', logo: canvaLogo },
    { name: 'Inkscape', logo: inkscapeLogo },
  ],
  'UI Kits': [
    { name: 'Material Design', logo: materialDesignLogo },
    { name: 'Bootstrap', logo: bootstrapLogo },
    { name: 'Semantic UI', logo: semanticUiLogo },
    { name: 'Bulma', logo: bulmaLogo },
    { name: 'Tailwind CSS', logo: tailwindCssLogo },
    { name: 'UIKit', logo: uiKitLogo },
    { name: 'Ant Design', logo: antDesignLogo },
    { name: 'Carbon Design', logo: carbonDesignLogo },
    { name: 'Fluent UI', logo: fluentUiLogo },
  ],
  Collaboration: [
    { name: 'Slack', logo: slackLogo },
    { name: 'Microsoft Teams', logo: teamsLogo },
    { name: 'Discord', logo: discordLogo },
    { name: 'Zoom', logo: zoomLogo },
    { name: 'Google Meet', logo: meetLogo },
    { name: 'Asana', logo: asanaLogo },
    { name: 'Trello', logo: trelloLogo },
    { name: 'Jira', logo: jiraLogo },
    { name: 'Basecamp', logo: basecampLogo },
  ],
};

const UIUXTechStack = () => {
  const [activeTab, setActiveTab] = useState('Tools');

  return (
    <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Our Tech Stack</h2>
        <p className="mt-4 text-lg text-gray-300 max-w-4xl mx-auto">
          Our tech stack for UI/UX encompasses a diverse range of cutting-edge technologies and frameworks. From robust programming languages and databases to cloud platforms and DevOps tools, we leverage the most suitable tech stack to build scalable, secure, and high-performance enterprise solutions.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-12">
        <div className="flex justify-center border-b border-gray-700">
          {Object.keys(techData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-3 text-lg font-medium transition-colors duration-300 relative focus:outline-none ${
                activeTab === tab ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                  layoutId="tech-underline"
                />
              )}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {techData[activeTab].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex flex-col items-center justify-center text-center p-4 rounded-lg bg-gray-800 border border-gray-700 transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="h-20 w-20 bg-white rounded-lg flex items-center justify-center p-2 shadow-md">
                    <img src={item.logo} alt={item.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <p className="mt-4 text-white font-semibold">{item.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UIUXTechStack; 