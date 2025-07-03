import React from 'react';
import star from '../Assets/Star 1.svg';
import ellipse from '../Assets/Ellipse 7.svg';
import quotes from '../Assets/Group 19.svg';
import personImage from '../Assets/20.1.png';

const ClientTestimonial = () => {
  return (
    <div className="bg-[#04102a] text-white py-20 sm:py-28 relative overflow-hidden">
      {/* Background Ellipses */}
      <img src={ellipse} alt="" className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2" />
      <img src={ellipse} alt="" className="absolute top-0 right-0 w-72 h-72 translate-x-1/2 -translate-y-1/4" />
      <img src={ellipse} alt="" className="absolute bottom-0 left-0 w-80 h-80 -translate-x-1/3 translate-y-1/3" />
      <img src={ellipse} alt="" className="absolute bottom-0 right-0 w-56 h-56 translate-x-1/4 translate-y-1/4" />
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-lg text-gray-300">See What Our</p>
          <h2 className="text-4xl sm:text-5xl font-bold">Clients Have to Say</h2>
        </div>

        <div className="max-w-4xl mx-auto bg-[#2a62a9] p-8 sm:p-12 rounded-[40px] relative">
          <img src={quotes} alt="quote" className="absolute top-8 left-8 w-12 h-12 opacity-80" />
          <img src={quotes} alt="quote" className="absolute bottom-24 right-8 w-12 h-12 opacity-80 transform scale-y-[-1]" />
          
          <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed text-center mb-8">
            Not only would I hire them again without hesitation, but I will point out that after the first two test projects were done, they earned my repeat business and became the only contractors I worked with the whole time I was upgrading my site.
          </p>
          
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-white tracking-wider">KARL MARGRAIN</h3>
            <p className="text-gray-300 mb-3">Founder and Managing Director</p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <img key={i} src={star} alt="star" className="w-5 h-5" />
              ))}
            </div>
          </div>
          
          <div className="absolute -bottom-16 right-1/2 translate-x-1/2 sm:right-16 sm:translate-x-0">
             <div className="w-40 h-40 rounded-2xl bg-white p-2 shadow-lg">
                <img src={personImage} alt="Karl Margrain" className="w-full h-full object-cover rounded-lg" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial; 