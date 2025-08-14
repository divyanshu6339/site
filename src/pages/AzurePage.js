import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

import pythonLogo from '../Assets/azure1.png';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import pythonExpert from '../Assets/azure2.webp';
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
        question: 'What specific advantages does Alpixn Technologies offer for Azure development compared to other providers?',
        answer: 'At Alpixn Technologies, we integrate Microsoft Azure consulting services with tailored Azure development services to deliver scalable, secure solutions. Our skilled team accelerates time-to-market, optimizes costs, and ensures seamless integration, giving you a distinct advantage over competitors.'
    },
    {
        question: 'How can Azure help my organization reduce IT costs while improving performance and security?',
        answer: 'Azure provides cost-effective cloud solutions through its flexible pricing model, auto-scaling features, and low-code Azure application development tools. This results in better performance, lower infrastructure costs, and robust security measures while maintaining compliance and safeguarding data.'
    },
    {
        question: 'How does Alpixn Technologies ensure data security and compliance in Azure cloud environments?',
        answer: 'At Alpixn Technologies, we prioritize data security by utilizing Azure\'s built-in security features alongside Azure DevOps services and comprehensive compliance tools. Our expertise in Microsoft Azure development services ensures your cloud infrastructure adheres to industry standards and regulatory requirements, offering peace of mind.'
    },
    {
        question: 'What are the benefits of using Azure\'s multi-region deployment for global businesses?',
        answer: 'Azure\'s multi-region deployment offers high availability, disaster recovery, and low-latency performance across global locations. By leveraging this, your business can maintain continuous operations, provide seamless user experiences, and expand efficiently, supported by our Azure application development services.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "The Hire Dedicated Team model gives you a full-time, committed group of Azure experts who focus exclusively on your project. This approach ensures seamless collaboration, targeted delivery, and direct control, allowing you to achieve your goals efficiently and accurately.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "With team augmentation, we enhance your existing team by hiring skilled Azure developers. This gives you immediate access to specialized expertise, boosts your internal capabilities, accelerates project timelines, and offers flexibility without the costs associated with recruitment.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "In the Project-Based model, we take full responsibility for your project from start to finish. With fixed timelines, clear deliverables, and transparent budgets, we ensure efficient execution that helps you meet your business objectives on time and within budget.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'Azure App Services', logo: jestLogo },
    { name: 'Azure Blob Storage', logo: mongooseLogo },
    { name: 'Azure Cosmos DB', logo: nestJsLogo },
    { name: 'Azure Data Lake Storage', logo: sequelizeLogo },
    { name: 'Azure Functions', logo: socketIoLogo },
    { name: 'Azure Key Vault', logo: typescriptLogo },
    { name: 'Azure Kubernetes', logo: webpackLogo },
    { name: 'Azure Logic Apps', logo: eslintLogo },
    { name: 'Azure Monitor', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'Azure Resource Manager (ARM)', description: 'Azure Resource Manager streamlines cloud management by organizing and controlling resources, enabling efficient automation and consistent deployments across your Azure development services.' },
    { title: 'Azure Active Directory (AAD)', description: "Amplify security with Azure Active Directory (AAD), providing identity and access management that streamlines user authentication while safeguarding against threats through robust security protocols." },
    { title: 'Azure Kubernetes Service (AKS)', description: 'Deploy and manage containerized applications effortlessly with Azure Kubernetes Service (AKS), which elevates scalability and reduces infrastructure overhead, boosting efficiency and reducing costs.' },
    { title: 'Azure Virtual Network (VNet)', description: 'Establish secure connections for your resources using Azure Virtual Network (VNet), facilitating private, isolated networking that ensures seamless communication between your cloud services and on-premises infrastructure.' },
    { title: 'Azure Policy and Blueprints', description: 'Ensure compliance and governance with Azure Policy and Blueprints, which facilitate consistently deploying policies and regulatory standards throughout your cloud environment, enhancing control and security.' },
    { title: 'Azure SQL Database Hyperscale', description: 'Achieve high scalability with Azure SQL Database Hyperscale, delivering dynamic storage and performance for demanding applications, ensuring performance with Microsoft Azure solutions for growing data needs.' },
    { title: 'Azure Cost Management + Billing', description: 'Manage your cloud expenses effectively with Azure Cost Management + Billing, enabling you to proactively monitor, allocate, and optimize costs, ensuring cost efficiency without compromising performance or service quality.' },
    { title: 'Azure Machine Learning Pipelines', description: 'Enhance your AI development process with Azure Machine Learning Pipelines, which automate model training, deployment, and monitoring for fast, efficient, and streamlined machine learning workflows.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'Azure Integration Services',
        description: 'We specialize in Azure integration services that seamlessly connect your systems. By partnering with us, you boost operational efficiency, simplify workflows, and ensure faster, more reliable connections throughout your entire business ecosystem.'
    },
    {
        image: serviceImg2,
        title: 'Azure Cloud Consulting Services',
        description: 'At Alpixn Technologies, our Azure cloud consulting services help you develop a customized cloud strategy that maximizes scalability, security, and performance while effectively reducing costs. Leverage top-tier Microsoft Azure solutions for optimal cloud infrastructure.'
    },
    {
        image: serviceImg3,
        title: 'Azure Migration Solutions',
        description: 'Transitioning to the cloud can be challenging. Our comprehensive Azure migration solutions guarantee a secure, cost-effective shift with minimal downtime, optimizing your business continuity and supporting sustainable growth through expert management and planning.'
    },
    {
        image: serviceImg4,
        title: 'Azure Content Delivery Network (CDN)',
        description: 'Strengthen your web application\'s global performance with Azure CDN. We ensure that content is delivered faster and more reliably, significantly reducing latency and optimizing user experience across regions—boosting engagement and overall satisfaction.'
    },
    {
        image: serviceImg5,
        title: 'Azure Application Implementation',
        description: 'At Alpixn Technologies, we provide rapid Azure application implementation services, ensuring your apps are developed accurately and deployed quickly. Benefit from Azure app development services that are scalable, cost-effective, and designed to meet your business objectives.'
    },
    {
        image: serviceImg6,
        title: 'Azure Kubernetes Solutions',
        description: 'Simplify container management with Azure Kubernetes Service (AKS). We manage container orchestration, scaling, and resource optimization, helping you reduce costs while improving application performance and flexibility with expert support.'
    },
    {
        image: serviceImg7,
        title: 'Azure DevOps Services',
        description: 'Streamline your development cycle by hiring DevOps engineers, automating processes, enhancing collaboration, and accelerating product delivery. Our expert team ensures faster releases and high-quality software through seamless DevOps integration.'
    },
    {
        image: serviceImg8,
        title: 'Azure Managed Services (MSP)',
        description: 'Our Azure managed services (MSP) provide 24/7 monitoring and proactive cloud management. We optimize your infrastructure, minimize risks, and offer expert support so you can focus on business growth without the complexities of cloud management.'
    },
    {
        image: serviceImg9,
        title: 'Azure Maintenance and Support',
        description: 'With Azure maintenance and support, we ensure your cloud environment is continuously optimized, secure, and up-to-date. Our experts proactively handle updates, security patches, and troubleshooting to ensure minimal downtime and maximum operational efficiency.'
    },
];

// Component definitions
const ServiceCard = ({ image, title, description }) => (
  <div className="text-center bg-[#0D1A2B] p-6 rounded-lg border border-gray-800">
    <img src={image} alt={title} className="mx-auto h-16 mb-4" />
    <h3 className="text-lg font-semibold text-blue-400 mb-2">{title}</h3>
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
  <div className="bg-[#1a2332] p-3 rounded border border-gray-700">
    <p className="text-sm text-gray-300">{text}</p>
  </div>
);

const ProficiencyCard = ({ title, description }) => (
  <div className="bg-[#0D1A2B] p-6 rounded-lg border border-gray-800 text-center">
    <h3 className="text-lg font-semibold text-blue-400 mb-3">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const TechStackItem = ({ name, logo }) => (
  <div className="flex flex-col items-center">
    <img src={logo} alt={name} className="h-12 w-12 mb-2" />
    <span className="text-white text-sm text-center">{name}</span>
  </div>
);

const StatItem = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl font-bold text-blue-400">{value}</div>
    <div className="text-gray-400 text-sm mt-1">{label}</div>
  </div>
);

const AwardItem = ({ image, text }) => (
  <div className="text-center">
    <img src={image} alt={text} className="h-16 mx-auto mb-2" />
    <p className="text-sm">{text}</p>
  </div>
);

const EngagementCard = ({ title, description, points }) => (
  <div className="bg-[#0D1A2B] p-6 rounded-lg border border-gray-800">
    <h3 className="text-xl font-semibold text-blue-400 mb-4">{title}</h3>
    <p className="text-gray-400 mb-6 text-sm">{description}</p>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-center text-sm text-gray-300">
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
    <div className="border border-gray-700 rounded-lg">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white font-medium">{question}</span>
        <span className="text-blue-400 text-xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-400 text-sm">{answer}</p>
        </div>
      )}
    </div>
  );
};

const AzurePage = () => {
  return (
    <div className="bg-[#00070E] text-white overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">
                Industry's Best <span className="text-blue-400">Azure</span><br />
                Development Services
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Unlocking Azure's Full Potential for Your Business Success
              </p>
              <p className="mt-4 text-lg text-gray-400">
                As a leading Azure development company, we don't just create solutions—we craft transformative experiences. Our extensive expertise in Azure enables us to deliver unmatched scalability, security, and innovation explicitly tailored to your business needs.
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
              <img src={pythonLogo} alt="Azure" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              When leaders choose Azure, they choose us.
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
                Challenges We'll Assist You Resolve with Our Azure Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard image={seamlessMicroservices} title="Enhanced Multicloud Connectivity" description="As a top Azure development company, we facilitate the seamless integration of Microsoft Azure services, ensuring efficient multicloud connectivity and operational effectiveness." />
                <ServiceCard image={singleThreaded} title="Cost Forecasting & Budgeting" description="Our Azure consulting specialists assist in forecasting and managing expenses through customized Microsoft Azure solutions, effectively optimizing your cloud spending." />
                <ServiceCard image={codeQuality} title="Compliance & Security Posture" description="We enhance your Azure projects by implementing strong security measures and ensuring compliance with industry standards through our Azure development services." />
                <ServiceCard image={memoryLeak} title="Cross-Region Data Synchronization" description="Our Microsoft Azure development services guarantee dependable cross-region data synchronization, enabling real-time updates and enhancing global operational efficiency." />
            </div>
        </div>

        <div className="bg-blue-500 py-6 my-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0">Transform Your Business with Our Bespoke Azure App Development Services</h2>
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
                What Our Scalable Azure Solutions Bring to the Table
            </h2>
            <img src={pythonExpert} alt="Expert Azure Development" className="w-96 h-auto rounded-lg shadow-lg mb-12 mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <Feature
                title="Continuous Feature Innovation"
                description="As a premier Azure development company, we prioritize ongoing innovation to ensure your Microsoft Azure solutions adapt to future business demands."
                />
                <Feature
                title="Proactive Performance Monitoring"
                description="Our Azure consulting specialists provide proactive performance monitoring, enhancing application scalability and reducing downtime through advanced tools."
                />
                <Feature
                title="Compliance & Regulatory Support"
                description="Our Azure development services ensure your solutions adhere to industry regulations, delivering seamless compliance and robust security within Microsoft Azure environments."
                />
                <Feature
                title="Unified Multi-Cloud Strategies"
                description="We create cohesive multi-cloud strategies, integrating Microsoft Azure services with other platforms, promoting greater agility, efficiency, and smooth performance across clouds."
                />
            </div>

            <p className="text-center mt-12 text-gray-400 text-lg">
                Have a question? <a href="#" className="text-blue-400 font-semibold hover:underline">Speak to an expert</a>
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                Full-Cycle Azure Development for Your Business
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
                <h2 className="text-4xl font-bold">Master Azure with Our Expertise</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Harness the power of Azure with our elite team of certified experts. We go beyond traditional solutions by providing strategic insights and custom-tailored architectures that accelerate your growth, enhance security, and optimize performance, giving you a significant edge in the cloud.
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
                <h2 className="text-4xl font-bold mt-2">Why is <span className="text-blue-400">Azure</span> Your Best Cloud Solution?</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Azure stands out as the premier cloud solution, delivering unmatched scalability, advanced security, and cost-effectiveness. Harness its global reach and powerful tools to drive innovation and accelerate your business growth efficiently.
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
                    Technology Stack We Use For Azure 
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
                        At Alpixn Technologies, we offer three flexible Azure engagement models to suit your project needs: Dedicated Team for full-time, integrated support; Staff Augmentation to boost your current team with our experts; and Project-Based for tailored goal-focused solutions. We deliver the perfect mix of flexibility and expertise to drive your success.
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

export default AzurePage;