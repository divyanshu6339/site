import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- NEW DATA ARRAYS FOR AUTOMOTIVE ---
const automotiveServices = [
    { title: 'In-Vehicle Infotainment (IVI) Systems', description: 'We design and develop cutting-edge IVI systems with rich UIs, seamless connectivity, and third-party app integration, creating a connected and engaging cabin experience for drivers and passengers.' },
    { title: 'ADAS & Autonomous Driving', description: 'Leverage our expertise in developing software for Advanced Driver-Assistance Systems (ADAS). We work on sensor fusion, perception algorithms, and control unit software to enhance vehicle safety and autonomy.' },
    { title: 'Connected Car & V2X Solutions', description: 'Build the future of mobility with our Connected Car platforms. We enable Vehicle-to-Everything (V2X) communication, telematics, OTA updates, and remote vehicle diagnostics for a smarter fleet.' },
    { title: 'EV Battery Management Systems (BMS)', description: 'We provide custom software for Electric Vehicle BMS, focusing on optimizing battery performance, state-of-charge (SoC) estimation, health monitoring, and ensuring the safety and longevity of the powertrain.' },
    { title: 'Digital Cockpit & Instrument Clusters', description: 'Modernize the driver\'s interface with fully digital cockpits. Our solutions integrate navigation, vehicle status, and infotainment into a single, cohesive, and customizable high-resolution display.' },
    { title: 'Automotive Cybersecurity', description: 'Protect vehicles from evolving digital threats. We implement robust security protocols, secure boot, intrusion detection systems (IDS), and ensure compliance with standards like ISO/SAE 21434.' }
];

const exploreAutomotiveSolutions = [
    { number: '01', title: 'ECU & Microcontroller Programming', description: 'We offer low-level software development for Electronic Control Units (ECUs) and microcontrollers, ensuring real-time performance and reliability for critical vehicle functions from braking to engine control.' },
    { number: '02', title: 'Predictive Maintenance Solutions', description: 'Utilizing vehicle sensor data and machine learning, we build predictive maintenance platforms that forecast component failures before they happen, reducing downtime and operational costs for fleets.' },
    { number: '03', title: 'Telematics & Fleet Management', description: 'Our custom fleet management solutions provide real-time vehicle tracking, driver behavior analysis, fuel management, and route optimization to improve the efficiency and safety of commercial fleets.' },
    { number: '04', title: 'AUTOSAR-Compliant Software', description: 'We develop standardized and interoperable automotive software components based on the AUTOSAR architecture, enabling modularity, scalability, and reusability across different vehicle platforms.' },
    { number: '05', title: 'Vehicle HMI Development', description: 'We create intuitive and safe Human-Machine Interfaces (HMI) for all in-car systems. Our user-centric design approach minimizes driver distraction while maximizing usability and accessibility.' },
    { number: '06', title: 'Over-The-Air (OTA) Updates', description: 'Implement secure and reliable OTA update capabilities to remotely deploy new features, software patches, and security updates to vehicles, reducing the need for physical recalls.' },
    { number: '07', title: 'Simulation & Virtual Testing', description: 'We accelerate development and enhance safety by creating sophisticated simulation environments for testing ADAS, autonomous driving algorithms, and other critical software in a virtual world.' },
    { number: '08', title: 'Automotive Cloud Platforms', description: 'Build scalable cloud backends to support connected vehicle services. Our platforms manage massive data ingestion from vehicles, enabling analytics, remote services, and new business models.' },
    { number: '09', title: 'Mobility as a Service (MaaS)', description: 'We develop the software backbone for MaaS platforms, integrating ride-sharing, vehicle subscription services, and public transport into a single, convenient application for users.' }
];

const whyChooseUsAutomotive = [
    { title: 'Functional Safety (ISO 26262)', description: 'Our development processes are aligned with the ISO 26262 standard, ensuring that critical automotive systems meet the highest levels of functional safety and reliability from concept to production.' },
    { title: 'Deep Industry Expertise', description: 'With years of experience in the automotive sector, our engineers understand the unique challenges of the industry, from harsh operating environments to long development cycles and stringent validation.' },
    { title: 'Advanced Tech Integration', description: 'We are experts in integrating cutting-edge technologies like AI/ML for perception, computer vision, and IoT for connectivity, keeping your vehicles at the forefront of innovation.' },
    { title: 'Agile Yet Rigorous Methodology', description: 'We combine the flexibility of Agile development with the rigorous documentation and testing required for automotive-grade software, ensuring both speed and quality in our delivery.' },
    { title: 'Scalable & Modular Architecture', description: 'We build software on scalable and modular principles like AUTOSAR, allowing for easier updates, feature additions, and reuse of components across your entire vehicle lineup.' },
    { title: 'End-to-End Development Partner', description: 'From initial strategy and R&D to development, testing, and long-term maintenance, we act as your dedicated partner through the entire software lifecycle.' }
];

const clutchTestimonials = [
    { rating: '5.0', text: "They're a top-notch developer all around.", author: "Strategic Product Manager", company: "Patra Corp" },
    { rating: '5.0', text: "There's no job too big or small for the team to fix in rapid time.", author: "Co-Founder", company: "Shootzu" },
    { rating: '4.5', text: "They’re reliable, and the price value is very high.", author: "Co-Founder & CEO", company: "BlackGull" },
    { rating: '4.5', text: "Their team has a lot of backend development knowledge.", author: "Founder & Managing Director", company: "ImmoSnapp GmbH" },
    { rating: '5.0', text: "Their commitment to excellence and collaborative approach set them apart.", author: "Executive", company: "Sagita Learning" },
    { rating: '5.0', text: "The team is very friendly & responsive, they are always ready to connect via Meets and Zoom calls.", author: "VP Operations", company: "Transport Company" }
];

const engagementModelsAutomotive = [
    { title: 'Offshore Development', description: 'Our offshore model provides a dedicated team of automotive software experts working as a seamless extension of your in-house team, ensuring cost-effectiveness, scalability, and focused project execution.', points: ['Client-Centric Team Formation', 'Direct Reporting And Transparency', 'Scalability And Flexibility', 'Quality And Efficiency'] },
    { title: 'Dedicated Team Model', description: 'Augment your existing team with our specialized automotive engineers. This model is ideal for filling specific skill gaps, accelerating project timelines, and gaining access to top-tier talent for critical tasks.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'For projects with a clearly defined scope and deliverables, our project-based model offers a fixed budget and timeline, guaranteeing on-time delivery while we manage the entire development lifecycle.', points: ['Fixed Budget', 'Milestones And Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsAutomotive = [
    { q: 'How do you ensure the safety and security of your automotive software?', a: 'Safety and security are paramount. We adhere to stringent industry standards, including ISO 26262 for functional safety and ISO/SAE 21434 for cybersecurity. Our process includes threat analysis (TARA), hazard analysis (HARA), secure coding practices, rigorous testing, and implementing multi-layered security architectures from the hardware level up.' },
    { q: 'What experience do you have with standards like AUTOSAR?', a: 'Our team has extensive experience developing software within the AUTOSAR framework. We create standardized, reusable software components (SW-Cs) and configure the AUTOSAR runtime environment (RTE), enabling interoperability and scalability across different vehicle platforms and ECU hardware.' },
    { q: 'Can you integrate your software with our existing vehicle hardware and ECUs?', a: 'Yes. We specialize in hardware abstraction and integration. Our engineers are proficient in working with various microcontrollers, SoCs, and ECUs from different manufacturers. We develop custom drivers and middleware to ensure our software communicates flawlessly with your specific hardware architecture.' }
];

const userGuideContentAutomotive = {
    'What is Automotive Software Development?': {
        intro: 'Automotive software development is the process of designing, developing, and testing the software that controls the functionalities of a modern vehicle. It has moved far beyond simple engine control and now encompasses a vast array of complex systems.',
        points: [
            { title: 'Core Functions:', text: 'Includes software for Electronic Control Units (ECUs) that manage the engine, transmission, braking (ABS), and steering.' },
            { title: 'Driver Experience:', text: 'Covers In-Vehicle Infotainment (IVI), digital instrument clusters, and Human-Machine Interfaces (HMI).' },
            { title: 'Safety & Autonomy:', text: 'Involves Advanced Driver-Assistance Systems (ADAS) and the complex software stacks for autonomous driving.' },
            { title: 'Connectivity:', text: 'Enables Connected Car features, V2X communication, telematics, and Over-the-Air (OTA) updates.' },
        ],
        outro: 'The goal is to create reliable, safe, secure, and feature-rich software that defines the performance and user experience of the vehicle.'
    },
    'Key Trends: C.A.S.E.': {
        intro: 'The automotive industry is being revolutionized by four key trends, collectively known as C.A.S.E. (Connected, Autonomous, Shared, Electric).',
        points: [
            { title: 'Connected:', text: 'Vehicles are increasingly connected to the internet and each other (V2X), enabling real-time traffic data, remote services, and OTA updates.' },
            { title: 'Autonomous:', text: 'The push towards self-driving technology, from Level 1 ADAS to fully autonomous Level 5, is driven entirely by software advancements in AI and sensor fusion.' },
            { title: 'Shared:', text: 'The rise of Mobility-as-a-Service (MaaS) platforms, including ride-sharing and car subscription services, requires a robust software backbone for booking, payment, and fleet management.' },
            { title: 'Electric:', text: 'The shift to Electric Vehicles (EVs) requires sophisticated software for Battery Management Systems (BMS), charging control, and powertrain optimization.' }
        ]
    },
    'Functional Safety (ISO 26262)': {
        intro: 'ISO 26262 is an international standard for the functional safety of electrical and electronic systems in road vehicles. It is a critical framework for managing risk in safety-critical software.',
        points: [
            { title: 'Risk Classification:', text: 'The standard defines Automotive Safety Integrity Levels (ASILs), from A to D, to classify the risk associated with a system failure. ASIL D represents the highest level of risk.' },
            { title: 'Safety Lifecycle:', text: 'It mandates a safety-oriented process throughout the entire development lifecycle, from concept and design to development, testing, and decommissioning.' },
            { title: 'Goal:', text: 'The primary goal is to mitigate potential hazards caused by system malfunctions. Adherence is essential for any software that controls critical vehicle functions like braking or steering.' }
        ]
    }
};

// Custom hook for intersection observer
const useOnScreen = (options) => {
    const [ref, setRef] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
  
    React.useEffect(() => {
      if (!ref) return;
      const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), options);
      observer.observe(ref);
      return () => observer.disconnect();
    }, [ref, options]);
  
    return [setRef, isVisible];
};

// --- NEW SECTIONS FOR AUTOMOTIVE PAGE ---

const AutomotiveServicesSection = ({services}) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="container mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
              Automotive Software Development Services We Offer
            </h2>
            <p className={`text-lg text-gray-400 max-w-4xl mx-auto mb-12 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                From the ECU to the cloud, we provide end-to-end software solutions that power the next generation of vehicles. Our services focus on enhancing safety, connectivity, and the in-vehicle experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div key={index} className="bg-gray-800 p-8 rounded-lg text-left transform transition duration-500 hover:scale-105 hover:bg-gray-700"
                  initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-12">
                <motion.button className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300" whileHover={{ scale: 1.05 }}>
                    Connect With Our Automotive Experts Now!
                </motion.button>
            </div>
          </div>
        </section>
    );
};

const AutomotiveWorkMasterySection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
                <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Our Dedicated Automotive Software Development Mastery
                </h2>
                <p className={`mt-4 text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Our dedicated automotive software developers offer a range of benefits, with certified professionals skilled in safety-critical systems, real-time operating systems (RTOS), and emerging technologies like AI and V2X. Hire our developers to integrate core tech strength and 24/7 support, ensuring your project's success and scalability.
                </p>
            </div>
        </div>
    );
};

const FeaturedCaseStudyAutomotive = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-800 ring-1 ring-white/10 rounded-2xl p-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-2/5">
                        <h3 className="text-3xl font-bold mb-2">EV Powertrain Controls</h3>
                        <p className="text-blue-400 font-semibold mb-4">Development of a Safe and Efficient Battery Management System (BMS) for a New Electric SUV Platform.</p>
                        <ul className="space-y-3 mb-6">
                             {['Achieved 98% accuracy in State-of-Charge (SoC) estimation.', 'Implemented fault detection for thermal runaway prevention.', 'Ensured compliance with ASIL-C level of ISO 26262.', 'Developed software for hardware-in-the-loop (HIL) testing.'].map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                         <div className="flex flex-wrap items-center gap-2">
                             {['EV', 'BMS', 'ISO 26262', 'AUTOSAR'].map(tag => <div key={tag} className="text-xs font-semibold text-gray-300 bg-gray-700 px-3 py-1 rounded-full">{tag}</div>)}
                         </div>
                    </div>
                    <div className="w-full md:w-3/5">
                        <p className="text-gray-300 mb-6 text-lg">Alpixn Technologies partnered with a leading automotive OEM to develop the core software for their next-generation EV battery management system. The platform optimizes charging cycles, enhances battery lifespan, and provides critical safety monitoring, forming the heart of the vehicle\'s powertrain.</p>
                        <img src={StaffAugmentationImage} alt="EV Powertrain Case Study" className="rounded-xl shadow-2xl shadow-blue-500/10" />
                        <div className="text-center mt-6">
                            <button className="text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center gap-2 mx-auto">View Case Study <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ExploreAutomotiveSolutionsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Explore Our Automotive Software Solutions
                    </h2>
                    <p className={`mt-4 text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Our dedicated team delivers innovative software that drives the future of mobility. We utilize industry-leading standards and game-changing technologies to make vehicle systems smarter, safer, and more efficient.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {exploreAutomotiveSolutions.map((service, index) => (
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
};

const WhyChooseUsAutomotiveSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
      <div ref={ref} className="py-24 bg-gray-900/50">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
              Why Choose Us For Automotive Software Development?
          </h2>
          <p className={`max-w-4xl mx-auto text-lg text-gray-400 mb-16 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
              We are not just a software provider; we are your strategic partner in innovation. We combine deep automotive domain knowledge with expertise in safety-critical software engineering to deliver solutions that are not only technologically advanced but also robust, reliable, and secure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsAutomotive.map((reason, index) => (
              <div key={reason.title} className={`p-8 bg-gray-800 rounded-2xl text-left transition-all duration-500 ease-out hover:bg-gray-700 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

const UserGuideSidebarAutomotive = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentAutomotive)[0]);
    const content = userGuideContentAutomotive[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Guide to Automotive Software Development</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentAutomotive).map(topic => (
                                <li key={topic}>
                                    <button onClick={() => setActiveTopic(topic)}
                                        className={`w-full text-left p-4 rounded-lg transition-colors duration-300 ${activeTopic === topic ? 'bg-blue-600 text-white font-bold' : 'bg-gray-800 hover:bg-gray-700'}`}>
                                        {topic}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </aside>
                    <main className="md:w-2/3">
                        <div className="bg-gray-900/50 p-8 rounded-2xl ring-1 ring-white/10">
                            <p className="text-gray-400 mb-6">{content.intro}</p>
                            <div className="space-y-6">
                                {content.points.map((point, index) => (
                                    <div key={index}>
                                        <h4 className="text-xl font-bold text-blue-400 mb-2">{point.title}</h4>
                                        <p className="text-gray-300 whitespace-pre-line">{point.text}</p>
                                    </div>
                                ))}
                            </div>
                            {content.outro && <p className="text-gray-400 mt-6 italic">{content.outro}</p>}
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
};

const TestimonialsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>See what our clients have to say</h2>
                    <img src="https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/clutch-logo.png" alt="Clutch" className="h-12 mx-auto mt-4" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {clutchTestimonials.map((testimonial, index) => (
                        <div key={index} className={`p-8 bg-gray-800 ring-1 ring-white/10 rounded-2xl transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="flex items-center mb-4"><div className="text-yellow-400 text-2xl font-bold">{testimonial.rating} ★</div></div>
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

const EngagementModelsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Engagement Models</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        We offer flexible engagement models designed to meet the specific needs of your automotive projects, ensuring a collaborative and efficient development process.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsAutomotive.map((model, index) => (
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

const FaqSection = () => {
    const [open, setOpen] = useState(null);
    const toggle = (index) => setOpen(open === index ? null : index);
    return (
        <div className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div className="max-w-4xl mx-auto">
                    {faqsAutomotive.map((faq, index) => (
                        <div key={index} className="border-b border-gray-700 py-4">
                            <button onClick={() => toggle(index)} className="w-full flex justify-between items-center text-left text-lg font-semibold">
                                <span className="text-white">{faq.q}</span>
                                <span className="text-blue-400 text-2xl">{open === index ? '−' : '+'}</span>
                            </button>
                            <motion.div initial={false} animate={{ height: open === index ? 'auto' : 0, opacity: open === index ? 1 : 0, marginTop: open === index ? '1rem' : '0' }} transition={{ duration: 0.3 }} className="overflow-hidden">
                                <p className="text-gray-400">{faq.a}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const FinalCtaSection = () => {
    return (
        <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Engineer the Future of Mobility, Together.</h2>
                <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-400">Connect with our automotive software experts to discuss your project. Let us help you build the safe, secure, and innovative software that will define your next generation of vehicles.</p>
                <form className="max-w-2xl mx-auto text-left grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" className="bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="Phone" className="bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="email" placeholder="Email" className="bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="Company" className="bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <textarea placeholder="Tell us about your project" rows="4" className="md:col-span-2 bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </form>
            </div>
        </section>
    );
}


// --- MAIN PAGE COMPONENT ---
const AutomotivePage = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <motion.section className="relative bg-gradient-to-r from-blue-900 via-black to-black text-white py-20 pl-5 pr-4 sm:pl-10 sm:pr-6 md:pl-16 lg:pl-24"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center">
                <motion.div className="md:w-1/2 mb-10 md:mb-0"
                    initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Automotive Software Development Services</h1>
                    <p className="text-lg md:text-xl mb-6">
                        We build the safety-critical and feature-rich software that powers modern vehicles. From In-Vehicle Infotainment and ADAS to Connected Car platforms, our solutions drive the future of mobility.
                    </p>
                    <motion.button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition" whileHover={{ scale: 1.05 }}>
                        Get a Technical Consultation
                    </motion.button>
                </motion.div>
                <motion.div className="md:w-1/2 flex justify-center"
                    initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                    <img src={StaffAugmentationImage} alt="Automotive Software Development" className="w-full max-w-md rounded-lg" />
                </motion.div>
            </div>
          </div>
        </motion.section>

        <TrustedBy backgroundColor="bg-white" />
        <AutomotiveServicesSection services={automotiveServices} />
        <AutomotiveWorkMasterySection />
        <FeaturedCaseStudyAutomotive />
        <ExploreAutomotiveSolutionsSection />
        <TestimonialsSection />
        <WhyChooseUsAutomotiveSection />

        <section className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Accelerate Your Automotive Project?
            </motion.h2>
            <motion.p className="text-lg mb-8 max-w-3xl mx-auto" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                Our team is ready to tackle your most complex software challenges. Let's collaborate to build the innovative, safe, and reliable systems your customers demand.
            </motion.p>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Get an Estimate Today
            </motion.button>
        </section>
        
        <UserGuideSidebarAutomotive />
        <EngagementModelsSection />
        <FinalCtaSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default AutomotivePage;