import React from 'react';
import newImage from '../Assets/f3eca446e27f026ee9562860067ecd47245c13fb.jpg';

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const MainContent = () => {
  return (
    <div className="bg-[#00070E]">
      {/* Image Section - Full Width */}
      <div className="relative w-full h-auto md:h-[800px]">
        <img src={newImage} alt="Showcase" className="absolute inset-0 w-full h-full object-cover filter brightness-50" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white p-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Software Development Service</h1>
          <p className="text-xl md:text-2xl">"Empowering Innovation Through Custom Software Solutions"</p>
          <p className="text-xl md:text-2xl mt-2 mb-10">"Scalable. Secure. Tailored to Your Business."</p>
          <button className="border border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white font-semibold py-3 px-6 rounded-md flex items-center space-x-2 transition duration-300 text-lg">
            <span>Get a custom</span>
            <ArrowIcon />
          </button>
        </div>
      </div>

      {/* Services Section */}
      
    </div>
  );
};

export default MainContent; 