import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE COMPUTER VISION DEVELOPERS PAGE ---

const computerVisionStrengths = [
    { title: 'Deep Learning for Visual Recognition', description: 'Expertise in CNNs and transformers to accurately classify, detect, and segment images and videos.', icon: 'deep-learning-visual-recognition' },
    { title: 'Rapid Real-Time Object Detection', description: 'Skilled in implementing YOLO, SSD, and Faster R-CNN for high-speed, real-time object tracking.', icon: 'real-time-object-detection' },
    { title: 'Autonomous Image & Video Processing', description: 'Proficient in OpenCV, scikit-image, and ffmpeg for enhancing, filtering, and analyzing multimedia content.', icon: 'image-video-processing' },
    { title: 'Model Optimization & Deployment', description: 'Experience with TensorRT, ONNX, and edge deployment to ensure high-performance inference on platforms.', icon: 'model-optimization-deployment' }
];

const whyChooseComputerVision = [
    { title: 'Proven Computer Vision Expertise', description: 'Our engineers have hands-on experience with complex computer vision projects, delivering AI-powered solutions like facial recognition, object detection, and visual analytics that drive innovation and measurable business outcomes.' },
    { title: 'Focus on Production-Ready Systems', description: 'We don’t just build prototypes; we engineer robust, real-time systems optimized for deployment on cloud, mobile, and edge devices, ensuring your solution is ready to scale and perform in real-world environments.' },
    { title: 'Access to Cutting-Edge Tools & Frameworks', description: 'Our team leverages industry-leading tools like OpenCV, PyTorch, TensorFlow, YOLO, and MediaPipe to build intelligent, high-performance solutions that stay ahead of the curve in computer vision innovation.' },
    { title: 'Cross-Industry Experience', description: 'We’ve successfully delivered computer vision solutions across healthcare, retail, automotive, manufacturing, and surveillance, bringing domain-specific insights and proven strategies to every new project we undertake.' }
];

const aiTechStack = ['Tensorflow', 'Streamlit', 'RAY', 'PyTorch', 'ONNX', 'MLflow', 'MetaGPT', 'LlamaIndex', 'JAX', 'Haystack', 'Gradio', 'Flask'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const computerVisionSolutions = [
    { title: 'Facial Recognition Systems', description: 'Hire computer vision engineers to build secure, real-time facial recognition software for authentication, surveillance, and access control across diverse industries.' },
    { title: 'Autonomous Navigation Solutions', description: 'Hire remote computer vision engineers to develop self-driving and robotic systems with obstacle detection, lane tracking, and spatial awareness for safe navigation.' },
    { title: 'Medical Imaging & Diagnostics', description: 'Computer vision developers help enhance medical image analysis for tumor detection, X-ray interpretation, and pathology classification in healthcare diagnostics.' },
    { title: 'Visual Quality Inspection Systems', description: 'Computer vision developers for hire can automate defect detection, improving product quality and reducing manual labor in manufacturing and industrial settings.' },
    { title: 'Retail & E-commerce Visual Search', description: 'Hire computer vision developers to implement AI-powered visual search and recommendation engines that enhance user experiences and boost conversions.' },
    { title: 'Video Analytics & Surveillance', description: 'Hire computer vision developers to build real-time video monitoring systems for crowd analysis, intrusion detection, and suspicious activity tracking.' },
    { title: 'Augmented Reality (AR) Applications', description: 'Hire top computer vision engineering teams to power AR experiences through environment mapping, object recognition, and gesture tracking.' },
    { title: 'Smart Inventory Management', description: 'Hire computer vision developers for intelligent stock detection, shelf tracking, and warehouse automation, optimizing logistics and supply chain operations.' },
    { title: 'Content Moderation for Media Platforms', description: 'Hire computer vision software engineers to automatically detect and flag inappropriate content in images or videos, ensuring brand safety and compliance.' }
];

const engagementModelsComputerVision = [
    { title: 'Dedicated Team', description: 'Assemble a dedicated team of computer vision developers for hire to work exclusively on your AI and computer vision initiatives. This model ensures continuous development, deep domain focus, and seamless alignment.', points: ['Client-Centric Approach', 'Direct Reporting And Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'] },
    { title: 'Team Augmentation', description: 'Hire remote computer vision engineers to strengthen your existing development team. This model allows you to scale fast, fill talent gaps, and enhance delivery velocity, without disrupting your in-house operations.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'High Quality & Flexibility'] },
    { title: 'Project-Based', description: 'Engage with top-rated computer vision software engineers on a fixed-scope project. This model ensures rapid delivery with clearly defined milestones, timelines, and budgets, ideal for building PoCs, MVPs, or product features.', points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsComputerVision = [
    { q: 'What are the key skills to look for when hiring a computer vision developer?', a: 'Key skills include strong proficiency in Python, hands-on experience with deep learning frameworks like TensorFlow and PyTorch, and expertise in core computer vision libraries such as OpenCV. Look for experience in image processing, object detection models (like YOLO), and deploying models in production environments.' },
    { q: 'How can computer vision enhance my business operations?', a: 'Computer vision can automate manual processes, improve accuracy, and provide valuable data insights. It can be used for quality control in manufacturing, inventory management in retail, diagnostics in healthcare, and security surveillance, leading to increased efficiency and reduced operational costs.' },
    { q: 'What industries benefit most from computer vision technology?', a: 'A wide range of industries benefit, including healthcare (medical imaging), retail (visual search), manufacturing (quality inspection), automotive (autonomous driving), and agriculture (crop monitoring). Any industry that relies on visual data can leverage computer vision to improve its processes.' },
    { q: 'How do I choose the right engagement model for hiring computer vision developers?', a: 'The right model depends on your project’s needs. A Dedicated Team is ideal for long-term, complex projects. Team Augmentation is perfect for extending your current team with specialized skills. A Project-Based model is best for projects with a clearly defined scope and deliverables.' },
    { q: 'What is the typical process for hiring a computer vision developer?', a: 'The process usually starts with a detailed consultation to understand your project requirements. We then provide a shortlist of pre-vetted candidates with the right skills. You can interview them to assess their expertise, and once selected, we facilitate a smooth onboarding process to integrate them into your team.' }
];

const userGuideContentComputerVision = {
    'Benefits of Hiring a Computer Vision Engineer for Your Project': {
        intro: 'When you hire computer vision engineers, you’re investing in problem-solvers who bring machines the power of sight. These experts design algorithms and models that interpret images and videos with human-like accuracy, automating tasks that previously required manual intervention. From hiring a dedicated computer vision engineer for continuous development to contracting a senior computer vision engineer for niche tasks, businesses benefit in numerous ways:',
        points: [
            { title: 'Enhanced accuracy and efficiency', text: 'Computer vision developers reduce human error by automating repetitive or complex visual tasks.' },
            { title: 'Cost-effective scaling', text: 'When you hire remote computer vision engineers, you access global talent and reduce overhead without compromising quality.' },
            { title: 'Versatile applications', text: 'Whether it’s smart surveillance, medical diagnostics, or automated retail checkouts, computer vision enhances both customer experience and operational workflows.' },
            { title: 'Faster go-to-market', text: 'With a computer vision software engineer for hire, your team can accelerate project timelines with expert model deployment and optimization.' }
        ],
        outro: 'If you’re looking to build an in-house system or augment your current team, hiring from a vetted pool of computer vision developers for hire ensures your solution is innovative, scalable, and future-ready.'
    },
    'What Is Computer Vision Primarily Used For?': {
        intro: 'Computer vision empowers machines to recognize, process, and act on visual data, similar to how humans use their eyesight, but faster and often more accurately. Businesses hire computer vision developers to build a wide variety of AI-powered applications across industries:',
        points: [
            { title: 'Healthcare', text: 'Detect anomalies in MRIs, CT scans, and X-rays to support early diagnosis and treatment planning.' },
            { title: 'Retail & E-commerce', text: 'Enable visual search, automatic shelf auditing, and customer behavior analysis.' },
            { title: 'Automotive', text: 'Power autonomous driving features through real-time object detection, lane tracking, and pedestrian recognition.' },
            { title: 'Manufacturing', text: 'Implement visual quality inspection systems that detect defects or deviations on production lines.' },
            { title: 'Banking & Finance', text: 'Use facial recognition and behavior analysis for fraud detection and secure authentication.' },
            { title: 'Education', text: 'Develop AI systems that monitor classroom engagement and assess visual student submissions.' },
            { title: 'Logistics & Warehousing', text: 'Track packages, monitor cargo, and automate inventory management using visual data.' },
            { title: 'Media & Entertainment', text: 'Automatically tag, filter, and moderate images or videos while enhancing visual effects.' }
        ],
        outro: 'With such expansive use cases, it’s no surprise companies across sectors are increasingly opting to hire top computer vision engineering teams or computer vision experts for ongoing innovation.'
    },
    'What Are the Essential Skills to Look for in a Computer Vision Developer?': {
        intro: 'When considering computer vision engineering hiring, it’s crucial to evaluate both technical expertise and real-world project experience. Whether you’re seeking a deep learning computer vision engineer or a computer vision engineer team for hire, these competencies are essential for successful execution of AI projects. A capable computer vision developer should possess a well-rounded skill set that includes:',
        points: [
            { title: 'Core Programming Proficiency', text: 'Strong Python skills (plus C++ or Java in some cases)\nFamiliarity with libraries like OpenCV, PIL, NumPy, and scikit-image' },
            { title: 'Deep Learning and AI Frameworks', text: 'Expertise in TensorFlow, PyTorch, and Keras\nHands-on experience with pre-trained and custom CNNs, RNNs, GANs' },
            { title: 'Object Detection & Recognition', text: 'Proficient with state-of-the-art models like YOLO (You Only Look Once), SSD (Single Shot Detector), and Faster R-CNN' },
            { title: 'Data Handling & Annotation', text: 'Ability to clean, preprocess, and augment image/video datasets\nUse of annotation tools like LabelImg, CVAT, and RectLabel' },
            { title: 'Model Optimization & Deployment', text: 'Experience with TensorRT, OpenVINO, ONNX for inference acceleration\nDeploying models on cloud (AWS, Azure) and edge (Jetson Nano, Raspberry Pi)' },
            { title: 'Problem-Solving & Domain Understanding', text: 'Ability to translate real-world visual problems into ML models\nUnderstanding of domain-specific data (e.g., medical, industrial, retail)' }
        ]
    },
    'Why Computer Vision Developers Are Invaluable to Your AI Team': {
        intro: 'Computer vision developers are not just coders; they are the driving force behind visual intelligence in AI systems. Whether you’re hiring full-time, part-time, or freelance, bringing in a computer vision engineer for hire is a strategic move toward digital transformation and AI leadership. When you hire computer vision developers, they amplify your team’s capabilities in several critical ways:',
        points: [
            { title: 'They unlock your data’s potential', text: 'Every image, video, or real-time feed becomes a source of business intelligence, interpreted through expertly trained models.' },
            { title: 'They automate what humans can’t scale', text: 'In industries like manufacturing and logistics, tasks like visual inspection or inventory tracking are better handled by CV systems trained by experts.' },
            { title: 'They innovate your core offerings', text: 'Want to launch a visual search feature in your app? Or integrate facial recognition into your security system? CV engineers make it happen.' },
            { title: 'They ensure production-grade AI', text: 'A senior computer vision engineer ensures that your solution is not only accurate in the lab but also robust and scalable in real-world conditions.' }
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

// --- SECTIONS FOR HIRE COMPUTER VISION DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top Computer Vision Developers</h3>
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

const ComputerVisionStrengthsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Specialized Skills of Our Computer Vision Engineers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {computerVisionStrengths.map((service, index) => (
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
                    Why Partner with Our Dedicated Computer Vision Development Team
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseComputerVision.map((reason, index) => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Our AI Development Tech Stack Expertise</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {aiTechStack.map(tech => (
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
                    <h2 className="text-4xl md:text-5xl font-bold">Hire Computer Vision Developers for Innovative Software Solutions</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Hire computer vision experts to transform raw visual data into actionable insights with smart algorithms, enhancing efficiency, accuracy, and automation in your software systems.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {computerVisionSolutions.map((solution, index) => (
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

const FeaturedCaseStudyComputerVision = () => {
    const [activeTab, setActiveTab] = useState('AI Chatbot');
    const caseStudies = {
        'AI Chatbot': {
            tech: 'Python | LangChain',
            title: 'Alpixn Technologies Redefines Chatbot Development for a Top IT Organization with Next- Gen AI SaaS Platform',
            description: 'Alpixn Technologies partnered with a global enterprise to develop an AI-powered SaaS platform, integrating AI models, automation, and real-time analytics to optimize workflow automation, customer engagement, and data-driven decision-making.',
            points: ['Smart AI Training & Adaptability', 'Automated & Scalable Management', 'Real-Time Insights & Optimization', 'Seamless Deployment & Integration'],
            link: 'Explore IT & SaaS Services'
        },
        'AI Document Intelligence': {
            tech: 'NLP | OCR | Python',
            title: 'Alpixn Technologies Transforms Medicaid Verification for a Leading Community Care Provider with AI Document Intelligence',
            description: 'Alpixn Technologies built an AI-powered document intelligence system for a leading community care provider, using NLP, OCR, and machine learning to automate validation, enhance accuracy, and streamline Medicaid approvals while reducing errors and fraud.',
            points: ['Intelligent Data Extraction & Validation', 'Automated Cross-Document Analysis', 'Real-Time Processing & Fraud Detection', 'Scalable & Secure Infrastructure'],
            link: 'Explore Healthcare Services'
        },
        'AI Entity Extraction System': {
            tech: 'Gen AI | Neo4J | OCR',
            title: 'AI-Driven Entity Extraction System by Alpixn Technologies Transforms Document Processing for a Leading InsurTech Firm',
            description: 'Alpixn Technologies partnered with a top InsurTech firm to build an AI-powered entity extraction system. Using AI models, OCR, and GraphDB, the solution seamlessly automates document verification, reduces manual effort, and enables real-time data extraction.',
            points: ['AI-Driven Data Extraction & Validation', 'Integrated RAG models and LLMs for smart responses', 'Enabled real-time user analytics and performance tracking', 'Seamless integration with enterprise systems'],
            link: 'Explore Insurtech Services'
        },
        'AI Obstacle & Track Monitoring System': {
            tech: 'OPENCV | ONNX',
            title: 'AI-based obstacle detection and track monitoring system enhanced safety for a top North American railway contractor.',
            description: 'Alpixn Technologies built an AI-powered track monitoring system using computer vision and edge computing. It detects obstacles, identifies faults, reduces manual inspections, and enables proactive maintenance with real-time processing and seamless integration.',
            points: ['Real-Time Obstacle & Fault Detection', 'Automated Monitoring & Proactive Alerts', 'Edge Computing for Fast Processing', 'Integrated Dashboard for Easy Access'],
            link: 'Explore Transportation Services'
        }
    };
    const currentStudy = caseStudies[activeTab];

    return (
        <div className="py-24 bg-gray-900/50">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold">Case Studies: Intelligence That Drives Results</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Artificial intelligence is now a strategic driver, not just a buzzword. At Alpixn Technologies, we align AI solutions with business goals, enhancing experiences, optimizing workflows, and delivering measurable, real-world outcomes across industries.
                    </p>
                </div>
                <div className="flex justify-center mb-8 border-b border-gray-700">
                    {Object.keys(caseStudies).map(tab => (
                        <button key={tab} onClick={() => setActiveTab(tab)}
                            className={`py-2 px-4 text-lg font-semibold transition-colors ${activeTab === tab ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}>
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="bg-gray-800 ring-1 ring-white/10 rounded-2xl p-8">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-full md:w-2/5">
                            <h3 className="text-3xl font-bold mb-2">{activeTab}</h3>
                            <p className="text-gray-400 font-semibold mb-4">TECH: {currentStudy.tech}</p>
                            <p className="text-blue-400 font-semibold mb-4">{currentStudy.title}</p>
                            <ul className="space-y-3 mb-6">
                                {currentStudy.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full md:w-3/5">
                            <p className="text-gray-300 mb-6 text-lg">{currentStudy.description}</p>
                            <div className="text-center mt-6 space-x-4">
                                <button className="text-white bg-blue-600 font-semibold hover:bg-blue-700 transition-colors py-2 px-4 rounded-lg">Read Story</button>
                                <button className="text-blue-400 font-semibold hover:text-blue-300 transition-colors py-2 px-4">{currentStudy.link}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const UserGuideSidebarComputerVision = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentComputerVision)[0]);
    const content = userGuideContentComputerVision[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Hire Computer Vision Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentComputerVision).map(topic => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top Computer Vision Developers in 3 Simple Steps</h2>
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Our Engagement Models</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies offers flexible and scalable engagement models to help you hire computer vision engineers in a way that aligns perfectly with your business objectives. If you need full-time support, niche expertise, or project-specific execution, we have the right model for you.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsComputerVision.map((model, index) => (
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
                    {faqsComputerVision.map((faq, index) => (
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
const HireComputerVisionPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire Computer Vision Developers<br/>Best Computer Vision Engineers for Your Project</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Transform visual data into real-time intelligence with our top-tier computer vision engineers. From facial recognition to autonomous systems, our experts combine deep learning expertise with tools like OpenCV, YOLO, and PyTorch to build production-ready AI solutions.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Proven ML & CV Expertise</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>5+ Years Avg Experience in Production-Grade AI</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>NDA-Backed Confidentiality</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Scalable Talent for Fast Deployment</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Talent ready to onboard in 7 days</li>
                    </ul>
                </motion.div>
                <motion.div className="md:w-1/2 flex justify-center"
                    initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                    <HireDeveloperForm />
                </motion.div>
            </div>
          </div>
        </section>

        <TrustedBy backgroundColor="bg-white" />
        <ComputerVisionStrengthsSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Bring Visual Intelligence to Your Software?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire Computer Vision Developers
            </motion.button>
        </section>
        <WhatYouGetSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Build Smarter Visual Solutions with Our Developers
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Talk to Our Experts Today
            </motion.button>
        </section>

        <FeaturedCaseStudyComputerVision />
        <UserGuideSidebarComputerVision />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireComputerVisionPage;