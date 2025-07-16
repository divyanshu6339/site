import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Language Icons
import java_icon from '../Assets/4.4.png';
import kotlin_icon from '../Assets/4.19.png';
import objc_icon from '../Assets/4.20.png';
import swift_icon from '../Assets/4.9.png';
import xamarin_icon from '../Assets/4.21.png';
import flutter_icon from '../Assets/4.14.png';
import csharp_icon from '../Assets/4.2.png';
import js_icon from '../Assets/4.5.png';
import rust_icon from '../Assets/4.8.png';
import dart_icon from '../Assets/4.22.png';

// Environment Icons
import android_studio_icon from '../Assets/4.23.png';
import android_kit_icon from '../Assets/4.24.png';
import xcode_icon from '../Assets/4.25.png';
import cocoa_touch_icon from '../Assets/4.26.png';
import nativescript_env_icon from '../Assets/4.27.png';
import reactnative_icon from '../Assets/4.17.png';
import unity_icon from '../Assets/4.29.png';
import ionic_env_icon from '../Assets/4.30.png';

// Framework Icons
import android_ui_icon from '../Assets/4.24.png';
import jetpack_icon from '../Assets/4.31.png';
import swift_ui_icon from '../Assets/4.9.png';
import uikit_icon from '../Assets/4.32.png';
import material_icon from '../Assets/4.33.png';
import nativescript_fw_icon from '../Assets/4.34.png';
import vuetify_icon from '../Assets/4.35.png';
import semantic_icon from '../Assets/4.36.png';
import onsen_icon from '../Assets/4.37.png';
import ionic_fw_icon from '../Assets/4.38.png';

const techData = {
  languages: [
    { name: 'Java', icon: java_icon },
    { name: 'Kotlin', icon: kotlin_icon },
    { name: 'Objective-C', icon: objc_icon },
    { name: 'Swift', icon: swift_icon },
    { name: 'Xamarin', icon: xamarin_icon },
    { name: 'Flutter', icon: flutter_icon },
    { name: 'C sharp', icon: csharp_icon },
    { name: 'Javascript', icon: js_icon, highlight: true },
    { name: 'Rust', icon: rust_icon },
    { name: 'Dart', icon: dart_icon },
  ],
  environments: [
    { name: 'Android Studio', icon: android_studio_icon },
    { name: 'Andriod Kit', icon: android_kit_icon },
    { name: 'Apple Xcode', icon: xcode_icon },
    { name: 'ios cocoa touch', icon: cocoa_touch_icon },
    { name: 'NativeScript', icon: nativescript_env_icon },
    { name: 'React Native', icon: reactnative_icon, highlight: true },
    { name: 'Unity', icon: unity_icon },
    { name: 'Ionic', icon: ionic_env_icon },
  ],
  frameworks: [
    { name: 'Android UI', icon: android_ui_icon },
    { name: 'Jetpack Compose', icon: jetpack_icon },
    { name: 'SwiftUI', icon: swift_ui_icon },
    { name: 'UIKit', icon: uikit_icon },
    { name: 'Material Design', icon: material_icon },
    { name: 'Nativescript UI', icon: nativescript_fw_icon },
    { name: 'Vuetify', icon: vuetify_icon },
    { name: 'Semantic UI', icon: semantic_icon },
    { name: 'Onsen UI', icon: onsen_icon },
    { name: 'Ionic', icon: ionic_fw_icon },
  ],
};

const TechCard = ({ icon, name, highlight }) => (
  <div className="text-center p-4 transition-transform duration-300 transform hover:-translate-y-2">
    <div className="bg-gray-800 rounded-lg p-6 inline-block transition-all duration-300 hover:bg-gray-700 hover:shadow-xl hover:shadow-blue-500/20">
      <img src={icon} alt={name} className="h-20 w-20 mx-auto" />
    </div>
    <p className={`mt-4 text-lg font-semibold ${highlight ? 'text-blue-400' : 'text-gray-300'}`}>{name}</p>
  </div>
);

const TechStackTabs = () => {
  const [activeTab, setActiveTab] = useState('languages');

  const tabs = [
    { id: 'languages', name: 'Languages' },
    { id: 'environments', name: 'Environments' },
    { id: 'frameworks', name: 'Frameworks' },
  ];

  return (
    <div className="bg-black text-white py-24 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Tech Stack</h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Our tech stack for Mobile App development encompasses a diverse range of cutting-edge technologies and frameworks. From robust programming languages and databases to cloud platforms and DevOps tools, we leverage the most suitable tech stack to build scalable, secure, and high-performance enterprise solutions
          </p>
        </div>

        <div className="mb-12 flex justify-center border-b border-gray-800">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 text-xl font-semibold transition-colors duration-300 focus:outline-none ${
                activeTab === tab.id
                  ? 'border-b-2 border-blue-500 text-white'
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {techData[activeTab].map((tech) => (
                <TechCard key={tech.name} {...tech} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TechStackTabs; 