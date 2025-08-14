import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

// Import all images (keeping the same image imports as the Python page)
import pythonLogo from '../Assets/NET_logo.png';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import pythonExpert from '../Assets/net2.webp';
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
        question: 'What type of application can be developed with .NET?',
        answer: 'You can develop a range of applications using .NET, including web applications, desktop apps, mobile applications, games, IoT solutions, EHR systems, and multimedia applications. As your trusted .NET development company, we can turn your ideas into real-life solutions.'
    },
    {
        question: 'What is the cost of developing a .NET application?',
        answer: 'The cost depends on project complexity, required elements, design requirements, and the development team\'s location. We offer transparent pricing structures with fixed-price contracts or time-and-materials models to fit your budget.'
    },
    {
        question: 'Why is the .NET framework preferred for software development?',
        answer: 'The .NET framework is favored for its robust security, extensive libraries, cross-platform capabilities, and efficient application development. We use these strengths to deliver tailor-made, efficient solutions.'
    },
    {
        question: 'Can I use .NET to develop an eCommerce application?',
        answer: 'Yes! .NET is an excellent choice for eCommerce apps. It supports secure transactions and easy integrations. Our custom ASP.NET services help create attractive, user-friendly online stores that boost revenue.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "Alpxin Technologies' Dedicated Team model serves as a seamless extension of your organization. We select highly vetted .NET software developers dedicated totally to your project, ensuring perfect alignment with your objectives and best-in-class results throughout the development process.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "Alpxin Technologies' Team Augmentation model enhances your existing team by integrating skilled ASP.NET and web development experts. This approach allows for seamless collaboration, elevating your project's capabilities without disturbing your workflow.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "Got a project with clear goals and timelines? Our Project-Based model uses a structured approach to manage risks and allocate resources effectively, ensuring timely delivery within budget while meeting all your specific goals.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'Signal', logo: jestLogo },
    { name: 'Xamarin', logo: mongooseLogo },
    { name: 'Polly', logo: nestJsLogo },
    { name: 'N-Unit', logo: sequelizeLogo },
    { name: 'MS Test', logo: socketIoLogo },
    { name: 'Identity Server', logo: typescriptLogo },
    { name: 'Dapper', logo: webpackLogo },
    { name: 'Blazor', logo: eslintLogo },
    { name: 'Net Core', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'Cross-Platform Compatibility', description: '.NET lets developers create applications that run seamlessly on macOS, Windows, and Linux, providing unmatched flexibility and reach across different platforms.' },
    { title: 'Rich Library Ecosystem', description: "With extensive libraries and frameworks, .NET simplifies development. Developers can use pre-built components to race up their projects and enhance functionality." },
    { title: 'Robust Security Features', description: 'Built with security in mind, .NET offers tools like code access security and encryption, helping developers build applications that protect user data effectively.' },
    { title: 'Dependency Injection', description: 'Dependency injection in .NET promotes cleaner code and easier testing. It helps manage dependencies better, making applications more maintainable and scalable.' },
    { title: 'Asynchronous Programming System', description: '.NET\'s async programming model lets developers build responsive applications by managing I/O operations efficiently without blocking the UI, leading to a better user experience.' },
    { title: 'Integrated Development Environment (IDE)', description: 'Visual Studio, NET\'s IDE, enhances productivity with features like debugging, code suggestions, and integrated version control- enhancing productivity and simplifying development.' },
    { title: 'Microservices Architecture Support', description: '.NET supports microservices architecture, allowing developers to build scalable, distributed applications. This approach enables independent development and deployment of services.' },
    { title: 'Entity Framework for Data Access', description: 'Entity Framework simplifies database interactions in .NET applications. It abstracts database operations, allowing skilled backend developers to focus on business logic not SQL queries.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: '.NET Web Development',
        description: 'As a top .NET development company, we build responsive web applications with seamless navigation and quick response times. Our experts ensure your application stands out by maximizing user engagement and performance.'
    },
    {
        image: serviceImg2,
        title: '.NET Mobile Development',
        description: 'Our .NET development agency develops secure, high-quality mobile applications that offer a consistent user experience on all platforms. We ensure your application works flawlessly on iOS and Android, enhancing user engagement.'
    },
    {
        image: serviceImg3,
        title: 'Custom .NET Development',
        description: 'Collaborate with our .NET software development company for custom applications suited to your business objectives. We provide effective, scalable solutions that meet your needs, enhancing productivity and expansion.'
    },
    {
        image: serviceImg4,
        title: '.NET Enterprise Solutions',
        description: 'Our .NET application development services offer scalable, reliable solutions developed to expand your business with ERP Development. We build applications that handle increasing demands while ensuring system reliability and efficiency.'
    },
    {
        image: serviceImg5,
        title: '.NET CMS Solutions',
        description: 'Our .NET CMS solutions help businesses manage content easily, offering customizable platforms that enhance user experience. With intuitive interfaces and robust features, we ensure content is engaging and accessible across all devices.'
    },
    {
        image: serviceImg6,
        title: '.NET eCommerce Solutions',
        description: 'We provide comprehensive .NET eCommerce solutions to boost sales and simplify online transactions. Our platforms offer secure payment processing, intuitive product management, and a seamless shopping experience to maximize user satisfaction and revenue.'
    },
    {
        image: serviceImg7,
        title: '.NET Integration & Development',
        description: 'Our .NET web development company excels in API integration and development, ensuring seamless interactions between your application and external systems. By optimizing data exchange, we improve the overall performance & functionalities.'
    },
    {
        image: serviceImg8,
        title: '.NET Migration & Upgrades',
        description: 'Rely on our .NET development firm for seamless migrations and updates. We mitigate security performance complications by upgrading your application to the latest .NET versions- deploying modern features and improvements.'
    },
    {
        image: serviceImg9,
        title: 'Maintenance and Support',
        description: 'Our dedicated maintenance and support services keep your .NET applications reliable and up-to-date. We offer proactive monitoring, troubleshooting, and performance optimization, allowing you to focus on your core business while we handle IT needs.'
    },
];

// Service Card Component
const ServiceCard = ({ image, title, description }) => (
  <div className="text-center p-6 bg-[#16213e] rounded-lg border border-purple-700 hover:border-purple-500 transition-all duration-300">
    <img src={image} alt={title} className="w-16 h-16 mx-auto mb-4" />
    <h3 className="text-lg font-semibold text-purple-300 mb-3">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

// Feature Component
const Feature = ({ title, description }) => (
  <div className="p-6">
    <h3 className="text-xl font-semibold text-purple-300 mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

// Feature Card Component
const FeatureCard = ({ text }) => (
  <div className="bg-[#16213e] p-4 rounded-lg border border-purple-700">
    <div className="flex items-start">
      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
      <p className="text-gray-300 text-sm">{text}</p>
    </div>
  </div>
);

// Proficiency Card Component
const ProficiencyCard = ({ title, description }) => (
  <div className="bg-[#16213e] p-6 rounded-lg border border-purple-700 hover:border-purple-500 transition-all duration-300">
    <h3 className="text-lg font-semibold text-purple-300 mb-3">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

// Tech Stack Item Component
const TechStackItem = ({ name, logo }) => (
  <div className="flex flex-col items-center">
    <img src={logo} alt={name} className="w-16 h-16 mb-3 bg-white rounded-lg p-2" />
    <span className="text-white font-medium">{name}</span>
  </div>
);

// Stat Item Component
const StatItem = ({ value, label }) => (
  <div className="text-center">
    <div className="text-4xl font-bold text-purple-400">{value}</div>
    <div className="text-gray-400 mt-2">{label}</div>
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
  <div className="bg-[#16213e] p-8 rounded-lg border border-purple-700 hover:border-purple-500 transition-all duration-300">
    <h3 className="text-xl font-semibold text-purple-300 mb-4">{title}</h3>
    <p className="text-gray-400 mb-6">{description}</p>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="flex items-start">
          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
          <span className="text-gray-300 text-sm">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-purple-700 rounded-lg mb-2">
      <button
        className="w-full text-left p-4 hover:bg-[#16213e] transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-purple-300">{question}</h3>
          <svg
            className={`w-5 h-5 text-purple-400 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="px-4 pb-4">
          <p className="text-gray-400">{answer}</p>
        </div>
      )}
    </div>
  );
};

const DotNetPage = () => {
  return (
    <div className="bg-[#0a051a] text-white overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">
                Trusted <span className="text-purple-400">.NET</span><br />
                Development Company
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Delivering Unmatched Quality and Performance through .NET Development
              </p>
              <p className="mt-4 text-lg text-gray-400">
                Bring your ideas to life with our premier .NET development company. Our skilled .NET developers create robust and highly intuitive applications, ensuring optimal performance and seamless integration- setting a solid foundation for success.
              </p>
              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <button className="bg-purple-500 text-white font-bold py-3 px-6 rounded-md hover:bg-purple-600 transition duration-300">
                  Get Started
                </button>
                <button className="border border-purple-500 text-purple-500 font-bold py-3 px-6 rounded-md hover:bg-purple-500 hover:text-white transition duration-300">
                  Book a call with our expert
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img src={pythonLogo} alt=".NET" className="w-98 h-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              Trusted by Tech Leaders for Premium .NET Solutions
            </h2>
            <div className="mt-8 flex justify-center items-center flex-wrap gap-8">
              <img src={visaLogo} alt="Microsoft" className="h-12" />
              <img src={infosysLogo} alt="Tencent" className="h-12" />
              <img src={netflixLogo} alt="Accenture" className="h-16" />
              <img src={moglixLogo} alt="Stack Overflow" className="h-16" />
              <img src={relianceLogo} alt="Bloomberg" className="h-16" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                Challenges We'll Assist You Resolve with Our .NET Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard image={seamlessMicroservices} title="Versioning and Upgrades" description="Managing versioning and upgrades is complex. Our .NET specialists streamline this process with expert assessments, seamless updates, and thorough testing, ensuring current and high-performing applications." />
                <ServiceCard image={singleThreaded} title="User Experience (UX) Issues" description="User experience is key to your success. We design easy-to-use interfaces and seamless interactions, focusing on accessibility & mobile responsiveness to boost satisfaction and engagement." />
                <ServiceCard image={codeQuality} title="Multi-Platform Compatibility" description="Compatibility is indispensable in the digital world. We create responsive design, cross-platform frameworks, and modular architecture that perform well across all platforms, maximizing your reach." />
                <ServiceCard image={memoryLeak} title="Technical Debt Management" description="Our experts manage technical debt by focusing on refactoring, encouraging cross-departmental collaboration, using agile practices, and refining your codebase for better performance and long-term sustainability." />
            </div>
        </div>

        <div className="bg-purple-600 py-6 my-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0">Transform Your Business with Our Bespoke .NET Development</h2>
                <button className="bg-white text-purple-600 font-bold py-2 px-4 rounded-md flex items-center hover:bg-gray-200 transition duration-300 shrink-0">
                Connect With Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                </button>
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-8">
                Highlights of Our Comprehensive .NET Solutions
            </h2>
            <img src={pythonExpert} alt="Expert .NET Development" className="w-96 h-auto rounded-lg shadow-lg mb-12 mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <Feature
                title="Skilled Resource Acquisition"
                description="Use our .NET development company's extensive network to get top professionals whose skills align with your project needs, ensuring expertise that drives your project's success."
                />
                <Feature
                title="Robust Security Measures"
                description="Our stringent security protocols protect your applications against threats. We follow best practices to safeguard your data and build user trust throughout our .NET software development services."
                />
                <Feature
                title="Agile Development Methodologies"
                description="Experience rapid adaptation to project changes with our agile methodology. We foster teamwork & flexibility, guaranteeing the timely delivery of premium solutions that match your company's objectives."
                />
                <Feature
                title="Thorough Testing & Quality Assurance"
                description="Our extensive testing protocols ensure the reliability and performance of your applications. Trust our .NET application development services to meet your exact specifications."
                />
            </div>

            <p className="text-center mt-12 text-gray-400 text-lg">
                Have a question? <a href="#" className="text-purple-400 font-semibold hover:underline">Speak to an expert</a>
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                Accelerate Growth with Result-Driven .NET Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {developmentServices.map((service, index) => (
                    <div key={index} className="bg-[#16213e] p-8 rounded-lg border border-purple-700 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={service.image} alt={service.title} className="h-24 mb-6 self-start" />
                        <h3 className="text-xl font-semibold text-purple-400 mb-4">{service.title}</h3>
                        <p className="text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Our .NET Developers' Unmatched Expertise</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    From Alpxin Technologies, hire expert .NET developers who excel in creating innovative web solutions. Our experts implement avant technologies to facilitate forward-thinking projects. As a premier .NET development company, we pride ourselves on delivering custom applications that consistently exceed client expectations, establishing a benchmark for technological excellence.
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
                            Alpxin Technologies partnered with Patra Corporation to develop a secure cloud-based certificate vault, enabling instant access to financial documents, streamlining processes, enhancing the customer experience, and reducing costs. This results in a successful partnership with repeat business.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-gray-600 pt-4">
                            <div className="flex items-center gap-4">
                                <img src={usFlag} alt="US Flag" className="w-8 h-8" />
                                <span className="text-gray-400">US | .NET | FACILITY MANAGEMENT</span>
                            </div>
                            <a href="#" className="flex items-center text-purple-400 font-semibold hover:underline">
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
                <h2 className="text-4xl font-bold mt-2">Why is <span className="text-green-400">.NET</span> the Go-To Choice for Building Scalable Applications?</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    .NET's simple architecture, adaptability, and large library ecosystem make it the perfect language for scalable projects. Its strong frameworks and simple syntax enable rapid development, which qualifies for both startups and large enterprises aiming for efficient and maintainable solutions.
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
                    Technology Stack We Use For .NET Development
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
                        At Alpixn Technologies, we offer three flexible .NET engagement models to suit your project needs: Dedicated Team for full-time, integrated support; Staff Augmentation to boost your current team with our experts; and Project-Based for tailored goal-focused solutions. We deliver the perfect mix of flexibility and expertise to drive your success.
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
export default DotNetPage;