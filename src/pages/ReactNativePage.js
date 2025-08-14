import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

// Using same image imports as Python page
import reactNativeLogo from '../Assets/reactnative1.png';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import reactNativeExpert from '../Assets/react-native2.webp';
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
        question: 'What differentiates your React Native app development company from others?',
        answer: 'Our React Native app development agency stands out due to our extensive industry experience and a dedicated team focused on innovation. We emphasize establishing strong client partnerships, tailoring each project to align with your business objectives.'
    },
    {
        question: 'How much does it cost to develop an app using React Native?',
        answer: 'There are different costs for building a React Native app, including the project complexity, desired features, and the development team\'s expertise. An initial consultation helps clarify your specific needs and gives a more realistic view of investment.'
    },
    {
        question: 'How does the outsourcing process work for React Native app development?',
        answer: 'At our React Native development firm, we maintain high-quality standards through thorough testing, code reviews, and adherence to industry best practices. Our iterative development process encourages continuous feedback.'
    },
    {
        question: 'How do you ensure quality in your React Native development services?',
        answer: 'By choosing our React Native app development services, you access proficient developers with specialized knowledge. We use advanced tools and techniques to create scalable, high-performance applications that help your business meet its objectives.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "Our dedicated team model provides a specialized group of React Native developers who focus exclusively on your project. This results in app-centric React Native development services tailor-made for your business goals, ensuring seamless integration with your company culture.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "With our team augmentation model, seamlessly hire skilled React Native developers into your existing team, enhancing your capabilities and accelerating project delivery without sacrificing either quality or speed, providing cost-effective solutions.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "Opt for our project-based model for customized React Native app development services. We guide you through the process, handling all phases of your project and delivering results to specification on time and within budget.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'Axios', logo: jestLogo },
    { name: 'Expo', logo: mongooseLogo },
    { name: 'Fastlane', logo: nestJsLogo },
    { name: 'Jest', logo: sequelizeLogo },
    { name: 'Paper', logo: socketIoLogo },
    { name: 'Elements', logo: typescriptLogo },
    { name: 'Babel', logo: webpackLogo },
    { name: 'Firebase', logo: eslintLogo },
    { name: 'PostgreSQL', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'Objective-C/Java Modules', description: 'Leverage Objective-C or Java modules to access device functionalities, enhancing performance and user experience while facilitating seamless integration with existing native applications.' },
    { title: 'Hermes Engine', description: "The Hermes engine optimizes JavaScript execution, resulting in quicker load times and lower memory usage, thereby reducing memory consumption for an optimized user experience." },
    { title: 'React Native Skia', description: 'Utilize React Native Skia for advanced graphic rendering, facilitating impressive visuals and animations that engage users and ensure a distinctive experience with high-performance graphics.' },
    { title: 'Crash Reporting', description: 'Crash reporting tools provide critical insights into application stability, allowing mobile app developers to resolve issues quickly and uphold a dependable user experience across all devices.' },
    { title: 'Code Obfuscation', description: 'Code obfuscation techniques fortify application security against reverse engineering, ensuring sensitive data remains protected from threats and increasing user trust in your mobile application.' },
    { title: 'JSI (JavaScript Interface)', description: 'JavaScript Interface (JSI) facilitates seamless interaction between JavaScript and Native code, enhancing app responsiveness and supporting dynamic, interactive user experiences with optimal performance.' },
    { title: 'GraphQL Integration', description: 'Integrating GraphQL streamlines data querying, reducing transfer times and optimizing performance to ensure swift information delivery to users with efficient data management.' },
    { title: 'React Native Skia', description: 'Leverage React Native Skia to create advanced animations and graphics that boost user engagement and enhance the overall appeal of your app, making it stand out in the marketplace.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'React Native App Ideation & Strategy',
        description: 'As a premier React Native app development agency, we transform your concepts into a strategic roadmap, ensuring a successful launch that captivates users and drives sustainable growth from the outset.'
    },
    {
        image: serviceImg2,
        title: 'Custom React Native App Development',
        description: 'Our bespoke React Native app development services empower your brand with specialized solutions, delivering high-performance apps that captivate users and provide a seamless experience, maximizing your market presence.'
    },
    {
        image: serviceImg3,
        title: 'React Native Migration Services',
        description: 'Specializing in smooth migration, our React Native application development company enhances your existing apps functionalities without disrupting operations, enabling the effortless integration of modern features and technologies.'
    },
    {
        image: serviceImg4,
        title: 'React Native Support & Maintenance',
        description: 'With our expert support and maintenance, your app will consistently perform at its best, benefiting from timely updates and optimizations that improve user satisfaction and prolong its lifecycle for sustained success.'
    },
    {
        image: serviceImg5,
        title: 'React Native UI/UX Design Excellence',
        description: 'Our React Native app agency specializes in creating exceptional UI/UX designs that enhance usability and aesthetic appeal, resulting in increased user retention and engagement and ultimately driving your brands success.'
    },
    {
        image: serviceImg6,
        title: 'Comprehensive Testing & Optimization',
        description: 'We conduct meticulous testing and optimization to guarantee your app delivers a flawless experience, minimizing bugs and enhancing reliability, ultimately fostering user trust and encouraging favorable feedback.'
    },
    {
        image: serviceImg7,
        title: 'Real-Time Analytics Integration',
        description: 'Integrating real-time analytics offers critical insights into user behavior, allowing you to understand how users interact, enabling data-driven decisions that boost engagement and refine features.'
    },
    {
        image: serviceImg8,
        title: 'Scalable Cloud Integration Solutions',
        description: 'Our scalability-focused cloud integration solutions allow your app to grow with your business, providing dependable performance and accessibility to meet growing user demands without sacrificing quality.'
    },
    {
        image: serviceImg9,
        title: 'Security Audits for React Native Apps',
        description: 'We perform rigorous security audits to identify and mitigate vulnerabilities, ensuring your app complies with industry standards, safeguarding user data, and enhancing your brands reputation for security and trust.'
    },
];

// Component definitions
const ServiceCard = ({ image, title, description }) => (
    <div className="bg-[#0D1A2B] p-8 rounded-lg border border-gray-800 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img src={image} alt={title} className="h-20 mb-6 self-start" />
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const Feature = ({ title, description }) => (
    <div className="text-left">
        <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const FeatureCard = ({ text }) => (
    <div className="bg-[#1E2A3A] p-4 rounded-lg border border-gray-700">
        <p className="text-sm text-gray-300">{text}</p>
    </div>
);

const ProficiencyCard = ({ title, description }) => (
    <div className="bg-[#0D1A2B] p-6 rounded-lg border border-gray-800 text-center">
        <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

const TechStackItem = ({ name, logo }) => (
    <div className="flex flex-col items-center">
        <div className="bg-white p-4 rounded-lg mb-2">
            <img src={logo} alt={name} className="h-12 w-12" />
        </div>
        <span className="text-white text-sm font-medium">{name}</span>
    </div>
);

const StatItem = ({ value, label }) => (
    <div className="text-center">
        <div className="text-4xl font-bold text-white mb-2">{value}</div>
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
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <ul className="space-y-2">
            {points.map((point, index) => (
                <li key={index} className="flex items-center text-sm text-gray-400">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {point}
                </li>
            ))}
        </ul>
    </div>
);

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#0D1A2B] rounded-lg border border-gray-800">
            <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
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

const ReactNativePage = () => {
  return (
    <div className="bg-[#00070E] text-white overflow-x-hidden">
        <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">
                Top Rated <span className="text-green-400">React Native</span><br />
                App Development Company
              </h1>
              <p className="mt-4 text-xl text-white">
                Your Preferred Partner for Impactful React Native Mobile Applications
              </p>
              <p className="mt-4 text-lg text-white">
                Take your brand to new heights with Alpixn Technologies' React Native app development services, where innovation meets excellence. We design unique mobile experiences that engage and captivate users - driving sustainable growth and establishing your business as a frontrunner in the digital age.
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
              <img src={reactNativeLogo} alt="React Native" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              Endorsed by Premier Brands for Mobile App Development
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
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
                Challenges We'll Assist You Resolve with Our React Native Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard image={seamlessMicroservices} title="Custom Font Integration" description="Our experts ensure flawless custom font integration, allowing your distinctive brand identity to shine while preserving platform performance and uniformity across all devices." />
                <ServiceCard image={singleThreaded} title="Bridge Performance" description="We optimize bridge performance to ensure seamless interaction between native and JavaScript components for a faster, more fluid user interface (UI) experience that delights users." />
                <ServiceCard image={codeQuality} title="Animated API Limitations" description="We tackle animated API difficulties with inventive solutions, providing seamless, captivating animations that boost user interaction and elevate graphics for enhanced user engagement." />
                <ServiceCard image={memoryLeak} title="Code Splitting" description="We address code-splitting challenges with strategic implementations, ensuring efficient loading and seamless transitions that elevate the user experience and optimize app performance." />
            </div>
        </div>

        <div className="bg-blue-500 py-6 my-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0 text-white">Transform your business with our Bespoke React Native Development Services</h2>
                <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded-md flex items-center hover:bg-gray-200 transition duration-300 shrink-0">
                Connect With Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </button>
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-8 text-white">
                Unveil the Benefits of Choosing Our React Native Expertise
            </h2>
            <img src={reactNativeExpert} alt="Expert React Native Development" className="w-96 h-auto rounded-lg shadow-lg mb-12 mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <Feature
                title="Accelerated Feedback Loops"
                description="We promote expedited feedback cycles that facilitate swift modifications, ensuring your app evolves in line with user needs, leading to a more immersive and practical experience that drives user satisfaction and retention."
                />
                <Feature
                title="Holistic Cost Management"
                description="Our holistic cost management strategy maximizes your investment, delivering high-quality React Native development services that bring outstanding value without hidden costs, ensuring transparent pricing throughout the development lifecycle."
                />
                <Feature
                title="Risk Mitigation Strategies"
                description="We use proactive strategies to safeguard your project from setbacks, ensuring timely delivery and consistent performance, so reaffirming your confidence in React Native outsourcing with comprehensive project management."
                />
                <Feature
                title="Post-Launch Growth Support"
                description="Our committed post-launch growth support equips you to continuously improve user engagement and app scalability, setting you up for success in React Native development with ongoing optimization and feature enhancements."
                />
            </div>

            <p className="text-center mt-12 text-gray-400 text-lg">
                Have a question? <a href="#" className="text-blue-400 font-semibold hover:underline">Speak to an expert</a>
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
                Leading-edge React Native App Development Services for Dynamic Applications
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
                <h2 className="text-4xl font-bold text-white">Rapid Development, Stunning Interfaces, Proven Outcomes</h2>
                <p className="mt-4 text-lg text-white max-w-4xl mx-auto">
                    Seeking the best React Native developers? Look no further than Alpixn Technologies—your hub of talented experts who deliver rapid development, visually appealing interfaces, and proven outcomes, empowering your app to achieve exceptional success in the competitive mobile marketplace.
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
                                <span className="text-gray-400">US | REACT NATIVE | FACILITY MANAGEMENT</span>
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
                <h2 className="text-4xl font-bold mt-2 text-white">Why Choose <span className="text-green-400">React Native</span> to Future-proof Your Applications?</h2>
                <p className="mt-4 text-lg text-white max-w-4xl mx-auto">
                    React Native has emerged as a premier framework for mobile application development, offering powerful features that ensure scalability and optimal performance for applications designed to withstand future demands and market changes.
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
                    Technology Stack We Use For ReactNative Development
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
                        At Alpixn Technologies, we offer three flexible ReactNative engagement models to suit your project needs: Dedicated Team for full-time, integrated support; Staff Augmentation to boost your current team with our experts; and Project-Based for tailored goal-focused solutions. We deliver the perfect mix of flexibility and expertise to drive your success.
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

export default ReactNativePage;