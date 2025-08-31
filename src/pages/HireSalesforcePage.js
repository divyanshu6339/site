import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE SALESFORCE DEVELOPERS PAGE ---

const salesforceStrengths = [
    { title: 'Salesforce CRM Customization', description: 'Our certified Salesforce developers deliver custom CRM solutions, enabling businesses to optimize processes and enhance customer relationships.', icon: 'salesforce-crm-customization' },
    { title: 'Salesforce API Development', description: 'Hire Salesforce engineers proficient in API integration to connect Salesforce with external systems for enhanced data synchronization seamlessly.', icon: 'api-development' },
    { title: 'Salesforce Platform Developer', description: 'Our Salesforce professionals craft scalable, robust applications leveraging Apex, Visualforce, and Lightning Web Components for unmatched performance.', icon: 'salesforce-platform-developer' },
    { title: 'Salesforce App Development', description: 'Hire dedicated Salesforce developers to build innovative, user-centric applications across Sales Cloud, Service Cloud, and Lightning platforms.', icon: 'salesforce-app-development' }
];

const whatYouGetSalesforce = [
    { title: 'Customized Solutions', description: 'Our team of certified Salesforce developers provides tailored CRM solutions, ensuring alignment with unique business needs to drive optimal efficiency. Hire Salesforce experts for bespoke integrations and configurations that enhance user experiences and improve customer engagement.' },
    { title: 'Certified Salesforce Experts', description: 'Our team comprises certified Salesforce consultants for hire with proven expertise in Sales Cloud, Service Cloud, and Lightning Development. With our Salesforce experts for hire, you gain access to advanced knowledge and best practices.' },
    { title: 'Fast Time-to-Market', description: 'Accelerate your project timelines with our experienced Salesforce professionals. We deliver streamlined, scalable solutions while maintaining quality and precision in deployment. Hiring a Salesforce developer with us ensures swift adaptations to changing market demands.' },
    { title: '24/7 Monitoring and Management', description: 'Hire Salesforce operations engineers for proactive monitoring, 24/7 system management, and quick issue resolution. Our Salesforce-certified developers ensure your infrastructure is always operational, secure, and optimized.' }
];

const salesforceTechExpertise = ['Trailhead', 'Visualforce', 'CRM', 'Apex', 'Marketing', 'Lightning', 'Heroku', 'Einstein'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const salesforceSolutions = [
    { title: 'Salesforce Implementation', description: 'Hire Salesforce consultants to implement tailored solutions that streamline workflows, enhance automation, and improve business efficiency across cloud ecosystems.' },
    { title: 'Salesforce Integration', description: 'Our Salesforce professionals specialize in seamless third-party integrations, enabling smooth data flow between Salesforce and other enterprise systems.' },
    { title: 'Salesforce Data Migration', description: 'Our highly skilled Salesforce developers offer secure data migration with zero downtime, ensuring a smooth transition from legacy systems to Salesforce delivering innovative solutions.' },
    { title: 'Salesforce Support Services', description: 'Hire Salesforce experts for round-the-clock support to resolve issues, optimize system performance, and ensure continuous business operations.' },
    { title: 'Salesforce AppExchange Developer', description: 'Hire Salesforce AppExchange developers for creating feature-rich, scalable, and user-friendly applications tailored to your business’s unique requirements.' },
    { title: 'Salesforce Marketing Cloud Developer', description: 'Our dedicated Salesforce developers craft customized Marketing Cloud solutions, empowering data-driven campaigns and enhancing customer engagement strategies.' },
    { title: 'Salesforce Lightning Developer', description: 'Hire Salesforce Lightning developers proficient in building modern, responsive, and intuitive user interfaces using Lightning Web Components.' },
    { title: 'Salesforce Third-Party Integration', description: 'Leverage the expertise of Salesforce integration developers for reliable and efficient third-party application integrations with Salesforce platforms.' },
    { title: 'Salesforce Support & Maintenance', description: 'Partner with us to hire a dedicated team of Salesforce developers offering maintenance and ongoing support for your applications.' }
];

const engagementModelsSalesforce = [
    { title: 'Dedicated Team', description: 'Assemble a dedicated team of Salesforce developers solely focused on your project. This model ensures custom CRM development, seamless Salesforce integrations, and consistent progress aligned with your organizational goals.', points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'] },
    { title: 'Staff Augmentation', description: 'Augment your existing team by adding skilled Salesforce developers to address skill gaps, enhance productivity, and expedite project delivery—all while maintaining your team’s structure and workflow.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Choose a project-based model for Salesforce development to ensure targeted and efficient delivery of specific CRM objectives. This model works best for well-defined projects with clear timelines and budgets.', points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsSalesforce = [
    { q: 'What is Salesforce?', a: 'Salesforce is a leading cloud-based Customer Relationship Management (CRM) platform that helps businesses of all sizes connect with their customers in a new way. It provides a suite of applications for sales, service, marketing, and more, all integrated on a single, shared platform.' },
    { q: 'What does a Salesforce developer do?', a: 'A Salesforce developer designs, builds, and customizes applications on the Salesforce platform. They use tools like Apex, Visualforce, and Lightning Web Components to create custom functionality, automate business processes, and integrate Salesforce with other systems to meet specific business needs.' },
    { q: 'How can Salesforce services improve our business operations?', a: 'Salesforce services can improve your business operations by providing a unified view of your customer, automating sales and marketing processes, improving customer service with tools like Service Cloud, and providing data-driven insights with analytics. This leads to increased efficiency, better customer relationships, and business growth.' },
    { q: 'How can Salesforce solutions help my business grow?', a: 'Salesforce solutions help businesses grow by improving lead management, shortening sales cycles, and increasing customer retention. With a scalable platform, you can easily add new features and users as your business expands, ensuring your CRM can support your growth at every stage.' },
    { q: 'What language is used in Salesforce Development?', a: 'The primary programming language used in Salesforce development is Apex, a strongly-typed, object-oriented language with a Java-like syntax. For front-end development, developers use Visualforce, Aura Components, and the modern Lightning Web Components (LWC) framework, which is based on standard web technologies like HTML and JavaScript.' },
    { q: 'What are the various Salesforce development services?', a: 'Salesforce development services include CRM customization, custom application development, API integration, data migration, and implementation of Salesforce Clouds (Sales, Service, Marketing). We also offer AppExchange app development and ongoing support and maintenance.' },
    { q: 'How fast can I hire a Salesforce developer?', a: 'With our streamlined hiring process and pool of pre-vetted Salesforce experts, you can typically hire and onboard a developer within a week. We work quickly to understand your needs and match you with the right talent to get your project started as soon as possible.' },
    { q: 'How do you hire Salesforce developers?', a: 'We have a rigorous hiring process that includes a technical assessment of skills in Apex, LWC, and integrations, a review of their portfolio and certifications, and multiple rounds of interviews to evaluate their problem-solving abilities and communication skills. This ensures we only provide top-tier, certified Salesforce professionals.' },
    { q: 'How much does Salesforce cost?', a: 'Salesforce pricing varies depending on the edition and the number of users. It is a subscription-based service with different tiers to suit businesses of different sizes. Development costs for custom solutions are separate and depend on the scope and complexity of the project.' },
    { q: 'How to find the best Salesforce development company?', a: 'To find the best company, look for one with a strong portfolio of successful Salesforce projects, a team of certified developers, and positive client reviews. It’s also important to choose a partner that understands your industry and offers transparent communication and flexible engagement models.' },
    { q: 'Can I hire Salesforce developers of my choice from Alpixn Technologies?', a: 'Yes, absolutely. We provide you with a shortlist of our best-fit, pre-vetted Salesforce developers, and you have the final say. You can interview the candidates to ensure they have the right technical skills and are a good cultural fit for your team.' },
    { q: 'What are the advantages of Salesforce consulting services?', a: 'Salesforce consulting services provide strategic guidance to help you maximize your ROI on the Salesforce platform. Consultants can help you with roadmap planning, process optimization, and choosing the right solutions to align your CRM strategy with your business goals, ensuring a successful and impactful implementation.' }
];

const userGuideContentSalesforce = {
    'What is the Role of a Salesforce Developer?': {
        intro: 'A Salesforce developer is a specialized software engineer focused on designing, implementing, and maintaining solutions within the Salesforce ecosystem. They leverage Salesforce’s robust platform to create custom applications, automate business processes, and improve user experiences for organizations of all sizes. Salesforce developers not only tailor solutions to meet business needs but also ensure seamless integration with existing systems. Key responsibilities include:',
        points: [
            { title: 'Custom Application Development', text: 'Crafting bespoke applications using Apex (Salesforce’s programming language) and Visualforce to address unique business requirements.' },
            { title: 'Integration Expertise', text: 'Connecting Salesforce to external systems using APIs, middleware, and tools like MuleSoft.' },
            { title: 'Customization and Configuration', text: 'Modifying Salesforce features and creating declarative solutions using tools like Process Builder, Flow, and App Builder.' },
            { title: 'Data Management', text: 'Ensuring accurate data migration, implementing robust data models, and maintaining data integrity within the Salesforce environment.' },
            { title: 'Platform Optimization', text: 'Enhancing system performance through custom code, Lightning Web Components (LWCs), and UX/UI improvements.' },
            { title: 'Salesforce Maintenance and Updates', text: 'Staying ahead with Salesforce releases and ensuring that applications remain compatible and optimized.' }
        ],
        outro: 'Organizations that hire Salesforce engineers benefit from enhanced operational efficiency, better customer relationship management, and scalable solutions tailored to evolving business needs.'
    },
    'Key Skills and Qualifications for Salesforce Developers': {
        intro: 'When you want to hire a Salesforce developer, ensuring they possess the right technical skills and qualifications is crucial. Salesforce developers bring value through their expertise in both the platform’s core functionalities and their ability to customize it.',
        points: [
            { title: 'Technical Skills', text: 'Proficiency in Apex and Visualforce: Core programming languages used to extend Salesforce capabilities.\nExpertise in Lightning Framework: Essential for creating dynamic, responsive user interfaces using Salesforce Lightning Web Components (LWC).\nIntegration Knowledge: Familiarity with REST/SOAP APIs and tools like MuleSoft for seamless system integration.\nDeclarative Development: Skilled in using point-and-click tools like Flow, Process Builder, and App Builder.\nData Management: Expertise in SOQL, SOSL, and managing large data sets efficiently.\nVersion Control and CI/CD: Experience with tools like Git, Jenkins, and Copado for streamlined development workflows.' },
            { title: 'Qualifications', text: 'Salesforce certifications such as:\n- Certified Salesforce Developer (Platform Developer I & II)\n- Salesforce Certified Administrator\n- Salesforce Certified Sales Cloud Consultant\n- Salesforce Certified Service Cloud Consultant\n- Salesforce CPQ Specialist\nA background in Computer Science or a related field.\nProven experience in building scalable Salesforce applications.' }
        ]
    },
    'Benefits of Hiring a Salesforce Developer': {
        intro: 'Bringing on a Salesforce developer offers a strategic advantage by optimizing your CRM system and aligning it with your business objectives. Here are some key benefits:',
        points: [
            { title: 'Customization to Your Needs', text: 'A dedicated Salesforce developer tailors the platform’s features to suit your specific workflows, ensuring a personalized solution.' },
            { title: 'Streamlined Business Processes', text: 'Automating repetitive tasks and improving workflows using Salesforce tools like Flow and Process Builder.' },
            { title: 'Improved System Integration', text: 'Connecting Salesforce with third-party applications ensures seamless data flow and unified operations.' },
            { title: 'Scalability', text: 'Designing flexible solutions that can adapt to growing business requirements without disrupting existing systems.' },
            { title: 'Enhanced User Experience', text: 'Leveraging Salesforce Lightning to create intuitive interfaces that improve productivity and user satisfaction.' },
            { title: 'Data-Driven Insights', text: 'Implementing robust data models and analytics tools for actionable business insights.' }
        ],
        outro: 'Whether you’re seeking to hire a Salesforce lightning developer or find remote Salesforce developers, investing in the right expertise ensures a significant return on investment.'
    },
    'When Should You Hire a Salesforce Developer?': {
        intro: 'Identifying the right time to hire Salesforce professionals is crucial to ensuring project success and achieving business goals. Here are some scenarios where hiring a Salesforce developer becomes essential:',
        points: [
            { title: 'Implementing a New Salesforce Instance', text: 'If your organization is new to Salesforce, hiring a certified Salesforce developer ensures proper setup, customization, and integration with existing systems.' },
            { title: 'Upgrading to Salesforce Lightning', text: 'Transitioning from Classic to Lightning requires specialized skills. Salesforce Lightning developers streamline the upgrade process and enhance platform usability.' },
            { title: 'Custom Application Requirements', text: 'When off-the-shelf solutions don’t meet your unique needs, a Salesforce developer can build custom applications using Apex, Visualforce, and Lightning Web Components.' },
            { title: 'Complex Integrations', text: 'If your business relies on multiple systems, a Salesforce integration expert ensures seamless data flow across platforms.' },
            { title: 'Optimizing Existing Salesforce Solutions', text: 'If you’re not fully leveraging Salesforce’s potential, hiring a Salesforce consultant or expert can help optimize processes and uncover hidden value.' },
            { title: 'Expanding CRM Capabilities', text: 'For businesses looking to scale operations, Salesforce developers to hire can add new features like Service Cloud, Sales Cloud, or CPQ solutions to enhance productivity.' }
        ],
        outro: 'When you decide to hire a Salesforce consultant or build a dedicated team of Salesforce developers, you ensure your business stays competitive, efficient, and future-ready.'
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

// --- SECTIONS FOR HIRE SALESFORCE DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top Salesforce Developers</h3>
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

const SalesforceStrengthsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Brilliance That Defines Our Salesforce Developers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {salesforceStrengths.map((service, index) => (
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
                    Why Partner with Our Dedicated Salesforce Development Team
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatYouGetSalesforce.map((reason, index) => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Expertise of Our Salesforce Developers</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {salesforceTechExpertise.map(tech => (
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
                    <h2 className="text-4xl md:text-5xl font-bold">Power Your Projects with Skilled Salesforce Developers</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Our dedicated Salesforce developers for hire deliver scalable, secure, and performance-optimized solutions tailored to your business requirements and growth.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {salesforceSolutions.map((solution, index) => (
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

const FeaturedCaseStudySalesforce = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Our Work Speaks for Itself</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Our team of Salesforce professionals excels in creating data-driven, user-centric solutions. Whether optimizing workflows or implementing custom CRM features, we help your business achieve transformative results.
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

const UserGuideSidebarSalesforce = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentSalesforce)[0]);
    const content = userGuideContentSalesforce[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Hire Salesforce Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentSalesforce).map(topic => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top Salesforce Developers in 3 Simple Steps</h2>
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Engagement Models to Hire Best Salesforce Programmers</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies offers flexible engagement models for Salesforce development services, designed to deliver customized solutions. Explore your options below.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsSalesforce.map((model, index) => (
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
                    {faqsSalesforce.map((faq, index) => (
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
const HireSalesforcePage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire Expert Salesforce Developers<br/>Recruit Top-Rated Salesforce Developers for Your Project</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Our dedicated Salesforce developers bring expertise and innovation to your projects. Partner with us to build scalable, secure, and high-performance Salesforce solutions that transform your vision into reality for optimal business outcomes.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Salesforce Expertise</div>
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
        <SalesforceStrengthsSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Transform Your Software Projects?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire Our Salesforce Developers
            </motion.button>
        </section>
        <WhatYouGetSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Build Scalable, Future-Ready Applications with Our Top Salesforce Developers
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Call
            </motion.button>
        </section>

        <FeaturedCaseStudySalesforce />
        <UserGuideSidebarSalesforce />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireSalesforcePage;