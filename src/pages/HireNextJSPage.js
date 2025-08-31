import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE NEXT.JS DEVELOPERS PAGE ---

const nextJsStrengths = [
    { title: 'Next.js Custom Development', description: 'Leverage custom solutions tailored to your business needs by skilled Next.js developers for hire, ensuring high-performance applications.', icon: 'nextjs-custom-development' },
    { title: 'Cross-platform Development', description: 'Build responsive, platform-agnostic solutions by hiring the best Next.js developers, ensuring seamless performance across web and mobile.', icon: 'cross-platform-development' },
    { title: 'Next.js App Design', description: 'Deliver intuitive user interfaces and exceptional user experiences with a hire Next.js development team committed to design innovation.', icon: 'nextjs-app-design' },
    { title: 'Next.js Plugin Development', description: 'Extend application functionality with plugins built by hire dedicated Next.js developers, adhering to coding standards and scalability goals.', icon: 'nextjs-plugin-development' }
];

const whatYouGetNextJs = [
    { title: 'Agile Working Model', description: 'With our hire next.js development team, experience seamless project execution using agile methodologies, ensuring flexibility, adaptability, and continuous improvement throughout the development lifecycle.' },
    { title: 'Top 1% Developers', description: 'Hire top Next.js developers with proven expertise in building high-performance, scalable applications. Our certified developers deliver exceptional results, leveraging the latest tools and frameworks for your business success.' },
    { title: 'Rapid Project Launch', description: 'Accelerate time-to-market by hiring a team of Next.js developers who excel in rapid prototyping and efficient deployment without compromising quality or functionality.' },
    { title: 'Ongoing Maintenance & Support', description: 'Hire remote Next.js developers for comprehensive post-launch support, performance optimization, and feature upgrades, ensuring your application remains future-ready and reliable.' }
];

const nextJsTechExpertise = ['Cypress', 'Graph QL', 'Next Js', 'Prisma', 'Redux Query', 'Redux', 'Sass', 'Tailwind Css'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const nextJsSolutions = [
    { title: 'Next.js Web Development', description: 'Hire Next.js programmers to craft dynamic, high-performance web applications tailored to your business goals using modern development practices.' },
    { title: 'Next.js Integration Services', description: 'Streamline your application’s ecosystem with seamless integration solutions by hiring dedicated Next.js developers to connect APIs and third-party services.' },
    { title: 'Next.js Static Site Generation (SSG)', description: 'Leverage Static Site Generation by Next.js developers for hire to create optimized, SEO-friendly pre-rendered pages for exceptional performance.' },
    { title: 'Next.js Server-Side Rendered Apps', description: 'Enhance user experience with server-side rendered apps built by skilled Next.js developers for hire, ensuring speed, SEO, and scalability.' },
    { title: 'Next.js Consulting Services', description: 'Hire a team of Next.js developers to provide expert advice and actionable strategies for optimizing your Next.js application architecture.' },
    { title: 'Next.js Upgradation and Migration', description: 'Modernize your digital infrastructure by hiring Next.js developers for seamless migrations and upgrades to the latest Next.js version.' },
    { title: 'Next.js Maintenance and Support', description: 'Ensure ongoing reliability with post-deployment support by hiring the best Next.js developers for performance monitoring and issue resolution.' },
    { title: 'Turnkey Development', description: 'Launch end-to-end Next.js projects efficiently with remote Next.js developers, delivering complete solutions from concept to deployment.' },
    { title: 'Next.js E-commerce Solutions', description: 'Build robust, scalable online stores by hiring an offshore Next.js developer, ensuring secure transactions and rich user interfaces.' }
];

const engagementModelsNextJs = [
    { title: 'Dedicated Team', description: 'Build a dedicated team of Next.js developers working exclusively on your project. Ensure expert focus, seamless collaboration, and consistent progress aligned with your business objectives and technical roadmap.', points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'] },
    { title: 'Staff Augmentation', description: 'Scale your team effortlessly with highly skilled Next.js developers. Enhance your workforce with specialized expertise, ensuring flexibility, increased efficiency, and seamless collaboration while keeping full control over your project workflows.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Hire Next.js developers on a project-based model for targeted, efficient execution of defined deliverables. Ideal for time-sensitive projects with specific objectives, ensuring timely and cost-effective solutions.', points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsNextJs = [
    { q: 'Can Next.js be added to an existing project?', a: 'Yes, Next.js can be incrementally adopted into an existing React project. [1] You can start by using it for a specific section or for new features, allowing you to leverage its benefits like server-side rendering and static site generation without a complete rewrite. Hire Next.js programmers to ensure a smooth and efficient integration.' },
    { q: 'What are the benefits of using Next.js?', a: 'Next.js offers significant benefits, including improved performance through server-side rendering (SSR) and static site generation (SSG), automatic code splitting for faster page loads, and enhanced SEO capabilities. [1, 2, 4, 12, 14] Its built-in routing and API routes also simplify the development of full-stack applications. [1, 14]' },
    { q: 'What are the benefits of hiring a dedicated Next.js developer?', a: 'Hiring a dedicated Next.js developer gives you access to specialized expertise, ensuring your project is built with best practices for performance and scalability. [10, 15] It leads to faster development cycles, higher-quality code, and allows your in-house team to focus on core business objectives while the expert handles the technical complexities. [10, 15]' },
    { q: 'What are the hiring engagement options available at Alpixn Technologies?', a: 'We offer flexible hiring models to suit your needs, including a Dedicated Team for long-term projects, Staff Augmentation to supplement your existing team, and a Project-Based model for projects with a defined scope and timeline.' },
    { q: 'Do you provide support and maintenance services after deployment?', a: 'Yes, we provide comprehensive support and maintenance services post-deployment. This includes performance monitoring, bug fixes, security updates, and feature enhancements to ensure your application remains reliable and up-to-date.' },
    { q: 'Can you sign an NDA (Non-Disclosure Agreement) for my project?', a: 'Absolutely. We prioritize the confidentiality and security of your project ideas. Signing a Non-Disclosure Agreement is a standard part of our process before we begin any work.' },
    { q: 'What if I am not satisfied with the hired Next.js developer\'s work and would like to exit?', a: 'Client satisfaction is our top priority. If you are not satisfied with a developer\'s performance, we have a clear replacement policy. We will work with you to address any issues and, if necessary, assign a new developer to your project to ensure it stays on track.' },
    { q: 'Can I hire Next.js developers for the hourly or project-based tasks?', a: 'Yes, we offer the flexibility to hire Next.js developers for hourly tasks, part-time work, or on a project-based contract. This allows you to get the specific expertise you need, for the duration you need it, in a way that aligns with your budget and project scope.' },
    { q: 'What are the modes of communication to directly communicate with the hired Next.js developers?', a: 'We use a variety of modern communication tools to ensure seamless collaboration. You can communicate directly with your hired developers through platforms like Slack for real-time messaging, and video conferencing tools like Zoom or Google Meet for regular meetings and stand-ups.' },
    { q: 'What is the possible cost of hiring a Next.js developer?', a: 'The cost of hiring a Next.js developer varies based on their experience and location. Hourly rates can range from approximately $25-$50 for a junior developer to over $100-$150 for a senior expert in regions like North America. [23, 24] We offer competitive pricing tailored to your specific project needs.' },
    { q: 'What are the different Next.js engagement models you offer?', a: 'We offer several engagement models to fit different project needs: a Dedicated Team model for ongoing, long-term development; a Staff Augmentation model to extend your in-house team; and a Project-Based model for projects with a fixed scope and timeline.' }
];

const userGuideContentNextJs = {
    'What is Next.js Development?': {
        intro: 'Next.js is a React-based open-source framework designed for creating modern web applications with server-side rendering (SSR), static site generation (SSG), and a seamless developer experience. Leveraging features like automatic code splitting, optimized images, and API routes, Next.js enables faster load times, improved SEO, and a scalable architecture. This framework is ideal for building single-page applications (SPAs), eCommerce platforms, dynamic web apps, and enterprise-grade solutions that require performance scalability, and superior user experience. Companies that hire Next.js developers gain access to cutting-edge tools and methodologies for creating future-proof applications.',
        points: []
    },
    'The Role of a Next.js Developer': {
        intro: 'A Next.js developer is responsible for designing, developing, and maintaining robust web applications using the Next.js framework. Their role involves integrating server-side rendering techniques, optimizing page performance, and ensuring seamless user experiences. Proficient in JavaScript, React, and backend technologies, Next.js developers excel in building scalable solutions with responsive UI components and API integrations. Whether you hire dedicated Next.js developers or hire an offshore Next.js team, their expertise helps achieve high-performance applications tailored to your business requirements. Key responsibilities include:',
        points: [
            { title: 'Implementing SSR and SSG for optimal performance and SEO', text: '' },
            { title: 'Developing responsive UIs and reusable React components', text: '' },
            { title: 'Integrating APIs and managing server-side logic', text: '' },
            { title: 'Optimizing load times and ensuring code maintainability', text: '' },
            { title: 'Collaborating with designers and backend teams for seamless functionality', text: '' }
        ],
        outro: 'By hiring top Next.js developers, businesses can unlock the full potential of this powerful framework, delivering cutting-edge applications that align with their objectives.'
    },
    'Essential Skills and Qualifications for Next.js Developers': {
        intro: 'When hiring Next.js developers, it’s essential to focus on a blend of core technical skills and industry-relevant experience. Here’s what makes a qualified Next.js developer stand out:',
        points: [
            { title: 'Proficiency in JavaScript & React', text: 'Since Next.js is built on React, developers should have a strong grasp of JavaScript and be adept at building reusable React components.' },
            { title: 'Deep Understanding of Next.js Framework', text: 'A skilled Next.js developer should be proficient in its features, such as server-side rendering (SSR), static site generation (SSG), and dynamic routing.' },
            { title: 'API Integration', text: 'Knowledge of RESTful APIs and GraphQL for integrating with backend services is a critical skill.' },
            { title: 'Performance Optimization', text: 'Expertise in optimizing page load speed, lazy loading, and implementing efficient code-splitting for faster rendering.' },
            { title: 'Version Control with Git', text: 'Familiarity with Git for managing code repositories and collaborating in teams.' },
            { title: 'Responsive Web Design', text: 'Proficiency in creating mobile-first, responsive layouts that provide optimal user experiences across devices.' },
            { title: 'Testing & Debugging', text: 'Familiarity with unit testing frameworks and tools like Jest and Cypress to ensure application stability.' },
            { title: 'Collaboration Tools & Agile Development', text: 'Experience with tools like Jira, Slack, and Trello, and a solid understanding of Agile development practices.' }
        ],
        outro: 'To hire dedicated Next.js developers or a complete Next.js development team, it’s crucial to evaluate these skills, as they contribute to the developer’s ability to deliver high-quality, scalable, and maintainable web applications.'
    },
    'Where to Find Next.js Developers': {
        intro: 'Finding the right Next.js developers requires knowing where to look and what to expect. Here are some of the best places to find skilled Next.js developers:',
        points: [
            { title: 'Job Boards & Freelance Platforms', text: 'Websites like LinkedIn, Upwork, and Toptal offer opportunities to hire remote Next.js developers. Many platforms also allow you to hire Next.js developers on-demand, perfect for project-based work or short-term contracts.' },
            { title: 'Outsourcing & Offshore Teams', text: 'For businesses looking to scale quickly, hiring an offshore Next.js development team is an excellent choice. By partnering with an established development company like Alpixn Technologies, you can outsource Vue.js developers or hire remote Next.js developers who bring both expertise and cost-effective solutions.' },
            { title: 'Tech Meetups and Conferences', text: 'Developers often gather at JavaScript-related meetups and conferences. These events are perfect for networking and identifying top Next.js developers who are actively engaged in the community.' },
            { title: 'Development Agencies', text: 'Hiring a Next.js development company or consultants from agencies like Alpixn Technologies allows you to leverage a team of skilled developers with expertise in Next.js and related technologies.' },
            { title: 'Referrals and Networking', text: 'Reach out to your professional network for recommendations on talented Next.js developers. Personal referrals often result in hiring developers who are a better cultural fit for your team.' }
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

// --- SECTIONS FOR HIRE NEXT.JS DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top NextJs Developers</h3>
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

const NextJsStrengthsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Core Strengths Of Our Next.js Developers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {nextJsStrengths.map((service, index) => (
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
                    Why Partner with Our Dedicated Next.js Development Team
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatYouGetNextJs.map((reason, index) => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Expertise of Our Next.js Developers</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {nextJsTechExpertise.map(tech => (
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
                    <h2 className="text-4xl md:text-5xl font-bold">Our Top-rated Next.js Developers Offer</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Scalable applications, expert developers, custom solutions, seamless integrations, cutting-edge technology, robust support, and future-proof development to drive your business’s digital transformation effortlessly.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {nextJsSolutions.map((solution, index) => (
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

const FeaturedCaseStudyNextJs = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Our Work Speaks for Itself</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Our dedicated Next.js developers bring expertise in building dynamic, high-performance applications. Skilled in cutting-edge technologies, they deliver seamless integrations, scalable solutions, and optimized user experiences, empowering businesses to achieve measurable success across industries.
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

const UserGuideSidebarNextJs = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentNextJs)[0]);
    const content = userGuideContentNextJs[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Hiring Next.js Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentNextJs).map(topic => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top Next.js Developers in 3 Simple Steps</h2>
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Engagement Models to Hire Best Next.js Programmers</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies offers flexible engagement models for Next.js development services, providing customized solutions for your business requirements. Explore the best fit for your project.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsNextJs.map((model, index) => (
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
                    {faqsNextJs.map((faq, index) => (
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
const HireNextJSPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire Top-Rated Next.js Developers<br/>Best Next.js Programmers to Accelerate Project Delivery</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Our dedicated Next.js developers deliver innovation and precision to your projects. Partner with us to create robust, scalable, and high-performance web solutions that turn your unique vision into a seamless digital reality.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Advanced Next Js Expertise</div>
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
        <NextJsStrengthsSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Transform Your Software Projects?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire Our Next.js Developers
            </motion.button>
        </section>
        <WhatYouGetSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Build Scalable, Future-Ready Applications with Our Top Next.js Developers
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Call
            </motion.button>
        </section>

        <FeaturedCaseStudyNextJs />
        <UserGuideSidebarNextJs />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireNextJSPage;