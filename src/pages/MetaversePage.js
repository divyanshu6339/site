import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Insights from '../components/Insights';

// Using the same images as provided in the original Python component
import pythonLogo from '../Assets/metaverse1.png';
import visaLogo from '../Assets/8.2.png';
import infosysLogo from '../Assets/8.3.png';
import netflixLogo from '../Assets/8.4.png';
import moglixLogo from '../Assets/8.5.png';
import relianceLogo from '../Assets/8.6.png';
import seamlessMicroservices from '../Assets/8.7.png';
import singleThreaded from '../Assets/8.8.png';
import codeQuality from '../Assets/8.9.png';
import memoryLeak from '../Assets/8.9.png';
import pythonExpert from '../Assets/metaverse-2.webp';
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
        question: 'What are the advantages of hiring remote Metaverse developers?',
        answer: 'Recruiting remote Metaverse developers gives you broader access to a global talent pool with specialized skills in virtual environments. This strategy minimizes overhead, expedites a project schedule, and ensures innovative, high-quality Metaverse solutions tailored to your needs.'
    },
    {
        question: 'What is the cost structure for outsourcing Metaverse development services?',
        answer: 'Our cost structure for Metaverse development services depends on project complexity, required expertise, and engagement model. We offer transparent pricing with flexible options to align with your budget and project goals, maximizing your return on investment.'
    },
    {
        question: 'Can I make changes to the project scope after development begins?',
        answer: 'Yes, we understand project needs can evolve. We leverage an agile process in Metaverse app development services, allowing us to easily and rapidly accommodate changes without affecting quality or time, ensuring your vision is intact.'
    },
    {
        question: 'What is the initial consultation process for Metaverse application development services?',
        answer: 'The first step in our consultation process is to review your project objectives and specifications in-depth. We would discuss your vision and potential areas of concern, along with a strategic pathway to ensure that our Metaverse development solutions fit perfectly within the frame of reference you seek.'
    }
];

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: "Our Dedicated Team model embeds skilled Metaverse developers directly into your project, fostering close collaboration and agile responsiveness. This setup ensures tailored solutions, continuous innovation, and a streamlined path to business growth.",
        points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
    },
    {
        title: 'Team Augmentation',
        description: "With our Team Augmentation model, seamlessly expand your in-house capabilities by hiring Metaverse developers. This flexible approach enhances your team's skills, improves project efficiency, and keeps you in complete control of your software project.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "For projects with clear timelines and defined goals, our Project-Based model delivers focused Metaverse development solutions. We handle every milestone, ensuring efficient delivery, minimized risk, and results aligned with your strategic vision.",
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const techStack = [
    { name: 'AI & Machine Learning', logo: jestLogo },
    { name: 'Augmented Reality', logo: mongooseLogo },
    { name: 'Blockchain Technology', logo: nestJsLogo },
    { name: 'Cloud Computing', logo: sequelizeLogo },
    { name: 'Edge Computing', logo: socketIoLogo },
    { name: 'Spatial Computing', logo: typescriptLogo },
    { name: 'Virtual Reality VR', logo: webpackLogo },
    { name: 'Web3', logo: eslintLogo },
    { name: 'Unity 3D', logo: jqueryLogo },
];

const proficiencyFeatures = [
    { title: 'Advanced Avatar Customization', description: 'Users can design personalized avatars that are customizable in appearance and behavior, providing a unique identity that enhances their sense of presence.' },
    { title: 'Persistent Virtual Worlds', description: "Unlike traditional applications, Metaverse environments are persistent, evolving continuously even when users are offline, creating an always-on presence." },
    { title: 'Decentralized Control & Ownership', description: 'Decentralized technologies allow users and businesses to own and control virtual assets, ensuring transparency, security, and trust in virtual transactions.' },
    { title: 'Spatial Audio and 3D Sound', description: 'Advanced spatial audio technology creates realistic soundscapes, enhancing immersion by making interactions feel more natural and lifelike.' },
    { title: 'Haptic Feedback Integration', description: 'Haptic technology simulates tactile sensations in the Metaverse, enhancing immersion by providing physical feedback during virtual interactions.' },
    { title: 'AI-Driven NPCs and Chatbots', description: 'Advanced AI powers non-playable characters (NPCs) and virtual assistants, delivering personalized interactions that improve user engagement.' },
    { title: 'Immersive Virtual Events', description: 'The Metaverse facilitates large-scale virtual events, conferences, trade shows, and product launches, enabling global audiences to participate without barriers.' },
    { title: 'Gamification and Reward Systems', description: 'Built-in gamification features like points, badges, and virtual rewards incentivize engagement and create enjoyable experiences that keep users returning.' },
];

const developmentServices = [
    {
        image: serviceImg1,
        title: 'Metaverse E-Commerce Integration',
        description: 'Redefine online shopping with Metaverse e-commerce integration. We embed interactive, immersive purchasing experiences that boost conversions and deepen customer loyalty.'
    },
    {
        image: serviceImg2,
        title: 'Metaverse Immersive Experience Design',
        description: 'With expertise in Metaverse app development services, we craft sensory-rich, interactive worlds that resonate with users and differentiate your brand in the competitive Metaverse landscape.'
    },
    {
        image: serviceImg3,
        title: 'Custom Metaverse Environment Design',
        description: 'Our Metaverse application development services create tailored virtual environments that embody your brand, encouraging meaningful interactions and ensuring your presence is memorable.'
    },
    {
        image: serviceImg4,
        title: 'Metaverse Avatar Development',
        description: 'Our Metaverse software development services deliver lifelike avatars that enhance user expression, boosting engagement and fostering authentic connections within your virtual ecosystem.'
    },
    {
        image: serviceImg5,
        title: 'Metaverse Virtual Reality Development',
        description: 'We create immersive VR spaces tailored to captivate, connect, and inspire through advanced Metaverse development services, helping brands foster loyalty and engagement in dynamic virtual environments.'
    },
    {
        image: serviceImg6,
        title: 'Metaverse Platform Integration Services',
        description: 'Our seamless Metaverse platform integration services enable cross-platform connectivity, ensuring smooth functionality and optimized performance across interconnected virtual ecosystems.'
    },
    {
        image: serviceImg7,
        title: 'Custom Simulation Development',
        description: 'Our Metaverse application development expertise creates highly engaging and interactive simulations for training and education, offering impactful hands-on experiences within rich, immersive environments.'
    },
    {
        image: serviceImg8,
        title: 'Metaverse User Interaction Design',
        description: 'Our Metaverse consulting services focus on intuitive, user-friendly virtual designs. We optimize every interaction, ensuring seamless, enjoyable journeys in your custom immersive Metaverse environment.'
    },
    {
        image: serviceImg9,
        title: 'Metaverse Game Development',
        description: 'With our comprehensive Metaverse game development services, we create interactive, story-driven games that captivate users, deepen engagement, and reinforce lasting brand connections.'
    },
];

// Service Card Component
const ServiceCard = ({ image, title, description }) => (
    <div className="bg-[#0D1A2B] p-6 rounded-lg border border-gray-800 text-center">
        <img src={image} alt={title} className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-blue-400 mb-4">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

// Feature Component
const Feature = ({ title, description }) => (
    <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-400 mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

// Feature Card Component
const FeatureCard = ({ text }) => (
    <div className="bg-[#1a1a1e] p-4 rounded-lg">
        <p className="text-sm text-gray-300">{text}</p>
    </div>
);

// Proficiency Card Component
const ProficiencyCard = ({ title, description }) => (
    <div className="bg-[#0D1A2B] p-6 rounded-lg border border-gray-800">
        <h3 className="text-lg font-semibold text-blue-400 mb-3">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

// Tech Stack Item Component
const TechStackItem = ({ name, logo }) => (
    <div className="flex flex-col items-center text-center">
        <div className="bg-white/10 p-4 rounded-lg mb-3">
            <img src={logo} alt={name} className="w-12 h-12" />
        </div>
        <p className="text-white text-sm font-medium">{name}</p>
    </div>
);

// Stat Item Component
const StatItem = ({ value, label }) => (
    <div className="text-center">
        <p className="text-4xl font-bold text-blue-400">{value}</p>
        <p className="text-gray-400 mt-2">{label}</p>
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
        <h3 className="text-xl font-semibold text-blue-400 mb-4">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <ul className="space-y-2">
            {points.map((point, index) => (
                <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
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
        <div className="border border-gray-700 rounded-lg">
            <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-[#0D1A2B] transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold text-white">{question}</span>
                <svg
                    className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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

const MetaversePage = () => {
  return (
    <div className="bg-[#00070E] text-white overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold">
                Premier <span className="text-blue-400">Metaverse</span><br />
                Development Company
              </h1>
              <p className="mt-4 text-xl text-gray-400">
                Innovate Beyond Reality with Expert Metaverse Solutions
              </p>
              <p className="mt-4 text-lg text-gray-400">
                At Alpixn Technologies, we don't just develop virtual worlds—we bring immersive realities to life. Our expert Metaverse developers design custom solutions that enhance user interaction, transform brands, and drive virtual collaboration and innovation.
              </p>
              <div className="mt-8 flex justify-center md:justify-start space-x-4">
                <button className="bg-blue-500 text-black font-bold py-3 px-6 rounded-md hover:bg-blue-600 transition duration-300">
                  Get Started
                </button>
                <button className="border border-blue-500 text-blue-500 font-bold py-3 px-6 rounded-md hover:bg-blue-500 hover:text-black transition duration-300">
                  Book a call with our expert
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img src={pythonLogo} alt="Metaverse" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800">
              Shaping Digital Frontiers—Your Business, Metaverse-Optimized!
            </h2>
            <div className="mt-8 flex justify-center items-center flex-wrap gap-8">
              <img src={visaLogo} alt="Facebook" className="h-12" />
              <img src={infosysLogo} alt="Microsoft" className="h-12" />
              <img src={netflixLogo} alt="Nvidia" className="h-16" />
              <img src={moglixLogo} alt="Samsung" className="h-16" />
              <img src={relianceLogo} alt="Nike" className="h-16" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                Challenges We'll Assist You Resolve with Our Metaverse Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard image={seamlessMicroservices} title="Virtual Economy and Monetization Models" description="Build sustainable digital economies with in-game marketplaces and monetization strategies that enhance user engagement and profitability, aligned with your business vision." />
                <ServiceCard image={singleThreaded} title="Asset Creation and Management" description="We create optimized 3D assets, textures, and animations, delivering high-quality visuals without compromising performance across various Metaverse platforms." />
                <ServiceCard image={codeQuality} title="Interoperability Between Virtual Worlds" description="Our team ensures seamless asset and experience transfers across multiple virtual ecosystems, supporting universal protocols for a connected and interoperable Metaverse." />
                <ServiceCard image={memoryLeak} title="Artificial Intelligence (AI) Integration" description="Our AI-driven avatars and NPCs bring dynamic, lifelike interactions to your virtual spaces, enriching user experiences with responsive, real-time interactions." />
            </div>
        </div>

        <div className="bg-blue-500 py-6 my-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4 md:mb-0">Transform Your Business with Our Metaverse Development Services</h2>
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
                Achieve More with Our Metaverse Development Services
            </h2>
            <img src={pythonExpert} alt="Expert Metaverse Development" className="w-96 h-auto rounded-lg shadow-lg mb-12 mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <Feature
                title="Customizable Avatars and NPCs"
                description="Create fully customizable, AI-powered avatars and NPCs that deliver personalized, dynamic interactions, creating rich user experiences that set your Metaverse apart."
                />
                <Feature
                title="Smart Contract Development"
                description="We implement secure, transparent smart contracts that automate transactions, facilitating digital asset exchanges and business models within your custom Metaverse."
                />
                <Feature
                title="Real-Time Collaboration Spaces"
                description="Our team designs interactive virtual environments where teams can work, meet, and engage in real-time, boosting productivity and fostering creativity."
                />
                <Feature
                title="Customizable Virtual Economies"
                description="Tailor virtual economies to reflect your brand, from custom currencies to asset trading systems, enhancing engagement and achieving your business objectives."
                />
            </div>

            <p className="text-center mt-12 text-gray-400 text-lg">
                Have a question? <a href="#" className="text-blue-400 font-semibold hover:underline">Speak to an expert</a>
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
                Shape the Future of Interaction with Personalized Metaverse Solutions
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
                <h2 className="text-4xl font-bold">Venture Beyond the Screen: Craft, Scale, Experience</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Our expert Metaverse developers bring industry-leading skills to craft scalable, immersive experiences that engage users, foster brand loyalty, and unlock new avenues for business growth.
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
                <h3 className="text-lg font-semibold text-gray-400 mb-6">Our Metaverse Development Expertise Spans Across Many Years</h3>
                <h2 className="text-4xl font-bold mt-2">Why is <span className="text-green-400">Metaverse</span> the Go-To Choice for Building Scalable Applications?</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Metaverse's simple architecture, adaptability, and large library ecosystem make it the perfect language for scalable projects. Its strong frameworks and simple syntax enable rapid development, which qualifies for both startups and large enterprises aiming for efficient and maintainable solutions.
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
                    Technology Stack We Use For Metaverse 
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
                        At Alpixn Technologies, we offer three flexible Metaverse engagement models to suit your project needs: Dedicated Team for full-time, integrated support; Staff Augmentation to boost your current team with our experts; and Project-Based for tailored goal-focused solutions. We deliver the perfect mix of flexibility and expertise to drive your success.
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

export default MetaversePage;