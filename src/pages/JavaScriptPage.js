import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

import pythonLogo from '../Assets/javascript1.webp';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import pythonExpert from '../Assets/java-script2.webp';
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
        question: 'What are the typical costs associated with JavaScript development services?',
        answer: 'The cost of JavaScript development services depends on the projects complexity, requirements, and timeline. We offer personalized price estimates to ensure optimal value for your requirements.'
    },
    {
        question: 'Can I hire JavaScript developers on a part-time or full-time basis?',
        answer: 'Yes, we provide three engagement models to choose from: dedicated team, team augmentation, and project-based, giving you the flexibility to pick the most suitable one, depending on your requirements.'
    },
    {
        question: 'What testing methodologies do you follow for JavaScript applications?',
        answer: 'We utilize a range of testing methodologies, including unit testing, integration testing, and automated testing, to ensure the quality and dependability of our JavaScript applications.'
    },
    {
        question: 'What frameworks and libraries do you use for JavaScript development?',
        answer: 'We utilize a range of frameworks and libraries, like React, Angular, Vue.js, and Node.js, to provide customizable and effective JavaScript solutions tailored to your project needs.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "We build a bespoke offshore JavaScript team that integrates seamlessly with your company. This dedicated team of expert JavaScript developers acts as an extension of your in-house team, providing continuous assistance and producing exceptional, top-notch outcomes throughout the development lifecycle.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "Alpixn Technologies' team augmentation model adopts a meticulous approach to handling risks and optimizing resources. By hiring JavaScript programmers who fit your project's needs, we ensure timely completion, cost efficiency, and successful goal attainment, enhancing the productivity of your current team.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "We elevate your in-house team by integrating top-tier experts through our premier outsourcing JavaScript development solutions. This approach enables you to tap into exceptional expertise and specialized abilities for specific JavaScript projects, ensuring the timely delivery of top-notch, efficient outcomes.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'React', logo: jestLogo },
    { name: 'Angular', logo: mongooseLogo },
    { name: 'Vue.js', logo: nestJsLogo },
    { name: 'Node.js', logo: sequelizeLogo },
    { name: 'Express.js', logo: socketIoLogo },
    { name: 'TypeScript', logo: typescriptLogo },
    { name: 'Webpack', logo: webpackLogo },
    { name: 'ESLint', logo: eslintLogo },
    { name: 'jQuery', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'Dynamic Typing & Flexibility', description: 'JavaScript\'s dynamic typing and flexible nature enables rapid prototyping and adaptable development, allowing for quick iterations and seamless code modifications for scalable web applications.' },
    { title: 'Event-Driven Architecture', description: "JavaScript's event-driven architecture supports responsive user interfaces and real-time interactions, enabling the creation of engaging, interactive applications that respond instantly to user actions and system events." },
    { title: 'Asynchronous Programming Support', description: 'JavaScript\'s native support for asynchronous programming through Promises, async/await, and callbacks enables non-blocking operations, ensuring smooth user experiences and efficient handling of concurrent processes.' },
    { title: 'Extensive NPM Ecosystem', description: 'JavaScript\'s vast NPM ecosystem provides access to millions of packages and modules, accelerating development with pre-built solutions and enabling rapid integration of complex functionalities.' },
    { title: 'Cross-Platform Development', description: 'JavaScript enables cross-platform development for web, mobile, and desktop applications using frameworks like React Native, Electron, and Node.js, maximizing code reusability and development efficiency.' },
    { title: 'V8 Engine Performance', description: 'JavaScript\'s V8 engine provides exceptional performance through just-in-time compilation and advanced optimization techniques, ensuring fast execution and responsive applications even with complex operations.' },
    { title: 'Prototypal Inheritance', description: 'JavaScript\'s prototypal inheritance model offers flexible object creation and extension patterns, enabling dynamic behavior modification and efficient memory usage for scalable application architectures.' },
    { title: 'Modern ES6+ Features', description: 'JavaScript\'s modern ES6+ features including modules, classes, arrow functions, and destructuring enhance code readability, maintainability, and developer productivity while ensuring robust application development.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'Full-Stack JavaScript Development',
        description: 'Alpixn Technologies delivers comprehensive full-stack JavaScript solutions using modern frameworks like React, Angular, and Node.js. Our expert developers create seamless end-to-end applications with optimal performance and user experience.'
    },
    {
        image: serviceImg2,
        title: 'JavaScript Frontend Development',
        description: 'We specialize in creating dynamic, responsive frontend applications using cutting-edge JavaScript frameworks. Our developers build intuitive user interfaces that provide exceptional user experiences across all devices and platforms.'
    },
    {
        image: serviceImg3,
        title: 'JavaScript Backend Development',
        description: 'Our JavaScript backend development services leverage Node.js and Express.js to build scalable, high-performance server-side applications. We create robust APIs and microservices architectures for enterprise-grade solutions.'
    },
    {
        image: serviceImg4,
        title: 'Single Page Applications (SPA)',
        description: 'Alpixn Technologies creates lightning-fast single page applications using React, Angular, and Vue.js. Our SPAs deliver seamless user experiences with dynamic content loading and smooth navigation without page refreshes.'
    },
    {
        image: serviceImg5,
        title: 'Progressive Web Apps (PWA)',
        description: 'We develop progressive web applications that combine the best of web and mobile experiences. Our PWAs work offline, load instantly, and provide native app-like functionality across all devices and platforms.'
    },
    {
        image: serviceImg6,
        title: 'Custom JavaScript Solutions',
        description: 'Our custom JavaScript development services create tailored solutions that meet your specific business requirements. We build innovative features and functionalities that give your applications a competitive edge in the market.'
    },
    {
        image: serviceImg7,
        title: 'JavaScript API Development',
        description: 'We specialize in creating robust, scalable APIs using JavaScript technologies. Our developers build RESTful and GraphQL APIs that enable seamless data exchange and integration between different systems and applications.'
    },
    {
        image: serviceImg8,
        title: 'JavaScript Migration Services',
        description: 'Our JavaScript migration services help modernize your legacy applications. We seamlessly migrate your existing systems to modern JavaScript frameworks while preserving functionality and improving performance.'
    },
    {
        image: serviceImg9,
        title: 'JavaScript Performance Optimization',
        description: 'We provide comprehensive JavaScript performance optimization services, including code splitting, lazy loading, and bundle optimization to ensure your applications run efficiently and provide excellent user experiences.'
    },
];

const ServiceCard = ({ image, title, description }) => (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
        <img src={image} alt={title} className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-yellow-400 mb-3">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
    </div>
);

const Feature = ({ title, description }) => (
    <div className="text-left">
        <h3 className="text-xl font-semibold text-yellow-400 mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </div>
);

const FeatureCard = ({ text }) => (
    <div className="flex items-start gap-2">
        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 shrink-0"></div>
        <p className="text-gray-300 text-sm">{text}</p>
    </div>
);

const ProficiencyCard = ({ title, description }) => (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
        <h3 className="text-lg font-semibold text-yellow-400 mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </div>
);

const TechStackItem = ({ name, logo }) => (
    <div className="flex flex-col items-center">
        <img src={logo} alt={name} className="w-16 h-16 mb-2" />
        <p className="text-white text-sm font-medium">{name}</p>
    </div>
);

const StatItem = ({ value, label }) => (
    <div className="text-center">
        <p className="text-4xl font-bold text-yellow-400">{value}</p>
        <p className="text-gray-300 mt-2">{label}</p>
    </div>
);

const AwardItem = ({ image, text }) => (
    <div className="text-center">
        <img src={image} alt={text} className="h-16 mx-auto mb-4" />
        <p className="text-sm">{text}</p>
    </div>
);

const EngagementCard = ({ title, description, points }) => (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-yellow-400 mb-4">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>
        <ul className="space-y-2">
            {points.map((point, index) => (
                <li key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{point}</span>
                </li>
            ))}
        </ul>
    </div>
);

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-700 rounded-lg">
            <button
                className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-900 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-white">{question}</span>
                <svg
                    className={`w-5 h-5 text-yellow-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="px-4 pb-4">
                    <p className="text-gray-300">{answer}</p>
                </div>
            )}
        </div>
    );
};

const JavaScriptPage = () => {
  return (
    <div className="bg-[#00070E] text-white overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">
                Trusted <span className="text-yellow-400">JavaScript</span><br />
                Development Company
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Delivering Future-Ready Applications with JavaScript Proficiency
              </p>
              <p className="mt-4 text-lg text-gray-400">
                Dreaming about the perfect JavaScript application? Build it with Alpixn Technologies. With 14+ years of extensive experience and ISO certification, our expert JavaScript programmers deliver seamless, cutting-edge solutions that exceed expectations.
              </p>
              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <button className="bg-yellow-500 text-black font-bold py-3 px-6 rounded-md hover:bg-yellow-600 transition duration-300">
                  Get Started
                </button>
                <button className="border border-yellow-500 text-yellow-500 font-bold py-3 px-6 rounded-md hover:bg-yellow-500 hover:text-black transition duration-300">
                  Book a call with our expert
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img src={pythonLogo} alt="JavaScript" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              JavaScript Experts, Handpicked by Innovators
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
                Challenges We'll Assist You Resolve with Our JavaScript Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard image={seamlessMicroservices} title="Code Minification and Bundling" description="We employ advanced tools and techniques for efficient JavaScript code minification and bundling, such as variable name shortening, whitespace removal, and comment removal, maintaining functionality while improving application performance." />
                <ServiceCard image={singleThreaded} title="Handling Concurrency and Race Conditions" description="We employ robust strategies, such as locks and mutexes, semaphores, condition variables, and atomic operations, to handle concurrency and prevent race conditions, guaranteeing consistent, error-free behavior in your applications." />
                <ServiceCard image={codeQuality} title="Efficient Cross-Module Communication" description="We streamline cross-module communication by employing advanced methodologies and patterns, such as module systems and service layers, facilitating effortless data interchange and interaction between various components." />
                <ServiceCard image={memoryLeak} title="Complex Legacy Code Refactoring" description="Our best JavaScript developers hold great expertise in legacy code refactoring, modernizing the codebase, and enhancing maintainability, scalability, and overall performance to meet current standards and agile practices." />
            </div>
        </div>

        <div className="bg-yellow-500 py-6 my-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0 text-black">Transform Your Business with Our Bespoke JavaScript Development</h2>
                <button className="bg-white text-yellow-600 font-bold py-2 px-4 rounded-md flex items-center hover:bg-gray-200 transition duration-300 shrink-0">
                Connect With Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </button>
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-8">
                Drive Innovation with Our High-Octane JavaScript Development Services
            </h2>
            <img src={pythonExpert} alt="Expert JavaScript Development" className="w-96 h-auto rounded-lg shadow-lg mb-12 mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <Feature
                title="Advanced Security Protocols"
                description="Our JS development company integrates advanced security protocols, such as SFTP, SSH, TLS, and SSL, into your JavaScript applications, safeguarding against vulnerabilities and ensuring robust protection from emerging threats."
                />
                <Feature
                title="Innovative Cost-Optimization Strategies"
                description="Leverage our innovative cost-optimization strategies to streamline your JavaScript projects, enhancing resource allocation and achieving maximum value without compromising quality or performance."
                />
                <Feature
                title="Enhanced Development Agility"
                description="Our best JavaScript developers use agile approaches, which shorten development cycles and quickly adjust to changing needs. This guarantees prompt and flexible solutions for your projects."
                />
                <Feature
                title="Comprehensive Knowledge Transfer"
                description="We facilitate comprehensive knowledge transfer, equipping your team with critical insights and best practices from our expert frontend developers, ensuring smooth transitions and sustained application excellence."
                />
            </div>

            <p className="text-center mt-12 text-gray-400 text-lg">
                Have a question? <a href="#" className="text-yellow-400 font-semibold hover:underline">Speak to an expert</a>
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                Innovate and Succeed with Our Advanced JavaScript Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {developmentServices.map((service, index) => (
                    <div key={index} className="bg-[#0D1A2B] p-8 rounded-lg border border-gray-800 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={service.image} alt={service.title} className="h-24 mb-6 self-start" />
                        <h3 className="text-xl font-semibold text-yellow-400 mb-4">{service.title}</h3>
                        <p className="text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">JavaScript Mastery: Demonstrated by Our Elite Team</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    At Alpixn Technologies, our JavaScript programmers are pioneers in building sophisticated solutions, combining their extensive experience with state-of-the-art tools to spur creativity. Being the best JavaScript development company, we deliver exceptional, customized applications with unparalleled accuracy, establishing new standards for excellence in the tech industry.
                </p>
            </div>

            <div className="bg-[#2a2a2e] rounded-xl shadow-lg p-8">
                <div className="flex justify-around items-center flex-wrap gap-8 border-b border-gray-600 pb-8 mb-8">
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
                            <FeatureCard text="React-based solutions ensure responsive and intuitive user interface design" />
                            <FeatureCard text="Robust data security measures implemented for a secure and future-proof solution" />
                        </div>
                        <p className="text-gray-400 mb-6">
                            Alpixn Technologies partnered with Patra Corporation to develop a secure cloud-based certificate vault using JavaScript technologies, enabling instant access to financial documents, streamlining processes, enhancing the customer experience, and reducing costs. This results in a successful partnership with repeat business.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-gray-600 pt-4">
                            <div className="flex items-center gap-4">
                                <img src={usFlag} alt="US Flag" className="w-8 h-8" />
                                <span className="text-gray-400">US | JAVASCRIPT | REACT</span>
                            </div>
                            <a href="#" className="flex items-center text-yellow-400 font-semibold hover:underline">
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
                <h2 className="text-4xl font-bold mt-2">Why is <span className="text-yellow-400">JavaScript</span> the Go-To Choice for Building Scalable Applications?</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    JavaScript's versatile architecture, extensive ecosystem, and powerful frameworks make it the perfect language for scalable projects. Its dynamic nature and comprehensive library support enable rapid development, making it ideal for both startups and large enterprises aiming for efficient and maintainable solutions.
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
                    Technology Stack We Use For JavaScript Development
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
                        At Alpixn Technologies, we offer three flexible JavaScript engagement models to suit your project needs: Dedicated Team for full-time, integrated support; Staff Augmentation to boost your current team with our experts; and Project-Based for tailored goal-focused solutions. We deliver the perfect mix of flexibility and expertise to drive your success.
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

export default JavaScriptPage;