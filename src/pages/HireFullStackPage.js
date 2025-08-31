import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE FULL STACK DEVELOPERS PAGE ---

const fullStackStrengths = [
    { title: 'Custom Full Stack Software', description: 'Hire Full Stack programmers for bespoke, end-to-end software development that integrates robust backend systems.', icon: 'custom-full-stack-software-development' },
    { title: 'Full Stack Web Development', description: 'Our Full Stack web developers for hire deliver interactive, responsive, and feature-rich web applications tailored to your business objectives and goals.', icon: 'full-stack-web-development' },
    { title: 'Full Stack App Development', description: 'Our fullstack developers develop custom mobile and desktop applications that balance functionality and cross-platform compatibility.', icon: 'full-stack-application-development' },
    { title: 'MERN Stack Development', description: 'Hire our experienced full stack engineers, proficient in MongoDB, Express.js, React, and Node.js for high-performance applications.', icon: 'mern-stack' }
];

const whatYouGetFullStack = [
    { title: 'Years of Experience', description: 'With a decade of expertise, our experienced Full Stack developers deliver cutting-edge solutions. Whether you hire Full Stack engineers or seek dedicated Full Stack developers, we guarantee superior technical proficiency.' },
    { title: 'Agile Methodologies', description: 'We employ agile practices to ensure seamless collaboration and timely delivery. When you hire a dedicated Full Stack developer, expect efficient workflows and adaptability.' },
    { title: 'Rapid Deployments', description: 'Our offshore full stack developers accelerate time-to-market with streamlined deployment processes, ensuring quality output when you hire dedicated programmers for critical projects.' },
    { title: 'Enhanced Data Security', description: 'Data protection is paramount. Partner with our full stack development company for robust security protocols and secure architecture, vital for enterprise-grade applications.' }
];

const fullStackTechExpertise = ['React', 'Angular', 'Vuejs', 'Node Js', 'MongoDB', 'Redux', 'AWS'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const fullStackSolutions = [
    { title: 'LAMP Stack Development', description: 'Hire full stack programmers skilled in Linux, Apache, MySQL, and PHP to build robust and performance-driven web and application architectures.' },
    { title: 'Full Stack JavaScript Development', description: 'Our dedicated full stack developers for hire specialize in JavaScript frameworks, delivering efficient, real-time web applications for a superior user experience.' },
    { title: 'Full Stack PHP Development', description: 'Hire full stack web developers proficient in PHP to create dynamic, secure, and scalable solutions tailored to meet unique business requirements.' },
    { title: 'Full Stack Backend Development', description: 'Find full stack developers to design and optimize backend systems, ensuring seamless data processing, security, and scalability for enterprise-grade applications.' },
    { title: 'Front End Full Stack Development', description: 'Our experienced full stack engineers build visually compelling, interactive, and responsive front-end interfaces integrated with robust backend systems.' },
    { title: 'PERN Stack Development', description: 'Hire full stack engineers experienced in PostgreSQL, Express.js, React, and Node.js for developing powerful, feature-rich web applications.' },
    { title: 'Full Stack Cloud Deployment & CI/CD', description: 'Hire remote full stack developers to implement seamless cloud deployments, integrating CI/CD pipelines for faster, reliable, and automated software releases.' },
    { title: 'Effective CMS Development', description: 'Hire a dedicated Full Stack developer to create custom CMS platforms tailored to streamline your content management and enhance operational efficiency.' },
    { title: 'Full Stack Support and Maintenance', description: 'Partner with our offshore full stack developers for reliable support and proactive maintenance, ensuring consistent application performance and minimal downtime.' }
];

const engagementModelsFullStack = [
    { title: 'Dedicated Team', description: 'Build a dedicated team of Full Stack developers focused exclusively on your project. This model ensures a team with specialized expertise in both frontend and backend technologies, delivering end-to-end solutions with seamless integration and efficient progress towards your project milestones.', points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'] },
    { title: 'Staff Augmentation', description: 'Augment your team with skilled Full Stack developers to bridge technical gaps, enhance productivity, and streamline development—while preserving your existing team’s workflow and processes.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Choose the project-based engagement model to focus on specific development goals with defined objectives, timelines, and budgets. This model is ideal for projects like web applications, custom platforms, or database systems, ensuring a clear path from start to completion while keeping costs and resources controlled.', points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsFullStack = [
    { q: 'What is full stack development?', a: 'Full stack development refers to the practice of working on both the front-end (client-side) and back-end (server-side) of a web application. A full stack developer has a broad skill set that allows them to build a complete, functional application from the database to the user interface. [1, 2, 7]' },
    { q: 'What are the pricing models you offer?', a: 'We offer flexible pricing models to suit different project needs. This includes a fixed-price model for projects with a well-defined scope, a time and materials model for projects with evolving requirements, and a dedicated team model for long-term collaboration.' },
    { q: 'How do I hire dedicated Full Stack developers from you?', a: 'The process starts with you sharing your project requirements. We then provide a curated list of our vetted full stack developers. You can interview the candidates to find the perfect fit, and once selected, we handle the onboarding to integrate them into your team.' },
    { q: 'Can your Full Stack developer help me complete my incomplete app development project?', a: 'Yes, our full stack developers are experienced in taking over ongoing or stalled projects. They will conduct a thorough code audit and analysis of the existing application to understand its state and then work with you to create a roadmap for successful completion.' },
    { q: 'Do you provide support and maintenance services after deployment?', a: 'Yes, we offer comprehensive post-deployment support and maintenance services. This includes bug fixes, performance monitoring, security updates, and feature enhancements to ensure your application remains stable, secure, and up-to-date.' },
    { q: 'Do you provide NDA and IP protection for my project?', a: 'Absolutely. We take client confidentiality and intellectual property very seriously. We sign a Non-Disclosure Agreement (NDA) before any project begins, and the IP rights for all the code developed are transferred to you upon project completion. [28, 30]' },
    { q: 'Which project management tools do you use?', a: 'We use a variety of industry-standard project management and collaboration tools to ensure transparency and efficiency. These typically include Jira for task management, Slack for real-time communication, and platforms like GitHub or GitLab for version control. [26, 27]' },
    { q: 'Do I own the code authority of the project?', a: 'Yes, as the client, you will have complete ownership of the source code and all intellectual property associated with your project once the final payment is made. [28, 30]' },
    { q: 'Are there any hidden costs for Full Stack development services?', a: 'No, we believe in complete transparency. All costs are outlined in our proposal, and any potential for additional costs will be discussed and approved by you in advance. There are no hidden fees.' },
    { q: 'What if I want to change developers mid-project?', a: 'We strive for the perfect match, but if you are not satisfied with a developer, we have a flexible replacement policy. We will work with you to understand the issues and assign a new developer who is a better fit for your team and project needs.' },
    { q: 'How do I test your Full Stack developers\' expertise?', a: 'Our developers go through a rigorous vetting process that includes technical assessments, coding challenges, and multiple rounds of interviews. You can also conduct your own technical interview or assign a small, paid test task to evaluate their skills and problem-solving abilities before making a final decision.' },
    { q: 'How do I communicate and manage developers for my project?', a: 'You will have direct communication with the developers through channels like Slack and regular video calls. Project progress is tracked on tools like Jira, giving you full visibility. While you can manage them directly, we also provide a dedicated project manager to ensure smooth execution and communication.' }
];

const userGuideContentFullStack = {
    'What Does a Full Stack Developer Do?': {
        intro: 'A Full Stack developer is proficient in both frontend and backend technologies, managing every layer of application development. They design intuitive user interfaces, develop robust server-side logic, integrate APIs, and handle database management. When you hire a dedicated Full Stack developer, you gain a versatile professional capable of delivering end-to-end solutions. Full Stack developers are also skilled in debugging, optimizing performance, and implementing scalable architectures.',
        points: [
            { title: 'Key Skills to Look for when Hiring a Full Stack Developer', text: 'Proficiency in 3D Modeling and Game Engines: A Full Stack developer should excel in tools like Unity and Unreal Engine to create lifelike virtual spaces.\n\nBlockchain Expertise: Knowledge of decentralized technologies and smart contracts is crucial for implementing secure transactions and NFT marketplaces.\n\nProgramming Mastery: Proficiency in scripting languages such as Python, C++, and JavaScript ensures seamless functionality and integration across Full Stack ecosystems.\n\nAR/VR Knowledge: Expertise in augmented and virtual reality tools helps enhance user experience and interactivity.\n\nUnderstanding of AI/ML: AI-powered avatars and behavior-driven algorithms require developers skilled in machine learning and artificial intelligence.' }
        ],
        outro: 'When you hire certified Full Stack experts or hire top Full Stack developers from Alpixn Technologies, you’re ensuring access to professionals equipped with these essential skills. Whether you’re hiring offshore Full Stack developers or engaging our remote team, we deliver unparalleled quality and innovation.'
    },
    'Core Skills of a Full Stack Developer': {
        intro: 'An experienced full stack programmer comes equipped with a strong technical toolkit to manage all facets of development:',
        points: [
            { title: 'Frontend Development', text: 'Expertise in HTML, CSS, JavaScript, and frameworks like React, Angular, and Vue.js to create responsive interfaces.' },
            { title: 'Backend Proficiency', text: 'Knowledge of Node.js, Python, PHP, Ruby, or Java for developing server-side logic.' },
            { title: 'Database Management', text: 'Hands-on experience with SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases.' },
            { title: 'Version Control Systems', text: 'Proficient in Git for collaborative development.' },
            { title: 'API Integration', text: 'Capability to build and integrate RESTful APIs for seamless data exchange.' },
            { title: 'Cloud Deployment', text: 'Familiarity with platforms like AWS, Azure, or Google Cloud for scalable application hosting.' },
            { title: 'DevOps Practices', text: 'Experience with CI/CD pipelines, containerization tools like Docker, and orchestration platforms like Kubernetes.' }
        ],
        outro: 'When you hire Full Stack web developers or engage a dedicated full stack developer for hire, these skills ensure a streamlined development process and high-quality outcomes.'
    },
    'Benefits of Hiring Dedicated Full Stack Developers': {
        intro: '',
        points: [
            { title: 'Versatility Across Development Stages', text: 'Full stack developers possess expertise in both frontend and backend, enabling them to handle end-to-end project execution seamlessly.' },
            { title: 'Cost Efficiency', text: 'By hiring a dedicated full stack developer, you reduce the need for multiple specialists, optimizing development budgets.' },
            { title: 'Streamlined Communication', text: 'With a single resource managing the entire stack, communication gaps are minimized, ensuring cohesive project workflows.' },
            { title: 'Faster Time-to-Market', text: 'Full stack engineers accelerate development with their ability to manage every phase, from UI/UX to database integration.' },
            { title: 'Future-Ready Solutions', text: 'When you hire experienced full stack programmers, they bring knowledge of emerging technologies to create scalable, future-proof applications.' }
        ],
        outro: 'Engage offshore full stack developers or hire remote full stack developers from Alpixn Technologies to enhance project efficiency and outcomes.'
    },
    'What\'s the Difference Between Frontend, Backend, and Full Stack?': {
        intro: '',
        points: [
            { title: 'Frontend Development', text: 'Focuses on the user-facing part of the application, involving UI/UX design, responsiveness, and interactivity using technologies like HTML, CSS, JavaScript, and frameworks such as React or Angular.' },
            { title: 'Backend Development', text: 'Handles server-side logic, database management, and API integration using programming languages like Python, Node.js, or PHP. The backend ensures data integrity and robust application performance.' },
            { title: 'Full Stack Development', text: 'Combines the skills of both frontend and backend, enabling a full stack engineer to work across the entire application stack. This role streamlines development, reduces dependencies, and ensures a unified approach.' }
        ],
        outro: 'Choosing to hire Full Stack web developers from Alpixn Technologies means gaining a team capable of managing every layer of your application with technical precision and efficiency.'
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

// --- SECTIONS FOR HIRE FULL STACK DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top Full Stack Developers</h3>
        <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="Contact Number" className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Business Email" className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="Company Name" className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Describe Your Query" rows="4" className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">Submit</button>
        </form>
    </div>
);

const FullStackStrengthsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Core Strengths of Our Certified Full Stack Developers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {fullStackStrengths.map((service, index) => (
                        <motion.div key={index} className="bg-gray-800 p-8 rounded-lg text-center transform transition duration-500 hover:scale-105 hover:bg-gray-700"
                            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                            <div className="text-blue-400 mb-4 text-4xl mx-auto w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                                {/* Placeholder for icons */}
                                {service.icon.substring(0,2)}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const WhatYouGetSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
      <div ref={ref} className="py-24 bg-gray-900/50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Why Partner with Our Full Stack Development Team
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatYouGetFullStack.map((reason, index) => (
              <div key={reason.title} className={`p-8 bg-gray-800 rounded-2xl text-left transition-all duration-500 ease-out hover:bg-gray-700 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <h3 className="text-2xl font-bold text-blue-400 mb-3">{reason.title}</h3>
                <p className="text-gray-300 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-blue-400 font-semibold text-xl mt-12">Have a Question? <a href="#" className="underline hover:text-blue-300">Talk to an Expert ⊙</a></p>
        </div>
      </div>
    );
};

const TechExpertiseSection = () => {
    return (
        <div className="py-24 bg-black">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Expertise of Our Fullstack Developers</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {fullStackTechExpertise.map(tech => (
                        <div key={tech} className="text-center">
                            <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto flex items-center justify-center ring-1 ring-white/10">
                                <span className="text-white font-semibold text-lg">{tech}</span>
                            </div>
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
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>What Our Clients Say</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {clientTestimonials.slice(0, 3).map((testimonial, index) => (
                        <div key={index} className={`p-8 bg-gray-800 ring-1 ring-white/10 rounded-2xl transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                            <div className="font-bold text-white">{testimonial.author}</div>
                            <div className="text-sm text-gray-400">{testimonial.company}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ReliableSolutionsSection = () => {
    return(
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">Your Project Needs Innovative Approach with Our Skilled Full Stack Developers</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Our dedicated Full Stack developers for hire deliver scalable, secure, and performance-optimized solutions tailored to your business requirements and growth.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {fullStackSolutions.map((solution, index) => (
                        <div key={index} className="bg-gray-900/50 p-6 rounded-lg ring-1 ring-white/10 hover:ring-blue-500/50 transition-all">
                            <h3 className="text-2xl font-bold mb-3 text-blue-400">{solution.title}</h3>
                            <p className="text-gray-400">{solution.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeaturedCaseStudyFullStack = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Our Work Speaks for Itself</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Explore our success stories showcasing how businesses worldwide hire full stack developers from us to build scalable applications, streamline workflows, and achieve digital transformation efficiently.
                </p>
            </div>
            <div className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-800 ring-1 ring-white/10 rounded-2xl p-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-2/5">
                        <h3 className="text-3xl font-bold mb-2">FM Integrated</h3>
                        <p className="text-blue-400 font-semibold mb-4">Unify All FM Operations On A Single Platform To Enhance Efficiency And Cut Costs.</p>
                        <ul className="space-y-3 mb-6">
                             {['Analyzed client’s operations and FM trends, and followed a structured dev process.', 'Conducted constructive user testing sessions during the development phase.', 'The work order and management feature was added to create, assign, and track.', 'Enhanced facility managers to oversee service providers and suppliers.'].map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                         <div className="flex flex-wrap items-center gap-2">
                             {['USA', 'US', 'REACT', 'FACILITY MANAGEMENT'].map(tag => <div key={tag} className="text-xs font-semibold text-gray-300 bg-gray-700 px-3 py-1 rounded-full">{tag}</div>)}
                         </div>
                    </div>
                    <div className="w-full md:w-3/5">
                        <p className="text-gray-300 mb-6 text-lg">Integrated FM Group, a leading facility management provider, collaborated with Alpixn Technologies to streamline operations. The developed platform integrates work orders, asset management, preventive maintenance, and vendor management, enhancing efficiency and reducing costs.</p>
                        <img src={StaffAugmentationImage} alt="FM Integrated Case Study" className="rounded-xl shadow-2xl shadow-blue-500/10" />
                        <div className="text-center mt-6">
                            <button className="text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center gap-2 mx-auto">View Case Study <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const UserGuideSidebarFullStack = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentFullStack)[0]);
    const content = userGuideContentFullStack[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Hiring Full Stack Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentFullStack).map(topic => (
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
                            {content.intro && <p className="text-gray-400 mb-6 whitespace-pre-line">{content.intro}</p>}
                            <div className="space-y-6">
                                {content.points.map((point, index) => (
                                    <div key={index}>
                                        <h4 className="text-xl font-bold text-blue-400 mb-2">{point.title}</h4>
                                        <p className="text-gray-300 whitespace-pre-line">{point.text}</p>
                                    </div>
                                ))}
                            </div>
                            {content.outro && <p className="text-gray-400 mt-6 italic whitespace-pre-line">{content.outro}</p>}
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
};

const HiringStepsSection = () => {
    const steps = [
        { icon: 'call', title: 'Schedule a Call', description: 'Share your project details and developer requirements with our experts.' },
        { icon: 'group', title: 'Select Your Team', description: 'Interview and handpick the best developers tailored to your needs.' },
        { icon: 'monitor-progress', title: 'Start Your Project', description: 'We handle onboarding while you focus on launching your project seamlessly.' }
    ];

    return (
        <div className="py-24 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top Full Stack Developers in 3 Simple Steps</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mb-4">{index + 1}</div>
                            <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                            <p className="text-gray-400 max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>
                <button className="mt-12 bg-blue-500 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-600 transition text-lg">
                    Hire Top 1% Talent Now
                </button>
            </div>
        </div>
    );
};

const EngagementModelsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Engagement Models to Hire Best Full Stack Programmers</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies offers flexible engagement models for hiring Full Stack developers and providing custom solutions. Explore our engagement models to find the best fit for your development goals.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsFullStack.map((model, index) => (
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
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">FAQ's</h2>
                <div className="max-w-4xl mx-auto">
                    {faqsFullStack.map((faq, index) => (
                        <div key={index} className="border-b border-gray-700 py-4">
                            <button onClick={() => toggle(index)} className="w-full flex justify-between items-center text-left text-lg font-semibold">
                                <span className="text-white">{faq.q}</span>
                                <span className="text-blue-400 text-2xl">{open === index ? '−' : '+'}</span>
                            </button>
                            <motion.div initial={false} animate={{ height: open === index ? 'auto' : 0, opacity: open === index ? 1 : 0, marginTop: open === index ? '1rem' : '0' }} transition={{ duration: 0.3 }} className="overflow-hidden">
                                <p className="text-gray-400" dangerouslySetInnerHTML={{ __html: faq.a }}></p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


// --- MAIN PAGE COMPONENT ---
const HireFullStackPage = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 via-black to-black text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                <motion.div className="md:w-1/2"
                    initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire Vetted Full Stack Developers<br/>Onboard Full Stack Talents to Accelerate Your Digital Infrastructure</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Empower your business with our skilled full stack developers, proficient in end-to-end solutions across frontend & backend. From building dynamic web apps to custom platforms, our developers ensure high-performance outcomes.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Broad Full Stack Expertise</div>
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>100% Quality Assurance</div>
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>5+ Years Avg Experience</div>
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>NDA-Backed Confidentiality</div>
                    </div>
                </motion.div>
                <motion.div className="md:w-1/2 flex justify-center"
                    initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                    <HireDeveloperForm />
                </motion.div>
            </div>
          </div>
        </section>

        <TrustedBy backgroundColor="bg-white" />
        <FullStackStrengthsSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Transform Your Software Projects?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire Our Full Stack Developers
            </motion.button>
        </section>
        <WhatYouGetSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Build Scalable, Future-Ready Applications with Our Top Full Stack Developers
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Call
            </motion.button>
        </section>

        <FeaturedCaseStudyFullStack />
        <UserGuideSidebarFullStack />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireFullStackPage;