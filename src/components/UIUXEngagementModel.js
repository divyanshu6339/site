import React from 'react';
import { motion } from 'framer-motion';

const engagementModels = [
    {
        title: "Dedicated Team",
        description: "Alpixn's dedicated team model provides a proficient, full-time Offshore Development Center (ODC), delivering a tailored approach. This model is designed for the client’s project, ensuring cost-effectiveness, scalability, better outcomes, efficiency, and high-quality standards.",
        features: [
            "Client-Centric Team Formation",
            "Direct Reporting And Transparency",
            "Scalability And Flexibility",
            "Quality And Efficiency"
        ]
    },
    {
        title: "Staff Augmentation",
        description: "Alpixn offers a Staff augmentation model for clients seeking top-tier UI/UX design services tailored to your specific needs. Balancing control and expertise, this model provides flexibility and immediate access to the expertise required.",
        features: [
            "Talented Expertise",
            "Seamless Integration",
            "Cost-effective Solution",
            "Transparent Communication"
        ]
    },
    {
        title: "Project-Based",
        description: "Alpixn's project-based engagement model offers complete solutions for well-defined projects within a set scope, time, and budget. Our team collaborates with you to align delivery, meeting quality standards, and fostering solutions for successful outcomes.",
        features: [
            "Fixed Budget",
            "Milestones And Deliverables",
            "Resource Allocation",
            "Risk Mitigation"
        ]
    }
];

const FeatureItem = ({ children }) => (
    <li className="flex items-center">
        <svg className="w-5 h-5 text-blue-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        <span className="text-gray-300">{children}</span>
    </li>
);

const UIUXEngagementModel = () => {
    return (
        <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Engagement Model</h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-4xl mx-auto">
                        Alpixn offers versatile engagement models for UI/UX services, providing innovative solutions to match clients' unique requirements. Let's explore these engagement models.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {engagementModels.map((model, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-gray-800 rounded-xl shadow-lg flex flex-col"
                        >
                            <div className="bg-blue-600 rounded-t-xl px-8 py-4">
                                <h3 className="text-2xl font-bold text-white text-center">{model.title}</h3>
                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <p className="text-gray-300 leading-relaxed mb-6 flex-grow">{model.description}</p>
                                <ul className="space-y-3">
                                    {model.features.map((feature, i) => (
                                        <FeatureItem key={i}>{feature}</FeatureItem>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UIUXEngagementModel; 