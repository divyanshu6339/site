import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import Insights from '../components/Insights';

// Data arrays - moved to top of file
const caseStudies = [
  { 
    id: 'certvault', 
    logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/FMIntegrated-logo.svg', 
    image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/FM-Integrated-768x768.webp', 
    title: 'State-Of-The-Art Cloud-Based Certificate Vault. Crafting Secure, Efficient, and User-Centered Digital Solutions', 
    description: 'Alpixn Technologies partnered with Patra Corporation to develop a secure cloud-based certificate vault, enabling instant access to financial documents, streamlining processes, enhancing the customer experience, and reducing costs.', 
    points: ['Comprehensive analysis to assess web application functionalities and architecture', 'Blockchain-based solutions ensure the integrity and verification of uploaded certificates', 'Highly secure platform enabling seamless certificate upload and access, enhancing UX', 'Robust data security measures implemented for a secure and future-proof solution'], 
    tags: ['US', 'REACT', 'FACILITY MANAGEMENT'] 
  },
  { 
    id: 'jbilling', 
    logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/patra-corp.svg', 
    image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/PatraCorp-768x768.webp', 
    title: 'Advanced Billing Management System for Enhanced Financial Operations', 
    description: 'Comprehensive billing solution that streamlines financial processes and enhances operational efficiency.', 
    points: ['API integration module with configuration capabilities.', 'The integration module has robust authorization systems.', 'XML transports diverse data formats efficiently.', 'Underwriting questions for comprehensive risk assessment.'], 
    tags: ['US', 'NODE.JS', 'SAILS', 'INSURTECH'] 
  },
  { 
    id: 'patra', 
    logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/patronum.svg', 
    image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/Patronum-768x768.webp', 
    title: 'Data-Driven Insurance Solutions for Enhanced Risk Assessment and Management', 
    description: 'Advanced analytics platform that empowers insurance companies with data-driven insights for better decision making.', 
    points: ['Code optimized for seamless handling of complex operations.', 'Real-time updates for unstructured data management.', 'Integrated API enhancing product functionality.', 'Automated provisioning workflows.'], 
    tags: ['US', 'PYTHON', 'DATA ANALYTICS', 'IT'] 
  },
  { 
    id: 'spacehubb', 
    logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/heffernan.svg', 
    image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/Heffernan-768x768.webp', 
    title: 'Real Estate Analytics Platform for Market Intelligence and Investment Decisions', 
    description: 'Comprehensive real estate data analytics solution providing market insights and investment guidance.', 
    points: ['With planning & research, evaluated app requirements thoroughly.', 'Top-notch user experience drove the design process.', 'Developed a responsive UI with full accessibility features.', 'App creates reports in CSV/PDF formats efficiently.'], 
    tags: ['US', 'PYTHON', 'PROPTECH'] 
  },
  { 
    id: 'ayla', 
    logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/149.svg', 
    image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/Builder-Digital-768x768.webp', 
    title: 'AI-Powered Analytics Platform for Business Intelligence and Automation', 
    description: 'Advanced AI and machine learning platform that delivers actionable business insights through automated analytics.', 
    points: ['Improved UI with enhanced design patterns.', 'Identified key features for mobile and web applications.', '24/7 maintenance & support for uninterrupted service.', 'We addressed bugs, refining existing features continuously.'], 
    tags: ['US', 'AI/ML', 'BUSINESS INTELLIGENCE'] 
  }
];

const benefitsData = [
  { num: '01', title: 'Data Transformation', description: 'Our data science services empower businesses to with data transformation, ensuring it is refined into valuable insights.' },
  { num: '02', title: 'Data Visualization', description: 'Through advanced data visualization, we transform complex data sets into clear, interactive visuals. This enables companies to gain deeper insights.' },
  { num: '03', title: 'Supply Chain Analytics', description: 'Our data analytics experts facilitate the optimization of your entire supply chain, enhancing efficiency, reducing costs, and ensuring a seamless flow of goods.' },
  { num: '04', title: 'Procurement Analytics', description: 'Our dedicated team of data analysis experts excels in managing procurement processes, enabling businesses to realize cost savings.' },
  { num: '05', title: 'Pricing Optimization', description: 'Our services enable dynamic pricing optimization, helping businesses set the right prices for their products and services.' },
  { num: '06', title: 'BI Implementation', description: 'Our business intelligence (BI) implementation services deliver customized solutions that help aid in data-driven decision-making.' },
  { num: '07', title: 'Workforce Automation', description: 'Our data science services are tailored to optimize HR processes, resulting in significant time and resource savings.' },
  { num: '08', title: 'CFO Analytics', description: 'CFO Analytics, an integral part of our data science services, empowers financial decision-makers with essential data and insights.' },
  { num: '09', title: 'Cost Management', description: 'Our data analytics services identify cost-saving opportunities, manage expenses, and enhance profitability.' },
];

const whyChooseUsFeatures = [
  { title: 'Data-driven Strategy', description: 'Our data analytics consultants help you craft a data-driven strategy that aligns with your business goals and objectives, ensuring that you make informed decisions that drive growth and innovation.' },
  { title: 'Advanced Analytics', description: 'We use advanced analytics techniques such as machine learning, AI, and statistical analysis to extract actionable insights from your data, enabling you to identify trends, patterns, and opportunities for growth.' },
  { title: 'Data Visualization', description: 'Our data visualization experts create intuitive and interactive dashboards and reports that make it easy to understand and interpret complex data, empowering you to make data-driven decisions with confidence.' },
  { title: 'Data Management', description: 'We help you manage your data effectively, ensuring that it is accurate, complete, and secure. Our data management solutions enable you to unlock the full potential of your data and drive business growth.' },
  { title: 'Big Data Solutions', description: 'Our big data solutions help you process and analyze large and complex datasets, enabling you to identify trends, patterns, and opportunities for growth that would otherwise be hidden in your data.' },
  { title: 'Data Science', description: 'Our data scientists use advanced analytics techniques to extract actionable insights from your data, enabling you to identify trends, patterns, and opportunities for growth that would otherwise be hidden in your data.' },
];

// Project Success Section Component
const MasterySection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const caseStudies = [
        {
            id: 'certvault',
            logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2023/10/certvault.svg',
            image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/02/CertVault-768x588.webp',
            title: 'State-Of-The-Art Cloud-Based Certificate Vault. Crafting Secure, Efficient, and User-Centered Digital Solutions',
            description: 'Alpixn Technologies partnered with Patra Corporation to develop a secure cloud-based certificate vault, enabling instant access to financial documents, streamlining processes, enhancing the customer experience, and reducing costs.',
            points: [
                'Comprehensive analysis to assess web application functionalities and architecture',
                'Blockchain-based solutions ensure the integrity and verification of uploaded certificates',
                'Highly secure platform enabling seamless certificate upload and access, enhancing UX',
                'Robust data security measures implemented for a secure and future-proof solution'
            ],
            tags: ['US', 'REACT', 'FACILITY MANAGEMENT']
        },
        {
            id: 'jbilling',
            logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2023/10/jBilling.png',
            image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/jBilling-768x653.webp',
            title: 'jBilling Telco Edition. A purpose-built, open-source billing solution designed to meet the unique needs of the telecommunications industry.',
            description: 'Our dedicated team of software developers collaborated with jBilling to develop a secure, web-based billing solution for the telecommunications industry.',
            points: [
                'Real-time analytics and reporting for informed decision-making',
                'Scalable architecture to support growing business needs',
                'Seamless integration with existing systems and third-party applications',
                'Customizable and flexible to meet unique business requirements'
            ],
            tags: ['CANADA', 'JAVA', 'TELECOM']
        },
        {
            id: 'patra',
            logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/patra-corp.svg',
            image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/02/patra-corp-mockup-image-e1712748353230-768x323.webp',
            title: 'Patra’s Certificate Issuance and Policy Management Services. A comprehensive solution for managing insurance certificates and policies.',
            description: 'Our team of experts partnered with Patra to develop a secure, web-based solution for managing insurance certificates and policies, streamlining processes and enhancing the customer experience.',
            points: [
                'Automated certificate issuance and delivery',
                'Centralized policy management and tracking',
                'Real-time analytics and reporting for informed decision-making',
                'Seamless integration with existing systems and third-party applications'
            ],
            tags: ['US', 'NODE.JS', 'INSURTECH']
        },
        {
            id: 'spacehubb',
            logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/spacehubb_logo.webp',
            image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/SpaceHubb-768x653.webp',
            title: 'Space Hubb. A comprehensive platform for managing and booking spaces, designed to meet the unique needs of the real estate industry.',
            description: 'Our team of experts collaborated with Space Hubb to develop a secure, web-based platform for managing and booking spaces, streamlining processes and enhancing the customer experience.',
            points: [
                'Real-time availability and booking of spaces',
                'Seamless integration with existing systems and third-party applications',
                'Customizable and flexible to meet unique business requirements',
                'Scalable architecture to support growing business needs'
            ],
            tags: ['UK', 'PHP', 'REAL ESTATE']
        },
        {
            id: 'ayla',
            logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/aylaLogoDark-svg.webp',
            image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/Ayla-App-768x653.webp',
            title: 'Ayla. A comprehensive platform for managing and booking beauty and wellness services, designed to meet the unique needs of the industry.',
            description: 'Our team of experts collaborated with Ayla to develop a secure, web-based platform for managing and booking beauty and wellness services, streamlining processes and enhancing the customer experience.',
            points: [
                'Real-time availability and booking of services',
                'Seamless integration with existing systems and third-party applications',
                'Customizable and flexible to meet unique business requirements',
                'Scalable architecture to support growing business needs'
            ],
            tags: ['AUSTRALIA', 'FLUTTER', 'WELLNESS']
        }
    ];
    
    const countryFlags = {
        US: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2023/11/usa-flag.png',
        CANADA: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2023/11/canada-flag.png',
        UK: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2023/11/great-britain.png',
        AUSTRALIA: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2023/11/australia.png',
    }

    const [activeTab, setActiveTab] = useState(caseStudies[0].id);
    const activeStudy = caseStudies.find(study => study.id === activeTab);

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Our Dedicated Data Analytics Development Work Mastery</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Our dedicated Software developers offer a range of benefits, with certified professionals skilled in emerging technologies like AI, low code/no code, and IoT. Hire dedicated software developers to integrate core tech strength and 24/7 support, ensuring seamless maintenance from code to production, offering your project success and scalability.
                    </p>
                </div>

                <div className={`bg-gray-900/50 ring-1 ring-white/10 rounded-2xl p-4 md:p-6 transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex justify-center items-center flex-wrap gap-4 border-b border-white/10 pb-6">
                        {caseStudies.map(study => (
                            <button key={study.id} onClick={() => setActiveTab(study.id)} className={`relative transition-transform duration-300 ease-in-out ${activeTab === study.id ? 'scale-110' : 'scale-100 hover:scale-105'}`}>
                                <div className={`bg-white rounded-lg p-4 shadow-md transition-all duration-300 ${activeTab === study.id ? 'shadow-blue-500/40 shadow-lg' : ''}`}>
                                    <img src={study.logo} alt={study.id} className="h-10 object-contain w-28" />
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="mt-8">
                        {activeStudy && (
                             <div key={activeStudy.id} className="flex flex-col md:flex-row gap-8 md:gap-12 items-center animate-fade-in">
                                <div className="w-full md:w-2/5"><img src={activeStudy.image} alt={activeStudy.title} className="rounded-xl shadow-2xl shadow-blue-500/10" /></div>
                                <div className="w-full md:w-3/5">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{activeStudy.title}</h3>
                                    <p className="text-gray-300 mb-6">{activeStudy.description}</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
                                        {activeStudy.points.map((point, i) => ( <li key={i} className="flex items-start gap-3"> <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> <span>{point}</span> </li> ))}
                                    </ul>
                                    <div className="flex flex-wrap items-center gap-4">
                                        <img src={countryFlags[activeStudy.tags[0]]} alt={activeStudy.tags[0]} className="h-6 rounded" />
                                        {activeStudy.tags.slice(1).map(tag => ( <span key={tag} className="text-xs font-semibold text-gray-400 bg-gray-800 px-3 py-1 rounded-full">{tag}</span> ))}
                                        <a href="#" className="ml-auto text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center gap-2"> View Case Study <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </a>
                                    </div>
                                </div>
                             </div>
                        )}
                    </div>
                </div>
            </div>
            <style>{`.animate-fade-in { animation: fadeIn 0.5s ease-in-out; } @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
        </div>
    );
};

const TechStackSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const [activeTab, setActiveTab] = useState('technologies');

    const techData = {
        technologies: [
            { name: 'Pandas', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/Pandas.webp' },
            { name: 'R', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/R.webp' },
            { name: 'Hadoop', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/hadoop.webp' },
            { name: 'Spark', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/Apache-Spark-MLlib.webp' },
            { name: 'Flink', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/Flink.webp' },
            { name: 'Kafka', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/kafka.webp' },
            { name: 'TensorFlow', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/TensorFlow.webp' },
            { name: 'PyTorch', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/PyTorch.webp' },
            { name: 'Azure', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/azure.webp' },
        ],
        frontend: [
            { name: 'React', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/react.webp' },
            { name: 'HTML', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/html.webp' },
            { name: 'CSS', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/css.webp' },
            { name: 'D3.js', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/d3.webp' },
            { name: 'Plotly.js', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/Plotly.webp' },
            { name: 'Bokeh', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/Bokeh.webp' },
            { name: 'Tableau', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/Tableau.webp' },
            { name: 'Power BI', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/power-bi.png' },
        ],
        backend: [
            { name: 'Python', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/python.webp' },
            { name: 'Node.js', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/nodejs.webp' },
            { name: 'Java', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/java.webp' },
            { name: 'Go', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/go.webp' },
            { name: 'PHP', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/php.webp' },
            { name: 'Laravel', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/laravel.webp' },
            { name: '.NET Core', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/net.png' },
            { name: 'Kotlin', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/Kotlin.webp' },
            { name: 'Rust', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/rust.webp' },
            { name: 'Scala', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/Scala.webp' },
        ]
    };

    const tabs = [
        { id: 'technologies', label: 'Technologies' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
    ];
    
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Our Tech Stack</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Our tech stack for Data Analytics encompasses a diverse range of cutting-edge technologies and frameworks. From robust programming languages and databases to cloud platforms and DevOps tools, we leverage the most suitable tech stack to build scalable, secure, and high-performance enterprise solutions.
                    </p>
                </div>
                
                <div className={`bg-gray-900/50 ring-1 ring-white/10 rounded-2xl p-4 md:p-6 transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex justify-center items-center gap-4 border-b border-white/10 pb-4 mb-8">
                        {tabs.map(tab => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-4 py-2 text-lg font-semibold rounded-md transition-colors duration-300 ${activeTab === tab.id ? 'text-blue-400' : 'text-gray-500 hover:text-white'}`}>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    
                    <div key={activeTab} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 animate-fade-in">
                        {techData[activeTab].map((tech, index) => (
                            <div key={tech.name} className={`group flex flex-col items-center justify-center gap-2 p-4 rounded-lg transition-all duration-500 ease-out hover:bg-white/5 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${index * 50}ms` }}>
                                <img src={tech.icon} alt={tech.name} className="h-16 object-contain transition-transform duration-300 group-hover:scale-110" />
                                <span className="text-gray-300 transition-colors duration-300 group-hover:text-white">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Benefits Section Component
const BenefitsSection = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div ref={ref} className="py-24 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            Benefits That Define Our Data Analytics and Consulting Services
          </h2>
          <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            We help businesses unlock the full potential of their data resources, setting the stage for business excellence and innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => (
            <div key={benefit.num} className={`relative p-8 bg-gray-900/50 ring-1 ring-white/10 rounded-2xl transition-all duration-500 ease-out hover:ring-blue-500/50 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="absolute top-8 left-8 text-4xl font-bold text-gray-700">{benefit.num}</div>
              <div className="relative pt-12">
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Why Choose Us Section Component
const WhyChooseUsSection = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div ref={ref} className="py-24 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
          Why Choose Alpixn Technologies for Data Analytics Services?
        </h2>
        <p className={`max-w-3xl mx-auto text-lg text-gray-400 mb-16 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
          We provide certified, highly skilled IT resources who are equipped with the excellence of tailored precision and innovation, allowing you to strengthen your business's technological foundation and keep up with evolving trends.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsFeatures.map((reason, index) => (
            <div key={reason.title} className={`p-8 bg-gray-900/50 ring-1 ring-white/10 rounded-2xl text-left transition-all duration-500 ease-out hover:ring-blue-500/50 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const GuideSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const [activeTab, setActiveTab] = useState('trends');

    const guideContent = {
        trends: {
            title: 'What Trends and Technologies Are Shaping the Field of Data Analytics?',
            content: [
                { text: 'The realm of data analytics is in a perpetual state of transformation, driven by an array of trends and technologies. One noteworthy trend is the integration of big data analytics solutions, which empower businesses to glean valuable insights from extensive datasets, providing a deeper understanding of customer behavior, market dynamics, and operational efficiencies.' },
                { text: 'Additionally, the surge of cloud business intelligence solutions is significantly impacting the data analytics landscape. This trend is primarily fueled by the increasing need for enhanced accessibility and collaboration in today\'s remote work environment. Cloud-based services offer organizations adaptable and scalable platforms for data storage and analysis, culminating in improved data accessibility, streamlined insights sharing, and the facilitation of collaborative teamwork.' },
                { text: 'Another pivotal trend shaping the data analytics arena is the escalating focus on data security. Given the escalating data volumes being processed, data analytics consulting services are placing a heightened emphasis on data protection and privacy. Companies are adopting sophisticated security measures to ensure data integrity and confidentiality, encompassing the implementation of stringent data access controls, encryption techniques, and adherence to data protection regulations.' },
            ]
        },
        significance: {
            title: 'What Is the Significance of Data Analytics for Business?',
            content: [
                { text: 'Data analytics has become a cornerstone of modern business strategy, enabling organizations to make informed decisions based on empirical evidence rather than intuition alone. By leveraging data analytics services, businesses can uncover hidden patterns, identify market opportunities, and optimize operations to achieve sustainable growth.' },
                { text: 'The significance of data analytics extends across all business functions, from marketing and sales to operations and finance. It enables companies to understand customer preferences, predict market trends, optimize supply chains, and enhance overall business performance through data-driven insights.' },
                { text: 'Furthermore, data analytics provides businesses with competitive advantages by enabling them to respond quickly to market changes, identify new revenue streams, and improve customer satisfaction through personalized experiences and targeted offerings.' },
            ]
        },
        challenges: {
            title: 'How Are Industry Challenges Solved with Data Analytics Consulting?',
            content: [
                { text: 'Data analytics consulting addresses various industry challenges by providing specialized expertise and tailored solutions. Our consultants work closely with organizations to identify specific pain points and develop data-driven strategies that address operational inefficiencies, market volatility, and competitive pressures.' },
                { text: 'Through comprehensive data analysis, we help businesses overcome challenges such as customer churn, inventory management, pricing optimization, and risk assessment. Our consulting services provide actionable insights that enable organizations to make strategic decisions with confidence.' },
                { text: 'Additionally, our data analytics consulting helps organizations navigate digital transformation challenges by implementing robust data infrastructure, establishing governance frameworks, and building analytical capabilities that support long-term business objectives.' },
            ]
        },
        ml: {
            title: 'What Are the Benefits of Integrating Machine Learning with Data Analytics Consulting?',
            content: [
                { text: 'Integrating machine learning with data analytics consulting amplifies the value of data by enabling predictive analytics, automated decision-making, and advanced pattern recognition. This integration allows businesses to move beyond descriptive analytics to predictive and prescriptive insights.' },
                { text: 'Machine learning algorithms can process vast amounts of data at scale, identifying complex patterns and relationships that would be impossible to detect through traditional analytical methods. This capability enables businesses to forecast trends, predict customer behavior, and optimize operations proactively.' },
                { text: 'Furthermore, machine learning integration enables real-time analytics and automated responses to changing conditions, allowing businesses to adapt quickly to market dynamics and maintain competitive advantages in rapidly evolving industries.' },
            ]
        },
        hire: {
            title: 'Why Hire Data Scientists and Leverage Data Analytics Services for Your Business?',
            content: [
                { text: 'Hiring data scientists and leveraging data analytics services provides businesses with specialized expertise that is essential for extracting maximum value from data assets. Data scientists bring advanced statistical knowledge, programming skills, and domain expertise that enable sophisticated analysis and modeling.' },
                { text: 'Professional data analytics services offer scalability and flexibility that in-house teams may not be able to provide. External experts can quickly adapt to changing business needs, implement cutting-edge technologies, and deliver results within compressed timelines.' },
                { text: 'Moreover, partnering with data analytics service providers gives businesses access to best practices, industry benchmarks, and proven methodologies that have been refined through experience across multiple projects and industries, ensuring optimal outcomes and return on investment.' },
            ]
        }
    };

    const tabs = [
        { id: 'trends', label: 'Trends and Technologies' },
        { id: 'significance', label: 'Significance for Business' },
        { id: 'challenges', label: 'Industry Challenges' },
        { id: 'ml', label: 'Machine Learning Benefits' },
        { id: 'hire', label: 'Why Hire Data Scientists' },
    ];

    const currentContent = guideContent[activeTab];

    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>An Essential Guide to Data Analytics Services</h2>
                </div>
                <div className={`flex flex-col md:flex-row gap-8 md:gap-12 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-full md:w-1/3">
                        <div className="sticky top-24">
                            {tabs.map(tab => (
                                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full text-left p-4 rounded-lg mb-2 transition-all duration-300 ${activeTab === tab.id ? 'bg-blue-600 text-white font-bold' : 'hover:bg-gray-800'}`}>
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <div key={activeTab} className="animate-fade-in">
                            <h3 className="text-3xl font-bold mb-8">{currentContent.title}</h3>
                            <div className="space-y-6">
                                {currentContent.content.map((item, index) => (
                                    <div key={index}>
                                        <p className="text-gray-400">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 10: FAQ Section
const FaqSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { q: "What are the prerequisites for data analytics consultation?", a: "The prerequisites for data analytics consultation include clear business objectives, access to relevant data sources, stakeholder alignment, and readiness to implement data-driven changes. Our consultants will work with you to assess your current data infrastructure and identify any gaps that need to be addressed." },
        { q: "What steps are included in the data analytics development process?", a: "Our data analytics development process includes requirements gathering, data assessment, solution design, development and implementation, testing and validation, deployment, and ongoing support. Each step is tailored to your specific business needs and objectives." },
        { q: "Why is MLOps important for data analytics?", a: "MLOps is crucial for data analytics as it ensures reliable, scalable, and maintainable machine learning operations. It streamlines the deployment, monitoring, and management of ML models in production environments, enabling consistent performance and continuous improvement of analytics solutions." },
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>FAQ's</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`bg-gray-900/50 ring-1 ring-white/10 rounded-xl transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center text-left p-6">
                                <span className="text-lg font-semibold">{faq.q}</span>
                                <svg className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                                <div className="p-6 pt-0 text-gray-400">
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 12: Engagement Models Section
const EngagementModelsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const models = [
        {
            title: 'Dedicated Team',
            description: 'We place a team of skilled professionals exclusively on your projects, offering expanded capabilities and complete project oversight.',
            points: ['Exclusive Team', 'Ongoing Collaboration', 'Scalability', 'Cost-Effective']
        },
        {
            title: 'Team Augmentation',
            description: 'We offer highly experienced data analytics experts to complement your existing team, providing flexibility, on-demand expertise, and shortened project timelines.',
            points: ['Augmenting Skills', 'On-Demand Expertise', 'Seamless Integration', 'Heightened Productivity']
        },
        {
            title: 'Project-Based',
            description: 'Choose our project-based approach as benefit from a focused strategy, fixed timelines, and budget control, all of which contribute to the success of your project.',
            points: ['Fixed Timelines', 'Budget Control', 'Outcome Oriented', 'Reduced Risk']
        },
    ];

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Engagement Models</h2>
                    <p className={`mt-4 max-w-2xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Explore our flexible engagement models tailored to meet your data analytics needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {models.map((model, index) => (
                        <div key={model.title} className={`p-8 bg-blue-900/20 ring-1 ring-blue-500/20 rounded-2xl transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <h3 className="text-3xl font-bold mb-4 text-center">{model.title}</h3>
                            <p className="text-gray-400 mb-6 text-center h-24">{model.description}</p>
                            <ul className="space-y-3">
                                {model.points.map(point => (
                                    <li key={point} className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="text-gray-300">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Custom hook for intersection observer
const useOnScreen = (options) => {
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    if (!ref) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);
    
    observer.observe(ref);
    
    return () => observer.disconnect();
  }, [ref, options]);

  return [setRef, isVisible];
};

const DataAnalyticsPage = () => {
  const services = [
    {
      title: 'Data Strategy & Consulting',
      description: 'Our expert data analytics consultants excel at meticulously crafting a data-driven roadmap, aligning your strategies with business goals for optimal results and informed strategic direction.',
    },
    {
      title: 'Data Integration & Warehousing',
      description: 'Effortlessly consolidate and store data for real-time insights. Our solutions guarantee unified data sources, enabling well-informed decisions and streamlined data management.',
    },
    {
      title: 'Data Visualization & Modernization',
      description: 'Our data visualization and modernization services focus on simplifying complex information, making it easily digestible and empowering quick, data-driven decisions.',
    },
    {
      title: 'Business Intelligence',
      description: 'Alpixn Technologies provides a comprehensive suite of BI tools, including KPI dashboards and predictive analytics, to ensure that our clients have the insights needed to thrive.',
    },
    {
      title: 'Big Data',
      description: 'Unlock the full potential of big data through our cutting-edge big data analytics services and solutions. We expertly manage, process, and analyze vast datasets to unveil opportunities.',
    },
    {
      title: 'Data Science',
      description: 'Utilize machine learning, AI, and statistical analysis to extract actionable insights. Our data scientists deeply transform your business data into a strategic asset.',
    },
  ];

return (
  <div className="bg-black text-white">
    <Header />
    <main>
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-blue-900 via-black to-black text-white py-20 pl-5 pr-4 sm:pl-10 sm:pr-6 md:pl-16 lg:pl-24 xl:pl-36 2xl:pl-48 flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Data Analytics Services and Solutions</h1>
            <p className="text-lg md:text-xl mb-6">
              At Alpixn Technologies, we understand that every business is unique, and your data needs are as distinctive as your goals. Add certified data experts to your team, such as data analysts, data scientists, BI developers, and data engineers. Boost your project's insights and scale up with our data analytics services and solutions.
            </p>
            <motion.button
              className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a custom quote ➔
            </motion.button>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img src={StaffAugmentationImage} alt="API Integration" className="w-full max-w-md rounded-lg" />
          </motion.div>
        </div>
      </motion.section>

      <TrustedBy backgroundColor="bg-white" />

      {/* Staff Augmentation Services We Offer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Data Analytics Services and Solutions We Offer
          </motion.h2>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We at Alpixn Technologies offer extended data analytics services and provide on-demand skills and insights for the scalability of your project. Following is the list of services we offer under the data analytics process:
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-8 rounded-lg text-left transform transition duration-500 hover:scale-105 hover:bg-gray-700"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect with our Staff Augmentation Experts Now! */}
      <section className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Connect With Our Data Analytics Experts Now!
          </motion.h2>
          <motion.form
            className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input type="email" placeholder="Email id" className="w-full md:w-auto flex-grow bg-white text-black px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white" />
            <select className="w-full md:w-auto bg-white text-black px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white">
              <option>Please choose service</option>
              <option>Staff Augmentation</option>
              <option>IT Outstaffing Consulting</option>
              <option>Dedicated IT Specialists</option>
              <option>Remote Managed Services</option>
              <option>Long & Short-term Team Augmentation</option>
              <option>Vendor Transition</option>
            </select>
            <button type="submit" className="w-full md:w-auto bg-gray-800 text-white font-bold px-6 py-3 rounded-md hover:bg-gray-700 transition duration-300">Let's Talk</button>
          </motion.form>
        </div>
      </section>

      {/* Project Success Section */}
      <MasterySection />

      {/* Expertise Section */}
      <BenefitsSection />

      <ClutchTestimonials />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      <GuideSection />

      <FaqSection />

      <EngagementModelsSection />

      <caseStudies />

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Get Started With Our Data Analytics Services and Solutions?
          </motion.h2>
          <motion.p
            className="text-lg mb-8 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to launch your vision? Our custom software development team is geared up to bring your ideas to life. Let's embark on your unique project journey together, creating tailored solutions for your business needs.
          </motion.p>
          <motion.button
            className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition duration-300 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Get an Estimate of Your Project Today
          </motion.button>
        </div>
      </section>

      <TechStackSection />
      <Insights />
    </main>
    <Footer />
  </div>
);
};

export default DataAnalyticsPage;