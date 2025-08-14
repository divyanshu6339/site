import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

// Import all the same images as the original
import pythonLogo from '../Assets/django1.png';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import pythonExpert from '../Assets/django2.webp';
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
  <div className="bg-[#0D1A2B] p-6 rounded-lg border border-gray-800 text-center">
    <img src={image} alt={title} className="h-16 mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-green-400 mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

// Feature Component
const Feature = ({ title, description }) => (
  <div className="text-left">
    <h3 className="text-2xl font-semibold text-green-400 mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

// Feature Card Component
const FeatureCard = ({ text }) => (
  <div className="bg-[#1a2332] p-4 rounded-lg border border-gray-700">
    <p className="text-gray-300 text-sm">{text}</p>
  </div>
);

// Proficiency Card Component
const ProficiencyCard = ({ title, description }) => (
  <div className="bg-[#0D1A2B] p-6 rounded-lg border border-gray-800 text-center">
    <h3 className="text-xl font-semibold text-green-400 mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

// Tech Stack Item Component
const TechStackItem = ({ name, logo }) => (
  <div className="flex flex-col items-center">
    <div className="bg-white p-4 rounded-lg shadow-lg mb-3">
      <img src={logo} alt={name} className="h-12 w-12" />
    </div>
    <span className="text-white text-sm font-medium">{name}</span>
  </div>
);

// Stat Item Component
const StatItem = ({ value, label }) => (
  <div className="text-center">
    <p className="text-4xl font-bold text-green-400 mb-2">{value}</p>
    <p className="text-gray-400">{label}</p>
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
    <h3 className="text-2xl font-bold text-green-400 mb-4">{title}</h3>
    <p className="text-gray-400 mb-6">{description}</p>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-center text-gray-300">
          <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
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
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <svg
          className={`w-6 h-6 text-gray-400 transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-gray-400">{answer}</p>
        </div>
      )}
    </div>
  );
};

// Main data arrays
const faqs = [
    {
        question: 'Can you help migrate my existing application to Django?',
        answer: 'Certainly, we specialize in migrating current applications to Django with minimal interruption. Our skilled team guarantees a smooth transition, maintaining functionality while improving performance.'
    },
    {
        question: 'What should I look for when hiring a Django development company?',
        answer: 'Search for expertise, a robust portfolio, and client testimonials. Select an organization that provides comprehensive Django development services and effective communication.'
    },
    {
        question: 'How do you handle project updates and communication during development?',
        answer: 'We ensure clear communication and consistent updates using dedicated project management tools. This guarantees you are constantly kept up to date with transparent processes.'
    },
    {
        question: 'Does one need technical expertise to collaborate with a Django development agency?',
        answer: 'No, you do not need technical expertise to collaborate with us. Our team will lead you through each stage, simplifying the process with clear explanations.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "Our Dedicated Team model enables you to hire Django developers who blend well with your organization, offering valuable insights and technical expertise. This partnership fosters creativity and ensures your project aligns with the company's long-term objectives.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "Utilize our Team Augmentation model to improve your team by adding experienced Django specialists. This adaptable approach fills critical skill gaps, enhances efficiency, and promotes collaboration without interrupting current processes.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "For projects with defined objectives, our Project-Based model ensures on-time delivery within budget. Our emphasis is on comprehensive planning and risk management, making it ideal for clients seeking to outsource Django development.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'Wagtail', logo: jestLogo },
    { name: 'Sentry', logo: mongooseLogo },
    { name: 'Django-Migration', logo: nestJsLogo },
    { name: 'Mongo Engine', logo: sequelizeLogo },
    { name: 'Django Rest', logo: socketIoLogo },
    { name: 'Jinga', logo: typescriptLogo },
    { name: 'Django ORM', logo: webpackLogo },
    { name: 'Debug Toolbar', logo: eslintLogo },
    { name: 'Selinux', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'Robust Security Features', description: 'Django is designed with security in mind, providing built-in defenses against risks such as SQL injection and cross-site scripting to ensure your application remains secure.' },
    { title: 'Comprehensive Documentation', description: 'Django provides thorough documentation to assist developers throughout the development process, assisting new team members to ramp up quickly and effectively.' },
    { title: 'Rapid Development with DRY Principle', description: 'The DRY (Don\'t Repeat Yourself) principle speeds up development by minimizing duplication, allowing your team to code efficiently and focus on delivering value.' },
    { title: 'Versatile ORM (Object-Relational Mapping)', description: 'Django\'s robust ORM enables developers to interact with databases using Python, facilitating data management and improving productivity without requiring intricate SQL queries.' },
    { title: 'Built-in Admin Interface', description: 'The easy-to-use admin interface simplifies content management, allowing non-technical users to manage application data effortlessly while saving developers time.' },
    { title: 'RESTful API Support', description: 'Django is compatible with RESTful APIs, enabling easy integration with other services. This flexibility allows developers to build interactive apps that adjust to diverse business needs.' },
    { title: 'Automatic URL Routing', description: 'Django\'s robust feature of automated URL routing simplifies connecting views to URLs, improving application structure and ensuring a seamless user browsing experience.' },
    { title: 'Multi-language Support', description: 'Django\'s built-in multi-language support is perfect for global applications, enabling you to connect with a larger audience while providing a personalized experience.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'Django Website Development',
        description: 'Struggling to engage users on your website? At Alpixn Technologies, a top Django web development company, we design engaging, high-functioning websites to improve user engagement and increase conversions.'
    },
    {
        image: serviceImg2,
        title: 'Django Web App Development',
        description: 'Does your web application lack scalability and functionality? Alpixn Technologies builds robust web applications that enhance user experience and optimize business processes, establishing your app as a market leader.'
    },
    {
        image: serviceImg3,
        title: 'Django Mobile App Development',
        description: 'Do your mobile backend systems lack reliability? Our Django mobile app development services ensure seamless integration and superior performance, enabling you to effectively engage with users.'
    },
    {
        image: serviceImg4,
        title: 'Django eCommerce Development',
        description: 'Dealing with security and usability concerns on your online store? Alpixn Technologies builds user-friendly and secure eCommerce websites that enrich the shopping experience and increase sales.'
    },
    {
        image: serviceImg5,
        title: 'Django API Development',
        description: 'Are ineffective APIs hindering your app\'s functionality? Our Django API development services create robust solutions that facilitate smooth data exchange, improving your applications\' performance.'
    },
    {
        image: serviceImg6,
        title: 'Django Migration and Upgradation',
        description: 'Concerned about migrating outdated systems? As a reliable Django development company, Alpixn Technologies ensures seamless transitions to the newest version of Django with minimal disruptions.'
    },
    {
        image: serviceImg7,
        title: 'Django Support and Maintenance',
        description: 'Are functional challenges impacting your application post-launch? We offer extensive support and maintenance services for Django to keep your applications optimized and secure.'
    },
    {
        image: serviceImg8,
        title: 'Django Testing and Quality Assurance',
        description: 'Worried about application quality? Our Django specialists with thorough testing procedures ensures your Django web applications are error-free and perform excellently.'
    },
    {
        image: serviceImg9,
        title: 'Django Custom Software Development',
        description: 'Looking for a one-of-a-kind solution for your company? At Alpixn Technologies, we address your unique requirements, delivering effective, scalable, and safe applications to propel your business.'
    },
];

const DjangoPage = () => {
  return (
    <div className="bg-[#00070E] text-white overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">
                Best <span className="text-green-400">Django</span><br />
                Development Company
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Delivering Customized Solutions with Unmatched Django Reliability!
              </p>
              <p className="mt-4 text-lg text-gray-400">
                From initial discovery and concept design to post-launch support, Alpixn Technologies turns your vision into reality with our comprehensive Django web development services, confronting challenges head-on and ensuring predictable and transparent delivery throughout the process.
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
              <img src={pythonLogo} alt="Django" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              Trusted by Industry Giants Worldwide
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
                Challenges We'll Assist You Resolve with Our Django Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard image={seamlessMicroservices} title="Database Query Optimization" description="Slow database queries can affect your application's performance. Our Django development agency optimizes your queries to ensure quick data retrieval for seamless user interactions." />
                <ServiceCard image={singleThreaded} title="Configuration Management" description="Deployment issues can arise from misconfigured environments. As a top Django development company, we ensure seamless configurations for dependable application performance." />
                <ServiceCard image={codeQuality} title="Middleware Optimization" description="Inefficient middleware can cause delays. We optimize middleware operations in your Django based applications, improving performance and responsiveness for users." />
                <ServiceCard image={memoryLeak} title="Caching Mechanisms" description="Without proper caching, applications may experience delays in loading. Our experts implement efficient caching techniques to improve speed and lower server load." />
            </div>
        </div>

        <div className="bg-green-500 py-6 my-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0">Transform Your Business with Our Bespoke Django Development</h2>
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
                Cutting-edge Solutions Powered by Django Expertise
            </h2>
            <img src={pythonExpert} alt="Expert Django Development" className="w-96 h-auto rounded-lg shadow-lg mb-12 mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <Feature
                title="Holistic Solution Architecture"
                description="Experience seamless integration with our all-encompassing solution architecture. We ensure every component of your Django web applications functions faultlessly, promoting customized efficiency and scalability to meet your business objectives."
                />
                <Feature
                title="User-Centric Design Philosophy"
                description="Delight your users with our user-centric design philosophy. We prioritize intuitive interactions, developing engaging applications that exceed user expectations, enhancing user loyalty and satisfaction."
                />
                <Feature
                title="Uncompromised Security"
                description="Safeguard what matters most with our unyielding dedication to security. Being a leading Django development company, we enforce high-level security measures to protect your data and fortify your Django applications."
                />
                <Feature
                title="Meticulous Quality Assurance"
                description="Attain superior results with our meticulous quality assurance processes. Our dedicated testing ensures your applications are bug-free and prepared for the spotlight, providing trustworthy reliability and performance."
                />
            </div>

            <p className="text-center mt-12 text-gray-400 text-lg">
                Have a question? <a href="#" className="text-green-400 font-semibold hover:underline">Speak to an expert</a>
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                Build Scalable Solutions with Our Django Expertise
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
                <h2 className="text-4xl font-bold">Proven Experts in Django: Turning Complexity into Simplicity!</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Experience the difference when you hire Django experts from us! Our Django specialists combine creativity with technical prowess, turning your concepts into standout products. With round-the-clock assistance, we ensure your application runs smoothly, allowing you to concentrate on top priorities.
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
                                <span className="text-gray-400">US | DJANGO | FACILITY MANAGEMENT</span>
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
                <div className="bg-[#2F5233] rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between p-8 md:p-0 overflow-hidden">
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
                <h2 className="text-4xl font-bold mt-2">Why is <span className="text-green-400">Django</span> the Go-To Choice for Building Scalable Applications?</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Django's simple architecture, adaptability, and large library ecosystem make it the perfect language for scalable projects. Its strong frameworks and simple syntax enable rapid development, which qualifies for both startups and large enterprises aiming for efficient and maintainable solutions.
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
                    Technology Stack We Use For Django
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
                        At Alpixn Technologies, we offer three flexible Django engagement models to suit your project needs: Dedicated Team for full-time, integrated support; Staff Augmentation to boost your current team with our experts; and Project-Based for tailored goal-focused solutions. We deliver the perfect mix of flexibility and expertise to drive your success.
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

export default DjangoPage;