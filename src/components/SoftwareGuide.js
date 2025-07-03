import React, { useState } from 'react';

const guideData = {
    types: {
      title: 'Types of Software',
      content: [
        {
          type: 'p',
          text: 'Software can be broadly categorized into three main types. System software, like operating systems, manages hardware and provides a foundation for other programs. Application software, such as word processors and web browsers, serves specific user tasks. Meanwhile, programming software helps developers create and publish other software, offering a diverse ecosystem of tools. These categories encompass the software that powers our digital world. Following are some of the major types of software:'
        },
        { type: 'h4', text: 'Learning management software:' },
        { type: 'p', text: 'Empower education with innovative learning management software, offering a comprehensive platform for seamless teaching and learning experiences.' },
        { type: 'h4', text: 'Content management software:' },
        { type: 'p', text: 'Simply the organization and publication of digital content with content management software, streamlining workflows and enhancing collaboration for efficient content creation and dissemination.' },
      ]
    },
    importance: { title: 'Importance of Software Development for Businesses', content: [{ type: 'p', text: 'Content for Importance of Software Development...' }] },
    trends: { title: 'Trends & Technologies in Software Development', content: [{ type: 'p', text: 'Content for Trends & Technologies...' }] },
    sdlc: { title: 'Software Development Life Cycle (SDLC)', content: [{ type: 'p', text: 'Content for SDLC...' }] },
    outsourcing: { title: 'Software Development Outsourcing: Aspects to Consider', content: [{ type: 'p', text: 'Content for Outsourcing...' }] },
};

const engagementModels = [
    {
        title: 'Offshore Dedicated Team',
        description: "Jellyfish Technologies' hire dedicated team engagement model functions as an Offshore Development Center (ODC), delivering a talented workforce. This specialized team works exclusively on the client's project, ensuring cost-effectiveness, scalability, optimized outcomes, efficiency, and high-quality standards.",
        points: ['Client-Centric Team Formation', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency']
    },
    {
        title: 'Staff Augmentation',
        description: "Jellyfish Technologies offers a staff augmentation approach, bolstering a client's in-house team with specialized skills, fostering collaboration, and optimizing project results. Ideal for companies aiming to enhance their workforce with specific expertise for better project outcomes.",
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: "Jellyfish Technologies' project-based engagement model offers a structured approach for well-defined projects within a set scope, time, and budget. This model guarantees timely, on-budget delivery, meeting quality standards and fostering collaboration for successful outcomes.",
        points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation']
    }
];

const SoftwareGuide = () => {
    const [activeTab, setActiveTab] = useState('types');
    const activeContent = guideData[activeTab].content;

    return (
        <>
            {/* Get Started Section */}
            <div className="bg-[#2A436A] text-white py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started With Our Software Development Services?</h1>
                    <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">Ready to launch your vision? Our custom software development team is geared up to bring your ideas to life. Let's embark on your unique project journey together, creating tailored solutions for your business needs.</p>
                    <button className="bg-white text-gray-800 font-bold py-3 px-8 rounded-md hover:bg-gray-200 transition-colors duration-300">Get an Estimate of your Project Today</button>
                </div>
            </div>

            {/* Essential Guide Section */}
            <div className="bg-[#00070E] text-white py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">An Essential Guide to Software Development</h2>
                    <div className="flex flex-col md:flex-row gap-12">
                        {/* Left Nav */}
                        <div className="flex flex-col gap-2 md:w-1/4">
                            {Object.keys(guideData).map(key => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`text-left p-4 rounded-lg transition-all duration-300 ${activeTab === key ? 'bg-white/10' : 'hover:bg-white/5'}`}
                                >
                                    {guideData[key].title}
                                </button>
                            ))}
                        </div>
                        {/* Right Content */}
                        <div className="md:w-3/4 text-gray-400 leading-relaxed space-y-4">
                            {activeContent.map((item, index) => {
                                if (item.type === 'h4') return <h4 key={index} className="text-lg font-semibold text-white mt-6">{item.text}</h4>
                                return <p key={index}>{item.text}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Engagement Model Section */}
            <div className="bg-[#00070E] text-white pb-24 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Engagement Model</h2>
                    <p className="text-gray-400 mb-16 max-w-4xl mx-auto">As an industry-leading technology company, Jellyfish Technologies offers diverse and flexible engagement models tailored to meet the distinct needs of its clients. Here are the three Engagement Models that Jellyfish Technologies have based its functionality on as follows:</p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {engagementModels.map(model => (
                            <div key={model.title} className="bg-[#0D121F] border-2 border-gray-800 rounded-lg text-left h-full flex flex-col">
                                <div className="bg-blue-600 p-4 rounded-t-lg">
                                    <h3 className="text-xl font-bold">{model.title}</h3>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-gray-400 mb-6 flex-grow">{model.description}</p>
                                    <ul className="space-y-2">
                                        {model.points.map(point => (
                                            <li key={point} className="flex items-start">
                                                <span className="text-blue-500 mr-2">&#8226;</span>
                                                <span className="text-gray-400">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SoftwareGuide; 