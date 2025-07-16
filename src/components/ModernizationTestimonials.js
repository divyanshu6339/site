import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clutchLogo from '../Assets/clutch-logo.png';

const testimonials = [
  {
    rating: 5.0,
    text: "They're a top-notch developer all around.",
    author: 'Strategic Product Manager, Patra Corp',
  },
  {
    rating: 5.0,
    text: "There's no job too big or small for the team to fix in rapid time.",
    author: 'Co-Founder, Shootzu',
  },
    {
    rating: 4.5,
    text: "Their team has a lot of backend development knowledge.",
    author: 'Founder & Managing Director, ImmoSnapp GmbH',
  },
  {
    rating: 4.5,
    text: "They're reliable, and the price value is very high.",
    author: 'Co-Founder & CEO, BlackGull',
  },
];

const ModernizationTestimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-2xl ${i < Math.floor(rating) ? 'text-red-500' : 'text-gray-600'}`}>★</span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-gray-900 py-20 text-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold">See What Our Clients Have To Say</h2>
        </motion.div>

        <div className="flex justify-between items-center mb-4 px-3">
            <h3 className="text-2xl font-bold">Alpixn Reviews 5.0 ★★★★★</h3>
            <div className="flex items-center">
                <span className="text-gray-400 mr-2">Powered by</span>
                <img src={clutchLogo} alt="Clutch" className="h-8 filter invert" />
            </div>
        </div>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4"
            >
              <div className="bg-gray-800 rounded-lg shadow-xl p-8 h-full flex flex-col justify-between border border-gray-700 hover:border-blue-500 transition-colors">
                <div>
                    <div className="flex items-center mb-4">
                        <p className="font-bold text-xl mr-2">{testimonial.rating.toFixed(1)}</p>
                        <div>{renderStars(testimonial.rating)}</div>
                    </div>
                    <p className="text-lg text-gray-300 mb-6 min-h-[80px]">"{testimonial.text}"</p>
                </div>
                <div>
                    <p className="font-semibold text-blue-400">{testimonial.author}</p>
                    <div className="flex items-center text-green-400 mt-2">
                        <span className="mr-2">✔</span>
                        <p>Verified Review</p>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ModernizationTestimonials; 