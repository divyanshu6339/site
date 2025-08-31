import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE ANGULAR DEVELOPERS PAGE ---

const angularStrengths = [
    { title: 'Custom Angular Development', description: 'Hire Angular developers to create tailored, high-performance applications, ensuring robust architecture, seamless integrations, and scalable business solutions.', icon: 'custom-angular-development' },
    { title: 'Real-Time App Development', description: 'Our Angular programmers excel in building real-time apps like dashboards and messaging tools, offering live data synchronization and responsiveness.', icon: 'real-time-app-development' },
    { title: 'Web/Mobile App Dev', description: 'Hire Angular software experts to develop dynamic web and mobile apps, delivering feature-rich, cross-platform solutions with flawless performance.', icon: 'webmobile-app-dev' },
    { title: 'Angular UI/UX Development', description: 'Our Angular developers design interactive interfaces, merging component-based architecture with user-centric UI/UX for enhanced engagement and business impact.', icon: 'angular-uiux-development' }
];

const whatYouGetAngular = [
    { title: 'Services for Any TimeZone', description: 'We provide unparalleled flexibility by offering Angular development services that adapt to your time zone. Whether you need to hire offshore Angular developers or hire dedicated AngularJS developers, we ensure seamless collaboration across borders.' },
    { title: 'Agile Development Methodology', description: 'Our development process is rooted in agility, allowing us to deliver efficient, scalable solutions. When you hire an Angular developer from us, you’re guaranteed iterative updates and adaptability to your evolving project requirements.' },
    { title: 'Timely Delivery', description: 'We pride ourselves on meeting deadlines without compromising quality. As a trusted Angular development firm, our team of expert Angular programmers for hire ensures timely project completion with thorough testing.' },
    { title: 'Strong Technical Proficiency', description: 'Our Angular development team is composed of highly skilled professionals proficient in Angular frameworks. By hiring Angular software development services from us, you gain access to top AngularJS developers with extensive industry experience.' }
];

const angularTechExpertise = ['Rxjs', 'Primeng', 'Protector', 'Ngrx', 'Karma', 'jasmine', 'firebase', 'Angular-CLI'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const angularSolutions = [
    { title: 'Plugin and Module Development', description: 'Build custom Angular plugins and modules tailored to extend your application’s functionality, ensuring seamless integration and enhanced performance.' },
    { title: 'AJAX Development', description: 'Leverage AJAX with Angular to create dynamic, responsive, and fast-loading applications that deliver superior UX across platforms.' },
    { title: 'Single Page Application Development', description: 'Our Angular developers specialize in crafting SPAs that ensure faster load times, improved performance, and a smooth user experience.' },
    { title: 'Enterprise AngularJS Application', description: 'Develop robust, scalable, and secure enterprise-level AngularJS applications designed to meet complex business requirements and ensure seamless operations.' },
    { title: 'Angular Unit Testing', description: 'Ensure application reliability and performance with our expert Angular developers performing thorough unit testing for flawless functionality and bug-free solutions.' },
    { title: 'Upgradation & Migration', description: 'Upgrade legacy systems or migrate existing applications to Angular seamlessly, with minimal downtime and enhanced performance and scalability.' },
    { title: 'Front-End Application Development', description: 'Hire Angular developers to build interactive, responsive, and visually stunning front-end applications that align with your business goals.' },
    { title: 'Angular Support & Maintenance', description: 'Our dedicated Angular developers provide ongoing support and maintenance to ensure your applications run smoothly without disruptions.' },
    { title: 'Angular Consulting', description: 'Get expert guidance from our Angular consultants to strategize, architect, and optimize your Angular application development for maximum impact.' }
];

const engagementModelsAngular = [
    { title: 'Dedicated Team', description: 'Hire a dedicated Angular development team from Alpixn Technologies for long-term projects. Our dedicated team model offers you a full-time, expert Angular team focused entirely on your project’s success.', points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'] },
    { title: 'Staff Augmentation', description: 'Boost your in-house team by hiring top Angular developers from Alpixn Technologies. Our staff augmentation model seamlessly integrates skilled Angular developers into your existing team to enhance capabilities for specialized tasks.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Choose our project-based model to hire Angular developers for specific, time-sensitive projects. Alpixn Technologies delivers customized Angular solutions with a focus on timely delivery and exceptional quality.', points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsAngular = [
    { q: 'What types of applications can be developed using AngularJS?', a: 'AngularJS is ideal for building dynamic single-page applications (SPAs), enterprise web applications, and progressive web apps (PWAs). [20] Its powerful features, like two-way data binding and dependency injection, make it well-suited for creating complex, data-driven front-end interfaces for applications ranging from video streaming platforms to real-time data dashboards. [20, 23, 24]' },
    { q: 'What is AngularJS, and how does it differ from other JavaScript frameworks?', a: 'AngularJS (or Angular 1) is a JavaScript-based open-source framework by Google for building dynamic web applications. [20] Unlike libraries like React, which focus on the UI, AngularJS is a comprehensive MVC framework. [34] It differs from its successor, Angular (2+), which is TypeScript-based and has a component-based architecture, and from Vue.js, which is known for its simplicity and progressive adoption. [34]' },
    { q: 'Is AngularJS suitable for large-scale applications?', a: 'Yes, AngularJS has been used to build many large-scale applications due to its structured MVC architecture and features like dependency injection, which help manage complexity. [20, 23] However, for new large-scale projects, the modern Angular framework (Angular 2+) is generally recommended due to its superior performance, modularity, and better tooling. [25, 34]' },
    { q: 'What support and maintenance services do you offer for AngularJS applications?', a: 'We offer comprehensive support and maintenance services, including bug fixes, performance tuning, security patches, and feature enhancements to ensure your AngularJS application remains stable, secure, and aligned with your business needs.' },
    { q: 'How much does it cost to develop an AngularJS app?', a: 'The cost to develop an AngularJS app depends on factors like project complexity, features, and developer experience. Hourly rates for Angular developers can range from $25-$50 for junior developers to over $100-$150 for senior experts in the US and Europe. [41, 46, 48] A complete project can range from a few thousand dollars for a simple app to over $50,000 for a complex enterprise solution. [41, 42]' },
    { q: 'How much time will it take to develop an AngularJS project?', a: 'The development timeline varies based on the project\'s scope. A simple application with basic features might take 2-4 weeks. A medium-sized project could take 2-4 months, while a large-scale enterprise application with complex integrations could take 6 months or longer. [41, 42]' },
    { q: 'Do you provide after-sales support and maintenance?', a: 'Yes, we provide robust after-sales support and maintenance to ensure your application continues to perform optimally post-launch. This includes ongoing technical assistance, updates, and troubleshooting.' },
    { q: 'What are the benefits of outsourcing AngularJS web development?', a: 'Outsourcing offers access to a global talent pool of skilled developers, significant cost savings on salaries and infrastructure, and faster time-to-market. [3, 4, 7] It also provides flexibility to scale your team and allows you to focus on your core business activities. [3, 7]' },
    { q: 'Will I get post-development support?', a: 'Absolutely. Our engagement includes post-development support to handle any issues, perform necessary updates, and ensure the long-term stability and success of your application.' },
    { q: 'Can you help me complete my incomplete web/app development project?', a: 'Yes, our team can take over and complete partially finished projects. We begin with a thorough code audit to understand the current state and then create a strategic plan to complete the development and meet your goals.' },
    { q: 'We already have designs ready, can you work with those?', a: 'Yes, our developers are proficient at translating existing UI/UX designs from tools like Figma, Sketch, or Adobe XD into fully functional, pixel-perfect Angular applications.' },
    { q: 'How does AngularJS handle data binding and DOM manipulation?', a: 'AngularJS is known for its two-way data binding, which automatically synchronizes data between the model (JavaScript objects) and the view (HTML). [24] It manipulates the DOM using built-in directives like `ng-model`, `ng-bind`, and `ng-repeat` to create dynamic and interactive user interfaces. [20]' },
    { q: 'How does AngularJS support modular development and code organization?', a: 'AngularJS promotes modularity through its module system, which allows you to organize your code into separate components, controllers, services, and directives. [22] This separation of concerns, combined with its Model-View-Controller (MVC) architecture, helps in creating well-structured and maintainable applications. [20, 22]' },
    { q: 'What is dependency injection in AngularJS, and why is it important?', a: 'Dependency Injection (DI) is a core feature in AngularJS where components (like controllers and services) are given their dependencies rather than creating them internally. [23] This design pattern is important because it makes components more modular, reusable, and easier to test, as dependencies can be mocked during unit testing. [23]' },
    { q: 'How does AngularJS handle routing and navigation within an application?', a: 'AngularJS handles routing using its `ngRoute` module, which allows you to configure different views for different URLs, enabling the creation of Single Page Applications (SPAs). [21] For more complex routing scenarios, such as nested views and multiple named views, the third-party `UI-Router` library is often used. [21]' }
];

const userGuideContentAngular = {
    'Languages Used with Angular Framework': {
        intro: 'Angular is a powerful front-end framework that predominantly uses TypeScript as its primary programming language. TypeScript, a superset of JavaScript, enables developers to build scalable and maintainable applications with static typing and advanced tooling. Angular also relies on HTML for templating, allowing developers to create dynamic user interfaces. Additionally, CSS (and its pre-processors, such as SASS and LESS) is used to style the Angular applications, ensuring a polished user experience. When you hire Angular developers or an Angular development team, they leverage these languages to craft responsive, performant, and secure applications tailored to your needs. A hire Angular development company will ensure seamless integration of these languages to create a high-quality application architecture. For mobile apps, many businesses choose to hire AngularJS mobile app developers to build Progressive Web Apps (PWAs) that perform seamlessly on both desktop and mobile environments. Hiring AngularJS developers ensures that your mobile app development is both efficient and reliable, benefiting from Angular’s extensive ecosystem. If you’re looking to build a robust application, hire Angular software development agency or hire Angular development services to work with a dedicated Angular expert who can efficiently handle complex functionalities and deliver top-notch solutions.',
        points: []
    },
    'Similarities Between Angular and AngularJS': {
        intro: 'Angular and AngularJS are both robust frameworks developed by Google, but they share some fundamental similarities that make them widely used for building dynamic web applications. Here are the key common aspects:',
        points: [
            { title: 'Component-Based Architecture', text: 'Both Angular and AngularJS are built on a component-based structure, allowing developers to build modular applications. Whether you hire Angular developers or hire AngularJS developers, they work with reusable components to create scalable applications.' },
            { title: 'Dependency Injection', text: 'Both frameworks use dependency injection to enhance code modularity and testability. This ensures that services and components can be injected into one another, improving maintainability.' },
            { title: 'Two-Way Data Binding', text: 'AngularJS introduced two-way data binding, and Angular extended this concept with improvements. This allows seamless synchronization between the model and view, providing developers with a smooth and real-time UI experience.' },
            { title: 'Directives', text: 'Both frameworks use directives to extend HTML’s capabilities. These are used to create custom HTML elements or attributes, enhancing the flexibility of your web applications.' },
            { title: 'Routing', text: 'Both Angular and AngularJS provide robust routing capabilities, enabling developers to create single-page applications (SPAs) that load data dynamically without refreshing the entire page.' }
        ],
        outro: 'While AngularJS is still used for many legacy projects, hiring Angular experts or an Angular development team for modern applications ensures you leverage the latest advancements in performance, scalability, and maintainability offered by the newer Angular framework.'
    },
    'Hiring and Managing AngularJS Developers': {
        intro: 'When you hire AngularJS developers, it’s crucial to ensure they possess the right expertise in building dynamic, scalable web applications. AngularJS developers are skilled in structuring applications with MVC architecture, utilizing directives, and implementing two-way data binding to create seamless user experiences. To effectively manage an AngularJS development team, prioritize the following:\n\nTechnical Proficiency: Look for developers who are proficient in JavaScript, HTML, CSS, and RESTful APIs, as these are essential for building robust AngularJS applications.\nVersion Control Mastery: Ensure the team is familiar with version control systems like Git, enabling smooth collaboration and code management across development cycles.\nAgile Methodology: AngularJS projects benefit from agile processes, allowing for rapid iterations and flexibility in meeting client needs.\nEffective Communication: Ensure your AngularJS developers can effectively communicate complex technical solutions to non-technical stakeholders and collaborate well within the team.',
        points: [
            { title: 'Benefits of Hiring Dedicated AngularJS Developers', text: 'Hiring dedicated AngularJS developers offers several advantages, particularly when aiming for long-term application scalability and high performance:\n\nSpecialized Expertise: Dedicated AngularJS developers have in-depth knowledge of the framework, enabling them to create customized, efficient, and high-performing applications for your business needs.\nFaster Development Cycle: With dedicated developers focused on your project, the development timeline becomes more predictable, ensuring quicker time-to-market.\nCost Efficiency: Hiring AngularJS developers on a dedicated basis allows you to avoid overhead costs associated with full-time in-house teams while ensuring consistent project focus.\nSeamless Integration: Dedicated developers can smoothly integrate AngularJS with other technologies and systems, such as APIs or databases, ensuring a fully functional application ecosystem.\nEnhanced Security and Compliance: By hiring AngularJS development services, you can ensure your application follows industry-standard security protocols, keeping sensitive user data secure.' }
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

// --- SECTIONS FOR HIRE ANGULAR DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top Angular Developers</h3>
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

const AngularStrengthsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Specialized Skills of Our Skilled Angular Developers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {angularStrengths.map((service, index) => (
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
                    Why Partner with Our Dedicated Angular Development Team
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatYouGetAngular.map((reason, index) => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Expertise of Our Angular Developers</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {angularTechExpertise.map(tech => (
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
                    <h2 className="text-4xl md:text-5xl font-bold">Hire Best Angular Developers for Custom Solutions</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Our top-rated Angular developers deliver dynamic, scalable, and high-performance front-end solutions, ensuring seamless user experiences, responsive designs, and robust application architecture tailored to meet your unique business requirements.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {angularSolutions.map((solution, index) => (
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

const FeaturedCaseStudyAngular = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Our Work Speaks for Itself</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Explore our successful Angular development projects that showcase our skilled Angular developers delivering scalable, high-performance web applications. See how we’ve helped businesses achieve their goals with innovative, customized solutions.
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

const UserGuideSidebarAngular = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentAngular)[0]);
    const content = userGuideContentAngular[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Hire Angular Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentAngular).map(topic => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top Angular Js Developers in 3 Simple Steps</h2>
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Engagement Models to Hire Best Angular Programmers</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies offers flexible engagement models for Angular development services, providing tailored solutions to meet your specific requirements. Discover our engagement models designed to optimize your project outcomes.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsAngular.map((model, index) => (
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
                    {faqsAngular.map((faq, index) => (
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
const HireAngularPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire Certified Angular Developers<br/>Onboard Top-Rated Programmers for Your Projects</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Transform your ideas into powerful web solutions with our Angular developers, building feature-rich, high-performance front-end interfaces for applications that engage and delight users.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Advanced Angular.js Expertise</div>
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
        <AngularStrengthsSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Transform Your Software Projects?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire Our Expert Angular Developers
            </motion.button>
        </section>
        <WhatYouGetSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Build Scalable, Future-Ready Applications with Our Top Angular.js Developers
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Call
            </motion.button>
        </section>

        <FeaturedCaseStudyAngular />
        <UserGuideSidebarAngular />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireAngularPage;