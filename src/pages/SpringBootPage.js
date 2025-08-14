import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

// Using the same images as provided in the Python page
import pythonLogo from '../Assets/springboot1.png';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import pythonExpert from '../Assets/spring2.webp';
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
        question: 'What are the benefits of hiring a dedicated Spring Boot developer?',
        answer: 'When you hire Spring Boot developers, they ensure focused expertise, tailored solutions, and better delivery timing. This accelerates project delivery as the developer integrates seamlessly with your team, employs industry best practices, and adapts swiftly to changing requirements.'
    },
    {
        question: 'What factors influence the cost of Spring Boot development services?',
        answer: 'The cost of Spring Boot development services is impacted by factors such as project complexity, timeline, team size, and engagement models. Understanding these factors helps you plan better budgets for your Spring Boot projects.'
    },
    {
        question: 'What security protocols do you implement in Spring Boot applications?',
        answer: 'We implement robust security measures including user authentication, role-based access controls, data encryption, input validation, and regular security audits to keep your Spring Boot applications safe and maintain user trust.'
    },
    {
        question: 'What is the process for starting a new Spring Boot project?',
        answer: 'Starting a Spring Boot project begins with initial consultation to define requirements, followed by project planning, architecture design, and development using agile methodology with regular feedback cycles and thorough testing.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "Our dedicated Spring Boot developers work exclusively on your projects, delivering advanced Spring Boot web application development solutions that align perfectly with your objectives. We emphasize a client-centered approach, ensuring transparency and direct communication throughout development.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "Boost your existing development team with our skilled Spring Boot developers. Our carefully selected experts integrate seamlessly into your current team, bringing specialized knowledge tailored to your specific business requirements.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "Our Project-Based model effectively manages risks and allocates resources to meet the specific goals of your project. As a leading Spring Boot development firm, we guarantee timely delivery within budget constraints, focusing on high-quality outcomes.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'Flyway', logo: jestLogo },
    { name: 'Hibernate', logo: mongooseLogo },
    { name: 'JUnit', logo: nestJsLogo },
    { name: 'Mockito', logo: sequelizeLogo },
    { name: 'Spring Batch', logo: socketIoLogo },
    { name: 'Spring Cloud', logo: typescriptLogo },
    { name: 'Spring Data', logo: webpackLogo },
    { name: 'Spring Security', logo: eslintLogo },
    { name: 'Spring WebFlux', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'Actuator Endpoints', description: 'Leverage Actuator endpoints to monitor your application effectively. These endpoints offer comprehensive insights into performance metrics, health checks, and operational diagnostics, ensuring your applications run effortlessly.' },
    { title: 'Spring Boot CLI', description: "Take advantage of the Spring Boot CLI to prototype applications quickly and with minimal overhead. By writing code in Groovy, developers can achieve rapid testing and iteration, accelerating the development lifecycle." },
    { title: 'Native Image Support', description: 'Boost performance with Native Image Support, which allows applications to be compiled into native images. This results in faster startup times and reduced memory usage, making it ideal for modern cloud architectures.' },
    { title: 'Spring Boot Admin', description: 'Manage and monitor your Spring Boot applications effortlessly with Spring Boot Admin. This intuitive interface consolidates application health metrics, logs, and other critical information for real-time insights.' },
    { title: 'Caching Abstraction', description: 'Enhance application performance through Spring Boot\'s caching abstraction, which supports seamless integration of multiple caching solutions. This feature improves data retrieval speeds and minimizes response times.' },
    { title: 'Server-Sent Events (SSE)', description: 'Implement real-time data updates effortlessly using Server-Sent Events (SSE). This functionality allows efficient, one-way communication from server to client, simplifying the delivery of timely updates.' },
    { title: 'JPA/Hibernate Auto-Configuration', description: 'Simplify data access and management with JPA/Hibernate auto-configuration. This feature reduces boilerplate code, enabling developers to focus on business logic while enhancing database interactions.' },
    { title: 'Multi-Module Projects', description: 'Effectively manage complex applications with Spring Boot\'s support for multi-module projects. This architectural capability promotes better organization and maintainability across different application components.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'Spring Web Service Development',
        description: 'Enhance your enterprise architecture with our Spring web service development. We build APIs that facilitate secure and hassle-free integrations, empowering your organization to optimize operations and improve client interactions.'
    },
    {
        image: serviceImg2,
        title: 'Spring Application Migration',
        description: 'Revitalize your legacy systems with our application migration services. We facilitate a smooth transition to contemporary frameworks, boosting system functionality while minimizing risks associated with bygone technology.'
    },
    {
        image: serviceImg3,
        title: 'Spring Boot Maintenance and Support',
        description: 'Maintain operational continuity with our proactive Spring Boot maintenance and support services. We provide timely updates and performance monitoring, ensuring your application\'s integrity while maximizing user satisfaction.'
    },
    {
        image: serviceImg4,
        title: 'Spring MVC Development',
        description: 'Leverage our expertise in Spring MVC development to build highly immersive web applications. Our solutions emphasize performance and usability, enhancing customer retention and engagement through innovative design.'
    },
    {
        image: serviceImg5,
        title: 'Spring Core Development',
        description: 'Unlock the full potential of the Spring framework with our custom Spring Boot development services. We deliver modular, high-performance solutions to meet your business requirements, ensuring scalability and adaptability.'
    },
    {
        image: serviceImg6,
        title: 'Spring Security, JPA, Kafka',
        description: 'Strengthen your data management capabilities with our Spring Security, JPA, and Kafka development expertise. We create secure, high-performance systems that provide real-time processing and data flow.'
    },
    {
        image: serviceImg7,
        title: 'Automated Testing and QA',
        description: 'Elevate software reliability with our automated testing and quality assurance services. Our robust testing frameworks identify vulnerabilities early, ensuring your applications maintain optimal performance and industry standards.'
    },
    {
        image: serviceImg8,
        title: 'Spring Microservice Development',
        description: 'Embrace a microservices architecture with our Spring microservice development services. We build autonomous, scalable services that improve deployment efficiency, foster rapid innovation, and enable faster pivoting.'
    },
    {
        image: serviceImg9,
        title: 'Maintenance and Support',
        description: 'Count on our all-encompassing maintenance and support services to keep your Spring Boot applications running smoothly. We prioritize continuous improvement and responsive troubleshooting for business agility.'
    },
];

const ServiceCard = ({ image, title, description }) => (
    <div className="bg-[#0D1A2B] p-6 rounded-lg border border-gray-800 text-center">
        <img src={image} alt={title} className="h-16 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-green-400 mb-3">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

const Feature = ({ title, description }) => (
    <div>
        <h3 className="text-xl font-semibold text-green-400 mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const FeatureCard = ({ text }) => (
    <div className="flex items-start space-x-2">
        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
        <p className="text-gray-400 text-sm">{text}</p>
    </div>
);

const ProficiencyCard = ({ title, description }) => (
    <div className="bg-[#0D1A2B] p-6 rounded-lg border border-gray-800 text-center">
        <h3 className="text-lg font-semibold text-green-400 mb-3">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

const TechStackItem = ({ name, logo }) => (
    <div className="flex flex-col items-center">
        <img src={logo} alt={name} className="h-16 w-16 mb-2" />
        <span className="text-white font-medium">{name}</span>
    </div>
);

const StatItem = ({ value, label }) => (
    <div className="text-center">
        <div className="text-4xl font-bold text-green-400 mb-2">{value}</div>
        <div className="text-gray-400">{label}</div>
    </div>
);

const AwardItem = ({ image, text }) => (
    <div className="text-center">
        <img src={image} alt={text} className="h-16 mx-auto mb-4" />
        <p className="text-sm">{text}</p>
    </div>
);

const EngagementCard = ({ title, description, points }) => (
    <div className="bg-[#0D1A2B] p-8 rounded-lg border border-gray-800">
        <h3 className="text-xl font-semibold text-green-400 mb-4">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <ul className="space-y-2">
            {points.map((point, index) => (
                <li key={index} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    {point}
                </li>
            ))}
        </ul>
    </div>
);

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="border border-gray-800 rounded-lg">
            <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-900 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-white font-medium">{question}</span>
                <svg
                    className={`w-5 h-5 text-gray-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="px-6 pb-4">
                    <p className="text-gray-400">{answer}</p>
                </div>
            )}
        </div>
    );
};

const SpringBootPage = () => {
  return (
    <div className="bg-[#00070E] text-white overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">
                Top <span className="text-green-400">Spring Boot</span><br />
                Development Company
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Harnessing Spring Boot's Versatility for Exceptional Applications
              </p>
              <p className="mt-4 text-lg text-gray-400">
                Upscale your software development cycle with Alpixn Technologies, a top-notch Java Spring Boot development company. Experience tailor-made solutions, rapid development, adaptability, and expert support, ensuring your business thrives in a competitive landscape.
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
              <img src={pythonLogo} alt="Spring Boot" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              The Go-To Choice of Leading Global Brands
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
                Challenges We'll Assist You Resolve with Our Spring Boot Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard image={seamlessMicroservices} title="OAuth2 for Microservices" description="Overcome security vulnerabilities in your microservices by integrating OAuth2 through our Spring Boot development services. This approach ensures robust authentication mechanisms, making applications more secure." />
                <ServiceCard image={singleThreaded} title="Scheduled Tasks with Quartz" description="Optimize your Spring Boot web application development by automating background processes with Quartz. This powerful framework ensures reliable scheduling of processes, streamlining efficient resource usage." />
                <ServiceCard image={codeQuality} title="Leverage Advanced AOP" description="Elevate your application's modularity with our tailored Spring Boot development services that leverage advanced Aspect-Oriented Programming (AOP) techniques. This handles cross-cutting concerns effectively." />
                <ServiceCard image={memoryLeak} title="Circuit Breaker Patterns" description="Strengthen the resilience of your Spring Boot applications by implementing robust circuit breaker patterns. This approach maintains uninterrupted performance during peak loads in microservices architecture." />
            </div>
        </div>

        <div className="bg-green-500 py-6 my-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0 text-white">Transform Your Business with Our Bespoke Spring Boot Development</h2>
                <button className="bg-white text-green-500 font-bold py-2 px-4 rounded-md flex items-center hover:bg-gray-200 transition duration-300 shrink-0">
                Connect With Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </button>
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-8">
                Premium Spring Boot Solutions for Your Business
            </h2>
            <img src={pythonExpert} alt="Expert Spring Boot Development" className="w-96 h-auto rounded-lg shadow-lg mb-12 mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <Feature
                title="Rapid Development Cycles"
                description="Accelerate your time-to-market with our streamlined development cycles, respond quickly to the right opportunities, and continue delivering unique-quality fit-for-purpose solutions that surpass competition."
                />
                <Feature
                title="Turbocharged Development"
                description="Get super-efficient with our fast-track turbocharged development methodology, ensuring projects are completed on schedule and within budget. This allows you to focus on strategic growth and delegate technical milestones."
                />
                <Feature
                title="Seamless API Fortification"
                description="Improve your application's security through our seamless API fortification services. This safeguards your data and facilitates smooth integrations, thereby enhancing user trust and elevating overall satisfaction."
                />
                <Feature
                title="Lightning-Fast Prototyping"
                description="Turn your concepts into reality at lightning speed with our rapid prototyping services. This process enables you to test, optimize, and iterate in no time — reducing risk and ensuring your vision is market-ready."
                />
            </div>

            <p className="text-center mt-12 text-gray-400 text-lg">
                Have a question? <a href="#" className="text-green-400 font-semibold hover:underline">Speak to an expert</a>
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                End-to-End Spring Boot Solutions for Your Business
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {developmentServices.map((service, index) => (
                    <div key={index} className="bg-[#0D1A2B] p-8 rounded-lg border border-gray-800 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={service.image} alt={service.title} className="h-24 mb-6 self-start" />
                        <h3 className="text-xl font-semibold text-green-400 mb-4">{service.title}</h3>
                        <p className="text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Spring Boot Simplified: Reliable Solutions with Guaranteed Results!</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Looking for exceptional Spring Boot developers? Alpixn Technologies has you covered! As a premier Java Spring Boot development company, we create tailored solutions that leverage Spring Boot's rapid development capabilities, microservices architecture, and seamless integrations. We prioritize delivering optimal performance and scalability for your projects.
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
                            Alpixn Technologies partnered with Patra Corporation to develop a secure cloud-based certificate vault, enabling instant access to financial documents, streamlining processes, enhancing the customer experience, and reducing costs. This results in a successful partnership with repeat business.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-gray-600 pt-4">
                            <div className="flex items-center gap-4">
                                <img src={usFlag} alt="US Flag" className="w-8 h-8" />
                                <span className="text-gray-400">US | SPRING BOOT | MICROSERVICES</span>
                            </div>
                            <a href="#" className="flex items-center text-green-400 font-semibold hover:underline">
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
                <div className="bg-[#6B8E23] rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between p-8 md:p-0 overflow-hidden">
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
                <h2 className="text-4xl font-bold mt-2">Why Choose <span className="text-green-400">Spring Boot</span></h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    SpringBoot's simple architecture, adaptability, and large library ecosystem make it the perfect language for scalable projects. Its strong frameworks and simple syntax enable rapid development, which qualifies for both startups and large enterprises aiming for efficient and maintainable solutions.
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
                    Technology Stack We Use For SpringBoot Development
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
                        At Alpixn Technologies, we offer three flexible SpringBoot engagement models to suit your project needs: Dedicated Team for full-time, integrated support; Staff Augmentation to boost your current team with our experts; and Project-Based for tailored goal-focused solutions. We deliver the perfect mix of flexibility and expertise to drive your success.
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

export default SpringBootPage;