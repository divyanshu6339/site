import React from 'react';
import { motion } from 'framer-motion';

const solutions = [
    { number: '01', title: 'Content Management System (CMS)', description: 'Our custom CMS solutions streamline content creation, management, and publication. We build secure, user-friendly workplaces, and powerful collaboration tools, helping businesses effortlessly manage their digital content across various platforms and channels, ensuring brand consistency and audience engagement.' },
    { number: '02', title: 'Enterprise Resource Planning (ERP) SaaS', description: 'Our ERP SaaS solutions integrate core business processes, including finance, HR, manufacturing, and supply chain. We provide real-time data and analytics, enhancing operational visibility and supporting strategic decision-making to drive business growth and agility.' },
    { number: '03', title: 'Project Management SaaS Solutions', description: 'Our project management SaaS applications provide comprehensive tools for managing projects, teams, and workflows. With features like Gantt charts, Kanban boards, and real-time collaboration, we help teams organize project planning, resource allocation, and progress tracking, ensuring successful project outcomes.' },
    { number: '04', title: 'Communication SaaS Solutions', description: 'Our communication SaaS solutions enable seamless real-time communication and collaboration. We build platforms with messaging, video conferencing, and VoIP, our platforms ensure a reliable and effective remote work, ensuring teams stay connected and engaged regardless of location.' },
    { number: '05', title: 'HR SaaS Applications', description: 'Our custom HR SaaS applications streamline human resource management processes, including recruitment, onboarding, performance tracking, and payroll. Our intuitive dashboards automate repetitive tasks, ensure compliance with labor laws, and provide valuable insights into workforce trends, empowering HR teams to focus on strategic initiatives.' },
    { number: '06', title: 'Customer Relationship Management', description: 'Our custom CRM solution enables businesses to effectively manage customer interactions and data. It provides tools for contact management, lead tracking, and automated marketing campaigns. Our CRM helps businesses nurture customer relationships, optimize sales processes, and drive customer satisfaction and loyalty.' },
    { number: '07', title: 'Accounting/Billing SaaS Solutions', description: 'Our Accounting/Billing SaaS solutions automate financial management processes, providing functionalities for invoicing, expense tracking, and financial reporting. These solutions ensure accuracy, streamline billing cycles, and simplify tax operations, supporting businesses in maintaining healthy finances.' },
    { number: '08', title: 'Ecommerce & Retail SaaS Solutions', description: 'We offer Ecommerce & Retail SaaS solutions that simplify online store management and retail operations. With features for inventory management, payment processing, and customer support, our solutions help businesses enhance their online presence, drive sales, and improve customer experience.' },
    { number: '09', title: 'Supply Chain Management (SCM) SaaS', description: 'Our SCM SaaS solutions optimize supply chain operations from procurement to delivery. We provide tools for inventory management, logistics tracking, and vendor collaboration. Our solutions help businesses reduce costs, improve efficiency, and enhance visibility across their supply chain, ensuring effective and cost-effective SCM solutions.' }
];

const SaaSSolutionTypes = () => {
    return (
        <div className="bg-gray-800 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Types of SaaS Solutions We Develop
                    </h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-4xl mx-auto">
                        At Alpixn, we develop a wide range of SaaS solutions tailored to meet the diverse needs of businesses across industries. Our expertise includes building CRM platforms, ERP systems, HR management tools, e-commerce solutions, project management applications, and more, integrating cutting-edge technologies.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/10 transition-all duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <span className="text-5xl font-extrabold text-blue-500 mr-4">{solution.number}</span>
                                <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed">{solution.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SaaSSolutionTypes; 