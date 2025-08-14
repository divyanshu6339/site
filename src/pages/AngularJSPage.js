import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

// Using the same images as provided in the original Python page
import angularLogo from '../Assets/angular1.webp';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import angularExpert from '../Assets/angularjs2.webp';
import serviceImg1 from '../Assets/9.1.png';
import serviceImg2 from '../Assets/9.2.png';
import serviceImg3 from '../Assets/9.3.png';
import serviceImg4 from '../Assets/9.4.png';
import serviceImg5 from '../Assets/9.5.png';
import serviceImg6 from '../Assets/9.6.png';
import serviceImg7 from '../Assets/9.7.png';
import serviceImg8 from '../Assets/9.8.png';
import serviceImg9 from '../Assets/9.9.png';
import certVaultLogo from '../Assets/10.1.png';
import jBillinLogo from '../Assets/10.2.png';
import patraLogo from '../Assets/10.3.png';
import spaceHubbLogo from '../Assets/10.4.png';
import fifthCompanyLogo from '../Assets/10.5.png';
import monitorImage from '../Assets/10.6.jpg';
import usFlag from '../Assets/10.7.png';
import expertGuidanceImage from '../Assets/11.png';
import techStackBg from '../Assets/12.jpg';
import jestLogo from '../Assets/13.1.png';
import mongooseLogo from '../Assets/13.2.png';
import nestJsLogo from '../Assets/13.3.png';
import sequelizeLogo from '../Assets/13.4.png';
import socketIoLogo from '../Assets/13.5.png';
import typescriptLogo from '../Assets/13.6.png';
import webpackLogo from '../Assets/13.7.png';
import eslintLogo from '../Assets/13.8.png';
import jqueryLogo from '../Assets/13.9.png';
import lodasLogo from '../Assets/13.10.png';
import clutchLogo from '../Assets/14.1.png';
import isoLogo from '../Assets/14.2.png';
import goodfirmsLogo from '../Assets/14.3.png';

const faqs = [
    {
        question: 'How can I ensure the quality of work when outsourcing AngularJS development?',
        answer: 'To ensure quality when outsourcing AngularJS development, choose an experienced and reputable provider with a strong track record, define precise requirements and expectations, implement rigorous quality assurance practices, establish effective communication and collaboration, and establish robust project milestones.'
    },
    {
        question: 'What is the typical cost of Angular JS web development services?',
        answer: 'The cost of AngularJS web development services depends on several variables, such as project complexity, developer expertise, and geographic location. Contact us today for a detailed quote and to explore best-in-industry AngularJS web development services.'
    },
    {
        question: 'What important aspects must be considered while choosing an Angular JS development company?',
        answer: 'When selecting an AngularJS app development company, consider their technical expertise and proven experience. Review their project management techniques, portfolio, and client testimonials. Make sure they offer strong post-launch support and effective communication.'
    },
    {
        question: 'With AngularJS, what types of applications can you create?',
        answer: 'AngularJS enables development of Single-Page Applications (SPAs), Progressive Web Applications (PWAs), Mobile Applications, Enterprise Web Applications, Real-Time Applications, Industry-Specific Applications, and Server-Side Rendered (SSR) Applications.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "Alpixn Technologies' 'Dedicated Team' model operates as your Angular offshore development company, equipping a custom team that is an extension of your company. Hire front-end developers who focus solely on your AngularJS project, guaranteeing smooth integration and reliable, high-quality results.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "Alpixn Technologies' 'Team Augmentation' model strategically adds expert Angular JS developers to your current team, enhancing your in-house resources with their avant-garde developing abilities. This innovative methodology guarantees smooth integration and collaboration.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "Alpixn Technologies' 'Project Based' model is perfect for organizations seeking AngularJS development services involving well-defined projects with exacting deadlines and scope constraints. We employ a structured approach to effectively manage risks and optimize resource allocation.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'Angular CLI', logo: jestLogo },
    { name: 'Firebase', logo: mongooseLogo },
    { name: 'Jasmine', logo: nestJsLogo },
    { name: 'Karma', logo: sequelizeLogo },
    { name: 'NgRx', logo: socketIoLogo },
    { name: 'PrimeNG', logo: typescriptLogo },
    { name: 'Protractor', logo: webpackLogo },
    { name: 'RxJS', logo: eslintLogo },
    { name: 'Express', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'Seamless Two-Way Data Binding', description: 'Two-way data binding, a robust feature of AngularJS ensures that alterations to the user interface automatically update the data model, and vice versa, eliminating the requirement for manual DOM manipulation.' },
    { title: 'Advanced Dependency Injection', description: "Angular's dependency injection system is a core feature that allows components and services to declare their dependencies explicitly, ensuring modular, testable, and maintainable development." },
    { title: 'Component-Based Architecture', description: 'Angular\'s component-based architecture promotes the creation of reusable and maintainable components, resulting in scalable applications and quicker development cycles.' },
    { title: 'Comprehensive CLI Tools', description: 'Angular CLI is a robust tool designed for initializing, developing, scaffolding, and maintaining applications straight from a command shell, improving developer productivity and facilitating development.' },
    { title: 'Enhanced Performance with Ivy Engine', description: 'Angular Ivy is the next-generation rendering engine that enhances application performance by offering bundle size reduction and reduced load times, delivering a smoother user experience.' },
    { title: 'Community and Enterprise Support', description: 'Angular is developed by Google and has garnered strong community support, offering an extensive resource network and regular updates, ensuring the framework remains cutting-edge and supported.' },
    { title: 'Rich Ecosystem with Angular Material', description: 'Angular Material provides a robust library of UI components that follow modern design principles, enabling the rapid development of aesthetically pleasing and responsive applications.' },
    { title: 'Built-in Testing Capabilities', description: 'Angular provides robust built-in testing capabilities, maintaining high code quality and reliability. The testing framework integrates effortlessly with the Angular CLI, ensuring comprehensive testing out-of-the-box.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'Dynamic Single-Page Applications',
        description: 'As a leading AngularJS development company, we build dynamic SPAs, ensuring seamless navigation and prompt response times. Our technical experts assure optimal user engagement and peak performance, ensuring your application stands out in the tech world.'
    },
    {
        image: serviceImg2,
        title: 'Custom Web Application Development',
        description: 'Partner with our custom AngularJS development company and get bespoke applications personalized to your business objectives. We provide high-performing, scalable, robust solutions that precisely match your unique requirements.'
    },
    {
        image: serviceImg3,
        title: 'Intuitive UI/UX Design',
        description: 'Our tech-savvy AngularJS developers for hire specialize in building intuitive, user-focused designs that improve engagement and satisfaction. We ensure your interfaces are functionally and aesthetically better, leading to increased user retention.'
    },
    {
        image: serviceImg4,
        title: 'Progressive Web Applications',
        description: 'Choose our AngularJS development services company to build cutting-edge progressive web apps that offer app-like experiences with offline abilities and swift load times. We leverage agile methodologies to ensure premium user experiences.'
    },
    {
        image: serviceImg5,
        title: 'Cross-Platform Development',
        description: 'Our Angular offshore development company creates cross-platform mobile applications that are secure, high-quality, and present a consistent user experience across all platforms and devices, maximizing usage and engagement.'
    },
    {
        image: serviceImg6,
        title: 'Custom Component Development',
        description: 'As a custom AngularJS development company, we strategize and develop custom-made Angular components that integrate seamlessly into your applications, designed to meet specific business requirements and increase performance.'
    },
    {
        image: serviceImg7,
        title: 'Scalable Enterprise Solutions',
        description: 'Our AngularJS development services provide scalable, reliable business solutions created to evolve with your business. We build applications that can easily manage growing demands while maintaining performance and dependability.'
    },
    {
        image: serviceImg8,
        title: 'Angular Migration & Upgrade',
        description: 'Rely on our AngularJS development services company for seamless migrations and updates. We upgrade your application to the most recent Angular versions, incorporating cutting-edge features and enhancements to address security and performance issues.'
    },
    {
        image: serviceImg9,
        title: 'API Integration & Development',
        description: 'Our Angular JS web development company has excellent API integration and development expertise, ensuring seamless, efficient interactions between your application and external systems, streamlining data exchange and functionality.'
    },
];

// Component definitions
const ServiceCard = ({ image, title, description }) => (
    <div className="bg-[#2A0A0A] p-6 rounded-lg border border-red-800 flex flex-col items-center text-center hover:bg-[#3A0A0A] transition-colors duration-300">
        <img src={image} alt={title} className="h-16 w-16 mb-4" />
        <h3 className="text-lg font-semibold text-red-400 mb-3">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

const Feature = ({ title, description }) => (
    <div className="mb-8">
        <h3 className="text-xl font-semibold text-red-400 mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const FeatureCard = ({ text }) => (
    <div className="flex items-start">
        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
        <p className="text-gray-400 text-sm">{text}</p>
    </div>
);

const ProficiencyCard = ({ title, description }) => (
    <div className="bg-[#2A0A0A] p-6 rounded-lg border border-red-800 h-full hover:bg-[#3A0A0A] transition-colors duration-300">
        <h3 className="text-lg font-semibold text-red-400 mb-3">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

const TechStackItem = ({ name, logo }) => (
    <div className="flex flex-col items-center">
        <img src={logo} alt={name} className="h-12 w-12 mb-2" />
        <span className="text-white text-sm font-medium">{name}</span>
    </div>
);

const StatItem = ({ value, label }) => (
    <div className="text-center">
        <div className="text-3xl font-bold text-red-400">{value}</div>
        <div className="text-gray-400 text-sm mt-1">{label}</div>
    </div>
);

const AwardItem = ({ image, text }) => (
    <div className="text-center">
        <img src={image} alt={text} className="h-16 mx-auto mb-2" />
        <p className="text-sm">{text}</p>
    </div>
);

const EngagementCard = ({ title, description, points }) => (
    <div className="bg-[#2A0A0A] p-6 rounded-lg border border-red-800 h-full hover:bg-[#3A0A0A] transition-colors duration-300">
        <h3 className="text-xl font-semibold text-red-400 mb-4">{title}</h3>
        <p className="text-gray-400 text-sm mb-6">{description}</p>
        <ul className="space-y-2">
            {points.map((point, index) => (
                <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-400 text-sm">{point}</span>
                </li>
            ))}
        </ul>
    </div>
);

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="bg-[#2A0A0A] border border-red-800 rounded-lg">
            <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#3A0A0A] transition-colors duration-200"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-white">{question}</span>
                <span className="text-red-400 text-xl">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
                <div className="px-6 pb-4">
                    <p className="text-gray-400">{answer}</p>
                </div>
            )}
        </div>
    );
};

const AngularJSPage = () => {
    return (
        <div className="bg-[#0A0A0A] text-white overflow-x-hidden">
            <Header />
            <div className="pt-20">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold">
                                Futuristic <span className="text-red-400">AngularJS</span><br />
                                Development Company
                            </h1>
                            <p className="mt-4 text-xl text-gray-400">
                                Ensure Your Digital Success with Our AngularJS Development Services!
                            </p>
                            <p className="mt-4 text-lg text-gray-400">
                                Transform your ideas into high-performance, innovative applications with Alpixn Technologies, a premier Angular Development Company. Our expert Angular JS developers build scalable solutions, establishing a robust basis for your project's success.
                            </p>
                            <div className="mt-8 flex justify-center md:justify-start space-x-4">
                                <button className="bg-red-600 text-white font-bold py-3 px-6 rounded-md hover:bg-red-700 transition duration-300">
                                    Get Started
                                </button>
                                <button className="border border-red-600 text-red-600 font-bold py-3 px-6 rounded-md hover:bg-red-600 hover:text-white transition duration-300">
                                    Book a call with our expert
                                </button>
                            </div>
                        </div>
                        <div className="md:w-1/2 mt-10 md:mt-0">
                            <img src={angularLogo} alt="AngularJS" className="w-full h-auto" />
                        </div>
                    </div>
                </div>

                <div className="bg-gray-200 py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-semibold text-center text-gray-800">
                            Preferred by Tech's Elite For Top-Tier Solutions
                        </h2>
                        <div className="mt-8 flex justify-center items-center flex-wrap gap-8">
                            <img src={visaLogo} alt="Visa" className="h-12" />
                            <img src={infosysLogo} alt="Infosys" className="h-12" />
                            <img src={netflixLogo} alt="Netflix" className="h-16" />
                            <img src={moglixLogo} alt="Moglix" className="h-16" />
                            <img src={relianceLogo} alt="Reliance Industries" className="h-16" />
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Challenges We'll Assist You Resolve with Our Angular Development Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ServiceCard image={seamlessMicroservices} title="Legacy Code Modernization" description="Our result-driven modernization services update your current AngularJS applications to the latest Angular versions, guaranteeing compatibility, enhanced functionality, and performance improvements." />
                        <ServiceCard image={singleThreaded} title="Cross-Browser Compatibility" description="Our AngularJS developers conduct rigorous testing across multiple browsers and devices, utilizing polyfills and best techniques to ensure cross-browser compatibility and consistent UI/UX." />
                        <ServiceCard image={codeQuality} title="Performance Optimization" description="Our experts use cutting-edge methods to improve app performance, including lazy loading, Ahead-of-Time (AOT) compilation, and efficient change detection techniques like OnPush change detection." />
                        <ServiceCard image={memoryLeak} title="Security Vulnerabilities" description="Our tech experts use Angular security best practices, including sanitization and secure coding, to safeguard your application from Cross-Site Request Forgery (CSRF) and Cross-Site Scripting (XSS)." />
                    </div>
                </div>

                <div className="bg-red-600 py-6 my-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                        <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0">Transform Your Business with Our Bespoke AngularJS Development</h2>
                        <button className="bg-white text-red-600 font-bold py-2 px-4 rounded-md flex items-center hover:bg-gray-200 transition duration-300 shrink-0">
                            Connect With Us
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-8">
                        Code Like a Pro: Upgrade Your App with Our Angular Development Expertise
                    </h2>
                    <img src={angularExpert} alt="Expert Angular Development" className="w-96 h-auto rounded-lg shadow-lg mb-12 mx-auto" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <Feature
                            title="Custom Fit Flexibility"
                            description="Choose from our flexible engagement models tailored to your specific project's requirements—whether it's a full-stack overhaul, specialized sprints, or ongoing assistance."
                        />
                        <Feature
                            title="Future-Proof Development"
                            description="Benefit from our avant-garde development approach that evolves with technological advancements and industry trends, ensuring your application stays at the forefront of innovation."
                        />
                        <Feature
                            title="Agile Resource Scaling"
                            description="Leverage our expertise to swiftly expand or refine your core development team and ensure maximum productivity and collaborative project management throughout your project lifecycle."
                        />
                        <Feature
                            title="Robust and Resilient Frameworks"
                            description="Experience unmatched stability and performance with our meticulously built architecture, designed to address complex project requirements and scale efficiently as your application grows."
                        />
                    </div>

                    <p className="text-center mt-12 text-gray-400 text-lg">
                        Have a question? <a href="#" className="text-red-400 font-semibold hover:underline">Speak to an expert</a>
                    </p>
                </div>

                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Transformative Angular Development Services for Tangible Results
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {developmentServices.map((service, index) => (
                            <div key={index} className="bg-[#2A0A0A] p-8 rounded-lg border border-red-800 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
                                <img src={service.image} alt={service.title} className="h-24 mb-6 self-start" />
                                <h3 className="text-xl font-semibold text-red-400 mb-4">{service.title}</h3>
                                <p className="text-gray-400">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold">Angular Brilliance: Demonstrated by Our Experts</h2>
                        <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                            At Alpixn Technologies, our AngularJS programmers are innovators in cutting-edge web solutions, propelling inventions with state-of-the-art tech expertise and agile precision. As the industry-leading Angular company, we deliver unparalleled, customized applications with guaranteed outcomes.
                        </p>
                    </div>

                    <div className="bg-[#2A0A0A] rounded-xl shadow-lg p-8 border border-red-800">
                        <div className="flex justify-around items-center flex-wrap gap-8 border-b border-red-800 pb-8 mb-8">
                            <img src={certVaultLogo} alt="CertVault" className="h-14" />
                            <img src={jBillinLogo} alt="jBillin" className="h-16" />
                            <img src={patraLogo} alt="Patra" className="h-14" />
                            <img src={spaceHubbLogo} alt="Space Hubb" className="h-16" />
                            <img src={fifthCompanyLogo} alt="Company Logo" className="h-16" />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src={monitorImage} alt="Case Study" className="rounded-lg w-full" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-200 mb-4">State-Of-The-Art Cloud-Based Certificate Vault, Crafting Secure, Efficient, and User-Centered Digital Solutions</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <FeatureCard text="Comprehensive analysis to assess web application functionalities and architecture" />
                            <FeatureCard text="Highly secure platform enabling seamless certificate upload and access, enhancing UX" />
                            <FeatureCard text="Blockchain-based solutions ensure the integrity and verification of uploaded certificates" />
                            <FeatureCard text="Robust data security measures implemented for a secure and future-proof solution" />
                        </div>
                        <p className="text-gray-400 mb-6">
                            Alpxin Technologies partnered with Patra Corporation to develop a secure cloud-based certificate vault, enabling instant access to financial documents, streamlining processes, enhancing the customer experience, and reducing costs. This results in a successful partnership with repeat business.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-gray-600 pt-4">
                            <div className="flex items-center gap-4">
                                <img src={usFlag} alt="US Flag" className="w-8 h-8" />
                                <span className="text-gray-400">US | ANGULAR</span>
                            </div>
                            <a href="#" className="flex items-center text-red-400 font-semibold hover:underline">
                                View Case Study
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#4A6E94] rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between p-8 md:p-0 overflow-hidden">
                    <div className="text-center md:text-left md:w-1/2 md:pl-12 z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Elevate Your Project with Expert Guidance.</h2>
                        <button className="bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg flex items-center mx-auto md:mx-0 hover:bg-gray-200 transition-colors">
                            Talk to An Expert
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>
                    <div className="mt-8 md:mt-0 md:w-1/2 flex justify-end">
                        <img src={expertGuidanceImage} alt="Expert Guidance" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>

        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-lg font-semibold text-gray-400">Quality-Focused Proficiency</h3>
                <h2 className="text-4xl font-bold mt-2">Why is <span className="text-red-400">AngularJS</span> the Go-To Choice for Building Scalable Applications?</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    AngularJS's simple architecture, adaptability, and large library ecosystem make it the perfect language for scalable projects. Its strong frameworks and simple syntax enable rapid development, which qualifies for both startups and large enterprises aiming for efficient and maintainable solutions.
                </p>

                <div className="mt-12 flex flex-col items-center gap-8">
                    {/* Row 1 */}
                    <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
                        {proficiencyFeatures.slice(0, 3).map((feature, index) => (
                            <ProficiencyCard key={index} title={feature.title} description={feature.description} />
                        ))}
                    </div>
                    {/* Row 2 */}
                    <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
                        {proficiencyFeatures.slice(3, 5).map((feature, index) => (
                            <ProficiencyCard key={index + 3} title={feature.title} description={feature.description} />
                        ))}
                    </div>
                    {/* Row 3 */}
                    <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
                        {proficiencyFeatures.slice(5, 8).map((feature, index) => (
                            <ProficiencyCard key={index + 5} title={feature.title} description={feature.description} />
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div 
            className="py-16 bg-cover bg-center" 
            style={{ backgroundImage: `url(${techStackBg})` }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-12">
                    Technology Stack We Use For AngularJS Development
                </h2>
                <div className="flex flex-col items-center gap-12">
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
                        {techStack.slice(0, 5).map((tech, index) => (
                            <TechStackItem key={index} name={tech.name} logo={tech.logo} />
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
                        {techStack.slice(5).map((tech, index) => (
                            <TechStackItem key={index + 5} name={tech.name} logo={tech.logo} />
                        ))}
                    </div>
                 </div>
            </div>
        </div>

        <div className="py-16 bg-[#00070E]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-16">
                    What Makes Alpixn Technologies an Industry Leader?
                </h2>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 mb-20">
                    <StatItem value="14+" label="Years Of Experience" />
                    <StatItem value="150+" label="Full Time Experts" />
                    <StatItem value="250+" label="Project Delivered" />
                    <StatItem value="4.9/5" label="Customer Rating" />
                </div>

                {/* Awards Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 gap-x-8 items-center justify-items-center mb-24 text-white">
                    <AwardItem image={clutchLogo} text="Top Software Developer by Clutch" />
                    <AwardItem image={isoLogo} text="ISO 9001-2012 Certified" />
                    <div className="text-center">
                        <p className="text-5xl font-bold">98%</p>
                        <p className="text-lg mt-2">On-Time Project Delivery</p>
                    </div>
                    <AwardItem image={goodfirmsLogo} text="Top Software Development Companies by Goodfirms" />
                </div>

                {/* Engagement Model Section */}
                <div>
                    <h2 className="text-4xl font-bold text-white mb-4">Engagement Model</h2>
                    <p className="text-gray-400 max-w-4xl mx-auto mb-12">
                        At Alpixn Technologies, we offer three flexible AngularJS engagement models to suit your project needs: Dedicated Team for full-time, integrated support; Staff Augmentation to boost your current team with our experts; and Project-Based for tailored goal-focused solutions. We deliver the perfect mix of flexibility and expertise to drive your success.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {engagementModels.map((model, index) => (
                            <EngagementCard key={index} {...model} />
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="py-16 bg-[#00070E]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    FAQ's
                </h2>
                <div className="space-y-1">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </div>

        <Insights />

      </div>
      <Footer />
    </div>
  );
};

export default AngularJSPage;