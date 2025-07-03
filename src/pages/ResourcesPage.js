import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import images from assets
import robotHeroImage from '../Assets/139.png';
import understandingBotIcon from '../Assets/141.png';
import authorAvatar from '../Assets/user.png';

// New article images
import articleImg1 from '../Assets/Assests2/1.png';
import articleImg2 from '../Assets/Assests2/2.png';
import articleImg3 from '../Assets/Assests2/3.png';
import articleImg4 from '../Assets/Assests2/4.png';
import articleImg5 from '../Assets/Assests2/5.png';
import articleImg6 from '../Assets/Assests2/6.png';

// Imports for the new section
import articleImg7 from '../Assets/Assests2/7.png';
import articleImg8 from '../Assets/Assests2/8.png';
import articleImg9 from '../Assets/Assests2/9.png';

// Imports for Latest Insights & Categories
import insightImg1 from '../Assets/Assests2/10.png';
import insightImg2 from '../Assets/Assests2/11.png';
import insightImg3 from '../Assets/Assests2/12.png';
import insightImg4 from '../Assets/Assests2/13.png';
import insightImg5 from '../Assets/Assests2/14.png';
import insightImg6 from '../Assets/Assests2/15.png';

import catImg1 from '../Assets/Assests2/16.png';
import catImg2 from '../Assets/Assests2/17.png';
import catImg3 from '../Assets/Assests2/18.png';
import catImg4 from '../Assets/Assests2/19.png';
import catImg5 from '../Assets/Assests2/20.png';
import catImg6 from '../Assets/Assests2/21.png';
import catImg7 from '../Assets/Assests2/22.png';
import catImg8 from '../Assets/Assests2/23.png';
import catImg9 from '../Assets/Assests2/24.png';
import catImg10 from '../Assets/Assests2/25.png';
import catImg11 from '../Assets/Assests2/26.png';
import catImg12 from '../Assets/Assests2/27.png';
import catImg13 from '../Assets/Assests2/28.png';
import catImg14 from '../Assets/Assests2/29.png';
import catImg15 from '../Assets/Assests2/30.png';
import catImg16 from '../Assets/Assests2/31.png';
import catImg17 from '../Assets/Assests2/32.png';
import catImg18 from '../Assets/Assests2/33.png';
import catImg19 from '../Assets/Assests2/34.png';
import catImg20 from '../Assets/Assests2/35.png';
import catImg21 from '../Assets/Assests2/36.png';
import catImg22 from '../Assets/Assests2/37.png';
import catImg23 from '../Assets/Assests2/38.png';
import catImg24 from '../Assets/Assests2/39.png';
import catImg25 from '../Assets/Assests2/40.png';
import catImg26 from '../Assets/Assests2/41.png';
import catImg27 from '../Assets/Assests2/42.png';

// Imports for Locations
import usaFlag from '../Assets/USA.png';
import canadaFlag from '../Assets/Canada.png';
import australiaFlag from '../Assets/Australia.png';
import indiaFlag from '../Assets/India.png';

const secondArticlesData = [
  {
    image: articleImg7,
    title: 'How Natural Language Processing is Transforming Industries',
    author: 'By Vivek Sadh',
    link: 'https://www.jellyfishtechnologies.com/how-nlp-is-transforming-industries/',
  },
  {
    image: articleImg8,
    title: 'Cache-Augmented Generation (CAG): A Revolutionary Alternative To RAG',
    author: 'By Jellyfish Technologies',
    link: 'https://www.jellyfishtechnologies.com/cag-a-revolutionary-alternative-to-rag/',
  },
  {
    image: articleImg9,
    title: 'Generative AI in Insurance: Use Case and Benefits',
    author: 'By Neeraj Kumar',
    link: 'https://www.jellyfishtechnologies.com/generative-ai-in-insurance-use-case-and-benefits/',
  },
];

const newArticlesData = [
  {
    image: articleImg1,
    title: 'Machine Learning in FinTech: Use Cases and Applications',
    author: 'By Ashish Goel',
    link: 'https://www.jellyfishtechnologies.com/machine-learning-in-fintech-use-cases-and-applications/',
  },
  {
    image: articleImg2,
    title: 'RAG Vs CAG A Technical Comparison',
    author: 'By Ashish Goel',
    link: 'https://www.jellyfishtechnologies.com/rag-vs-cag-a-technical-comparison/',
  },
  {
    image: articleImg3,
    title: 'Understanding Similarity Scoring in RAG Systems: Types and Implementations',
    author: 'By Jellyfish Technologies',
    link: 'https://www.jellyfishtechnologies.com/similarity-scoring-rag-types-implementations/',
  },
  {
    image: articleImg4,
    title: 'Deep Learning Explained: History, Key Components, Applications, Benefits & Industry Challenges',
    author: 'By Vivek Sadh',
    link: 'https://www.jellyfishtechnologies.com/deep-learning-explained-applications-benefits-challenges/',
  },
  {
    image: articleImg5,
    title: 'Prompt-to-Flowchart: Generating Flowcharts from Natural Language using GenAI',
    author: 'By Jellyfish Technologies',
    link: 'https://www.jellyfishtechnologies.com/generating-flowcharts-from-natural-language-using-genai/',
  },
  {
    image: articleImg6,
    title: 'Understanding MCP Servers: Bridging AI Models with the World',
    author: 'By Jellyfish Technologies',
    link: 'https://www.jellyfishtechnologies.com/understanding-mcp-servers-bridging-ai-models-with-the-world/',
  },
];

const latestInsightsData = [
    {
        image: insightImg1,
        title: 'Understanding Similarity Scoring in RAG Systems: Types and Implementations',
        author: 'By Jellyfish Technologies',
        link: 'https://www.jellyfishtechnologies.com/similarity-scoring-rag-types-implementations/'
    },
    {
        image: insightImg2,
        title: 'Deep Learning Explained: History, Key Components, Applications, Benefits & Industry Challenges',
        author: 'By Vivek Sadh',
        link: 'https://www.jellyfishtechnologies.com/deep-learning-explained-applications-benefits-challenges/'
    },
    {
        image: insightImg3,
        title: 'Prompt-to-Flowchart: Generating Flowcharts from Natural Language using GenAI',
        author: 'By Jellyfish Technologies',
        link: 'https://www.jellyfishtechnologies.com/generating-flowcharts-from-natural-language-using-genai/'
    },
    {
        image: insightImg4,
        title: 'How Natural Language Processing is Transforming Industries',
        author: 'By Vivek Sadh',
        link: 'https://www.jellyfishtechnologies.com/how-nlp-is-transforming-industries/'
    },
    {
        image: insightImg5,
        title: 'Cache-Augmented Generation (CAG): A Revolutionary Alternative to RAG',
        author: 'By Jellyfish Technologies',
        link: 'https://www.jellyfishtechnologies.com/cag-a-revolutionary-alternative-to-rag/'
    },
    {
        image: insightImg6,
        title: 'Generative AI in Insurance: Use Case and Benefits',
        author: 'By Neeraj Kumar',
        link: 'https://www.jellyfishtechnologies.com/generative-ai-in-insurance-use-case-and-benefits/'
    },
];

const categoriesData = [
  { icon: catImg1, name: 'Application Moderization', link: 'https://www.jellyfishtechnologies.com/category/application-modernization/' },
  { icon: catImg2, name: 'Cloud', link: 'https://www.jellyfishtechnologies.com/category/cloud/' },
  { icon: catImg3, name: 'Healthcare', link: 'https://www.jellyfishtechnologies.com/category/healthcare/' },
  { icon: catImg4, name: 'AR & VR', link: 'https://www.jellyfishtechnologies.com/category/vr-and-ar/' },
  { icon: catImg5, name: 'Data Analytics', link: 'https://www.jellyfishtechnologies.com/category/data-analytics/' },
  { icon: catImg6, name: 'Insurtech', link: 'https://www.jellyfishtechnologies.com/category/insurtech/' },
  { icon: catImg7, name: 'Artificial Intelligence', link: 'https://www.jellyfishtechnologies.com/category/artificial-intelligence/' },
  { icon: catImg8, name: 'DevOps', link: 'https://www.jellyfishtechnologies.com/category/devops/' },
  { icon: catImg9, name: 'IoT', link: 'https://www.jellyfishtechnologies.com/category/iot/' },
  { icon: catImg10, name: 'Blockchain', link: 'https://www.jellyfishtechnologies.com/category/blockchain/' },
  { icon: catImg11, name: 'Digital Transformation', link: 'https://www.jellyfishtechnologies.com/category/digital-transformation/' },
  { icon: catImg12, name: 'Logistics', link: 'https://www.jellyfishtechnologies.com/category/logistics/' },
  { icon: catImg13, name: 'Business Intelligence', link: 'https://www.jellyfishtechnologies.com/category/business-intelligence/' },
  { icon: catImg14, name: 'Facility Management', link: 'https://www.jellyfishtechnologies.com/category/facility-management/' },
  { icon: catImg15, name: 'PowerBi', link: 'https://www.jellyfishtechnologies.com/category/power-bi/' },
  { icon: catImg16, name: 'Fintech', link: 'https://www.jellyfishtechnologies.com/category/fintech/' },
  { icon: catImg17, name: 'Mobile App Development', link: 'https://www.jellyfishtechnologies.com/category/mobile-app-development/' },
  { icon: catImg18, name: 'Media and Entertainment', link: 'https://www.jellyfishtechnologies.com/category/media-and-entertainment/' },
  { icon: catImg19, name: 'News', link: 'https://www.jellyfishtechnologies.com/category/news/' },
  { icon: catImg20, name: 'Quality Assurance', link: 'https://www.jellyfishtechnologies.com/category/quality-assurance/' },
  { icon: catImg21, name: 'Software Development', link: 'https://www.jellyfishtechnologies.com/category/software-development/' },
  { icon: catImg22, name: 'Software Outsourcing', link: 'https://www.jellyfishtechnologies.com/category/software-outsourcing/' },
  { icon: catImg23, name: 'Technologies', link: 'https://www.jellyfishtechnologies.com/category/technologies/' },
  { icon: catImg24, name: 'UI/UX', link: 'https://www.jellyfishtechnologies.com/category/ui-ux/' },
  { icon: catImg25, name: 'Transportation and Logistics', link: 'https://www.jellyfishtechnologies.com/category/transportation-and-logistics/' },
  { icon: catImg26, name: 'Staff Augmentation', link: 'https://www.jellyfishtechnologies.com/category/staff-augmentation/' },
  { icon: catImg27, name: 'Uncategorized', link: 'https://www.jellyfishtechnologies.com/category/uncategorized/' },
];

const ArticleCard = ({ article, className = '', isWide = false }) => (
    <a href={article.link} target="_blank" rel="noopener noreferrer" className={`block bg-[#0d1a2b] rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-cyan-500/50 hover:shadow-lg ${className}`}>
        <div className={`relative ${isWide ? 'h-72' : 'h-auto'}`}>
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="p-5">
            <h3 className={`text-white font-bold leading-tight mb-4 hover:text-cyan-400 transition-colors ${isWide ? 'text-2xl' : 'text-xl'}`}>{article.title}</h3>
            <div className="flex items-center gap-3">
                <img src={authorAvatar} alt={article.author} className="w-8 h-8 rounded-full bg-gray-600" />
                <span className={`text-gray-400 ${isWide ? 'text-lg' : 'text-base'}`}>{article.author}</span>
            </div>
        </div>
    </a>
);

const Pagination = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="bg-white/90 backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.5)] rounded-full flex items-center p-1.5 sm:p-2 space-x-1 text-sm sm:text-base">
        <button className="text-gray-600 hover:text-blue-600 font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors">
          Previous
        </button>
        <button className="bg-blue-500 text-white font-bold w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full">
          1
        </button>
        <button className="text-gray-600 hover:bg-gray-200 font-semibold w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-colors">
          2
        </button>
        <button className="text-gray-600 hover:bg-gray-200 font-semibold w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-colors">
          3
        </button>
        <span className="text-gray-400 font-bold px-2">...</span>
        <button className="text-gray-600 hover:bg-gray-200 font-semibold w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-colors">
          27
        </button>
        <button className="text-gray-600 hover:text-blue-600 font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors">
          Next
        </button>
      </div>
    </div>
  );
};

const InsightCard = ({ insight }) => (
    <a href={insight.link} target="_blank" rel="noopener noreferrer" className="bg-[#0d1a2b] rounded-2xl p-4 flex items-center gap-4 transition-all duration-300 transform hover:-translate-y-1 hover:bg-slate-800">
        <img src={insight.image} alt={insight.title} className="w-24 h-24 object-cover rounded-lg" />
        <div className="flex flex-col">
            <h4 className="text-white font-semibold leading-tight flex-grow mb-2 hover:text-cyan-400 text-xl">{insight.title}</h4>
            <span className="text-gray-400 text-lg">{insight.author}</span>
        </div>
    </a>
);

const CategoryButton = ({ category }) => (
    <a href={category.link} target="_blank" rel="noopener noreferrer" className="w-full bg-white/95 backdrop-blur-sm text-slate-800 font-semibold rounded-full flex items-center justify-start p-3 gap-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30 hover:bg-white">
        <div className="bg-slate-200 rounded-full p-1.5">
            <img src={category.icon} alt={category.name} className="w-6 h-6" />
        </div>
        <span className="text-lg">{category.name}</span>
    </a>
);

const SpeakToExpertsBanner = () => (
    <div className="relative bg-[#4A6E8A] rounded-2xl p-8 my-20 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
                Want To Speak To Our Experts ?
            </h2>
            <button className="bg-slate-100 hover:bg-white text-slate-800 font-bold py-3 px-6 rounded-lg flex items-center gap-3 transition-all transform hover:scale-105">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
                <span>Book Meeting</span>
            </button>
        </div>
    </div>
);

const locations = [
    {
        flag: usaFlag,
        name: "United State - Utah",
        address: "159 West Broadway #200\nSalt Lake City Utah - 84101"
    },
    {
        flag: canadaFlag,
        name: "Canada - Toronto",
        address: "18 King Street East, Suite\n1400, Toronto, ON M5C 1C4"
    },
    {
        flag: australiaFlag,
        name: "Australia - Sydney",
        address: "Level 3, 478 George Street,\nSydney NSW 2000"
    },
    {
        flag: indiaFlag,
        name: "India - Noida",
        address: "D-5, Third Floor, Logix Infotech\nPark, Sec- 59, Noida - 201301"
    }
];

const LocationCard = ({ location }) => (
    <div className="bg-white/95 text-slate-800 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30">
        <img src={location.flag} alt={`${location.name} flag`} className="w-16 h-16 rounded-full mb-4 shadow-md" />
        <h3 className="font-bold text-lg">{location.name}</h3>
        <p className="text-slate-600 text-sm whitespace-pre-line">{location.address}</p>
    </div>
);

const ResourcesPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#0A192F] to-[#020c1b] text-white overflow-x-hidden">
      <Header />
      <main className="w-full px-6 sm:px-12 lg:px-24 pt-8 pb-16">
        
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 mb-20">
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start gap-4">
                <div className="bg-white/10 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                    <span className="text-cyan-400 text-lg">+</span>
                    <span>Featured Deep Dive</span>
                </div>
                 <div className="bg-white/10 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                    <span>🕒</span>
                    <span>3min Read...</span>
                </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight flex items-center justify-center lg:justify-start gap-3">
              <span className="text-blue-400">Understanding</span>
              <img src={understandingBotIcon} alt="bot icon" className="w-10 h-10" />
            </h1>
            <h2 className="text-6xl md:text-7xl font-bold leading-tight">Similarity Scoring <br/> in RAG Systems</h2>
            <p className="text-gray-300 max-w-lg mx-auto lg:mx-0 text-lg">
              What is Similarity Scoring in RAG? In Retrieval-Augmented Generation (RAG), similarity scoring refers to the method used to determine how relevant a chunk of text is to a user's query. These scores guide the retrieval system in selecting the best passages to feed into a language model for response generation....
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full sm:w-auto">
                    Read Full Article →
                </button>
                <div className="flex items-center gap-3">
                    <img src={authorAvatar} alt="Jellyfish Technologies" className="w-12 h-12 rounded-full bg-gray-700" />
                    <div>
                        <p className="font-semibold text-lg">Jellyfish Technologies</p>
                        <p className="text-base text-gray-400">AI Research Team</p>
                    </div>
                </div>
        </div>
      </div>
          
          {/* Right Image */}
          <div className="lg:w-1/2">
            <img src={robotHeroImage} alt="AI Robot with laptop" className="w-full h-auto" />
          </div>
        </section>

        {/* Second Articles Grid */}
        <section className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secondArticlesData.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>
        </section>

        {/* Professional Grid Transition */}
        <div className="my-20 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full"></div>

        {/* Articles Grid */}
        <section className="space-y-8">
            {/* Top two articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ArticleCard article={newArticlesData[0]} />
                <ArticleCard article={newArticlesData[1]} />
            </div>

            {/* Middle three articles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <ArticleCard article={newArticlesData[2]} />
                <ArticleCard article={newArticlesData[3]} />
                <ArticleCard article={newArticlesData[4]} />
            </div>

            {/* Bottom article */}
            <div className="grid grid-cols-1 gap-8">
                <ArticleCard article={newArticlesData[5]} isWide={true} />
            </div>
        </section>

        <Pagination />

        <div className="relative mt-24">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-1/2 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 opacity-30 blur-3xl -z-10"></div>
            
            {/* Latest Insights */}
            <section>
                <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Latest-Insights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {latestInsightsData.map((insight, index) => (
                        <InsightCard key={index} insight={insight} />
                    ))}
                </div>
            </section>

            {/* Categories */}
            <section className="mt-20">
                <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                    {categoriesData.map((category, index) => (
                        <CategoryButton key={index} category={category} />
                    ))}
                </div>
            </section>
        </div>

        <SpeakToExpertsBanner />

        <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {locations.map((location, index) => (
                    <LocationCard key={index} location={location} />
                ))}
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ResourcesPage; 