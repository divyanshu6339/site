import React, { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

import pythonLogo from '../Assets/Salesforce1.png';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import pythonExpert from '../Assets/salesforce2.webp';
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
        question: 'What are the benefits of outsourcing Salesforce development to an offshore team?',
        answer: 'Outsourcing Salesforce development to an offshore team offers several advantages, including significant cost savings, access to specialized skills, and faster time-to-market. By tapping into a global talent pool, businesses can enjoy enhanced flexibility, efficiency, and reduced overhead.'
    },
    {
        question: 'What\'s the future of Salesforce development?',
        answer: 'The future of Salesforce development is centered around deeper AI integration, automation, and real-time data analytics. As Salesforce evolves, it will enable personalized customer experiences, predictive insights, and more intelligent business operations.'
    },
    {
        question: 'How long does a typical Salesforce development project take?',
        answer: 'The duration of a Salesforce development project varies based on complexity, with typical projects taking from a few weeks to several months. Defined goals and clear milestones help keep the development process efficient and on track.'
    },
    {
        question: 'What makes your Salesforce development company different from others?',
        answer: 'Leading Salesforce development companies distinguish themselves through customized solutions, in-depth expertise, and commitment to long-term client success. They focus on seamless integration, robust security, and ongoing support.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "Our Dedicated Team model integrates a committed group of Salesforce experts into your business, delivering focused, high-quality solutions while ensuring alignment with your objectives. Enjoy consistent results and effortless collaboration.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "With Team Augmentation, we seamlessly incorporate highly skilled Salesforce experts into your existing team to fill critical skills gaps, ramp up capacity, and scale quickly while maintaining your project's momentum.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "Our Project-Based model offers comprehensive solutions for specific, time-sensitive projects. From inception to completion, we manage everything, ensuring timely delivery within budget and total peace of mind.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'Trailhead', logo: jestLogo },
    { name: 'Visualforce', logo: mongooseLogo },
    { name: 'CRM', logo: nestJsLogo },
    { name: 'Apex', logo: sequelizeLogo },
    { name: 'JAX', logo: socketIoLogo },
    { name: 'Marketing', logo: typescriptLogo },
    { name: 'Lightning', logo: webpackLogo },
    { name: 'Heroku', logo: eslintLogo },
    { name: 'Einstein', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'AI with Einstein', description: 'Leverage Salesforce Einstein AI to obtain predictive insights and automate decisions, fostering innovation and data-driven growth across all business functions.' },
    { title: 'Lightning Framework', description: "The Salesforce Lightning Framework offers a modern, intuitive UI, that boosts productivity and streamlines user experiences, enabling your team to work more efficiently." },
    { title: 'AppExchange Extensions', description: 'AppExchange provides access to numerous pre-built apps and extensions, facilitating easy integration and customization to strengthen your Salesforce capabilities without reinventing the wheel.' },
    { title: 'Sandbox Testing', description: 'Sandbox Testing allows safe experimentation with new features and configurations, ensuring your customizations function perfectly before live deployment, thus reducing risk and optimizing performance.' },
    { title: 'Community Cloud', description: 'Salesforce Community Cloud connects customers, partners, and employees in real time, promoting collaboration and strengthening relationships to accelerate business success through shared knowledge.' },
    { title: 'Salesforce Chatter', description: 'Salesforce Chatter improves internal communication, enabling teams to collaborate seamlessly in real-time, augment knowledge sharing, and increase organizational agility in executing strategies.' },
    { title: 'Lightning Web Components', description: 'Create custom, lightning-fast web apps with Salesforce\'s Lightning Web Components, providing better performance, reusable code, and a seamless user experience across desktop and mobile platforms.' },
    { title: 'User Permissions', description: 'User Permissions in Salesforce allow for precise control over data access, ensuring sensitive information remains safe and secure while users have access only to relevant data for informed and effective decision-making.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'Salesforce Custom Development',
        description: 'At Alpixn Technologies, we don\'t just create solutions—we design personalized experiences. Our Salesforce custom development amplifies your business operations, providing intuitive and scalable solutions that adapt as your business grows.'
    },
    {
        image: serviceImg2,
        title: 'Salesforce App Development',
        description: 'Your business requires apps that exceed basic functionality. Our Salesforce app development approach goes beyond the basics—creating applications that empower your team, improve user experience, and drive efficiencies.'
    },
    {
        image: serviceImg3,
        title: 'Salesforce Managed Services',
        description: 'Imagine having peace of mind regarding your Salesforce environment. Our Salesforce managed services provide a comprehensive, 360° strategy— optimizing performance, anticipating challenges, and ensuring your platform is always primed.'
    },
    {
        image: serviceImg4,
        title: 'Salesforce Integration',
        description: 'We bridge the gaps that keep your systems disconnected. Our Salesforce integration services enable seamless communication between your systems, ensuring real-time data flow, quicker decision-making, and a cohesive user experience.'
    },
    {
        image: serviceImg5,
        title: 'AppExchange Product Development',
        description: 'Through AppExchange product development, we equip you with tools to stand out in the Salesforce ecosystem. We design and build products that address specific business challenges, expand your market reach, and strengthen your platform.'
    },
    {
        image: serviceImg6,
        title: 'Salesforce CRM Development Services',
        description: 'Eliminate isolated customer data. Our Salesforce CRM development creates a centralized hub for all customer interactions, enabling faster and smarter decision-making while transforming how you efficiently manage customer relationships.'
    },
    {
        image: serviceImg7,
        title: 'Salesforce Lightning Development',
        description: 'We harness the power of Salesforce Lightning to create a dynamic, intuitive user interface that makes working with Salesforce feel effortless. Experience the speed, flexibility, and scalability that foster innovation.'
    },
    {
        image: serviceImg8,
        title: 'Security & Compliance Solutions',
        description: 'Safeguard your most valuable asset—your data. Our Salesforce security & compliance solutions implement next-gen protection against risks, ensure regulatory adherence, and build customer trust while keeping your business ahead of potential threats.'
    },
    {
        image: serviceImg9,
        title: 'Salesforce Support & Maintenance',
        description: 'Ensure smooth operations at all times. Our Salesforce support & maintenance services ensure that your Salesforce environment constantly evolves to meet new challenges with proactive updates, real-time troubleshooting, and ongoing enhancements.'
    },
];

// Component definitions
const ServiceCard = ({ image, title, description }) => (
    <div className="bg-[#1E3A8A] p-6 rounded-lg border border-blue-600 text-center">
        <img src={image} alt={title} className="w-20 h-20 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-blue-200 mb-3">{title}</h3>
        <p className="text-blue-100 text-sm">{description}</p>
    </div>
);

const Feature = ({ title, description }) => (
    <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-300 mb-3">{title}</h3>
        <p className="text-blue-100 leading-relaxed">{description}</p>
    </div>
);

const FeatureCard = ({ text }) => (
    <div className="bg-[#1E3A8A] p-4 rounded-lg border border-blue-600">
        <p className="text-blue-100 text-sm">{text}</p>
    </div>
);

const ProficiencyCard = ({ title, description }) => (
    <div className="bg-[#1E3A8A] p-8 rounded-lg border border-blue-600 text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h3 className="text-xl font-semibold text-blue-200 mb-4">{title}</h3>
        <p className="text-blue-100">{description}</p>
    </div>
);

const TechStackItem = ({ name, logo }) => (
    <div className="flex flex-col items-center">
        <img src={logo} alt={name} className="w-16 h-16 mb-3" />
        <span className="text-white font-medium">{name}</span>
    </div>
);

const StatItem = ({ value, label }) => (
    <div className="text-center">
        <div className="text-4xl font-bold text-blue-300">{value}</div>
        <div className="text-blue-100 mt-2">{label}</div>
    </div>
);

const AwardItem = ({ image, text }) => (
    <div className="text-center">
        <img src={image} alt="Award" className="h-16 mx-auto mb-4" />
        <p className="text-blue-100">{text}</p>
    </div>
);

const EngagementCard = ({ title, description, points }) => (
    <div className="bg-[#1E3A8A] p-8 rounded-lg border border-blue-600">
        <h3 className="text-2xl font-semibold text-blue-200 mb-4">{title}</h3>
        <p className="text-blue-100 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-2">
            {points.map((point, index) => (
                <li key={index} className="flex items-center text-blue-100">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {point}
                </li>
            ))}
        </ul>
    </div>
);

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-blue-600 rounded-lg">
            <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-[#1E3A8A] hover:bg-[#2563EB] transition-colors duration-200"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold text-blue-200">{question}</span>
                <svg
                    className={`w-5 h-5 text-blue-300 transform transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="px-6 py-4 bg-[#0F172A]">
                    <p className="text-blue-100">{answer}</p>
                </div>
            )}
        </div>
    );
};

const SalesforcePage = () => {
    return (
        <div className="bg-[#0C1E3E] text-white overflow-x-hidden">
            <Header />
            <div className="pt-20">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold">
                                Best <span className="text-blue-400">Salesforce</span><br />
                                Development Company
                            </h1>
                            <p className="mt-4 text-xl text-blue-200">
                                Optimize Your Processes and Drive Results with Premier Salesforce Customization Services
                            </p>
                            <p className="mt-4 text-lg text-blue-200">
                                At Alpixn Technologies, we don't just serve as a Salesforce customization company – we engineer breakthroughs. Our vetted team redefines CRM by uncovering hidden potential, simplifying intricate processes, and transforming your business into an efficient powerhouse.
                            </p>
                            <div className="mt-8 flex justify-center md:justify-start space-x-4">
                                <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300">
                                    Get Started
                                </button>
                                <button className="border border-blue-500 text-blue-400 font-bold py-3 px-6 rounded-md hover:bg-blue-500 hover:text-white transition duration-300">
                                    Book a call with our expert
                                </button>
                            </div>
                        </div>
                        <div className="md:w-1/2 mt-10 md:mt-0">
                            <img src={pythonLogo} alt="Salesforce" className="w-full h-auto" />
                        </div>
                    </div>
                </div>

                <div className="bg-blue-100 py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-semibold text-center text-blue-900">
                            Certified Salesforce Partner, Empowering Leaders Everywhere
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
                        Challenges We'll Assist You Resolve with Our Salesforce Development Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ServiceCard image={seamlessMicroservices} title="Complex Business Process Automation" description="Automating layered business workflows in Salesforce can be daunting. At Alpixn Technologies, we design intelligent automation that simplifies complexity, driving efficiency and cross-functional alignment with precision." />
                        <ServiceCard image={singleThreaded} title="Performance & Scalability" description="Salesforce performance tends to slow as data and users increase. We specialize in building scalable, high-performing architectures that keep your system fast, responsive and ready to grow." />
                        <ServiceCard image={codeQuality} title="User Experience Optimization" description="Salesforce adoption is hindered by clunky interfaces and poor UX. We lead the way in crafting intuitive, user-friendly experiences that improve usability, fostering higher user adoption and productivity across all levels." />
                        <ServiceCard image={memoryLeak} title="Data Governance & Compliance" description="Maintaining data integrity and meeting regulatory standards in Salesforce is critical—and complex. We excel in architecting tailored governance frameworks that protect data while maintaining compliance across industries." />
                    </div>
                </div>

                <div className="bg-blue-600 py-6 my-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                        <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0">Transform Your Business with Our Custom Salesforce Development Services</h2>
                        <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-md flex items-center hover:bg-blue-50 transition duration-300 shrink-0">
                            Connect With Us
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-8">
                        Achieve More with Our Salesforce Development Services
                    </h2>
                    <img src={pythonExpert} alt="Salesforce Development Excellence" className="w-96 h-auto rounded-lg shadow-lg mb-12 mx-auto" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <Feature
                            title="Global Compliance Adherence"
                            description="As a leading Salesforce consulting firm, we ensure your solutions align effortlessly with global compliance standards, minimizing legal risks and facilitating smooth international expansion with robust governance frameworks."
                        />
                        <Feature
                            title="Flexible Deployment Options"
                            description="Whether you need cloud, hybrid, or on-premise solutions, our Salesforce custom app development services provide exceptional flexibility, adapting seamlessly to your changing business needs and infrastructure requirements."
                        />
                        <Feature
                            title="Enhanced User Adoption"
                            description="Our Salesforce experts create intuitive, tailored experiences that simplify adoption. We facilitate smooth onboarding, empowering your team to embrace Salesforce quickly and enthusiastically with comprehensive training and support."
                        />
                        <Feature
                            title="Advanced Security Measures"
                            description="We go beyond basic security. Our Salesforce development company incorporates advanced, multi-layered security protocols to safeguard sensitive data, allowing you to focus on growth, not vulnerabilities."
                        />
                    </div>

                    <p className="text-center mt-12 text-blue-200 text-lg">
                        Have a question? <a href="#" className="text-blue-400 font-semibold hover:underline">Speak to an expert</a>
                    </p>
                </div>

                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Custom Salesforce Development Services, Built for Your Business
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {developmentServices.map((service, index) => (
                            <div key={index} className="bg-[#1E3A8A] p-8 rounded-lg border border-blue-600 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
                                <img src={service.image} alt={service.title} className="h-24 mb-6 self-start" />
                                <h3 className="text-xl font-semibold text-blue-300 mb-4">{service.title}</h3>
                                <p className="text-blue-100">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold">Salesforce Excellence: Code, Optimize, Succeed</h2>
                        <p className="mt-4 text-lg text-blue-200 max-w-4xl mx-auto">
                            Our Salesforce developers are more than just programmers; they are innovation architects. With exceptional expertise, they create solutions that simplify complex challenges into efficient workflows, promoting scalability and sustained growth. Hire Salesforce developers to unlock the full potential of your business and secure a lasting competitive advantage.
                        </p>
                    </div>

                    <div className="bg-[#2D4A6B] rounded-xl shadow-lg p-8">
                        <div className="flex justify-around items-center flex-wrap gap-8 border-b border-blue-600 pb-8 mb-8">
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
                                <h3 className="text-2xl font-bold text-blue-100 mb-4">State-Of-The-Art Cloud-Based Certificate Vault, Crafting Secure, Efficient, and User-Centered Digital Solutions</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    <FeatureCard text="Comprehensive analysis to assess web application functionalities and architecture" />
                                    <FeatureCard text="Highly secure platform enabling seamless certificate upload and access, enhancing UX" />
                                    <FeatureCard text="Blockchain-based solutions ensure the integrity and verification of uploaded certificates" />
                                    <FeatureCard text="Robust data security measures implemented for a secure and future-proof solution" />
                                </div>
                                <p className="text-blue-100 mb-6">
                                    Alpixn Technologies partnered with Patra Corporation to develop a secure cloud-based certificate vault, enabling instant access to financial documents, streamlining processes, enhancing the customer experience, and reducing costs. This results in a successful partnership with repeat business.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-blue-600 pt-4">
                                    <div className="flex items-center gap-4">
                                        <img src={usFlag} alt="US Flag" className="w-8 h-8" />
                                        <span className="text-blue-200">US | SALESFORCE | CRM</span>
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
                <h2 className="text-4xl font-bold mt-2">Why is <span className="text-green-400">Salesforce</span> the Go-To Choice for Building Scalable Applications?</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Salesforce's simple architecture, adaptability, and large library ecosystem make it the perfect language for scalable projects. Its strong frameworks and simple syntax enable rapid development, which qualifies for both startups and large enterprises aiming for efficient and maintainable solutions.
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
                    Technology Stack We Use For Salesforce Development
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
                        At Alpixn Technologies, we offer three flexible Salesforce engagement models to suit your project needs: Dedicated Team for full-time, integrated support; Staff Augmentation to boost your current team with our experts; and Project-Based for tailored goal-focused solutions. We deliver the perfect mix of flexibility and expertise to drive your success.
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

export default SalesforcePage;