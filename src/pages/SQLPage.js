import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

// Import statements for images (same as Python page)
import pythonLogo from '../Assets/sql1.webp';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import pythonExpert from '../Assets/sql2.webp';
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

const ServiceCard = ({ image, title, description }) => (
  <div className="bg-[#0D1A2B] p-6 rounded-lg border border-gray-800 text-center">
    <img src={image} alt={title} className="h-16 mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-[#00758f] mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Feature = ({ title, description }) => (
  <div className="text-left">
    <h3 className="text-xl font-semibold text-[#00758f] mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const FeatureCard = ({ text }) => (
  <div className="bg-[#1a2332] p-3 rounded-lg border border-gray-700">
    <p className="text-gray-300 text-sm">{text}</p>
  </div>
);

const ProficiencyCard = ({ title, description }) => (
  <div className="bg-[#0D1A2B] p-6 rounded-lg border border-gray-800 text-center">
    <h3 className="text-lg font-semibold text-[#00758f] mb-3">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const TechStackItem = ({ name, logo }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-white p-4 rounded-lg mb-3 w-20 h-20 flex items-center justify-center">
      <img src={logo} alt={name} className="h-12 w-12 object-contain" />
    </div>
    <span className="text-white font-medium">{name}</span>
  </div>
);

const StatItem = ({ value, label }) => (
  <div className="text-center">
    <div className="text-4xl md:text-5xl font-bold text-[#00758f]">{value}</div>
    <div className="text-gray-400 mt-2">{label}</div>
  </div>
);

const AwardItem = ({ image, text }) => (
  <div className="text-center">
    <img src={image} alt={text} className="h-16 mx-auto mb-4" />
    <p className="text-gray-300">{text}</p>
  </div>
);

const EngagementCard = ({ title, description, points }) => (
  <div className="bg-[#0D1A2B] p-8 rounded-lg border border-gray-800">
    <h3 className="text-2xl font-bold text-[#00758f] mb-4">{title}</h3>
    <p className="text-gray-400 mb-6">{description}</p>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-center text-gray-300">
          <div className="w-2 h-2 bg-[#00758f] rounded-full mr-3"></div>
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0D1A2B] border border-gray-800 rounded-lg">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#1a2332] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white font-medium">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
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

const faqs = [
    {
        question: 'What are the typical costs associated with SQL development services?',
        answer: 'The cost of SQL development services depends on the projects complexity, requirements, and timeline. We offer personalized price estimates to ensure optimal value for your requirements.'
    },
    {
        question: 'Can I hire SQL developers on a part-time or full-time basis?',
        answer: 'Yes, we provide three engagement models to choose from: dedicated team, team augmentation, and project-based, giving you the flexibility to pick the most suitable one, depending on your requirements.'
    },
    {
        question: 'What testing methodologies do you follow for SQL applications?',
        answer: 'We utilize a range of testing methodologies, including unit testing, integration testing, and automated testing, to ensure the quality and dependability of our SQL applications.'
    },
    {
        question: 'What frameworks and tools do you use for SQL development?',
        answer: 'We utilize a range of frameworks and tools, like MySQL, PostgreSQL, and SQL Server, to provide customizable and effective SQL solutions tailored to your project needs.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "We build a bespoke offshore SQL team that integrates seamlessly with your company. This dedicated team of expert SQL developers acts as an extension of your in-house team, providing continuous assistance and producing exceptional, top-notch outcomes throughout the development lifecycle.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "Alpixn Technologies' team augmentation model adopts a meticulous approach to handling risks and optimizing resources. By hiring SQL programmers who fit your project's needs, we ensure timely completion, cost efficiency, and successful goal attainment, enhancing the productivity of your current team.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "We elevate your in-house team by integrating top-tier experts through our premier outsourcing SQL development solutions. This approach enables you to tap into exceptional expertise and specialized abilities for specific SQL projects, ensuring the timely delivery of top-notch, efficient outcomes.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'MySQL', logo: jestLogo },
    { name: 'PostgreSQL', logo: mongooseLogo },
    { name: 'SQL Server', logo: nestJsLogo },
    { name: 'Oracle', logo: sequelizeLogo },
    { name: 'MariaDB', logo: socketIoLogo },
    { name: 'BigQuery', logo: typescriptLogo },
    { name: 'DataGrip', logo: webpackLogo },
    { name: 'DBeaver', logo: eslintLogo },
    { name: 'Sequelize', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'Structured Query Language', description: 'SQL provides standardized syntax for consistent interaction with relational databases, facilitating collaboration among backend developers and ensuring efficient teamwork on data-related tasks.' },
    { title: 'Advanced Joins', description: "SQL efficiently extracts data from multiple tables by supporting complex joins, including INNER, OUTER, and CROSS. This provides in-depth insights by eliminating redundant data and streamlining analysis." },
    { title: 'Transaction Control', description: 'SQL manages transactions with commands such as COMMIT, ROLLBACK, and SAVEPOINT to keep data consistency and integrity intact, offering precise control over database operations for reliable data management.' },
    { title: 'Indexing Optimization', description: 'SQL allows the establishment of diverse indexes, such as B-trees and hash indexes, significantly enhancing data retrieval efficiency. This optimization boosts the efficiency of queries and the overall effectiveness of the application.' },
    { title: 'ACID Compliance', description: 'SQL databases conform to ACID properties, ensuring reliable transactions that mitigate data corruption, essential for mission-critical applications where maintaining data integrity is paramount.' },
    { title: 'Full-Text Search', description: 'SQL offers full-text search functionalities, allowing advanced text searches on large datasets. This is essential for applications necessitating robust search functionalities to retrieve specific information quickly.' },
    { title: 'Data Aggregation', description: 'SQLs built-in functions like SUM, AVG, and COUNT aid in efficient data aggregation and analysis directly within the database, significantly reducing dependence on external tools and streamlining data management processes.' },
    { title: 'Complex Data Types', description: 'SQL can manage several data types, including JSON and XML, allowing businesses to efficiently store and retrieve semi-structured data within relational databases, hence facilitating the management of diverse data forms.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'Tailored SQL Database Architecture',
        description: 'Alpixn Technologies, the industrys best SQL development company, specializes in designing bespoke SQL database architecture that optimizes performance and scalability, ensuring data management aligns with business objectives and facilitates future expansion.'
    },
    {
        image: serviceImg2,
        title: 'Expert SQL Server Programming',
        description: 'We specialize in SQL Server programming, providing efficient, high-quality code that optimizes performance and simplifies data management. Our dedicated SQL experts ensure seamless connectivity and robust functionality across your applications.'
    },
    {
        image: serviceImg3,
        title: 'Robust SQL Server Security',
        description: 'Alpixn Technologies provides comprehensive SQL server security solutions aimed at protecting sensitive information. Our extensive procedures ensure compliance and data protection, allowing you to operate confidently in a digital environment.'
    },
    {
        image: serviceImg4,
        title: 'Proactive SQL Database Tuning',
        description: 'Alpixn Technologies, a premier SQL software development company, offers proactive SQL database tuning to improve effectiveness. By optimizing your database, we enhance speed and reliability, boosting user satisfaction and overall productivity.'
    },
    {
        image: serviceImg5,
        title: 'Dynamic SQL Application Development',
        description: 'We specialize in dynamic SQL application development tailored to your needs. Our intuitive solutions adapt effortlessly with robust frameworks, ensuring your applications stay relevant and impactful as your business progresses.'
    },
    {
        image: serviceImg6,
        title: 'SQL Server Business Intelligence',
        description: 'We specialize in SQL Server business intelligence solutions that transform raw data into valuable analytics. Our SQL veterans ensure comprehensive reporting and data visualization, empowering your team with critical insights for strategic decision-making.'
    },
    {
        image: serviceImg7,
        title: 'SQL Performance Monitoring',
        description: 'We offer comprehensive SQL performance monitoring services to keep your systems running flawlessly. Our proactive approach reduces downtime and optimizes the efficiency of your SQL Server environments through continuous monitoring.'
    },
    {
        image: serviceImg8,
        title: 'Cloud-Based SQL Solutions',
        description: 'As a premier SQL development firm, we integrate cloud-based SQL solutions into your infrastructure, streamlining deployment, scaling, and management. Our specialists guarantee faster deployment intervals and reliable efficiency for your database operations.'
    },
    {
        image: serviceImg9,
        title: 'Custom SQL Reporting Solutions',
        description: 'At Alpixn Technologies, we deliver custom SQL reporting solutions designed to offer targeted analytics for your organization. Our developers employ advanced reporting techniques, empowering strategic decision-making and driving performance optimization.'
    },
];

const SQLPage = () => {
  return (
    <div className="bg-[#00070E] text-white overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">
                Trusted <span className="text-[#00758f]">SQL</span><br />
                Development Company
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Your Partner for Building High-Performance Applications with SQL
              </p>
              <p className="mt-4 text-lg text-gray-400">
                Ensure improved database efficiency, strengthened security, and informed decision-making for your business with Alpixn Technologies, a premier SQL development company delivering assured results since 2011.
              </p>
              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <button className="bg-[#00758f] text-white font-bold py-3 px-6 rounded-md hover:bg-[#005a6b] transition duration-300">
                  Get Started
                </button>
                <button className="border border-[#00758f] text-[#00758f] font-bold py-3 px-6 rounded-md hover:bg-[#00758f] hover:text-white transition duration-300">
                  Book a call with our expert
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img src={pythonLogo} alt="SQL" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              Entrusted by Tech Pioneers for Premium SQL Solutions
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
                Challenges We'll Assist You Resolve with Our SQL Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard image={seamlessMicroservices} title="Slow Query Performance" description="As a premier SQL development company, our SQL development services emphasize optimizing query performance. We thoroughly examine your queries and refine your database architecture, yielding quick response times and better user engagement." />
                <ServiceCard image={singleThreaded} title="Complex Join Operations" description="Complex joins can impede the effectiveness of retrieving data. Our SQL server development services streamline these tasks by executing efficient join algorithms, hence allowing expedited and efficient data retrieval." />
                <ServiceCard image={codeQuality} title="SQL Injection Vulnerabilities" description="Security is fundamental for any database. Our custom database development company utilizes agile approaches in our SQL programming services to prevent SQL injection vulnerabilities, hence safeguarding your valuable asset- data." />
                <ServiceCard image={memoryLeak} title="Data Integrity Violations" description="As the industry's best database design and development company, we enforce stringent data validation protocols via our database development services, assuring reliable and consistent information for result-driven decisions." />
            </div>
        </div>

        <div className="bg-[#00758f] py-6 my-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0">Transform Your Business with Our Bespoke SQL Development</h2>
                <button className="bg-white text-[#00758f] font-bold py-2 px-4 rounded-md flex items-center hover:bg-gray-200 transition duration-300 shrink-0">
                Connect With Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </button>
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-8">
                Optimized Performance: Custom SQL Solutions
            </h2>
            <img src={pythonExpert} alt="Expert SQL Development" className="w-96 h-auto rounded-lg shadow-lg mb-12 mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <Feature
                title="Robust Documentation Practices"
                description="We stress the significance of comprehensive documentation throughout every project phase. This transparency improves communication, minimizes confusion, and ensures effortless stakeholder collaboration."
                />
                <Feature
                title="Continuous Improvement Culture"
                description="Our dedication to continual improvement fosters excellence. We consistently evaluate our tech stack, procedures, and outcomes, allowing us to improve our SQL programming services and meet your evolving requirements efficiently."
                />
                <Feature
                title="Streamlined Deployment Processes"
                description="Our deployment procedures are meticulously crafted to maximize effectiveness. This approach minimizes downtime and guarantees rapid solutions implementation, optimizing business continuity."
                />
                <Feature
                title="Rapid Time to Value"
                description="We prioritize delivering prompt outcomes. Our agile methodologies allow rapid value recognition, ensuring your investment yields immediate benefits and matches your company objectives."
                />
            </div>

            <p className="text-center mt-12 text-gray-400 text-lg">
                Have a question? <a href="#" className="text-[#00758f] font-semibold hover:underline">Speak to an expert</a>
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                Expert SQL Development Services for Seamless Solutions!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {developmentServices.map((service, index) => (
                    <div key={index} className="bg-[#0D1A2B] p-8 rounded-lg border border-gray-800 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={service.image} alt={service.title} className="h-24 mb-6 self-start" />
                        <h3 className="text-xl font-semibold text-[#00758f] mb-4">{service.title}</h3>
                        <p className="text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Customized SQL Solutions Designed for Your Growth!</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Seeking a proficient SQL Database Web Development Company? Our experienced SQL developers combine extensive technical expertise with creative problem-solving to provide tailored SQL development services that improve performance and scalability. Obtain unparalleled assistance and knowledge that empower your business, accessible round the clock.
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
                                <span className="text-gray-400">US | SQL | DATABASE MANAGEMENT</span>
                            </div>
                            <a href="#" className="flex items-center text-[#00758f] font-semibold hover:underline">
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
                <h2 className="text-4xl font-bold mt-2">Why is <span className="text-blue-600">SQL</span> the Go-To Choice for Building Scalable Applications?</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    SQL's simple architecture, adaptability, and large library ecosystem make it the perfect language for scalable projects. Its strong frameworks and simple syntax enable rapid development, which qualifies for both startups and large enterprises aiming for efficient and maintainable solutions.
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
                    Technology Stack We Use For SQL Development
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
                        At Alpixn Technologies, we offer three flexible SQL engagement models to suit your project needs: Dedicated Team for full-time, integrated support; Staff Augmentation to boost your current team with our experts; and Project-Based for tailored goal-focused solutions. We deliver the perfect mix of flexibility and expertise to drive your success.
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

export default SQLPage;