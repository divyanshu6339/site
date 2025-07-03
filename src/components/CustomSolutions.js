import React from 'react';

// Import images
import aiMlImage from '../Assets/Rectangle 1.png';
import customSoftwareImage from '../Assets/Rectangle 2.png';
import webMobileImage from '../Assets/Rectangle 3.png';
import qaDevopsImage from '../Assets/Rectangle 4.png';

const solutionsData = [
  {
    title: 'AI & Machine Learning Solutions',
    description: 'Drive smarter decisions with AI-powered automation, predictive analytics, and machine learning models customized for your domain.',
    image: aiMlImage,
    className: 'lg:h-[640px] h-[400px]' // Taller card
  },
  {
    title: 'Custom Software Development',
    description: 'Scalable, secure, and custom-built software tailored for your unique processes, from enterprise apps to SaaS platforms.',
    image: customSoftwareImage,
    className: 'lg:h-[420px] h-[400px]' // Shorter card
  },
  {
    title: 'Web & Mobile App Development',
    description: 'Build cross-platform apps with rich user experiences using cutting-edge front-end and robust back-end technologies.',
    image: webMobileImage,
    className: 'lg:h-[420px] h-[400px]' // Shorter card
  },
  {
    title: 'QA & DevOps Services',
    description: 'Ensure performance, security, and reliability with continuous testing, deployment pipelines, and infrastructure automation.',
    image: qaDevopsImage,
    className: 'lg:h-[640px] h-[400px]' // Taller card
  },
];

const SolutionCard = ({ title, description, image, className }) => (
    <div className={`relative rounded-xl overflow-hidden group transform transition-all duration-300 ease-in-out hover:scale-[1.02] ${className}`}>
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-50 transition-all duration-300"></div>
        <div className="relative h-full flex flex-col justify-end p-8">
            <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-300 text-lg">{description}</p>
        </div>
    </div>
);

const WavyUnderline = () => (
    <svg className="w-full h-auto text-blue-400" viewBox="0 0 100 6" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M1 4.5 C 10 1.5, 20 5.5, 30 3.5 C 40 1.5, 50 6.5, 60 3.5 C 70 0.5, 80 5.5, 90 2.5 C 95 0.5, 99 3.5, 99 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);


const CustomSolutions = () => {
  return (
    <div className="bg-[#04102a] text-white py-20 sm:py-28">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Custom <span className="relative inline-block">
                <span className="relative z-10">Solutions</span>
                <div className="absolute left-0 -bottom-1 w-full h-2">
                    <WavyUnderline />
                </div>
            </span> Tailored to Your <span className="relative inline-block">
                <span className="relative z-10">Business Needs</span>
                <div className="absolute left-0 -bottom-1 w-full h-2">
                    <WavyUnderline />
                </div>
            </span>
          </h2>
          <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto">
            From concept to code, we build scalable digital experiences across industries
          </p>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-8">
                <SolutionCard {...solutionsData[0]} />
                <SolutionCard {...solutionsData[2]} />
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-8">
                <SolutionCard {...solutionsData[1]} />
                <SolutionCard {...solutionsData[3]} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSolutions; 