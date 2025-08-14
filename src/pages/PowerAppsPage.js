import React, { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

import pythonLogo from '../Assets/mspowerapps1.png';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import pythonExpert from '../Assets/microsoft-powerapp2.webp';
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
        question: 'What is the difference between PowerApps and traditional app development?',
        answer: 'PowerApps enables rapid, low-code solutions that seamlessly integrate with Microsoft\'s ecosystem, unlike traditional app development, which involves extensive coding and longer timelines. At Alpixn Technologies, a leading PowerApps development firm, we utilize skilled MS Power Apps developers to deliver scalable and efficient solutions tailored to your business needs.'
    },
    {
        question: 'What should I consider before hiring a PowerApps development company?',
        answer: 'When selecting a PowerApps development company, prioritize expertise in creating custom, scalable solutions and experience with Microsoft\'s ecosystem. Alpixn Technologies, with our seasoned team of MS Power Apps developers, ensures efficient, high-quality applications that align with your business objectives and growth strategies.'
    },
    {
        question: 'How do PowerApps development services differ from PowerApps consulting services?',
        answer: 'PowerApps development services focus on building and deploying applications, while PowerApps consulting services provide strategic guidance on leveraging PowerApps for your business. At Alpixn Technologies, our expert Power Apps consultants offer both development and consultancy to ensure your app solutions align with your business goals.'
    },
    {
        question: 'Is PowerApps secure enough for enterprise use?',
        answer: 'Yes, PowerApps features enterprise-grade security, including data encryption and compliance with industry standards. When you hire PowerApp developers from Alpixn Technologies, you can trust that your apps are secure, scalable, and adhere to the highest security protocols for business-critical use.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "With the Dedicated Team model, you receive a carefully selected group of PowerApps consultants and MS Power Apps developers, fully aligned with your business objectives, working as an extension of your team to maximum impact and deliver long-term value.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "Our Team Augmentation model lets you easily hire certified Power Apps consultants and seamlessly integrate specialized experts into your existing team, ensuring the right skills for project acceleration without long-term commitments or overhead costs.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "The Project-Based model is ideal for businesses with clear objectives and timelines. Utilize our PowerApps development and consulting services to deliver high-quality solutions on time and within budget, with defined milestones and accountability.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'Azure Functions', logo: jestLogo },
    { name: 'Common Data Service', logo: mongooseLogo },
    { name: 'Microsoft Dataverse', logo: nestJsLogo },
    { name: 'PowerApps Portals', logo: sequelizeLogo },
    { name: 'PowerApps Studio', logo: socketIoLogo },
    { name: 'Canvas Apps', logo: typescriptLogo },
    { name: 'Power BI Integration', logo: webpackLogo },
    { name: 'SharePoint', logo: eslintLogo },
    { name: 'Office 365', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'AI-Driven Insights', description: 'Utilize AI-powered analytics in PowerApps to gain actionable insights, enhance decision-making, and improve operational efficiency, seamlessly integrated into your workflow.' },
    { title: 'Microsoft 365 Integration', description: "Integrate seamlessly with Microsoft 365 tools, streamlining your business processes across applications like Word, Excel, and Outlook, creating a unified workspace." },
    { title: 'Custom Data Connectors', description: 'Develop tailored data connectors to link any external system or service, ensuring PowerApps communicates effectively with all enterprise applications, data sources, and databases.' },
    { title: 'Drag-and-Drop App Builder', description: 'Effortlessly create fully functional apps using PowerApps\' intuitive drag-and-drop interface—no coding necessary. Empower your teams to develop custom solutions quickly and easily.' },
    { title: 'Seamless SharePoint Integration', description: 'PowerApps integrates natively with SharePoint, simplifying document management and collaboration so your team can access and update data directly from SharePoint in real-time.' },
    { title: 'AI-Powered OCR Capabilities', description: 'Easily extract and process data from images and documents with PowerApps\' AI-powered Optical Character Recognition (OCR), automating manual data entry and minimizing errors.' },
    { title: 'Custom Branding and Themes', description: 'Personalize your PowerApps with custom branding, colors, and themes to align with your corporate identity, ensuring a consistent user experience across all applications.' },
    { title: 'Live Collaboration and Sharing', description: 'Boost team collaboration with live sharing and real-time updates in PowerApps. Multiple users can work simultaneously, enhancing communication and speeding up decision-making.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'PowerApps Custom Development',
        description: 'As a leading Custom PowerApps Development Company, we create transformative solutions that seamlessly integrate into your business DNA. Our services enhance team capabilities, streamline workflows, and drive growth—ensuring your apps evolve with your business.'
    },
    {
        image: serviceImg2,
        title: 'PowerApps Integration Solutions',
        description: 'Harness the true potential of your enterprise with our PowerApps Integration Solutions, connecting systems for real-time data exchange. Whether legacy systems or modern platforms, our PowerApps consultants ensure everything connects effortlessly.'
    },
    {
        image: serviceImg3,
        title: 'PowerApps Automation Services',
        description: 'Achieve unparalleled efficiency with our PowerApps Automation Services. We streamline critical processes, reduce manual intervention, and eliminate errors, allowing your teams to focus on high-value activities and accelerate digital transformation.'
    },
    {
        image: serviceImg4,
        title: 'PowerApps UI/UX Design',
        description: 'In today\'s world, design is everything. Our Microsoft PowerApps consultants craft visually appealing, intuitive user interfaces that ensure every PowerApp delivers a seamless, engaging experience that boosts adoption rates and productivity across your organization.'
    },
    {
        image: serviceImg5,
        title: 'PowerApps AI Integration',
        description: 'Elevate your business intelligence with PowerApps AI Integration. We embed advanced AI features into your apps for predictive insights and data-driven decision-making, transforming your apps into intelligent assets that adapt to your evolving needs.'
    },
    {
        image: serviceImg6,
        title: 'PowerApps Maintenance Support',
        description: 'In an ever-evolving digital landscape, continuous support is essential. Our PowerApps Maintenance Services keep your applications secure and optimal while ensuring adaptability for future requirements—ensuring your business stays ahead of the curve.'
    },
    {
        image: serviceImg7,
        title: 'PowerApps Performance Optimization',
        description: 'With our all-inclusive PowerApps Performance Optimization services, we fine-tune every aspect of your application, from speed to scalability, ensuring flawless execution, faster processing, and optimized workflows that keep your team productive.'
    },
    {
        image: serviceImg8,
        title: 'Legacy App Migration',
        description: 'Reimagine your legacy systems with our PowerApps Legacy App Migration Services. We provide a seamless, secure transition to the Microsoft Power Platform, preserving historical data while unlocking the full potential of modern PowerApps functionality for minimal disruption.'
    },
    {
        image: serviceImg9,
        title: 'PowerApps Security Solutions',
        description: 'Security isn\'t just a feature; it\'s a cornerstone. Our Microsoft PowerApps Security Solutions safeguard your apps and data through advanced encryption and access controls, ensuring resilience against cyber threats while adhering to regulatory standards.'
    },
];

// Component definitions
const ServiceCard = ({ image, title, description }) => (
    <div className="bg-[#2D1B3D] p-6 rounded-lg border border-pink-800 text-center">
        <img src={image} alt={title} className="h-16 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-pink-300 mb-3">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
    </div>
);

const Feature = ({ title, description }) => (
    <div className="mb-8">
        <h3 className="text-xl font-semibold text-pink-300 mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const FeatureCard = ({ text }) => (
    <div className="flex items-start">
        <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
        <p className="text-sm text-gray-300">{text}</p>
    </div>
);

const ProficiencyCard = ({ title, description }) => (
    <div className="bg-[#2D1B3D] border border-pink-800 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-pink-300 mb-3">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

const TechStackItem = ({ name, logo }) => (
    <div className="flex flex-col items-center group">
        <div className="w-16 h-16 bg-white/90 rounded-lg p-2 mb-3 group-hover:scale-105 transition-transform duration-300">
            <img src={logo} alt={name} className="w-full h-full object-contain" />
        </div>
        <span className="text-white text-sm font-medium">{name}</span>
    </div>
);

const StatItem = ({ value, label }) => (
    <div className="text-center">
        <p className="text-4xl md:text-5xl font-bold text-pink-400">{value}</p>
        <p className="text-gray-400 mt-2">{label}</p>
    </div>
);

const AwardItem = ({ image, text }) => (
    <div className="text-center">
        <img src={image} alt="Award" className="h-16 mx-auto mb-4" />
        <p className="text-sm">{text}</p>
    </div>
);

const EngagementCard = ({ title, description, points }) => (
    <div className="bg-[#2D1B3D] border border-pink-800 rounded-lg p-8">
        <h3 className="text-xl font-bold text-pink-300 mb-4">{title}</h3>
        <p className="text-gray-400 mb-6 text-sm">{description}</p>
        <ul className="space-y-2">
            {points.map((point, index) => (
                <li key={index} className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
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
                className="w-full py-6 flex justify-between items-center text-left hover:bg-[#2D1B3D] px-6 rounded-t-lg"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-white">{question}</span>
                <svg
                    className={`w-5 h-5 text-pink-400 transform transition-transform ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
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

const PowerAppsPage = () => {
  return (
    <div className="bg-[#0A0015] text-white overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">
                Premier <span className="text-pink-400">Microsoft PowerApps</span><br />
                Development Company
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Tailored PowerApps Solutions That Deliver Real Business Value
              </p>
              <p className="mt-4 text-lg text-gray-400">
                Ignite your business transformation with custom Microsoft PowerApps solutions. Our skilled team develops powerful, intuitive applications that optimize workflows, eliminate bottlenecks, and foster sustainable growth—delivering measurable results.
              </p>
              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <button className="bg-pink-500 text-white font-bold py-3 px-6 rounded-md hover:bg-pink-600 transition duration-300">
                  Get Started
                </button>
                <button className="border border-pink-500 text-pink-500 font-bold py-3 px-6 rounded-md hover:bg-pink-500 hover:text-white transition duration-300">
                  Book a call with our expert
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img src={pythonLogo} alt="PowerApps" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              PowerApps Experts, Handpicked by Innovators
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
                Challenges We'll Assist You Resolve with Our Microsoft PowerApps Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard image={seamlessMicroservices} title="Data Synchronization Issues" description="As specialists in Microsoft PowerApps, we ensure seamless data synchronization across all systems, eliminating inconsistencies and providing your team with real-time, reliable insights." />
                <ServiceCard image={singleThreaded} title="Governance & Control Gaps" description="Our PowerApps experts implement robust governance frameworks that secure your data, simplify compliance, and give you complete control—significantly reducing risk while promoting growth." />
                <ServiceCard image={codeQuality} title="User Adoption Resistance" description="We create intuitive, customized apps that remove barriers to adoption, ensuring your teams embrace new solutions effortlessly—leading to faster deployment and immediate productivity gains." />
                <ServiceCard image={memoryLeak} title="App Scalability Limits" description="With extensive Microsoft PowerApp Development Services expertise, we build flexible and scalable apps that evolve with your business—effectively managing increased complexity and user demand." />
            </div>
        </div>

        <div className="bg-pink-500 py-6 my-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0">Transform Your Business with Our Microsoft PowerApps Development Services</h2>
                <button className="bg-white text-pink-500 font-bold py-2 px-4 rounded-md flex items-center hover:bg-gray-200 transition duration-300 shrink-0">
                Connect With Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </button>
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-8">
                Redefine Efficiency with PowerApps Innovation
            </h2>
            <img src={pythonExpert} alt="Expert PowerApps Development" className="w-96 h-auto rounded-lg shadow-lg mb-12 mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <Feature
                title="Zero-Code to Low-Code Flexibility"
                description="Empower your teams to innovate faster with our zero-code to low-code solutions—build, customize, and scale applications effortlessly without developer assistance."
                />
                <Feature
                title="Cost-Efficient Solution Design"
                description="Achieve exceptional ROI with our intelligent, cost-effective PowerApps solutions—streamlining workflows, eliminating unnecessary expenses, and delivering impactful results within budget."
                />
                <Feature
                title="Multi-Regional Customization"
                description="Expand globally with precision—our Microsoft PowerApps are designed to address regional nuances, ensuring a consistent user experience and seamless local adaptation."
                />
                <Feature
                title="Enhanced Analytics & Reporting"
                description="Turn data into a strategic advantage with our robust analytics and reporting tools—offering real-time insights that drive smarter decisions and accelerate business growth."
                />
            </div>

            <p className="text-center mt-12 text-gray-400 text-lg">
                Have a question? <a href="#" className="text-pink-400 font-semibold hover:underline">Speak to an expert</a>
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                Supercharge Your Operations with Powerful PowerApps Customization
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {developmentServices.map((service, index) => (
                    <div key={index} className="bg-[#2D1B3D] p-8 rounded-lg border border-pink-800 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={service.image} alt={service.title} className="h-24 mb-6 self-start" />
                        <h3 className="text-xl font-semibold text-pink-400 mb-4">{service.title}</h3>
                        <p className="text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">PowerApps Precision: Build, Scale, Thrive</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Ready to transform your business with PowerApps? To boost your business operations, hire certified MS Power Apps developers who combine industry expertise and technical know-how to create solutions that enhance growth and optimize workflows, delivering results that distinguish you in today's competitive market.
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
                                <span className="text-gray-400">US | POWERAPPS | FACILITY MANAGEMENT</span>
                            </div>
                            <a href="#" className="flex items-center text-pink-400 font-semibold hover:underline">
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
                <div className="bg-[#D946EF] rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between p-8 md:p-0 overflow-hidden">
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
                <h2 className="text-4xl font-bold mt-2">Why <span className="text-pink-400">PowerApps</span> Is Your Key to Operational Excellence?</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    PowerApps is your key to operational excellence, enabling quick app development and easy integration. Its user-friendly interface boosts productivity, improves collaboration, and effectively transforms business processes. Choose PowerApps for unparalleled efficiency and innovation!
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

export default PowerAppsPage;