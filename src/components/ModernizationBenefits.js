import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
    { number: '01', title: 'Better User Experience', description: 'Legacy modernization services pave the way for a superior user experience by revamping interfaces, enhancing functionality, and ensuring seamless navigation. With updated, intuitive designs and improved performance, users can benefit from increased engagement and satisfaction.' },
    { number: '02', title: 'Improved Performance & Flexibility', description: 'Our software modernization services elevate your system’s performance, optimizing speed and reliability. This increased flexibility allows your business to adapt swiftly to changing demands, ensuring operational efficiency and responsiveness.' },
    { number: '03', title: 'Enhance Security & Protection', description: 'Upgrade your systems for fortified defense against cyber threats, ensuring robust security measures and safeguarding sensitive data. With strengthened protection, experience peace of mind while navigating the digital landscape, fostering trust and reliability for your business.' },
    { number: '04', title: 'Cost-Effective', description: 'Legacy software modernization services provide a cost-effective solution by reducing maintenance expenses, improving operational efficiency, and extending the lifespan of existing systems. This cost savings can be reinvested in other critical areas of your business, enhancing overall competitiveness.' },
    { number: '05', title: 'Higher Scalability', description: 'Experience higher scalability with legacy application modernization services, enabling systems to easily adapt and grow in sync with your business needs. This flexibility ensures seamless expansion without compromising performance or stability.' },
    { number: '06', title: 'Better Integration', description: 'This ensures seamless integration with newer technologies, optimizing compatibility and reducing complexities in your legacy system. Streamlined integration fosters improved efficiency and operational synergy within your business infrastructure.' },
    { number: '07', title: 'Cloud-Native', description: 'By embracing a cloud-native approach through application modernization, businesses unlock scalable, on-demand resources, fostering agility and innovation. This transition optimizes performance and accelerates development, ensuring a competitive edge in the digital sphere.' },
    { number: '08', title: 'Better Productivity', description: 'Application Modernization services can streamline workflows, and enhance productivity with updated systems, fostering a more efficient work environment. Improved functionalities and optimized processes enable teams to accomplish more, driving greater productivity and efficiency.' },
    { number: '09', title: 'Minimize Technical Debt', description: 'Minimize technical debt by updating and streamlining legacy systems, reducing complexities and maintenance overhead through legacy modernization services. This strategic improvement ensures a more agile, efficient, and future-proof infrastructure, laying the foundation for expansion infrastructure.' },
];

const ModernizationBenefits = () => {
    return (
        <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-screen-2xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Benefits of Our Application Modernization Services</h2>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        Application modernization services offer a multitude of benefits, enabling businesses to revamp legacy systems, streamline operations, increase efficiency, reduce maintenance costs, and more. The following are the benefits of availing of legacy modernization services:
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.number}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/20 hover:border-blue-500 transition-all duration-300"
                        >
                            <span className="text-3xl font-bold text-gray-500">{benefit.number}</span>
                            <h3 className="text-2xl font-bold text-white mt-4 mb-3">{benefit.title}</h3>
                            <p className="text-lg text-gray-400">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ModernizationBenefits; 