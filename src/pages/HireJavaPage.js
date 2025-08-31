import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE JAVA DEVELOPERS PAGE ---

const javaExcellence = [
    { title: 'Custom App Development', description: 'Hire dedicated Java developers to build custom web and mobile high-performing platform applications that meet your business objectives.', icon: 'custom-app-development' },
    { title: 'Java Enterprise Development', description: 'Our Java devs specialize in creating enterprise-level solutions and streamlining business operations through scalable software development.', icon: 'java-enterprise-development' },
    { title: 'Java Cloud Development', description: 'Leverage the expertise of our Java app developers to build and deploy cloud-based applications using AWS, Azure, and Google Cloud for your operations.', icon: 'java-cloud-development' },
    { title: 'Java CMS Development', description: 'Hire Java developers to develop or optimize custom content management systems that enhance content delivery and user engagement for smart solutions.', icon: 'java-cms-development' }
];

const whyPartnerJava = [
    { title: 'High-Performing Platform', description: 'Hire full-stack Java developers to deliver robust platforms that ensure top-notch performance, reliability, and scalability for all your applications.' },
    { title: 'Future-proof Applications', description: 'Our offshore Java developers offer a comprehensive suite of services, from development and deployment to support and maintenance, ensuring a seamless experience.' },
    { title: 'Integration Expertise', description: 'We excel in integrating Java applications with third-party tools, APIs, and legacy systems, ensuring your business achieves optimal efficiency and innovation.' },
    { title: 'Qualified & Certified Talent', description: 'Our dedicated Java programmers are highly skilled, certified professionals with extensive experience in handling complex development challenges.' }
];

const javaTechExpertise = ['Gradle', 'Hibernate', 'Jackson', 'Jakarta', 'Lombook', 'Micronaut', 'Spring'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const javaSolutions = [
    { title: 'Java Consulting and Architecture', description: 'Our Java consultants provide expert guidance and architecture design to create scalable and future-ready solutions tailored to your requirements.' },
    { title: 'Java Software Development', description: 'Develop reliable and scalable software with the help of our dedicated Java development team for end-to-end project delivery.' },
    { title: 'Java Migration Services', description: 'Modernize your existing software with our Java migration services, transforming outdated systems into agile, secure, and feature-rich applications.' },
    { title: 'Java Game Development', description: 'Create immersive gaming experiences by partnering with our dedicated Java programmers who excel in game development with advance tech expertise.' },
    { title: 'Java Backend Development', description: 'Our in-house Java backend developers build robust backends that power SaaS, eCommerce, and enterprise solutions with flawless performance.' },
    { title: 'Java Mobile Application Development', description: 'Our Java mobile app developers specialize in creating responsive and intuitive mobile applications for Android and cross-platform solutions.' },
    { title: 'Java Security Implementation', description: 'Hire dedicated Java developers to implement advanced security measures, safeguarding your applications against cyber threats.' },
    { title: 'Java Web Development', description: 'Hire Java web developers to create dynamic, feature-rich web applications that provide seamless user experiences.' },
    { title: 'Java API Integration', description: 'Hire Java experts to seamlessly integrate APIs, ensuring smooth connectivity and data flow across your applications.' }
];

const engagementModelsJava = [
    { title: 'Dedicated Team', description: 'Build a dedicated team of Java developers exclusively focused on your project, ensuring expertise-driven development, seamless integration, and steady progress aligned with your goals.', points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'] },
    { title: 'Staff Augmentation', description: 'Boost your existing team by adding experienced Java developers to fill skill gaps, improve productivity, and speed up project timelines—all while maintaining your current team structure and workflow.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Leverage a project-based model for Java development to achieve focused, efficient delivery of specific objectives. It is ideal for clearly defined projects with set timelines and budgets.', points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsJava = [
    { q: 'What skills should I look for in a Java developer?', a: 'Look for proficiency in core Java, strong experience with frameworks like Spring and Hibernate, and expertise in database management (SQL, NoSQL). [1] Key skills also include API development (REST), knowledge of build tools like Maven or Gradle, and familiarity with cloud platforms and DevOps practices. [1, 2]' },
    { q: 'What industries can your Java developers work in?', a: 'Our Java developers have experience across a wide range of industries, including finance, healthcare, e-commerce, retail, and technology. Java’s versatility and robustness make it suitable for nearly any sector requiring scalable and secure enterprise applications.' },
    { q: 'What kind of applications can you develop using Java?', a: 'Using Java, we can develop a diverse range of applications, such as enterprise-level web applications, Android mobile apps, cloud-native microservices, big data processing solutions, and secure financial platforms. [3, 4, 5, 6]' },
    { q: 'What process do you follow to hire a Java developer from your company?', a: 'Our process starts with understanding your project requirements. We then provide you with a shortlist of pre-vetted, qualified candidates. You can interview them to select the best fit, and we handle the onboarding process to ensure a smooth start.' },
    { q: 'What level of experience do your Java developers have?', a: 'Our team consists of developers with varying levels of experience, from mid-level to senior architects, with an average of 5+ years in the industry. We match the developer’s expertise to your project’s complexity and needs.' },
    { q: 'Will I get a dedicated developer or team for my project?', a: 'Yes, our "Dedicated Team" engagement model provides you with a developer or a full team that works exclusively on your project, ensuring focus and deep integration with your goals.' },
    { q: 'How much does it cost to hire a Java developer?', a: 'The cost to hire a Java developer can range from $25 to over $100 per hour, depending on their experience, location, and the project\'s complexity. [7] We offer competitive rates and flexible models to fit different budgets.' },
    { q: 'Do you offer flexible hiring models like hourly or full-time options?', a: 'Yes, we offer flexible engagement models, including dedicated (full-time), staff augmentation, and project-based hiring, which can be structured on an hourly, monthly, or fixed-cost basis.' },
    { q: 'Do you offer post-development support and maintenance services?', a: 'Absolutely. We provide ongoing support and maintenance services to ensure your application remains secure, updated, and performs optimally after launch.' },
    { q: 'How do you ensure the security of my project and data?', a: 'We prioritize security at every stage. We sign a strict Non-Disclosure Agreement (NDA) before starting and follow secure coding practices, conduct regular security audits, and implement robust access control measures to protect your intellectual property.' }
];

const userGuideContentJava = {
    'What Are the Benefits of Hiring Dedicated Java Developers?': {
        intro: 'Hiring dedicated Java developers offers businesses unmatched flexibility and expertise, enabling the creation of high-performance, scalable applications. Here’s why companies prefer to hire dedicated Java developers for their projects:',
        points: [
            { title: 'Specialized Expertise and Skills', text: 'Dedicated Java programmers possess deep knowledge of the Java ecosystem, including frameworks like Spring, Hibernate, and Java EE.' },
            { title: 'Cost-Efficiency and Scalability', text: 'With offshore Java developers, businesses can reduce costs associated with recruitment, training, and infrastructure. Dedicated engagement models also allow for easy scalability of the team.' },
            { title: 'Access to Advanced Technologies', text: 'Dedicated Java developers stay ahead of industry trends, offering expertise in integrating advanced technologies like AI and Big Data for intelligent solutions, and cloud development for scalable and secure architectures. Hiring Java app developers ensures your project benefits from cutting-edge innovations.' },
            { title: 'Flexibility in Engagement Models', text: 'Businesses can customize engagement models to suit their unique needs. With Alpixn Technologies, you can choose from flexible models to hire Java web application programmers or hire Java mobile app developers tailored to your requirements.' },
            { title: 'Data Security and Confidentiality', text: 'When you hire a dedicated Java development team, you ensure your project and data are protected by strict NDA agreements and secure development practices.' },
            { title: 'Post-Development Support', text: 'Our Java web developers provide seamless post-launch maintenance, ensuring your application remains updated, secure, and functional.' }
        ]
    },
    'What Are the Trends in Java Outsourcing?': {
        intro: 'Java outsourcing continues to evolve as businesses look for innovative and cost-effective development solutions. Here are the latest trends:',
        points: [
            { title: 'Adoption of Cloud-Native Development', text: 'Businesses increasingly hire dedicated Java developers with expertise in cloud-native platforms like AWS, Azure, and Google Cloud to build scalable and resilient applications. This trend ensures high availability and adaptability to dynamic business needs.' },
            { title: 'Focus on Microservices Architecture', text: 'Java’s support for microservices frameworks like Spring Boot makes it a leading choice for modular and scalable application development. Companies often opt to hire remote Java developers to implement this architecture and accelerate their digital transformation.' },
            { title: 'AI and Machine Learning Integration', text: 'The integration of AI and machine learning into Java applications is on the rise. Skilled offshore Java developers are leveraging libraries like Weka and Deep Java Library to create intelligent applications, enhancing decision-making and automation capabilities.' },
            { title: 'Prioritization of Data Security', text: 'Java’s robust security features make it a go-to language for industries handling sensitive data. Businesses are increasingly outsourcing to Java coders for hire with expertise in secure application development to ensure compliance with global data protection regulations.' }
        ]
    },
    'Can Java Applications Be Used for Web Development?': {
        intro: 'Absolutely! Java remains a top choice for web development due to its robust capabilities and versatility. Businesses often hire Java web developers to create scalable, secure, and dynamic web applications. Here’s why Java excels in web development:',
        points: [
            { title: 'Comprehensive Frameworks for All Needs', text: 'Java offers a range of powerful frameworks that streamline web application development.\n– Spring MVC and Spring Boot: Ideal for building complex, enterprise-level web applications.\n– Struts: For MVC-based applications with rich functionalities.\n– GWT (Google Web Toolkit): To create dynamic web interfaces efficiently.\nWith these tools, freelance Java backend developers and hire Java web application programmers can create custom solutions tailored to any business need.' },
            { title: 'Cross-Platform Compatibility', text: 'Java’s “Write Once, Run Anywhere” feature ensures seamless compatibility across various operating systems, making it perfect for applications requiring broad reach.' },
            { title: 'Robust Backend Development', text: 'Skilled dedicated Java programmers leverage Java to build powerful backends capable of handling large-scale operations and complex processes with ease.' },
            { title: 'Integration with Emerging Technologies', text: 'Java is future-proof. Businesses often hire full-stack Java developers to integrate modern technologies like AI, IoT, and blockchain, ensuring their web applications remain competitive and innovative.' }
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

// --- SECTIONS FOR HIRE JAVA DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top Java Developers</h3>
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

const JavaExcellenceSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Excellence of Our Certified Java Developers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {javaExcellence.map((service, index) => (
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

const WhyPartnerSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
      <div ref={ref} className="py-24 bg-gray-900/50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Why Partner with Our Dedicated Java Development Team
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyPartnerJava.map((reason, index) => (
              <div key={reason.title} className={`p-8 bg-gray-800 rounded-2xl text-left transition-all duration-500 ease-out hover:bg-gray-700 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <h3 className="text-2xl font-bold text-blue-400 mb-3">{reason.title}</h3>
                <p className="text-gray-300 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-blue-400 font-semibold text-xl mt-12">Have a question? <a href="#" className="underline hover:text-blue-300">Talk to an expert ⊙</a></p>
        </div>
      </div>
    );
};

const TechExpertiseSection = () => {
    return (
        <div className="py-24 bg-black">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Expertise of Our Java Developers</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {javaTechExpertise.map(tech => (
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
                    <h2 className="text-4xl md:text-5xl font-bold">Power Your Projects with Certified Java Developers</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Our dedicated Java developers excel in building scalable applications, custom solutions, seamless integrations, cutting-edge technology, robust support, and future-proof development to drive your business’s digital transformation effortlessly.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {javaSolutions.map((solution, index) => (
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

const FeaturedCaseStudyJava = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Our Work Speaks for Itself</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Our dedicated Java developers bring extensive expertise in cutting-edge technologies like microservices, cloud integration, and enterprise-grade solutions. With certified Java coders and 24/7 technical support, we offer seamless maintenance, from development to deployment.
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

const UserGuideSidebarJava = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentJava)[0]);
    const content = userGuideContentJava[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Hire Java Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentJava).map(topic => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top Java Developers in 3 Simple Steps</h2>
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Engagement Models to Hire Best Java Programmers</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies offers flexible engagement models for Java development services, designed to deliver customized solutions that fit your business requirements. Explore the ideal model for your project.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsJava.map((model, index) => (
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
                    {faqsJava.map((faq, index) => (
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
const HireJavaPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire Top Java Developers<br/>Best Java Coders for Your Project</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Our dedicated Java developers bring innovation and efficiency to your projects. Partner with us to build robust, scalable, and high-performance solutions that revolve around the transformation of your vision into reality.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Advanced Java Expertise</div>
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
        <JavaExcellenceSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Transform Your Software Projects?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire Our Expert Java Developers
            </motion.button>
        </section>
        <WhyPartnerSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Build Scalable, Future-Ready Applications with Our Top Java Developers
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Call
            </motion.button>
        </section>

        <FeaturedCaseStudyJava />
        <UserGuideSidebarJava />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireJavaPage;