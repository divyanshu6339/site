import React from 'react';

// Import images
import insightImage1 from '../Assets/36.png';
import insightImage2 from '../Assets/37.png';
import insightImage3 from '../Assets/38.png';

const insightsData = [
  {
    image: insightImage1,
    title: 'Understanding Similarity Scoring in RAG Systems: Types and Implementations',
    author: 'Jellyfish Technologies',
    rotation: '-rotate-3'
  },
  {
    image: insightImage2,
    title: 'Deep Learning Explained: History, Key Components, Applications...',
    author: 'Vivek Sach',
    rotation: 'rotate-2'
  },
  {
    image: insightImage3,
    title: 'Prompt-to-Flowchart: Generating Flowcharts from Natural Language using GenAI',
    author: 'Jellyfish Technologies',
    rotation: '-rotate-2'
  },
];

const InsightCard = ({ image, title, author, rotation }) => {
  const bgRotation = rotation === '-rotate-3' ? '-rotate-6' : (rotation === 'rotate-2' ? 'rotate-6' : '-rotate-6');

  return (
    <div className="group cursor-pointer">
      <div className="relative p-4">
        {/* The background block */}
        <div className={`absolute inset-0 bg-cyan-400 bg-opacity-30 rounded-lg transform ${bgRotation} transition-transform duration-500 ease-in-out group-hover:rotate-0 group-hover:scale-105`}></div>
        
        {/* The image container */}
        <div className={`relative bg-gray-800 p-2 rounded-lg transform ${rotation} transition-transform duration-500 ease-in-out group-hover:rotate-0 group-hover:scale-105`}>
          <div className="relative">
            <img src={image} alt={title} className="w-full h-auto rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
      
      {/* The text card */}
      <div className="bg-white text-black p-6 rounded-lg -mt-4 relative z-10 shadow-lg transition-shadow duration-300 group-hover:shadow-xl">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">By {author}</p>
      </div>
    </div>
  );
};

const LatestInsights = () => {
  return (
    <div className="bg-[#020c1b] text-white py-20 sm:py-28">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl font-bold">
            Our latest{' '}
            <span className="relative inline-block">
              <span className="relative z-10">insights</span>
              <svg
                className="absolute left-0 -bottom-2 w-full h-auto text-cyan-400 z-0"
                viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
              >
                <path d="M1 4.5 C 10 1.5, 20 5.5, 30 3.5 C 40 1.5, 50 6.5, 60 3.5 C 70 0.5, 80 5.5, 90 2.5 C 95 0.5, 99 3.5, 99 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </h2>
          <p className="mt-8 text-2xl text-gray-300">
            Over 1,100 articles on technology and talent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {insightsData.map((insight, index) => (
            <InsightCard key={index} {...insight} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestInsights; 