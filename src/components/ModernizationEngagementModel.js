import React from 'react';
import { motion } from 'framer-motion';

const engagementModels = [
    {
        title: 'Dedicated Team',
        description: 'Harness the power of an Offshore Development Center for application modernization. Operating remotely, this dedicated team ensures cost efficiencies and access to a broader talent pool, fostering communication, collaboration, and transparency. This cohesive environment enhances efficiency, innovation, and project success.',
        points: [
            'Leverage A Dedicated Offshore Team For Application Modernization.',
            'Remote Operation For Cost Efficiency And Talent Diversity.',
            'Foster Communication, Collaboration, And Transparency.',
            'Enhance Efficiency, Innovation, And Project Success.'
        ]
    },
    {
        title: 'Staff Augmentation',
        description: 'Augment your team for application modernization by strategically integrating external specialists to bolster skill sets. This approach addresses skill gaps, providing specialized knowledge in areas like cloud migration, DevOps, and programming languages.',
        points: [
            'Supplement The Existing Workforce With External Experts.',
            'Address Skill Gaps In Modernization Processes.',
            'Access Specialized Knowledge In Cloud Migration, DevOps, And Programming Languages.',
            'Seamless Collaboration Between Internal And External Experts.'
        ]
    },
    {
        title: 'Project-Based',
        description: 'Application modernization employs a project-based strategy, breaking the transformation into distinct, manageable phases. Each project has specific goals, timelines, and deliverables, ensuring a focused and systematic application upgrade.',
        points: [
            'Structure Modernization Into Manageable Projects With Defined Goals.',
            'Initiate Comprehensive Assessment And Planning.',
            'Execute Tasks Like Cloud Migration Or System Refactoring In Individual Projects.',
            'Allows Better Resource Allocation And Risk Management.'
        ]
    }
];

const ModernizationEngagementModel = () => {
    return (
        <div className="bg-gray-900 py-20 text-white">
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold">Engagement Model</h2>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        The engagement model for application modernization revolves around a collaborative and iterative approach between stakeholders, development teams, and technology partners. It prioritizes continuous communication and involvement at every stage of the modernization process. Take a look at Alpixn Technologies' engagement model for application modernization.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {engagementModels.map((model, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col bg-gray-800/60 rounded-2xl shadow-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors duration-300"
                        >
                            <div className="bg-blue-600 p-6">
                                <h3 className="text-3xl font-bold">{model.title}</h3>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <p className="text-lg text-gray-300 mb-6 flex-grow">{model.description}</p>
                                <ul className="space-y-4">
                                    {model.points.map((point, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-blue-400 font-bold mr-3 mt-1">&raquo;</span>
                                            <span className="text-gray-300 text-lg">{point}</span>
                                        </li>
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

export default ModernizationEngagementModel; 