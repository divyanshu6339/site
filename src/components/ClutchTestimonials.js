import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clutchLogo from '../Assets/clutch-logo.png';

const testimonials = [
    {
      rating: 4.5,
      review: "Their team has a lot of backend development knowledge.",
    author: "Founder & Managing Director, ImmoSnapp GmbH",
    },
    {
      rating: 5.0,
      review: "Their commitment to excellence and collaborative approach set them apart.",
      author: "Executive, Sagita Learning",
    },
    {
      rating: 5.0,
      review: "The team is very friendly & responsive, they are always ready to connect via Meets and Zoom calls.",
      author: "VP Operations, Transport Company",
    },
    {
      rating: 5.0,
    review: "They're a top-notch developer all around.",
    author: "Strategic Product Manager, Petra Corp",
    },
    {
      rating: 5.0,
    review: "There's no job too big or small for the team to fix in rapid time.",
      author: "Co-Founder, Shootzu",
    },
];

const StarRating = ({ rating }) => {
    const totalStars = 5;
    let stars = [];
    for (let i = 1; i <= totalStars; i++) {
        if (i <= rating) {
            stars.push(<svg key={i} className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>);
        } else if (i - 0.5 <= rating) {
            stars.push(<svg key={i} className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8-2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>);
        } else {
            stars.push(<svg key={i} className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8-2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>);
        }
    }
    return <div className="flex items-center">{stars}</div>;
};

const ClutchTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numVisible, setNumVisible] = useState(4);

  useEffect(() => {
    const updateNumVisible = () => {
      if (window.innerWidth < 640) setNumVisible(1);
      else if (window.innerWidth < 768) setNumVisible(2);
      else if (window.innerWidth < 1024) setNumVisible(3);
      else setNumVisible(4);
    };
    updateNumVisible();
    window.addEventListener('resize', updateNumVisible);
    return () => window.removeEventListener('resize', updateNumVisible);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1));
  };
  
  const getVisibleTestimonials = () => {
    return testimonials.slice(currentIndex, currentIndex + numVisible);
  }

    return (
    <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">See What Our Clients Have To Say</h2>
                </div>
        <div className="bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 relative">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Alpixn Reviews 5.0</h3>
                            <StarRating rating={5} />
                        </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 font-semibold">Powered By</span>
              <img src={clutchLogo} alt="Clutch Logo" className="h-8"/>
                        </div>
                    </div>

          <div className="relative">
            <div className="overflow-hidden">
                <AnimatePresence>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    >
                        {getVisibleTestimonials().map((testimonial, index) => (
                            <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-700 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 shadow-md">
                                <div>
                                    <div className="flex items-center mb-2">
                                        <span className="text-lg font-bold text-white mr-2">{testimonial.rating.toFixed(1)}</span>
                                        <StarRating rating={testimonial.rating} />
                                    </div>
                                    <p className="text-gray-300 mb-4 min-h-[6rem]">"{testimonial.review}"</p>
                                </div>
                                <div>
                                    <p className="font-bold text-blue-400">{testimonial.author}</p>
                                    <div className="flex items-center text-green-500 mt-2">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-sm font-semibold">Verified Review</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
            <button onClick={prevTestimonial} className="absolute top-1/2 -left-2 sm:-left-4 transform -translate-y-1/2 bg-gray-700 rounded-full p-2 shadow-lg hover:bg-gray-600 transition disabled:opacity-50 disabled:cursor-not-allowed" disabled={currentIndex === 0}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button onClick={nextTestimonial} className="absolute top-1/2 -right-2 sm:-right-4 transform -translate-y-1/2 bg-gray-700 rounded-full p-2 shadow-lg hover:bg-gray-600 transition disabled:opacity-50 disabled:cursor-not-allowed" disabled={currentIndex >= testimonials.length - numVisible}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
           <div className="flex justify-center mt-8">
                {Array.from({length: testimonials.length - numVisible + 1}).map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 mx-1 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-red-500 scale-125' : 'bg-gray-500 hover:bg-gray-400'}`}
                />
                ))}
            </div>
                </div>
            </div>
        </div>
    );
};

export default ClutchTestimonials; 