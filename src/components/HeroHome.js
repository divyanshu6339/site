import React from 'react';
import heroImage from '../Assets/39.png';

const HeroHome = () => {
    return (
        <div className="relative bg-[#04102a] text-white min-h-screen flex items-center">
            {/* Background Grid */}
            <div 
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                }}
            ></div>
            
            {/* Background Gradient Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full filter blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cyan-500/10 rounded-full filter blur-3xl opacity-50"></div>
            </div>

            <div className="relative w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left side content */}
                    <div className="lg:w-1/2 text-center lg:text-left px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                            Building <span className="text-cyan-400">Digital Solutions</span> That Scale with You
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
                            Custom software, AI, and web solutions tailored to your growth journey
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a
                                href="#contact"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md text-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                            >
                                Let's Talk
                            </a>
                            <a
                                href="#work"
                                className="border-2 border-gray-500 hover:border-white text-white font-bold py-3 px-8 rounded-md text-lg transition-colors duration-300"
                            >
                                See Our Work
                            </a>
                        </div>
                    </div>

                    {/* Right side image */}
                    <div className="lg:w-1/2">
                        <img src={heroImage} alt="Digital Solutions" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroHome; 