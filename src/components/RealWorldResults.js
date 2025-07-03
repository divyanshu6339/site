import React from 'react';
import insight1 from '../Assets/55.1.png';
import insight2 from '../Assets/55.2.png';
import insight3 from '../Assets/55.3.png';

const insightsData = [
  {
    image: insight1,
    title: 'SpaceHubb',
    description: 'SpaceHubb portal launched by Micro IT Solutions was developed to help industry-specific candidates and recruiters find and post...',
    link: '#',
    bgColor: 'bg-cyan-200',
    rotation: '-rotate-6'
  },
  {
    image: insight2,
    title: 'Corporate Cabs',
    description: 'Jellyfish Technologies partnered with Corporate Cabs, developing a seamless Android app for POS terminals, ensuring efficient online...',
    link: '#',
    bgColor: 'bg-sky-200',
    rotation: 'rotate-6'
  },
  {
    image: insight3,
    title: 'Decoding The Concept of ....',
    description: 'Digitization has been a key driver globally for various businesses over the last few decades. Companies have centralized their focus on...',
    link: '#',
    bgColor: 'bg-indigo-200',
    rotation: '-rotate-6'
  }
];

const InsightCard = ({ image, title, description, link, bgColor, rotation }) => {
  return (
    <div className="group">
        <div className="relative mb-6">
            <div className={`absolute -inset-2 ${bgColor} opacity-50 rounded-lg transform ${rotation} group-hover:rotate-0 transition-transform duration-300`}></div>
            <img src={image} alt={title} className="relative w-full rounded-lg shadow-lg" />
        </div>
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            <a href={link} className="text-cyan-400 font-semibold hover:underline">Read More</a>
        </div>
    </div>
  );
};

const RealWorldResults = () => {
  return (
    <div className="bg-[#0a192f] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            With Real-World <span className="text-cyan-400">Results</span>
          </h2>
          <div className="flex justify-center mt-4">
            <svg className="h-4 w-auto text-cyan-400" viewBox="0 0 100 20" fill="currentColor">
                <path d="M0,10 C20,20 40,0 60,10 S80,0 100,10" stroke="currentColor" strokeWidth="4" fill="transparent"/>
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {insightsData.map((insight, index) => (
            <InsightCard key={index} {...insight} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealWorldResults; 