import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE MICROSOFT POWERAPPS DEVELOPERS PAGE ---

const powerAppsStrengths = [
    { title: 'PowerApps Portal Development', description: 'Crafting scalable PowerApps portals tailored for seamless user experiences, data visualization, and integration within enterprise ecosystems.', icon: 'powerapps-portal-development' },
    { title: 'Canvas App Development', description: 'Developing interactive, mobile-friendly canvas apps to streamline business workflows and enhance decision-making through PowerApps\' robust capabilities.', icon: 'canvas-app-development' },
    { title: 'Custom App Development', description: 'Designing bespoke PowerApps solutions that align with unique organizational requirements, ensuring flexibility, security, and high-performance outcomes.', icon: 'custom-app-development' },
    { title: 'Salesforce Integration', description: 'Enabling flawless Salesforce-PowerApps integration to unify data, automate workflows, and boost operational efficiency across diverse business platforms.', icon: 'salesforce-platform-developer' }
];

const whatYouGetPowerApps = [
    { title: 'Future-Proof Scalability', description: 'Our skilled PowerApp developers design adaptable solutions to accommodate evolving business needs, ensuring seamless performance and scaleability across industries. Hire a Microsoft PowerApps developer to future-proof your organization’s digital capabilities.' },
    { title: 'Custom-Built Solutions', description: 'Hire dedicated PowerApps developers to create tailored applications aligned with your specific business requirements, fostering innovation and operational efficiency. Our solutions integrate seamlessly, leveraging Microsoft PowerApps consulting services to maximize ROI.' },
    { title: 'Accelerated Time to Market', description: 'With proven expertise, our PowerApps experts deliver rapid development cycles, enabling you to deploy enterprise-grade apps faster. Hire PowerApps development and consulting services to reduce time-to-market effectively.' },
    { title: 'Unmatched Quality Assurance', description: 'Hire skilled PowerApps developers to ensure meticulous testing, robust security, and seamless integration, delivering high-quality applications aligned with your organizational goals. Trust our certified PowerApps consultants for reliable results.' }
];

const powerAppsTechStack = ['Azure Functions', 'Common Data Service Cds', 'Microsoft Dataverse', 'Power Bi Integration', 'Powerapps Canvas Apps', 'Powerapps Portals', 'Powerapps Studio'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const powerAppsSolutions = [
    { title: 'SharePoint Integration', description: 'Streamline workflows by integrating PowerApps with SharePoint for secure data management and collaboration. Hire certified PowerApps consultants for seamless deployment.' },
    { title: 'Build Azure Functions', description: 'Leverage Azure Functions with PowerApps to automate backend processes and optimize application performance. Hire PowerApps expert developers to maximize efficiency.' },
    { title: 'Modern UI and UX', description: 'Create intuitive, user-centric designs with PowerApps for an enhanced user experience. Hire Microsoft PowerApps developers for innovative UI/UX solutions.' },
    { title: 'PowerApps for Dynamics 365', description: 'Unlock the full potential of Dynamics 365 with custom PowerApps solutions. Hire skilled PowerApps developers for tailored enterprise app integrations.' },
    { title: 'Power BI Integration', description: 'Integrate Power BI with PowerApps for real-time data visualization and analytics. Hire dedicated PowerApps developers to transform your data insights.' },
    { title: 'Power Apps Dataverse Development', description: 'Harness Dataverse for centralized data management and app development. Hire a Microsoft PowerApps developer for robust and scalable solutions.' },
    { title: 'Azure PowerApps Development', description: 'Build secure, cloud-native applications by integrating PowerApps with Azure. Hire PowerApps development and consulting services for enterprise-grade solutions.' },
    { title: 'Microsoft DataFlex Development', description: 'Simplify data integration with Microsoft DataFlex and PowerApps. Hire PowerApps development firms to drive streamlined, business-focused outcomes.' },
    { title: 'Power Automate Integration', description: 'Enhance efficiency by connecting PowerApps with Power Automate for intelligent workflow automation. Hire power automate developers for impactful automation strategies.' }
];

const engagementModelsPowerApps = [
    { title: 'Dedicated Team', description: 'Assemble a dedicated team of PowerApps developers, exclusively committed to your project. This model ensures tailored app development, seamless integration with Microsoft solutions, and consistent progress aligned with your business goals.', points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'] },
    { title: 'Staff Augmentation', description: 'Strengthen your in-house team by adding expert PowerApps developers. This model helps bridge technical gaps, enhance productivity, and accelerate project timelines without disrupting your existing workflows.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Choose a project-based engagement for well-defined PowerApps development needs. This model is perfect for achieving specific objectives within a fixed timeline and budget while maintaining efficiency and precision.', points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsPowerApps = [
    { q: 'What is the process to avail of custom Microsoft Power App development services from Alpixn Technologies?', a: 'To start, you share your project requirements with us. Our team then analyzes your needs, develops a strategic roadmap, and assigns a team of expert PowerApps developers to design, build, and deploy your custom solution.' },
    { q: 'Will you provide full-stack support for the Microsoft PowerApps app solution?', a: 'Yes, we provide end-to-end support for our PowerApps solutions. This includes everything from the initial design and development to backend integration, deployment, and ongoing maintenance to ensure your application runs smoothly.' },
    { q: 'How much will it cost to develop a custom PowerApps app from Alpixn Technologies?', a: 'The cost of a custom PowerApps solution depends on the complexity, features, and integrations required. We provide a detailed, transparent quote after an initial consultation to understand your specific needs. Our goal is to offer a cost-effective solution that maximizes your ROI.' },
    { q: 'Why should I choose Alpixn Technologies for PowerApps development services?', a: 'You should choose us for our team of certified PowerApps experts, our commitment to quality, and our proven track record of delivering scalable, secure, and user-friendly applications. We offer customized solutions and a partnership approach to ensure your project\'s success.' },
    { q: 'Will you help us with the pre-development PowerApps project research and competitor analysis?', a: 'Yes, our consulting services include a discovery phase where we conduct market research and competitor analysis. This helps us to design a PowerApps solution that is not only technically sound but also gives you a competitive edge.' },
    { q: 'Can I hire a seasoned PowerApps programmer on an hourly basis?', a: 'Yes, we offer flexible engagement models, including the option to hire our experienced PowerApps developers on an hourly basis. This is ideal for smaller tasks, consultations, or projects where the scope may vary.' },
    { q: 'Which skills should I look for when hiring PowerApps developers?', a: 'Look for developers with strong proficiency in building both Canvas and Model-Driven apps, expertise in integrating with the Microsoft ecosystem (like SharePoint and Dynamics 365), and skills in Power Automate and Dataverse. Strong UI/UX design and problem-solving abilities are also crucial.' },
    { q: 'How long does it take to build a custom solution using PowerApps?', a: 'The timeline for a custom PowerApps solution varies with its complexity. A simple app can be built in a few weeks, while a more complex enterprise-level application with multiple integrations could take a few months. PowerApps\' low-code nature generally allows for faster development compared to traditional coding.' },
    { q: 'How can I ensure the security of my business-critical data when hiring PowerApps experts for my project?', a: 'We prioritize data security by signing a strict Non-Disclosure Agreement (NDA). Our developers follow Microsoft\'s security best practices and implement robust security measures within PowerApps, including role-based access and secure data connections, to protect your critical information.' },
    { q: 'What types of PowerApps solutions can your developers build?', a: 'Our developers can build a wide range of solutions, including custom business process automation apps, mobile-friendly field service applications, employee onboarding portals, and complex enterprise systems that integrate with multiple data sources.' },
    { q: 'How experienced are your PowerApps developers?', a: 'Our team consists of certified Microsoft PowerApps developers with an average of 5+ years of experience. They have a proven track record of delivering successful PowerApps projects across various industries.' },
    { q: 'Benefits of Hiring a PowerApps Developer?', a: 'Hiring a PowerApps developer gives you access to specialized skills to build custom applications that automate processes, improve efficiency, and solve specific business challenges. It leads to faster development cycles, lower costs compared to traditional development, and seamless integration with your existing Microsoft tools.' },
    { q: 'Can I see examples of previous PowerApps solutions you’ve developed?', a: 'Yes, we would be happy to share case studies and examples of our previous PowerApps projects that are relevant to your industry and requirements. This will give you a clear idea of our capabilities and the quality of our work.' },
    { q: 'What types of applications can be built with PowerApps?', a: 'PowerApps can be used to build a wide variety of business applications, such as inventory management systems, inspection apps, employee onboarding portals, and customer feedback forms. They can be designed for mobile, tablet, or desktop use.' },
    { q: 'Can your PowerApps developers help integrate mobile apps with other applications?', a: 'Yes, our developers are experts at integrating PowerApps with a wide range of other applications and services, both within the Microsoft ecosystem (like SharePoint, Dynamics 365) and with third-party systems, using custom connectors and APIs.' },
    { q: 'What are your models for hire PowerApps Developer services?', a: 'We offer flexible hiring models, including a Dedicated Team for long-term projects, Staff Augmentation to supplement your current team, and a Project-Based model for projects with a well-defined scope and timeline.' }
];

const userGuideContentPowerApps = {
    'Understanding the Role of a PowerApps Developer': {
        intro: 'Microsoft PowerApps developers specialize in creating custom low-code applications that streamline business processes and improve operational efficiency. They leverage the Power Platform ecosystem to design, develop, and integrate applications with Microsoft services like Dynamics 365, SharePoint, and Azure. A skilled PowerApps developer ensures seamless automation, data-driven decision-making, and scalable app solutions tailored to unique business requirements. By choosing to hire PowerApps developers, businesses gain access to professionals who excel in Power Automate integration, Dataverse optimization, and UI/UX enhancements. These developers ensure robust app performance and advanced analytics, empowering organizations with tailored digital transformation.',
        points: []
    },
    'Skills to Look for in a PowerApps Developer': {
        intro: 'When you hire skilled PowerApps developers, it’s crucial to evaluate their technical expertise and practical experience. Key skills include:',
        points: [
            { title: 'Proficiency in PowerApps', text: 'Expertise in building Canvas and Model-Driven apps with intuitive user interfaces.' },
            { title: 'Integration Expertise', text: 'Ability to connect PowerApps with Microsoft services and third-party APIs for seamless workflow automation.' },
            { title: 'Knowledge of Power Automate', text: 'Developers skilled in Power Automate integration for efficient process automation and workflow design.' },
            { title: 'Data Handling', text: 'Experience in leveraging Dataverse, SQL, and SharePoint for effective data management and storage solutions.' },
            { title: 'UI/UX Design', text: 'Strong skills in designing user-friendly and responsive interfaces for end-user satisfaction.' },
            { title: 'Problem-Solving', text: 'The ability to identify challenges and deliver innovative app solutions.' }
        ],
        outro: 'When you hire dedicated PowerApps developers from Alpixn Technologies, you access professionals with a proven track record in custom app development, integration, and consulting. Opt for Microsoft PowerApps consulting services to drive innovation and maximize ROI for your business.'
    },
    'Benefits of Hiring Dedicated Microsoft PowerApps Developers': {
        intro: 'Hiring dedicated Microsoft PowerApps developers ensures a streamlined and efficient development process tailored to your unique business needs. Here’s how your organization can benefit:',
        points: [
            { title: 'Expertise in Low-Code Solutions', text: 'By choosing to hire PowerApps expert developers, you gain access to specialists skilled in leveraging Microsoft PowerApps’ low-code capabilities. They deliver rapid, scalable, and customized solutions that enhance business workflows and improve overall productivity.' },
            { title: 'Seamless Integration with Microsoft Ecosystem', text: 'A dedicated PowerApps developer ensures seamless integration of applications with Dynamics 365, SharePoint, and Azure. Their expertise in Power Automate integration services enhances process automation, creating a unified digital environment for your business operations.' },
            { title: 'Customized Business Applications', text: 'When you hire Microsoft PowerApps developers, they craft bespoke applications aligned with your objectives. From Canvas apps with user-centric interfaces to complex Model-Driven apps, these professionals develop solutions that meet your specific requirements.' },
            { title: 'Improved Data Management', text: 'Dedicated PowerApps developers have extensive experience working with Dataverse, SQL, and other data platforms. This ensures optimal data storage, management, and access, empowering your organization with actionable insights for informed decision-making.' },
            { title: 'Cost-Effective Development', text: 'Choosing to hire PowerApps development and consulting services provides a cost-efficient alternative to building in-house expertise. These professionals bring extensive experience, reducing the development time and costs associated with training or recruitment.' }
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

// --- SECTIONS FOR HIRE MICROSOFT POWERAPPS DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top Microsoft PowerApps Developers</h3>
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

const PowerAppsStrengthsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Your Vision, Our Certified Microsoft PowerApps Developers' Excellence
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {powerAppsStrengths.map((service, index) => (
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
                    Why Partner with Our Dedicated Microsoft PowerApps Development Team
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatYouGetPowerApps.map((reason, index) => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Technology Stack We Use For Microsoft PowerApps Development</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {powerAppsTechStack.map(tech => (
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
                    <h2 className="text-4xl md:text-5xl font-bold">Power Your Projects with Skilled Microsoft PowerApps Developers</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Our dedicated Microsoft PowerApps developers for hire deliver scalable, secure, and performance-optimized solutions tailored to your business requirements and growth.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {powerAppsSolutions.map((solution, index) => (
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

const FeaturedCaseStudyPowerApps = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Our Work Speaks for Itself</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Discover how our dedicated Microsoft PowerApps developers have empowered businesses by delivering customized, user-friendly, and scalable solutions. From seamless integrations to automated workflows, we create solutions that streamline processes, enhance productivity, and drive digital transformation across various industries.
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

const UserGuideSidebarPowerApps = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentPowerApps)[0]);
    const content = userGuideContentPowerApps[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Hire Microsoft PowerApps Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentPowerApps).map(topic => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top Microsoft PowerApps Developers in 3 Simple Steps</h2>
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Engagement Models to Hire Best Microsoft PowerApps Programmers</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies offers flexible engagement models designed to meet diverse business needs for PowerApps development services. Choose the model that suits your requirements best.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsPowerApps.map((model, index) => (
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
                    {faqsPowerApps.map((faq, index) => (
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
const HirePowerAppsPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire Certified Microsoft PowerApps Developers<br/>Partner with Leading & Skilled Microsoft PowerApps Developers</h1>
                    <p className="text-lg md:text-xl mb-6">
                        We deliver custom Microsoft PowerApps solutions that drive business efficiency and digital transformation. We excel at process automation, data management, & custom app development to help your business thrive in a dynamic digital marketplace.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Microsoft PowerApps Expertise</div>
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
        <PowerAppsStrengthsSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Transform Your Software Projects?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire Our Microsoft PowerApps Developers
            </motion.button>
        </section>
        <WhatYouGetSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Build Scalable, Future-Ready Applications with Our Top Microsoft PowerApps Developers
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Call
            </motion.button>
        </section>

        <FeaturedCaseStudyPowerApps />
        <UserGuideSidebarPowerApps />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HirePowerAppsPage;