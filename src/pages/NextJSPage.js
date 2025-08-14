import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

import pythonLogo from '../Assets/nextjs1.png';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import pythonExpert from '../Assets/nextjs2.webp';
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
        question: 'How do I hire Next.js developers, and what should I look for?',
        answer: 'When hiring Next.js frontend developers, focus on their practical exposure to the framework ideas, approach in React, along with solid performance-testing techniques. At Alpixn Technologies, we provide top-tier developers committed to delivering exceptional Next.js web app development services tailored to your needs.'
    },
    {
        question: 'What are the costs associated with Next.js development services?',
        answer: 'The costs associated with Next.js development services can vary significantly based on the team size, project scale, and timelines. At Alpixn Technologies, we emphasize transparent pricing models that ensure you receive excellent value while meeting your budgetary concerns.'
    },
    {
        question: 'How does Next.js compare to other frameworks like React and Angular?',
        answer: 'Next.js distinguishes itself with powerful server-side rendering and static site generation capabilities, offering superior performance and SEO benefits compared to React alone. In contrast to Angular\'s more complex structure, Next.js offers a streamlined approach.'
    },
    {
        question: 'What are some common challenges when developing with Next.js?',
        answer: 'Developing with Next.js can present challenges, such as managing server-side rendering complexities and optimizing performance. However, at Alpixn Technologies, we tackle these challenges head-on with our expertise and innovative solutions.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "In this model, you hire Next.js developers who become an integral part of your organization and are dedicated to your project. Perfect for long-term partnerships — It lets you stay aligned with your business goals.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "With Team Augmentation, you can enhance your existing team by incorporating our skilled Next.js developers. With rapidly scalable talent, this model is best suited for dynamic projects requiring specialized skills.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "For clients who have specific objectives, our Project-Based model delivers comprehensive Next.js web application development services. You can tap into our expertise for customized solutions that align with your unique requirements.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'Next.js', logo: jestLogo },
    { name: 'React', logo: mongooseLogo },
    { name: 'TypeScript', logo: nestJsLogo },
    { name: 'Tailwind CSS', logo: sequelizeLogo },
    { name: 'Prisma', logo: socketIoLogo },
    { name: 'GraphQL', logo: typescriptLogo },
    { name: 'Redux', logo: webpackLogo },
    { name: 'Cypress', logo: eslintLogo },
    { name: 'Sass', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'Server-Side Rendering', description: 'Next.js provides built-in SSR capabilities that enhance SEO performance and initial page load times, delivering superior user experiences and search engine visibility for modern web applications.' },
    { title: 'Static Site Generation', description: "Next.js enables static site generation with fallback options, ensuring ultrafast load times and enhanced SEO while dynamically delivering content for a superior overall experience." },
    { title: 'API Routes Integration', description: 'With API routes, Next.js integrates backend logic into your application, facilitating efficient data handling and enhancing overall functionality with seamless full-stack development.' },
    { title: 'File-System Based Routing', description: 'Next.js uses file-system-based routing, simplifying navigation and streamlining development, allowing you to create intuitive, organized structures with automatic route generation.' },
    { title: 'Performance Optimization', description: 'Next.js includes built-in analytics and monitoring tools, allowing you to monitor real-time performance metrics and make data-driven decisions for ongoing optimization and user experience enhancement.' },
    { title: 'Serverless Deployment', description: 'Purpose-built for serverless deployment, Next.js simplifies scalability and reduces cost, allowing developers to focus on coding while efficiently managing infrastructure and deployment processes.' },
    { title: 'React Server Components', description: 'Next.js supports React Server Components, improving performance by reducing client-side load times and ensuring faster rendering for an enhanced user experience and better resource utilization.' },
    { title: 'Progressive Web Apps', description: 'Next.js facilitates PWA development with service workers and offline capabilities, enabling app-like experiences that work seamlessly across devices and network conditions for maximum user engagement.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'Custom Next.js Application Development',
        description: 'Put your ideas to work with our custom Next.js application development. We customize solutions to your specific needs, resulting in a unique, engaging, and growth-oriented user experience.'
    },
    {
        image: serviceImg2,
        title: 'Server-Side Rendering (SSR) Implementation',
        description: 'Enhance performance with our expert SSR implementation for Next.js. Experience fast loading times and improved SEO, ensuring a smooth experience that elevates your web presence.'
    },
    {
        image: serviceImg3,
        title: 'Progressive Web App (PWA) Development',
        description: 'Transform your digital strategy with our Next.js PWA development. We build fast and reliable apps that deliver a native-like experience, boosting engagement and conversion rates on all devices.'
    },
    {
        image: serviceImg4,
        title: 'CMS Integration Services',
        description: 'Easily add a robust CMS to your Next.js application. Our solutions allow you to manage content effortlessly, keeping your website dynamic, user-friendly, and optimized to achieve the highest impact.'
    },
    {
        image: serviceImg5,
        title: 'Robust API Development and Integration',
        description: 'Boost your application\'s functionality via our robust API development and integration services. We ensure seamless connectivity between your Next.js applications and other systems, providing a unified experience.'
    },
    {
        image: serviceImg6,
        title: 'Advanced Performance Optimization',
        description: 'Achieve remarkable speed and efficiency through our advanced performance optimization for Next.js applications. We optimize your project for extreme load times and robust functionality to enhance engagement and conversions.'
    },
    {
        image: serviceImg7,
        title: 'Application Maintenance and Support',
        description: 'Enjoy peace of mind with our continuous maintenance and support for Next.js applications. We ensure your project\'s security and performance, allowing you to focus on growth.'
    },
    {
        image: serviceImg8,
        title: 'Comprehensive E-commerce Solutions',
        description: 'Revamp your digital store with our all-encompassing Next.js e-commerce solutions. We provide user-centric, high-performance platforms that drive sales and foster lasting customer loyalty.'
    },
    {
        image: serviceImg9,
        title: 'Static Site Generation (SSG) Expertise',
        description: 'Leverage our SSG knowledge to build fast, SEO-friendly websites. Our Next.js solutions offer performance benefits and a seamless user experience that encourages repeat visits.'
    },
];

const ServiceCard = ({ image, title, description }) => (
  <div className="bg-gray-900 p-6 rounded-lg text-center">
    <img src={image} alt={title} className="w-16 h-16 mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const Feature = ({ title, description }) => (
  <div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const FeatureCard = ({ text }) => (
  <div className="bg-gray-800 p-4 rounded-lg">
    <p className="text-gray-300 text-sm">{text}</p>
  </div>
);

const ProficiencyCard = ({ title, description }) => (
  <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
    <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const TechStackItem = ({ name, logo }) => (
  <div className="flex flex-col items-center">
    <img src={logo} alt={name} className="w-16 h-16 mb-3" />
    <span className="text-white font-medium">{name}</span>
  </div>
);

const StatItem = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-bold text-white">{value}</div>
    <div className="text-gray-400 mt-2">{label}</div>
  </div>
);

const AwardItem = ({ image, text }) => (
  <div className="text-center">
    <img src={image} alt={text} className="h-16 mx-auto mb-4" />
    <p className="text-sm">{text}</p>
  </div>
);

const EngagementCard = ({ title, description, points }) => (
  <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-gray-400 mb-6">{description}</p>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="text-gray-300 text-sm flex items-center">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        className="w-full py-6 px-4 text-left flex justify-between items-center hover:bg-gray-900 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <span className="text-2xl text-gray-400">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-4 pb-6">
          <p className="text-gray-400">{answer}</p>
        </div>
      )}
    </div>
  );
};

const NextJSPage = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">
                Trusted <span className="text-blue-400">Next.js</span><br />
                Development Company
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Custom Next.js Services to Create High-end Solutions
              </p>
              <p className="mt-4 text-lg text-gray-400">
                As a top-rated Next.js development company with ISO certifications and an impressive 98% customer retention rate, Alpixn Technologies builds state-of-the-art, high-performance applications that improve user interaction and increase conversions.
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
              <img src={pythonLogo} alt="Next.js" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              Building Trust Through Exceptional Next.js Solutions
            </h2>
            <div className="mt-8 flex justify-center items-center flex-wrap gap-8">
              <img src={visaLogo} alt="Vercel" className="h-12" />
              <img src={infosysLogo} alt="Netflix" className="h-12" />
              <img src={netflixLogo} alt="Nike" className="h-16" />
              <img src={moglixLogo} alt="Uber" className="h-16" />
              <img src={relianceLogo} alt="TikTok" className="h-16" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                Challenges We'll Assist You Resolve with Our Next.js Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard image={seamlessMicroservices} title="Data Fetching Strategies" description="Data fetching can be complex, but our skilled Next.js developers streamline the process. We optimize data management, boosting performance and elevating user experience." />
                <ServiceCard image={singleThreaded} title="Static Regeneration" description="ISR can accelerate your website. However, proper implementation is crucial. We enable you to utilize ISR to deliver updated content while maintaining high performance." />
                <ServiceCard image={codeQuality} title="Internationalization (i18n)" description="Seeking global exposure? Our custom Next.js services facilitate internationalization, securing a personalized experience that connects with diverse audiences." />
                <ServiceCard image={memoryLeak} title="Complex Nested Routes" description="Dealing with complex nested routes can pose challenges. Our team optimizes navigation by creating an intuitive user journey that captivates visitors and boosts conversions." />
            </div>
        </div>

        <div className="bg-blue-500 py-6 my-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0">Transform Your Business with Our Bespoke Next.js Development Services</h2>
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
                Explore the Advantages of Our Next.js Solutions
            </h2>
            <img src={pythonExpert} alt="Expert Next.js Development" className="w-96 h-auto rounded-lg shadow-lg mb-12 mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <Feature
                title="Cross-Industry Expertise"
                description="Alpixn Technologies utilizes insights from multiple sectors to build Next.js solutions that overcome your specific hurdles, stimulate ingenuity, and produce real-world impact across diverse business domains."
                />
                <Feature
                title="Proprietary Analytics Tools"
                description="Leverage our exclusive analytics tools designed for Next.js. These tools provide real-time data analysis that empowers you to make informed decisions and capitalize on growth opportunities with actionable insights."
                />
                <Feature
                title="Cultural and Market Adaptation"
                description="Our specialization is constructing Next.js applications that are well-suited to local cultures and markets, ensuring your product resonates globally and enhances user experience across different regions."
                />
                <Feature
                title="Community Engagement Strategies"
                description="Our engagement strategies enable you to nurture active user communities around your Next.js apps, building loyalty and transforming customers into enthusiastic advocates for your brand."
                />
            </div>

            <p className="text-center mt-12 text-gray-400 text-lg">
                Have a question? <a href="#" className="text-blue-400 font-semibold hover:underline">Speak to an expert</a>
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                Next.js Development Services That Generate Significant ROI
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {developmentServices.map((service, index) => (
                    <div key={index} className="bg-gray-900 p-8 rounded-lg border border-gray-800 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={service.image} alt={service.title} className="h-24 mb-6 self-start" />
                        <h3 className="text-xl font-semibold text-blue-400 mb-4">{service.title}</h3>
                        <p className="text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Our Next.js Developers' Unmatched Expertise</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Seeking the most exceptional Next.js developers? Your search ends here! Our team of specialists offers unparalleled proficiency and innovative solutions, developing high-performance apps that elevate your business and ensure your competitive advantage in the market.
                </p>
            </div>

            <div className="bg-gray-900 rounded-xl shadow-lg p-8">
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
                                <span className="text-gray-400">US | NEXT.JS | REACT</span>
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
                <div className="bg-blue-600 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between p-8 md:p-0 overflow-hidden">
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
                <h2 className="text-4xl font-bold mt-2">Why Invest in <span className="text-blue-400">Next.js</span> Development Services</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Next.js revolutionizes web development with its remarkable speed and scalability. Anticipating features like server-side rendering (SSR) and static site generation (SSG) bring drastic performance and SEO benefits, leading to increased user engagement and business growth.
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
                    Technology Stack We Use For NextJS Development
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
                        At Alpixn Technologies, we offer three flexible NextJS engagement models to suit your project needs: Dedicated Team for full-time, integrated support; Staff Augmentation to boost your current team with our experts; and Project-Based for tailored goal-focused solutions. We deliver the perfect mix of flexibility and expertise to drive your success.
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

export default NextJSPage;