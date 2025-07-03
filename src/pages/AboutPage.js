import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import robotImage from '../Assets/19.png';
import leader1 from '../Assets/20.png';
import leader2 from '../Assets/21.png';
import leader3 from '../Assets/22.png';
import award1 from '../Assets/25.1.png';
import award2 from '../Assets/25.2.png';
import award3 from '../Assets/25.3.png';
import award4 from '../Assets/25.4.png';
import award5 from '../Assets/25.5.png';
import award6 from '../Assets/25.6.png';
import greatPlaceToWork from '../Assets/55.png';
import lifeAtJellyfish from '../Assets/56.png';
import RealWorldResults from '../components/RealWorldResults';
import SolutionExpertsCta from '../components/SolutionExpertsCta';

const stats = [
    { value: '14+', label: 'Years in Experience' },
    { value: '150+', label: 'Full-Time Experts' },
    { value: '98%', label: 'On-Time Projects Delivered' },
    { value: '250+', label: 'Projects Delivered' },
    { value: '93%', label: 'Repeated Client' }
];

const reasons = [
    {
        title: 'Impactful Innovations',
        description: 'Our constructive thinking leads to revolutionary digital solutions, promoting innovative ideas to develop better software products.',
        className: 'lg:col-span-2 bg-[#2c4d6e] relative overflow-hidden'
    },
    {
        title: 'Client First',
        description: 'We prioritize clients by continuously adapting to the emerging digital ecosystem, and turning their ideas into scalable software applications.',
        className: 'bg-[#0D1A2B]'
    },
    {
        title: 'Continuously Improving',
        description: 'Our teams undergo continuous training and cross-functional learning to stay ahead of the competition with a strategic development approach.',
        className: 'bg-[#0D1A2B]'
    },
    {
        title: 'Accountability',
        description: 'We transform visions into digital reality through next-gen technology, effective communication, timely execution, and constructive feedback.',
        className: 'bg-[#0D1A2B]'
    }
];

const leaders = [
    { name: 'Gaurav Chauhan', title: 'Chief Executive Officer', image: leader1 },
    { name: 'Amit Kumar Pandey', title: 'Chief Technology Officer', image: leader2 },
    { name: 'Neeraj Kumar', title: 'Chief Operating Officer', image: leader3 }
];

const locations = ['India', 'Australia', 'Africa', 'USA', 'Canada'];

const awards = [
    { src: award1, alt: 'Top Company Development Badge' },
    { src: award4, alt: 'Best Artificial Intelligence Companies Badge' },
    { src: award2, alt: 'Salt Lake City Badge' },
    { src: award5, alt: 'ISO Badge' },
    { src: award3, alt: 'AICPA Badge' },
    { src: award6, alt: 'Clutch Top Company Development Badge' }
];

const useScrollAnimation = () => {
    const [elementRef, setElementRef] = useState([]);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeInUp');
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        elementRef.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });
        
        return () => {
            elementRef.forEach((ref) => {
                 if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [elementRef]);
    
    return setElementRef;
}

const AboutPage = () => {
    const setAnimatedElements = useScrollAnimation();
    const refs = useRef([]);
    
    useEffect(() => {
        setAnimatedElements(refs.current.map(el => ({ current: el })));
    }, [setAnimatedElements]);
    
    const addToRefs = el => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

  return (
        <div className="bg-[#00070E] text-white overflow-x-hidden">
      <Header />
            <main>
                {/* Hero Section */}
                <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 py-16 opacity-0" ref={addToRefs}>
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <h1 className="text-5xl lg:text-6xl font-bold">Crafting Purpose-Driven Digital Experiences</h1>
                            <h2 className="text-5xl lg:text-6xl font-bold text-blue-400 mt-2">Since 2012</h2>
                            <p className="mt-6 text-xl text-gray-400">
                                We're a team of thinkers, builders, and problem-solvers delivering high-impact software solutions.
                                From startups to enterprises, we help businesses scale, innovate, and lead. With 100+ global clients and 40+ in-house experts, we turn ideas into reliable digital products.
                            </p>
                            <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md transition-colors">
                                Get Started
                            </button>
                        </div>
                        <div className="lg:w-1/2">
                            <img src={robotImage} alt="Crafting Digital Experiences" className="w-full h-auto transform lg:scale-110" />
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 py-12 opacity-0" ref={addToRefs}>
                    <div className="flex flex-wrap justify-around items-center">
                        {stats.map((stat, index) => (
                            <StatItem key={index} value={stat.value} label={stat.label} isLast={index === stats.length -1} />
                        ))}
                    </div>
                </div>

                {/* Why We Do It Section */}
                <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 py-16 opacity-0" ref={addToRefs}>
                    <h2 className="text-4xl font-bold mb-2">Why We Do It</h2>
                    <div className="w-24 h-1 bg-blue-500 mb-12"></div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {reasons.map((reason, index) => (
                            <ReasonCard key={index} {...reason} />
                        ))}
                    </div>
                </div>

                {/* Meet Our Leaders Section */}
                <div className="py-20 opacity-0 relative overflow-hidden" ref={addToRefs}>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/26f4da504aa28fbf6b5e38e8d27eebbb68d7f337?width=2880"
                        alt="background wave"
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />
                    <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 relative">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold">
                                Meet Our <span className="relative inline-block">
                                    <span className="text-blue-400">Innovative Leaders</span>
                                    <svg className="absolute -bottom-3 left-0 w-full h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 20" preserveAspectRatio="none">
                                        <path d="M0,10 Q50,0 100,10 T200,10" stroke="#3B82F6" strokeWidth="3" fill="none" strokeLinecap="round"/>
                                    </svg>
                                </span>
                            </h2>
                            <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto">
                                Get acquainted with our leaders whose innovation and intellect are the driving force behind the astute status of Jellyfish Technologies.
          </p>
        </div>
                        <div className="flex flex-wrap justify-center gap-x-24 gap-y-19">
                            {leaders.map((leader, index) => (
                                <LeaderCard key={index} {...leader} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Global Client Network Section */}
                <div className="opacity-0" ref={addToRefs}>
                    <GlobalClientNetwork />
                </div>

                {/* Awards Section */}
                <div className="py-20 opacity-0" ref={addToRefs}>
                    <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/3 text-center lg:text-left">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white">
                                    Our Awards & <span className="relative inline-block">
                                        <span className="text-blue-400">Recognitions</span>
                                        <svg className="absolute -bottom-3 left-0 w-full h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 20" preserveAspectRatio="none">
                                            <path d="M0,10 Q50,0 100,10 T200,10 M0,15 Q50,5 100,15 T200,15" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round"/>
                                        </svg>
                                    </span>
                                </h2>
                                <p className="mt-8 text-lg text-gray-400 max-w-3xl">
                                    Our commitment to excellence is recognized by leading industry organizations around the world.
                                </p>
                            </div>
                            <div className="lg:w-2/3">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 items-center">
                                    {awards.map((award, index) => (
                                        <div key={index} className="flex justify-center">
                                            <img src={award.src} alt={award.alt} className="max-h-36 object-contain transform hover:scale-110 transition-transform duration-300" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Life at Jellyfish Section */}
                <div className="relative opacity-0" ref={addToRefs}>
                    <img src={lifeAtJellyfish} alt="Team collaboration" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-blue-800/80"></div>
                    <div className="relative max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
                        <div className="lg:w-1/2">
                            <img src={greatPlaceToWork} alt="Great Place to Work Certified" className="h-24 mb-8" />
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">#LifeAtJellyfishTechnologies</h2>
                            <p className="text-white text-lg mb-8">
                                We at Jellyfish Technologies pursue effective collaboration where ideas and information are not siloed and flow effortlessly. We endeavor to learn from each other and evolve as a business through constant innovation. Our goals embody the values of Jellyfish Technologies which illustrates a duo of creativity and technical expertise.
                            </p>
                            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-blue-800 transition-colors">
                                Join Us Now
                            </button>
                        </div>
                    </div>
                </div>
                <RealWorldResults />
                <SolutionExpertsCta />
            </main>
      <Footer />
    </div>
  );
};

const StatItem = ({ value, label, isLast }) => (
    <div className={`text-center px-4 ${isLast ? '' : 'sm:border-r'} border-gray-600 mb-8 sm:mb-0`}>
        <p className="text-5xl font-bold">{value}</p>
        <p className="text-gray-400 mt-2 text-lg">{label}</p>
    </div>
);

const ReasonCard = ({ title, description, className }) => (
    <div className={`p-8 rounded-lg border border-gray-700 flex flex-col justify-between ${className}`}>
        <div>
            <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
            <p className="text-lg text-gray-400">{description}</p>
        </div>
        <button className="mt-6 bg-blue-500/20 border border-blue-500 text-blue-300 font-semibold py-2 px-6 rounded-md hover:bg-blue-500/40 transition-colors self-start">
            Learn More
        </button>
    </div>
);

const LeaderCard = ({ image, name, title }) => (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-[400px] flex-shrink-0">
        <div className="relative group">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[90%] h-[90%] bg-[#243E5D] rounded-t-full transition-transform duration-300 group-hover:scale-105"></div>
            <img src={image} alt={name} className="relative z-10 w-full h-auto" />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-md p-4 rounded-lg text-center z-20 transform transition-all duration-300 group-hover:bottom-4">
                <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
                <p className="text-gray-700 text-sm font-medium">{title}</p>
            </div>
        </div>
    </div>
);

const GlobalClientNetwork = () => (
    <section className="relative w-full bg-[#00070E] py-20 overflow-hidden">
        <div className="absolute top-[-15%] right-[-10%] w-[40%] h-[40%] bg-[radial-gradient(circle,_rgba(70,120,174,0.2)_0%,_rgba(0,65,115,0)_70%)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-15%] left-[-10%] w-[40%] h-[40%] bg-[radial-gradient(circle,_rgba(30,204,220,0.2)_0%,_rgba(0,108,191,0)_70%)] rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
                 <h2 className="text-4xl lg:text-5xl font-bold text-white">
                    Our Global <span className="relative inline-block">
                        <span className="text-blue-400">Client Network</span>
                        <svg className="absolute -bottom-3 left-0 w-full h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 20" preserveAspectRatio="none">
                            <path d="M0,10 Q50,0 100,10 T200,10 M0,15 Q50,5 100,15 T200,15" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round"/>
                        </svg>
                    </span>
                </h2>
                <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto">
                    Our clients are situated in key markets around the world, showcasing our extensive reach and diverse partnerships.
                </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-3/4">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99ce0fb82e4f9f79f46db32e7296689336d6f2e8?width=2202"
                        alt="World map"
                        className="w-full h-auto"
                    />
                </div>
                <div className="lg:w-1/4 lg:pl-8">
                    <ul className="space-y-4 text-left">
                        {locations.map((loc) => (
                            <li key={loc} className="flex items-center text-xl text-white font-semibold">
                                <svg width="18" height="24" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 h-6 w-auto">
                                    <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S5.62 4.5 7 4.5s2.5 1.12 2.5 2.5S8.38 9.5 7 9.5z" fill="#4275AA"/>
                                </svg>
                                {loc}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

export default AboutPage; 