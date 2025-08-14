import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

// Using the same images as provided
import pythonLogo from '../Assets/php_PNG6.png';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import pythonExpert from '../Assets/php2.webp';
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
        question: 'What are the typical costs associated with PHP development services?',
        answer: 'The cost of PHP development can fluctuate depending on the projects complexity and requirements. However, you can expect competitive pricing that ranges from fixed project fees to hourly rates. We are dedicated to providing best-in-class results while ensuring flexibility to fit your budget.'
    },
    {
        question: 'How do I choose the right PHP development company?',
        answer: 'Look for a PHP development company with a solid portfolio, good client feedback, and industry experience. At Alpixn Technologies, we pride ourselves on clear communication and alignment with your project goals, which makes us the ideal option for your PHP development needs.'
    },
    {
        question: 'What is the typical timeline for a PHP web development project?',
        answer: 'The timeline depends on the projects size and complexity. Generally, smaller projects can be completed in a few weeks, whereas larger and more intricate projects can take several months. Well collaborate with you to set up a realistic schedule.'
    },
    {
        question: 'How do you handle project management and communication during development?',
        answer: 'We prioritize clear communication using project management tools for transparency. Regular meetings and updates ensure that you are kept informed at every level of the project, which helps to build teamwork and ensures that the project stays on track.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "Alpixn Technologies' Dedicated Team model works as an extension of your company, serving as your offshore development center for PHP development. This strategy ensures that a dedicated team concentrates exclusively on your project, facilitating profound integration and alignment with your objectives.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "Alpixn Technologies' Team Augmentation model improves your existing capabilities by integrating proficient PHP developers into your team. This cohesive partnership guarantees that our experts enhance your internal resources, delivering tailored expertise without interrupting your operation.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "For clearly defined projects, Alpixn Technologies' Project-Based model is the optimal choice. This approach is tailored for defined timescales and scope constraints, optimizing resource allocation while utilizing a systematic approach to minimize risks- prioritizing efficient results.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'CakePHP', logo: jestLogo },
    { name: 'CodeIgniter', logo: mongooseLogo },
    { name: 'Composer', logo: nestJsLogo },
    { name: 'Doctrine', logo: sequelizeLogo },
    { name: 'Laravel', logo: socketIoLogo },
    { name: 'PHPMailer', logo: typescriptLogo },
    { name: 'PHPUnit', logo: webpackLogo },
    { name: 'Symfony', logo: eslintLogo },
    { name: 'WordPress', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'Quick Execution', description: 'PHP facilitates rapid development and deployment of web applications, allowing businesses to launch projects faster and adapt to changing market conditions and user expectations.' },
    { title: 'Code Stability', description: "PHP's well-established structure ensures stable code that minimizes disruptions. This stability enables seamless updates and provides long-term reliability in web applications." },
    { title: 'Broad Compatibility', description: 'PHP easily integrates with multiple platforms and technologies, guaranteeing interoperability across numerous environments. This adaptability enables businesses to implement the most suitable tools for their unique requirements.' },
    { title: 'Extensive Library Support', description: 'An extensive selection of libraries and frameworks augments PHPs functionality. This extensive support allows developers to build feature-rich, intuitive, and flawless web applications without starting from scratch.' },
    { title: 'Strong Community Support', description: 'PHP has a significant, dynamic community that offers tutorials, resources, and forums. This collaborative setting allows developers to identify solutions quickly and stay updated with best practices.' },
    { title: 'Enhanced Security Features', description: 'PHP comes with built-in security features to protect web applications. By implementing these protocols, businesses can safeguard confidential data and uphold user confidence.' },
    { title: 'Scalability', description: 'PHPs architecture supports scalable applications, facilitating adjustments as your business expands. This adaptability guarantees that your web solutions can evolve in line with your requirements.' },
    { title: 'Dynamic Content Management', description: 'PHP excels in developing dynamic websites that update content instantaneously. This functionality improves user engagement and facilitates tailored experiences across platforms.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'Custom PHP Development',
        description: 'Leverage our custom PHP development services to build tailored applications that address your specific business requirements. Our top-rated backend developers design robust and scalable architectures that ensure optimal performance and flexibility in evolving digital landscapes.'
    },
    {
        image: serviceImg2,
        title: 'PHP Web Application Development',
        description: 'Harness our PHP web application development services to build dynamic, high-performance applications. We implement robust frameworks and top methods, boosting user engagement and optimizing corporate processes for increased reliability and effectiveness.'
    },
    {
        image: serviceImg3,
        title: 'PHP Mobile Application Development',
        description: 'Our PHP mobile application development services ensure seamless functionality across devices. Utilizing the latest technologies and responsive design principles, we deliver efficient mobile solutions that provide an engaging user experience, reducing abandonment rates.'
    },
    {
        image: serviceImg4,
        title: 'PHP UI/UX Development',
        description: 'Enhance user engagements through our PHP UI/UX development services. Our team employs the latest design methodologies for optimal application performance, building user-centric designs and intuitive interfaces that improve usability and engagement.'
    },
    {
        image: serviceImg5,
        title: 'PHP Plugin Development',
        description: 'Enhance your applications functionalities with our PHP plugin development services. Our custom plugins are engineered to seamlessly integrate into your existing systems, optimizing performance and adding valuable features tailored to your business requirements.'
    },
    {
        image: serviceImg6,
        title: 'PHP ERP Application Development',
        description: 'Transform your ERP systems with our best-in-class PHP ERP application development services. Our scalable and robust solutions ensure seamless integration with existing infrastructures, boosting productivity and streamlining intricate business processes.'
    },
    {
        image: serviceImg7,
        title: 'PHP Consulting Services',
        description: 'Tap into our PHP consulting expertise to assist you in navigating project complexities. Our strategic insights on technology adoption, performance optimization, and architecture design empower you to enhance the potential of your PHP web applications.'
    },
    {
        image: serviceImg8,
        title: 'Ongoing Maintenance and Support',
        description: 'Ensure your applications remain robust with our round-the-clock support and maintenance services. We conduct timely updates, analyze performance, and proactively address issues, ensuring your PHP solutions upheld reliability and optimal functioning.'
    },
    {
        image: serviceImg9,
        title: 'Custom API Development',
        description: 'Our custom API development services ensure seamless system integration. We provide carefully designed and implemented APIs that enhance functionality and interoperability, facilitating seamless connection and optimal performance across your applications.'
    },
];

// Component definitions
const ServiceCard = ({ image, title, description }) => (
    <div className="text-center">
        <img src={image} alt={title} className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

const Feature = ({ title, description }) => (
    <div>
        <h3 className="text-xl font-semibold text-blue-400 mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const FeatureCard = ({ text }) => (
    <div className="bg-[#3a3a3e] p-4 rounded-lg">
        <p className="text-gray-300 text-sm">{text}</p>
    </div>
);

const ProficiencyCard = ({ title, description }) => (
    <div className="bg-[#0D1A2B] p-6 rounded-lg border border-gray-800 text-center">
        <h3 className="text-lg font-semibold text-blue-400 mb-3">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

const TechStackItem = ({ name, logo }) => (
    <div className="text-center">
        <img src={logo} alt={name} className="w-12 h-12 mx-auto mb-2" />
        <p className="text-white text-sm font-medium">{name}</p>
    </div>
);

const StatItem = ({ value, label }) => (
    <div className="text-center">
        <p className="text-4xl font-bold text-blue-900">{value}</p>
        <p className="text-gray-400 mt-2">{label}</p>
    </div>
);

const AwardItem = ({ image, text }) => (
    <div className="text-center">
        <img src={image} alt={text} className="w-20 h-20 mx-auto mb-4" />
        <p className="text-sm">{text}</p>
    </div>
);

const EngagementCard = ({ title, description, points }) => (
    <div className="bg-[#0D1A2B] p-8 rounded-lg border border-gray-800">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <ul className="space-y-2">
            {points.map((point, index) => (
                <li key={index} className="text-gray-300 text-sm flex items-center">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mr-3"></div>
                    {point}
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
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-white font-medium">{question}</span>
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
                <div className="px-6 pb-6">
                    <p className="text-gray-400">{answer}</p>
                </div>
            )}
        </div>
    );
};

const PHPPage = () => {
  return (
    <div className="bg-[#00070E] text-white overflow-x-hidden">
     <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">
                Reliable <span className="text-blue-900">PHP</span><br />
                Development Company
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Your Gateway to High-Quality PHP Application Development
              </p>
              <p className="mt-4 text-lg text-gray-400">
                Achieve exceptional business outcomes with Alpixn Technologies' best-in-class PHP development services. Leverage the versatility of PHP to meet diverse needs, delivering fast, adaptable, and efficient web solutions that foster innovation and development.
              </p>
              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <button className="bg-blue-800 text-black font-bold py-3 px-6 rounded-md hover:bg-blue-800 transition duration-300">
                  Get Started
                </button>
                <button className="border border-blue-900 text-blue-900 font-bold py-3 px-6 rounded-md hover:bg-blue-900 hover:text-black transition duration-300">
                  Book a call with our expert
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img src={pythonLogo} alt="PHP" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              PHP Experts, Handpicked by Innovators
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
                Challenges We'll Assist You Resolve with Our PHP Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard image={seamlessMicroservices} title="Advanced Session Management" description="Our PHP development services include effective session management strategies, ensuring enhanced security, user experience, and data integrity across multiple sessions- fostering engagement." />
                <ServiceCard image={singleThreaded} title="Complex Dependency Management" description="Our PHP experts efficiently manage intricate dependencies, streamlining your application's architecture to enhance performance, reliability, and security while reducing application maintenance challenges." />
                <ServiceCard image={codeQuality} title="API Rate Limiting and Throttling" description="With our PHP web developers, you can implement effective API rate limiting and throttling, ensuring optimal resource usage and preventing overloads- maintaining app responsiveness." />
                <ServiceCard image={memoryLeak} title="Efficient Custom Exception Handling" description="We at Alpixn Technologies specialize in custom exception handling, enabling refined error management and enhancing user experience for robust and reliable services through tailored error management." />
            </div>
        </div>

        <div className="bg-blue-500 py-6 my-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0">Elevate Your Projects: PHP Development Made Easy</h2>
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
                Elevate Your Projects: PHP Development Made Easy
            </h2>
            <img src={pythonExpert} alt="Expert PHP Development" className="w-96 h-auto rounded-lg shadow-lg mb-12 mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <Feature
                title="Result-Driven Development"
                description="Our PHP development services prioritize providing high-quality, scalable applications that cater to specific business requirements, ensuring profound outcomes and exceptional user experiences."
                />
                <Feature
                title="Proximity for Better Collaboration"
                description="By choosing our PHP website development company India, you benefit from a close-knit team environment, enhancing communication, and accelerating project schedules for more efficient development."
                />
                <Feature
                title="Robust Security Protocols"
                description="In every PHP project we work on, we prioritize robust security measures, safeguarding your web and mobile applications against threats and consistently ensuring your data's safety."
                />
                <Feature
                title="Comprehensive Post-Launch Support"
                description="Our commitment extends beyond launch with comprehensive post-launch support, enabling you to address complications and enhance your applications for continued success."
                />
            </div>

            <p className="text-center mt-12 text-gray-400 text-lg">
                Have a question? <a href="#" className="text-blue-400 font-semibold hover:underline">Speak to an expert</a>
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                PHP Development Services That Drive Tangible Results
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
                <h2 className="text-4xl font-bold">PHP Ninjas: Slicing Bugs, Not Budgets!</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Looking to hire the best PHP Developers? Our PHP Development Company boasts a team of experienced PHP developers committed to crafting innovative solutions that elevate your business. We prioritize performance and reliability to provide exceptional PHP results that truly have an impact.
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
                                <span className="text-gray-400">US | PHP | FACILITY MANAGEMENT</span>
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
                <h2 className="text-4xl font-bold mt-2">Why Choose <span className="text-blue-900">PHP</span> for Robust Web Solutions?</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    PHP is an open-source programming language, renowned for its adaptability, speed, user-friendliness, and robust community support in web development. By utilizing PHP programming, businesses can establish a strong online presence through dynamic, high-performing applications.
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
                    Technology Stack We Use For PHP Development
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
                        At Alpixn Technologies, we offer three flexible PHP engagement models to suit your project needs: Dedicated Team for full-time, integrated support; Staff Augmentation to boost your current team with our experts; and Project-Based for tailored goal-focused solutions. We deliver the perfect mix of flexibility and expertise to drive your success.
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

export default PHPPage;