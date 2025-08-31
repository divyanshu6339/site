import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE SPRING BOOT DEVELOPERS PAGE ---

const springBootStrengths = [
    { title: 'Microservices with Spring Boot', description: 'Our Spring Boot developers build lightweight, scalable microservices architectures to ensure seamless deployment and rapid integration for dynamic, future-ready systems.', icon: 'microservices-with-spring-boot' },
    { title: 'Spring Core Development', description: 'Hire our skilled Spring Boot developers to implement advanced Spring Core features, including IoC containers, AOP, and DI frameworks, to enhance application performance.', icon: 'spring-core-development' },
    { title: 'Spring MVC Development', description: 'Our dedicated Java Spring Boot developers specialize in custom view layers and efficient backend-to-frontend integration, creating dynamic, responsive web applications.', icon: 'spring-mvc-development' },
    { title: 'Spring Boot API Integration', description: 'Hire certified Spring Boot developers to integrate secure, scalable APIs that streamline data exchange between systems for optimum performance & faster project delivery.', icon: 'spring-boot-api-integration' }
];

const whatYouGetSpringBoot = [
    { title: 'Competent In-House Team', description: 'Our in-house team comprises experienced Java Spring Boot developers adept at building scalable applications. When you hire Spring Boot developers from us, you get skilled professionals with expertise in Spring Core, MVC, and API integration.' },
    { title: 'Truly Agile Process', description: 'We employ a truly Agile process, enabling iterative development and quick adjustments to requirements. Hire dedicated Java Spring Boot developers to ensure continuous delivery, shorter development cycles, and alignment with your evolving business needs.' },
    { title: 'Data Security', description: 'Our Spring Boot developer hiring ensures robust application security with industry-best practices. We implement secure coding, data encryption, and access controls, making us the ideal choice when you hire certified Spring Boot developers.' },
    { title: 'On-Time Delivery', description: 'Hire remote Spring Boot developers from Alpixn Technologies for on-time delivery of high-quality solutions. Our team’s streamlined workflows and proactive project management ensure we meet your deadlines without compromising code quality or performance.' }
];

const springBootTechExpertise = ['Flyway', 'Hybernate', 'Junit', 'Mockito', 'Spring Batch', 'Spring Cloud', 'Spring Data', 'Spring Security', 'Spring Webflux'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const springBootSolutions = [
    { title: 'Migration of Legacy Applications', description: 'Our skilled Spring Boot developers modernize legacy systems by migrating them to Spring Boot and ensuring seamless transitions with enhanced performance.' },
    { title: 'Spring Boot Web Application', description: 'Hire certified Spring Boot developers to build robust web applications. Our team focuses on scalability, security, and responsive designs for superior user experiences.' },
    { title: 'Custom Software Solutions', description: 'Our Spring Boot coders specialize in delivering custom software solutions. Leveraging their expertise, they create feature-rich applications for diverse businesses.' },
    { title: 'Enterprise Application Development', description: 'Hire Java programmers skilled in developing enterprise-grade applications with scalable architectures, secure data handling, and seamless performance.' },
    { title: 'Spring Boot Security', description: 'Our Java Spring Boot developers deliver secure coding, data encryption, and compliance with industry standards to integrate advanced security measures.' },
    { title: 'Spring Cloud Development', description: 'Hire remote Spring Boot developers for cloud-native microservices architecture and seamless deployments to build distributed systems with enhanced resilience and scalability.' },
    { title: 'Testing and Quality Assurance', description: 'We deliver bug-free applications by adhering to testing protocols, ensuring reliable and efficient software.' },
    { title: 'Spring Batch Development', description: 'Our Spring Boot developers implement Spring Batch to handle complex batch-processing workflows efficiently.' },
    { title: 'Maintenance and Support', description: 'Hire certified Spring Boot developers for continuous application monitoring, timely updates, and proactive support.' }
];

const engagementModelsSpringBoot = [
    { title: 'Dedicated Team', description: 'Hire dedicated Spring Boot developers from Alpixn Technologies for long-term projects. Our dedicated team model provides you with a full-time, expert Spring Boot development team focused solely on your project goals.', points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'] },
    { title: 'Staff Augmentation', description: 'Enhance your in-house team by hiring skilled Spring Boot developers from Alpixn Technologies. Our staff augmentation model enables you to seamlessly integrate top Spring Boot experts into your team for specialized tasks.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Choose our project-based model to hire Spring Boot developers for specific, time-bound projects. Alpixn Technologies ensures tailored Spring Boot solutions with timely delivery and exceptional quality, meeting your business requirements.', points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsSpringBoot = [
    { q: 'What are the key steps to hiring a Spring Boot Developer?', a: 'The process begins with defining your project needs and the required developer skills. [40] Next, candidates are sourced and pre-screened, followed by technical interviews and coding challenges to assess their expertise. [5, 27] Once you select the best fit, you can choose an engagement model and onboard the developer to your team. [27]' },
    { q: 'Do you offer support and maintenance services for my Spring Boot project?', a: 'Yes, comprehensive support and maintenance services are typically offered post-deployment. [33] This includes bug fixes, performance monitoring, security updates, and feature enhancements to ensure your application remains robust and efficient. [33]' },
    { q: 'Can we create a microservices architecture using Spring Boot?', a: 'Absolutely. Spring Boot is a de-facto standard for developing Java microservices due to its features like embedded servers and auto-configuration, which simplify the process. [1, 2, 17] Paired with Spring Cloud, it provides a powerful toolkit for building resilient, scalable, and manageable microservice-based systems. [1, 7]' },
    { q: 'How do you ensure your Spring Boot developer will be a good fit for my requirements?', a: 'A thorough vetting process ensures a good fit. [20, 27] This includes reviewing portfolios, conducting multiple interview rounds (including HR and technical), and assessing both hard skills (like Java and Spring knowledge) and soft skills (like communication and problem-solving). [5, 20]' },
    { q: 'Do your Spring Boot developers have experience in agile methodology?', a: 'Yes, our developers are well-versed in Agile methodologies like Scrum and Kanban. [9, 26] This approach allows for flexibility, continuous collaboration with clients, and iterative development, ensuring the final product aligns with business needs. [12, 28]' },
    { q: 'What are the advantages of hiring a dedicated Spring Boot developer from Alpixn Technologies?', a: 'Hiring a dedicated developer provides access to specialized expertise, ensures undivided focus on your project, offers cost-efficiency compared to in-house hiring, and allows for greater flexibility. [21, 35, 38] You get a professional who integrates into your team, leading to faster delivery and high-quality results. [24, 38]' },
    { q: 'What are the different engagement models for hiring a Spring Boot developer?', a: 'Common engagement models include the Dedicated Team model for long-term projects, Staff Augmentation to extend your current team with specific skills, and a Project-Based (or Fixed Price) model for well-defined, short-term projects. [4, 6, 11]' },
    { q: 'What are the key skills and experience to look for in a Spring Boot developer?', a: 'A skilled Spring Boot developer must have a strong proficiency in Java and a deep understanding of the Spring Framework, including Spring Core, MVC, and Security. [3, 15] Essential skills also include experience with RESTful API development, microservices architecture, database management (JPA/Hibernate), and DevOps tools. [3, 15, 18]' },
    { q: 'How much does it cost to hire a Spring Boot developer?', a: 'The cost varies based on experience, location, and engagement model. In the US, the average hourly rate for a Spring developer can range from approximately $43 to over $59, with senior developers commanding higher rates. [8, 43, 47] Hiring from global talent pools can sometimes offer more cost-effective solutions. [48]' },
    { q: 'Will the hired Java Spring Boot resources work in any time zone?', a: 'Yes, agencies often provide resources with a minimum number of overlapping work hours with your time zone to ensure seamless communication and collaboration. [34] This is a key aspect of providing flexible, remote talent.' },
    { q: 'Do you provide an NDA for my project?', a: 'Yes, signing a Non-Disclosure Agreement (NDA) is a standard practice to ensure the confidentiality and security of your project idea and proprietary information. [34]' },
    { q: 'What if I want to replace the hired Java Spring Boot developer if I don\'t like the performance?', a: 'Reputable agencies typically offer a replacement policy. [38] If you are not satisfied with a developer\'s performance, they will work with you to find a more suitable candidate from their talent pool to ensure your project stays on track. [38]' },
    { q: 'How can I monitor & analyze hired developer performance?', a: 'Performance can be monitored through regular check-ins, transparent project management tools (like Jira or Trello), code reviews, and tracking key performance indicators (KPIs) such as task completion rates, code quality, and adherence to deadlines. [22, 25, 30, 39]' },
    { q: 'Do you work with Microservice architecture in Spring Boot?', a: 'Yes, working with microservice architecture is a core competency. Spring Boot is an excellent choice for building microservices, as it simplifies development and allows for the creation of small, independent, and scalable services. [1, 7, 29]' }
];

const userGuideContentSpringBoot = {
    'Why Hire Dedicated Spring Boot Developers?': {
        intro: 'Hiring dedicated Spring Boot developers ensures that your project is handled by professionals with in-depth knowledge of the Spring ecosystem. Here’s why you should consider hiring our Spring Boot experts:',
        points: [
            { title: 'Specialized Expertise', text: 'Our experienced Java Spring Boot developers bring advanced knowledge of Spring frameworks, microservices architecture, RESTful APIs, and cloud integrations. By choosing to hire certified Spring Boot developers, you guarantee high-quality, future-proof solutions tailored to your business needs.' },
            { title: 'Faster Development Cycles', text: 'When you hire dedicated Java Spring Boot developers, you benefit from their efficiency in delivering projects faster without compromising quality. Their expertise accelerates the development process, ensuring the timely delivery of scalable and robust applications.' },
            { title: 'Agile and Flexible Engagement Models', text: 'We offer flexible engagement models, allowing you to hire Spring Boot developers as per your project requirements. Whether you need a hire skilled Spring Boot developer for short-term tasks or full-time hiring for extensive projects, we’ve got you covered.' },
            { title: 'Focus on Security and Performance', text: 'When you hire Spring Boot experts, you get applications built with security best practices and performance optimization. From authentication protocols to database management, our developers ensure your project meets industry standards.' },
            { title: 'Hire Spring Boot Developers from Alpixn Technologies', text: 'Spring Boot Developer Hiring from Alpixn Technologies gives you access to a pool of highly qualified professionals. Whether you’re looking to hire Java Spring Boot developers or hire certified Spring Boot developers for complex enterprise applications, our team is ready to help you achieve your vision.' }
        ]
    },
    'Key Features of Spring Boot That Help Businesses': {
        intro: 'Spring Boot’s innovative features empower businesses to streamline development processes, enhance scalability, and improve efficiency:',
        points: [
            { title: 'Accelerated Development with Autoconfiguration', text: 'Spring Boot automates dependency management and configuration, reducing manual effort and speeding up the development cycle. Businesses that hire Spring Boot developers can launch applications faster without compromising quality.' },
            { title: 'Cost-Effective Deployment with Embedded Servers', text: 'Integrated servers like Tomcat and Jetty eliminate the need for external setups, making deployment simpler and more cost-efficient. Hire skilled Spring Boot developers to leverage this feature for a budget-friendly implementation.' },
            { title: 'Scalable Microservices Architecture', text: 'Spring Boot’s native support for microservices enables businesses to build scalable, modular applications that adapt to growth. Hiring dedicated Spring Boot programmers ensures a seamless transition to a microservices-based architecture.' },
            { title: 'Improved Time-to-Market with Spring Boot CLI', text: 'Spring Boot CLI accelerates prototyping and testing, allowing businesses to deliver products to the market swiftly. Hire experienced Java Spring Boot developers to utilize this feature effectively.' },
            { title: 'Robust Security with Built-in Frameworks', text: 'With Spring Security integration, businesses can implement enterprise-grade security measures, protecting sensitive data and user information. Hire dedicated Spring Boot developers to create secure, compliant applications.' },
            { title: 'Future-Proofing with Cloud-Native Capabilities', text: 'Spring Boot’s compatibility with cloud platforms ensures businesses can scale and adapt to dynamic market demands. Hiring dedicated Spring Boot developers enables seamless cloud integrations for long-term growth.' },
            { title: 'Simplified Maintenance Through Rich Ecosystem', text: 'Spring Boot integrates seamlessly with Spring Data, Spring Security, and other extensions, reducing maintenance complexity. By hiring remote Spring Boot developers, businesses can ensure continuous support and scalability.' }
        ],
        outro: 'Incorporating Spring Boot into your projects not only enhances operational efficiency but also drives innovation and growth. At Alpixn Technologies, we offer tailored Spring Boot Developer Hiring services, enabling businesses to hire Spring Boot experts who deliver high-quality solutions. Transform your business applications with the power of Spring Boot—hire skilled Spring Boot developers today and unlock unparalleled growth opportunities.'
    },
    'How to Hire a Skilled Spring Boot Developer: Process of Hiring Dedicated Java Spring Boot Developers': {
        intro: 'Hiring a skilled Spring Boot developer involves a structured process to ensure the selection of the right talent for your business needs. Here’s a step-by-step guide:',
        points: [
            { title: 'Define Your Requirements', text: 'Start by outlining your project’s scope, technical requirements, and desired outcomes. Decide whether you need to hire Java Spring Boot developers for backend development, microservices, or full-stack capabilities.' },
            { title: 'Identify Key Skills and Expertise', text: 'Look for developers proficient in Spring Boot, Java, and related frameworks like Hibernate and Spring Security. An experienced Java Spring Boot developer should also have expertise in RESTful APIs, microservices architecture, and DevOps tools.' },
            { title: 'Choose an Engagement Model', text: 'Decide on the engagement model that aligns with your project’s scale and timeline. Whether you’re looking to hire remote Spring Boot developers or hiring dedicated Spring Boot programmers, ensure the model offers flexibility and transparency.' },
            { title: 'Evaluate Portfolios and Experience', text: 'Analyze candidates’ past projects to assess their problem-solving abilities and technical depth. For critical projects, opt for certified Spring Boot developers who demonstrate proven expertise in building enterprise-grade applications.' },
            { title: 'Technical Assessment and Interviews', text: 'Conduct coding tests and technical interviews to evaluate problem-solving skills, coding efficiency, and familiarity with Spring Boot features. Ensure the candidate can handle real-world challenges and fits your team’s culture.' },
            { title: 'Collaborate with a Trusted Partner', text: 'Partnering with an experienced provider like Alpixn Technologies simplifies Spring Boot developer hiring. We ensure you hire skilled Spring Boot developers who are pre-vetted and equipped to meet your project needs.' },
            { title: 'Onboarding and Communication', text: 'Ensure smooth onboarding with clear communication channels, agile processes, and periodic performance reviews. Regular updates help track progress and maintain alignment with business goals.' }
        ],
        outro: 'Start your journey to building robust applications today—hire dedicated Spring Boot developers from Alpixn Technologies and experience the difference.'
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

// --- SECTIONS FOR HIRE SPRING BOOT DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top Spring Boot Developers</h3>
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

const SpringBootStrengthsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Core Strengths of Our Spring Boot Developers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {springBootStrengths.map((service, index) => (
                        <motion.div key={index} className="bg-gray-800 p-8 rounded-lg text-center transform transition duration-500 hover:scale-105 hover:bg-gray-700"
                            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                            <div className="text-blue-400 mb-4 text-4xl mx-auto w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                                {/* Placeholder for icons like 'microservices-with-spring-boot' */}
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
                    Why Partner with Our Dedicated Spring Boot Development Team
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatYouGetSpringBoot.map((reason, index) => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Expertise of Our Spring Boot Developers</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {springBootTechExpertise.map(tech => (
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
                    <h2 className="text-4xl md:text-5xl font-bold">Hire Best Spring Boot Developers for Custom Solutions</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Advance your project with our top Spring Boot developers, delivering robust applications, scalable microservices, and secure enterprise-grade solutions.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {springBootSolutions.map((solution, index) => (
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

const FeaturedCaseStudySpringBoot = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Our Work Speaks for Itself</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Our experienced Java Spring Boot developers, proficient in advanced web technologies, deliver innovative and robust solutions. Hire Spring Boot developers to integrate modern technologies with comprehensive 24/7 support, ensuring seamless transitions from development to production.
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

const UserGuideSidebarSpringBoot = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentSpringBoot)[0]);
    const content = userGuideContentSpringBoot[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Essential Guide to Hiring Spring Boot Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentSpringBoot).map(topic => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top Spring Boot Developers in 3 Simple Steps</h2>
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Engagement Models to Hire Best Spring Boot Developers</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies offers flexible engagement models for Spring Boot development, providing custom solutions to address your unique business needs. Explore our engagement models:
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsSpringBoot.map((model, index) => (
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
                    {faqsSpringBoot.map((faq, index) => (
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
const HireSpringBootPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire Vetted Spring Boot Developers<br/>Top 1% Spring Boot Programmers for Your Project</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Experience unmatched scalability and performance with Spring Boot developers, delivering robust, high-performance backend solutions to build and deploy enterprise-grade applications quickly and efficiently.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Advanced Spring Boot Expertise</div>
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
        <SpringBootStrengthsSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Transform Your Software Projects?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire Our Expert Spring Boot Developers
            </motion.button>
        </section>
        <WhatYouGetSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Build Scalable, Future-Ready Solutions with Our Top Spring Boot Developers
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Call
            </motion.button>
        </section>

        <FeaturedCaseStudySpringBoot />
        <UserGuideSidebarSpringBoot />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireSpringBootPage;