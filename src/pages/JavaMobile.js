import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

// Using the same images as provided in the Python page
import pythonLogo from '../Assets/java1.webp'; // Will represent Java
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import pythonExpert from '../Assets/java2.webp'; // Will represent Java expert
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

// Service Card Component
const ServiceCard = ({ image, title, description }) => (
  <div className="text-center">
    <img src={image} alt={title} className="h-24 mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-orange-400 mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

// Feature Component
const Feature = ({ title, description }) => (
  <div>
    <h3 className="text-2xl font-bold text-orange-400 mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

// Feature Card Component
const FeatureCard = ({ text }) => (
  <div className="bg-[#1A2332] p-4 rounded-lg border border-gray-700">
    <p className="text-sm text-gray-300">{text}</p>
  </div>
);

// Proficiency Card Component
const ProficiencyCard = ({ title, description }) => (
  <div className="bg-[#0D1A2B] p-8 rounded-xl border border-gray-800 text-center transform hover:scale-105 transition-transform duration-300">
    <h3 className="text-xl font-bold text-orange-400 mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

// Tech Stack Item Component
const TechStackItem = ({ name, logo }) => (
  <div className="flex flex-col items-center">
    <img src={logo} alt={name} className="h-16 mb-2" />
    <span className="text-white font-semibold">{name}</span>
  </div>
);

// Stat Item Component
const StatItem = ({ value, label }) => (
  <div className="text-center">
    <div className="text-4xl font-bold text-orange-400 mb-2">{value}</div>
    <div className="text-gray-400">{label}</div>
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
  <div className="bg-[#0D1A2B] p-8 rounded-lg border border-gray-800">
    <h3 className="text-2xl font-bold text-orange-400 mb-4">{title}</h3>
    <p className="text-gray-400 mb-6">{description}</p>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-center text-gray-300">
          <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
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
    <div className="border-b border-gray-800">
      <button
        className="w-full py-6 text-left flex justify-between items-center hover:text-orange-400 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        <span className="text-2xl text-orange-400">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-gray-400">{answer}</p>
        </div>
      )}
    </div>
  );
};

const faqs = [
    {
        question: 'What are the typical costs associated with Java development services?',
        answer: 'The cost of Java development services depends on the projects complexity, requirements, and timeline. We offer personalized price estimates to ensure optimal value for your requirements.'
    },
    {
        question: 'Can I hire Java developers on a part-time or full-time basis?',
        answer: 'Yes, we provide three engagement models to choose from: dedicated team, team augmentation, and project-based, giving you the flexibility to pick the most suitable one, depending on your requirements.'
    },
    {
        question: 'What testing methodologies do you follow for Java applications?',
        answer: 'We utilize a range of testing methodologies, including unit testing, integration testing, and automated testing, to ensure the quality and dependability of our Java applications.'
    },
    {
        question: 'What frameworks and libraries do you use for Java development?',
        answer: 'We utilize a range of frameworks and libraries, like Spring, Hibernate, and Maven, to provide customizable and effective Java solutions tailored to your project needs.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "We build a bespoke offshore Java team that integrates seamlessly with your company. This dedicated team of expert Java developers acts as an extension of your in-house team, providing continuous assistance and producing exceptional, top-notch outcomes throughout the development lifecycle.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "Alpixn Technologies' team augmentation model adopts a meticulous approach to handling risks and optimizing resources. By hiring Java programmers who fit your project's needs, we ensure timely completion, cost efficiency, and successful goal attainment, enhancing the productivity of your current team.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "We elevate your in-house team by integrating top-tier experts through our premier outsourcing Java development solutions. This approach enables you to tap into exceptional expertise and specialized abilities for specific Java projects, ensuring the timely delivery of top-notch, efficient outcomes.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'Spring', logo: jestLogo },
    { name: 'Hibernate', logo: mongooseLogo },
    { name: 'Maven', logo: nestJsLogo },
    { name: 'Gradle', logo: sequelizeLogo },
    { name: 'Jackson', logo: socketIoLogo },
    { name: 'Jakarta', logo: typescriptLogo },
    { name: 'Lombok', logo: webpackLogo },
    { name: 'Micronaut', logo: eslintLogo },
    { name: 'PostgreSQL', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'Platform Independence', description: "Java's 'Write Once, Run Anywhere' capability ensures applications run on any device with a Java Virtual Machine, promoting seamless cross-platform compatibility and deployment flexibility." },
    { title: 'Multithreading Support', description: "Java's built-in multithreading capabilities enable concurrent task execution, maximizing CPU utilization and improving application performance in multi-processing environments." },
    { title: 'Strong Type System', description: 'Java enforces strict type-checking during compilation, reducing runtime errors and improving code reliability, resulting in more maintainable and robust applications.' },
    { title: 'Robust Memory Management', description: 'Java features automatic memory management with garbage collection, optimizing resource usage and preventing memory leaks, crucial for scalable application performance.' },
    { title: 'Enterprise Framework Ecosystem', description: 'Java offers extensive enterprise frameworks like Spring and Hibernate, providing comprehensive tools for building scalable, maintainable enterprise applications with proven architectural patterns.' },
    { title: 'JVM Optimization', description: 'The Java Virtual Machine utilizes Just-In-Time compilation and advanced optimization techniques, converting bytecode to native machine code for enhanced performance and responsiveness.' },
    { title: 'Comprehensive Standard Library', description: 'Java provides an extensive standard library with rich APIs for networking, I/O, collections, and utilities, accelerating development and reducing dependency on external libraries.' },
    { title: 'Security Architecture', description: 'Java implements a robust security model with built-in features like bytecode verification, sandboxing, and access control, ensuring secure application execution in diverse environments.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'Java Web Application Development',
        description: 'Alpixn Technologies, the industrys best Java development company, utilizes Spring Framework and JSF to build high-performing web applications. Our Java developers guarantee lightning-fast load times and robust features customized to project needs.'
    },
    {
        image: serviceImg2,
        title: 'Custom Java API Development',
        description: 'We specialize in custom Java API development, building scalable, high-performance, robust APIs that improve system integration and expedite data exchange. Our dedicated Java experts ensure seamless connectivity across your applications and services.'
    },
    {
        image: serviceImg3,
        title: 'Java Mobile App Development',
        description: 'Alpixn Technologies Java development outsourcing services deliver exceptional cross-platform mobile applications using Java frameworks. Our developers build effective mobile apps for Android and cross-platform solutions, ensuring improved functionality and user experience.'
    },
    {
        image: serviceImg4,
        title: 'Java Enterprise Solutions',
        description: 'Alpixn Technologies, a premier Java software development company, creates comprehensive enterprise solutions using Java EE and Spring Boot. Our seasoned Java programmers build scalable enterprise applications that drive business growth and operational efficiency.'
    },
    {
        image: serviceImg5,
        title: 'Java Cloud Development',
        description: 'We offer custom Java cloud development with frameworks like Spring Cloud and microservices architecture. Our developers create robust, flexible, and scalable cloud-native systems that streamline operations and position your business for future growth.'
    },
    {
        image: serviceImg6,
        title: 'Custom Java Software Development',
        description: 'We specialize in custom Java development services, crafting solutions that cater to specific business requirements. Our Java veterans ensure smooth integration, robust functionality, innovative features, and scalability to support your strategic goals.'
    },
    {
        image: serviceImg7,
        title: 'Java Microservices Architecture',
        description: 'We specialize in Java microservices architecture using Spring Boot and Docker, providing scalable, modular solutions that improve flexibility and expedite deployment. Our Java developers help you handle expanding needs effectively and efficiently.'
    },
    {
        image: serviceImg8,
        title: 'Java DevOps Integration',
        description: 'As a premier Java development firm, we integrate Java into your DevOps pipeline using Jenkins, Maven, and containerization. Our specialists guarantee quicker deployment intervals and reliable efficiency, enhancing your development and operational processes.'
    },
    {
        image: serviceImg9,
        title: 'Java Security Implementation',
        description: 'At Alpixn Technologies, we implement comprehensive Java security measures including Spring Security and OAuth. Our developers employ advanced security protocols, safeguarding your applications from threats and ensuring adherence to industry standards.'
    },
];

const JavaMobile = () => {
  return (
    <div className="bg-[#00070E] text-white overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">
                Trusted <span className="text-orange-400">Java</span><br />
                Development Company
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Building Timeless Applications with Java's Enduring Power
              </p>
              <p className="mt-4 text-lg text-gray-400">
                Dreaming about the perfect Java application? Build it with Alpixn Technologies. With 14+ years of extensive experience and ISO certification, our expert Java programmers deliver seamless, cutting-edge solutions that exceed expectations.
              </p>
              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <button className="bg-orange-500 text-black font-bold py-3 px-6 rounded-md hover:bg-orange-600 transition duration-300">
                  Get Started
                </button>
                <button className="border border-orange-500 text-orange-500 font-bold py-3 px-6 rounded-md hover:bg-orange-500 hover:text-black transition duration-300">
                  Book a call with our expert
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img src={pythonLogo} alt="Java" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              Java Experts, Handpicked by Innovators
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
                Challenges We'll Assist You Resolve with Our Java Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard image={seamlessMicroservices} title="Framework Integration" description="Our dedicated Java developers are experts in framework integration, enhancing applications' robustness, efficiency, and adaptability, optimizing functionality, scalability, and maintainability." />
                <ServiceCard image={singleThreaded} title="Performance Tuning" description="Leverage our comprehensive Java programming services for exceptional performance tuning, maximizing speed, responsiveness, and overall application performance and efficiency." />
                <ServiceCard image={codeQuality} title="Memory Management" description="As a top-notch Java software development company, we expertly tackle memory management intricacies, including resource allocation and deallocation, for application stability and reliability." />
                <ServiceCard image={memoryLeak} title="Legacy System Migration" description="Rely on our Java app development services for seamless legacy system migration without losing critical data, modernizing your infrastructure for future success and operational efficiency." />
            </div>
        </div>

        <div className="bg-blue-500 py-6 my-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0">Transform Your Business with Our Bespoke Java Development</h2>
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
                Build Better with Java: Your Project, Our Expertise
            </h2>
            <img src={pythonExpert} alt="Expert Java Development" className="w-96 h-auto rounded-lg shadow-lg mb-12 mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <Feature
                title="Future-Proof Scalability"
                description="Our team of Java experts offers adaptable solutions that evolve with technology advancements, keeping your applications innovative and competitive in a rapidly changing landscape, ensuring long-term viability and performance."
                />
                <Feature
                title="Custom-Built Solutions"
                description="Looking to have a custom-built application tailored to your business requirements? Simply hire dedicated Java developers, offering cutting-edge solutions for greater efficiency, scalability, and security with enterprise-grade architecture."
                />
                <Feature
                title="Accelerated Time to Market"
                description="Our streamlined Java development services optimize efficiency, enabling quicker application launches with immaculate quality standards and faster time to market through proven development methodologies and frameworks."
                />
                <Feature
                title="Unmatched Quality Assurance"
                description="We deliver high-quality Java web development services through our extensive testing procedures (unit, integration, functional, and more), ensuring rigorous performance and reliability standards that meet enterprise requirements."
                />
            </div>

            <p className="text-center mt-12 text-gray-400 text-lg">
                Have a question? <a href="#" className="text-orange-400 font-semibold hover:underline">Speak to an expert</a>
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                Ignite Growth with Specialized Java Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {developmentServices.map((service, index) => (
                    <div key={index} className="bg-[#0D1A2B] p-8 rounded-lg border border-gray-800 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={service.image} alt={service.title} className="h-24 mb-6 self-start" />
                        <h3 className="text-xl font-semibold text-orange-400 mb-4">{service.title}</h3>
                        <p className="text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Quality Java Solutions, Customized for You</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    At Alpixn Technologies, our Java programmers are pioneers in building sophisticated solutions, combining their extensive experience with state-of-the-art tools to spur creativity. Being the best Java development company, we deliver exceptional, customized applications with unparalleled accuracy, establishing new standards for excellence in the tech industry.
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
                            Alpixn Technologies partnered with Patra Corporation to develop a secure cloud-based certificate vault, enabling instant access to financial documents and certificates. The solution enhances user experience with a secure, efficient platform, ensuring data integrity through blockchain technology.
                            </p>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-gray-600 pt-4">
                            <div className="flex items-center gap-4">
                                <img src={usFlag} alt="US Flag" className="w-8 h-8" />
                                <span className="text-gray-400">US | JAVA | DATA SCIENCE</span>
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
                <h2 className="text-4xl font-bold mt-2">Why is <span className="text-green-400">Java</span> the Go-To Choice for Building Scalable Applications?</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Java's simple architecture, adaptability, and large library ecosystem make it the perfect language for scalable projects. Its strong frameworks and simple syntax enable rapid development, which qualifies for both startups and large enterprises aiming for efficient and maintainable solutions.
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
                    Technology Stack We Use For Java Development
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
                        At Alpixn Technologies, we offer three flexible Java engagement models to suit your project needs: Dedicated Team for full-time, integrated support; Staff Augmentation to boost your current team with our experts; and Project-Based for tailored goal-focused solutions. We deliver the perfect mix of flexibility and expertise to drive your success.
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

export default JavaMobile;