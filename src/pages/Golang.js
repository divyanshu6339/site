import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

// Using the same images as provided in the original Python page
import pythonLogo from '../Assets/golang1.png';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import pythonExpert from '../Assets/golang2.webp';
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
        question: 'How does outsourcing to a Golang development company work?',
        answer: 'Outsourcing to a Golang development company involves entrusting an external partner with your project requirements. You have the flexibility to select from different engagement models. For instance, you can have Golang experts join your in-house team through a dedicated team or team augmentation. Alternatively, you can opt for a complete project outsourcing (project-based), where the partner will manage all aspects of the project.'
    },
    {
        question: 'How is Alpxin Technologies the best choice for outsourcing Golang development services?',
        answer: 'If you seek the most proficient and cost-effective Golang developers, then connect with Alpxin Technologies – the reliable Golang development company with a proven track record and work portfolio. 13+ years of industry experience, 150+ Skilled IT Professionals, 4000+ projects successfully delivered, ISO 9001 and ISO 27001 Certified.'
    },
    {
        question: 'How much does it cost to develop the Golang app?',
        answer: 'The expense associated with the Golang application relies on the features you choose to implement, the resources you employ, and the engagement model selected for developing your digital product. Building complex features and functions will require additional time from Golang engineers.'
    },
    {
        question: 'What kind of applications can you build using Go?',
        answer: 'Initially created by Google engineers, Go has gained popularity as a programming language for app development across multiple niches, fields, and categories. Various types of Go applications exist today—encompassing both web and mobile platforms—across industries and niches. Notable examples include Netflix, Dropbox, Uber, Ethereum, Twitch, and Docker.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "Alpxin Technologies' Dedicated Team model functions as an offshore development center, providing a vetted team dedicated to your project. This ensures a thorough integration with your objectives and effective goal implementation.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "Alpxin Technologies' Team Augmentation model improves your existing team with specialized Golang developers. Our experts seamlessly integrate into your workflow, providing tailored expertise that works with your existing resources without disrupting your operations.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "The 'Project Based' model from Alpxin Technologies is ideal for defined projects with specific scopes and deadlines. We optimize resource allocation, focusing on milestones and risk mitigation to ensure timely delivery within your budget constraints.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'Docker', logo: jestLogo },
    { name: 'Echo', logo: mongooseLogo },
    { name: 'Fiber', logo: nestJsLogo },
    { name: 'Gin', logo: sequelizeLogo },
    { name: 'Go-Module', logo: socketIoLogo },
    { name: 'Gorm', logo: typescriptLogo },
    { name: 'Swagger', logo: webpackLogo },
    { name: 'Chi', logo: eslintLogo },
    { name: 'WordPress', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'High Performance', description: "Golang's efficient concurrency model, low latency, and automatic memory management ensure high performance, enabling applications to handle heavy loads with minimal latency, making it suitable for web solutions with significant traffic." },
    { title: 'Concurrency Made Easy', description: "Golang's goroutines facilitate concurrent programming, enabling efficient multitasking and allowing applications to perform multiple operations simultaneously without complexity, improving efficiency and scalability in high-traffic web solutions." },
    { title: 'Simple Syntax', description: "Golang's simple and consistent syntax improves developer productivity by making code easier to read, write, and maintain, ultimately accelerating project schedules and fostering effective teamwork." },
    { title: 'Robust Standard Library', description: "Golang's extensive standard library facilitates web app development by offering built-in functions for common tasks, reducing reliance on external dependencies, and ensuring reliability, consistency, and maintainability." },
    { title: 'Strong Typing', description: "Golang's strong typing system enhances code reliability by catching type errors at compile time, reducing runtime issues, resulting in clearer code, enhanced performance, and efficient memory usage for robust applications." },
    { title: 'Cross-Platform Compatibility', description: "Golang's robust cross-platform compatibility ensures your applications run seamlessly across diverse operating systems and architectures, enabling wider accessibility and easier deployment in numerous scenarios." },
    { title: 'Efficient Memory Management', description: "Golang's integrated garbage collection optimizes memory usage, preventing leaks and ensuring optimal performance for web applications, even under heavy load, through potent profiling tools and automated allocation." },
    { title: 'Excellent Support for Microservices', description: "Golang is optimal for microservice architecture, facilitating the development of scalable and maintainable web solutions that can evolve independently while ensuring dependability and easy inter-service communication." },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'Custom Web and Mobile App Development',
        description: 'Our Golang web development company specializes in developing custom web and mobile applications that address your unique business challenges, guaranteeing seamless integration, improved functionality, and a competitive edge that propels development and user satisfaction.'
    },
    {
        image: serviceImg2,
        title: 'Modernization, Migration, and Maintenance Services',
        description: 'We provide extensive modernization and migration services to better your existing applications. Our proficiency in Golang web development ensures secure, efficient upgrades that augment functionality reduce downtime, and maintain alignment with emerging technologies.'
    },
    {
        image: serviceImg3,
        title: 'API and Microservices Development',
        description: 'Our Golang development services emphasize building resilient and efficient APIs and microservices. These solutions enable uninterrupted communication between applications, enhancing integration and allowing your projects to expand while ensuring optimal performance.'
    },
    {
        image: serviceImg4,
        title: 'Cloud-Native Interactive Applications',
        description: 'We specialize in building cloud-native applications with Golang, which enhances performance, robustness, and scalability. Our solutions empower businesses to exploit cloud technology efficiently, facilitating swift deployment and response to changing market demands.'
    },
    {
        image: serviceImg5,
        title: 'Command-Line Interfaces (CLI)',
        description: 'Our team develops robust command-line interfaces (CLI) with Golang, equipping expert backend developers with intuitive tools that improve productivity and optimize workflows. These solutions enhance usability, simplifying complicated procedures and increasing efficiency for teams.'
    },
    {
        image: serviceImg6,
        title: 'Automated Testing and Quality Assurance',
        description: 'Quality is of the utmost importance, thus our automated testing and quality assurance services for Golang applications ensure comprehensive software assessment, resulting in dependable, high-quality products that constantly meet and exceed user expectations.'
    },
    {
        image: serviceImg7,
        title: 'IoT Solutions Development',
        description: 'Using Golang, we develop innovative IoT solutions that effortlessly connect devices and maximize data processing. Our proficiency ensures your IoT applications are scalable, effective, and designed to enhance operational efficiency while providing valuable data and automation.'
    },
    {
        image: serviceImg8,
        title: 'Performance Optimization Services',
        description: 'Our performance optimization services focus on evaluating and refining your Golang applications to eradicate bottlenecks and enhance speed. We ensure your software functions optimally, offering exceptional user experiences that draw in and hold onto clients.'
    },
    {
        image: serviceImg9,
        title: 'Golang Consulting and Strategy',
        description: 'Seeking skilled counsel? Our Golang consulting services offer strategic insights customized for your projects, guiding you through intricacies and assisting you in making informed decisions that maximize the potential of your development initiatives with Go.'
    },
];

// Component definitions
const ServiceCard = ({ image, title, description }) => (
  <div className="text-center">
    <img src={image} alt={title} className="w-16 h-16 mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-blue-400 mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Feature = ({ title, description }) => (
  <div>
    <h3 className="text-xl font-semibold text-blue-400 mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const FeatureCard = ({ text }) => (
  <div className="flex items-start gap-3">
    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
    <p className="text-gray-400 text-sm">{text}</p>
  </div>
);

const ProficiencyCard = ({ title, description }) => (
  <div className="bg-[#0D1A2B] p-6 rounded-lg border border-gray-800 text-center">
    <h3 className="text-lg font-semibold text-blue-400 mb-3">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const TechStackItem = ({ name, logo }) => (
  <div className="flex flex-col items-center">
    <img src={logo} alt={name} className="w-16 h-16 mb-2" />
    <span className="text-white font-medium">{name}</span>
  </div>
);

const StatItem = ({ value, label }) => (
  <div className="text-center">
    <p className="text-4xl font-bold text-blue-400 mb-2">{value}</p>
    <p className="text-gray-400">{label}</p>
  </div>
);

const AwardItem = ({ image, text }) => (
  <div className="text-center">
    <img src={image} alt="Award" className="h-16 mx-auto mb-4" />
    <p className="text-sm">{text}</p>
  </div>
);

const EngagementCard = ({ title, description, points }) => (
  <div className="bg-[#0D1A2B] p-6 rounded-lg border border-gray-800">
    <h3 className="text-xl font-semibold text-blue-400 mb-4">{title}</h3>
    <p className="text-gray-400 mb-6">{description}</p>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-center text-sm text-gray-400">
          <div className="w-2 h-2 text-blue-400 rounded-full mr-3"></div>
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full py-6 px-4 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 pb-6">
          <p className="text-gray-400">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Golang = () => {
  return (
    <div className="bg-[#00070E] text-white overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">
                Leading <span className="text-blue-400">Golang</span><br />
                Development Company
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Accelerating Innovation with Fast, Reliable, and Scalable Golang Solutions
              </p>
              <p className="mt-4 text-lg text-gray-400">
                At Alpxin Technologies, we stand out as the industry's best Golang development company. Our seasoned Golang developers are adept at building scalable, performance-driven applications, ensuring your vision becomes a reality without compromising quality.
              </p>
              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <button className="text-blue-500 text-black font-bold py-3 px-6 rounded-md hover:text-blue-600 transition duration-300">
                  Get Started
                </button>
                <button className="border border-blue-500 text-blue-500 font-bold py-3 px-6 rounded-md hover:text-blue-500 hover:text-black transition duration-300">
                  Book a call with our expert
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img src={pythonLogo} alt="Golang" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              Golang Experts, Handpicked by Innovators
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
                Challenges We'll Assist You Resolve with Our Golang Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard image={seamlessMicroservices} title="Concurrency Issues" description="Golang's goroutines are potent; however, managing them can be challenging. Our Golang development services prevent race conditions and ensure optimal performance in your multi-threaded applications." />
                <ServiceCard image={singleThreaded} title="Complex Dependency Graphs" description="Streamline your codebase with the best-in-class Golang development company. Using Go modules, we assist in managing dependencies, making maintenance more accessible and efficient." />
                <ServiceCard image={codeQuality} title="Deployment Complexity" description="Deploying Golang applications can be complicated. Our Golang web development services optimize the deployment process by utilizing containerization with Docker to facilitate scaling and orchestration." />
                <ServiceCard image={memoryLeak} title="Handling JSON Serialization" description="Optimize JSON management using our Go development services. We enhance serialization and deserialization, improving efficiency and reducing data processing overhead." />
            </div>
        </div>

        <div className="bg-blue-500 py-6 my-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0">Transform Your Business with Our Bespoke Golang Development</h2>
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
                Highlights of Our Premier Golang Solutions
            </h2>
            <img src={pythonExpert} alt="Expert Golang Development" className="w-96 h-auto rounded-lg shadow-lg mb-12 mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <Feature
                title="Result-Driven Performance"
                description="Our Golang services yield exceptional outcomes. By employing the top 1% of Go language developers, we ensure your project runs optimally, surpassing expectations."
                />
                <Feature
                title="Access to Top Talent"
                description="We exclusively employ the finest talent. Our senior Go developers combine technical proficiency with robust interpersonal skills to deliver premier Golang Outsourcing Development Services."
                />
                <Feature
                title="Thorough Testing Protocols"
                description="In application development, quality matters. Our comprehensive testing processes in Golang development services ensure your applications are resilient, efficient, and primed for market success."
                />
                <Feature
                title="Strong Security Measures"
                description="Your security is our foremost concern. We employ robust security measures in our Golang web development services, ensuring the protection of your applications and data throughout the process."
                />
            </div>

            <p className="text-center mt-12 text-gray-400 text-lg">
                Have a question? <a href="#" className="text-blue-400 font-semibold hover:underline">Speak to an expert</a>
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                Golang Development Services That Drive Real Impact
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
                <h2 className="text-4xl font-bold">Our Golang Developers' Proven Expertise</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    In search of proficient Golang developers? Look no further than Alpxin Technologies! To get round-the-clock support and scalable solutions, hire vetted Golang developers with deep proficiency in Go's core functionalities and offer tailored solutions that set the standard for performance and innovation.
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
                            Alpxin Technologies partnered with Patra Corporation to develop a secure cloud-based certificate vault, enabling instant access to financial documents, streamlining processes, enhancing the customer experience, and reducing costs. This results in a successful partnership with repeat business.
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
                <h2 className="text-4xl font-bold mt-2">Why is <span className="text-blue-400">Golang</span> the Go-To Choice for Building Scalable Applications?</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Golang's simple architecture, adaptability, and large library ecosystem make it the perfect language for scalable projects. Its strong frameworks and simple syntax enable rapid development, which qualifies for both startups and large enterprises aiming for efficient and maintainable solutions.
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
                    Technology Stack We Use For Golang Development
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
                        At Alpixn Technologies, we offer three flexible Golang engagement models to suit your project needs: Dedicated Team for full-time, integrated support; Staff Augmentation to boost your current team with our experts; and Project-Based for tailored goal-focused solutions. We deliver the perfect mix of flexibility and expertise to drive your success.
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

export default Golang;