import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE METAVERSE DEVELOPERS PAGE ---

const metaverseStrengths = [
    { title: 'Metaverse NFT Marketplace Development', description: 'Hire metaverse developers to build secure, scalable, and user-friendly NFT marketplaces with seamless blockchain integration for virtual asset trading.', icon: 'metaverse-nft-marketplace-development' },
    { title: 'Metaverse 3D-Space Development', description: 'Hire skilled Metaverse developers for immersive 3D-space environments, enhancing user engagement and delivering tailored virtual experiences across industries.', icon: 'metaverse-3d-space-development' },
    { title: 'Metaverse Games Development', description: 'Our dedicated Metaverse developers create captivating, blockchain-based games with decentralized mechanics, ensuring engaging and monetizable gaming experiences.', icon: 'game-development' },
    { title: 'Metaverse Decentralized Platforms', description: 'Hire top Metaverse developers to craft decentralized platforms supporting secure transactions, interoperability, and scalability for innovative virtual ecosystems.', icon: 'metaverse-decentralized-platforms' }
];

const whatYouGetMetaverse = [
    { title: 'Post-Delivery Support', description: 'Hire Metaverse developers who ensure seamless post-delivery support, offering updates, troubleshooting, and enhancements to maintain the performance and reliability of your Metaverse applications.' },
    { title: 'Flexible Engagement', description: 'Hiring Metaverse developers from us means access to tailored engagement models—whether you need full-time, part-time, or project-based solutions to fit your requirements.' },
    { title: 'Timely Deliveries', description: 'Hire skilled Metaverse developers dedicated to adhering to project timelines, ensuring your Metaverse solutions are delivered on schedule without compromising quality.' },
    { title: 'Data Security Assurance', description: 'Our certified Metaverse experts prioritize robust security measures, safeguarding your critical data and ensuring compliance with global standards during every stage of development.' }
];

const metaverseTechExpertise = ['Ai-And-Machine-Learning', 'Augmented Reality AR', 'Blockchain Technology', 'Cloud Computing', 'Edge Computing', 'Spatial Computing', 'Virtual Reality VR', 'Web3'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const metaverseSolutions = [
    { title: 'Metaverse App Development', description: 'Hire metaverse developers to craft immersive, user-friendly apps tailored for virtual worlds, integrating cutting-edge features and optimized for performance.' },
    { title: 'Metaverse Marketplace', description: 'Build dynamic, secure marketplaces for trading virtual assets with our metaverse engineers, ensuring seamless transactions and scalability for diverse industries.' },
    { title: 'Metaverse Social Media Platform', description: 'Hire skilled metaverse developers to create interactive, engaging social media platforms fostering real-time virtual interactions and community building in the metaverse.' },
    { title: 'Metaverse Third-Party Integration', description: 'Seamlessly integrate APIs and third-party tools into your metaverse ecosystem by hiring certified metaverse experts skilled in advanced integrations.' },
    { title: 'Metaverse Avatar Development', description: 'Hire dedicated metaverse developers to design lifelike, customizable avatars that enhance user engagement and realism in your virtual environment.' },
    { title: 'Decentralized Platforms', description: 'Our skilled developers create secure, transparent decentralized platforms for your metaverse initiatives with the expertise of our metaverse developers online.' },
    { title: 'Metaverse Social Media Platform', description: 'Create innovative social media platforms tailored for the metaverse, enabling unique interactions with the expertise of top metaverse developers.' },
    { title: 'Metaverse Real Estate Platform', description: 'Hire metaverse developers remotely to build real estate platforms, allowing users to buy, sell, and manage virtual properties effortlessly.' },
    { title: 'Metaverse E-commerce', description: 'Leverage the skills of metaverse app developers to create advanced e-commerce platforms for virtual goods, offering seamless shopping experiences.' }
];

const engagementModelsMetaverse = [
    { title: 'Dedicated Team', description: 'Build a team of dedicated Metaverse developers exclusively for your project. This model ensures expertise-driven 3D environments, seamless blockchain integration, and steady progress to meet your immersive world-building goals.', points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'] },
    { title: 'Staff Augmentation', description: 'Augment your team with skilled Metaverse developers to bridge technical gaps, enhance productivity, and streamline development—while preserving your existing team’s workflow and processes.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Choose a project-based model for Metaverse development to focus on delivering specific goals like NFT marketplaces or virtual reality spaces. Perfect for projects with clearly defined objectives, timelines, and budgets.', points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsMetaverse = [
    { q: 'What are the benefits of hiring Metaverse developers on demand?', a: 'Hiring Metaverse developers on-demand provides access to specialized expertise exactly when you need it, offering flexibility to scale your team based on project requirements. This model is cost-effective, reduces the overhead of full-time hires, and accelerates your time-to-market with skilled professionals ready to contribute immediately.' },
    { q: 'What does a Metaverse developer do?', a: 'A Metaverse developer designs, builds, and maintains immersive 3D virtual environments. They work with a range of technologies including 3D modeling, game engines like Unity and Unreal, blockchain for NFTs and decentralized platforms, and AR/VR to create interactive and engaging experiences for users.' },
    { q: 'How to hire Metaverse developers for my project?', a: 'To hire the right developers, start by defining your project scope and the specific skills you need. Then, partner with a specialized development company that has a pool of vetted Metaverse experts. You can then interview the shortlisted candidates to assess their technical skills and cultural fit before onboarding them to your project.' },
    { q: 'Where do I hire the best remote Metaverse developers?', a: 'The best place to hire remote Metaverse developers is through a reputable technology partner or a specialized development agency like ours. We provide access to a global talent pool of pre-vetted, experienced developers, ensuring you get top-tier skills without the challenges of a direct, global search.' },
    { q: 'What skills are required for a Metaverse developer?', a: 'A skilled Metaverse developer should have a strong foundation in 3D modeling and game engines (like Unity or Unreal Engine), proficiency in programming languages such as C++ or Python, and expertise in blockchain technology for creating NFTs and decentralized systems. Knowledge of AR/VR development is also essential.' },
    { q: 'How long does it usually take to complete a Metaverse development project?', a: 'The timeline for a Metaverse project varies depending on its complexity. A simple proof-of-concept might take a few weeks, while a fully-featured, immersive virtual world with complex integrations could take several months to over a year to develop.' },
    { q: 'What is the approximate Metaverse development cost for the Metaverse development project?', a: 'The cost of a Metaverse project depends on its scope, features, and the size of the development team. A small-scale project can start from around $20,000, while large, complex Metaverse platforms can cost several hundred thousand dollars or more.' },
    { q: 'What is the quality assurance process for Metaverse development projects at Alpixn Technologies?', a: 'Our quality assurance process is comprehensive. It includes rigorous testing of functionality, performance, and security across all aspects of the virtual environment. We conduct thorough user experience testing to ensure the platform is immersive and intuitive, and we perform extensive testing on the blockchain components to ensure they are secure and reliable.' },
    { q: 'Why is Alpixn Technologies the best choice for hiring Metaverse experts?', a: 'Alpixn Technologies is your best choice because we provide access to the top 1% of vetted Metaverse developers. Our experts have a proven track record of delivering innovative, secure, and scalable solutions. We offer flexible engagement models, a commitment to quality, and end-to-end support to ensure your project\'s success.' },
    { q: 'Do you sign NDAs?', a: 'Yes, we take client confidentiality very seriously. We sign a Non-Disclosure Agreement (NDA) at the beginning of every engagement to ensure that your project ideas and proprietary information are fully protected.' }
];

const userGuideContentMetaverse = {
    'Understanding Metaverse Development': {
        intro: 'Metaverse development involves creating immersive, interactive virtual environments powered by advanced technologies like blockchain, AI, and 3D modeling. These virtual worlds enable businesses to offer unique digital experiences, including NFT marketplaces, decentralized platforms, and Metaverse gaming ecosystems. To succeed in this space, hiring skilled Metaverse developers who bring deep technical expertise and creative vision is critical. When you hire Metaverse engineers from Alpixn Technologies, you gain access to certified professionals proficient in tools like Unity, Unreal Engine, and Web3 frameworks. Our team specializes in delivering scalable, future-ready solutions tailored to your business requirements, ensuring your Metaverse platform stands out.',
        points: []
    },
    'Key Skills to Look for in a Metaverse Developer': {
        intro: '',
        points: [
            { title: 'Proficiency in 3D Modeling and Game Engines', text: 'A Metaverse developer should excel in tools like Unity and Unreal Engine to create lifelike virtual spaces.' },
            { title: 'Blockchain Expertise', text: 'Knowledge of decentralized technologies and smart contracts is crucial for implementing secure transactions and NFT marketplaces.' },
            { title: 'Programming Mastery', text: 'Proficiency in scripting languages such as Python, C++, and JavaScript ensures seamless functionality and integration across Metaverse ecosystems.' },
            { title: 'AR/VR Knowledge', text: 'Expertise in augmented and virtual reality tools helps enhance user experience and interactivity.' },
            { title: 'Understanding of AI/ML', text: 'AI-powered avatars and behavior-driven algorithms require developers skilled in machine learning and artificial intelligence.' }
        ],
        outro: 'When you hire certified Metaverse experts or hire top Metaverse developers from Alpixn Technologies, you’re ensuring access to professionals equipped with these essential skills. Whether you’re hiring offshore Metaverse developers or engaging our remote team, we deliver unparalleled quality and innovation.'
    },
    'Steps to Hire the Right Metaverse Developer': {
        intro: '',
        points: [
            { title: 'Define Your Project Requirements', text: 'Identify the scope of your Metaverse project, including desired features like NFT marketplaces, virtual reality spaces, or 3D assets.' },
            { title: 'Assess Technical Expertise', text: 'Ensure the developer is proficient in technologies like blockchain, AR/VR, Unity, Unreal Engine, and smart contract programming.' },
            { title: 'Evaluate Portfolio and Past Work', text: 'Review their previous projects to assess their creativity, technical skill, and ability to execute complex Metaverse solutions.' },
            { title: 'Choose the Right Engagement Model', text: 'Decide whether to hire dedicated Metaverse developers, freelance Metaverse programmers, or a full-service development team.' },
            { title: 'Conduct Technical Interviews', text: 'Test the candidate’s coding ability, problem-solving skills, and knowledge of Metaverse-specific technologies.' },
            { title: 'Ensure Security Expertise', text: 'Verify their ability to implement robust security measures to protect user data and digital assets.' }
        ],
        outro: 'Hiring Metaverse developers online with Alpixn Technologies ensures access to certified experts who can bring your Metaverse vision to life with precision and innovation.'
    },
    'Benefits of Hiring Dedicated Metaverse Developers': {
        intro: '',
        points: [
            { title: 'Specialized Expertise', text: 'Dedicated Metaverse developers offer in-depth knowledge of immersive technologies, ensuring your project is built with cutting-edge solutions.' },
            { title: 'Cost Efficiency', text: 'Hiring offshore Metaverse developers helps you optimize costs without compromising on quality or performance.' },
            { title: 'Scalable Solutions', text: 'Experienced developers design flexible and scalable Metaverse platforms tailored to evolving business needs.' },
            { title: 'Seamless Integration', text: 'Hire Metaverse app developers to ensure flawless integration of third-party services, NFTs, and payment gateways.' },
            { title: 'Post-Development Support', text: 'Dedicated developers provide ongoing support and maintenance, guaranteeing a smooth user experience and long-term success.' }
        ],
        outro: 'Choose Alpixn Technologies to hire certified Metaverse experts and elevate your project with innovative, secure, and high-performing Metaverse applications. Whether you hire Metaverse developers remotely or engage our full-service team, you’ll benefit from unparalleled expertise.'
    }
};


// Custom hook for intersection observer
const useOnScreen = (options) => {
    const [ref, setRef] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
  
    React.useEffect(() => {
      if (!ref) return;
      const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), options);
      observer.observe(ref);
      return () => observer.disconnect();
    }, [ref, options]);
  
    return [setRef, isVisible];
};

// --- SECTIONS FOR HIRE METAVERSE DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top Metaverse Developers</h3>
        <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="Contact Number" className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Business Email" className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="Company Name" className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Describe Your Query" rows="4" className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">Submit</button>
        </form>
    </div>
);

const MetaverseStrengthsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Top-Notch Skills from Our Certified Metaverse Developers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {metaverseStrengths.map((service, index) => (
                        <motion.div key={index} className="bg-gray-800 p-8 rounded-lg text-center transform transition duration-500 hover:scale-105 hover:bg-gray-700"
                            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                            <div className="text-blue-400 mb-4 text-4xl mx-auto w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                                {/* Placeholder for icons */}
                                {service.icon.substring(0,2)}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const WhatYouGetSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
      <div ref={ref} className="py-24 bg-gray-900/50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Why Partner with Our Dedicated Metaverse Development Team
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatYouGetMetaverse.map((reason, index) => (
              <div key={reason.title} className={`p-8 bg-gray-800 rounded-2xl text-left transition-all duration-500 ease-out hover:bg-gray-700 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <h3 className="text-2xl font-bold text-blue-400 mb-3">{reason.title}</h3>
                <p className="text-gray-300 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-blue-400 font-semibold text-xl mt-12">Have a Question? <a href="#" className="underline hover:text-blue-300">Talk to an Expert ⊙</a></p>
        </div>
      </div>
    );
};

const TechExpertiseSection = () => {
    return (
        <div className="py-24 bg-black">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Expertise of Our Metaverse Developers</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {metaverseTechExpertise.map(tech => (
                        <div key={tech} className="text-center">
                            <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto flex items-center justify-center ring-1 ring-white/10">
                                <span className="text-white font-semibold text-lg">{tech}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const TestimonialsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>What Our Clients Say</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {clientTestimonials.slice(0, 3).map((testimonial, index) => (
                        <div key={index} className={`p-8 bg-gray-800 ring-1 ring-white/10 rounded-2xl transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                            <div className="font-bold text-white">{testimonial.author}</div>
                            <div className="text-sm text-gray-400">{testimonial.company}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ReliableSolutionsSection = () => {
    return(
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">Your Project Needs Innovative Approach with Our Skilled Metaverse Developers</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Our dedicated Metaverse developers for hire deliver scalable, secure, and performance-optimized solutions tailored to your business requirements and growth.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {metaverseSolutions.map((solution, index) => (
                        <div key={index} className="bg-gray-900/50 p-6 rounded-lg ring-1 ring-white/10 hover:ring-blue-500/50 transition-all">
                            <h3 className="text-2xl font-bold mb-3 text-blue-400">{solution.title}</h3>
                            <p className="text-gray-400">{solution.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeaturedCaseStudyMetaverse = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Our Work Speaks for Itself</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Discover how our dedicated Metaverse developers have revolutionized businesses by crafting immersive, secure, and scalable solutions designed to address unique industry challenges and unlock new digital opportunities.
                </p>
            </div>
            <div className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-800 ring-1 ring-white/10 rounded-2xl p-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-2/5">
                        <h3 className="text-3xl font-bold mb-2">FM Integrated</h3>
                        <p className="text-blue-400 font-semibold mb-4">Unify All FM Operations On A Single Platform To Enhance Efficiency And Cut Costs.</p>
                        <ul className="space-y-3 mb-6">
                             {['Analyzed client’s operations and FM trends, and followed a structured dev process.', 'Conducted constructive user testing sessions during the development phase.', 'The work order and management feature was added to create, assign, and track.', 'Enhanced facility managers to oversee service providers and suppliers.'].map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                         <div className="flex flex-wrap items-center gap-2">
                             {['USA', 'US', 'REACT', 'FACILITY MANAGEMENT'].map(tag => <div key={tag} className="text-xs font-semibold text-gray-300 bg-gray-700 px-3 py-1 rounded-full">{tag}</div>)}
                         </div>
                    </div>
                    <div className="w-full md:w-3/5">
                        <p className="text-gray-300 mb-6 text-lg">Integrated FM Group, a leading facility management provider, collaborated with Alpixn Technologies to streamline operations. The developed platform integrates work orders, asset management, preventive maintenance, and vendor management, enhancing efficiency and reducing costs.</p>
                        <img src={StaffAugmentationImage} alt="FM Integrated Case Study" className="rounded-xl shadow-2xl shadow-blue-500/10" />
                        <div className="text-center mt-6">
                            <button className="text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center gap-2 mx-auto">View Case Study <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const UserGuideSidebarMetaverse = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentMetaverse)[0]);
    const content = userGuideContentMetaverse[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Hire Metaverse Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentMetaverse).map(topic => (
                                <li key={topic}>
                                    <button onClick={() => setActiveTopic(topic)}
                                        className={`w-full text-left p-4 rounded-lg transition-colors duration-300 ${activeTopic === topic ? 'bg-blue-600 text-white font-bold' : 'bg-gray-800 hover:bg-gray-700'}`}>
                                        {topic}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </aside>
                    <main className="md:w-2/3">
                        <div className="bg-gray-900/50 p-8 rounded-2xl ring-1 ring-white/10">
                            {content.intro && <p className="text-gray-400 mb-6 whitespace-pre-line">{content.intro}</p>}
                            <div className="space-y-6">
                                {content.points.map((point, index) => (
                                    <div key={index}>
                                        <h4 className="text-xl font-bold text-blue-400 mb-2">{point.title}</h4>
                                        <p className="text-gray-300 whitespace-pre-line">{point.text}</p>
                                    </div>
                                ))}
                            </div>
                            {content.outro && <p className="text-gray-400 mt-6 italic whitespace-pre-line">{content.outro}</p>}
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
};

const HiringStepsSection = () => {
    const steps = [
        { icon: 'call', title: 'Schedule a Call', description: 'Share your project details and developer requirements with our experts.' },
        { icon: 'group', title: 'Select Your Team', description: 'Interview and handpick the best developers tailored to your needs.' },
        { icon: 'monitor-progress', title: 'Start Your Project', description: 'We handle onboarding while you focus on launching your project seamlessly.' }
    ];

    return (
        <div className="py-24 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top Metaverse Developers in 3 Simple Steps</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mb-4">{index + 1}</div>
                            <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                            <p className="text-gray-400 max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>
                <button className="mt-12 bg-blue-500 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-600 transition text-lg">
                    Hire Top 1% Talent Now
                </button>
            </div>
        </div>
    );
};

const EngagementModelsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Engagement Models to Hire Best Metaverse Programmers</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies offers flexible engagement models for Metaverse development, delivering tailored solutions to align with your project needs. Explore our engagement models.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsMetaverse.map((model, index) => (
                        <div key={model.title} className={`p-8 bg-blue-900/20 ring-1 ring-blue-500/20 rounded-2xl transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <h3 className="text-3xl font-bold mb-4 text-center">{model.title}</h3>
                            <p className="text-gray-400 mb-6 text-center h-40">{model.description}</p>
                            <ul className="space-y-3">
                                {model.points.map(point => (
                                    <li key={point} className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="text-gray-300">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const FaqSection = () => {
    const [open, setOpen] = useState(null);
    const toggle = (index) => setOpen(open === index ? null : index);
    return (
        <div className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">FAQ's</h2>
                <div className="max-w-4xl mx-auto">
                    {faqsMetaverse.map((faq, index) => (
                        <div key={index} className="border-b border-gray-700 py-4">
                            <button onClick={() => toggle(index)} className="w-full flex justify-between items-center text-left text-lg font-semibold">
                                <span className="text-white">{faq.q}</span>
                                <span className="text-blue-400 text-2xl">{open === index ? '−' : '+'}</span>
                            </button>
                            <motion.div initial={false} animate={{ height: open === index ? 'auto' : 0, opacity: open === index ? 1 : 0, marginTop: open === index ? '1rem' : '0' }} transition={{ duration: 0.3 }} className="overflow-hidden">
                                <p className="text-gray-400" dangerouslySetInnerHTML={{ __html: faq.a }}></p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


// --- MAIN PAGE COMPONENT ---
const HireMetaversePage = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 via-black to-black text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                <motion.div className="md:w-1/2"
                    initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire Expert Metaverse Developers<br/>Partner with Skilled Metaverse Developers to Build Immersive Virtual Experiences</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Transform your business with our expert Metaverse developers specializing in cutting-edge virtual environments, NFT marketplaces, decentralized platforms, and immersive 3D applications.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Advanced Metaverse Expertise</div>
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>100% Quality Assurance</div>
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>5+ Years Avg Experience</div>
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>NDA-Backed Confidentiality</div>
                    </div>
                </motion.div>
                <motion.div className="md:w-1/2 flex justify-center"
                    initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                    <HireDeveloperForm />
                </motion.div>
            </div>
          </div>
        </section>

        <TrustedBy backgroundColor="bg-white" />
        <MetaverseStrengthsSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Transform Your Software Projects?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire Our Metaverse Developers
            </motion.button>
        </section>
        <WhatYouGetSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Build Scalable, Future-Ready Applications with Our Top Metaverses Developers
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Call
            </motion.button>
        </section>

        <FeaturedCaseStudyMetaverse />
        <UserGuideSidebarMetaverse />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireMetaversePage;