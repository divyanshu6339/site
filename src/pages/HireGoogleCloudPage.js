import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE GOOGLE CLOUD DEVELOPERS PAGE ---

const googleCloudStrengths = [
    { title: 'Google Cloud Deployment', description: 'Hire dedicated Google Cloud developers to implement scalable, secure, and efficient cloud infrastructure.', icon: 'google-cloud-deployment' },
    { title: 'Google Cloud Migration', description: 'Seamlessly migrate your workloads with Google Cloud consultants for hire, ensuring minimal downtime and robust data integrity.', icon: 'google-cloud-migration' },
    { title: 'Google Cloud Management', description: 'Our GCP specialists deliver proactive monitoring, resource optimization, and compliance adherence for smooth cloud operations.', icon: 'google-cloud-management' },
    { title: 'Google Cloud App', description: 'Hire top Google Cloud Platform consultants to build high-performance applications using cutting-edge tools and GCP’s native capabilities.', icon: 'google-cloud-app' }
];

const whatYouGetGoogleCloud = [
    { title: 'Customized Cloud Solutions', description: 'Hire Google Cloud specialists to design tailored solutions that align with your business needs, leveraging GCP’s advanced tools and technologies. Our experts ensure seamless scalability, optimized performance, and cost efficiency for every project.' },
    { title: 'Rapid Deployment with Minimal Downtime', description: 'Hire dedicated Google Cloud developers to handle deployments efficiently, ensuring minimal disruption to operations. Our GCP developers implement robust strategies for fault tolerance and operational continuity.' },
    { title: 'Fast Time-to-Market', description: 'Accelerate your product delivery by hiring Google Cloud Platform developers experienced in streamlining development pipelines and integrating CI/CD practices. Our team minimizes bottlenecks, ensuring faster deployment.' },
    { title: 'Proactive Support and Maintenance', description: 'With Google Cloud consultants for hire, experience 24/7 monitoring, timely upgrades, and security compliance. Our dedicated team ensures your cloud environment remains secure, optimized, and future-ready.' }
];

const googleCloudTechExpertise = ['App-Engine-Gae', 'Google-Bigquery', 'Google-Cloud-CDN', 'Google-Cloud-Dataflow', 'Google-Cloud-Dataproc', 'Google-Cloud-Functions', 'Google-Cloud-Spanner', 'Google-Cloud-Sql', 'Google-Compute-Engine-Gce'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const googleCloudSolutions = [
    { title: 'Google Cloud End-to-end Integration', description: 'Hire Google Cloud specialists to integrate GCP services seamlessly, enabling cohesive workflows, enhanced scalability, and optimized cloud infrastructure performance.' },
    { title: 'Google G Suite Services', description: 'Our highly skilled Google Cloud developers provide customize G Suite operations, streamlining communication, collaboration, and productivity for businesses of all sizes.' },
    { title: 'Google Cloud IoT', description: 'Hire GCP developers to design intelligent IoT solutions leveraging GCP’s data analytics and device management for innovative, connected systems.' },
    { title: 'Google Cloud Application', description: 'Hire Google Cloud platform developers to build dynamic, scalable applications optimized for user experience and high-performance workloads.' },
    { title: 'Google Cloud Consultation', description: 'Hire top Google Cloud platform consultants to assess business needs, strategize cloud solutions, and maximize GCP’s potential.' },
    { title: 'Google Cloud Security and Compliance', description: 'Hire Google Cloud consultants to implement robust security measures, ensuring compliance with industry standards within cloud environment.' },
    { title: 'Google Cloud Strategy and Assessment', description: 'Google Cloud services provide in-depth strategy planning, workload assessment, & alignment with business goals for seamless cloud adoption.' },
    { title: 'Google Cloud Infrastructure Services', description: 'Cloud developers for hire create resilient, scalable infrastructure, ensuring cost-efficiency, operational excellence, and rapid deployment.' },
    { title: 'Identity and Access Management', description: 'Hire Google storage developers to implement IAM solutions, ensuring secure access control, user authentication, & regulatory compliance.' }
];

const engagementModelsGoogleCloud = [
    { title: 'Dedicated Team', description: 'Assemble a dedicated team of Google Cloud developers exclusively focused on your project. This model guarantees expert-driven cloud architecture, seamless integration of Google Cloud services, and consistent progress aligned with your strategic goals.', points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'] },
    { title: 'Staff Augmentation', description: 'Strengthen your existing team with experienced Google Cloud developers to address skill gaps, enhance productivity, and meet deadlines—all while preserving your team’s existing workflows and structure.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Choose a project-based model for Google Cloud development to achieve targeted, efficient delivery of specific cloud objectives. This approach is ideal for well-defined projects with clear timelines and budgets.', points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsGoogleCloud = [
    { q: 'What is Google Cloud Platform and why is it important?', a: 'Google Cloud Platform (GCP) is a suite of cloud computing services that provides scalable infrastructure, advanced data analytics, and machine learning capabilities. It\'s important because it enables businesses to build, test, and deploy applications on a secure, reliable, and highly scalable global network, which accelerates innovation and reduces operational costs.' },
    { q: 'What skills do your Google Cloud developers possess?', a: 'Our developers possess a wide range of skills, including proficiency in core GCP services like Compute Engine, App Engine, and Kubernetes Engine. They are also experts in data services like BigQuery and Cloud SQL, have strong knowledge of DevOps practices using Cloud Build, and are skilled in implementing robust security measures with IAM.' },
    { q: 'Can GCP be integrated with existing IT infrastructure?', a: 'Yes, GCP is designed for hybrid and multi-cloud environments. It can be seamlessly integrated with your existing on-premises infrastructure and other cloud platforms. Our Google Cloud developers are experienced in creating hybrid solutions that provide flexibility and consistency across different environments.' },
    { q: 'What makes GCP different from other cloud providers?', a: 'GCP stands out for its high-performance global network, leadership in Kubernetes and containerization, and advanced capabilities in data analytics and machine learning. Its flexible, customer-friendly pricing and commitment to open-source technologies also make it a preferred choice for many businesses.' },
    { q: 'How does GCP ensure data security and compliance?', a: 'GCP employs a multi-layered security model to protect data. This includes data encryption at rest and in transit, a secure global network, and advanced threat detection. It also adheres to a wide range of international compliance standards, such as GDPR and HIPAA, to help businesses meet their regulatory obligations.' },
    { q: 'Is GCP suitable for startups and small businesses?', a: 'Yes, GCP is highly suitable for startups and small businesses. It offers a free tier, pay-as-you-go pricing, and a range of scalable services that allow small businesses to start with minimal investment and scale their infrastructure as they grow. The Google for Startups Cloud Program also provides credits and support to help new businesses get started.' },
    { q: 'What is the onboarding process for a dedicated GCP developer?', a: 'Our onboarding process is designed to be quick and efficient. After you select a developer, we handle all the administrative and setup tasks. We then facilitate an introductory meeting to integrate the developer into your team and workflow, ensuring they can start contributing to your project from day one.' },
    { q: 'How do you stay updated with the latest GCP technologies?', a: 'Our developers are committed to continuous learning. They regularly participate in training, attend industry conferences, and work towards obtaining the latest Google Cloud certifications. This ensures they are always up-to-date with the newest services and best practices on the GCP platform.' }
];

const userGuideContentGoogleCloud = {
    'The Role of Google Cloud Developers': {
        intro: 'Google Cloud developers play a pivotal role in leveraging GCP’s full potential to create, manage, and optimize cloud-based solutions tailored to business requirements. Their expertise spans designing scalable infrastructures, integrating advanced tools, and maintaining secure, compliant environments. Key Responsibilities:',
        points: [
            { title: 'Architecting Scalable Cloud Solutions', text: 'Hire dedicated Google Cloud developers to design robust cloud architectures that handle dynamic workloads while ensuring cost efficiency and performance.' },
            { title: 'Custom Application Development', text: 'Google Cloud developers for hire specialize in creating bespoke applications utilizing GCP’s comprehensive suite of services and tools.' },
            { title: 'Seamless Cloud Migration', text: 'Hiring GCP developers ensures smooth transitions to the cloud with minimal downtime and full data integrity during migration processes.' },
            { title: 'Optimizing Cloud Operations', text: 'Hire Google Cloud platform developers for proactive monitoring, performance tuning, and resource optimization to maximize operational efficiency.' },
            { title: 'Ensuring Security and Compliance', text: 'Hire Google Cloud consultants to implement industry-standard security protocols, safeguarding data and ensuring compliance with regulatory requirements.' },
            { title: 'Integrating Advanced Cloud Services', text: 'Cloud developers for hire excel in integrating AI, IoT, and big data services within your Google Cloud environment for enhanced functionality.' }
        ]
    },
    'Benefits of Hiring a Google Cloud Engineer': {
        intro: '',
        points: [
            { title: 'Expertise in Scalable Cloud Architecture', text: 'When you hire Google Cloud developers, you gain access to specialists who design scalable and resilient cloud infrastructures. These professionals ensure seamless performance and cost-efficiency for your business-critical applications.' },
            { title: 'Accelerated Development and Deployment', text: 'Hire GCP developers to leverage their expertise in streamlining development pipelines, implementing CI/CD practices, and reducing time-to-market for your products.' },
            { title: 'Enhanced Security and Compliance', text: 'Hire Google Cloud consultants to fortify your cloud environment with advanced security measures, ensuring compliance with industry regulations and safeguarding sensitive data.' },
            { title: 'Optimized Resource Utilization', text: 'Google Cloud developers for hire utilize GCP’s resource management tools to reduce operational costs while maximizing application performance and reliability.' },
            { title: 'Seamless Cloud Migration and Integration', text: 'Hiring GCP developers ensures smooth transitions to the cloud, maintaining data integrity and integrating existing systems for enhanced business continuity.' },
            { title: 'Custom Cloud Solutions Tailored to Business Needs', text: 'Hire dedicated Google Cloud developers to build solutions that align with your unique requirements, leveraging the full potential of GCP’s advanced capabilities.' },
            { title: 'Continuous Support and Maintenance', text: 'With Google Cloud consultants for hire, benefit from proactive monitoring, troubleshooting, and regular updates to keep your cloud environment secure and efficient.' },
            { title: 'Expertise in Advanced Tools and Technologies', text: 'Hire top Google Cloud platform consultants to implement AI, machine learning, IoT, and big data tools, driving innovation and competitive advantage.' }
        ]
    },
    'Necessary Skills of Google Cloud Developers': {
        intro: '',
        points: [
            { title: 'Proficiency in Google Cloud Platform (GCP) Services', text: 'Google Cloud developers for hire must possess in-depth knowledge of GCP’s core services, including Compute Engine, App Engine, and Cloud Functions.' },
            { title: 'Expertise in Cloud Architecture Design', text: 'Hire Google Cloud platform developers skilled in creating scalable, fault-tolerant, and cost-effective cloud architectures tailored to diverse business needs.' },
            { title: 'Strong Understanding of DevOps Practices', text: 'Hiring GCP developers ensures seamless integration of CI/CD pipelines, automated deployments, and containerization using tools like Kubernetes and Docker.' },
            { title: 'Advanced Networking and Security Skills', text: 'Hire Google Cloud specialists proficient in configuring firewalls, managing VPCs, and implementing robust IAM policies for secure cloud operations.' },
            { title: 'Hands-on Experience in Data Management', text: 'Hire Google storage developers to manage and optimize databases, big data analytics, and storage solutions using GCP’s data processing services.' },
            { title: 'Knowledge of Programming and Scripting Languages', text: 'Hire GCP developers adept in Python, Java, or Go for developing, automating, and maintaining cloud-based applications.' },
            { title: 'Familiarity with Compliance Standards', text: 'Google cloud consultants for hire should ensure adherence to data privacy and compliance requirements, such as GDPR and HIPAA, when designing cloud solutions.' }
        ]
    },
    'Key Considerations When Hiring Google Cloud Developers': {
        intro: '',
        points: [
            { title: 'Assess Technical Expertise', text: 'Ensure the candidate possesses experience with GCP’s diverse service offerings and the ability to integrate advanced cloud functionalities.' },
            { title: 'Evaluate Industry Experience', text: 'Hire top Google Cloud platform consultants with a proven track record of delivering projects similar to your industry and business needs.' },
            { title: 'Prioritize Communication and Collaboration Skills', text: 'Effective collaboration with cross-functional teams is critical; hire Google Cloud consultants with strong interpersonal and communication abilities.' },
            { title: 'Confirm Scalability and Maintenance Skills', text: 'Hire dedicated Google Cloud developers to ensure your solutions are future-ready, scalable, and backed by reliable support and maintenance expertise.' },
            { title: 'Look for Problem-Solving Abilities', text: 'Cloud developers for hire must excel at troubleshooting, performance tuning, and resolving challenges in dynamic cloud environments.' }
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

// --- SECTIONS FOR HIRE GOOGLE CLOUD DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top Google Cloud Developers</h3>
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

const GoogleCloudStrengthsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Core Strengths Of Our Google Cloud Platform Developers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {googleCloudStrengths.map((service, index) => (
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
                    Why Partner with Our Dedicated Google Cloud Development Team
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatYouGetGoogleCloud.map((reason, index) => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Expertise of Our Google Cloud Platform Developers</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {googleCloudTechExpertise.map(tech => (
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
                    <h2 className="text-4xl md:text-5xl font-bold">Power Your Projects with Skilled Google Cloud Developers</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Our dedicated Google Cloud developers deliver scalable, secure, and high-performance solutions, turning your vision into reality by leveraging the full potential of Google Cloud services.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {googleCloudSolutions.map((solution, index) => (
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

const FeaturedCaseStudyGoogleCloud = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Our Work Speaks for Itself</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Explore our success stories showcasing tailored Google Cloud solutions that solved complex challenges, optimized workflows, and accelerated digital transformation for diverse industries with measurable results.
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

const UserGuideSidebarGoogleCloud = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentGoogleCloud)[0]);
    const content = userGuideContentGoogleCloud[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Hire Google Cloud Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentGoogleCloud).map(topic => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top Google Cloud Developers in 3 Simple Steps</h2>
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Engagement Models to Hire Best GCP Programmers</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies offers flexible engagement models for Google Cloud development services, ensuring custom solutions for your businesses. Explore the ideal model for your project.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsGoogleCloud.map((model, index) => (
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
                    {faqsGoogleCloud.map((faq, index) => (
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
const HireGoogleCloudPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire Google Cloud Developers<br/>Elite Vetted GCP Programmers for Your Project</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Our dedicated Google Cloud developers bring unparalleled cloud expertise and innovation to your projects. Partner with us to create scalable, secure, and high-performance solutions, transforming your vision into reality by harnessing the full potential of Google Cloud services.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Advanced Google Cloud Expertise</div>
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
        <GoogleCloudStrengthsSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Transform Your Software Projects?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire Our Google Cloud Developers
            </motion.button>
        </section>
        <WhatYouGetSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Build Scalable, Future-Ready Applications with Our Top Google Cloud Developers
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Call
            </motion.button>
        </section>

        <FeaturedCaseStudyGoogleCloud />
        <UserGuideSidebarGoogleCloud />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireGoogleCloudPage;