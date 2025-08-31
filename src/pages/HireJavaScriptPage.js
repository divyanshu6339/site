import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE JAVASCRIPT DEVELOPERS PAGE ---

const javaScriptStrengths = [
    { title: 'Custom JavaScript Development', description: 'Hire JavaScript experts to build bespoke solutions using modern frameworks and libraries, ensuring seamless user experiences.', icon: 'custom-javascript-development' },
    { title: 'Client-Side JavaScript Development', description: 'Our dedicated JavaScript developers excel at delivering dynamic, interactive client-side applications that elevate user engagement.', icon: 'client-side-javascript-development' },
    { title: 'Server-Side JavaScript Development', description: 'Our JavaScript developers are proficient in Node.js, delivering server-side applications that handle complex workflows and API integrations.', icon: 'server-side-javascript-development' },
    { title: 'App Modernization and Migration', description: 'Our JS experts modernize legacy apps by migrating them to modern frameworks like React or Vue.js, improving performance and maintainability.', icon: 'app-modernization-and-migration' }
];

const whatYouGetJavaScript = [
    { title: 'Expert Vetted Developers', description: 'At Alpixn Technologies, we offer expert-vetted JavaScript developers for hire who excel in delivering high-quality code. When you hire dedicated JavaScript developers from us, you’re choosing top-tier JS coders who bring experience and innovation to your projects.' },
    { title: 'Future-proof Applications', description: 'Our JavaScript consultancy ensures that you hire JavaScript developers who create future-proof applications. With our JavaScript developers for hire, your software will remain agile, scalable, and aligned with the latest industry standards.' },
    { title: 'Transparency and Integrity', description: 'We believe in maintaining transparency and integrity in all our JavaScript services. When you hire dedicated JavaScript developers from us, you’ll experience clear communication and a collaborative approach that ensures your project’s success.' },
    { title: 'Ongoing Maintenance & Support', description: 'Our commitment to you doesn’t end with project delivery. Our JavaScript programmers offer ongoing maintenance and support, ensuring your application runs smoothly. Trust our JavaScript consultancy for continuous improvements and troubleshooting.' }
];

const javaScriptTechExpertise = ['Angular', 'Babel', 'Eslint', 'Vuejs', 'Jquery', 'Lodash', 'React'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const javaScriptSolutions = [
    { title: 'JS-based Backend Development', description: 'Hire JavaScript engineers to build secure, scalable, and efficient backend architectures using Node.js, ensuring seamless data handling and API integration.' },
    { title: 'Single Page App Development', description: 'Find JavaScript developers to create fast, intuitive single-page applications (SPAs) using Vue.js and React.js, offering seamless navigation and real-time updates.' },
    { title: 'Mobile App Development', description: 'Hire dedicated JavaScript developers to build cross-platform mobile apps using frameworks like React Native, ensuring native-like performance and functionality.' },
    { title: 'Web Development', description: 'Our skilled JavaScript programmers excel in developing high-quality, responsive web applications with tailored features, scalability, and seamless user experiences.' },
    { title: 'Artificial Intelligence Apps', description: 'Hire JavaScript experts to integrate AI capabilities into applications, including natural language processing, machine learning, and predictive analytics for smarter solutions.' },
    { title: 'Game Development', description: 'Hire JavaScript development services to create interactive, browser-based games with real-time graphics and responsive design using modern JavaScript frameworks.' },
    { title: 'JavaScript Consulting', description: 'Hire JavaScript consultants to provide strategic guidance on architecture, performance optimization, and best practices, ensuring efficient and future-ready applications.' },
    { title: 'JavaScript Debugging and Testing', description: 'Our JS coders are skilled in advanced debugging and testing to eliminate bugs, ensure stability, and deliver robust application performance.' },
    { title: 'JS-based Frontend Development', description: 'Hire JavaScript coders skilled in advanced debugging and testing practices to eliminate bugs, ensure stability, and deliver robust application performance.' }
];

const engagementModelsJavaScript = [
    { title: 'Dedicated Team', description: 'Build a dedicated team of JavaScript developers exclusively focused on your project. Our experts ensure seamless integration, strategic alignment, and consistent progress tailored to your goals.', points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'] },
    { title: 'Staff Augmentation', description: 'Augment your in-house team with experienced JavaScript developers to bridge skill gaps, enhance productivity, and expedite project delivery—all while retaining your existing workflows.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Engage JavaScript developers on a project-specific model to deliver precise solutions within defined timelines. Ideal for targeted objectives, this approach guarantees efficiency and cost-effectiveness.', points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsJavaScript = [
    { q: 'What is JavaScript?', a: 'JavaScript is a high-level, versatile programming language primarily known for creating interactive and dynamic content on web pages. [20] It is a core technology of the World Wide Web, alongside HTML and CSS, and can be used for both client-side (in the browser) and server-side (with Node.js) development. [20, 10]' },
    { q: 'What skills should I look for when hiring a JavaScript developer?', a: 'A strong candidate should have a deep understanding of core JavaScript concepts (like ES6+, closures, and asynchronous programming), proficiency in HTML and CSS, and experience with modern frameworks like React, Angular, or Vue.js. [5, 9, 14] Familiarity with Node.js for backend tasks, version control with Git, and testing frameworks is also crucial. [9, 10, 19]' },
    { q: 'How much does it cost to hire a JavaScript developer?', a: 'The cost varies based on experience and location. In the US, average hourly rates are around $56, but can range from $25 for a junior developer to over $150 for a senior expert. [1, 6, 11, 21] Hiring from different regions or using freelance platforms can offer a wider range of pricing options. [3, 6]' },
    { q: 'What is the hiring engagement model at Alpixn Technologies?', a: 'We offer flexible engagement models including a Dedicated Team for long-term projects, Staff Augmentation to enhance your current team, and a Project-Based model for specific, well-defined tasks.' },
    { q: 'Will your JavaScript developer work according to my time zone?', a: 'Yes, our model is designed for global collaboration. We ensure that our remote developers have significant overlapping work hours with your time zone to facilitate smooth communication and teamwork.' },
    { q: 'Can I scale my team of JavaScript developers in the future?', a: 'Absolutely. Our engagement models are flexible, allowing you to easily scale your team up or down based on your project\'s evolving requirements and timelines.' },
    { q: 'How do I choose the best and trustworthy JavaScript developers for my project?', a: 'To choose the best developers, you should review their portfolio and past projects, check client references, conduct a thorough technical assessment, and ensure they have strong problem-solving and communication skills. [5, 14] Partnering with a reputable agency with a rigorous vetting process simplifies this selection.' },
    { q: 'Which questions are asked most often in JavaScript developer interviews?', a: 'Common interview questions cover topics like data types, the difference between `==` and `===`, closures, hoisting, promises, `async/await`, and the `this` keyword. [13, 17, 18, 20, 24] Candidates are also often asked to solve coding challenges involving data structures and algorithms. [13, 18]' },
    { q: 'How quickly can you hire a JavaScript developer with Alpixn Technologies?', a: 'Thanks to our pool of pre-vetted, expert developers, we can typically match you with the right candidate and begin the onboarding process within a few days to a week, significantly speeding up your hiring timeline.' },
    { q: 'Do you have certified JavaScript developers?', a: 'While JavaScript doesn\'t have one single official certification like other technologies, our developers often hold credentials from recognized institutions like the JavaScript Institute or from full-stack programs. [15, 16, 22, 23, 25] More importantly, every developer undergoes our rigorous internal vetting process to verify their expertise and skills.' },
    { q: 'Why should I hire JavaScript engineers from Alpixn Technologies?', a: 'You should hire from us to gain access to the top 1% of vetted JavaScript talent. We ensure future-proof applications, maintain complete transparency, provide ongoing support, and offer flexible hiring models to perfectly match your project\'s needs.' }
];

const userGuideContentJavaScript = {
    'What Type of JavaScript Developer Do You Need?': {
        intro: 'JavaScript is the backbone of modern web development, powering everything from dynamic user interfaces to robust server-side applications. Choosing the right type of JavaScript developer for your project ensures optimized performance and scalability. Here’s a breakdown of the different types of JavaScript expertise and their applications:',
        points: [
            { title: 'Frontend JavaScript Developers', text: 'Frontend JavaScript developers specialize in crafting interactive and responsive user interfaces using frameworks like React.js, Angular, or Vue.js.\n\nApplications: Single Page Applications (SPAs), Progressive Web Apps (PWAs), and real-time dashboards.\n\nHow We Help: Alpixn Technologies offers React.js for hire and other frontend experts to create seamless user experiences.' },
            { title: 'Backend JavaScript Developers', text: 'Backend developers utilize Node.js to build high-performance server-side solutions. These professionals excel at managing APIs, databases, and cloud integrations.\n\nApplications: Real-time messaging systems, e-commerce platforms, and enterprise-grade backend services.\n\nHow We Help: Hire JavaScript engineers from Alpixn Technologies for scalable and secure backend systems.' },
            { title: 'Full-Stack JavaScript Developers', text: 'Full-stack developers bring expertise in both frontend and backend JavaScript, enabling end-to-end development capabilities.\n\nApplications: Complete application development, from UI/UX to server logic and database management.\n\nHow We Help: Hire dedicated JavaScript developers for comprehensive solutions under one roof.' },
            { title: 'Specialized JavaScript Developers', text: 'These include JavaScript developers with niche skills, such as React.js, TypeScript, or specific tools like Webpack or Babel.\n\nApplications: Custom frameworks, advanced libraries, or complex system integrations.' }
        ]
    },
    'Tech Expertise of Javascript Developers': {
        intro: 'JavaScript developers possess a diverse set of technical proficiencies that enable them to build dynamic, interactive, and scalable applications. Whether working on the frontend, backend, or full-stack development, their expertise lies in leveraging the latest frameworks, tools, and best practices to meet your business needs.',
        points: [
            { title: 'Core JavaScript Proficiency', text: 'JavaScript developers are skilled in core programming concepts, including ES6+ syntax, closures, asynchronous programming, and modular design.\n\nWhy It Matters: Ensures clean, maintainable, and optimized codebases for high-performance applications.\n\nHow We Help: At Alpixn Technologies, you can hire JavaScript developers who excel in writing robust code for diverse use cases.' },
            { title: 'Frontend Development Expertise', text: 'Our developers specialize in frameworks like React.js, Angular, and Vue.js, ensuring seamless user experiences with highly interactive UIs.\n\nKey Strengths: Component-based architecture, state management, and responsive design.\n\nHire Now: Access React.js for hire or other JavaScript developers for hire to craft world-class user interfaces.' },
            { title: 'Backend Development with Node.js', text: 'Expertise in Node.js allows JavaScript developers to handle server-side scripting, build APIs, and integrate databases efficiently.\n\nApplications: Real-time applications, microservices, and cloud-based solutions.\n\nYour Benefit: Hire dedicated JavaScript developers to streamline your backend operations.' },
            { title: 'Advanced Toolchains and Ecosystem', text: 'JavaScript developers are adept at using tools like Webpack, Babel, ESLint, and Prettier, ensuring optimized workflows and error-free deployments.' }
        ]
    },
    'JavaScript Developer Roles and Responsibilities': {
        intro: 'When you hire JavaScript developers, understanding their roles and responsibilities ensures alignment with your project goals. Below are key contributions they make across different domains:',
        points: [
            { title: 'Frontend Developers', text: 'Implement interactive and user-friendly interfaces using frameworks like React.js, Vue.js, or Angular.\nEnsure cross-browser compatibility and responsive design.\nOptimize application performance through efficient coding practices.' },
            { title: 'Backend Developers', text: 'Develop RESTful APIs and manage server-side logic with Node.js.\nIntegrate databases such as MongoDB, PostgreSQL, or MySQL.\nEnsure secure data handling and system scalability.' },
            { title: 'Full-Stack Developers', text: 'Handle both client-side and server-side development tasks.\nCollaborate with UI/UX teams to deliver seamless user experiences.\nTroubleshoot and debug issues across the entire application stack.' },
            { title: 'Specialized Developers', text: 'Focus on niche areas like TypeScript, serverless architecture, or PWA development.\nContribute to scalable architecture designs and complex integrations.' }
        ]
    },
    'Hire the Best JavaScript Developers for Your Team': {
        intro: 'JavaScript has become the cornerstone of modern web and application development, powering dynamic interfaces, server-side operations, and seamless user experiences. Building a proficient team requires access to top-notch JavaScript talent who can meet your project’s unique demands. At Alpixn Technologies, we make it easy to hire JavaScript developers who are technically skilled and ready to deliver results.',
        points: [
            { title: 'Why You Need the Best JavaScript Developers', text: 'Versatile Skillset: JavaScript developers are adept at creating solutions ranging from simple websites to complex, scalable applications. Whether you’re looking to develop dynamic frontend interfaces or robust backend systems, hiring dedicated JavaScript experts ensures seamless execution.\n\nEfficiency with Modern Frameworks: JavaScript frameworks like React.js, Angular, and Node.js have revolutionized development. Find JavaScript developers proficient in these frameworks to deliver faster time-to-market and optimal performance.\n\nLong-Term Scalability: With the right team, you can ensure your application remains future-proof. Our dedicated JavaScript developers are skilled in designing scalable solutions, enabling your business to adapt to changing requirements.' },
            { title: 'Why Hire JavaScript Developers from Alpixn Technologies?', text: 'Specialized Expertise: We connect you with highly skilled JavaScript developers for hire who excel in modern frameworks, clean coding practices, and cross-platform development.\n\nFlexible Hiring Models: Whether you want to hire JavaScript engineers for a specific project or build an extended team, our models offer cost-effective solutions.\n\nProven Track Record: As a hire JavaScript development company, we have successfully delivered projects across various domains, including e-commerce, SaaS, and enterprise solutions.\n\nEnd-to-End Support: From consulting to deployment, we offer complete JavaScript development services for long-term success.' }
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

// --- SECTIONS FOR HIRE JAVASCRIPT DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top JavaScript Developers</h3>
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

const JavaScriptStrengthsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Core Strengths of Our JavaScript Programmers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {javaScriptStrengths.map((service, index) => (
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
                    Why Partner with Our Dedicated JavaScript Development Team
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatYouGetJavaScript.map((reason, index) => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Expertise of Our JavaScript Developers</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {javaScriptTechExpertise.map(tech => (
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
                    <h2 className="text-4xl md:text-5xl font-bold">Power Your Projects with Our Vetted JavaScript Developers</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Our JavaScript developers deliver cutting-edge solutions, leveraging extensive experience in front-end and back-end development to ensure high-performance, scalable, and secure applications.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {javaScriptSolutions.map((solution, index) => (
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

const FeaturedCaseStudyJavaScript = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Our Work Speaks for Itself</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Explore how Alpixn Technologies has empowered businesses globally with innovative JavaScript solutions, transforming ideas into robust, scalable, and impactful digital experiences.
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

const UserGuideSidebarJavaScript = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentJavaScript)[0]);
    const content = userGuideContentJavaScript[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Hire JavaScript Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentJavaScript).map(topic => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top JavaScript Developers in 3 Simple Steps</h2>
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Engagement Models to Hire Best JavaScript Programmers</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies offers flexible engagement models for JavaScript development services, providing custom solutions. Explore the ideal model for your project.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsJavaScript.map((model, index) => (
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
                    {faqsJavaScript.map((faq, index) => (
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
const HireJavaScriptPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire Vetted JavaScript Developers<br/>Recruit Elite JavaScript Programmers You Can Rely On</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Hire JavaScript developers to craft dynamic, responsive web applications. Our top-rated JS developers excel in React, Node.js, and TypeScript, delivering high-performance, scalable, and feature-rich solutions.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Advanced JavaScript Expertise</div>
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
        <JavaScriptStrengthsSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Transform Your Software Projects?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire Our Expert JavaScript Developers
            </motion.button>
        </section>
        <WhatYouGetSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Build Scalable, Future-Ready Solutions with Our Top JavaScript Developers
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Call
            </motion.button>
        </section>

        <FeaturedCaseStudyJavaScript />
        <UserGuideSidebarJavaScript />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireJavaScriptPage;