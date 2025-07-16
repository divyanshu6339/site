import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const guideData = {
    'Importance of UI/UX Design': {
        title: "In today's digital landscape, where attention spans are dwindling and competition is fierce, UI/UX design companies are pivotal in not just crafting awareness; initiative, and engaging experiences that captivate users and keep them coming back for more.",
        content: [
            {
                subtitle: 'Let’s delve into the key reasons for its importance:',
                points: [
                    '**Boosts User Engagement and Conversion Rates:** A well-designed UI/UX anticipates user needs and makes it effortless for them to navigate and achieve their goals.',
                    '**Builds Brand Loyalty and Trust:** A positive user experience fosters trust and creates a strong emotional connection with your brand. When users find interacting with your product enjoyable and efficient, they’re more likely to become loyal advocates and recommend it to others.',
                    '**Improves Efficiency and Reduces Costs:** A poorly designed interface can lead to user frustration, lost time, and even abandoned carts. Investing in good UI/UX design upfront can save you money in the long run by minimizing development costs, reducing support requests, and improving user retention.',
                    '**Stands Out from the Competition:** In a crowded marketplace, a unique and memorable UI/UX can set you apart from the competition.'
                ]
            },
            {
                subtitle: 'Investing in UI/UX design is not just a good idea; it’s a vital necessity for any business that wants to thrive in the digital age.'
            }
        ]
    },
    'Reasons for a Company to Invest in UI Design': {
        title: "A well-crafted UI can be the difference between a user staying engaged and clicking away. Here are some compelling reasons why companies should prioritize UI design:",
        content: [
            {
                points: [
                    '**Enhanced User Experience and Satisfaction:** A good UI design acts as a silent guide, making complex interactions simple and enjoyable.',
                    '**Increased Conversion Rates and Sales:** When users can easily find what they’re looking for and complete desired actions, conversions naturally rise. A streamlined UI with clear calls to action can lead to more purchases, sign-ups, or downloads.',
                    '**Improved Brand Image and Credibility:** A professional UI speaks volumes about your brand. It conveys attention to detail, user-centricity, and a commitment to quality.',
                    '**Reduced Development and Maintenance Costs:** Clear layouts and intuitive interactions minimize user errors and confusion, leading to fewer bug fixes and development tweaks. This translates to cost savings in the long run.',
                    '**Competitive Advantage in the Market:** A user-friendly UI sets you apart from competitors with confusing interfaces and establishes you as a leader in providing a seamless and enjoyable user experience.'
                ]
            }
        ]
    },
    'Stages in UI/UX Design and Development': {
        title: "UI/UX design and development is a collaborative process that involves multiple stages, each with its own goals and deliverables. Here’s a breakdown of the key phases:",
        content: [
            {
                subtitle: 'Research and Define:',
                points: [
                    '**Discovery & Analysis:** Understanding user needs, goals, and pain points through user research, competitor analysis, and market trends.',
                    '**Define Scope & Requirements:** Establish project goals, target audience, features, and functionalities.'
                ]
            },
            {
                subtitle: 'Design and Prototype:',
                points: [
                    '**Information Architecture & Wireframing:** Planning the content hierarchy and layout of the interface through wireframes.',
                    '**Visual Design & Prototyping:** Creating visual mockups with colors, typography, and imagery, followed by interactive prototypes for usability testing.'
                ]
            },
            {
                subtitle: 'Test and Refine:',
                points: [
                    '**Usability Testing:** Observing users interact with prototypes to identify usability issues and areas for improvement.'
                ]
            },
            {
                subtitle: 'Development and Launch:',
                points: [
                    '**Handoff & Development:** Providing developers with design assets and specifications for building the final product.',
                    '**Quality Assurance & Testing:** Thorough testing to ensure the product functions as intended and meets quality standards.'
                ]
            }
        ]
    },
    'UI/UX Trends in 2024': {
        title: "The world of UI/UX design is constantly evolving, keeping pace with ever-changing user preferences and cutting-edge technologies. Here are some of the hottest trends, that will be shaping the landscape in 2024 and beyond:",
        content: [
            {
                points: [
                    '**AI-Integrated Design:** AI-powered tools can help generate design ideas, personalize user experiences, and even automate repetitive tasks.',
                    '**Cross-Platform UX:** UI/UX designers are responding by creating consistent and intuitive interfaces that adapt to different screen sizes and interaction methods.',
                    '**Location-Based UX:** With the rise of location-aware technologies, location-based experiences are becoming increasingly popular. Designers are creating interfaces that leverage geospatial data to offer contextually relevant information and services.',
                    '**Animated Icons:** Animated icons are more engaging, and dynamic, and can communicate more complex information. They can add a touch of personality to your interface and guide users through interactions.',
                    '**3D Visual Elements:** 3D tech is finding its way into UI/UX design, creating immersive and visually stunning experiences. From subtle depth effects to fully interactive 3D environments, 3D elements can add a layer of sophistication to your interface.',
                    '**Focus on Typography:** Bold headlines, delicate serifs, and playful script fonts can all be used to create unique and engaging experiences.'
                ]
            }
        ]
    },
    'Interface Technology and Tools We Use': {
        title: "The tools and technologies used in interface design can be broadly categorized into two main areas: design tools and development tools.",
        content: [
            {
                subtitle: "Design Tools:",
                points: [
                    "Wireframing and prototyping tools: Sketch, Adobe XD, Invision, Figma, and Proto.io.",
                    "UI design tools: Adobe Photoshop, Illustrator, and Sketch.",
                    "User research tools: Hotjar, UserTesting, and SurveyMonkey."
                ]
            },
            {
                subtitle: "Development Tools:",
                points: [
                    "Front-end development tools: HTML, CSS, and JavaScript.",
                    "Back-end development tools: Python, Ruby on Rails, and PHP.",
                    "Testing tools: Selenium, Cypress, and WebPageTest."
                ]
            },
            {
                subtitle: "Emerging Technologies:",
                points: [
                    "Artificial intelligence (AI), Augmented reality (AR), Voice user interfaces (VUIs)."
                ]
            }
        ]
    },
    'How a UI/UX Design Agency in India Can Elevate Your Digital Product': {
        title: "As a leading UI/UX design agency in India, we specialize in crafting digital experiences that are not only visually stunning but also intuitive, user-centric, and performance-driven. Our goal is to help businesses create digital products that users love—and that drive real business results.",
        content: [
            {
                points: [
                    '**Strategic, User-Centric Design Approach:** As a dedicated UI/UX design agency, we don’t just make things look good—we make them work beautifully. Our design process is deeply rooted in user behavior, research, and business goals.',
                    '**Comprehensive UI/UX Design Services:** We offer end-to-end UI/UX design services, including user research, wireframing, prototyping, interaction design, and usability testing. Whether you’re building a mobile app, web platform, SaaS dashboard, or enterprise software, our UI/UX services are tailored to meet the unique demands of your product and industry.',
                    '**Expertise in Modern Design Tools and Frameworks:** As an experienced UI/UX design company in India, we utilize industry-leading tools like Figma, Adobe XD, Sketch, InVision, and more to streamline collaboration and bring ideas to life faster. Our designers are well-versed in responsive design principles and the latest trends in interaction design and motion graphics.',
                    '**Cost-Effective and Scalable Design Partnerships:** As a trusted UI/UX design agency, we rely on, we provide high-quality design solutions at a globally competitive cost. Whether you need to redesign an existing product or build one from scratch, our UI/UX design services in India are scalable, flexible, and tailored to your specific needs.'
                ]
            }
        ]
    }
};

const ListItem = ({ children }) => {
    const parts = children.split('**');
    return (
        <li className="flex items-start text-gray-300">
            <span className="text-blue-400 mr-2 mt-1">•</span>
            <span>
                {parts.map((part, index) => 
                    index % 2 === 1 ? <strong key={index} className="text-white">{part}</strong> : part
                )}
            </span>
        </li>
    );
};


const EssentialGuide = () => {
    const [activeTab, setActiveTab] = useState(Object.keys(guideData)[0]);

    return (
        <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">An Essential Guide to UI/UX Development Services</h2>
            </div>
            <div className="max-w-7xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4">
                        <ul className="space-y-2">
                            {Object.keys(guideData).map(tab => (
                                <li key={tab}>
                                    <button
                                        onClick={() => setActiveTab(tab)}
                                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 text-lg font-semibold ${
                                            activeTab === tab ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                                        }`}
                                    >
                                        {tab}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="text-left"
                            >
                                <h3 className="text-2xl font-bold text-white mb-6">{guideData[activeTab].title}</h3>
                                {guideData[activeTab].content.map((section, index) => (
                                    <div key={index} className="mb-4">
                                        {section.subtitle && <h4 className="text-xl font-semibold text-white mb-3">{section.subtitle}</h4>}
                                        {section.points && (
                                            <ul className="space-y-3">
                                                {section.points.map((point, i) => <ListItem key={i}>{point}</ListItem>)}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EssentialGuide; 