import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

import pythonLogo from '../Assets/aws1.webp';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import pythonExpert from '../Assets/aws2.webp';
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
        question: 'What AWS technologies are your area of expertise?',
        answer: 'We are a premier Amazon Web Services development company specializing in a wide array of AWS technologies, including S3, EC2, DynamoDB, Lambda, and CloudFormation. Our AWS experts use advanced techniques to create tailored AWS solutions development that improve security, scalability, and performance, ensuring your business prospers in the cloud.'
    },
    {
        question: 'How can I hire AWS developers for my project?',
        answer: 'Hiring developers is simple with our AWS consulting and application development services. Whether you need comprehensive project support or specific expertise, we help you hire AWS experts tailored to your project requirements for successful outcomes and seamless integration of AWS technologies.'
    },
    {
        question: 'What is the advantage of using AWS for cloud infrastructure?',
        answer: 'AWS provides unparalleled scalability, security, and flexibility, allowing businesses to expand without traditional infrastructure constraints. As an established AWS development company, we leverage AWS cloud application development services to optimize your infrastructure, reduce costs, and accelerate innovation for a competitive edge.'
    },
    {
        question: 'Can you help migrate my existing application to AWS?',
        answer: 'Yes, our AWS software development services include all-inclusive migration support. We offer seamless AWS migration services to ensure your existing application transitions smoothly to the cloud while maximizing the advantages of AWS infrastructure. This migration enhances scalability, security, and performance tailored to your business requirements.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "Our Dedicated Team model connects you with top AWS professionals who are fully committed to your project. This approach accelerates delivery, ensures seamless integration, and delivers long-term value through tailored AWS development services.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "Outsource AWS development with our team augmentation model to enhance your in-house teams with specialized AWS app development services. Unlock flexibility, bridge skill gaps, and speed up project delivery with AWS developers for hire.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "Our Project-Based model provides customized AWS solutions that deliver high-quality outcomes within specified timelines and budgets. Leverage our AWS consulting and application development services for clear goals, reduced risks, and significant business impact.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'Amazon CloudFront', logo: jestLogo },
    { name: 'Amazon CloudWatch', logo: mongooseLogo },
    { name: 'Amazon EC2', logo: nestJsLogo },
    { name: 'Amazon DynamoDB', logo: sequelizeLogo },
    { name: 'Amazon Route', logo: socketIoLogo },
    { name: 'AWS CloudTrail', logo: typescriptLogo },
    { name: 'AWS Fargate', logo: webpackLogo },
    { name: 'AWS Lambda', logo: eslintLogo },
    { name: 'Simple Storage Service', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'Elastic Beanstalk for Easy Deployment', description: 'AWS Elastic Beanstalk simplifies application deployment, scaling, and management, allowing for faster market entry while minimizing operational overhead with minimal configuration.' },
    { title: 'Amazon Aurora Relational Database', description: "Amazon Aurora provides high-performance, scalable relational databases with automatic scaling at lower costs, ensuring seamless enterprise application management." },
    { title: 'Amazon S3 for Object Storage', description: 'Amazon S3 offers scalable, secure, and cost-effective object storage for data management, backup, and analytics, ensuring quick and reliable data access.' },
    { title: 'DynamoDB for NoSQL Databases', description: 'Amazon DynamoDB delivers fast, flexible NoSQL database solutions with high availability, ensuring low-latency access for demanding applications with heavy traffic.' },
    { title: 'CloudFront for Edge Computing', description: 'AWS CloudFront provides low-latency content delivery from global edge locations, enhancing performance, security, and user experience across web applications and services.' },
    { title: 'AWS Fargate Serverless Containers', description: 'AWS Fargate runs containers without the need to manage servers, optimizing cost and performance while enabling faster deployments and reducing operational overhead.' },
    { title: 'AWS CloudFormation for Infrastructure as Code', description: 'AWS CloudFormation automates infrastructure provisioning through code, ensuring consistency and repeatable environments while reducing errors and speeding development.' },
    { title: 'AWS CodeBuild for Continuous Integration', description: 'AWS CodeBuild speeds up continuous integration with automated builds and tests, enhancing developer efficiency and ensuring consistent, high-quality software delivery.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'AWS Integration Services',
        description: 'We provide strategic counsel to maximize cloud adoption, reduce operational expenses, and improve scalability. We provide customized cloud architectures that enable your business to grow, innovate, and maintain operational effectiveness.'
    },
    {
        image: serviceImg2,
        title: 'AWS Application Development',
        description: 'Our AWS application development services provide high-performance, scalable apps, guaranteeing reduced time-to-market, improved security, and seamless scalability as your company progresses with AWS cloud solutions.'
    },
    {
        image: serviceImg3,
        title: 'Seamless AWS Implementation',
        description: 'Our experts facilitate hassle-free migrations, ensuring minimal downtime, optimum resource allocation, and improved performance upon relocation. We help transition legacy systems to AWS while enhancing security at optimized costs.'
    },
    {
        image: serviceImg4,
        title: 'Extensive Migration Services',
        description: 'Our AWS migration services ensure a seamless transition to the cloud, minimizing downtime and enhancing performance. We customize strategies to fit your unique requirements, ensuring maximum efficiency and scalability.'
    },
    {
        image: serviceImg5,
        title: 'AWS Security and Compliance Services',
        description: 'Utilize our AWS security and compliance services to secure your infrastructure with sophisticated procedures. Leverage improved data security, adherence to regulations, and risk mitigation techniques for safe cloud infrastructure.'
    },
    {
        image: serviceImg6,
        title: 'Cloud-Native Application Development',
        description: 'Build cloud-native applications with us and benefit from AWS\'s scalability, security, and cost-effectiveness. This model leads to rapid innovation, enhanced flexibility, and reduced infrastructure expenses for sustained success.'
    },
    {
        image: serviceImg7,
        title: 'DevOps Automation on AWS',
        description: 'For scalable and faster time-to-market solutions, hire DevOps engineers to automate development and deployment procedures. Speed up release cycles, minimize human error, and enhance collaboration, ensuring quicker time-to-market and superior software quality.'
    },
    {
        image: serviceImg8,
        title: '24/7 Monitoring and Management',
        description: 'Leverage round-the-clock availability with AWS monitoring and management, ensuring zero system downtime, proactive issue resolution, and enhanced performance. Our experts ensure your cloud infrastructure runs efficiently, allowing you to focus on business growth.'
    },
    {
        image: serviceImg9,
        title: 'AI and Machine Learning Integration',
        description: 'Deploy AI and ML functionalities into your AWS environment to improve decision-making and automate complex workflows. Acquire actionable insights, improve customer experiences, and maximize processes to maintain a competitive advantage.'
    },
];

const ServiceCard = ({ image, title, description }) => (
    <div className="bg-[#0D1A2B] p-6 rounded-lg border border-gray-800 text-center">
        <img src={image} alt={title} className="h-16 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-orange-400 mb-3">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

const Feature = ({ title, description }) => (
    <div className="text-left">
        <h3 className="text-xl font-semibold text-orange-400 mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const FeatureCard = ({ text }) => (
    <div className="bg-gray-700 p-3 rounded-lg">
        <p className="text-sm text-gray-300">{text}</p>
    </div>
);

const ProficiencyCard = ({ title, description }) => (
    <div className="bg-[#0D1A2B] p-6 rounded-lg border border-gray-800 text-center">
        <h3 className="text-lg font-semibold text-orange-400 mb-3">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

const TechStackItem = ({ name, logo }) => (
    <div className="flex flex-col items-center">
        <img src={logo} alt={name} className="h-16 mb-2" />
        <span className="text-white text-sm text-center">{name}</span>
    </div>
);

const StatItem = ({ value, label }) => (
    <div className="text-center">
        <p className="text-4xl font-bold text-orange-500">{value}</p>
        <p className="text-gray-400 mt-2">{label}</p>
    </div>
);

const AwardItem = ({ image, text }) => (
    <div className="text-center">
        <img src={image} alt={text} className="h-12 mx-auto mb-2" />
        <p className="text-sm">{text}</p>
    </div>
);

const EngagementCard = ({ title, description, points }) => (
    <div className="bg-[#0D1A2B] p-8 rounded-lg border border-gray-800">
        <h3 className="text-xl font-semibold text-orange-400 mb-4">{title}</h3>
        <p className="text-gray-400 mb-6 text-sm">{description}</p>
        <ul className="space-y-2">
            {points.map((point, index) => (
                <li key={index} className="text-sm text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    {point}
                </li>
            ))}
        </ul>
    </div>
);

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-800 rounded-lg">
            <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-[#0D1A2B] hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold text-white">{question}</span>
                <span className="text-orange-500 text-xl">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
                <div className="px-6 py-4 bg-gray-900">
                    <p className="text-gray-400">{answer}</p>
                </div>
            )}
        </div>
    );
};

const AWSPage = () => {
  return (
    <div className="bg-[#00070E] text-white overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">
                Most Trusted <span className="text-orange-400">AWS</span><br />
                Development Company
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Collaborate with Reliable AWS Experts for Real Results
              </p>
              <p className="mt-4 text-lg text-gray-400">
                Choose us for AWS development and leverage the expertise of a qualified team that has executed 4,000+ projects with an outstanding 98% provenance. We provide tailored, secure cloud solutions that evolve alongside your business, delivering quicker time-to-market, cost savings, and seamless integration at every stage.
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
              <img src={pythonLogo} alt="AWS" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              Where Industry Giants Turn for AWS Proficiency
            </h2>
            <div className="mt-8 flex justify-center items-center flex-wrap gap-8">
              <img src={visaLogo} alt="Amazon Web Services" className="h-12" />
              <img src={infosysLogo} alt="Spotify" className="h-12" />
              <img src={netflixLogo} alt="Coca-Cola" className="h-16" />
              <img src={moglixLogo} alt="Twitter" className="h-16" />
              <img src={relianceLogo} alt="Slack" className="h-16" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                Challenges We'll Assist You Resolve with Our Custom AWS Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard image={seamlessMicroservices} title="Cold Start Issues in Lambda" description="Cold start delays in AWS Lambda can affect performance and latency. Our AWS experts seamlessly optimize Lambda functions for expedited startup, ensuring your serverless applications run optimally with low latency." />
                <ServiceCard image={singleThreaded} title="IAM Policy Management" description="IAM policies' efficient administration is essential for security and access regulation. Being a prominent AWS development company, we simplify IAM configuration, ensuring safe and scalable permissions for your cloud infrastructure." />
                <ServiceCard image={codeQuality} title="Service Limits and Quotas" description="AWS service limits can impede scalability and performance. We help businesses make the best out of AWS resources, ensuring compliance with service quotas while improving performance and minimizing service outages." />
                <ServiceCard image={memoryLeak} title="Vendor Lock-In Risks" description="Vendor lock-in may constrain flexibility and increase expenses. We mitigate these risks by developing custom AWS development solutions that build multi-cloud architecture and guide effortless migration to protect your long-term cloud strategy." />
            </div>
        </div>

        <div className="bg-blue-500 py-6 my-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0">Transform Your Business with Our Bespoke AWS App Development Services</h2>
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
                Elevate Your Cloud Strategy with AWS DevOps Solutions
            </h2>
            <img src={pythonExpert} alt="Expert AWS Development" className="w-96 h-auto rounded-lg shadow-lg mb-12 mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <Feature
                title="Tailored Automation Frameworks"
                description="Using our AWS DevOps services, we create custom automation frameworks that accelerate development cycles, lower operational metrics, and assure rapid, defect-free deployments, therefore improving overall productivity and agility."
                />
                <Feature
                title="Cost-Effective Resource Allocation"
                description="Our bespoke AWS solutions development focuses on optimum resource allocation, enhancing cloud expenditure while maintaining performance standards. We leverage AWS's powerful features to ensure your infrastructure grows efficiently within budgetary limits."
                />
                <Feature
                title="Real-Time Monitoring Solutions"
                description="Our advanced real-time monitoring solutions provide critical insights into your AWS environment, enabling proactive performance management. We emphasize continuous optimization to avoid downtime and enhance the reliability of your cloud applications."
                />
                <Feature
                title="Agile Methodology Implementation"
                description="We embed Agile best practices into your AWS DevOps processes, facilitating expedited feature rollouts and continuous enhancement. This flexible approach encourages collaboration, accelerates time-to-market, and strengthens your competitive advantage."
                />
            </div>

            <p className="text-center mt-12 text-gray-400 text-lg">
                Have a question? <a href="#" className="text-blue-400 font-semibold hover:underline">Speak to an expert</a>
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                End-to-End AWS Software Development Services That Propel Growth
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {developmentServices.map((service, index) => (
                    <div key={index} className="bg-[#0D1A2B] p-8 rounded-lg border border-gray-800 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={service.image} alt={service.title} className="h-24 mb-6 self-start" />
                        <h3 className="text-xl font-semibold text-orange-400 mb-4">{service.title}</h3>
                        <p className="text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Elevate Your Cloud Game with AWS Experts</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Let our AWS experts, the leading thought leaders in the industry, elevate your cloud strategy. By collaborating with our AWS developers, you gain scalable and secure solutions that foster innovation, boost efficiency, and lower costs—tailoring your business for long-term, sustainable success.
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
                <h3 className="text-lg font-semibold text-gray-400">Quality-Focused AWS Development Services</h3>
                <h2 className="text-4xl font-bold mt-2">Why is <span className="text-green-400">AWS</span> the Go-To Choice for Building Scalable Applications?</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    AWS's simple architecture, adaptability, and large library ecosystem make it the perfect language for scalable projects. Its strong frameworks and simple syntax enable rapid development, which qualifies for both startups and large enterprises aiming for efficient and maintainable solutions.
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
                    Technology Stack We Use For AWS
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
                        At Alpixn Technologies, we offer three flexible AWS engagement models to suit your project needs: Dedicated Team for full-time, integrated support; Staff Augmentation to boost your current team with our experts; and Project-Based for tailored goal-focused solutions. We deliver the perfect mix of flexibility and expertise to drive your success.
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

export default AWSPage;