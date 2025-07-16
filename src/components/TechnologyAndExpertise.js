import React from 'react';
import TechStack from './TechStack'; // Import the new component

// Import Benefit Icons
import diverseIcon from '../Assets/5.1.png';
import certifiedIcon from '../Assets/5.2.png';
import flexibleIcon from '../Assets/5.3.png';
import deliveryIcon from '../Assets/5.4.png';
import communicationIcon from '../Assets/5.5.png';
import qualityIcon from '../Assets/5.6.png';

const whyChooseUsData = [
    { icon: diverseIcon, title: 'Diverse Industry Expertise', description: 'Our developers come from various technical backgrounds, enabling us to craft solutions for fintech, edtech, healthcare, logistics, and more.' },
    { icon: certifiedIcon, title: 'Certified & Skilled Developers', description: 'Work with professionals who are certified in the latest technologies and follow industry best practices for quality code and performance.' },
    { icon: flexibleIcon, title: 'Flexible Engagement Models', description: 'Choose what fits your needs: Dedicated Team, Staff Augmentation, or Project-Based Models—100% scalable and budget-friendly.' },
    { icon: deliveryIcon, title: 'Guaranteed On-Time Delivery', description: 'We respect your time. Our streamlined development process ensures consistent delivery without compromising quality.' },
    { icon: communicationIcon, title: 'Transparent Communication', description: 'Stay informed at every stage with open communication, regular updates, and collaborative tools like Slack, Jira, and Zoom.' },
    { icon: qualityIcon, title: 'Strict Quality Control', description: 'Every project undergoes multiple QA cycles to ensure bug-free, secure, and stable performance on all devices.' },
];

const BenefitCard = ({ icon, title, description }) => (
    <div className="relative bg-[#0D121F] border-2 border-gray-800 rounded-lg p-8 pt-16 text-center transform hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0D121F] p-2 rounded-full">
            <img src={icon} alt={title} className="h-16 w-16" />
        </div>
        <h3 className="text-xl font-semibold text-blue-500 mb-4">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

const TechnologyAndExpertise = () => {
    return (
        <div className="bg-[#00070E] text-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Tech Stack Section */}
                <TechStack />

                {/* Why Choose Us Section */}
                <div className="text-center mt-24">
                    <h2 className="text-4xl font-bold mb-4 leading-tight">Why Choose Jellyfish Technologies as Your Software<br/>Development Services Provider?</h2>
                    <p className="text-gray-400 mb-20 max-w-3xl mx-auto">Partner with a team that delivers secure, scalable, and tailored software solutions—every time.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
                        {whyChooseUsData.map(benefit => <BenefitCard key={benefit.title} {...benefit} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnologyAndExpertise;
 