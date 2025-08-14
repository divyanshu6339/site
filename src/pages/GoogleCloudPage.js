import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

// Import all the same images as the Python page
import pythonLogo from '../Assets/google_cloud1.webp';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import pythonExpert from '../Assets/googlecloud2.webp';
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
        question: 'Is Google Cloud suitable for enterprise applications?',
        answer: 'Yes, Google Cloud is well-suited for enterprise applications. As a premier Google Cloud Development & Consulting provider, Alpixn Technologies creates custom cloud applications that scale effectively, ensuring reliability, security, and high performance to meet large-scale business demands.'
    },
    {
        question: 'What is Google Cloud AI/ML, and how does it help developers?',
        answer: 'Google Cloud AI/ML provides powerful tools like TensorFlow and Vertex AI, enabling developers to build intelligent, data-driven applications. Alpixn Technologies, a leading Google Cloud Platform Development Company, can assist in integrating AI/ML for enhanced business solutions.'
    },
    {
        question: 'Is outsourcing Google Cloud development services cost-effective?',
        answer: 'Yes, outsourcing Google Cloud Development Services is highly cost-effective. Partnering with a trusted Google Cloud consulting services partner like Alpixn Technologies, businesses access top-tier expertise, lower operational costs, and speed up innovation without the overhead of hiring in-house developers.'
    },
    {
        question: 'How do I choose the right Google Cloud development outsourcing partner?',
        answer: 'When selecting an outsourcing partner, prioritize experience, expertise, and proven results. As one of the top cloud consulting companies, Alpixn Technologies offers skilled Google Cloud developers who specialize in creating custom cloud applications aligned with your business objectives.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "We build a bespoke offshore Google Cloud team that integrates seamlessly with your company. This dedicated team of expert Google Cloud developers acts as an extension of your in-house team, providing continuous assistance and producing exceptional, top-notch outcomes throughout the development lifecycle.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "Alpixn Technologies' team augmentation model adopts a meticulous approach to handling risks and optimizing resources. By hiring Google Cloud specialists who fit your project's needs, we ensure timely completion, cost efficiency, and successful goal attainment, enhancing the productivity of your current team.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "We elevate your in-house team by integrating top-tier experts through our premier outsourcing Google Cloud development solutions. This approach enables you to tap into exceptional expertise and specialized abilities for specific Google Cloud projects, ensuring the timely delivery of top-notch, efficient outcomes.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'App Engine', logo: jestLogo },
    { name: 'BigQuery', logo: mongooseLogo },
    { name: 'Cloud CDN', logo: nestJsLogo },
    { name: 'Dataflow', logo: sequelizeLogo },
    { name: 'Dataproc', logo: socketIoLogo },
    { name: 'Functions', logo: typescriptLogo },
    { name: 'Spanner', logo: webpackLogo },
    { name: 'Cloud SQL', logo: eslintLogo },
    { name: 'Compute Engine', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'BigQuery Analytics', description: 'Gain rapid, real-time insights with BigQuery Analytics, empowering data-driven decisions that fuel innovation and business growth with scalable data warehouse solutions.' },
    { title: 'Anthos Hybrid Cloud', description: "Effortlessly manage applications across environments with Anthos Hybrid Cloud, ensuring security, flexibility, and consistent performance across on-premises and cloud infrastructures." },
    { title: 'Kubernetes Engine', description: 'Simplify container orchestration with Kubernetes Engine, enhancing scalability, reliability, and operational efficiency across cloud environments with automated deployment and management.' },
    { title: 'VPC Service Controls', description: 'Safeguard sensitive data with VPC Service Controls, establishing secure boundaries around cloud resources to prevent unauthorized access and ensure data protection.' },
    { title: 'Cloud Pub/Sub', description: 'Utilize Cloud Pub/Sub for real-time event messaging, enabling agile, event-driven architectures and quicker application responses with scalable messaging infrastructure.' },
    { title: 'Cloud Load Balancing', description: 'Achieve high availability and optimal performance globally with Cloud Load Balancing, efficiently distributing traffic across resources for seamless user experiences.' },
    { title: 'Firebase Integration', description: 'Incorporate Firebase to develop scalable, feature-rich apps with real-time databases, authentication, and analytics for improved engagement and rapid development cycles.' },
    { title: 'Cloud Spanner', description: 'Scale applications effortlessly with Cloud Spanner, providing globally distributed, highly consistent databases for mission-critical workloads with automatic scaling capabilities.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'GCP Cloud Strategy Consulting',
        description: 'Alpixn Technologies, the industry\'s best Google Cloud development company, expertly crafts customized cloud strategies that align with your specific business objectives, fostering innovation, improving operational efficiency, and ensuring long-term scalability.'
    },
    {
        image: serviceImg2,
        title: 'GCP Application Development Services',
        description: 'We specialize in Google Cloud application development, building scalable, high-performance, robust applications that improve system integration and expedite data exchange. Our dedicated Google Cloud experts ensure seamless connectivity across your applications and services.'
    },
    {
        image: serviceImg3,
        title: 'Google G Suite Implementation Services',
        description: 'Alpixn Technologies Google Cloud development outsourcing services facilitate smooth G Suite implementation, enhancing collaboration, increasing team productivity, and ensuring secure data management while promoting better communication within your organization.'
    },
    {
        image: serviceImg4,
        title: 'GCP Cloud Migration Services',
        description: 'Alpixn Technologies, a premier Google Cloud software development company, guarantees a smooth transition to Google Cloud with minimal downtime, increased performance, and maximum security, enabling you to harness the capabilities of GCP\'s infrastructure fully.'
    },
    {
        image: serviceImg5,
        title: 'GCP DevOps Automation Services',
        description: 'We offer Google Cloud DevOps automation with frameworks that optimize your development cycles, automate workflows, and boost deployment speed, resulting in quicker, higher-quality releases and improved team collaboration.'
    },
    {
        image: serviceImg6,
        title: 'GCP Security & Compliance Consulting',
        description: 'We specialize in Google Cloud security and compliance consulting, crafting solutions that cater to specific business requirements. Our Google Cloud veterans ensure thorough protection, robust functionality, innovative features, and scalability to support your strategic goals.'
    },
    {
        image: serviceImg7,
        title: 'Google Cloud AI & ML Services',
        description: 'We specializes in Google Cloud AI & ML services, providing scalable, intelligent solutions that unlock valuable insights, enable smarter decision-making, predictive analytics, and automated processes that accelerate innovation and enhance operational efficiency.'
    },
    {
        image: serviceImg8,
        title: 'GCP Hybrid Cloud Solutions',
        description: 'As a premier Google Cloud development firm, we integrate Google Cloud hybrid solutions into your infrastructure, offering flexibility, greater control over data, seamless integration, and increased scalability to meet the dynamic needs of your business.'
    },
    {
        image: serviceImg9,
        title: 'GCP Cost Optimization & Monitoring',
        description: 'At Alpixn Technologies, we perform comprehensive Google Cloud cost optimization and monitoring to enhance your cloud ROI with intelligent monitoring and cost-saving strategies, minimizing unnecessary expenses and ensuring efficient cloud investments.'
    },
];

// Component definitions
const ServiceCard = ({ image, title, description }) => (
    <div className="bg-[#0D1A2B] p-6 rounded-lg border border-gray-800 text-center">
        <img src={image} alt={title} className="mx-auto mb-4 h-16 w-16" />
        <h3 className="text-lg font-semibold text-green-400 mb-3">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

const Feature = ({ title, description }) => (
    <div className="text-left">
        <h3 className="text-xl font-semibold text-green-400 mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const FeatureCard = ({ text }) => (
    <div className="bg-[#1a1a1e] p-3 rounded-lg border border-gray-700">
        <p className="text-gray-300 text-sm">{text}</p>
    </div>
);

const ProficiencyCard = ({ title, description }) => (
    <div className="bg-[#0D1A2B] p-6 rounded-lg border border-gray-800 text-center">
        <h3 className="text-lg font-semibold text-green-400 mb-3">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

const TechStackItem = ({ name, logo }) => (
    <div className="flex flex-col items-center">
        <img src={logo} alt={name} className="h-16 w-16 mb-3" />
        <span className="text-white font-medium">{name}</span>
    </div>
);

const StatItem = ({ value, label }) => (
    <div className="text-center">
        <p className="text-4xl font-bold text-green-400">{value}</p>
        <p className="text-gray-400 mt-2">{label}</p>
    </div>
);

const AwardItem = ({ image, text }) => (
    <div className="text-center">
        <img src={image} alt={text} className="mx-auto h-16 mb-3" />
        <p className="text-gray-300">{text}</p>
    </div>
);

const EngagementCard = ({ title, description, points }) => (
    <div className="bg-[#0D1A2B] p-8 rounded-lg border border-gray-800">
        <h3 className="text-xl font-semibold text-green-400 mb-4">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <ul className="space-y-2">
            {points.map((point, index) => (
                <li key={index} className="text-gray-300 text-sm flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
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
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-800"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-white font-medium">{question}</span>
                <span className="text-green-400 text-xl">
                    {isOpen ? '−' : '+'}
                </span>
            </button>
            {isOpen && (
                <div className="px-6 pb-6">
                    <p className="text-gray-400">{answer}</p>
                </div>
            )}
        </div>
    );
};

const GoogleCloudPage = () => {
  return (
    <div className="bg-[#00070E] text-white overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">
                Trusted <span className="text-green-400">Google Cloud</span><br />
                Development Company
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Accelerate Your Growth with Expert Google Cloud Development Services
              </p>
              <p className="mt-4 text-lg text-gray-400">
                Transform your business with Alpixn Technologies. With 14+ years of extensive experience and ISO certification, our expert Google Cloud specialists deliver seamless, cutting-edge cloud solutions that exceed expectations and drive digital transformation.
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
              <img src={pythonLogo} alt="Google Cloud" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              Google Cloud Development, Trusted by the Best!
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
                Challenges We'll Assist You Resolve with Our Google Cloud Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard image={seamlessMicroservices} title="AI-Powered Autoscaling" description="Our Google Cloud development services facilitate AI-powered autoscaling, allowing applications to automatically adapt to traffic fluctuations while optimizing cost and ensuring peak performance." />
                <ServiceCard image={singleThreaded} title="CI/CD for GKE" description="Our Google Cloud consulting services enhance CI/CD for GKE, accelerating deployment speed, fostering collaboration, and improving code quality with minimal downtime for seamless operations." />
                <ServiceCard image={codeQuality} title="Cross-Region DR Setup" description="We create cross-region disaster recovery solutions with Google Cloud, ensuring data remains accessible and reliable across multiple regions to support business continuity and resilience." />
                <ServiceCard image={memoryLeak} title="Firestore Throughput Scaling" description="With our expertise in Google Cloud application development, we optimize Firestore throughput, enhancing data management and performance for large-scale applications and real-time operations." />
            </div>
        </div>

        <div className="bg-blue-500 py-6 my-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0">Transform Your Business with Our Bespoke Google Cloud Development Services</h2>
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
                Achieve Excellence with Our Premier Google Cloud Solutions
            </h2>
            <img src={pythonExpert} alt="Expert Google Cloud Development" className="w-96 h-auto rounded-lg shadow-lg mb-12 mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <Feature
                title="End-to-End Security Across All Layers"
                description="As a top Google Cloud platform development company, we provide extensive, multilayered security that safeguards your data and applications against all threats with advanced encryption, access controls, and compliance measures."
                />
                <Feature
                title="Advanced Data Analytics with BigQuery"
                description="Our Google Cloud development and consulting services utilize BigQuery to provide rapid, scalable analytics that yield actionable insights and speed up decision-making with powerful data warehouse capabilities."
                />
                <Feature
                title="AI-Driven Data Management with Dataprep"
                description="Through Google Cloud application development, we harness Dataprep's AI capabilities to simplify data management, ensuring clean and accurate data for effective business strategies and intelligent automation."
                />
                <Feature
                title="Built-In Disaster Recovery Solutions"
                description="As Google Cloud computing services specialists, we implement robust disaster recovery solutions to keep your business resilient and operational during disruptions with automated backup and recovery processes."
                />
            </div>

            <p className="text-center mt-12 text-gray-400 text-lg">
                Have a question? <a href="#" className="text-blue-400 font-semibold hover:underline">Speak to an expert</a>
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                Innovative Google Cloud Solutions for Measurable Impact
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
                <h2 className="text-4xl font-bold">Your Trusted Google Cloud Advisors</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    At Alpixn Technologies, our Google Cloud specialists are more than just consultants — they're your innovation partners. For future-ready solutions, hire dedicated Google Cloud developers to supercharge your cloud journey, providing customized solutions that deliver exceptional agility, security, and cost-effectiveness while driving growth and competitive advantage.
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
                                <span className="text-gray-400">US | GOOGLE CLOUD | CLOUD INFRASTRUCTURE</span>
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
                <h2 className="text-4xl font-bold mt-2">Why is <span className="text-green-400">Google Cloud</span> the Go-To Choice for Building Scalable Applications?</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Google Cloud's simple architecture, adaptability, and large library ecosystem make it the perfect language for scalable projects. Its strong frameworks and simple syntax enable rapid development, which qualifies for both startups and large enterprises aiming for efficient and maintainable solutions.
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
                    Technology Stack We Use For Google Cloud Development
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
                        At Alpixn Technologies, we offer three flexible Google Cloud engagement models to suit your project needs: Dedicated Team for full-time, integrated support; Staff Augmentation to boost your current team with our experts; and Project-Based for tailored goal-focused solutions. We deliver the perfect mix of flexibility and expertise to drive your success.
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

export default GoogleCloudPage;