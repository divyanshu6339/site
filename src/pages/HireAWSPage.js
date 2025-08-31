import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE AWS DEVELOPERS PAGE ---

const awsStrengths = [
    { title: 'AWS App Development', description: 'Hire experienced AWS developers to craft cloud-native applications leveraging AWS Lambda, DynamoDB, and S3 for robust performance and flexibility.', icon: 'aws-app-development' },
    { title: 'Customized AWS Solutions', description: 'Our AWS developers design bespoke solutions using AWS Cognito, EC2, and CloudFormation, ensuring seamless integration with existing infrastructure.', icon: 'customized-aws-solutions' },
    { title: 'AWS DevOps Implementation', description: 'Hire AWS DevOps engineers for seamless CI/CD pipelines, automated deployments, and infrastructure management using tools like CodePipeline and CodeDeploy.', icon: 'aws-devops-implementation' },
    { title: 'AWS Migration', description: 'Our AWS consultants for hire specialize in secure, efficient migration to Amazon Web Services, minimizing downtime and ensuring data integrity for secure solutions.', icon: 'aws-migration' }
];

const whatYouGetAWS = [
    { title: 'Agile Project Execution', description: 'Hire experienced AWS developers with expertise in agile methodologies to ensure streamlined project delivery. Our team adapts to changing requirements, delivering iterative progress for seamless cloud integration.' },
    { title: 'Cost-Effective Cloud Strategies', description: 'Our AWS developers for hire craft efficient cloud strategies tailored to your unique needs, optimizing infrastructure and reducing operational costs. We ensure budget-friendly, scalable solutions that maximize your cloud investment.' },
    { title: 'End-to-End Development', description: 'Whether designing cloud architectures, building APIs, or implementing serverless solutions, hire an AWS developer from our team to ensure end-to-end technical excellence across your cloud projects.' },
    { title: '24/7 Monitoring and Management', description: 'Hire AWS operations engineers for proactive monitoring, 24/7 system management, and quick issue resolution. Our AWS-certified developers ensure your infrastructure is always operational, secure, and optimized.' }
];

const awsTechExpertise = ['Amazon Cloudfront', 'Amazon Cloudwatch', 'Amazon EC2', 'Amazon Dynamodb', 'Amazon Route', 'AWS Cloudtrail', 'AWS Fargate', 'AWS Lambda', 'Simple Storage Service'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const awsSolutions = [
    { title: 'Multi-Region Deployment', description: 'Hire AWS cloud engineers to implement multi-region deployments, ensuring high availability, low latency, and resilience for your global applications.' },
    { title: 'AWS Managed Services', description: 'Our AWS developers provide end-to-end managed services, streamlining operations and maintaining peak performance for AWS infrastructure.' },
    { title: 'AWS Development Consulting', description: 'Hire an AWS consultant to receive expert guidance in designing and implementing AWS solutions tailored to your business requirements.' },
    { title: 'Cloud Security & Risk Management', description: 'Hire experienced AWS developers to implement robust security measures, protecting sensitive data and mitigating risks across cloud network.' },
    { title: 'Infrastructure as Code (IaC)', description: 'Hire AWS DevOps engineers to automate infrastructure provisioning and management using IaC tools like Terraform and AWS CloudFormation.' },
    { title: 'Serverless Application Development', description: 'Hire AWS programmers to build serverless applications using AWS Lambda, enabling cost-effective and scalable cloud-based solutions.' },
    { title: 'Data Analytics and Reporting', description: 'Hire AWS Cognito developers for advanced data analytics, leveraging AWS services like Redshift and QuickSight for actionable insights and detailed reporting.' },
    { title: 'Disaster Recovery Solutions', description: 'Find AWS developers to implement disaster recovery strategies, ensuring business continuity with minimal downtime and rapid recovery capabilities.' },
    { title: 'Custom API Development', description: 'Hire dedicated AWS developers to design secure, scalable, and efficient APIs that seamlessly integrate with your existing systems and applications.' }
];

const engagementModelsAWS = [
    { title: 'Dedicated Team', description: 'Build a dedicated team of AWS developers exclusively focused on your project. This model ensures expertise-driven cloud architecture, seamless integration of AWS services, and steady progress aligned with your business objectives.', points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'] },
    { title: 'Staff Augmentation', description: 'Enhance your existing team by adding experienced AWS developers to bridge skill gaps, boost productivity, and accelerate timelines—all while maintaining your team’s workflow and structure.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Opt for a project-based model for AWS development to achieve focused, efficient delivery of specific cloud objectives. This approach is ideal for clearly defined projects with set timelines and budgets.', points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsAWS = [
    { q: 'Why should I hire AWS consultants from Alpixn Technologies?', a: 'Hiring our AWS consultants gives you access to pre-vetted, certified experts who can architect, build, and manage scalable and secure cloud solutions. We provide a flexible, cost-effective way to leverage top-tier talent without the overhead of a full-time hire, ensuring your AWS infrastructure is optimized for performance and cost.' },
    { q: 'What hiring engagement options are available at Alpixn Technologies?', a: 'We offer several flexible engagement models, including a Dedicated Team for long-term projects, Staff Augmentation to supplement your existing team with specialized skills, and a Project-Based model for projects with a defined scope and timeline.' },
    { q: 'What skills should I look for in an AWS developer before hiring?', a: 'A strong AWS developer should have a deep understanding of core services like EC2, S3, and Lambda, proficiency in at least one programming language (like Python or Java), and hands-on experience with Infrastructure as Code (IaC) tools like CloudFormation or Terraform. Expertise in DevOps, security best practices, and database management is also crucial.' },
    { q: 'Can I hire an AWS developer for hourly or project-based tasks?', a: 'Yes, our hiring models are flexible. You can hire an AWS developer for hourly tasks, on a part-time basis for ongoing support, or for a specific project with a fixed scope and timeline, allowing you to get the expertise you need in the most cost-effective way.' },
    { q: 'How do I verify an AWS developer’s expertise?', a: 'You can verify their expertise by reviewing their AWS certifications (like AWS Certified Developer or Solutions Architect), checking their portfolio of past projects, and conducting a technical interview that includes practical, real-world problem-solving scenarios. We also provide our own rigorous vetting and assessment results.' },
    { q: 'What is the average cost of hiring an AWS developer?', a: 'The cost varies based on experience and location. In the U.S., the average hourly rate for an AWS developer is around $75, but can range from $50 for a junior developer to over $150 for a senior architect. We offer competitive pricing based on your specific project requirements and the developer\'s expertise.' },
    { q: 'Can your AWS developer help me complete my incomplete app development project?', a: 'Yes, our AWS developers are skilled at taking over and completing ongoing or stalled projects. They will perform a thorough review of your existing architecture and codebase to identify issues and create a clear plan to successfully complete and deploy your application.' },
    { q: 'How do I handle data security when working with AWS developers?', a: 'We prioritize data security by signing a strict Non-Disclosure Agreement (NDA) and adhering to AWS security best practices. Our developers are experienced in implementing IAM roles, encryption, and network security to ensure your data and infrastructure are protected.' },
    { q: 'What are common tools and technologies AWS developers should be familiar with?', a: 'Besides core AWS services, developers should be familiar with containerization technologies like Docker and Kubernetes, CI/CD tools such as Jenkins or AWS CodePipeline, and monitoring tools like CloudWatch. Proficiency in scripting languages and IaC tools is also essential.' },
    { q: 'Do you provide support and maintenance services after deployment?', a: 'Yes, we offer comprehensive post-deployment support and maintenance services. This includes 24/7 monitoring, performance optimization, security updates, and troubleshooting to ensure your AWS environment remains stable, secure, and efficient.' },
    { q: 'Do you provide NDA and IP protection for my project?', a: 'Absolutely. We ensure the complete confidentiality and protection of your intellectual property. We sign an NDA before beginning any work, and all IP rights for the work we do are transferred to you upon project completion.' }
];

const userGuideContentAWS = {
    'What is AWS Cloud Migration?': {
        intro: 'AWS Cloud Migration refers to the process of transferring an organization’s infrastructure, applications, and data from on-premises or other cloud platforms to Amazon Web Services. This migration involves meticulous planning, design, and execution to ensure minimal downtime and optimal performance. Organizations often hire AWS cloud engineers to manage this complex process, ensuring scalability, cost-efficiency, and security in the new environment. When you hire experienced and qualified AWS developers, they employ advanced tools like AWS Migration Hub, Server Migration Service (SMS), and Database Migration Service (DMS) to streamline the migration. Businesses can also hire AWS consultants to assess the current infrastructure, optimize migration strategies, and achieve operational excellence. AWS cloud migration ensures improved flexibility, high availability, and a seamless transition to a robust cloud ecosystem. For tailored solutions, hire an AWS expert or dedicated AWS developers for hire who specialize in minimizing risks and maximizing ROI.',
        points: []
    },
    'What Does an AWS Developer Do?': {
        intro: 'An AWS developer is responsible for designing, implementing, and managing cloud-based solutions using Amazon Web Services. They create scalable applications, configure cloud infrastructures, and optimize systems to leverage AWS’s robust features. When you hire AWS developers, you gain access to experts skilled in serverless architecture, database integration, API development, and cloud-native application design. AWS developers collaborate with teams to automate processes, improve performance, and ensure system reliability. Businesses often hire AWS Cognito developers to manage user authentication, AWS cloud engineers for infrastructure setup, and AWS DevOps engineers to streamline deployment pipelines. These professionals also focus on security, implementing IAM policies and encryption protocols to safeguard data. By hiring an AWS expert, organizations can benefit from customized cloud solutions that align with their goals. For tailored support, you can hire AWS consultants or dedicated AWS developers for hire who specialize in optimizing AWS environments for performance and cost-effectiveness. AWS developers are invaluable for modern businesses seeking agility and innovation, making AWS developer hiring a strategic investment.',
        points: []
    },
    'Skills to Look for in AWS Developers': {
        intro: 'When you plan to hire AWS developers, it’s crucial to evaluate their technical expertise and practical experience in AWS ecosystems. Below are essential skills to consider:',
        points: [
            { title: 'Proficiency in AWS Services', text: 'An AWS developer should have deep knowledge of core AWS services like EC2, S3, Lambda, RDS, and API Gateway. Specialists in user management? Consider hiring AWS Cognito developers for robust authentication solutions.' },
            { title: 'Infrastructure as Code (IaC)', text: 'Expertise in tools like CloudFormation and Terraform ensures your AWS infrastructure is version-controlled, repeatable, and scalable. For advanced IaC implementation, hire experienced AWS developers or AWS consultants for hire.' },
            { title: 'Programming Skills', text: 'To focus on application-level efficiency, hire AWS programmers with strong coding backgrounds.' },
            { title: 'DevOps Expertise', text: 'An understanding of CI/CD pipelines, containerization (Docker), and orchestration tools (Kubernetes) is vital. To streamline your deployment, hire AWS DevOps engineers or AWS Certified DevOps professionals.' },
            { title: 'Cloud Security', text: 'AWS developers must implement robust security practices, including IAM roles, data encryption, and compliance with industry standards. Hiring AWS cloud engineers ensures your applications remain secure and reliable.' },
            { title: 'Database Management', text: 'They should be adept at working with relational and NoSQL databases like DynamoDB and Aurora, optimizing performance for cloud applications.' }
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

// --- SECTIONS FOR HIRE AWS DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top AWS Developers</h3>
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

const AWSStrengthsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Specialized Skills of Our Certified AWS Developers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {awsStrengths.map((service, index) => (
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
                    Why Partner with Our Dedicated AWS Development Team
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatYouGetAWS.map((reason, index) => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Expertise of Our AWS Developers</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {awsTechExpertise.map(tech => (
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
                    <h2 className="text-4xl md:text-5xl font-bold">Power Your Projects with Skilled AWS Developers</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Our dedicated AWS developers for hire deliver scalable, secure, and performance-optimized solutions tailored to your business requirements and growth.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {awsSolutions.map((solution, index) => (
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

const FeaturedCaseStudyAWS = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Our Work Speaks for Itself</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Explore how our dedicated AWS developers have transformed businesses by delivering scalable, secure, and cost-effective solutions tailored to meet diverse industry needs and challenges.
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

const UserGuideSidebarAWS = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentAWS)[0]);
    const content = userGuideContentAWS[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Hire AWS Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentAWS).map(topic => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top AWS Developers in 3 Simple Steps</h2>
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Engagement Model to Hire Best AWS Programmers</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies provides flexible engagement models tailored for AWS development services, enabling customized solutions to meet your business needs. Let’s explore.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsAWS.map((model, index) => (
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
                    {faqsAWS.map((faq, index) => (
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
const HireAWSPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire Experienced AWS Developers<br/>Recruit Top-Rated AWS Engineers for Your Project</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Our dedicated AWS developers bring cloud expertise and innovation to your projects. Partner with us to build scalable, secure, and high-performance cloud solutions that transform your vision into reality, leveraging the power of AWS services for optimal results.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Advanced AWS Expertise</div>
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
        <AWSStrengthsSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Transform Your Software Projects?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire Our AWS Developers
            </motion.button>
        </section>
        <WhatYouGetSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Build Scalable, Future-Ready Applications with Our Top AWS Developers
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Call
            </motion.button>
        </section>

        <FeaturedCaseStudyAWS />
        <UserGuideSidebarAWS />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireAWSPage;