import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE REACTJS DEVELOPERS PAGE ---

const reactStrengths = [
    { title: 'ReactJS Product Development', description: 'We build scalable, high-performing ReactJS products tailored to your business needs, utilizing the latest libraries and frameworks for efficiency.', icon: 'reactjs-product-development' },
    { title: 'Front-End Development', description: 'Our developers craft intuitive, responsive interfaces by leveraging React’s virtual DOM and functional-based architecture.', icon: 'front-end-development' },
    { title: 'Custom Web App Solution', description: 'Develop dynamic, user-centric web applications with a team of experts skilled in ReactJS, ensuring modular and reusable components.', icon: 'custom-web-app-solution' },
    { title: 'ReactJS Website Migration', description: 'Migrate your existing web platforms to ReactJS with zero downtime, ensuring modern, optimized, and secure applications.', icon: 'reactjs-website-migration' }
];

const whatYouGetReact = [
    { title: 'Profound Expertise', description: 'Our ReactJS developers for hire bring years of hands-on experience, ensuring scalable, high-performance applications tailored to your needs. We specialize in React’s ecosystem, offering efficient state management, reusable components, and seamless integration with existing systems.' },
    { title: 'User-Centric Approach', description: 'Our dedicated React developers for hire prioritize end-user experience by delivering intuitive interfaces and lightning-fast performance. We utilize React’s component-based architecture to create modular, visually stunning, and user-friendly designs tailored to your business goals.' },
    { title: 'Code Quality and Security', description: 'Hire a ReactJS development company that follows strict coding standards and secure development practices. Our team ensures robust, error-free code through meticulous testing, adhering to the latest ReactJS guidelines to protect your application against vulnerabilities.' },
    { title: 'Post-launch Support', description: 'When you hire ReactJS development services with us, you get continuous support after deployment. From updates to troubleshooting, our experts ensure your application evolves seamlessly, delivering reliability and peak performance over its lifecycle.' }
];

const reactTechExpertise = ['Redux', 'Redux Query', 'ESLint', 'Webpack', 'JavaScript', 'TypeScript', 'Babel'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const reactSolutions = [
    { title: 'Enterprise App Development', description: 'Leverage ReactJS to build scalable, high-performance enterprise-grade applications tailored to your business needs with our top ReactJS developers.' },
    { title: 'PWA & SPA Development', description: 'Build Progressive Web Applications (PWA) and Single Page Applications (SPA) that ensure fast loading, offline capabilities, and exceptional user experiences.' },
    { title: 'Mobile App Development', description: 'Empower your business with cross-platform mobile apps built using React Native for a consistent experience across iOS and Android platforms.' },
    { title: 'React Native App Development', description: 'Develop cross-platform mobile apps with React Native, enabling faster deployment and consistent performance across iOS and Android platforms.' },
    { title: 'ReactJS Plugin Development', description: 'We provide dedicated ReactJS developers for creating robust, reusable plugins tailored to enhance your application’s efficiency and flexibility.' },
    { title: 'ReactJS UI/UX Development', description: 'Our dedicated ReactJS developers craft stunning, intuitive UI/UX designs that elevate your application’s usability and appeal to end-users.' },
    { title: 'Real-time Apps Development', description: 'Develop real-time applications with features like live chat, notifications, and updates, powered by ReactJS’s efficient state management capabilities.' },
    { title: 'eCommerce Development', description: 'Create high-performing, visually appealing eCommerce platforms that offer seamless user experiences and scalability.' },
    { title: 'ReactJS Consulting Services', description: 'Gain strategic insights and tailored solutions for scalable, high-performance applications with our ReactJS consulting services.' }
];

const engagementModelsReact = [
    { title: 'Dedicated Team', description: 'Hire ReactJS developers from Alpixn Technologies for long-term projects. Our dedicated team model provides you with a full-time, skilled ReactJS team exclusively focused on your project.', points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'] },
    { title: 'Staff Augmentation', description: 'Strengthen your in-house capabilities by hiring ReactJS coders from Alpixn Technologies. Our staff augmentation model seamlessly integrates top ReactJS developers into your team for specific tasks.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Choose our project-based model to hire ReactJS programmers for specific, time-bound projects. Alpixn Technologies ensures custom ReactJS solutions, timely delivery, and exceptional quality for your web development needs.', points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsReact = [
    { q: 'What is your hiring model?', a: 'Our hiring model is flexible, allowing you to hire ReactJS developers on a full-time, part-time, or hourly basis, depending on your project’s requirements. We ensure that you can hire dedicated ReactJS developers tailored to your needs.' },
    { q: 'How much does developing a ReactJS app cost?', a: 'The cost to develop a ReactJS app varies widely based on complexity, features, and the development team\'s location. A simple application might cost between $5,000 and $15,000, while a complex one could exceed $50,000. [1, 39, 42] Developer hourly rates also differ, ranging from $20-$50 for junior developers in regions like India to over $100-$200 for senior developers in the US or Western Europe. [1, 17]' },
    { q: 'Can you provide some examples of platforms built using ReactJS?', a: 'Many of the world\'s leading companies use ReactJS to power their platforms. Notable examples include Facebook, Netflix, Instagram, Airbnb, Twitter, WhatsApp, and Tesla. [2, 8, 28, 36] These companies leverage React for its performance, scalability, and ability to create dynamic user interfaces.' },
    { q: 'Do you offer bug-fixing services?', a: 'Yes, bug-fixing is an integral part of our post-launch support and maintenance services. We ensure your application remains stable and performs optimally by addressing any issues that arise after deployment.' },
    { q: 'What is the difference between ReactJS and React Native?', a: 'ReactJS is a JavaScript library for building user interfaces for web applications that run in a browser. [5, 22] In contrast, React Native is a framework for building native mobile applications for iOS and Android from a single codebase. [5, 12, 18] While ReactJS uses web technologies like HTML and CSS for rendering, React Native uses native UI components, giving mobile apps a truly native look and feel. [19, 22]' },
    { q: 'What is the difference between React, Angular, and Vue?', a: 'React is a flexible UI library with a vast ecosystem, ideal for single-page applications and interactive UIs. [6, 24] Angular is a comprehensive, full-fledged framework by Google, often used for large, enterprise-scale applications due to its structured nature. [6, 35] Vue is known for its simplicity and ease of learning, making it a great choice for startups and rapid prototyping. [24, 35, 45]' },
    { q: 'What are the benefits of outsourcing ReactJS web development?', a: 'Outsourcing ReactJS development provides access to a global pool of skilled developers, significant cost savings, and faster time-to-market. [3, 4, 7] It allows your in-house team to focus on core business functions while the outsourced team handles the technical development, ensuring flexibility and scalability. [3, 7, 23]' },
    { q: 'How long does it take to build a React.js-based app?', a: 'The timeline for building a React app depends on its complexity. A simple, static website might take 1-2 weeks. [37] A medium-complexity app with interactive features could take 2-6 months, while a large-scale, complex application may require several months to over a year of development. [13, 26, 37]' },
    { q: 'Will I get post-development support?', a: 'Yes, post-development support is a standard part of our service. We offer comprehensive maintenance, including regular updates, security patches, and performance monitoring, to ensure your application runs smoothly long after its initial launch.' },
    { q: 'Can you help me complete my incomplete web/app development project?', a: 'Yes, we can take over and complete ongoing or stalled projects. Our team will conduct a thorough analysis of the existing codebase and work with you to define a clear roadmap to successfully complete and launch your application.' },
    { q: 'We already have designs ready, can you work with those?', a: 'Absolutely. Our developers are experienced in working with existing UI/UX designs from platforms like Figma, Sketch, or Adobe XD. We can translate your design mockups into a fully functional, pixel-perfect ReactJS application.' },
    { q: 'What are the key considerations when seeking a leading ReactJS development company?', a: 'Key considerations include evaluating the company\'s portfolio and experience, checking client reviews and testimonials, and assessing their technical expertise in the React ecosystem. [30, 32, 34] It\'s also crucial to understand their development process, communication practices, and post-launch support policies. [30, 34]' },
    { q: 'How can I track development progress?', a: 'Progress is tracked using Agile methodologies and project management tools like Jira or Trello. [43, 44] We provide regular updates through sprint burndown charts, Kanban boards, and frequent communication to ensure you have full visibility into the project\'s status and velocity. [27, 44, 46]' },
    { q: 'How will you ensure the confidentiality of my project?', a: 'We ensure project confidentiality by signing a Non-Disclosure Agreement (NDA) before starting any work. All team members are bound by strict confidentiality clauses, and we implement secure development practices to protect your intellectual property.' },
    { q: 'Why should I hire expert React developers from your company?', a: 'Hiring our expert React developers gives you access to a pre-vetted team with proven expertise in building high-quality, scalable, and secure applications. [47] We offer a user-centric approach, adhere to strict code quality standards, and provide robust post-launch support to ensure your project’s success.' },
    { q: 'What is the benefit of hiring vetted React JS developers?', a: 'Hiring vetted developers mitigates risk and ensures you get high-quality talent with proven technical and soft skills. It saves you time and resources on the recruitment process, accelerates project timelines, and leads to a more reliable and maintainable final product.' },
    { q: 'Why should I hire offshore React JS developers?', a: 'Hiring offshore React developers offers significant cost advantages and access to a larger, global talent pool. [9, 11] It enables faster project timelines through round-the-clock development and provides flexibility to scale your team as needed. [9, 21]' },
    { q: 'How do I hire remote React JS developers?', a: 'The process involves defining your project needs, after which we provide a shortlist of pre-vetted candidates. You can then interview the developers to assess their skills and cultural fit. Once selected, we handle the onboarding process, allowing you to integrate the new remote team members seamlessly into your workflow.' }
];

const userGuideContentReact = {
    'Process of Hiring ReactJS Developers': {
        intro: 'Hiring ReactJS developers is a meticulous process that requires careful consideration of skills, project requirements, and engagement models. Here’s a comprehensive guide to help you navigate the process effectively:',
        points: [
            { title: 'Step 1: Define Your Project Scope and Requirement', text: 'Start by identifying the specific goals of your project. Whether you’re looking to hire ReactJS developers to build a dynamic single-page application (SPA), optimize performance, or integrate complex APIs, having a well-defined scope ensures that you find React developers with the right expertise.' },
            { title: 'Step 2: Identify the Key Skills for ReactJS Developers', text: 'When you hire ReactJS programmers, focus on the following skill set:\n\nProficiency in ReactJS Framework: Knowledge of JSX, virtual DOM, and component lifecycle methods.\nState Management Expertise: Familiarity with Redux, Context API, or MobX for managing application states.\nUI/UX Optimization: Ability to design responsive and interactive user interfaces.\nBackend Integration: Experience working with RESTful APIs or GraphQL for seamless data flow.\nTool Proficiency: Command over Webpack, Babel, NPM, and testing frameworks like Jest and Enzyme.' },
            { title: 'Step 3: Choose the Right Engagement Model', text: 'Selecting the right engagement model is crucial for aligning with your project needs:\n\nHire Dedicated ReactJS Developers: Ideal for long-term projects requiring constant updates and collaboration.\nHire a ReactJS Developer for Team Augmentation: Seamlessly integrate experienced ReactJS developers into your existing team for specific tasks or expertise.\nHire ReactJS Development Agency: Engage a full-service agency for end-to-end project development and management.' },
            { title: 'Step 4: Find React Developers on the Right Platforms', text: 'You can find React developers on professional networks like LinkedIn, or partner with trusted companies like Alpixn Technologies. Our extensive pool of top React developers ensures you’ll find the right talent for your project.' },
            { title: 'Step 5: Evaluate Technical Expertise', text: 'Before you hire a ReactJS developer, conduct technical interviews to assess their understanding of:\n\nReactJS architecture and reusable components.\nPerformance optimization techniques.\nDebugging and problem-solving skills using developer tools and testing frameworks.' },
            { title: 'Step 6: Hire ReactJS Development Consultants for Complex Need', text: 'For intricate requirements, hire ReactJS consulting experts who can provide strategic guidance and innovative solutions tailored to your business.' },
            { title: 'Step 7: Understand Costs and Flexibility', text: 'Whether you’re hiring offshore ReactJS developers or opting for ReactJS developers on an hourly rate, ensure transparency in pricing and flexibility in terms of scaling the team up or down.' },
            { title: 'Step 8: Onboard the Developer or Team', text: 'Once you hire ReactJS developers, onboard them with clear documentation, access to project tools, and regular communication channels. This ensures a smooth start and aligns expectations.' }
        ],
        outro: 'At Alpixn Technologies, we offer dedicated React developers for hire, skilled in delivering robust, scalable solutions. As a trusted ReactJS development company, we cater to diverse project requirements, ensuring seamless collaboration, timely delivery, and exceptional results.'
    },
    'Advantages Of Having Dedicated React.js Developers For Your Projects': {
        intro: 'Hiring dedicated ReactJS developers can revolutionize your project’s development process and ensure seamless delivery of robust applications. Here are the key advantages of hiring ReactJS developers for your project:',
        points: [
            { title: 'Specialized Expertise in ReactJS Development', text: 'Dedicated ReactJS developers possess in-depth knowledge of the ReactJS ecosystem, including advanced concepts like:\n\nComponent-based architecture for modular code development.\nEfficient state management with Redux, Context API, or MobX.\nReact Router for building dynamic single-page applications (SPAs).\nWhen you hire dedicated ReactJS developers, you gain access to professionals with expertise in creating highly responsive, scalable, and dynamic applications.' },
            { title: 'Faster Project Completion', text: 'Dedicated React developers work exclusively on your project, ensuring focused attention and faster delivery. By partnering with a ReactJS development company like Alpixn Technologies, you eliminate delays caused by shared resources and streamline your workflow.' },
            { title: 'Custom Software Solutions for Your Unique Needs', text: 'When you hire a React developer, you get tailored solutions designed to meet your business goals. Dedicated developers ensure:\n\nCustom UI/UX development to enhance user experience.\nFlexible integrations with third-party services and APIs.\nOptimization of application performance and scalability.' },
            { title: 'Cost-Effective Development with Flexibility', text: 'Hiring dedicated ReactJS developers allows you to choose the engagement model that aligns with your budget and project scope. You can opt for hourly rates, offshore React development, or fixed-term contracts depending on your needs.' },
            { title: 'Ongoing Maintenance and Support', text: 'Dedicated ReactJS developers not only build your application but also provide ongoing maintenance. From bug fixes to feature upgrades, hiring ReactJS development consultants ensures your software stays relevant and efficient over time.' },
            { title: 'Seamless Collaboration and Communication', text: 'Hire dedicated ReactJS programmers to become an integrated part of your team. This collaboration ensures:\n\nTransparent communication through agile methodologies.\nQuick adaptability to changes in project requirements.\nDirect access to developers for real-time progress updates.' },
            { title: 'Enhanced Security and Data Privacy', text: 'ReactJS experts follow best practices to secure your application. From safeguarding user data to implementing secure authentication protocols, hiring ReactJS developers ensures that your app adheres to stringent security standards.' }
        ]
    },
    'React JS Developers': {
        intro: 'When you decide to hire top React JS developers, it’s essential to prioritize specific technical skills and expertise that will contribute to the success of your project. React.js is a powerful JavaScript library that allows developers to build fast, scalable, and dynamic user interfaces.',
        points: [
            { title: 'Proficiency in JavaScript and ES6+', text: 'React.js is built on JavaScript, and a strong understanding of JavaScript fundamentals is crucial for any React developer. Look for developers who are proficient in JavaScript, particularly ES6+ features, such as arrow functions, destructuring, async/await, and modules.' },
            { title: 'Deep Understanding of React.js and Component-Based Architecture', text: 'One of the primary reasons to hire ReactJS developers is their expertise in React’s component-based architecture. Developers should be adept at creating reusable, modular components that improve code maintainability and scalability. Top React JS developers will be comfortable working with React Hooks, managing state effectively, and ensuring smooth data flow between components using tools like Redux or Context API.' },
            { title: 'Experience with Modern Web Development Tools and Libraries', text: 'Modern web development requires a range of tools to streamline the development process. For example, ReactJS development team members should be familiar with webpack, Babel, ESLint, and Prettier to optimize development workflows, ensure code quality, and automate tasks.' },
            { title: 'Proficiency in Front-End Frameworks and Styling Solutions', text: 'React developers should be comfortable with various front-end frameworks, CSS preprocessors, and styling libraries to build responsive and aesthetically pleasing user interfaces. Developers who specialize in React are typically familiar with libraries like Styled Components or Material-UI, which streamline UI development and improve the user experience.' },
            { title: 'API Integration and Handling Asynchronous Data', text: 'React developers often need to work with APIs to fetch, display, and update data. It’s important to hire ReactJS developers who are proficient in working with both RESTful APIs and GraphQL to retrieve and manipulate data. Handling asynchronous data correctly is crucial for building fast and responsive web applications.' },
            { title: 'Testing and Debugging Skills', text: 'One of the most essential skills for any developer is the ability to test and debug their code. React JS developers should be familiar with testing tools such as Jest, Mocha, and React Testing Library. Testing is crucial for ensuring that your app is reliable and bug-free, particularly as it scales.' },
            { title: 'Version Control and Collaboration Tools', text: 'Most modern development projects involve collaboration and version control. A proficient ReactJS development team should be skilled in using tools like Git for version control and platforms like GitHub or GitLab for collaboration. This allows developers to work seamlessly in distributed teams, whether you hire offshore React JS developers or local teams.' }
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

// --- SECTIONS FOR HIRE REACTJS DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top React Developers</h3>
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

const ReactStrengthsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Excellence of Our React Developers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reactStrengths.map((service, index) => (
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
                    Why Partner with Our Dedicated React Development Team
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatYouGetReact.map((reason, index) => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Expertise of Our React Developers</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {reactTechExpertise.map(tech => (
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
                    <h2 className="text-4xl md:text-5xl font-bold">Our Top-Rated React Developers Offer</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Our ReactJS developers excel in creating dynamic, scalable applications, offering expertise in ReactJS frameworks, component-based architecture, performance optimization, and seamless integration with APIs, ensuring exceptional user experiences and robust solutions.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reactSolutions.map((solution, index) => (
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

const FeaturedCaseStudyReact = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Our Work Speaks for Itself</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Dive into our journey to see how our dedicated ReactJS developers have delivered scalable, dynamic, and user-centric solutions, transforming ideas into impactful applications for businesses across diverse industries.
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

const UserGuideSidebarReact = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentReact)[0]);
    const content = userGuideContentReact[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Hire React Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentReact).map(topic => (
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
                            {content.intro && <p className="text-gray-400 mb-6">{content.intro}</p>}
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

const HiringStepsSection = () => {
    const steps = [
        { icon: 'call', title: 'Schedule a Call', description: 'Share your project details and developer requirements with our experts.' },
        { icon: 'group', title: 'Select Your Team', description: 'Interview and handpick the best developers tailored to your needs.' },
        { icon: 'monitor-progress', title: 'Start Your Project', description: 'We handle onboarding while you focus on launching your project seamlessly.' }
    ];

    return (
        <div className="py-24 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top React Developers in 3 Simple Steps</h2>
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Engagement Models to Hire Best React Developers</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies offers flexible engagement models for ReactJS development services and delivers custom solutions. Explore the ideal model for your project.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsReact.map((model, index) => (
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
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">FAQs</h2>
                <div className="max-w-4xl mx-auto">
                    {faqsReact.map((faq, index) => (
                        <div key={index} className="border-b border-gray-700 py-4">
                            <button onClick={() => toggle(index)} className="w-full flex justify-between items-center text-left text-lg font-semibold">
                                <span className="text-white">
                                    <span className="text-blue-400 font-bold mr-2">{String(index + 1).padStart(2, '0')}</span>
                                    {faq.q}
                                </span>
                                <span className="text-blue-400 text-2xl">{open === index ? '−' : '+'}</span>
                            </button>
                            <motion.div initial={false} animate={{ height: open === index ? 'auto' : 0, opacity: open === index ? 1 : 0, marginTop: open === index ? '1rem' : '0' }} transition={{ duration: 0.3 }} className="overflow-hidden">
                                <p className="text-gray-400 pl-8" dangerouslySetInnerHTML={{ __html: faq.a }}></p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


// --- MAIN PAGE COMPONENT ---
const HireReactJSPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire ReactJS Developers<br/>Best React Programmers for Your Project</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Experience seamless scalability and performance with certified ReactJS developers, delivering dynamic, high-performing front-end solutions to build interactive, user-centric web applications quickly and efficiently.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Advanced ReactJS Expertise</div>
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
        <ReactStrengthsSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Transform Your Software Projects?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire Our Expert React Developers
            </motion.button>
        </section>
        <WhatYouGetSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Build Scalable, Future-Ready Applications with Our Top React Js Developers
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Call
            </motion.button>
        </section>

        <FeaturedCaseStudyReact />
        <UserGuideSidebarReact />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireReactJSPage;