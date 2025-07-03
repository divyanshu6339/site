import React from 'react';
import image1 from '../Assets/6.1.png';
import image2 from '../Assets/6.2.png';
import image3 from '../Assets/6.3.png';

const InsightCard = ({ image, title, author, rotation }) => {
  // Determine the background rotation based on the card's rotation
  const bgRotation = rotation === '-rotate-3' ? '-rotate-6' : (rotation === 'rotate-2' ? 'rotate-6' : '-rotate-6');

  return (
    <div className="group cursor-pointer">
      <div className="relative p-4">
        {/* The new background block */}
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

const Insights = () => {
  const articles = [
    {
      image: image1,
      title: 'Prompt-to-Flowchart: Generating Flowcharts from Natural Language using GenAI',
      author: 'Jellyfish Technologies',
      rotation: '-rotate-3'
    },
    {
      image: image2,
      title: 'How Natural Language Processing Is Transforming Industries',
      author: 'Vivek Sadh',
      rotation: 'rotate-2'
    },
    {
      image: image3,
      title: 'Cache-Augmented Generation (CAG): A Revolutionary Alternative to RAG',
      author: 'Jellyfish Technologies',
      rotation: '-rotate-2'
    }
  ];

  return (
    <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our latest insights
          </h2>
          <p className="mt-4 text-xl text-gray-400">Over 1,100 articles on technology and talent</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article, index) => (
            <InsightCard key={index} {...article} />
          ))}
        </div>
        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            Read All Our Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Insights; 