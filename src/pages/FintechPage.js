import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- NEW AND UPDATED DATA ARRAYS ---
const fintechServices = [
    { title: 'FinTech Software Consulting', description: 'Explore our unmatched FinTech software consulting services. Our expert consultants provide insights into niche identification, unique value propositions, optimal feature sets, architecture, UX/UI design, toolkit selection, security & compliance, and detailed implementation plans, ensuring the success of your FinTech venture.' },
    { title: 'Custom FinTech Software Development', description: 'Alpixn Technologies is a leading finance software development company providing custom fintech software development according to your business’s unique requirements. Our qualified engineers integrate the latest technological solutions for bespoke software development.' },
    { title: 'Accounting Information Systems', description: 'Our accounting management systems revitalize the financial processes of businesses. We are a fintech software company providing development solutions that streamline accounting processes, ensuring accuracy, compliance, and efficient financial reporting.' },
    { title: 'FinTech Mobile App Development', description: 'Transform your financial services with our FinTech mobile app development. Our expertise in crafting intuitive UI/UX designs and the latest technology integration provides innovative & secure mobile app solutions across multiple platforms—iOS & Android.' },
    { title: 'FinTech Software Modernization', description: 'Embrace FinTech software modernization to stay ahead in the rapidly evolving fintech industry. Our services revamp and upgrade your existing systems, integrating the latest technologies and providing a smooth technological transition for enhanced performance and competitiveness.' },
    { title: 'Trading Software Development', description: 'Alpixn Technologies is a leading finance software development company committed to providing businesses with innovative solutions. Our specialty is fintech custom software development leveraging cutting-edge technologies to enhance market analysis, execution, and automation.' }
];

const scopeOfServices = [
    { number: '01', title: 'Banking App Development', description: 'Explore our banking app development services– our FinTech developers offer user-friendly banking applications. We provide fintech custom software development solutions for web and mobile banking, innovative open banking platforms, API integrations, digital asset management platforms, and online KYC, ensuring seamless operations.' },
    { number: '02', title: 'Digital Wallet Development', description: 'Alpixn Technologies specializes in delivering bespoke payment solutions that address unique requirements. Our services include digital wallet solutions, seamless peer-to-peer (P2P) payments, reliable digital money transfers, and innovative digital payment solutions. We incorporate a customized and innovative approach to enhance overall financial transactions.' },
    { number: '03', title: 'Insurance Software Development', description: 'Explore Alpixn Technologies’ insurance software development services for innovative solutions tailored to the insurance industry. From simplifying insurance underwriting, claims processing, and policy management to providing emerging insurance solutions, our developers ensure seamless integration of technology and excellence in the insurance sector.' },
    { number: '04', title: 'FinTech CRM Software Development', description: 'We specialize in delivering smart solutions that enhance customer relationship management in the fintech industry. We offer user-friendly design, feature-rich CRM platforms, seamless payment API integrations, and innovative solutions designed to optimize client interactions and enhance FinTech operations.' },
    { number: '05', title: 'Payment App Development', description: 'Redefine your financial transactions with our Payment App Development Services. Enable automated invoicing and seamless send/receive payments from diverse sources to your account. Our fintech custom software development facilitates low-cost money transfers, sales analysis, and transparency, ensuring an efficient financial ecosystem.' },
    { number: '06', title: 'FinOps Services', description: 'Optimize your financial operations with our FinOps services to upscale your businesses. Our dedicated team of fintech developers specializes in cost management, financial efficiency, and cloud governance, ensuring your business achieves optimal financial performance in the dynamic landscape of modern operations.' },
    { number: '07', title: 'Financial Fraud Detection Software', description: 'Mitigate risks effectively with our financial fraud detection software services. We at Alpixn Technologies integrate advanced algorithms and analytics; we provide data security & privacy solutions to identify and prevent fraudulent activities, safeguarding your financial operations with heightened security.' },
    { number: '08', title: 'Wealth Management Software', description: 'Transform financial asset management with our wealth management software. Seamlessly track consumer trends, ensuring informed decision-making. Improve communication channels for enhanced client engagement, providing a sophisticated solution to optimize wealth management strategies and upgrade overall financial performance.' },
    { number: '09', title: 'Online Banking Software Development', description: 'Revolutionize your banking experience with our online banking software development. Our certified finance software engineers develop software with secure and seamless transactions, real-time account management, and enhanced data security, ensuring your customers enjoy the convenience of modern online banking.' }
];

const whyChooseUsFintech = [
    { title: 'Security and Regulatory Compliance', description: 'Alpixn Technologies incorporates an emerging tech stack for security and regulatory compliance. From identity and access management to Secure Access Service Edge (SASE), and advanced AI/ML solutions, we fortify your systems. Our expertise extends to cutting-edge advanced threat detection, providing a resilient defense against evolving cybersecurity challenges.' },
    { title: 'Dedicated Fintech Engineers', description: 'We at Alpixn Technologies are a team of dedicated finance software engineers. We provide expert developers for a particular niche, from code to production. Our fintech developers are highly qualified to provide innovative industry solutions with knowledge of industry trends, technological advancements, and advanced data security measures with quick time-to-market solutions.' },
    { title: 'Quality Assurance', description: 'Alpixn Technologies ensures quality assurance in projects with constructive testing methodologies. We undertake periodic testing from development to deployment of every product, guaranteeing the reliability, functionality, and performance of your FinTech solution through comprehensive testing, ensuring a seamless and error-free user experience.' },
    { title: 'Agile Approach', description: 'Alpixn Technologies embraces an agile approach to dynamic and responsive software development. Our Agile methodology ensures flexibility, adaptability, and continuous collaboration, allowing us to swiftly respond to changing requirements and deliver a FinTech solution that encompasses customer satisfaction.' },
    { title: 'AI/ML Driven Solution', description: 'Experience an AI/ML-driven solution tailored to your FinTech requirements. We integrate advanced artificial intelligence and machine learning technologies, providing data-driven insights, automation, and enhanced decision-making capabilities for an intelligent and competitive financial solution.' },
    { title: 'DevOps Approach', description: 'We at Alpixn Technologies offer a DevOps approach for streamlined development and deployment. Our DevOps practices ensure a seamless and efficient workflow, enabling faster releases, continuous integration, and collaborative development, ultimately optimizing the entire lifecycle of your FinTech software.' }
];

const clutchTestimonials = [
    { rating: '5.0', text: "They're a top-notch developer all around.", author: "Strategic Product Manager", company: "Patra Corp" },
    { rating: '5.0', text: "There's no job too big or small for the team to fix in rapid time.", author: "Co-Founder", company: "Shootzu" },
    { rating: '4.5', text: "They’re reliable, and the price value is very high.", author: "Co-Founder & CEO", company: "BlackGull" },
    { rating: '4.5', text: "Their team has a lot of backend development knowledge.", author: "Founder & Managing Director", company: "ImmoSnapp GmbH" },
    { rating: '5.0', text: "Their commitment to excellence and collaborative approach set them apart.", author: "Executive", company: "Sagita Learning" },
    { rating: '5.0', text: "The team is very friendly & responsive, they are always ready to connect via Meets and Zoom calls.", author: "VP Operations", company: "Transport Company" }
];

const engagementModelsFintech = [
    {
        title: 'Offshore Development',
        description: 'Alpixn Technologies’ offshore engagement model functions as an Offshore Development Center (ODC), delivering a tailored approach. This specialized center works exclusively on the client’s project, ensuring cost-effectiveness, scalability, optimized outcomes, efficiency, and high-quality standards.',
        points: ['Client-Centric Team Formation', 'Direct Reporting And Transparency', 'Scalability And Flexibility', 'Quality And Efficiency']
    },
    {
        title: 'Dedicated Team Model',
        description: 'Alpixn Technologies offers a dedicated team approach, bolstering a client’s in-house team with specialized skills, fostering collaboration, and optimizing project results. Ideal for companies aiming to enhance their workforce with specific expertise for better project outcomes.',
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: 'Alpixn Technologies’ project-based engagement model offers a structured approach for well-defined projects within a set scope, time, and budget. This model guarantees timely, on-budget delivery meeting quality standards, and fostering collaboration for successful outcomes.',
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    },
];

const faqsFintech = [
    { q: 'What sets a Fintech Application Development Company apart?', a: 'A leading Fintech Application Development Company combines expertise in financial software development with a focus on innovation, delivering cutting-edge solutions for the dynamic needs of the industry. Alpixn Technologies is among the leading financial software development companies with its dynamic banking software development services and user-centric approach.' },
    { q: "What are your team's qualifications and expertise in FinTech development?", a: "Our team consists of dedicated finance software engineers with deep expertise in industry trends, technological advancements, and advanced data security measures. We are skilled in emerging technologies like AI/ML, IoT, and DevOps, ensuring we deliver innovative and compliant FinTech solutions. Our focus is on providing quick time-to-market solutions, from code to production." },
    { q: 'What are your rates and fees for FinTech software development?', a: "Our rates are tailored to the specific needs of each project. Pricing depends on factors such as the project's scope and complexity, the engagement model you choose (Offshore, Dedicated Team, or Project-Based), and the specific expertise required. We recommend connecting with our experts for a detailed estimate and a custom quote based on your unique requirements." }
];

const genAiTechStack = [
    { name: 'Tensorflow', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/tensorflow.png' },
    { name: 'Streamlit', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/streamlit.png' },
    { name: 'RAY', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/ray.png' },
    { name: 'PyTorch', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/pytorch.png' },
    { name: 'ONNX', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/onnx.png' },
    { name: 'MLflow', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/mlflow.png' },
    { name: 'MetaGPT', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/meta-gpt.png' },
    { name: 'LlamaIndex', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/LlamaIndex.png' },
    { name: 'JAX', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/jax.png' },
    { name: 'Haystack', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/haystack.png' },
    { name: 'Gradio', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/gradio.png' },
    { name: 'Flask', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/flask.png' }
];

const userGuideContent = {
    'Role of Top Technologies in the FinTech Industry': {
        intro: "With the evolving technological meta, the fintech industry is also going through a transformation with a handful of cutting-edge technologies. These technological advancements are the real drivers of change, making financial services more accessible, flexible, efficient, and secure. Here are some of the top technologies playing a pivotal role in the FinTech industry:",
        points: [
            { title: 'Artificial intelligence (AI)', text: 'Drives data-driven insights, automates processes, and enhances decision-making, revolutionizing financial services.', roles: ['By integrating AI chatbots for virtual support and assistance to respond to customer queries.', 'Utilizing AI algorithms to prevent online fraud.', 'Natural language processing, or NLP, is being implemented to improve client engagement and allow human-like interactions with virtual assistants.'] },
            { title: 'Internet of Things (IoT)', text: 'Enables connected devices for data collection, enhancing real-time monitoring and personalized financial services.', roles: ['Analyze the preferences and demographics of users.', 'Effective data collection with IoT to improve business decision-making.', 'Improves security and protects against potential data breaches.'] },
            { title: 'Open APIs', text: 'Facilitate seamless data exchange, foster collaboration between financial institutions, and enable innovative third-party services.', roles: ['It simplifies personal financing.', 'Consumer lending becomes easier and simpler with an open API.', 'Open banking’s buy-now-pay-later feature facilitates the sale of more goods by giving consumers short-term, interest-free payment options.'] },
            { title: 'Robotics', text: 'Automates routine tasks, improving operational efficiency, reducing errors, and enhancing customer service in the financial sector.', roles: ['Simplified online KYC operations with automated authentication.', 'It eliminates errors and enhances data management and cost efficiency.', 'Robotics helps with ease of tracking accounts and automated notifications.'] },
            { title: 'Cloud Computing', text: 'Provides scalable, secure, and flexible infrastructure, empowering FinTechs to deliver services efficiently and cost-effectively.', roles: ['It manages and stores data reliably and securely.', 'It allows businesses to employ astute financing, payment, and fraud prevention techniques.'] },
        ]
    },
    'Financial Software Development Process': {
        intro: "Developing financial software is a complex process with its own unique set of challenges and considerations due to the sensitive nature of the data involved and the stringent security requirements. However, the core stages of the development process generally follow a familiar pattern:",
        points: [
            { title: '1. Planning and Analysis', text: 'Idea Generation and Market Research: This stage involves identifying a niche or problem in the financial sector and its potential solutions.\nRequirement Gathering and Definition: Clearly defining the features, functionalities, and target audience for the software is crucial.' },
            { title: '2. Design and Prototyping', text: 'Technical Architecture and Systems Design: Determining the technology stack, infrastructure, and system architecture based on the software’s needs and the regulatory environment.\nUI/UX Design and Prototyping: Creating user interfaces and user experiences that are intuitive, secure, and compliant with financial regulations.' },
            { title: '3. Development and Testing', text: 'Software Development: Dedicated developers code the software according to the specifications and architecture. Agile methodologies are often preferred for flexibility and iteration.' },
            { title: '4. Deployment and Maintenance', text: 'Release and Rollout: Deploying the software to production environments, handling data migration, and training users are important steps in this stage.\nMaintenance and Support: Ongoing monitoring, bug fixing, feature updates, and security patches are essential for keeping the software running smoothly and securely.' },
            { title: '5. Security and Compliance', text: 'Financial software must adhere to strict regulations and implement robust security measures to protect sensitive data. Encryption, secure authentication, and vulnerability management are vital.' }
        ]
    },
    'Key FinTech Software/Products Types We Have Worked On': {
        intro: "With a twelve-year history of success in the field of software development. Throughout the fintech industry, Alpixn Technologies has delivered several projects. Let us examine a few areas of our expertise:",
        points: [
            { title: 'Mobile Banking Apps', text: 'Crafted user-friendly mobile banking applications, providing customers with convenient access to financial services on the go.' },
            { title: 'Payment Processing Platforms', text: 'Developed secure and efficient payment processing solutions, facilitating seamless transactions and digital payment methods.' },
            { title: 'Personal Finance Management Apps', text: 'Created applications for personal finance management, empowering users to budget, track expenses, and achieve their financial goals.' },
            { title: 'InsurTech Solutions', text: 'Developed innovative InsurTech solutions, streamlining insurance processes, claims management, and policy administration.' },
            { title: 'Digital Wallets', text: 'Crafted digital wallet solutions, offering a secure and user-friendly way for customers to manage their finances and make digital transactions.' },
            { title: 'AI-Powered Chatbots', text: 'Integrated AI-powered chatbots for financial institutions, enhancing customer support and engagement through automated interactions.' }
        ],
        outro: "These diverse FinTech solutions showcase our proficiency in developing a wide range of products that cater to the evolving needs of the financial industry."
    }
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

// --- NEW AND REBUILT SECTIONS ---

const WorkMasterySection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Our Dedicated Fintech Software Development Work Mastery
                    </h2>
                    <p className={`mt-4 text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Our dedicated Software developers offer a range of benefits, with certified professionals skilled in emerging technologies like AI, low code/no code, and IoT. Hire dedicated software developers to integrate core tech strength and 24/7 support, ensuring seamless maintenance from code to production, offering your project success and scalability.
                    </p>
                </div>
            </div>
        </div>
    )
}

const ExploreScopeSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Explore the Scope of Our Custom FinTech Software Development Services
                    </h2>
                    <p className={`mt-4 text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        We provide fintech custom software development solutions and agile methods for banking, online payments, investing, etc. We offer building applications, processes, products, and business models in financial services. Redefine your fintech business, secure payments, and get smart business analytics with our bespoke financial software development services.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {scopeOfServices.map((service, index) => (
                        <div key={index} className={`bg-gray-900/50 ring-1 ring-white/10 p-8 rounded-2xl transition-all duration-500 ease-out hover:ring-blue-500/50 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="flex items-start gap-4">
                                <div className="text-blue-400 font-bold text-3xl">{service.number}</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const WhyChooseUsSection = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  return (
    <div ref={ref} className="py-24 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            Why Choose Alpixn Technologies as a Fintech Software Development Company?
        </h2>
        <p className={`max-w-3xl mx-auto text-lg text-gray-400 mb-16 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            Prioritize Alpixn Technologies as your FinTech software company for cutting-edge banking solutions. Our expertise lies in delivering innovative financial technology products, ensuring data security, and seamless payment API integration. We transform your financial operations and drive sustainable growth in the dynamic FinTech landscape.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsFintech.map((reason, index) => (
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

const TestimonialsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>See what our clients have to say</h2>
                    <img src="https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/clutch-logo.png" alt="Clutch" className="h-12 mx-auto mt-4" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {clutchTestimonials.map((testimonial, index) => (
                        <div key={index} className={`p-8 bg-gray-900/50 ring-1 ring-white/10 rounded-2xl transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="flex items-center mb-4">
                               <div className="text-yellow-400 text-2xl font-bold">{testimonial.rating} ★</div>
                            </div>
                            <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                            <div className="font-bold text-white">{testimonial.author}</div>
                            <div className="text-sm text-gray-400">{testimonial.company}</div>
                             <div className="text-xs text-green-400 mt-2 font-semibold">Verified Review</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const TechnologyStackSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Our Technology Stack</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Our FinTech solutions are built on a flexible and powerful tech stack that enables custom development, secure integration, and cross-platform deployment, delivering speed, reliability, and value.
                    </p>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center">
                    {genAiTechStack.map((tech, index) => (
                        <div key={tech.name} className={`flex justify-center items-center p-4 bg-gray-800 rounded-xl transition-all duration-500 ease-out hover:bg-gray-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: `${index * 50}ms` }}>
                           <img src={tech.logo} alt={tech.name} className="h-16 object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const EngagementModelsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Engagement Model</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        The engagement model for mobile app development services involves a collaborative approach tailored to client needs. Take a look at Alpixn Technologies’ engagement model for mobile app development.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsFintech.map((model, index) => (
                        <div key={model.title} className={`p-8 bg-blue-900/20 ring-1 ring-blue-500/20 rounded-2xl transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <h3 className="text-3xl font-bold mb-4 text-center">{model.title}</h3>
                            <p className="text-gray-400 mb-6 text-center h-40">{model.description}</p>
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

const ImpactSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Impact of FinTech on Banking & BFSI Financial Industry
                    </h2>
                    <p className={`mt-4 text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Fintech has revolutionized the Banking and BFSI industry, reshaping traditional practices. Innovative tech stacks like blockchain, AI, and digital payment solutions, enhance operational efficiency, expedite transactions, and foster financial inclusion. Robo-advisors optimize investment strategies, and RegTech ensures security compliance. Open banking promotes collaboration and user satisfaction, while cybersecurity measures safeguard against potential threats. The landscape shifts dramatically, empowering customers and demanding innovation from incumbents. Prepare for a future where technology is not just a tool but the driving force.
                    </p>
                </div>
            </div>
        </div>
    );
}

const UserGuideSection = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContent)[0]);
    const content = userGuideContent[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">User Guide To Custom FinTech Software Development</h2>
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="md:w-1/3">
                        <ul className="space-y-2">
                            {Object.keys(userGuideContent).map(topic => (
                                <li key={topic}>
                                    <button
                                        onClick={() => setActiveTopic(topic)}
                                        className={`w-full text-left p-4 rounded-lg transition-colors duration-300 ${activeTopic === topic ? 'bg-blue-600 text-white font-bold' : 'bg-gray-800 hover:bg-gray-700'}`}
                                    >
                                        {topic}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </aside>
                    {/* Content */}
                    <main className="md:w-2/3">
                        <div className="bg-gray-900/50 p-8 rounded-2xl ring-1 ring-white/10">
                            <p className="text-gray-400 mb-6">{content.intro}</p>
                            <div className="space-y-6">
                                {content.points.map((point, index) => (
                                    <div key={index}>
                                        <h4 className="text-xl font-bold text-blue-400 mb-2">{point.title}</h4>
                                        <p className="text-gray-300 whitespace-pre-line">{point.text}</p>
                                        {point.roles && (
                                            <ul className="mt-3 space-y-2 list-disc list-inside text-gray-400">
                                                {point.roles.map((role, rIndex) => <li key={rIndex}>{role}</li>)}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                            {content.outro && <p className="text-gray-400 mt-6">{content.outro}</p>}
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}

const FaqSection = () => {
    const [open, setOpen] = useState(null);
    const toggle = (index) => setOpen(open === index ? null : index);

    return (
        <div className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">FAQ's</h2>
                <div className="max-w-4xl mx-auto">
                    {faqsFintech.map((faq, index) => (
                        <div key={index} className="border-b border-gray-700 py-4">
                            <button onClick={() => toggle(index)} className="w-full flex justify-between items-center text-left text-lg font-semibold">
                                <span className="text-white">{faq.q}</span>
                                <span className="text-blue-400 text-2xl">{open === index ? '−' : '+'}</span>
                            </button>
                            <motion.div
                                initial={false}
                                animate={{ height: open === index ? 'auto' : 0, opacity: open === index ? 1 : 0, marginTop: open === index ? '1rem' : '0' }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <p className="text-gray-400">{faq.a}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const FinalCtaSection = () => {
    return (
        <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect with Our FinTech Software Development Experts</h2>
                <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-400">Connect with our expert fintech software developers to add advanced, certified developers who integrate the latest tech to transform your concepts into engaging and seamless user experiences.</p>
                <form className="max-w-2xl mx-auto text-left grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" className="bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="Phone" className="bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="email" placeholder="Email" className="bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="Company" className="bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <textarea placeholder="Tell us about your project" rows="4" className="md:col-span-2 bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                     <button type="submit" className="md:col-span-2 bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300 mt-4">Get an Estimate of Your Project Today</button>
                </form>
            </div>
        </section>
    );
}


// --- MAIN PAGE COMPONENT ---
const FintechPage = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <motion.section
          className="relative bg-gradient-to-r from-blue-900 via-black to-black text-white py-20 pl-5 pr-4 sm:pl-10 sm:pr-6 md:pl-16 lg:pl-24 xl:pl-36 2xl:pl-48"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center">
                <motion.div
                    className="md:w-1/2 mb-10 md:mb-0"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">FinTech Software Development Company</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Alpixn Technologies is a leading FinTech software development company, specializing in crafting innovative solutions for the financial industry. With expertise in the latest technologies and a commitment to excellence, we deliver bespoke FinTech software that empowers businesses to thrive in the digital financial landscape.
                    </p>
                    <motion.button
                        className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get a custom quote
                    </motion.button>
                </motion.div>
                <motion.div
                    className="md:w-1/2 flex justify-center"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <img src={StaffAugmentationImage} alt="Fintech" className="w-full max-w-md rounded-lg" />
                </motion.div>
            </div>
          </div>
        </motion.section>

        <TrustedBy backgroundColor="bg-white" />

        {/* FinTech Development Services We Offer */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="container mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              FinTech Software Development Services We Offer
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 max-w-3xl mx-auto mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore our advanced FinTech software development services at Alpixn Technologies. We offer unparalleled services like E-Wallet Integration, Mobile Banking Applications, Artificial Intelligence in Finance, and many more tailored to businesses’ unique requirements in the financial technology sector.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fintechServices.map((service, index) => (
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
             <motion.div 
                className="mt-12"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.3 }}>
                <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300">
                    Connect With Our FinTech Software Development Experts Now!
                </button>
            </motion.div>
          </div>
        </section>
        
        <WorkMasterySection />

        <ExploreScopeSection />
        
        <TestimonialsSection />

        <WhyChooseUsSection />

        <TechnologyStackSection />

        <ImpactSection />

        <UserGuideSection />
        
        <EngagementModelsSection />

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
              Ready to Get Started With Our FinTech Software Development Services?
            </motion.h2>
            <motion.p
              className="text-lg mb-8 max-w-3xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ready to launch your vision? Our custom fintech software development team is geared up to bring your ideas to life. Let’s embark on your unique project journey together, creating tailored solutions for your business needs.
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
        
        <FaqSection />
        
        <FinalCtaSection />

      </main>
      <Footer />
    </div>
  );
};

export default FintechPage;