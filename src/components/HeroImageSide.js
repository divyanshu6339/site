import React from 'react';
import { Link } from 'react-router-dom';

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const HeroImageSide = ({ title, description, buttonText, buttonLink, imageSrc, imageAlt }) => {
  return (
    <div className="bg-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center py-16 md:py-24">
          <div className="md:w-1/2 text-white text-center md:text-left md:pr-12">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" dangerouslySetInnerHTML={{ __html: title }}></h1>
            <p className="text-xl mb-10">{description}</p>
            {buttonText && buttonLink && (
              <Link to={buttonLink} className="inline-block">
                <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-md flex items-center justify-center hover:bg-gray-200 transition duration-300 text-lg">
                  <span>{buttonText}</span>
                  <ArrowIcon />
                </button>
              </Link>
            )}
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src={imageSrc} alt={imageAlt} className="mx-auto max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImageSide; 