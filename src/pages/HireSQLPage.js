import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE SQL DEVELOPERS PAGE ---

const sqlStrengths = [
    { title: 'Advanced Database Design and Development', description: 'Our SQL programmers specialize in designing databases with advanced functionality, ensuring data flow across applications.', icon: 'advanced-database-design-and-development' },
    { title: 'Performance Tuning and Optimization', description: 'Our SQL experts focus on optimizing database performance, ensuring minimal query execution time and maximum efficiency.', icon: 'performance-tuning-and-optimization' },
    { title: 'SQL Cloud Database Development', description: 'Leverage the expertise of our SQL server developers to create secure cloud database solutions powered by Microsoft Azure and AWS.', icon: 'sql-cloud-database-development' },
    { title: 'SQL Smart Reporting and Analytics', description: 'Transform your raw data into actionable insights with customized SQL reporting tools built by our experienced SQL specialists.', icon: 'sql-smart-reporting-and-analytics' }
];

const whyPartnerSQL = [
    { title: 'High-Performing Platform', description: 'Leverage SQL-powered platforms optimized for speed, reliability, and scalability, ensuring seamless data management and superior performance for your business-critical applications.' },
    { title: 'Future-proof Applications', description: 'Develop applications built with cutting-edge SQL technologies, designed to adapt and evolve with your growing business needs and technological advancements.' },
    { title: 'Integration Expertise', description: 'Seamlessly connect SQL databases with diverse systems using our expertise in third-party integrations, ensuring data consistency and operational efficiency.' },
    { title: 'Qualified & Certified Talent', description: 'Collaborate with certified SQL developers skilled in delivering robust database solutions tailored to your project requirements.' }
];

const sqlTechExpertise = ['Big Query', 'DataGrip', 'DBeaver', 'Maria-db', 'MySql', 'Oracle', 'Php My Admin', 'Postgre Sql', 'Sequelize'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const sqlSolutions = [
    { title: 'SQL Cloud Database Management', description: 'Embrace the flexibility of the cloud with our SQL cloud database management services. From deployment to monitoring and optimization, our hire SQL server developers ensure your cloud databases are reliable, secure, and scalable.' },
    { title: 'SQL API Integration', description: 'Ensure seamless integration of your applications and databases with our SQL API integration services. Our SQL specialists develop and implement APIs that facilitate real-time data exchange and workflow automation.' },
    { title: 'SQL Data Migration Services', description: 'Migrate your data safely and efficiently with our SQL data migration services. Our hire SQL server developers handle complex migrations with precision, ensuring data integrity and minimal downtime.' },
    { title: 'SQL Analytics and Reporting Solutions', description: 'Turn your raw data into actionable insights with custom-built analytics and reporting solutions from our SQL experts for hire. By leveraging advanced SQL queries and data visualization tools, we create dashboards and reports that empower businesses to make data-driven decisions with confidence.' },
    { title: 'SQL Security Implementation', description: 'Your data is your most valuable asset, and securing it is our priority. Our SQL server specialists implement cutting-edge security measures, including encryption, access controls, and compliance protocols, to protect your database from threats.' },
    { title: 'SQL Performance Optimization', description: 'Achieve peak performance for your database with our SQL performance optimization services. Our SQL developers for hire analyze and fine-tune query execution, indexing, and server configurations, reducing latency and improving response times.' },
    { title: 'SQL Backend Development', description: 'Our SQL backend development team builds robust and scalable backend systems that power modern applications. By leveraging our expertise in SQL database architecture, we deliver seamless and efficient data operations tailored to your application’s needs.' },
    { title: 'SQL Architecture and Consulting', description: 'Designing a resilient database architecture is critical for achieving long-term performance and scalability. Our hire SQL database developers provide in-depth consulting services to create optimized schemas, efficient indexing strategies, and fault-tolerant designs.' },
    { title: 'SQL Server Administration & Support', description: 'Our skilled SQL developers ensure optimal performance and uptime with robust SQL server administration and support services. Our development team provides reliable routine maintenance to complex troubleshooting for secure and efficient operations.' }
];

const engagementModelsSQL = [
    { title: 'Dedicated Team', description: 'Assemble a dedicated team of SQL developers exclusively focused on your project. Benefit from expertise-driven database solutions, seamless collaboration, and consistent progress aligned with your business goals.', points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'] },
    { title: 'Staff Augmentation', description: 'Enhance your in-house team by integrating experienced SQL developers to address skill gaps, boost productivity, and accelerate project timelines—all while maintaining your existing team structure and workflow.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Opt for a project-based engagement model to ensure efficient and goal-oriented delivery of specific SQL development objectives. This model is perfect for well-defined projects with clear timelines and budgets.', points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsSQL = [
    { q: 'What skills should I look for in an SQL developer?', a: 'When you hire an SQL developer, key skills to consider include expertise in SQL query optimization, database architecture design, data migration, and experience with tools like Microsoft SQL Server, MySQL, or PostgreSQL. A strong understanding of backend integration, reporting tools, and database security is also essential.' },
    { q: 'What industries can your SQL developers work in?', a: 'Our SQL developers have extensive experience across various industries, including finance, healthcare, e-commerce, logistics, and technology. SQL\'s universal applicability makes it a critical component for data management in virtually any sector.' },
    { q: 'What kind of database applications can you develop using SQL?', a: 'We can develop a wide range of applications, including relational database management systems (RDBMS), data warehouses, business intelligence (BI) solutions, reporting and analytics platforms, and the backend databases for web and mobile applications.' },
    { q: 'What process do you follow to hire an SQL developer from your company?', a: 'Our hiring process is straightforward. We start by discussing your project needs, then provide you with resumes of our vetted SQL experts. You can then interview the candidates to choose the best fit, and we handle the rest of the onboarding.' },
    { q: 'What level of experience do your SQL developers have?', a: 'Our team comprises SQL developers with a diverse range of experience, from mid-level to senior database architects, with an average industry experience of over 5 years. We match the developer\'s skill set to your project\'s specific requirements.' },
    { q: 'Will I get a dedicated SQL developer or team for my project?', a: 'Yes, our "Dedicated Team" model provides you with a developer or an entire team that works exclusively on your project, ensuring focus, dedication, and deep integration with your goals.' },
    { q: 'How much does it cost to hire an SQL developer?', a: 'The cost to hire an SQL developer varies based on experience, location, and project scope. Rates can range from $25 to $150+ per hour. We offer competitive pricing and flexible models to suit your budget.' },
    { q: 'Do you offer flexible hiring models like hourly or full-time options?', a: 'Yes, we offer multiple flexible hiring models, including dedicated full-time, staff augmentation, and project-based options, which can be billed hourly, monthly, or at a fixed price.' },
    { q: 'Do you offer post-development support and database maintenance services?', a: 'Absolutely. We provide comprehensive post-development support and maintenance to ensure your database remains optimized, secure, and performs at its peak.' },
    { q: 'How do you ensure the security of my data and database?', a: 'We prioritize data security by signing a strict NDA at the outset. Our developers follow secure coding practices, implement robust access controls, use encryption, and conduct regular security audits to protect your database and sensitive information.' }
];

const userGuideContentSQL = {
    'Why Hire SQL Developers?': {
        intro: 'SQL developers bring specialized expertise to build, manage, and optimize databases that ensure the seamless operation of your applications. Here’s why hiring an SQL developer is a strategic investment:',
        points: [
            { title: 'Database Design and Development Expertise', text: 'SQL developers design robust databases tailored to your business requirements. They streamline data storage, retrieval, and processing, ensuring your systems operate efficiently. Whether you need to hire SQL database developers for custom database creation or to integrate databases with existing software, their skills are indispensable.' },
            { title: 'Query Optimization and Performance Enhancement', text: 'Complex queries can significantly slow down your systems if not optimized correctly. Hiring SQL programmers ensures your queries and scripts are fine-tuned for maximum efficiency, minimizing system downtime and latency.' },
            { title: 'Data Security and Integrity', text: 'SQL specialists play a vital role in implementing security protocols and maintaining data integrity. They safeguard your business-critical information by applying robust encryption, access control, and compliance standards.' },
            { title: 'Seamless Data Integration', text: 'SQL developers facilitate the integration of various data sources into a unified system, enabling streamlined operations. Hire SQL Data Integration Developers to make your data ecosystem cohesive and manageable.' },
            { title: 'Customized Solutions for Diverse Needs', text: 'From building custom database solutions to providing specialized services like data migration, reporting, or data analysis, experienced SQL developers can address your unique requirements. Top-rated SQL developers for hire ensure high-quality results tailored to your goals.' }
        ]
    },
    'Key Skills to Look for in an SQL Developer': {
        intro: 'When hiring an SQL developer, technical expertise, problem-solving abilities, and a deep understanding of database management are crucial. A proficient SQL developer ensures your database systems are secure, scalable, and optimized for performance. Here are the key skills to consider:',
        points: [
            { title: 'Strong Knowledge of SQL and Database Management Systems', text: 'An ideal SQL programmer for hire must possess a deep understanding of SQL syntax, queries, and procedures. They should be proficient in working with popular database management systems such as:\n– Microsoft SQL Server (opt for a SQL server specialist or hire Microsoft SQL developers)\n– MySQL, PostgreSQL, and Oracle Database' },
            { title: 'Expertise in Query Optimization', text: 'Databases can slow down due to poorly written queries. Skilled developers should have experience in optimizing complex SQL queries to reduce execution time and enhance application performance. Hire SQL developers to optimize SQL queries and scripts and improve your database efficiency.' },
            { title: 'Proficiency in Data Modeling and Schema Design', text: 'To ensure seamless data organization, an SQL developer for hire should have expertise in:\n– Normalization and de-normalization techniques\n– Designing relational database schemas\n– Implementing indexing strategies' },
            { title: 'Experience in Reporting and Analytics', text: 'If your business relies on insights from data, hire experienced SQL developers for data analysis and reporting who can:\n– Generate custom reports\n– Create dashboards using tools like Power BI or Tableau\n– Write complex queries to analyze and interpret data' },
            { title: 'Familiarity with Cloud-Based Solutions', text: 'Many businesses are transitioning to cloud-based databases. Hire remote SQL developers with experience in platforms like:\n– Amazon RDS\n– Google Cloud SQL\n– Microsoft Azure SQL Database' }
        ]
    },
    'Benefits of Hiring SQL Developers': {
        intro: 'Hiring SQL developers is a strategic move for businesses that require robust, scalable, and secure database solutions. SQL developers bring specialized skills to streamline data management, optimize system performance, and ensure seamless integration across platforms.',
        points: [
            { title: 'Expert Database Design and Customization', text: 'Hiring a database developer for hire ensures you have a professional who can design and build databases tailored to your unique business needs. Whether you need to hire SQL database developers for complex data modeling or to create schemas that handle large datasets, their expertise guarantees efficient and scalable database solutions.' },
            { title: 'Enhanced Query Optimization and Performance', text: 'Poorly optimized queries can slow down your systems, affecting user experience. Hire SQL developers to optimize SQL queries and scripts to improve database performance, reduce latency, and increase the overall efficiency of your applications.' },
            { title: 'Seamless Data Migration and Integration', text: 'When transitioning from legacy systems or consolidating data from multiple sources, SQL developers for hire for data migration ensure a smooth, error-free process. Opt for top-rated SQL developers for hire who specialize in data integration for seamless operations.' },
            { title: 'Improved Data Security and Compliance', text: 'Protecting sensitive data is critical in today’s digital landscape. Hiring a SQL server specialist ensures that your databases are equipped with robust encryption, access controls, and compliance with industry regulations like GDPR or HIPAA.' },
            { title: 'Advanced Reporting and Analytics', text: 'Unlock the full potential of your business data by hiring SQL developers for reporting and analytics. Hire experienced SQL developers for data analysis and reporting to generate detailed reports and actionable insights, empowering your team to make data-driven decisions.' },
            { title: 'Scalable and Future-Proof Systems', text: 'SQL developers specialize in creating scalable database systems that grow with your business. By hiring a SQL developer for hire, you ensure your databases remain adaptable to changing demands, whether it’s an increase in user traffic or the integration of new technologies.' },
            { title: 'Custom Solutions for Web Applications and More', text: 'From building custom databases for web applications to designing enterprise-grade systems, SQL developers provide tailored solutions. Hire SQL programmers for custom database solutions to address the unique challenges of your business.' },
            { title: 'Access to Remote Talent', text: 'Geographical constraints are no longer a limitation. Hire remote SQL developers to access top global talent while maintaining cost-efficiency. Remote developers bring the same level of expertise as in-house teams, often at a fraction of the cost.' }
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

// --- SECTIONS FOR HIRE SQL DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top SQL Developers</h3>
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

const SQLCoreStrengthsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Core Strengths of Our SQL Developers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {sqlStrengths.map((service, index) => (
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
                    Why Partner with Our Dedicated SQL Development Team
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyPartnerSQL.map((reason, index) => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Expertise of Our SQL Developers</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {sqlTechExpertise.map(tech => (
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
                    <h2 className="text-4xl md:text-5xl font-bold">Power Your Projects with Certified SQL Developers</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Unlock the full potential of your projects with certified SQL developers skilled in creating efficient, scalable, and secure database solutions that enhance performance and support your business growth.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sqlSolutions.map((solution, index) => (
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

const FeaturedCaseStudySQL = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Our Work Speaks for Itself</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Our dedicated SQL developers bring extensive expertise in cutting-edge technologies like microservices, cloud integration, and enterprise-grade solutions. With certified SQL coders and 24/7 technical support, we offer seamless maintenance, from development to deployment.
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

const UserGuideSidebarSQL = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentSQL)[0]);
    const content = userGuideContentSQL[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Essential Guide to Hiring SQL Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentSQL).map(topic => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top SQL Developers in 3 Simple Steps</h2>
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Engagement Models to Hire Best SQL Developers</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies offers flexible engagement models for SQL development services, designed to deliver customized solutions that fit your business requirements. Get the best fit for your business.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsSQL.map((model, index) => (
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
                    {faqsSQL.map((faq, index) => (
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
const HireSQLPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire Certified SQL Developers<br/>Best SQL Programmers for Your Project</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Our dedicated SQL developers deliver precision and expertise to your projects. Partner with us to create robust, scalable, and high-performance database solutions that seamlessly transform your business vision into reality.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Advanced SQL Expertise</div>
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
        <SQLCoreStrengthsSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Transform Your Software Projects?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire Our Expert SQL Developers
            </motion.button>
        </section>
        <WhyPartnerSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Build Scalable, Future-Ready Solutions with Our Top SQL Developers
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Call
            </motion.button>
        </section>

        <FeaturedCaseStudySQL />
        <UserGuideSidebarSQL />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireSQLPage;