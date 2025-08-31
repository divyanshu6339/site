import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE REACT NATIVE DEVELOPERS PAGE ---

const reactNativeStrengths = [
    { title: 'Cross-Platform App Development', description: 'Our React Native developers craft seamless cross-platform applications to ensure efficient performance and consistent functionality on multiple devices.', icon: 'cross-platform-app-development' },
    { title: 'Full-Cycle React Native Apps Development', description: 'Hire expert React Native app developers for deep tech expertise and end-to-end solutions, from ideation and prototyping to deployment and support.', icon: 'full-cycle-react-native-apps-development' },
    { title: 'Modular Architecture Design', description: 'Our React Native programmers for hire implement modular designs to enhance app scalability, maintainability, and efficient integration.', icon: 'modular-architecture' },
    { title: 'React Native Code Audit and Optimization', description: 'We optimize code for enhanced performance, providing comprehensive audits to maintain high standards and seamless user experiences.', icon: 'react-native-code-audit-and-optimization' }
];

const whatYouGetReactNative = [
    { title: 'Cross-Platform Expertise', description: 'Leverage the capabilities of our expert React Native developers to build applications that seamlessly run across iOS and Android. Our team ensures code reusability, reducing development time while maintaining a native-like user experience.' },
    { title: 'Fast Time-to-Market', description: 'Accelerate your apps launch with our streamlined development process. By utilizing the robust features of React Native, our development team minimizes delays without compromising quality.' },
    { title: 'Performance Optimization', description: 'Our React Native experts ensure that your application is highly performant by optimizing memory usage, reducing load times, and enhancing responsiveness.' },
    { title: 'Real-Time Development Updates', description: 'Stay updated with the progress of your project through our transparent communication channels. When you hire React Native consultants or engage with our React Native software development team, youll receive real-time updates, ensuring every milestone aligns with your business goals.' }
];

const frontendDeveloperTech = ['React js Developer', 'Angular Developer', 'Vue js Developer', 'Javascript Developer', 'Next js Developer', 'Typescript Developer'];
const reactNativeTechExpertise = ['AXIOS', 'Expo', 'Fastlane', 'Jest', 'Paper', 'React Native'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overallcollaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const reactNativeSolutions = [
    { title: 'Native Module Development', description: 'Building efficient and reusable native modules to enhance functionality and meet specific app requirements with our React Native programmers.' },
    { title: 'Real-Time Features Implementation', description: 'Implementing dynamic real-time features like notifications and live updates with precision using our hire React Native development services.' },
    { title: 'React Native Web App Development', description: 'Delivering intuitive and engaging user interfaces with seamless UX integration for React Native applications by our hiring React Native designers.' },
    { title: 'Upgrade and Migration Services', description: 'Hire React Native experts to upgrade and migrate existing applications with minimal downtime, ensuring compatibility with the latest React Native versions.' },
    { title: 'Components and API Integration', description: 'Our React Native development company specializes in custom component design and API integration for enhanced app functionality tailored to your business needs.' },
    { title: 'React Native Team Augmentation', description: 'Hire dedicated React Native developers to expand your team, providing expertise and resources to accelerate project timelines and improve outcomes.' },
    { title: 'React Native iOS App Development', description: 'Hire expert React Native app developers to build high-quality iOS applications, delivering native-like experiences with optimized performance and elegant designs.' },
    { title: 'React Native Android App Development', description: 'Hire React Native mobile app developers for Android solutions that combine native performance with React Native’s agility, ensuring scalability and user satisfaction.' },
    { title: 'UI/UX Design and Integration', description: 'Hire React Native designers to create intuitive, visually appealing UI/UX designs and seamlessly integrate them for consistent, high-quality user experiences.' }
];

const engagementModelsReactNative = [
    { title: 'Dedicated Team', description: 'Build a dedicated team of React Native developers working exclusively on your project. Benefit from focused expertise, seamless collaboration, and steady progress tailored to your business objectives.', points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'] },
    { title: 'Staff Augmentation', description: 'Strengthen your existing team with experienced React Native developers to bridge skill gaps, enhance productivity, and speed up project delivery while maintaining your team’s workflow and structure.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Collaborate with React Native developers on a project-based model for efficient and goal-oriented delivery. Ideal for well-defined projects with specific timelines and requirements, ensuring cost-effective and timely outcomes.', points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsReactNative = [
    { q: 'Is React Native better than Flutter?', a: 'Both are excellent cross-platform frameworks. React Native is a great choice if your team has existing JavaScript or React expertise, as it allows for code reuse. [2, 10, 11] Flutter uses Dart and is known for its high performance and expressive UI, but has a steeper learning curve if your team is new to it. The "better" choice depends on your team\'s skills, project requirements, and performance needs. [2, 11]' },
    { q: 'Why should we consider React Native development?', a: 'React Native offers significant cost and time savings by allowing you to build for both iOS and Android from a single codebase. [1, 22] It has a large community, a rich ecosystem of libraries, and offers near-native performance, making it a powerful choice for cross-platform app development. [1]' },
    { q: 'Why should I choose React Native for app development?', a: 'You should choose React Native to reduce development costs, accelerate your time-to-market, and leverage your existing JavaScript/React talent. [1, 22] Its "learn once, write anywhere" paradigm and features like Hot Reloading make the development process faster and more efficient. [1, 22]' },
    { q: 'Can I use React Native to develop both iOS and Android applications?', a: 'Yes, absolutely. This is the primary advantage of React Native. It allows you to write most of your application\'s code in JavaScript and share it across both iOS and Android, significantly reducing development effort. [1, 5, 22]' },
    { q: 'What engagement models do you offer for hiring React Native developers?', a: 'We offer flexible engagement models, including a Dedicated Team for long-term projects, Staff Augmentation to supplement your existing team, and a Project-Based model for projects with a defined scope and timeline.' },
    { q: 'What are the advantages of hiring a dedicated React Native development team?', a: 'A dedicated team provides focused expertise on your project, leading to faster delivery and higher quality. [10, 15] It ensures seamless communication, allows for agile development, and offers the scalability to adapt to your project\'s changing needs. [10, 15]' },
    { q: 'What is the average cost of a React Native app development project?', a: 'The cost varies widely based on complexity. A simple app might cost between $15,000 and $30,000. [8, 18, 20] A more complex application with custom features and backend integration could range from $50,000 to over $200,000. [8, 18, 20] Developer hourly rates also vary by region. [8]' },
    { q: 'Is It Possible To Hire A React Native Developer For Project Or Hourly Work?', a: 'Yes, we offer flexible hiring options. You can hire developers for specific project-based tasks, on an hourly basis for smaller tasks or consultations, or on a full-time basis for ongoing development.' },
    { q: 'How to examine the quality of React Native Developers?', a: 'To examine a developer\'s quality, review their portfolio for past React Native projects, conduct a thorough technical interview covering core concepts and problem-solving, and consider a paid coding challenge that reflects your project\'s requirements. Checking references is also a valuable step.' },
    { q: 'Can I reuse or share my existing React web codebase for the Mobile app with React Native?', a: 'While you cannot directly reuse the UI components (React uses HTML tags like `<div>`, React Native uses components like `<View>`), you can share the business logic. [10, 13, 21] By structuring your code with hooks and state management libraries like Redux, a significant portion of the non-UI code can be shared between your web and mobile apps. [10, 13, 21]' },
    { q: 'How long does it take to build an app if we hire React Native developers from Alpixn Technologies?', a: 'The timeline depends on the app\'s complexity. A simple MVP can be built in 2-3 months. A full-featured app for both platforms typically takes 4-8 months. Our streamlined process and expert developers help to accelerate this timeline.' },
    { q: 'Can you help me migrate my project to React Native?', a: 'Yes, we provide migration services. We can help you migrate an existing native (iOS or Android) application or a web application to React Native, preserving your core features while leveraging the benefits of a cross-platform codebase.' },
    { q: 'Do you provide support and maintenance services after project completion?', a: 'Yes, we offer comprehensive post-launch support and maintenance services to ensure your app remains updated, secure, and performs optimally as operating systems and user needs evolve.' }
];

const userGuideContentReactNative = {
    'What is React Native?': {
        intro: 'React Native is an open-source framework developed by Facebook that enables developers to create high-performance mobile applications for both iOS and Android platforms using a single codebase. By leveraging the power of JavaScript and React’s declarative programming style, React Native allows developers to build applications with native-like performance and user experiences. This framework bridges the gap between web and mobile development, making it a popular choice for businesses looking to streamline their app development process.',
        points: [
            { title: 'Cross-Platform Development', text: 'React Native allows developers to write code once and deploy it across multiple platforms. This reduces development time and costs without compromising app performance.' },
            { title: 'Native Modules and Components', text: 'With its ability to integrate native modules, React Native ensures seamless performance, enabling apps to utilize device-specific functionalities such as cameras, GPS, and more.' },
            { title: 'Hot Reloading', text: 'This feature significantly enhances developer productivity by allowing real-time updates to code without restarting the entire application.' },
            { title: 'Extensive Community Support', text: 'React Native boasts a vibrant community of developers who contribute libraries, plugins, and tools, further accelerating the development process.' },
            { title: 'Reusable Components', text: 'The framework’s modular architecture enables developers to reuse components across different projects, ensuring consistency and efficiency.' }
        ],
        outro: 'Why Hire React Native Developers from Alpixn Technologies?\n\nAt Alpixn Technologies, we provide top-tier React Native programmers for hire who are skilled in creating robust and scalable mobile applications. Whether you’re planning to hire dedicated React Native developers for a specific project or seeking to hire a remote React Native developer for long-term collaboration, our team ensures high-quality solutions tailored to your business needs.\n\nOur Offerings Include:\n\nCustom App Development: Hire expert React Native app developers to build feature-rich, user-friendly applications.\nUI/UX Design: Collaborate with our React Native designers to create visually appealing and intuitive app interfaces.\nConsultation Services: Hire React Native consultants to guide your project from ideation to execution.\nEnd-to-End Development: Our dedicated React Native development team handles everything from prototyping to app deployment.'
    },
    'Is React Native front-end or back-end?': {
        intro: 'React Native is primarily a front-end framework designed for building user interfaces. It enables developers to create highly responsive and interactive mobile app interfaces using a single codebase. While React Native handles the presentation layer, it relies on back-end services and APIs for data management, server communication, and business logic. Developers can integrate React Native apps with various back-end technologies such as Node.js, Django, or Ruby on Rails to build comprehensive solutions. By decoupling the front-end and back-end layers, React Native ensures flexibility and allows teams to scale different components of their applications independently. When you hire React Native developers, ensure they have expertise in integrating the front-end with back-end APIs and services. This guarantees seamless communication between the app’s interface and its underlying functionality.',
        points: [
            { title: 'How to Find the Right React Native Developer', text: 'When you’re looking to hire React Native developers, consider the following steps:\n\nEvaluate Expertise: Look for professionals with a proven track record of building high-quality React Native applications.\nAssess Communication Skills: Since app development is a collaborative process, it’s crucial to hire React Native experts who can communicate effectively and understand your project goals.\nExplore Hiring Platforms: Some of the best sites to hire React Native developers include dedicated hiring platforms, freelance websites, and professional agencies specializing in React Native development.' }
        ]
    },
    'Can React Native be used for both Android and iOS development?': {
        intro: 'React Native is a powerful framework designed by Facebook that enables the development of mobile applications for both Android and iOS platforms using a single codebase. This cross-platform capability is one of the primary reasons businesses and developers choose to hire React Native developers for their projects.',
        points: [
            { title: 'Unified Codebase Advantage', text: 'When you hire a React Native expert, they can create applications that share up to 90% of the same code across Android and iOS. This reduces development time and costs significantly compared to building native applications for each platform separately.' },
            { title: 'Native Performance with JavaScript', text: 'React Native leverages JavaScript and native modules, ensuring high performance and a seamless user experience. Whether you’re looking to find React Native developers for building a complex app or hire React Native programmers for a simpler project, you can trust their ability to deliver near-native functionality and responsiveness.' },
            { title: 'Flexible Component Architecture', text: 'React Native offers reusable components, enabling React Native developers for hire to accelerate development cycles. These components render natively, ensuring that the app feels and performs like a native app on both platforms. Companies often hire React Native designers alongside developers to ensure the user interface aligns with platform-specific guidelines.' },
            { title: 'Access to Platform-Specific APIs', text: 'By using platform-specific code within the React Native framework, developers can integrate features that are exclusive to Android or iOS. When you hire remote React Native developers or collaborate with a React Native software development company, you can expect tailored solutions for each platform while maintaining a cohesive experience.' },
            { title: 'Ideal for MVPs and Full-Scale Applications', text: 'React Native is a top choice for developing MVPs (Minimum Viable Products) as well as full-scale enterprise applications. Whether you hire React Native consultants for initial strategy or a React Native development team for end-to-end development, the framework adapts to diverse business needs.' }
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

// --- SECTIONS FOR HIRE REACT NATIVE DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top React Native Developers</h3>
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

const ReactNativeStrengthsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Specialized Skills of Our React Native Developers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reactNativeStrengths.map((service, index) => (
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
                    Why Partner with Our Dedicated React Native Development Team
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatYouGetReactNative.map((reason, index) => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Expertise of Our React Native Developers</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {reactNativeTechExpertise.map(tech => (
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
                    <h2 className="text-4xl md:text-5xl font-bold">Hire React Native Developers for Reliable Software Solutions</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Scalable applications, expert developers, custom solutions, seamless integrations, cutting-edge technology, robust support, and future-proof development to drive your business’s digital transformation effortlessly.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reactNativeSolutions.map((solution, index) => (
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

const FeaturedCaseStudyReactNative = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Our Work Speaks for Itself</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Our dedicated React Native developers bring certified expertise in building high-performance cross-platform mobile applications. Skilled in advanced technologies, they craft scalable, feature-rich solutions tailored to your business needs.
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

const UserGuideSidebarReactNative = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentReactNative)[0]);
    const content = userGuideContentReactNative[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Hire React Native Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentReactNative).map(topic => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top React Native Developers in 3 Simple Steps</h2>
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Engagement Models to Hire Best React Native Programmers</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies offers flexible engagement models for React Native development services, providing customized solutions. Discover the ideal model for your project.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsReactNative.map((model, index) => (
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
                    {faqsReactNative.map((faq, index) => (
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
const HireReactNativePage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire React Native Developers<br/>Onboard Top 1% React Native Programmers for Your Project</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Hire React Native developers to build fast, cost-effective cross-platform apps for Android, iOS, and web. Our experts deliver premium solutions, reducing development time by up to 50% while ensuring exceptional performance and seamless user experiences.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Advanced React Native Expertise</div>
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
        <ReactNativeStrengthsSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Transform Your Software Projects?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire Our Expert React Native Developers
            </motion.button>
        </section>
        <WhatYouGetSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Build Scalable, Future-Ready Solutions with Our Top React Native Developers
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Call
            </motion.button>
        </section>

        <FeaturedCaseStudyReactNative />
        <UserGuideSidebarReactNative />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireReactNativePage;