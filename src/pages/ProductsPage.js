import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

// Assuming assets are in src/Assets, and converting provided paths to relative paths
import chatBoxImage from '../Assets/11111.png'; 
import greenTick from '../Assets/Greentick.svg';
import agentAvatar from '../Assets/iconsax-profile-2user.svg';
import customerSupportChat from '../Assets/2222.png';
import ctaBackground from '../Assets/bgm.jpg';
import nluIcon from '../Assets/NLU.png';
import aiIcon from '../Assets/AI.png';
import sentimentIcon from '../Assets/SENTIMENT.png';
import globeIcon from '../Assets/gLOBE.png';
import support247Icon from '../Assets/24by7.png';
import chatIcon from '../Assets/Chat.png';
import organizationIcon from '../Assets/organization.png';
import customerSupportIcon from '../Assets/customer.png';
import educationalIcon from '../Assets/Educational.png';
import hrIcon from '../Assets/HR.png';
import driveBetterImg from '../Assets/DriveBetter.png';
import usaFlag from '../Assets/USA.png';
import canadaFlag from '../Assets/Canada.png';
import australiaFlag from '../Assets/Australia.png';
import indiaFlag from '../Assets/India.png';

const locations = [
  {
    flag: usaFlag,
    name: 'United State - Utah',
    address: '159 West Broadway #200 Salt Lake City Utah - 84101',
  },
  {
    flag: canadaFlag,
    name: 'Canada - Toronto',
    address: '18 King Street East, Suite 1400, Toronto, ON M5C 1C4',
  },
  {
    flag: australiaFlag,
    name: 'Australia - Sydney',
    address: 'Level 3, 478 George Street, Sydney NSW 2000',
  },
  {
    flag: indiaFlag,
    name: 'India - Noida',
    address: 'D-5, Third Floor, Logix Infotech Park, Sec- 59, Noida - 201301',
  },
];

const engagementData = [
  {
    icon: organizationIcon,
    title: 'Organizations',
    description: 'Streamline operations and enhance customer satisfaction with AI-powered, real-time support for seamless interactions.',
  },
  {
    icon: customerSupportIcon,
    title: 'Customer Support Teams',
    description: 'Automate routine queries, reduce response times, and focus on more complex issues with AI-driven assistance.',
  },
  {
    icon: educationalIcon,
    title: 'Educational Institutions',
    description: 'Provide instant academic and administrative support 24/7, improving student engagement and leveling user satisfaction.',
  },
  {
    icon: hrIcon,
    title: 'HR & Recruitment Teams',
    description: 'Simplify candidate interactions, automate query responses, and ensure faster, more efficient hiring processes.',
  },
];

const features = [
  {
    icon: nluIcon,
    title: 'Natural Language Understanding',
    description: 'Utilize sophisticated NLU to comprehend customer inquiries accurately, delivering relevant and meaningful responses that resonate with user intent.',
  },
  {
    icon: aiIcon,
    title: 'AI-Driven Learning and Adaptation',
    description: 'The chatbot evolves and adapts through continuous learning, improving its over time for more personalized and effective support.',
  },
  {
    icon: sentimentIcon,
    title: 'Sentiment Analysis and Emotional Intelligence',
    description: 'Leverage sentiment analysis to understand customer emotions and respond appropriately, ensuring empathetic and supportive interactions.',
  },
  {
    icon: globeIcon,
    title: 'Global Multi-Language Support',
    description: 'Seamless customer interactions across languages with real-time translation and AI-driven detection for personalized, multilingual support worldwide.',
  },
  {
    icon: support247Icon,
    title: '24/7 Automated Customer Support',
    description: 'Deliver uninterrupted customer service around the clock, resolving queries instantly, and ensuring a seamless user experience, regardless of time zones.',
  },
  {
    icon: chatIcon,
    title: 'Customizable Chat Flows',
    description: 'Custom chat flow operations to match your unique business requirements, guiding customers through a personalized journey to resolve inquiries efficiently.',
  },
];

const ProductsPage = () => {
  return (
    <div 
      className="text-white min-h-screen bg-cover bg-center bg-fixed overflow-x-hidden"
      style={{ backgroundImage: `url(${ctaBackground})` }}
    >
      <Header />
      <main>
        <div className="pt-24 pb-16 bg-slate-900">
          <div className="px-6 sm:px-10 lg:px-16">
            {/* Section 1: JFT AI ChatBot */}
            <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-24">
              <div className="lg:w-1/2 text-center lg:text-left">
                <span className="inline-block border border-blue-400 text-blue-300 rounded-full px-4 py-1 text-base mb-4">
                  AI-Powered Customer Support
                </span>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cyan-400 mb-4">JFT AI ChatBot</h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                  A transformative AI-powered chatbot solution designed to enhance customer engagement, streamline support, and boost conversion rates through intelligent, real-time interactions.
                </p>
                <div className="flex justify-center lg:justify-start gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition text-lg">
                    Book Your Demo
                  </button>
                  <button className="text-white font-bold py-3 px-6 rounded-lg transition hover:bg-gray-800 text-lg">
                    Contact Us →
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img src={chatBoxImage} alt="JFT AI Chatbot Interface" className="rounded-lg shadow-2xl transform lg:rotate-6 w-full" />
                <p className="text-center mt-8 text-gray-400">Enhance Business Agility and Customer Support Operations</p>
              </div>
            </section>

            {/* Section 2: Empower Your Customer Support */}
            <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center lg:text-left">Empower Your Customer Support with <span className="text-cyan-400">JFT AI Chatbot</span></h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                  JFT AI Chatbot, powered by advanced GenAI, seamlessly integrates with your websites and applications to provide immediate, accurate responses to customer queries. Say goodbye to delayed responses and hello to 24/7 personalized support that boosts user satisfaction and captures every opportunity for engagement and conversion.
                </p>
                <ul className="space-y-4 max-w-md mx-auto lg:mx-0">
                  <li className="flex items-center text-lg">
                    <img src={greenTick} alt="Green Tick" className="h-6 w-6 mr-3" />
                    <span>24/7 automated customer support</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <img src={greenTick} alt="Green Tick" className="h-6 w-6 mr-3" />
                    <span>Seamless integration with existing systems</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <img src={greenTick} alt="Green Tick" className="h-6 w-6 mr-3" />
                    <span>Advanced natural language processing</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <img src={greenTick} alt="Green Tick" className="h-6 w-6 mr-3" />
                    <span>Real-time analytics and insights</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 p-4">
                <img src={customerSupportChat} alt="Customer Support Chat" className="rounded-xl shadow-2xl w-full max-w-lg mx-auto" />
              </div>
            </section>
          </div>
        </div>

        {/* Features Section */}
        <section 
          className="py-20"
        >
          <div className="px-6 sm:px-10 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl text-gray-300">Cutting-edge Features that enhance</h2>
              <h3 className="text-6xl sm:text-7xl font-bold text-cyan-400 mt-2">Customer Experience</h3>
              <p className="mt-6 text-2xl text-gray-300 max-w-5xl mx-auto">
                Explore a range of innovative features designed to understand and interact with your customers effectively, ensuring seamless support and enhanced user engagement. With 24/7 automated assistance, secure data handling, and privacy compliance, your customer support is powered by industry-leading AI.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-slate-800 bg-opacity-50 border border-cyan-700 rounded-2xl p-10 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:border-cyan-400"
                >
                  <div className="flex items-center mb-6">
                    <img src={feature.icon} alt="" className="w-16 h-16 mr-6"/>
                    <h4 className="text-3xl font-bold text-white">{feature.title}</h4>
                  </div>
                  <div className="bg-gray-700 bg-opacity-50 rounded-lg p-6">
                    <p className="text-gray-300 text-xl">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transform Engagement Section */}
        <section 
          className="py-20"
        >
          <div className="px-6 sm:px-10 lg:px-16">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-blue-400">Transform Your Customer Engagement with</h2>
              <h3 className="text-5xl sm:text-6xl font-bold text-white mt-2">JFT AI Chatbot</h3>
              <p className="mt-6 text-xl text-gray-300">
                Trusted by businesses across industries, JFT AI Chatbot is more than just an automated response tool. It's a strategic partner in elevating customer satisfaction, reducing operational costs, and driving growth through intelligent customer interactions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {engagementData.map((item, index) => (
                <div key={index} className="bg-white text-gray-800 rounded-2xl p-8 text-center shadow-2xl transition-transform transform hover:-translate-y-2">
                  <img src={item.icon} alt={`${item.title} icon`} className="h-16 w-16 mx-auto mb-4"/>
                  <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="p-8 lg:p-12 lg:w-1/2 text-white">
                  <h4 className="text-3xl md:text-4xl font-bold mb-4">Drive Better Customer Outcomes with JFT AI Chatbot</h4>
                  <p className="mb-6">Experience the future of customer support with a demo or contact us to discuss your specific requirements.</p>
                  <button className="bg-teal-400 text-black font-bold py-3 px-6 rounded-lg transition hover:bg-teal-300">
                    Intelligent Support Starts Here. Speak to Our Expert Team
                  </button>
                </div>
                <div className="lg:w-1/2">
                  <img src={driveBetterImg} alt="Drive Better Customer Outcomes" className="w-full h-full object-cover"/>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section 
          className="py-20"
        >
          <FAQ />
        </section>

        {/* Speak to Experts Section */}
        <section className="relative bg-gradient-to-r from-slate-700 to-slate-800 overflow-hidden">
          <div className="absolute top-1/2 left-4 sm:left-12 transform -translate-y-1/2 pointer-events-none opacity-20" aria-hidden="true">
            <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18.5" cy="3.5" r="3.5" fill="white"/>
              <circle cx="3.5" cy="23.5" r="3.5" fill="white"/>
              <circle cx="28.5" cy="28.5" r="3.5" fill="white"/>
              <circle cx="13.5" cy="43.5" r="3.5" fill="white"/>
              <circle cx="38.5" cy="53.5" r="3.5" fill="white"/>
              <circle cx="58.5" cy="48.5" r="3.5" fill="white"/>
              <circle cx="71.5" cy="23.5" r="3.5" fill="white"/>
              <circle cx="48.5" cy="8.5" r="3.5" fill="white"/>
            </svg>
          </div>
          <div className="absolute top-1/2 right-4 sm:right-12 transform -translate-y-1/2 pointer-events-none opacity-20" aria-hidden="true">
            <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18.5" cy="3.5" r="3.5" fill="white"/>
              <circle cx="3.5" cy="23.5" r="3.5" fill="white"/>
              <circle cx="28.5" cy="28.5" r="3.5" fill="white"/>
              <circle cx="13.5" cy="43.5" r="3.5" fill="white"/>
              <circle cx="38.5" cy="53.5" r="3.5" fill="white"/>
              <circle cx="58.5" cy="48.5" r="3.5" fill="white"/>
              <circle cx="71.5" cy="23.5" r="3.5" fill="white"/>
              <circle cx="48.5" cy="8.5" r="3.5" fill="white"/>
            </svg>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
            <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 sm:mb-0">
                Want To Speak To Our Experts?
              </h2>
              <button className="bg-white text-slate-800 font-bold py-3 px-8 rounded-lg transition hover:bg-gray-200 flex items-center gap-3 text-lg shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                Book Meeting
              </button>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-20">
          <div className="px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {locations.map((location, index) => (
                <div key={index} className="bg-white text-gray-800 rounded-2xl p-6 flex items-center shadow-2xl">
                  <img src={location.flag} alt={`${location.name} flag`} className="w-12 h-12 rounded-full mr-5" />
                  <div>
                    <h4 className="font-bold text-lg">{location.name}</h4>
                    <p className="text-gray-600 text-sm">{location.address}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage; 