import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

// All the same images from the original code
import pythonLogo from '../Assets/java1.webp';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import pythonExpert from '../Assets/java2.webp';
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
        question: 'What are the costs associated with Outsourcing Java Development?',
        answer: 'When it comes to outsourcing Java development, the cost might vary depending on various elements, including project complexity, desired features, design complexities, and the location of the development team. We provide custom pricing models per your needs and transparent pricing without hidden charges.'
    },
    {
        question: 'What distinguishes a Java Development Firm from other providers?',
        answer: 'A team of professionals innovating daily, designing, developing, and deploying high-performance Java-based applications with the most profound knowledge of everything related to Java. We stay up to date with the latest industry standards and deliver the best possible results.'
    },
    {
        question: 'What are the benefits of Java Software Development Outsourcing?',
        answer: 'When a company outsources Java software development, it can benefit from global talent, reduce costs, and increase operational efficiency. You can effortlessly recruit top-notch developers who will effectively build Java solutions that align with your business requirements.'
    },
    {
        question: 'How can a Java Development Agency assist with project scalability?',
        answer: 'Java development service is essential for flexibly scaling projects, efficiently handling resources, and adapting to different business requirements. We provide custom Java solutions with dedicated teams to cater to your changing needs efficiently and cost-effectively.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "Alpxin Technologies' Dedicated Team model offers strategically aligned Java developers who focus solely on your critical projects. This strong partnership enhances our Java development services, fostering innovation and helping you achieve your business goals more efficiently and effectively.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "Alpxin Technologies' Team Augmentation model seamlessly integrates our proficient Java developers into your current teams. This collaborative approach boosts your capacity for Java web development services, speeds up project schedules, and maintains high-quality standards.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "Alpxin Technologies' Project Based model enables outsourcing Java development services for specific initiatives, allowing resource adjustment based on your business requirements. This helps complete Java application development effectively within the specified timeframe and budget.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'Spring', logo: jestLogo },
    { name: 'Hibernate', logo: mongooseLogo },
    { name: 'Jakarta', logo: nestJsLogo },
    { name: 'Gradle', logo: sequelizeLogo },
    { name: 'Jackson', logo: socketIoLogo },
    { name: 'Micronaut', logo: typescriptLogo },
    { name: 'PostgreSQL', logo: webpackLogo },
    { name: 'MongoDB', logo: eslintLogo },
    { name: 'MySQL', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'Platform Independence', description: 'Java\'s ability to "Write Once, Run Anywhere" guarantees that software will function on any device equipped with a Java Virtual Machine, encouraging smooth interoperability across different platforms.' },
    { title: 'Multithreading Support', description: "Java's inherent multithreading capabilities allow tasks to be performed simultaneously, maximize CPU usage, and improve application performance in different processing settings." },
    { title: 'Strongly Typed Language', description: 'Java enforces strict type-checking during compilation, reducing runtime errors and improving code reliability, ultimately resulting in more supportable and maintainable applications.' },
    { title: 'JavaBeans and Serialization', description: 'JavaBeans enables the creation of reusable software components, while serialization effectively transforms objects into byte streams for the most efficient network storage and transmission.' },
    { title: 'Dynamic Class Loading', description: 'Java allows dynamic class loading at runtime, facilitating flexible application designs and enabling updates without interruptions, ultimately enhancing system modularity and manageability.' },
    { title: 'JVM Optimization', description: 'The JVM utilizes Just-In-Time compilation to enhance bytecode execution by converting it into native machine code, which greatly improves application performance and responsiveness.' },
    { title: 'Annotations and Reflection', description: 'Java\'s ability to use annotation and reflection enables programming based on metadata, enabling runtime inspection of classes, methods, and fields, improving code flexibility and adaptability.' },
    { title: 'Built-in Web Services Support', description: 'Java provides extensive libraries and frameworks, like JAX-RS and JAX-WS, for developing RESTful and SOAP web services, facilitating seamless integration with various applications.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'Java Web Development Services',
        description: 'Struggling to build responsive web applications? Our Java app development services focus on creating tailored solutions that address specific business nuances or patterns. We ensure error-free integration with your existing systems, enhanced functionality, and an engaging user experience.'
    },
    {
        image: serviceImg2,
        title: 'Java Mobile App Development Services',
        description: 'Want a mobile application that stands out? Our Java application development services are focused primarily on delivering the best, user-friendly applications optimized for performance on all devices. We work closely with you to understand your goals.'
    },
    {
        image: serviceImg3,
        title: 'Java API Development Services',
        description: 'Seeking robust API solutions? Building APIs with our Java API development services will help you create secure, efficient APIs that improve your applications\' capabilities. We prioritize scalability and performance for seamless integration.'
    },
    {
        image: serviceImg4,
        title: 'Java Integration and Migration',
        description: 'Facing migration or integration challenges? Our Java integration and migration services provide a seamless transition between systems, whether you\'re integrating new technologies or modernizing existing programs with minimal disruption.'
    },
    {
        image: serviceImg5,
        title: 'Java Game Development Services',
        description: 'Want to create exciting games? Using the newest technology, our Java game development services offer some of the most compelling gaming experiences that capture consumers fully. From concept to launch, our committed staff designs entertaining games.'
    },
    {
        image: serviceImg6,
        title: 'Java Cloud Development Services',
        description: 'Planning to opt for cloud solutions? Get scalable, secure, and tailored Java cloud development services customized to your business objectives. We assist you in leveraging cloud technologies to enhance flexibility and reduce costs.'
    },
    {
        image: serviceImg7,
        title: 'Java J2EE Development Services',
        description: 'Requiring enterprise-level applications? Our Java J2EE development services are designed to create reliable and efficient applications that meet complex business requirements. We provide high-performance solutions for your strategic goals.'
    },
    {
        image: serviceImg8,
        title: 'Java Maintenance and Support',
        description: 'Does your software need assistance? Our Java maintenance and support services provide ongoing assistance to ensure the seamless operation of your application. We offer proactive monitoring, timely upgrades, and problem resolution.'
    },
    {
        image: serviceImg9,
        title: 'Java Software Testing and QA',
        description: 'Worried about software quality issues? Our Java software testing and QA services thoroughly test your applications for dependability and performance. We use comprehensive testing procedures to identify and resolve issues.'
    },
];

// Component definitions
const ServiceCard = ({ image, title, description }) => (
    <div className="bg-[#0D1A2B] p-6 rounded-lg border border-orange-500/30 text-center">
        <img src={image} alt={title} className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-orange-400 mb-3">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

const Feature = ({ title, description }) => (
    <div>
        <h3 className="text-xl font-semibold text-orange-400 mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const FeatureCard = ({ text }) => (
    <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3">
        <p className="text-gray-300 text-sm">{text}</p>
    </div>
);

const ProficiencyCard = ({ title, description }) => (
    <div className="bg-[#0D1A2B] border border-orange-500/30 p-6 rounded-lg text-center">
        <h3 className="text-lg font-semibold text-orange-400 mb-3">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

const TechStackItem = ({ name, logo }) => (
    <div className="flex flex-col items-center">
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg mb-3">
            <img src={logo} alt={name} className="w-12 h-12" />
        </div>
        <span className="text-white font-medium">{name}</span>
    </div>
);

const StatItem = ({ value, label }) => (
    <div className="text-center">
        <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">{value}</div>
        <div className="text-gray-400">{label}</div>
    </div>
);

const AwardItem = ({ image, text }) => (
    <div className="text-center">
        <img src={image} alt="Award" className="h-16 mx-auto mb-4" />
        <p className="text-sm">{text}</p>
    </div>
);

const EngagementCard = ({ title, description, points }) => (
    <div className="bg-[#0D1A2B] border border-orange-500/30 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-orange-400 mb-4">{title}</h3>
        <p className="text-gray-400 mb-6 text-sm">{description}</p>
        <ul className="space-y-2">
            {points.map((point, index) => (
                <li key={index} className="text-gray-300 text-sm flex items-center">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></span>
                    {point}
                </li>
            ))}
        </ul>
    </div>
);

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="border border-orange-500/30 rounded-lg">
            <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-orange-500/5 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-white font-medium">{question}</span>
                <span className="text-orange-400 text-xl ml-4 flex-shrink-0">
                    {isOpen ? '−' : '+'}
                </span>
            </button>
            {isOpen && (
                <div className="px-6 pb-6 text-gray-400">
                    {answer}
                </div>
            )}
        </div>
    );
};

const JavaPage = () => {
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
                Delivering Future-Ready Applications with Java Proficiency
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

        <div className="bg-orange-500 py-6 my-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0">Transform Your Business with Our Bespoke Java Development</h2>
                <button className="bg-white text-orange-500 font-bold py-2 px-4 rounded-md flex items-center hover:bg-gray-200 transition duration-300 shrink-0">
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
                description="Our team of Java experts offers adaptable solutions that evolve with technology advancements, keeping your applications innovative and competitive in a rapidly changing landscape."
                />
                <Feature
                title="Custom-Built Solutions"
                description="Looking to have a custom-built application tailored to your business requirements, simply hire dedicated java developers, offering cutting-edge solutions for greater efficiency, scalability, and security."
                />
                <Feature
                title="Accelerated Time to Market"
                description="Our streamlined Java development services optimize efficiency, enabling quicker application launches with immaculate quality standards and faster time to market."
                />
                <Feature
                title="Unmatched Quality Assurance"
                description="We deliver high-quality Java web development services through our extensive testing procedures (unit, integration, functional, and more), ensuring rigorous performance and reliability standards."
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
                    <div key={index} className="bg-[#0D1A2B] p-8 rounded-lg border border-orange-500/30 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
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
                    Looking for the best Java developers? Look no further than Alpxin Technologies, a premium Java development company committed to delivering high-tech result-driven solutions. Our adept backend developers built tailor-made applications that improve productivity and spur business expansion.
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
                                <span className="text-gray-400">US | JAVA | FACILITY MANAGEMENT</span>
                            </div>
                            <a href="#" className="flex items-center text-orange-400 font-semibold hover:underline">
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
                <div className="bg-orange-600 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between p-8 md:p-0 overflow-hidden">
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
                <h2 className="text-4xl font-bold mt-2">Why is <span className="text-orange-600">Java</span> the Go-To Choice for Building Scalable Applications?</h2>
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

export default JavaPage;