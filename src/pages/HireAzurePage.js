import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE AZURE DEVELOPERS PAGE ---

const azureStrengths = [
    { title: 'Microsoft Azure App Development', description: 'Build robust, high-performance applications with our Microsoft Azure development experts who specialize in scalable, cloud-native app architectures.', icon: 'microsoft-azure-app-development' },
    { title: 'Azure Infrastructure Development', description: 'Optimize infrastructure with our Azure DevOps engineers, ensuring seamless deployment, management, and scalability for dynamic business environments.', icon: 'azure-infrastructure-development' },
    { title: 'Microsoft Azure Cloud Integration', description: 'Integrate cloud services effortlessly by hiring Azure consultants to unify your ecosystem with cutting-edge Microsoft Azure tools and technologies.', icon: 'microsoft-azure-cloud-integration' },
    { title: 'Azure Application Development', description: 'Hire dedicated Azure developers to design custom applications that align with your business needs, leveraging Azure’s comprehensive capabilities.', icon: 'azure-application-development' }
];

const whatYouGetAzure = [
    { title: 'End-to-End Development', description: 'Hire Azure developers for a seamless development journey, from planning and prototyping to deployment. Our Microsoft Azure development experts ensure efficient cloud solutions tailored to your business goals.' },
    { title: 'Future-Ready Architecture', description: 'Collaborate with our Azure specialists to implement scalable, resilient architectures. By hiring Azure consultants, you secure innovative solutions for evolving market needs.' },
    { title: 'Performance Optimization', description: 'Hire Azure DevOps engineers to enhance application performance, ensuring reliability and agility. Our team leverages advanced tools to optimize your Azure ecosystem.' },
    { title: 'Post-launch Support', description: 'When you hire dedicated Azure developers, expect 24/7 post-launch support. We ensure continuous improvement and maintenance for your Azure infrastructure.' }
];

const azureTechExpertise = ['Azure App Services', 'Azure Blob Storage', 'Azure Cosmos DB', 'Azure Data Lake Storage', 'Azure Functions', 'Azure Key Vault', 'Azure Kubernetes', 'Azure Logic Apps', 'Azure Monitor'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const azureSolutions = [
    { title: 'Azure DevOps & Automation', description: 'Streamline CI/CD pipelines with our Azure DevOps engineers, automating deployments to enhance productivity and ensure efficient application lifecycle management.' },
    { title: 'Azure Data Analytics & ML', description: 'Hire remote Azure developers for advanced analytics and machine learning models, leveraging Azure’s AI-driven tools for actionable business intelligence.' },
    { title: 'Azure Serverless Deployment', description: 'Hire Azure consultants to build and deploy serverless applications, reducing infrastructure complexity while ensuring high availability and scalability.' },
    { title: 'Azure AI Services', description: 'Empower your business with intelligent Azure AI solutions by hiring Azure specialists, delivering automated workflows and personalized customer experiences.' },
    { title: 'Azure IoT', description: 'Hire Azure developers to create secure, scalable IoT solutions, enabling real-time device communication and data-driven insights for connected ecosystems.' },
    { title: 'Azure SQL Database', description: 'Optimize data management with our Microsoft Azure development experts, providing secure, scalable, and high-performance Azure SQL Database implementations.' },
    { title: 'Azure Kubernetes Service (AKS)', description: 'Leverage AKS for containerized applications with our Azure consultants, ensuring seamless orchestration, scalability, and fault tolerance in cloud environments.' },
    { title: 'Microsoft Azure Sentinel', description: 'Secure your infrastructure with our Microsoft Azure development experts, implementing Azure Sentinel for real-time threat detection and proactive security measures.' },
    { title: 'Azure Functions & Logic Apps', description: 'Hire Azure DevOps developers to automate workflows and build event-driven solutions using Azure Functions and Logic Apps, ensuring flexibility and efficiency.' }
];

const engagementModelsAzure = [
    { title: 'Dedicated Team', description: 'Build a dedicated team of Azure developers exclusively focused on your project. This model ensures expertise-driven cloud architecture, seamless integration of Azure services.', points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'] },
    { title: 'Staff Augmentation', description: 'Augment your existing team with experienced Azure developers to bridge skill gaps, enhance productivity, and accelerate timelines—while maintaining your team’s workflow and structure.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Choose a project-based model for Azure development to achieve focused and efficient delivery of specific cloud objectives. This is ideal for projects with clear timelines and budgets', points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsAzure = [
    { q: 'Is Azure cost-effective for startups?', a: 'Yes, Azure is highly cost-effective for startups due to its pay-as-you-go pricing model, which eliminates the need for large upfront investments in hardware. Startups can also take advantage of the Azure Free Tier to experiment with various services. Hiring an Azure developer can further optimize costs by ensuring efficient resource allocation.' },
    { q: 'Why is development on Azure better than traditional off-site development?', a: 'Development on Azure offers superior scalability, allowing you to adjust resources as your needs change. It also provides a global reach with data centers worldwide, enhanced security with built-in compliance, and a rich set of integrated tools for DevOps, AI, and data analytics, which are often lacking in traditional off-site setups.' },
    { q: 'What are the benefits of hiring dedicated Azure developers from Alpixn Technologies?', a: 'Hiring our dedicated Azure developers gives you access to a team of pre-vetted, certified experts who can architect and manage robust, scalable, and secure cloud solutions. We offer flexible engagement models, ensure rapid onboarding, and provide ongoing support to maximize your ROI on the Azure platform.' },
    { q: 'How do you ensure the quality of the developers you provide?', a: 'We have a rigorous vetting process that includes technical assessments, portfolio reviews, and multiple rounds of interviews to evaluate both technical and soft skills. Our developers are also encouraged to pursue and maintain Azure certifications to stay current with the latest technologies.' },
    { q: 'Are there any free services that allow me to test what Azure brings to the table for my brand?', a: 'Yes, Microsoft offers the Azure Free Account, which includes a number of popular services for free for 12 months, a $200 credit to use in your first 30 days, and over 25 services that are always free. This is a great way to explore and test Azure’s capabilities for your business.' },
    { q: 'Can I hire Azure developers for short-term projects?', a: 'Absolutely. We offer flexible engagement models, including project-based and hourly contracts, which are perfect for short-term projects, proof-of-concepts, or specific tasks. This allows you to leverage expert Azure skills for the exact duration you need them.' },
    { q: 'What will be the estimated cost to hire Azure developers?', a: 'The cost to hire an Azure developer depends on their experience and the engagement model. In the U.S., hourly rates can range from $50 for a junior developer to over $150 for a senior architect. We provide transparent, competitive pricing based on your specific project needs and scope.' },
    { q: 'What is the difference between Azure developers and Azure consultants?', a: 'An Azure developer is a hands-on technical expert who builds, deploys, and manages applications on the Azure platform. An Azure consultant, on the other hand, typically provides strategic guidance, helps with cloud adoption strategy, assesses existing infrastructure, and designs the high-level architecture for your cloud solutions.' },
    { q: 'How do I communicate and collaborate with the Azure developers I hire?', a: 'We use a variety of modern collaboration tools like Slack, Jira, and Microsoft Teams to ensure seamless communication. You will have direct access to the developers and will receive regular updates and progress reports. We can adapt to your preferred communication workflow to ensure a smooth partnership.' },
    { q: 'What industries benefit from hiring Azure developers?', a: 'A wide range of industries, including healthcare, finance, retail, manufacturing, and government, benefit from Azure’s secure, compliant, and scalable cloud services. Our Azure developers have experience in building industry-specific solutions that meet unique regulatory and operational needs.' },
    { q: 'What Azure technologies and tools do your developers specialize in?', a: 'Our developers specialize in a broad spectrum of Azure services, including Azure App Services, Azure Functions for serverless computing, Azure Kubernetes Service (AKS), Azure SQL Database, and Azure DevOps for CI/CD. They are also proficient in using tools like Terraform for Infrastructure as Code and Azure Monitor for performance tracking.' }
];

const userGuideContentAzure = {
    'The Role of Azure Developers': {
        intro: 'Azure developers are cloud computing specialists who harness the power of Microsoft Azure to build and manage secure, scalable, and reliable applications and services. These developers are skilled in designing cloud architectures, deploying applications, and optimizing infrastructure using Azure’s suite of tools and services, such as Azure Functions, Azure App Service, Azure Kubernetes Service (AKS), and more. They also handle security protocols, ensuring data integrity and compliance. Their primary responsibilities include:',
        points: [
            { title: 'Designing and implementing cloud solutions tailored to business needs', text: '' },
            { title: 'Automating cloud infrastructure with Azure DevOps and CI/CD pipelines', text: '' },
            { title: 'Integrating advanced Azure services like AI, Machine Learning, IoT, and big data analytics', text: '' },
            { title: 'Ensuring cloud applications are high-performing and secure, aligning with industry standards and best practices', text: '' }
        ],
        outro: 'Hiring Azure developers enables businesses to tap into the full potential of cloud services, ensuring that the solutions are not only functional but optimized for performance and security.'
    },
    'Why Do You Need a Dedicated Skilled Azure Developer': {
        intro: 'Hiring a dedicated Azure developer provides several benefits, especially when building complex, scalable, and high-performing applications in the Azure cloud environment. These specialized professionals bring deep knowledge of Azure services and tools, ensuring that your cloud applications are optimized for both cost and performance. Key reasons to hire dedicated Azure developers include:',
        points: [
            { title: 'Expertise in Cloud Architecture', text: 'Azure developers have extensive experience with cloud architecture design and best practices, which is crucial for building reliable, scalable applications.' },
            { title: 'Security and Compliance', text: 'Azure developers follow strict security protocols and compliance standards to ensure that applications are protected from cyber threats and meet regulatory requirements.' },
            { title: 'Optimized Resource Management', text: 'Dedicated Azure developers can optimize your infrastructure and manage costs by selecting the most suitable Azure services, ensuring efficient use of resources and avoiding unnecessary overheads.' },
            { title: 'Continuous Improvement', text: 'Azure developers help your business stay ahead by integrating the latest Azure innovations and updating applications to leverage new services and technologies.' },
            { title: 'Seamless Integration with Azure DevOps', text: 'Azure developers ensure continuous delivery and integration by using Azure DevOps tools to automate testing, deployment, and scaling processes.' }
        ]
    },
    'Benefits of Hiring Dedicated Azure Developers': {
        intro: 'Hiring dedicated Azure developers offers several significant advantages, especially for businesses looking to implement advanced, secure, and scalable cloud solutions. With deep expertise in Microsoft Azure, these developers can craft custom cloud architectures and leverage a wide range of Azure services for optimal performance and security.',
        points: [
            { title: 'Custom Solutions', text: 'Dedicated Azure developers build solutions that meet the specific needs of your business. They ensure that the cloud infrastructure is designed to scale efficiently with your growth.' },
            { title: 'Cost Optimization', text: 'By leveraging Azure’s flexible pricing models, dedicated developers can minimize costs, ensuring that your infrastructure is efficient and resource utilization is optimized.' },
            { title: 'Enhanced Security and Compliance', text: 'Azure developers follow the best practices for cloud security, ensuring that your applications comply with industry regulations and security standards, which is crucial in today’s threat landscape.' },
            { title: 'Seamless Integration', text: 'These experts integrate Azure services such as Azure Active Directory, Azure Kubernetes Service (AKS), and Azure Functions to enhance your system’s performance and scalability.' },
            { title: 'Ongoing Support and Maintenance', text: 'Hiring dedicated Azure developers ensures continuous support and proactive monitoring, which allows you to respond swiftly to issues and maintain the health of your cloud applications.' }
        ],
        outro: 'When you hire Azure developers, you ensure that your cloud strategy aligns perfectly with your business goals while maintaining scalability, security, and cost efficiency.'
    },
    'Key Skills of an Expert Azure Developer': {
        intro: 'An expert Azure developer possesses a combination of technical skills and practical experience to develop, deploy, and maintain Azure-based applications. These developers are not only proficient in Azure services but are also skilled in using related technologies and methodologies to create robust, scalable solutions.',
        points: [
            { title: 'Azure Services Expertise', text: 'Expert Azure developers are well-versed in key Azure services such as Azure App Service, Azure Functions, Azure SQL Database, and Azure Blob Storage. They use these services to build flexible, high-performing applications that run seamlessly in the cloud.' },
            { title: 'Cloud Architecture & Design', text: 'A skilled Azure developer understands cloud architecture principles and can design scalable, cost-effective solutions tailored to specific business needs.' },
            { title: 'Azure DevOps', text: 'Familiarity with Azure DevOps tools is critical. These developers streamline continuous integration and continuous delivery (CI/CD) pipelines, ensuring faster, more reliable software delivery.' },
            { title: 'Security & Compliance', text: 'Azure developers know how to implement stringent security practices such as data encryption, identity management using Azure Active Directory, and meeting industry compliance standards.' },
            { title: 'Containerization & Microservices', text: 'Expert Azure developers use Azure Kubernetes Service (AKS) to orchestrate containerized applications, making them more scalable and fault-tolerant. They also build microservices-based applications for greater modularity.' },
            { title: 'Data Management & Analytics', text: 'Azure developers work with Azure’s advanced data services, including Azure Data Lake, Azure Cosmos DB, and Azure Machine Learning to build data-driven applications with intelligent insights.' }
        ],
        outro: 'By hiring dedicated Azure developers with these specialized skills, you gain a team capable of building powerful cloud applications that meet the dynamic demands of your business. Whether you opt to hire Azure DevOps engineers, Azure consultants, or a dedicated team of Azure developers, these specialists ensure that your cloud infrastructure is optimized, secure, and future-ready.'
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

// --- SECTIONS FOR HIRE AZURE DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top Azure Developers</h3>
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

const AzureStrengthsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    The Excellence That Defines Our Azure Developers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {azureStrengths.map((service, index) => (
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
                    Why Partner with Our Dedicated Azure Development Team
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatYouGetAzure.map((reason, index) => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Expertise of Our Azure Developers</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {azureTechExpertise.map(tech => (
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
                    <h2 className="text-4xl md:text-5xl font-bold">Power Your Projects with Skilled Azure Developers</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Build next-generation cloud solutions with our Azure experts, combining Azure SQL, IoT, and serverless technologies to deliver robust, scalable, and future-proof applications aligned with your business goals.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {azureSolutions.map((solution, index) => (
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

const FeaturedCaseStudyAzure = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Our Work Speaks for Itself</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Explore our portfolio of case studies showcasing successful collaborations, tailored solutions, and measurable outcomes that have helped businesses achieve their goals with excellence by hiring Azure developers for custom cloud solutions.
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

const UserGuideSidebarAzure = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentAzure)[0]);
    const content = userGuideContentAzure[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Hire Azure Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentAzure).map(topic => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top Azure Developers in 3 Simple Steps</h2>
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Engagement Models to Hire Best Azure Programmers</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies offers flexible engagement models for custom Azure development services Explore the ideal model for your project.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsAzure.map((model, index) => (
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
                    {faqsAzure.map((faq, index) => (
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
const HireAzurePage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire Best Azure Developers<br/>Vetted Azure Engineers for Your Project</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Experience innovation with dedicated Azure developers who design, deploy, and optimize bespoke cloud architectures for ultimate efficiency. Achieve seamless Azure integration and superior scalability with experienced developers.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Advanced Azure Expertise</div>
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
        <AzureStrengthsSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Transform Your Software Projects?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire Our Azure Developers
            </motion.button>
        </section>
        <WhatYouGetSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Build Scalable, Future-Ready Applications with Our Top Azure Developers
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Call
            </motion.button>
        </section>

        <FeaturedCaseStudyAzure />
        <UserGuideSidebarAzure />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireAzurePage;