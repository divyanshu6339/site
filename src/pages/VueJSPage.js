import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

// Import all images (using same images as Python page)
import pythonLogo from '../Assets/vuejs1.webp';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import pythonExpert from '../Assets/viewjs2.webp';
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
        question: 'What are the typical costs associated with Vue.js development services?',
        answer: 'The cost of Vue.js development services depends on the project\'s complexity, requirements, and timeline. We offer personalized price estimates to ensure optimal value for your requirements.'
    },
    {
        question: 'Can I hire Vue.js developers on a part-time or full-time basis?',
        answer: 'Yes, we provide three engagement models to choose from: dedicated team, team augmentation, and project-based, giving you the flexibility to pick the most suitable one, depending on your requirements.'
    },
    {
        question: 'What testing methodologies do you follow for Vue.js applications?',
        answer: 'We utilize a range of testing methodologies, including unit testing, integration testing, and automated testing, to ensure the quality and dependability of our Vue.js applications.'
    },
    {
        question: 'What frameworks and libraries do you use for Vue.js development?',
        answer: 'We utilize a range of frameworks and libraries, like Nuxt.js, Vuex, Vue Router, and Axios, to provide customizable and effective Vue.js solutions tailored to your project needs.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "We build a bespoke offshore Vue.js team that integrates seamlessly with your company. This dedicated team of expert Vue.js developers acts as an extension of your in-house team, providing continuous assistance and producing exceptional, top-notch outcomes throughout the development lifecycle.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "Alpixn Technologies' team augmentation model adopts a meticulous approach to handling risks and optimizing resources. By hiring Vue.js programmers who fit your project's needs, we ensure timely completion, cost efficiency, and successful goal attainment, enhancing the productivity of your current team.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "We elevate your in-house team by integrating top-tier experts through our premier outsourcing Vue.js development solutions. This approach enables you to tap into exceptional expertise and specialized abilities for specific Vue.js projects, ensuring the timely delivery of top-notch, efficient outcomes.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'Nuxt.js', logo: jestLogo },
    { name: 'Vuex', logo: mongooseLogo },
    { name: 'Vue Router', logo: nestJsLogo },
    { name: 'Axios', logo: sequelizeLogo },
    { name: 'Vite', logo: socketIoLogo },
    { name: 'TypeScript', logo: typescriptLogo },
    { name: 'Webpack', logo: webpackLogo },
    { name: 'ESLint', logo: eslintLogo },
    { name: 'JavaScript', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'Reactive Data Binding', description: 'Vue.js\'s reactive data binding automatically keeps the UI in sync with the underlying data model, minimizing errors and manual updates while increasing development efficiency.' },
    { title: 'Component-Based Architecture', description: "Create complex applications with Vue.js's component-based architecture, promoting code reusability, maintainability, and scalability, making large-scale app development easier." },
    { title: 'Single-File Components', description: 'Single-file components in Vue.js encapsulate template, logic, and style within a single .vue file, streamlining component development and enhancing code structure and readability.' },
    { title: 'Virtual DOM', description: 'Vue.js utilizes a virtual DOM for efficient rendering, minimizing direct DOM manipulation and improving application performance through optimized updates and rendering cycles.' },
    { title: 'Progressive Framework', description: 'Vue.js is designed as a progressive framework that can be incrementally adopted, allowing integration into existing projects without complete rewrites, making it flexible for various use cases.' },
    { title: 'Vue CLI & Tooling', description: 'Vue CLI provides a powerful development environment with plugin-based architecture, hot-reloading, and build optimization, streamlining the development workflow.' },
    { title: 'Server-Side Rendering', description: 'Vue.js supports server-side rendering through Nuxt.js, enabling better SEO, faster initial page loads, and improved user experience for web applications.' },
    { title: 'TypeScript Integration', description: 'Vue.js integrates seamlessly with TypeScript, enhancing code quality and maintainability with static type checking and advanced IDE features for robust development.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'Vue.js Web Application Development',
        description: 'Alpixn Technologies, the industry\'s best Vue.js development company, utilizes Vue.js ecosystem to build high-performing web applications. Our Vue.js developers guarantee lightning-fast load times and robust features customized to project needs.'
    },
    {
        image: serviceImg2,
        title: 'Custom Vue.js Component Development',
        description: 'We specialize in custom Vue.js component development, building scalable, reusable, and high-performance components that improve system integration and expedite development. Our dedicated Vue.js experts ensure seamless functionality across your applications.'
    },
    {
        image: serviceImg3,
        title: 'Vue.js Mobile App Development',
        description: 'Alpixn Technologies Vue.js development outsourcing services deliver exceptional cross-platform mobile applications using Vue Native and NativeScript. Our developers build effective mobile apps for iOS and Android, ensuring improved functionality and user experience.'
    },
    {
        image: serviceImg4,
        title: 'Vue.js Single Page Applications',
        description: 'Alpixn Technologies, a premier Vue.js software development company, creates immersive single-page applications. Our seasoned Vue.js programmers convert your vision into seamless user experiences, ensuring rich and dynamic interactions.'
    },
    {
        image: serviceImg5,
        title: 'Vue.js Progressive Web Apps',
        description: 'We offer custom Vue.js PWA development with modern web capabilities. Our developers create robust, fast-loading, and app-like experiences that work offline and provide native app functionality through web browsers.'
    },
    {
        image: serviceImg6,
        title: 'Custom Vue.js Software Development',
        description: 'We specialize in custom Vue.js development services, crafting solutions that cater to specific business requirements. Our Vue.js veterans ensure smooth integration, robust functionality, innovative features, and scalability to support your strategic goals.'
    },
    {
        image: serviceImg7,
        title: 'Vue.js Enterprise Solutions',
        description: 'We specialize in Vue.js enterprise solutions, providing scalable, modular applications that improve flexibility and expedite deployment. Our Vue.js developers assist you in effectively and efficiently handling your expanding business needs.'
    },
    {
        image: serviceImg8,
        title: 'Vue.js Migration & Modernization',
        description: 'As a premier Vue.js development firm, we migrate legacy applications to modern Vue.js architecture, streamlining performance and user experience. Our specialists guarantee smoother transitions and improved efficiency throughout the modernization process.'
    },
    {
        image: serviceImg9,
        title: 'Vue.js Performance Optimization',
        description: 'At Alpixn Technologies, we perform comprehensive Vue.js performance optimization to enhance speed and efficiency. Our developers employ advanced techniques, ensuring your applications deliver optimal performance and exceptional user experiences.'
    },
];

// Component definitions
const ServiceCard = ({ image, title, description }) => (
    <div className="bg-[#0A1F0A] p-6 rounded-lg border border-green-800 text-center">
        <img src={image} alt={title} className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-400 mb-3">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
);

const Feature = ({ title, description }) => (
    <div className="bg-[#0A1F0A] p-6 rounded-lg border border-green-800">
        <h3 className="text-xl font-semibold text-green-400 mb-4">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
);

const FeatureCard = ({ text }) => (
    <div className="bg-[#1A2F1A] p-4 rounded-lg border border-green-700">
        <p className="text-gray-300 text-sm">{text}</p>
    </div>
);

const ProficiencyCard = ({ title, description }) => (
    <div className="bg-[#0A1F0A] p-6 rounded-lg border border-green-800 text-center">
        <h3 className="text-lg font-semibold text-green-400 mb-4">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
);

const TechStackItem = ({ name, logo }) => (
    <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-3">
            <img src={logo} alt={name} className="w-10 h-10" />
        </div>
        <span className="text-white font-medium">{name}</span>
    </div>
);

const StatItem = ({ value, label }) => (
    <div className="text-center">
        <div className="text-4xl font-bold text-green-400">{value}</div>
        <div className="text-gray-400 mt-2">{label}</div>
    </div>
);

const AwardItem = ({ image, text }) => (
    <div className="text-center">
        <img src={image} alt="" className="h-16 mx-auto mb-4" />
        <p className="text-sm">{text}</p>
    </div>
);

const EngagementCard = ({ title, description, points }) => (
    <div className="bg-[#0A1F0A] p-8 rounded-lg border border-green-800">
        <h3 className="text-2xl font-bold text-green-400 mb-4">{title}</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-2">
            {points.map((point, index) => (
                <li key={index} className="flex items-center text-gray-300">
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
        <div className="border-b border-green-800">
            <button
                className="w-full py-6 px-0 text-left flex justify-between items-center text-white hover:text-green-400 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-semibold pr-8">{question}</span>
                <svg 
                    className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="pb-6 text-gray-400 leading-relaxed">
                    {answer}
                </div>
            )}
        </div>
    );
};

const VueJSPage = () => {
  return (
    <div className="bg-[#001A00] text-white overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">
                Leading <span className="text-green-400">Vue.js</span><br />
                Development Company
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Experience the Future of Web Development with Our Cutting-Edge Vue.js Solutions!
              </p>
              <p className="mt-4 text-lg text-gray-400">
                Transform your digital landscape with Alpixn Technologies, a top Vue.js development company, offering extensive Vue.js development services to build lightweight, high-performing applications that drive results and expedite business growth.
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
              <img src={pythonLogo} alt="Vue.js" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              Chosen by Industry Leaders for Unparalleled Vue.js Solutions
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
                Challenges We'll Assist You Resolve with Our Vue.js Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard image={seamlessMicroservices} title="Code Debugging and Error Resolution" description="We utilize Vue Devtools for real-time data inspection and editing, time travel debugging, and breakpoint management to methodically trace and fix errors, ensuring a potent and reliable application." />
                <ServiceCard image={singleThreaded} title="Asynchronous Data Loading" description="We employ advanced methodologies, such as lazy loading with effective caching strategies, to handle asynchronous data efficiently, optimize resource utilization, and avoid pitfalls such as latency and data staleness." />
                <ServiceCard image={codeQuality} title="Third-Party Library Integration" description="By carefully selecting libraries based on features and documentation, resolving compatibility issues, and following adapter patterns, we ensure seamless integration of third-party libraries with your Vue.js application." />
                <ServiceCard image={memoryLeak} title="Vuex State Management" description="We tackle Vuex challenges by structuring and modularizing the store and implementing strict data validation, ensuring a well-structured, secure, and performant Vue.js application." />
            </div>
        </div>

        <div className="bg-green-500 py-6 my-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0 text-black">Transform Your Business with Our Bespoke Vue.js Development</h2>
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
                Tech Power Surge: Propel Your App to New Heights with Our Vue.js Expertise
            </h2>
            <img src={pythonExpert} alt="Expert Vue.js Development" className="w-96 h-auto rounded-lg shadow-lg mb-12 mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <Feature
                title="Custom Vue.js Solutions"
                description="Our Vue.js experts ensure tailored/customized solutions, utilizing Vue components and directives to align perfectly with specific business requirements and deliver exceptional functionality."
                />
                <Feature
                title="Exceptional Performance Optimization"
                description="We fine-tune Vue.js applications using advanced techniques like code splitting, mixins, lazy loading, and virtual DOM optimization, ensuring pace-setting performance and responsiveness that improves user experience."
                />
                <Feature
                title="Dynamic Development Roadmap"
                description="Our adaptive development approach incorporates the latest Vue.js advancements, permitting your application to adapt to new trends and technologies, keeping it competitive and forward-looking."
                />
                <Feature
                title="Future-Ready Architecture"
                description="Benefit from our modular Vue.js architecture, developed to manage future upgrades and expansions effortlessly, ensuring your Vue.js application stays robust and adaptable as your necessities grow."
                />
            </div>

            <p className="text-center mt-12 text-gray-400 text-lg">
                Have a question? <a href="#" className="text-green-400 font-semibold hover:underline">Speak to an expert</a>
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                Empower Your App with Our Top Vue.js Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {developmentServices.map((service, index) => (
                    <div key={index} className="bg-[#0A1F0A] p-8 rounded-lg border border-green-800 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={service.image} alt={service.title} className="h-24 mb-6 self-start" />
                        <h3 className="text-xl font-semibold text-green-400 mb-4">{service.title}</h3>
                        <p className="text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Vue.js Brilliance: Proven by Our Expert Team</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    From Alpixn Technologies, hire Vue.js developers who leverage their acclaimed capabilities and vetted experience to build dynamic applications. Experience in supporting libraries and frameworks- Vuex, Vue Router, and Nuxt.js ensures real-time, innovative, high-performance solutions that propel your project to the forefront of the industry.
                </p>
            </div>

            <div className="bg-[#1A2F1A] rounded-xl shadow-lg p-8">
                <div className="flex justify-around items-center flex-wrap gap-8 border-b border-green-700 pb-8 mb-8">
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
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-green-700 pt-4">
                            <div className="flex items-center gap-4">
                                <img src={usFlag} alt="US Flag" className="w-8 h-8" />
                                <span className="text-gray-400">US | VUE.JS | WEB DEVELOPMENT</span>
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
                <h2 className="text-4xl font-bold mt-2">Why is <span className="text-green-400">Vue.js</span> the Go-To Choice for Building Scalable Applications?</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Vue.js's simple architecture, adaptability, and large library ecosystem make it the perfect language for scalable projects. Its strong frameworks and simple syntax enable rapid development, which qualifies for both startups and large enterprises aiming for efficient and maintainable solutions.
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
                    Technology Stack We Use For Vue.js Development
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
                        At Alpixn Technologies, we offer three flexible Vue.js engagement models to suit your project needs: Dedicated Team for full-time, integrated support; Staff Augmentation to boost your current team with our experts; and Project-Based for tailored goal-focused solutions. We deliver the perfect mix of flexibility and expertise to drive your success.
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

export default VueJSPage;