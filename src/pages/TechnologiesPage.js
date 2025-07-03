import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

import nodeJsLogo from '../Assets/8.1.png';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import nodeJsExpert from '../Assets/8.11.png';
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
        question: 'How to Choose the Right Node.js Development Company for Your Project?',
        answer: 'Choosing the right Node.js development company involves evaluating their experience, technical expertise, project portfolio, and client testimonials. Look for a company that aligns with your project goals and offers a transparent development process.'
    },
    {
        question: 'How does Node.JS differ from other server-side programming languages?',
        answer: 'Node.js uses a non-blocking, event-driven I/O model, which makes it lightweight and efficient. Unlike other languages that might block the thread for I/O operations, Node.js can handle many concurrent connections with high throughput.'
    },
    {
        question: 'How does Node.js contribute to faster time-to-market for web applications?',
        answer: 'Node.js allows for rapid development through its extensive ecosystem of libraries (npm), reusable components, and the ability to use JavaScript on both the client and server side. This speeds up development cycles and reduces time-to-market.'
    },
    {
        question: 'Any example of an application made with NodeJS?',
        answer: 'Many well-known companies use Node.js, including Netflix, Uber, LinkedIn, and PayPal. These applications leverage Node.js for its performance, scalability, and ability to handle real-time data.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "With Jellyfish Technologies' 'Dedicated Team' model, we craft a bespoke offshore NodeJS team that integrates seamlessly with your company. Our custom software development experts immerse themselves fully in your project, aligning perfectly with your vision to deliver exceptional, high-quality results at every stage.",
        points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "With Jellyfish Technologies' 'Team Augmentation' model, we elevate your in-house team when you hire Node.js developers through our premier node.js outsourcing services. Our experts seamlessly complement your current staff, infusing advanced skills and ensuring flawless, collaborative synergy.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "Jellyfish Technologies' 'Project-Based' model is ideal for organizations needing focused NodeJS solutions from a top-tier node development company. We adopt a meticulous approach to managing risks and optimizing resources, ensuring your project meets deadlines, stays within budget, and precisely achieves its goals.",
        points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'Jest', logo: jestLogo },
    { name: 'Moongoose', logo: mongooseLogo },
    { name: 'Nest Js', logo: nestJsLogo },
    { name: 'Sequelize', logo: sequelizeLogo },
    { name: 'Socketio', logo: socketIoLogo },
    { name: 'Typescript', logo: typescriptLogo },
    { name: 'Webpack', logo: webpackLogo },
    { name: 'Eslint', logo: eslintLogo },
    { name: 'Jquery', logo: jqueryLogo },
    { name: 'Lodas', logo: lodasLogo },
];

const proficiencyFeatures = [
    { title: 'Non-Blocking I/O', description: 'In Node.js, non-blocking I/O is a fundamental concept that enables its asynchronous and event-driven programming model, ensuring high concurrency, scalability, and performance, ideal for building modern web servers, APIs, and microservices.' },
    { title: 'Single-Threaded Event Loop', description: "Node.js's single-threaded event loop, combined with its non-blocking I/O model and thread pool for handling blocking operations, allows the building of highly scalable, responsive applications that make efficient use of system resources." },
    { title: 'Scalable Microservices', description: 'By embracing microservices architecture with its asynchronous nature, rich ecosystem, and seamless integration with containerization, Node.js facilitates the creation of scalable, maintainable, and resilient applications.' },
    { title: 'High Throughput', description: 'The high throughput capabilities of Node JS make it a preferred choice for expert backend developers seeking to build scalable and efficient web solutions, handling significant traffic while maintaining performance.' },
    { title: 'Unified Codebase', description: 'A unified codebase in Node JS simplifies development, allowing client-side and server-side code to be written in JavaScript. This course streamlines the development process, enabling teams to work cohesively using the same language across the entire stack.' },
    { title: 'Horizontal Scaling', description: 'Node.js supports horizontal scaling, including techniques like clustering, load balancing, containerization, message queues, and content delivery networks (CDNs), ensuring efficient handling of increasing traffic demands.' },
    { title: 'Rapid Development', description: "Node.js's rapid development framework provides pre-built components, reduces coding overhead, allows for quick iterations, and accelerates project timelines, making it a preferred choice for clients looking to deploy robust solutions quickly." },
    { title: 'Lightweight Framework', description: 'Node.js is recognized for its lightweight framework, significantly lowering overhead and improving application performance. This feature particularly benefits businesses looking to build scalable and efficient applications.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'Custom Node.js Application Development',
        description: 'As a leading Node.js development company, we specialize in creating high-performing, scalable custom apps tailored to specific business requirements. Our seasoned developers ensure faultless functionality and optimized performance, giving you an advantage in a cutthroat industry.'
    },
    {
        image: serviceImg2,
        title: 'Dynamic Real-Time Web/Mobile Apps',
        description: 'Jellyfish Technologies excels in creating real-time, responsive web and mobile applications using Node.JS. We deliver rapid, dynamic solutions that improve customer engagement and are perfect for sectors like e-commerce, live streaming, and gaming that demand real-time updates.'
    },
    {
        image: serviceImg3,
        title: 'Node.js API Development and Integration',
        description: "Unlock seamless integration with third-party platforms using Jellyfish Technologies' Node.js API development services. Our APIs are designed for scalability and flexibility, guaranteeing seamless connectivity between your business apps while improving operational efficiency."
    },
    {
        image: serviceImg4,
        title: 'Robust Microservices Architecture Development',
        description: 'Jellyfish Technologies is a leading Node.js development agency specializing in microservices architecture, empowering businesses with modular, scalable solutions. With our expertise, you may build robust systems that streamline intricate procedures, making development cycles quicker.'
    },
    {
        image: serviceImg5,
        title: 'Node.js Code Review and Quality Assurance',
        description: "Ensure the quality and security of your codebase with Jellyfish Technologies' Node.js code review and quality assurance services. Our professionals offer detailed evaluations, pinpointing obstacles and weaknesses to deliver high-performing, secure tailored applications."
    },
    {
        image: serviceImg6,
        title: 'Scalable Cloud-based Application Development',
        description: 'Jellyfish Technologies, a leading Node.js web development company, builds scalable, secure cloud-based applications. We harness the power of cloud infrastructure to provide effective, affordable solutions that enable your business to thrive in a modern digital environment.'
    },
    {
        image: serviceImg7,
        title: 'Serverless Architecture Development',
        description: 'Jellyfish Technologies offers expert Serverless Architecture Development using Node.js, enabling businesses to build scalable, cost-efficient applications without server management. Leverage cloud-native solutions for faster deployment, seamless scalability, and lower overhead.'
    },
    {
        image: serviceImg8,
        title: 'Node.js Migration Services',
        description: 'Looking to transition to a more efficient platform? Jellyfish Technologies offers smooth Node.js migration services, helping businesses upgrade their systems with minimal disruption. Our migration solutions ensure improved performance, security, and long-term scalability.'
    },
    {
        image: serviceImg9,
        title: 'Node.js Consulting Services',
        description: "We provide expert Node.js consulting services, guiding businesses through every stage of development. Our consultants offer strategic insights and best practices, ensuring your project's success from conception to launch, making us a trusted partner for app development."
    },
];

const TechnologiesPage = () => {
  return (
    <div className="bg-[#00070E] text-white overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">
                Futuristic <span className="text-green-400">Node Js</span><br />
                Development Company
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Exceptional NodeJS Development for Ambitious Projects
              </p>
              <p className="mt-4 text-lg text-gray-400">
                At Jellyfish Technologies, we harness the speed and scalability of Node.js to build secure, event-driven, and cloud-ready applications that deliver seamless user experiences across platforms.
              </p>
              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <button className="bg-green-500 text-black font-bold py-3 px-6 rounded-md hover:bg-green-600 transition duration-300">
                  Get Started
                </button>
                <button className="border border-green-500 text-green-500 font-bold py-3 px-6 rounded-md hover:bg-green-500 hover:text-black transition duration-300">
                  Book a call with our expert
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img src={nodeJsLogo} alt="Node.js" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              Node.js Experts, Handpicked by Innovators
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
                Challenges We'll Assist You Resolve with Our Node.JS Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard image={seamlessMicroservices} title="Seamless Microservices Integration" description="Jellyfish Technologies's Node.JS development services ensure seamless microservices integration, helping you enhance scalability, reduce deployment times, and streamline resource management." />
                <ServiceCard image={singleThreaded} title="Single-Threaded Performance Limitations" description="Surmount the limitations of single-threaded operations with our optimized Node.js solutions, assuring high performance and optimal utilization of the server's resources for real-time applications." />
                <ServiceCard image={codeQuality} title="Code Quality and Maintainability" description="Jellyfish Technologies, an industry-leading Node.js development agency, specializes in delivering clean, maintainable, and high-quality code, enhancing long-term performance and scalability." />
                <ServiceCard image={memoryLeak} title="Advanced Memory Leak Detection" description="As part of our Node.js consulting services, Jellyfish Technologies provides expert memory management and leak detection solutions, ensuring your application remains efficient and reliable." />
            </div>
        </div>

        <div className="bg-blue-500 py-6 my-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0">Unlock next-level performance with Our Node.js web development services</h2>
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
                Expert Node.js Development: Making the Complex Effortlessly Simple
            </h2>
            <img src={nodeJsExpert} alt="Expert Node.js Development" className="w-full h-auto rounded-lg shadow-lg mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <Feature
                title="Customizable Microservices Architectures"
                description="Our Node.js experts design modular microservices architectures to ensure system scalability and flexibility, delivering robust, fault-tolerant solutions customized to your unique project needs."
                />
                <Feature
                title="Serverless Architecture Solutions"
                description="Leverage our serverless architecture solutions to improve scalability, expedite deployment, and lower infrastructure overhead. Our expertise guarantees cost-efficient, event-driven systems built to manage unpredictable traffic effortlessly."
                />
                <Feature
                title="High-Performance Caching Strategies"
                description="We implement high-performance caching strategies that significantly increase the speed and efficiency of applications, ensuring minimal latency and effective resource management in large-scale, high-demand settings."
                />
                <Feature
                title="Automated Testing and CI/CD Pipelines"
                description="Our Node.js development agency integrates automated testing and continuous integration/continuous delivery (CI/CD) pipelines, ensuring faster development with fewer bugs and higher code quality with each release."
                />
            </div>

            <p className="text-center mt-12 text-gray-400 text-lg">
                Have a question? <a href="#" className="text-blue-400 font-semibold hover:underline">Speak to an expert</a>
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                Node.js Development Services That Propel Success
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {developmentServices.map((service, index) => (
                    <div key={index} className="bg-[#0D1A2B] p-8 rounded-lg border border-gray-800 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={service.image} alt={service.title} className="h-24 mb-6 self-start" />
                        <h3 className="text-xl font-semibold text-blue-400 mb-4">{service.title}</h3>
                        <p className="text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Our Node.js Developers: Proven Pioneers</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    At Jellyfish Technologies, our Node.js developers are true industry trailblazers, utilizing evolved expertise and avant-garde techniques to spur creativity. As leaders in Node.JS development, we create customized, high-performance apps tailored to your requirements, guaranteeing exceptional results and raising the bar for technological brilliance.
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
                            <FeatureCard text="Blockchain-based solutions ensure the integrity and verification of uploaded certificates" />
                            <FeatureCard text="Robust data security measures implemented for a secure and future-proof solution" />
                        </div>
                        <p className="text-gray-400 mb-6">
                            Jellyfish Technologies partnered with Patra Corporation to develop a secure cloud-based certificate vault, enabling instant access to financial documents, streamlining processes, enhancing the customer experience, and reducing costs. This results in a successful partnership with repeat business.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-gray-600 pt-4">
                            <div className="flex items-center gap-4">
                                <img src={usFlag} alt="US Flag" className="w-8 h-8" />
                                <span className="text-gray-400">US | REACT | FACILITY MANAGEMENT</span>
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
                <h2 className="text-4xl font-bold mt-2">What makes <span className="text-green-400">Node.js</span> ideal for scalable applications?</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Node.js demonstrates exceptional performance in creating scalable applications through its unique architecture. Its non-blocking I/O model, coupled with an event-driven approach and high concurrency capabilities, facilitates swift development and effective resource utilization, ensuring your applications grow while maintaining optimal performance.
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
                    Technology Stack We Use For Node.js Development
                </h2>
                <div className="flex flex-col items-center gap-12">
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
                        {techStack.slice(0, 7).map((tech, index) => (
                            <TechStackItem key={index} name={tech.name} logo={tech.logo} />
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
                        {techStack.slice(7).map((tech, index) => (
                            <TechStackItem key={index + 7} name={tech.name} logo={tech.logo} />
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <div className="py-16 bg-[#00070E]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-16">
                    What Makes Jellyfish Technologies an Industry Leader?
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
                        At Jellyfish Technologies, we offer three flexible Node.js engagement models to suit your project needs: Dedicated Team for full-time, integrated support; Staff Augmentation to boost your current team with our experts; and Project-Based for tailored goal-focused solutions. We deliver the perfect mix of flexibility and expertise to drive your success.
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

const Feature = ({ title, description }) => (
    <div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
);

const FeatureCard = ({ text }) => (
    <div className="bg-[#3e3e42] p-4 rounded-lg border-l-4 border-blue-500">
        <p className="text-gray-300">{text}</p>
    </div>
);

const ServiceCard = ({ image, title, description }) => (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
        <img src={image} alt={title} className="h-20 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-blue-400 mb-2">{title}</h3>
        <p className="text-lg text-gray-400">{description}</p>
    </div>
)

const ProficiencyCard = ({ title, description }) => (
    <div className="bg-[#0D1A2B] p-8 rounded-2xl border border-gray-800 transform h-full flex flex-col text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
        <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const TechStackItem = ({ name, logo }) => (
    <div className="flex flex-col items-center gap-3 transform hover:-translate-y-1 transition-transform duration-300">
        <div className="bg-white p-3 rounded-md shadow-lg">
            <img src={logo} alt={name} className="h-16 w-16 object-contain" />
        </div>
        <p className="text-white font-semibold text-lg">{name}</p>
    </div>
);

const StatItem = ({ value, label }) => (
    <div className="text-center text-white">
        <p className="text-5xl font-bold">{value}</p>
        <p className="text-lg mt-2">{label}</p>
    </div>
);

const AwardItem = ({ image, text }) => (
    <div className="flex flex-col items-center text-center">
        <img src={image} alt={text} className="h-24 mb-4" />
        <p className="text-lg font-semibold">{text}</p>
    </div>
);

const EngagementCard = ({ title, description, points }) => (
    <div className="bg-[#0D1A2B] border border-gray-700 rounded-lg overflow-hidden flex flex-col">
        <div className="bg-blue-600 p-4">
            <h3 className="text-xl font-bold text-white text-center">{title}</h3>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <p className="text-gray-400 mb-4 flex-grow">{description}</p>
            <ul className="text-gray-400 space-y-2 text-left">
                {points.map((point, index) => (
                    <li key={index} className="flex items-start">
                        <span className="text-blue-400 mr-2">&#8226;</span>
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-700 py-6">
            <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-white focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                <svg
                    className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                <p className="text-gray-400">
                    {answer}
                </p>
            </div>
    </div>
  );
};

export default TechnologiesPage; 