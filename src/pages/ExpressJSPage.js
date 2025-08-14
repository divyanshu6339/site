import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

// Using the same images as provided in the Python page
import pythonLogo from '../Assets/express1.webp';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import pythonExpert from '../Assets/Expressjs2.webp';
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
        question: 'What are the typical costs associated with ExpressJS development services?',
        answer: 'The cost of ExpressJS development services depends on the project complexity, requirements, and timeline. We offer personalized price estimates to ensure optimal value for your requirements.'
    },
    {
        question: 'Can I hire ExpressJS developers on a part-time or full-time basis?',
        answer: 'Yes, we provide three engagement models to choose from: dedicated team, team augmentation, and project-based, giving you the flexibility to pick the most suitable one, depending on your requirements.'
    },
    {
        question: 'What testing methodologies do you follow for ExpressJS applications?',
        answer: 'We utilize a range of testing methodologies, including unit testing, integration testing, and automated testing, to ensure the quality and dependability of our ExpressJS applications.'
    },
    {
        question: 'What frameworks and libraries do you use for ExpressJS development?',
        answer: 'We utilize a range of frameworks and libraries, like Mongoose, Passport.js, and JWT, to provide customizable and effective ExpressJS solutions tailored to your project needs.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "We build a bespoke offshore ExpressJS team that integrates seamlessly with your company. This dedicated team of expert ExpressJS developers acts as an extension of your in-house team, providing continuous assistance and producing exceptional, top-notch outcomes throughout the development lifecycle.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "Alpixn Technologies' team augmentation model adopts a meticulous approach to handling risks and optimizing resources. By hiring ExpressJS programmers who fit your project's needs, we ensure timely completion, cost efficiency, and successful goal attainment, enhancing the productivity of your current team.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "We elevate your in-house team by integrating top-tier experts through our premier outsourcing ExpressJS development solutions. This approach enables you to tap into exceptional expertise and specialized abilities for specific ExpressJS projects, ensuring the timely delivery of top-notch, efficient outcomes.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'Node.js', logo: jestLogo },
    { name: 'MongoDB', logo: mongooseLogo },
    { name: 'Passport.js', logo: nestJsLogo },
    { name: 'JWT', logo: sequelizeLogo },
    { name: 'Socket.IO', logo: socketIoLogo },
    { name: 'TypeORM', logo: typescriptLogo },
    { name: 'Nodemon', logo: webpackLogo },
    { name: 'Sequelize', logo: eslintLogo },
    { name: 'Express Route', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'Middleware Support', description: 'ExpressJS robust middleware architecture enables flexible request processing, authentication, logging, and error handling, providing powerful customization capabilities for scalable web applications.' },
    { title: 'RESTful API Development', description: "ExpressJS excels in building RESTful APIs with its simple routing system, supporting HTTP methods and enabling efficient data exchange between client and server applications." },
    { title: 'Template Engine Integration', description: 'ExpressJS seamlessly integrates with various template engines like EJS, Pug, and Handlebars, enabling dynamic content rendering and enhanced user experience in web development.' },
    { title: 'Real-time Communication', description: 'ExpressJS works perfectly with Socket.IO for real-time bidirectional communication, enabling live chat, notifications, and collaborative applications with instant data updates.' },
    { title: 'Database Integration', description: 'ExpressJS offers excellent database connectivity with MongoDB, PostgreSQL, MySQL, and other databases through ORMs like Mongoose and Sequelize, ensuring efficient data management.' },
    { title: 'Security Features', description: 'ExpressJS provides built-in security features including CORS support, helmet middleware, rate limiting, and authentication mechanisms to protect applications from common vulnerabilities.' },
    { title: 'Performance Optimization', description: 'ExpressJS offers compression middleware, caching strategies, and efficient request handling to optimize application performance and reduce server load for better user experience.' },
    { title: 'Testing & Debugging', description: 'ExpressJS supports comprehensive testing frameworks like Mocha, Jest, and Chai, along with powerful debugging tools that streamline development and ensure application reliability.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'ExpressJS Web Application Development',
        description: 'Alpixn Technologies, the industrys best ExpressJS development company, utilizes Node.js and ExpressJS to build high-performing web applications. Our ExpressJS developers guarantee lightning-fast load times and robust features customized to project needs.'
    },
    {
        image: serviceImg2,
        title: 'Custom ExpressJS API Development',
        description: 'We specialize in custom ExpressJS API development, building scalable, high-performance, robust APIs that improve system integration and expedite data exchange. Our dedicated ExpressJS experts ensure seamless connectivity across your applications and services.'
    },
    {
        image: serviceImg3,
        title: 'ExpressJS Real-time Applications',
        description: 'Alpixn Technologies ExpressJS development services deliver exceptional real-time applications using Socket.IO and WebRTC. Our developers build effective real-time apps for chat, collaboration, and live updates, ensuring improved functionality and user experience.'
    },
    {
        image: serviceImg4,
        title: 'ExpressJS E-commerce Development',
        description: 'Alpixn Technologies, a premier ExpressJS software development company, creates robust e-commerce platforms with secure payment integration. Our seasoned ExpressJS programmers convert your vision into powerful online stores, ensuring rich shopping experiences.'
    },
    {
        image: serviceImg5,
        title: 'ExpressJS CMS Development',
        description: 'We offer custom ExpressJS CMS development with powerful content management capabilities. Our developers create robust, flexible, and scalable systems that streamline content management workflows and position your business for long-term growth.'
    },
    {
        image: serviceImg6,
        title: 'Custom ExpressJS Software Development',
        description: 'We specialize in custom ExpressJS development services, crafting solutions that cater to specific business requirements. Our ExpressJS veterans ensure smooth integration, robust functionality, innovative features, and scalability to support your strategic goals.'
    },
    {
        image: serviceImg7,
        title: 'ExpressJS Microservices Architecture',
        description: 'We specialize in ExpressJS microservices architecture, providing scalable, modular solutions that improve flexibility and expedite deployment. Furthermore, our ExpressJS developers assist you in effectively and efficiently handling your expanding needs.'
    },
    {
        image: serviceImg8,
        title: 'ExpressJS DevOps Integration',
        description: 'As a premier ExpressJS development firm, we integrate ExpressJS into your DevOps pipeline, streamlining testing, deployment, and scaling. Our specialists guarantee quicker deployment intervals and reliable efficiency, enhancing your development and operational processes.'
    },
    {
        image: serviceImg9,
        title: 'ExpressJS Performance Optimization',
        description: 'At Alpixn Technologies, we perform in-depth ExpressJS performance optimization to enhance speed and efficiency. Our developers employ advanced optimization techniques, ensuring your applications deliver exceptional performance and user satisfaction.'
    },
];

// Service Card Component
const ServiceCard = ({ image, title, description }) => (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <img src={image} alt={title} className="w-16 h-16 mb-4" />
        <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

// Feature Component
const Feature = ({ title, description }) => (
    <div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

// Feature Card Component
const FeatureCard = ({ text }) => (
    <div className="bg-gray-700 p-4 rounded-lg">
        <p className="text-sm text-gray-300">{text}</p>
    </div>
);

// Proficiency Card Component
const ProficiencyCard = ({ title, description }) => (
    <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-300 mb-3">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

// Tech Stack Item Component
const TechStackItem = ({ name, logo }) => (
    <div className="flex flex-col items-center">
        <img src={logo} alt={name} className="w-16 h-16 mb-3" />
        <span className="text-white text-sm font-medium">{name}</span>
    </div>
);

// Stat Item Component
const StatItem = ({ value, label }) => (
    <div className="text-center">
        <p className="text-4xl font-bold text-gray-300">{value}</p>
        <p className="text-gray-400 mt-2">{label}</p>
    </div>
);

// Award Item Component
const AwardItem = ({ image, text }) => (
    <div className="text-center">
        <img src={image} alt={text} className="h-16 mx-auto mb-4" />
        <p className="text-sm">{text}</p>
    </div>
);

// Engagement Card Component
const EngagementCard = ({ title, description, points }) => (
    <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-300 mb-4">{title}</h3>
        <p className="text-gray-400 mb-6 text-sm">{description}</p>
        <ul className="space-y-2">
            {points.map((point, index) => (
                <li key={index} className="text-gray-400 text-sm flex items-center">
                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
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
        <div className="border border-gray-700 rounded-lg">
            <button
                className="w-full px-6 py-4 text-left bg-gray-800 hover:bg-gray-750 transition-colors duration-200 flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-white font-medium">{question}</span>
                <svg
                    className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
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
                <div className="px-6 py-4 bg-gray-850">
                    <p className="text-gray-400">{answer}</p>
                </div>
            )}
        </div>
    );
};

const ExpressJSPage = () => {
  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">
                Trusted <span className="text-gray-400">ExpressJS</span><br />
                Development Company
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Delivering Future-Ready Applications with ExpressJS Proficiency
              </p>
              <p className="mt-4 text-lg text-gray-400">
                Dreaming about the perfect ExpressJS application? Build it with Alpixn Technologies. With 14+ years of extensive experience and ISO certification, our expert ExpressJS programmers deliver seamless, cutting-edge solutions that exceed expectations.
              </p>
              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <button className="bg-gray-600 text-white font-bold py-3 px-6 rounded-md hover:bg-gray-700 transition duration-300">
                  Get Started
                </button>
                <button className="border border-gray-600 text-gray-400 font-bold py-3 px-6 rounded-md hover:bg-gray-600 hover:text-white transition duration-300">
                  Book a call with our expert
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img src={pythonLogo} alt="ExpressJS" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              ExpressJS Experts, Handpicked by Innovators
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
                Challenges We'll Assist You Resolve with Our ExpressJS Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard image={seamlessMicroservices} title="JWT Authentication Issues" description="JWT authentication can be challenging to implement. Our skilled ExpressJS development company facilitates token management, authenticating user access by providing robust protection for your ExpressJS applications." />
                <ServiceCard image={singleThreaded} title="WebSocket Implementation" description="Establishing real-time communication can present difficulties. Our ExpressJS development services ensure hassle-free WebSocket integration, allowing rapid data exchange that improves user experiences in your web application." />
                <ServiceCard image={codeQuality} title="Testing with Mocks and Stubs" description="Navigating the testing terrain can be daunting. Our ExpressJS development agency uses mocks and stubs to enhance efficiency, ensuring dependable tests with robust coverage in your ExpressJS application development." />
                <ServiceCard image={memoryLeak} title="CI/CD Pipeline Integration" description="For teams, CI/CD pipelines can be intimidating to integrate. Our experts simplify this procedure for your ExpressJS projects, allowing faster updates and uniform performance across all ExpressJS development services." />
            </div>
        </div>

        <div className="bg-gray-700 py-6 my-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0">Unlock next-level performance with Our ExpressJS development services</h2>
                <button className="bg-white text-gray-700 font-bold py-2 px-4 rounded-md flex items-center hover:bg-gray-200 transition duration-300 shrink-0">
                Connect With Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </button>
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-8">
                Technical Brilliance in ExpressJS: Turning Complexity into Clarity
            </h2>
            <img src={pythonExpert} alt="Expert ExpressJS Development" className="w-96 h-auto rounded-lg shadow-lg mb-12 mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <Feature
                title="RESTful API Development"
                description="Implement robust RESTful API solutions with ExpressJS's powerful routing and middleware system, enabling efficient HTTP methods handling, JSON parsing, and seamless data exchange between client and server applications."
                />
                <Feature
                title="Real-time Communication"
                description="Benefit from our expertise in Socket.IO integration with ExpressJS for real-time bidirectional communication, enabling live chat, notifications, collaborative features, and instant data updates for enhanced user engagement."
                />
                <Feature
                title="Database Integration & ORM"
                description="Leverage our expertise in ExpressJS database integration with MongoDB, PostgreSQL, and MySQL using ORMs like Mongoose and Sequelize for efficient data modeling, queries, and database schema management."
                />
                <Feature
                title="Security & Authentication"
                description="Implement advanced security practices in ExpressJS applications, including JWT authentication, passport.js integration, CORS configuration, and helmet middleware to protect applications from security vulnerabilities."
                />
            </div>

            <p className="text-center mt-12 text-gray-400 text-lg">
                Have a question? <a href="#" className="text-gray-500 font-semibold hover:underline">Speak to an expert</a>
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                Premier ExpressJS Development Services Tailored For You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {developmentServices.map((service, index) => (
                    <div key={index} className="bg-gray-800 p-8 rounded-lg border border-gray-700 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={service.image} alt={service.title} className="h-24 mb-6 self-start" />
                        <h3 className="text-xl font-semibold text-gray-400 mb-4">{service.title}</h3>
                        <p className="text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Top ExpressJS Minds: Code That Excels!</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    At Alpixn Technologies, our ExpressJS programmers are pioneers in building sophisticated solutions, combining their extensive experience with state-of-the-art tools to spur creativity. Being the best ExpressJS development company, we deliver exceptional, customized applications with unparalleled accuracy, establishing new standards for excellence in the tech industry.
                </p>
            </div>

            <div className="bg-gray-800 rounded-xl shadow-lg p-8">
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
                            <FeatureCard text="Real-time data processing with ExpressJS ensuring fast response times and scalability" />
                            <FeatureCard text="Robust API development with ExpressJS for seamless third-party integrations" />
                        </div>
                        <p className="text-gray-400 mb-6">
                            Alpixn Technologies partnered with leading corporations to develop secure web applications using ExpressJS, enabling real-time data processing, seamless API integration, and enhanced user experiences. This results in successful partnerships with repeat business.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-gray-600 pt-4">
                            <div className="flex items-center gap-4">
                                <img src={usFlag} alt="US Flag" className="w-8 h-8" />
                                <span className="text-gray-400">US | EXPRESSJS | WEB DEVELOPMENT</span>
                            </div>
                            <a href="#" className="flex items-center text-gray-500 font-semibold hover:underline">
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
                <div className="bg-gray-700 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between p-8 md:p-0 overflow-hidden">
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
                <h2 className="text-4xl font-bold mt-2">Why is <span className="text-green-400">ExpressJS</span> the Go-To Choice for Building Scalable Applications?</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    ExpressJS's simple architecture, adaptability, and large library ecosystem make it the perfect language for scalable projects. Its strong frameworks and simple syntax enable rapid development, which qualifies for both startups and large enterprises aiming for efficient and maintainable solutions.
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
                    Technology Stack We Use For ExpressJS Development
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
                        At Alpixn Technologies, we offer three flexible ExpressJS engagement models to suit your project needs: Dedicated Team for full-time, integrated support; Staff Augmentation to boost your current team with our experts; and Project-Based for tailored goal-focused solutions. We deliver the perfect mix of flexibility and expertise to drive your success.
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

export default ExpressJSPage;