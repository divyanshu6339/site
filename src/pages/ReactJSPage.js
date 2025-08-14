import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

// Using the same image imports from your original code
import reactJsLogo from '../Assets/reactjs1.webp';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import reactExpert from '../Assets/react-js-6719de4507cd4.webp';
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
        question: 'What is Alpixn Technologies\' React JS development process?',
        answer: 'Our React JS application development process involves several stages: requirements collection and initial consultation, design and architecture planning, agile methods for iterative development, rigorous testing and quality assurance, and finally, deployment and continuous support.'
    },
    {
        question: 'How do you ensure the quality of your ReactJS development projects?',
        answer: 'We ensure quality through a comprehensive methodology incorporating rigorous testing phases, best coding practices, and continuous integration and delivery (CI/CD) adherence. Our Agile technologies also involve frequent feedback loops and iterative improvements.'
    },
    {
        question: 'What is the typical cost of custom React JS development services?',
        answer: 'The cost of React development services varies based on the complexity, scale, and type of engagement model chosen. We provide flexible pricing options, including fixed-price, time and materials, and dedicated team models.'
    },
    {
        question: 'What are the benefits of using ReactJS for my project?',
        answer: 'ReactJS offers numerous benefits, including high performance with its virtual DOM, reusable components for efficient development, a robust ecosystem with extensive libraries and tools, and a community for support.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "Alpixn Technologies' 'Dedicated Team' model for ReactJS development acts as an extension of your organization, operating as an offshore development center (ODC). This model provides the benefit of having a team entirely focused on your project, ensuring that your objectives are met with deep integration and alignment.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "The 'Team Augmentation' model offered by Alpixn Technologies enhances your existing team with skilled ReactJS programmers, offering customized expertise that complements your internal resources. This model offers seamless integration, allowing our experts to collaborate with your team without disruption.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "Alpixn Technologies' 'Project Based' model is best suited for well-defined projects with deadlines and scope constraints. Resource allocation is optimized for your specific project's requirements, and a structured approach to risk reductions helps address possible difficulties proactively.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'Redux', logo: jestLogo },
    { name: 'Redux Query', logo: mongooseLogo },
    { name: 'ESLint', logo: nestJsLogo },
    { name: 'Webpack', logo: sequelizeLogo },
    { name: 'JavaScript', logo: socketIoLogo },
    { name: 'TypeScript', logo: typescriptLogo },
    { name: 'Babel', logo: webpackLogo },
    { name: 'Firebase', logo: eslintLogo },
    { name: 'PostgreSQL', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'Quick Rendering', description: 'ReactJS\'s virtual DOM ensures lightning-fast rendering and responsiveness. Expert ReactJS programmers utilize this technology to create interfaces that keep users engaged with swift, seamless interactions.' },
    { title: 'Code Stability', description: "ReactJS's modular component structure makes applications stable and maintained. This process ensures long-term dependability and seamless upgrades by reducing disruptions and promoting continuous progress." },
    { title: 'Steep Learning Curve', description: 'ReactJS has a steep learning curve. Hire ReactJS developers to navigate this software complexity. To ensure results, they streamline the process, expedite development, and find cutting-edge solutions to complications.' },
    { title: 'Reusable Components', description: 'ReactJS boosts efficiency via reusable components, lessening development time and expenses. This modular strategy allows scaling and adapting quickly, speeding up project completion and ongoing maintenance.' },
    { title: 'Unidirectional Data Flow', description: 'ReactJS\'s one-way data flow improves stability and makes maintenance easier. Further, this approach minimizes bugs and boosts overall performance by ensuring consistent, reliable application behavior.' },
    { title: 'Enhanced Performance', description: 'ReactJS\'s effectual rendering techniques maximize performance. Utilizing this tech ensures quick, responsive apps that deliver prime user experiences and high satisfaction.' },
    { title: 'Flexibility', description: 'The adaptable framework of ReactJS accommodates a wide range of development requirements. Customized solutions are built to fit unique business requirements, offering versatile apps that meet varied objectives.' },
    { title: 'Rapid Development', description: 'Component-based architecture (CBA), a fundamental pattern in ReactJS, facilitates the deployment of dynamic applications by breaking down a user interface (UI) into reusable, independent components.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'Custom ReactJS Development',
        description: 'Commercial-off-the-shelf (COTS) products have limited functionality. Our bespoke React software development tailors solutions to meet your business requirements, guaranteeing efficiency and a competitive edge.'
    },
    {
        image: serviceImg2,
        title: 'Web Application Development',
        description: 'Generic web applications often suffer from performance complications and user discontent. Our ReactJS web development company builds dynamic web applications that improve user engagement and expedite corporate processes.'
    },
    {
        image: serviceImg3,
        title: 'Mobile Application Development',
        description: 'Our React software development services tackle the challenge of inconsistent user experiences by building responsive, high-performance mobile apps that offer a consistent, engaging experience on any device.'
    },
    {
        image: serviceImg4,
        title: 'Upgrades and Migration',
        description: 'Our ReactJS development services tackle outdated applications by ensuring smooth upgrades and migrations, eliminating security concerns, performance issues, and integration complications with modern technologies and features.'
    },
    {
        image: serviceImg5,
        title: 'ReactJS UI/UX Development',
        description: 'As a top react development company, we ensure custom UI/UX development that improves user experience and meets precise requirements. We provide tailored designs, ensuring an application that performs exceptionally.'
    },
    {
        image: serviceImg6,
        title: 'ReactJS Plugin Development',
        description: 'We provide the best ReactJS plugin development services to extend your app\'s capabilities, adding customized features tailored to your specific business requirements, enhancing performance, and ensuring a more robust solution.'
    },
    {
        image: serviceImg7,
        title: 'ReactJS ERP Application Development',
        description: 'As a top React JS software development company, we build robust ERP apps that integrate seamlessly with your current systems- improving productivity, simplifying business procedures, and adapting to your specific requirements.'
    },
    {
        image: serviceImg8,
        title: 'ReactJS Consulting',
        description: 'Without professional guidance, you might miss key opportunities. Our result-driven ReactJS consulting services offer strategic discernment and solutions, assisting you navigate complicated decisions and maximizing the potential of your ReactJS projects.'
    },
    {
        image: serviceImg9,
        title: 'Ongoing Improvement',
        description: 'Our ongoing improvement services for ReactJS apps ensure regular updates and enhancements customized to your requirements. This keeps your application at the forefront of innovation, averting potential losses and giving you an advantage over competitors.'
    },
];

// Component definitions
const ServiceCard = ({ image, title, description }) => (
    <div className="text-center">
        <img src={image} alt={title} className="mx-auto h-20 mb-4" />
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const Feature = ({ title, description }) => (
    <div>
        <h3 className="text-xl font-semibold text-[#00d8ff] mb-4">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const FeatureCard = ({ text }) => (
    <div className="bg-[#1a2332] p-4 rounded-lg border border-gray-700">
        <p className="text-sm text-gray-300">{text}</p>
    </div>
);

const ProficiencyCard = ({ title, description }) => (
    <div className="bg-[#0D1A2B] p-6 rounded-lg border border-gray-800 text-center hover:border-[#00d8ff] transition-colors duration-300">
        <h3 className="text-lg font-semibold text-[#00d8ff] mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
);

const TechStackItem = ({ name, logo }) => (
    <div className="flex flex-col items-center text-center">
        <img src={logo} alt={name} className="h-16 w-16 mb-3" />
        <span className="text-white font-medium">{name}</span>
    </div>
);

const StatItem = ({ value, label }) => (
    <div className="text-center">
        <div className="text-4xl font-bold text-[#00d8ff] mb-2">{value}</div>
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
    <div className="bg-[#0D1A2B] p-8 rounded-lg border border-gray-800 h-full">
        <h3 className="text-xl font-semibold text-[#00d8ff] mb-4">{title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-2">
            {points.map((point, index) => (
                <li key={index} className="text-gray-400 text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#00d8ff] rounded-full mr-3"></div>
                    {point}
                </li>
            ))}
        </ul>
    </div>
);

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="bg-[#0D1A2B] border border-gray-800">
            <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold text-white">{question}</span>
                <svg
                    className={`w-5 h-5 text-[#00d8ff] transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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

const ReactJSPage = () => {
  return (
    <div className="bg-[#00070E] text-white overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">
                Leading <span className="text-[#00d8ff]">React Js</span><br />
                Development Company
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Ignite Innovation with Top ReactJS Web Development Specialists!
              </p>
              <p className="mt-4 text-lg text-gray-400">
                Alpixn Technologies, a top ReactJS development company, offers innovative tech services for creating high-performance, secure applications. With 14+ years of experience and 150+ tech pioneers, we build robust, scalable solutions that ensure the highest standards.
              </p>
              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <button className="bg-[#00d8ff] text-black font-bold py-3 px-6 rounded-md hover:bg-[#00b8df] transition duration-300">
                  Get Started
                </button>
                <button className="border border-[#00d8ff] text-[#00d8ff] font-bold py-3 px-6 rounded-md hover:bg-[#00d8ff] hover:text-black transition duration-300">
                  Book a call with our expert
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img src={reactJsLogo} alt="ReactJS" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              Preferred by Tech's Elite For Top-Tier Solutions
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
                Challenges We'll Assist You Resolve with Our ReactJS Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard image={seamlessMicroservices} title="Handling Intricate State Management" description="We manage intricate data flows seamlessly with advanced state management strategies and prevent memory leaks in your React JS applications." />
                <ServiceCard image={singleThreaded} title="Streamlined Code Maintainability" description="As a leading ReactJS app development company, we adhere to best practices and coding standards, ensuring clean, scalable, and maintainable codes." />
                <ServiceCard image={codeQuality} title="Accelerated ReactJS Development Cycles" description="Our React programmers leverage their expertise to implement efficient development workflows, ensuring faster project delivery without compromising quality." />
                <ServiceCard image={memoryLeak} title="Trusted ReactJS Development Partner" description="Get an exemplary team of dedicated ReactJS developers skilled at delivering user-friendly components that distinguish your React JS applications from the rest of the pack." />
            </div>
        </div>

        <div className="bg-[#00d8ff] py-6 my-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0 text-black">Transform Your Business with Our Bespoke ReactJS Development</h2>
                <button className="bg-white text-[#00d8ff] font-bold py-2 px-4 rounded-md flex items-center hover:bg-gray-200 transition duration-300 shrink-0">
                Connect With Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </button>
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-8">
                What Our Premier ReactJS Solutions Offer You
            </h2>
            <img src={reactExpert} alt="Expert ReactJS Development" className="w-96 h-auto rounded-lg shadow-lg mb-12 mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <Feature
                title="Result-oriented Work Quality"
                description="Outsource React JS to our test-driven development-focused team and ensure high-quality, scalable applications with exceptional user experiences."
                />
                <Feature
                title="Safety & Security Compliance"
                description="Rely on our React JS web development agency for robust web applications that comply with industry-leading safety and security protocols, safeguarding your data."
                />
                <Feature
                title="Acquiring Skilled Resources"
                description="We employ dedicated ReactJS developers with extensive experience building dynamic and responsive applications to ensure your project benefits from agile methodologies and avant-garde solutions."
                />
                <Feature
                title="Cost Effectiveness"
                description="We provide best-in-class React JS services at competitive rates. Our efficient development processes ensure exceptional value without compromising quality or performance."
                />
            </div>

            <p className="text-center mt-12 text-gray-400 text-lg">
                Have a question? <a href="#" className="text-[#00d8ff] font-semibold hover:underline">Speak to an expert</a>
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                ReactJS Development Services That Delivers Real Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {developmentServices.map((service, index) => (
                    <div key={index} className="bg-[#0D1A2B] p-8 rounded-lg border border-gray-800 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={service.image} alt={service.title} className="h-24 mb-6 self-start" />
                        <h3 className="text-xl font-semibold text-[#00d8ff] mb-4">{service.title}</h3>
                        <p className="text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Our ReactJS Developers' Proven Mastery</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Seeking the industry's best ReactJS expertise? Our dedicated ReactJS developers excel with certified mastery in agile methodologies and deep proficiency in React's core functionalities. Offering round-the-clock assistance, we provide bespoke solutions that set industry standards for performance and innovation.
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
                                <span className="text-gray-400">US | REACT | FACILITY MANAGEMENT</span>
                            </div>
                            <a href="#" className="flex items-center text-[#00d8ff] font-semibold hover:underline">
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
                <h2 className="text-4xl font-bold mt-2">Why is <span className="text-blue-300">ReactJS</span> the Go-To Choice for Building Scalable Applications?</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    ReactJS's simple architecture, adaptability, and large library ecosystem make it the perfect language for scalable projects. Its strong frameworks and simple syntax enable rapid development, which qualifies for both startups and large enterprises aiming for efficient and maintainable solutions.
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
                    Technology Stack We Use For ReactJS Development
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
                        At Alpixn Technologies, we offer three flexible ReactJS engagement models to suit your project needs: Dedicated Team for full-time, integrated support; Staff Augmentation to boost your current team with our experts; and Project-Based for tailored goal-focused solutions. We deliver the perfect mix of flexibility and expertise to drive your success.
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

export default ReactJSPage;