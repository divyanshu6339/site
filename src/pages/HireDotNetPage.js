import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE .NET DEVELOPERS PAGE ---

const dotNetStrengths = [
    { title: 'Custom .NET Web Application Development', description: 'Hire our dedicated .net developers to build custom .NET development solutions, SAAS applications, and intuitive web and mobile apps.', icon: 'custom-net-web-application-development' },
    { title: '.NET Migration and API Development', description: 'Seamlessly upgrade your legacy applications and streamline integrations with our .NET migration and API development services.', icon: 'net-migration-and-api-development' },
    { title: '.NET CMS and Enterprise Development', description: 'Hire asp.net programmers who specialize in developing scalable CMS and complex enterprise solutions as per business needs.', icon: 'net-cms-and-enterprise-development' },
    { title: '.NET Multi-platform App UI', description: 'Our expert .NET developers deliver intuitive and responsive interfaces, ensuring seamless performance on the web, mobile, and desktop.', icon: 'net-multi-platform-app-ui' }
];

const whatYouGetDotNet = [
    { title: 'Stable & Secured Solutions', description: 'Our asp.net developers prioritize security and stability, incorporating the latest Microsoft technologies and best practices to deliver robust, secure applications. Hire dot net developers who understand how to mitigate risks and fortify your software.' },
    { title: 'Intuitive & Responsive UI/UX', description: 'Enhance user engagement with our expertly designed UI/UX. Our team ensures your applications are visually appealing, easy to navigate, and fully responsive across devices. Hire asp.net MVC developers to elevate your user experience.' },
    { title: 'Rapid Project Launch', description: 'With our efficient processes and experienced team, your project gets off the ground quickly. Whether you need to hire dotnet programmers for a startup idea or enterprise application, we ensure a fast and smooth launch.' },
    { title: 'Application Scalability', description: 'Future-proof your business with scalable .NET solutions. Our developers build flexible architectures that grow with your needs, ensuring long-term performance and efficiency.' }
];

const dotNetTechExpertise = ['Signal', 'Xamrin', 'Polly', 'N-Unit', 'Ms Test', 'Identity Server', 'Dapper', 'Blazor', '.Net Core'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const dotNetSolutions = [
    { title: '.Net Mobile App Development', description: 'Hire our asp.net developer experts who excel in crafting intuitive mobile experiences for Android, iOS, and Windows platforms.' },
    { title: '.NET Consulting', description: 'Hire dotnet programmer professionals to help you define your project requirements, architecture, and development roadmap.' },
    { title: '.NET Migration & Modernization', description: 'Our dot net programmers revamp your softwares while maintaining data integrity and seamlessly migrating them to the latest .NET framework.' },
    { title: '.NET Support and Maintenance', description: 'Get continuous support and regular maintenance from our dedicated dotnet developers to ensure your applications run smoothly.' },
    { title: 'E-commerce Solutions', description: 'Our .NET developers for hire create custom e-commerce platforms that are secure, feature-rich, and optimized for conversions.' },
    { title: 'Dot NET QA & Testing', description: 'Hire asp.net MVC developer specialists to conduct rigorous testing for reliability and functionality to create robust solutions.' },
    { title: 'Microsoft-Powered Solutions', description: 'Our dot net developers integrate seamlessly with Azure and other Microsoft services, creating cloud-enabled, future-ready solutions.' },
    { title: 'Azure Development Services', description: 'Our Azure development services harness the power of Microsoft’s cloud platform to build, deploy, and manage web and mobile applications.' },
    { title: 'MVC Application Development', description: 'Our developers create robust back-end and power your SaaS, eCommerce, and ERP applications to deliver the best user experiences.' }
];

const engagementModelsDotNet = [
    { title: 'Dedicated Team', description: 'Build a dedicated team of .NET developers who work exclusively on your project. This model ensures focused expertise, seamless collaboration, and consistent progress perfectly aligned with your strategic goals, making it ideal for long-term and complex initiatives.', points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'] },
    { title: 'Staff Augmentation', description: 'Strengthen your current team with skilled .NET developers to fill crucial knowledge gaps, increase productivity, and speed up project delivery. Our experts seamlessly integrate into your existing workflow, providing flexibility and specialized skills while maintaining your organizational structure.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Opt for a project-based engagement model to have our .NET developers deliver efficient and targeted solutions for your well-defined project requirements. This approach is perfect for projects with clear timelines and deliverables, ensuring timely and cost-effective execution.', points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsDotNet = [
    { q: 'Is ASP.NET the right framework for building enterprise solutions?', a: 'Yes, ASP.NET is an ideal framework for developing robust and scalable enterprise solutions. It provides a secure and high-performance environment, making it perfect for large-scale applications. With features like seamless integration with Microsoft products, extensive libraries, and strong security protocols, ASP.NET enables efficient data handling and powerful user interfaces. By choosing to hire asp.net developers, your business can leverage these capabilities to build customized solutions that meet complex business requirements.' },
    { q: 'How does hiring .NET developers benefit my business?', a: 'Hiring .NET developers gives your business access to a versatile and powerful framework for building secure, scalable, and high-performance applications. [1] This leads to faster development cycles, robust enterprise-grade solutions, and seamless integration with the Microsoft ecosystem, ultimately driving efficiency and innovation. [1, 2]' },
    { q: 'Do you provide NDA and IP protection for my project?', a: 'Absolutely. We prioritize your intellectual property and confidentiality. We sign a Non-Disclosure Agreement (NDA) before beginning any project, and our contracts ensure that all IP rights for the code we develop are transferred to you upon project completion.' },
    { q: 'Do you provide support and maintenance services after deployment?', a: 'Yes, we offer comprehensive post-deployment support and maintenance services. Our team ensures your application remains updated, secure, and performs optimally, providing peace of mind and long-term value.' },
    { q: 'Will the hired .NET resources work according to my time zone?', a: 'Yes, we offer flexible working hours to overlap with your time zone. Our teams are experienced in collaborating with clients globally and use various communication tools to ensure seamless and transparent interaction, regardless of geographical differences.' }
];

const userGuideContentDotNet = {
    'Benefits of Hiring a Dedicated .NET Developer for Your Project': {
        intro: 'Hiring ASP.NET developers is a strategic move for businesses aiming to build secure, scalable, and high-performance applications. Here’s why you should consider hiring our best .NET developers:',
        points: [
            { title: 'Cross-Platform Development', text: 'With .NET Core, your applications can run across multiple platforms like Windows, Linux, and macOS. When you hire .NET Core developers, you benefit from versatile development, making your software accessible to a broader audience. This cross-platform capability is essential for businesses aiming to enhance their reach and flexibility.' },
            { title: 'Rapid Development with Reduced Time-to-Market', text: 'ASP.NET’s extensive library and efficient development framework enable asp.net developers for hire to accelerate project timelines. Our skilled team can launch your applications quickly without compromising quality, giving you a competitive edge in the market.' },
            { title: 'Seamless Integration with Microsoft Ecosystem', text: 'ASP.NET offers smooth integration with other Microsoft products like Azure, SharePoint, and Office 365. When you hire a dot net programmer, you can leverage the entire Microsoft ecosystem for better functionality and cloud-based solutions. Our team delivers end-to-end integration for streamlined business operations.' },
            { title: 'Rich User Experience (UI/UX)', text: 'The user experience is critical to the success of your application. By hiring ASP programmers for hire, you get access to experts who build intuitive and engaging interfaces, ensuring a seamless user journey. This helps boost user retention and satisfaction rates.' },
            { title: 'Enterprise-Grade Applications', text: 'For complex, enterprise-level needs, hiring hire asp.net developer professionals is a must. Our dot.net developers excel in building enterprise applications that handle large volumes of data, support multiple user roles, and offer exceptional reliability.' }
        ]
    },
    'What is .NET Used For?': {
        intro: '.NET is a versatile framework developed by Microsoft, used for building various types of applications, from web and mobile to desktop and cloud-based solutions. Let’s explore the key use cases where hiring .NET developers can transform your projects:',
        points: [
            { title: 'Web Application Development', text: '.NET, especially ASP.NET, is a popular choice for developing dynamic, data-driven web applications. Our asp.net developer for hire can craft scalable and secure web apps with features tailored to your business needs.' },
            { title: 'Enterprise-Grade Software', text: 'Large enterprises rely on .NET for its robust architecture and seamless integration capabilities. Our dedicated dotnet developers excel in building enterprise solutions that handle high volumes of data and deliver outstanding performance.' },
            { title: 'Cross-Platform Applications with .NET Core', text: '.NET Core is an open-source, cross-platform version of .NET that allows developers to build applications running on Windows, Linux, and macOS.' },
            { title: 'Cloud-Based Solutions', text: 'When you hire a dot net programmer, you can develop cloud-based solutions that leverage Azure’s extensive features, such as data storage, machine learning, and security services.' },
            { title: 'IoT (Internet of Things) Solutions', text: 'The versatility of .NET makes it suitable for IoT application development. From smart home automation to industrial monitoring systems, our dot net programmer services cover the entire spectrum of IoT solutions, ensuring seamless device connectivity and data processing.' },
            { title: 'Game Development', text: '.NET, with frameworks like Unity, is also used in the gaming industry. By hiring asp net programmer experts, you can develop immersive games with rich graphics and efficient performance.' }
        ]
    },
    'How experienced are the .NET developers at Alpixn Technologies?': {
        intro: 'Our .NET developers at Alpixn Technologies bring years of hands-on experience and expertise to every project. Our team consists of highly skilled professionals, from senior-level .NET developers for hire with a deep understanding of .NET frameworks, ASP.NET, and .NET Core, to dedicated specialists in areas like API development, enterprise solutions, and cloud-based applications. When you hire dotnet programmers from us, you benefit from a workforce that has delivered successful projects across various domains, including e-commerce, finance, healthcare, and IoT, ensuring high-quality results every time. Our asp.net programmers are well-versed in the latest development practices, making them adept at handling complex and large-scale applications with precision.',
        points: [],
        outro: 'At Alpixn Technologies, we take pride in our developers’ ability to adapt and innovate. Our hired dedicated net developers have extensive experience with third-party integrations, real-time applications, and scalable solutions that meet modern business demands. Our commitment to continuous learning means that our dot net developers stay updated on cutting-edge technologies, including cloud platforms like Microsoft Azure, ensuring your project benefits from the latest advancements. Whether you need to hire asp.net developer experts for a software solution or find dot.net developers for team augmentation, we offer the best talent to turn your ideas into reality, making us the ideal partner for your .NET development needs.'
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

// --- SECTIONS FOR HIRE .NET DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top .NET Developers</h3>
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

const DotNetCoreStrengthsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Core Strengths of Our .NET Developers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {dotNetStrengths.map((service, index) => (
                        <motion.div key={index} className="bg-gray-800 p-8 rounded-lg text-center transform transition duration-500 hover:scale-105 hover:bg-gray-700"
                            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                            <div className="text-blue-400 mb-4 text-4xl mx-auto w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">?</div>
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
                    What You Get With Our .NET Development Services
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatYouGetDotNet.map((reason, index) => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Expertise of Our .NET Developers</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {dotNetTechExpertise.map(tech => (
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
            <div className="w-full px-4 sm:px-6 lg:px-8">
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
                    <h2 className="text-4xl md:text-5xl font-bold">Power Your Projects with Skilled .NET Developers You Can Trust</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Our dedicated .NET developers for hire deliver robust, scalable, and high-performance solutions, tailored to meet your business needs, ensuring seamless integration, enhanced security, and future-ready application development.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dotNetSolutions.map((solution, index) => (
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

const FeaturedCaseStudyDotNet = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Our Work Speaks for Itself</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Our dedicated .NET developers offer a range of benefits, with certified professionals skilled in advanced technologies like AI, cloud computing, and blockchain. Hire dedicated .NET developers to leverage robust tech expertise and receive 24/7 support, ensuring seamless maintenance from code development to production deployment.
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
                                    <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 Lg Lg Lg Lg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
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

const UserGuideSidebarDotNet = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentDotNet)[0]);
    const content = userGuideContentDotNet[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Hire .NET Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentDotNet).map(topic => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top .NET Developers in 3 Simple Steps</h2>
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Engagement Models to Hire Best .NET Developers</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies offers flexible engagement models for .NET development services, delivering customized solutions that cater to your specific business needs. Discover our engagement models.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsDotNet.map((model, index) => (
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
                    {faqsDotNet.map((faq, index) => (
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


// --- MAIN PAGE COMPONENT ---
const HireDotNetPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire Top-Rated .NET Developers<br/>Best .Net Programmers for Your Project</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Alpixn Technologies provides top-notch .NET developers who build, and optimize various software solutions, from web and cloud applications to IoT, mobile, and desktop apps. We offer quick access to highly skilled .NET programmers.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Advanced .Net Expertise</div>
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
        <DotNetCoreStrengthsSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Transform Your Software Projects?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire Our .NET Developers
            </motion.button>
        </section>
        <WhatYouGetSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Build Scalable, Future-Ready Solutions with Our Top .NET Developers
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Call
            </motion.button>
        </section>

        <FeaturedCaseStudyDotNet />
        <UserGuideSidebarDotNet />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireDotNetPage;