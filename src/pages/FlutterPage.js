import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

// Using the same images from the original Python page
import flutterLogo from '../Assets/flutter1.png';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import flutterExpert from '../Assets/flutter2.webp';
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
        question: 'What are the advantages of hiring remote Flutter developers?',
        answer: 'Hiring remote Flutter developers opens the door to a global talent pool, allowing you to leverage exceptional skills and diverse experiences that can elevate your project. This flexibility reduces overhead costs and speeds up project timelines.'
    },
    {
        question: 'What is the cost structure for outsourcing Flutter app development services?',
        answer: 'The cost of outsourcing Flutter app development varies significantly based on your project\'s complexity and scope. A top Flutter development company provides transparent and competitive pricing models, helping you understand the financial commitment.'
    },
    {
        question: 'Can I make changes to the project scope after development begins?',
        answer: 'Absolutely! Our agile methodology supports adjustments throughout the development process. Working with a responsive Flutter development agency means your evolving ideas are prioritized, allowing your project to adapt effectively.'
    },
    {
        question: 'What is the initial consultation process for Flutter application development services?',
        answer: 'Our initial consultation is a strategic conversation where we thoroughly explore your project\'s vision and goals. This foundational meeting enables us to customize our solutions to fit your needs, setting the stage for successful collaboration.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "Our Dedicated Team model immerses you in a group of highly specialized and experienced Flutter experts who integrate seamlessly into your organization. This close collaboration fosters continuous innovation and allows for agile responses to changing project requirements, delivering custom solutions that effectively promote business growth.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "With our Team augmentation model, you can effortlessly integrate our experienced Flutter developers into your current team. This strategy enhances your project's skill set and capacity while you retain complete control, resulting in improved efficiency- keeping your Flutter application development at the forefront of technology.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "For clients with clear goals and timelines, our Project-Based model is ideal. By focusing on defined outcomes, our Flutter app development services company creates tailored solutions that improve operational efficiency, ensuring timely delivery while offering the flexibility to adapt.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'Flutter SDK', logo: jestLogo },
    { name: 'Dart', logo: mongooseLogo },
    { name: 'Riverpod', logo: nestJsLogo },
    { name: 'GetX', logo: sequelizeLogo },
    { name: 'Bloc', logo: socketIoLogo },
    { name: 'Hive', logo: typescriptLogo },
    { name: 'Firebase', logo: webpackLogo },
    { name: 'MongoDB', logo: eslintLogo },
    { name: 'Tailwind CSS', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'Single Codebase Architecture', description: 'Flutter\'s single codebase enables simultaneous development for iOS and Android, significantly cutting down development time and costs while ensuring consistent platform functionality.' },
    { title: 'Hot Reload Functionality', description: "With hot reload, our developers can instantly view changes in the app, speeding up development and enabling quick adjustments without losing the current state or data." },
    { title: 'Native Performance', description: 'Flutter provides native-like performance, ensuring fast and smooth interactions that meet user expectations, which is essential for standing out in today\'s competitive mobile industry.' },
    { title: 'Rich Set of Widgets', description: 'Flutter offers a comprehensive library of customizable widgets, allowing developers to create visually stunning and interactive user interfaces that enhance engagement and satisfaction.' },
    { title: 'Custom Rendering Engine', description: 'The custom rendering engine offers flexibility in UI design, ensuring your app looks and performs beautifully across all devices, helping it stand out in a crowded marketplace.' },
    { title: 'Declarative UI Approach', description: 'Flutter\'s declarative UI approach simplifies development and improves code readability, making maintenance easier and allowing for quicker updates as your app evolves.' },
    { title: 'Cross-Platform Consistency', description: 'Achieve a consistent look across platforms, enhancing user experience while minimizing development efforts, making our Flutter development agency a reliable partner for your project.' },
    { title: 'Advanced Animation Support', description: 'Flutter\'s advanced animation capabilities enable smooth transitions and engaging interactions, enhancing user experience and increasing retention rates through captivating app functionality.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'Custom Flutter App Development',
        description: 'We excel in crafting bespoke Flutter applications tailored to your business needs, ensuring exceptional performance and user engagement. Our Flutter mobile app development services help you forge strong connections, driving growth and fostering customer loyalty.'
    },
    {
        image: serviceImg2,
        title: 'Cross-Platform Flutter App Solutions',
        description: 'Our cross-platform Flutter solutions allow you to reach iOS and Android users with a single codebase, simplifying development, reducing costs, and accelerating time-to-market, maintaining high quality, and maximizing your app\'s visibility and impact.'
    },
    {
        image: serviceImg3,
        title: 'Seamless Flutter App Migration',
        description: 'By leveraging the latest technology, we facilitate a smooth migration of your existing applications to Flutter, preserving core functionality while enhancing performance for greater scalability and improved user experience.'
    },
    {
        image: serviceImg4,
        title: 'Engaging UI/UX Design for Flutter',
        description: 'Our skilled mobile app developers focus on creating visually appealing and user-friendly interfaces, emphasizing user-centric design to enhance satisfaction and engagement, resulting in higher conversion rates.'
    },
    {
        image: serviceImg5,
        title: 'Reliable Flutter App Maintenance',
        description: 'Our comprehensive maintenance services keep your Flutter app secure, current, and performing optimally. With regular performance monitoring and timely updates, you can concentrate on innovation and growth.'
    },
    {
        image: serviceImg6,
        title: 'Custom Flutter Plugin Development',
        description: 'We provide tailored Flutter plugin development to expand your app\'s functionality and meet specific business needs. This customization improves your app\'s potential and delivers a unique user experience.'
    },
    {
        image: serviceImg7,
        title: 'Flutter Web Migration Services',
        description: 'Our expert team simplifies migrating your mobile app to the web, ensuring a seamless transition that retains core functionality. This expanded accessibility increases your reach, allowing you to engage a wider audience.'
    },
    {
        image: serviceImg8,
        title: 'Testing and QA for Flutter Apps',
        description: 'We perform thorough testing and quality assurance on your Flutter applications to ensure they are bug-free and optimized for performance. Our meticulous approach guarantees a flawless user experience.'
    },
    {
        image: serviceImg9,
        title: 'Strategic Flutter Consultation Services',
        description: 'Our strategic Flutter consultation services offer comprehensive expert insights and tailored guidance that navigate your app development journey, aligning your business objectives with industry best practices.'
    },
];

// Component definitions
const ServiceCard = ({ image, title, description }) => (
    <div className="bg-[#1e3a8a] p-6 rounded-lg border border-blue-800 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img src={image} alt={title} className="h-20 mb-4" />
        <h3 className="text-xl font-semibold text-blue-300 mb-3">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
    </div>
);

const Feature = ({ title, description }) => (
    <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-300 mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </div>
);

const FeatureCard = ({ text }) => (
    <div className="bg-[#1e40af] p-4 rounded-lg border border-blue-700">
        <p className="text-gray-200 text-sm">{text}</p>
    </div>
);

const ProficiencyCard = ({ title, description }) => (
    <div className="bg-[#1e3a8a] p-6 rounded-lg border border-blue-800 text-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h3 className="text-lg font-semibold text-blue-300 mb-3">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
    </div>
);

const TechStackItem = ({ name, logo }) => (
    <div className="flex flex-col items-center">
        <div className="bg-white p-4 rounded-lg shadow-lg mb-2">
            <img src={logo} alt={name} className="h-12 w-12" />
        </div>
        <span className="text-white font-medium">{name}</span>
    </div>
);

const StatItem = ({ value, label }) => (
    <div className="text-center">
        <div className="text-4xl font-bold text-blue-400">{value}</div>
        <div className="text-gray-400 text-sm mt-2">{label}</div>
    </div>
);

const AwardItem = ({ image, text }) => (
    <div className="text-center">
        <img src={image} alt={text} className="h-16 mx-auto mb-4" />
        <p className="text-sm">{text}</p>
    </div>
);

const EngagementCard = ({ title, description, points }) => (
    <div className="bg-[#1e3a8a] p-8 rounded-lg border border-blue-800 h-full flex flex-col">
        <h3 className="text-2xl font-bold text-blue-300 mb-4">{title}</h3>
        <p className="text-gray-300 mb-6 flex-grow">{description}</p>
        <ul className="space-y-2">
            {points.map((point, index) => (
                <li key={index} className="text-blue-300 flex items-center">
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
        <div className="bg-[#1e3a8a] border border-blue-800 rounded-lg">
            <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-medium text-white">{question}</span>
                <span className="text-blue-400 text-2xl">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
                <div className="px-6 pb-4">
                    <p className="text-gray-300">{answer}</p>
                </div>
            )}
        </div>
    );
};

const FlutterPage = () => {
  return (
    <div className="bg-[#0f172a] text-white overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">
                Top Tier <span className="text-blue-400">Flutter</span><br />
                App Development Company
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Elevating Your Ideas with Exceptional Flutter™ Solutions
              </p>
              <p className="mt-4 text-lg text-gray-400">
                Awarded as a premier Flutter app development company, Alpixn Technologies creates innovative, high-performance mobile apps designed to elevate user experiences and accelerate business growth, merging advanced technology with a client-centered approach.
              </p>
              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300">
                  Get Started
                </button>
                <button className="border border-blue-500 text-blue-500 font-bold py-3 px-6 rounded-md hover:bg-blue-500 hover:text-white transition duration-300">
                  Book a call with our expert
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img src={flutterLogo} alt="Flutter" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              Trusted by Leaders for Mobile App Excellence
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
                Challenges We'll Assist You Resolve with Our Flutter Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard image={seamlessMicroservices} title="Flutter Webview Performance" description="Our expert Flutter app development company enhances Webview performance to ensure fast, seamless interactions that elevate user satisfaction." />
                <ServiceCard image={singleThreaded} title="Custom Widgets" description="Our experienced Flutter app developers design custom widgets tailored to your vision, making your app stand out and engage users effectively." />
                <ServiceCard image={codeQuality} title="Hot Reload Limitations" description="We tackle hot reload limitations head-on, optimizing your workflow for quicker updates and faster app launches without compromising on quality." />
                <ServiceCard image={memoryLeak} title="Native Module Integration" description="Our Flutter development agency simplifies the integration of native modules, ensuring maximizing performance for a flawless cross-platform experience." />
            </div>
        </div>

        <div className="bg-blue-600 py-6 my-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0">Elevate Your Project with Expert Guidance</h2>
                <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-md flex items-center hover:bg-gray-200 transition duration-300 shrink-0">
                Connect With Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </button>
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-8">
                Build Smarter, Faster with Flutter: Expertise You Can Trust
            </h2>
            <img src={flutterExpert} alt="Expert Flutter Development" className="w-96 h-auto rounded-lg shadow-lg mb-12 mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <Feature
                title="Collaborative Design Sprints"
                description="Our agile design sprints promote teamwork, rapidly bringing your ideas to life while keeping your vision central throughout the Flutter application development services."
                />
                <Feature
                title="Customizable Architecture"
                description="We offer flexible architecture tailored to your requirements, ensuring your Flutter mobile application can scale and adapt as your business evolves."
                />
                <Feature
                title="AI-Powered Analytics"
                description="Utilize AI-driven analytics for valuable insights into user behavior, optimizing your app's performance and boosting user engagement for maximum effectiveness."
                />
                <Feature
                title="Global Market Expertise"
                description="With our extensive knowledge of global markets, we strategically position your app for success, maximizing reach and impact through our top-tier Flutter development services."
                />
            </div>

            <p className="text-center mt-12 text-gray-400 text-lg">
                Have a question? <a href="#" className="text-blue-400 font-semibold hover:underline">Speak to an expert</a>
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                Effective Flutter Development Services For Real World Success
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {developmentServices.map((service, index) => (
                    <div key={index} className="bg-[#1e3a8a] p-8 rounded-lg border border-blue-800 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={service.image} alt={service.title} className="h-24 mb-6 self-start" />
                        <h3 className="text-xl font-semibold text-blue-300 mb-4">{service.title}</h3>
                        <p className="text-gray-300">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Spotlighting Successes: Transformative Flutter Projects</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Ready to elevate your app experience? For the strong focus on innovation, hire Flutter app developers who blend extensive knowledge of agile methodologies. Hire our skilled Flutter experts to deliver tailored solutions that boost performance, user engagement, and scalability while speeding up your time-to-market.
                </p>
            </div>

            <div className="bg-[#1e3a8a] rounded-xl shadow-lg p-8 border border-blue-800">
                <div className="flex justify-around items-center flex-wrap gap-8 border-b border-blue-700 pb-8 mb-8">
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
                        <p className="text-gray-300 mb-6">
                            Alpixn Technologies partnered with leading corporations to develop secure cloud-based solutions, enabling instant access to critical documents, streamlining processes, enhancing customer experience, and reducing costs. This results in successful partnerships with repeat business.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-blue-700 pt-4">
                            <div className="flex items-center gap-4">
                                <img src={usFlag} alt="US Flag" className="w-8 h-8" />
                                <span className="text-gray-300">US | FLUTTER | MOBILE DEVELOPMENT</span>
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
                <div className="bg-[#1e40af] rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between p-8 md:p-0 overflow-hidden">
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
                <h2 className="text-4xl font-bold mt-2">Why Is <span className="text-blue-400">Flutter</span> Mobile App Development The Ideal Choice</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Opting for Flutter means embracing efficiency, speed, and an outstanding user experience. As a leading Flutter app development company, we empower you to build impactful applications that engage users and drive business growth.
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
                    Technology Stack We Use For Python Development
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
                        At Alpixn Technologies, we offer three flexible Python engagement models to suit your project needs: Dedicated Team for full-time, integrated support; Staff Augmentation to boost your current team with our experts; and Project-Based for tailored goal-focused solutions. We deliver the perfect mix of flexibility and expertise to drive your success.
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

export default FlutterPage;
