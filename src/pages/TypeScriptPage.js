import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

// Using the same images from the Python page
import typescriptLogo from '../Assets/typescript1.webp';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import typescriptExpert from '../Assets/typescript2.webp';
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
import typescriptLogoTech from '../Assets/13.6.png';
import webpackLogo from '../Assets/13.7.png';
import eslintLogo from '../Assets/13.8.png';
import jqueryLogo from '../Assets/13.9.png';
import lodasLogo from '../Assets/13.10.png';
import clutchLogo from '../Assets/14.1.png';
import isoLogo from '../Assets/14.2.png';
import goodfirmsLogo from '../Assets/14.3.png';

const faqs = [
    {
        question: 'Can I obtain an estimate of the cost of TypeScript development?',
        answer: 'To obtain an accurate estimate for TypeScript development services, connect with specialized companies like Alpixn Technologies. Costs will vary based on project scope, complexity, features, and team location. Providing detailed specifications will help ensure you get precise quotes.'
    },
    {
        question: 'How do I select the most esteemed TypeScript app development company?',
        answer: 'When choosing a TypeScript app development company, evaluating their experience, portfolio, and client feedback is essential. Look for firms with a proven track record of successful projects. Assess their technical expertise and communication style to align with your project objectives.'
    },
    {
        question: 'When outsourcing TypeScript development, what are some of the most important factors to consider?',
        answer: 'When outsourcing TypeScript development, prioritize technical skills in TypeScript and associated technologies. Understand their development process, including planning, execution, and testing. Additionally, inquire about their post-launch support and maintenance services.'
    },
    {
        question: 'What sorts of initiatives or industry sectors are particularly well-suited for TypeScript?',
        answer: 'TypeScript provides significant benefits across various sectors. In enterprise applications, it ensures maintainability and scalability. The healthcare sector capitalizes on its capacity to oversee sensitive data and compliance. In finance and fintech, it offers essential reliability and security.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "With our Dedicated Team model, we become an integral extension of your organization, fostering seamless collaboration. This approach ensures a consistent pool of TypeScript experts who work closely with your in-house team, making it ideal for long-term projects.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "The Team Augmentation model is tailored for businesses seeking additional support for their existing teams. By hiring top TypeScript developers through this model, you can swiftly boost your capabilities and maintain project timelines without the long-term commitment.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "Our Project-Based model is perfect for initiatives with defined objectives and timelines. By engaging our TypeScript experts, you can access tailored TypeScript development services that align closely with your specific goals- allowing you to achieve the results you envision.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'Angular', logo: jestLogo },
    { name: 'React', logo: mongooseLogo },
    { name: 'Vue', logo: nestJsLogo },
    { name: 'Node', logo: sequelizeLogo },
    { name: 'ESLint', logo: eslintLogo },
    { name: 'TypeORM', logo: typescriptLogoTech },
    { name: 'Nest Js', logo: webpackLogo },
    { name: 'WebPack', logo: socketIoLogo },
    { name: 'Jest', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'Compile-Time Type Safety', description: 'TypeScript enforces type constraints at compile time. Allowing frontend developers to catch runtime errors early and enhance application reliability by flagging issues before execution.' },
    { title: 'Structural Typing System', description: "TypeScript's structural typing system matches types based on shape, improving flexibility, code reuse, and adaptability by allowing compatible structures to be used interchangeably." },
    { title: 'Advanced Type System', description: 'TypeScript\'s advanced type system supports union, intersection, and mapped types, promoting better code organization and reusability by combining and transforming existing types.' },
    { title: 'Type Inference Mechanism', description: 'TypeScript employs an inference system that automatically detects variable types, ensuring cleaner code by eliminating the need for explicit type annotations while maintaining type safety.' },
    { title: 'Type Guards and Conditional Types', description: 'TypeScript\'s type guards and conditional types, dynamically check and define types, ensuring cleaner, more maintainable code that effectively manages complexity at runtime.' },
    { title: 'Namespace and Module Resolution', description: 'TypeScript supports namespaces and ES6 modules for structured codebase, enabling easy import and export of components across files- managing larger applications effortlessly.' },
    { title: 'Decorators and Reflection Metadata', description: 'TypeScript decorators enhance classes and methods, enabling functionality modification and dependency injection, facilitating design patterns to enhance the application\'s architecture.' },
    { title: 'Strict Compiler Options', description: 'TypeScript strict compiler options like `–strictNullChecks` and `–noImplicitAny,` enforce rigorous checks, reducing errors and guaranteeing more reliable, stable, and maintainable code.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'Custom TypeScript App Development',
        description: 'At Alpixn Technologies, our custom TypeScript app development services focus on creating solutions tailored to your needs. We harness TypeScript\'s robust features to build scalable applications that enhance efficiency and foster growth.'
    },
    {
        image: serviceImg2,
        title: 'TypeScript Web App Development',
        description: 'Our TypeScript web development company excels in building high-performance web applications prioritizing speed and scalability. We leverage TypeScript\'s strong typing to optimize maintainability, allowing for seamless updates and fewer bugs.'
    },
    {
        image: serviceImg3,
        title: 'Enterprise App Development',
        description: 'At Alpixn Technologies, we excel in enterprise app development, leveraging TypeScript\'s strengths to create secure, adaptable solutions. We implement advanced security protocols, ensuring data integrity while streamlining operations for enhanced productivity.'
    },
    {
        image: serviceImg4,
        title: 'Custom Plugin and Library Development',
        description: 'Our team develops custom plugins and libraries that integrate seamlessly with your existing systems. We prioritize user experience and performance, ensuring these solutions deliver real value and help your application stand apart in a competitive landscape.'
    },
    {
        image: serviceImg5,
        title: 'TypeScript API Development',
        description: 'Our TypeScript API development services deliver robust solutions designed for seamless data exchange. By focusing on performance and security, we ensure your APIs are reliable and easy to integrate, improving overall application functionality and elevating your system.'
    },
    {
        image: serviceImg6,
        title: 'Cross-Platform Mobile App Development',
        description: 'Our TypeScript mobile app development services create cross-platform applications that provide a seamless and consistent user experience. By harnessing TypeScript\'s versatility, we ensure your apps perform flawlessly, allowing you to engage a broader audience.'
    },
    {
        image: serviceImg7,
        title: 'TypeScript UI/UX Development',
        description: 'At our TypeScript web app development company, we prioritize intuitive UI/UX design to create visually appealing interfaces that elevate user satisfaction. Creating engaging experiences, we help increase retention rates and build lasting loyalty.'
    },
    {
        image: serviceImg8,
        title: 'TypeScript Code Review and Refactoring',
        description: 'Our expert code review and refactoring services ensure your TypeScript applications are optimized for performance. We thoroughly analyze your codebase, identifying areas for improvement to enhance overall efficiency and ensure seamless operation.'
    },
    {
        image: serviceImg9,
        title: 'Testing and Quality Assurance',
        description: 'Our comprehensive TypeScript testing and quality assurance services ensure that your applications meet the highest standards of quality and performance. We detect issues early through advanced testing methodologies, ensuring a flawless application launch.'
    },
];

// Service Card Component
const ServiceCard = ({ image, title, description }) => (
    <div className="bg-[#0A1B2E] p-6 rounded-lg border border-blue-800 text-center">
        <img src={image} alt={title} className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-blue-400 mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

// Feature Component
const Feature = ({ title, description }) => (
    <div className="text-left">
        <h3 className="text-xl font-semibold text-blue-400 mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

// Feature Card Component
const FeatureCard = ({ text }) => (
    <div className="bg-[#0A1B2E] p-4 rounded-lg border border-blue-800">
        <p className="text-gray-300 text-sm">{text}</p>
    </div>
);

// Proficiency Card Component
const ProficiencyCard = ({ title, description }) => (
    <div className="bg-[#0A1B2E] p-6 rounded-lg border border-blue-800 text-center">
        <h3 className="text-lg font-semibold text-blue-400 mb-3">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

// Tech Stack Item Component
const TechStackItem = ({ name, logo }) => (
    <div className="flex flex-col items-center">
        <div className="bg-white p-4 rounded-lg shadow-lg mb-3">
            <img src={logo} alt={name} className="w-12 h-12" />
        </div>
        <span className="text-white font-medium">{name}</span>
    </div>
);

// Stat Item Component
const StatItem = ({ value, label }) => (
    <div className="text-center">
        <div className="text-4xl font-bold text-blue-400 mb-2">{value}</div>
        <div className="text-gray-400">{label}</div>
    </div>
);

// Award Item Component
const AwardItem = ({ image, text }) => (
    <div className="text-center">
        <img src={image} alt={text} className="h-16 mx-auto mb-3" />
        <p className="text-sm">{text}</p>
    </div>
);

// Engagement Card Component
const EngagementCard = ({ title, description, points }) => (
    <div className="bg-[#0A1B2E] p-8 rounded-lg border border-blue-800">
        <h3 className="text-2xl font-bold text-blue-400 mb-4">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <ul className="space-y-2">
            {points.map((point, index) => (
                <li key={index} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {point}
                </li>
            ))}
        </ul>
    </div>
);

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-blue-800">
            <button
                className="w-full py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium text-white">{question}</span>
                <svg
                    className={`w-5 h-5 text-blue-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="pb-4">
                    <p className="text-gray-400">{answer}</p>
                </div>
            )}
        </div>
    );
};

const TypeScriptPage = () => {
    return (
        <div className="bg-[#001122] text-white overflow-x-hidden">
            <Header />
            <div className="pt-20">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold">
                                Premier <span className="text-blue-400">TypeScript</span><br />
                                Development Company
                            </h1>
                            <p className="mt-4 text-xl text-gray-400">
                                Transform Your Development Journey with Top-Notch TypeScript Expertise!
                            </p>
                            <p className="mt-4 text-lg text-gray-400">
                                At Alpixn Technologies, a top-tier TypeScript development company, we excel in delivering tailored TypeScript development services. By harnessing TypeScript's robust type-checking and scalability features, we ensure your projects are error-free, maintainable, and future-ready.
                            </p>
                            <div className="mt-8 flex justify-center md:justify-start space-x-4">
                                <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300">
                                    Get Started
                                </button>
                                <button className="border border-blue-500 text-blue-500 font-bold py-3 px-6 rounded-md hover:bg-blue-500 hover:text-white transition duration-300">
                                    Book a call with our expert
                                </button>
                            </div>
                        </div>
                        <div className="md:w-1/2 mt-10 md:mt-0">
                            <img src={typescriptLogo} alt="TypeScript" className="w-full h-auto" />
                        </div>
                    </div>
                </div>

                <div className="bg-gray-200 py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-semibold text-center text-gray-800">
                            Chosen by Industry Pioneers!
                        </h2>
                        <div className="mt-8 flex justify-center items-center flex-wrap gap-8">
                            <img src={visaLogo} alt="Microsoft" className="h-12" />
                            <img src={infosysLogo} alt="Google" className="h-12" />
                            <img src={netflixLogo} alt="Slack" className="h-16" />
                            <img src={moglixLogo} alt="Uber" className="h-16" />
                            <img src={relianceLogo} alt="Stripe" className="h-16" />
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Challenges We'll Assist You Resolve with Our TypeScript Development Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ServiceCard 
                            image={seamlessMicroservices} 
                            title="Type Declaration Files" 
                            description="Our TypeScript development services enhance your projects by creating and managing type declaration files, ensuring accurate type definitions, improving type safety, and enhancing maintainability while reducing runtime errors and boosting code quality." 
                        />
                        <ServiceCard 
                            image={singleThreaded} 
                            title="Strict Null Checks" 
                            description="Implementing strict null checks is essential for reliable applications. Our Typescript experts spot potential null-related issues early, preventing runtime errors and ensuring application stability. This approach enhances performance and boosts overall user confidence." 
                        />
                        <ServiceCard 
                            image={codeQuality} 
                            title="Configuration Management" 
                            description="Managing TypeScript configuration effectively is critical for a seamless development experience. We customize configurations to match your project requirements, enhancing operations and boosting efficiency, ultimately accelerating your time to market." 
                        />
                        <ServiceCard 
                            image={memoryLeak} 
                            title="TypeScript Compiler Options" 
                            description="Utilizing advanced TypeScript compiler options is key to maximizing application performance. Our TypeScript development services company provides expert guidance in selecting optimal compiler settings, ensuring thorough error detection and increased reliability." 
                        />
                    </div>
                </div>

                <div className="bg-blue-500 py-6 my-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                        <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0">Transform Your Business with Our Bespoke TypeScript Development</h2>
                        <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded-md flex items-center hover:bg-gray-200 transition duration-300 shrink-0">
                            Connect With Us
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-8">
                        Proven TypeScript Expert Solutions
                    </h2>
                    <img src={typescriptExpert} alt="Expert TypeScript Development" className="w-96 h-auto rounded-lg shadow-lg mb-12 mx-auto" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <Feature
                            title="Elite TypeScript Development Talent"
                            description="When you choose our TypeScript experts, you tap into a team of exceptional talent with extensive expertise. We provide customized TypeScript development services that foster innovation and set your project up for success in a competitive industry."
                        />
                        <Feature
                            title="Transparent Communication Channels"
                            description="We value open dialogue. Our TypeScript development company keeps you informed at every project development stage, ensuring transparency and collaboration. This approach helps build trust and strengthens our partnership, assuring a seamless development experience."
                        />
                        <Feature
                            title="Rigorous Quality Assurance"
                            description="Quality is non-negotiable. Our TypeScript development company ensures rigorous quality assurance, meticulously testing every aspect of your project for seamless operations. This commitment assures that your TypeScript applications are reliable and high-performing."
                        />
                        <Feature
                            title="Proactive Post-Launch Support"
                            description="Our support goes beyond just launching your project. We provide proactive post-launch assistance for all our TypeScript application development services, ensuring your application continues to perform optimally- adapting to evolving business needs and user feedback."
                        />
                    </div>

                    <p className="text-center mt-12 text-gray-400 text-lg">
                        Have a question? <a href="#" className="text-blue-400 font-semibold hover:underline">Speak to an expert</a>
                    </p>
                </div>

                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        End-to-End TypeScript Development Services for Robust Applications!
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {developmentServices.map((service, index) => (
                            <div key={index} className="bg-[#0A1B2E] p-8 rounded-lg border border-blue-800 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
                                <img src={service.image} alt={service.title} className="h-24 mb-6 self-start" />
                                <h3 className="text-xl font-semibold text-blue-400 mb-4">{service.title}</h3>
                                <p className="text-gray-400">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold">Unleash Innovation with Our TypeScript Experts at Your Side!</h2>
                        <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                            When it comes to premier TypeScript experts, Alpixn Technologies is your ultimate destination. Our innovative TypeScript development company features a talented team of certified developers who prioritize efficiency and flexibility, adapting quickly to your needs while integrating your feedback throughout the process.
                        </p>
                    </div>

                    <div className="bg-[#1A2B3E] rounded-xl shadow-lg p-8">
                        <div className="flex justify-around items-center flex-wrap gap-8 border-b border-blue-800 pb-8 mb-8">
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
                                <h3 className="text-2xl font-bold text-gray-200 mb-4">State-Of-The-Art Cloud-Based Certificate Vault. Crafting Secure, Efficient, and User-Centered Digital Solutions</h3>
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
                                <span className="text-gray-400">US | TYPESCRIPT | DATA SCIENCE</span>
                            </div>
                            <a href="#" className="flex items-center text-blue-400 font-semibold hover:underline">
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
                <h2 className="text-4xl font-bold mt-2">Why is <span className="text-green-400">TypeScript</span> the Go-To Choice for Building Scalable Applications?</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    TypeScript's simple architecture, adaptability, and large library ecosystem make it the perfect language for scalable projects. Its strong frameworks and simple syntax enable rapid development, which qualifies for both startups and large enterprises aiming for efficient and maintainable solutions.
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
                    Technology Stack We Use For TypeScript Development
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
                        At Alpixn Technologies, we offer three flexible TypeScript engagement models to suit your project needs: Dedicated Team for full-time, integrated support; Staff Augmentation to boost your current team with our experts; and Project-Based for tailored goal-focused solutions. We deliver the perfect mix of flexibility and expertise to drive your success.
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

export default TypeScriptPage;