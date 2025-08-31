import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE AI TEAM AUGMENTATION PAGE ---

const aiCoreExpertiseAugmentation = [
    { title: 'AI & ML Framework Mastery', description: 'Our engineers excel in frameworks like TensorFlow, PyTorch, Hugging Face, and Scikit-learn to build robust, scalable AI models.', icon: 'ai-ml-framework-mastery' },
    { title: 'Specialized AI Domains', description: 'We bring deep expertise in NLP, computer vision, predictive analytics, and reinforcement learning for industry-specific AI applications.', icon: 'specialized-ai-domains' },
    { title: 'Model Development', description: 'From data preprocessing to deployment and monitoring, we manage the full AI lifecycle for performance, reliability, and scalability.', icon: 'model-development' },
    { title: 'Cloud & Infrastructure', description: 'Our team builds and deploys AI solutions on AWS, Azure, GCP, and manages infrastructure using Kubernetes and MLOps pipelines.', icon: 'cloud-infrastructure' }
];

const whyChooseAIAugmentation = [
    { title: 'Top AI/ML Experts', description: 'Hire AI engineers with a proven track record of delivering production-grade AI solutions across industries, ensuring high-impact outcomes through expert model development and deployment.' },
    { title: 'Seamless Integration', description: 'Our AI engineers seamlessly integrate with your in-house developers to deliver faster results, enhance collaboration, and ensure consistent progress throughout all phases of AI development.' },
    { title: 'Scalable Solutions', description: 'Easily scale up or down your AI team based on your evolving project needs without long-term commitments.' },
    { title: 'Faster Hiring', description: 'Onboard pre-vetted AI engineers to meet tight deadlines, reduce hiring time, and accelerate project delivery.' }
];

const aiTechStack = ['Tensorflow', 'Streamlit', 'RAY', 'PyTorch', 'ONNX', 'MLflow', 'MetaGPT', 'LlamaIndex', 'JAX', 'Haystack', 'Gradio', 'Flask'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const aiAugmentationSolutions = [
    { title: 'AI-Augmented Staffing Solutions', description: 'Our AI-augmented staffing solutions bridge your talent gap with specialists who deliver innovation, scalability, and on-demand expertise.' },
    { title: 'API Integrations with AI Services', description: 'We integrate AI APIs into your systems, unlocking smart features without overhauling your existing infrastructure or workflows.' },
    { title: 'Custom Solutions', description: 'At Alpixn Technologies, we tailor AI-powered solutions by augmenting your IT teams with skilled engineers and scalable engagement models.' },
    { title: 'Managed AI Services', description: 'We manage your AI initiatives end-to-end, offering seamless delivery, continuous improvement, and reduced operational complexity at scale.' },
    { title: 'AI-Generated Code Reviews', description: 'Our dedicated AI developers audit generated code for logic flaws, ensuring clean, secure, and production-ready software every time.' },
    { title: 'API Integration', description: 'We seamlessly connect external AI APIs with your applications—boosting automation, responsiveness, and operational efficiency in real time.' },
    { title: 'AI Model Integration', description: 'Our developers integrate advanced AI models into your platforms, improving performance, reducing costs, and driving intelligent outcomes fast.' },
    { title: 'Legacy Modernization with AI/ML', description: 'We modernize legacy systems using AI and ML, enhancing performance, intelligence, and future-readiness for evolving business needs.' },
    { title: 'AI Strategy & Consulting Support', description: 'Our teams include AI consultants who help define your AI roadmap, evaluate the right tools, and align technology with business outcomes with strategic guidance.' }
];

const engagementModelsAIAugmentation = [
    { title: 'Dedicated Team', description: 'Assemble a dedicated team of AI engineers for full-time collaboration. Ideal for long-term AI development projects requiring continuous innovation, deep technical focus, and alignment with your strategic objectives and in-house development practices.', points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'] },
    { title: 'Team Augmentation', description: 'Hire dedicated AI engineeers to seamlessly integrate into your existing team, bridging skill gaps and accelerating delivery. This flexible model enhances your internal capabilities without disrupting workflows, offering immediate support for evolving project needs.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'High Quality & Flexibility'] },
    { title: 'Project-Based', description: 'Engage AI professionals for well-defined, time-bound projects. Perfect for building MVPs, POCs, or feature-specific modules, this model ensures milestone-driven delivery, cost control, and optimal resource allocation for short- to mid-term AI initiatives.', points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsAIAugmentation = [
    { q: 'What are the key skills to look for when hiring AI engineers?', a: 'Look for engineers with a strong foundation in Python and key machine learning frameworks like TensorFlow and PyTorch. [1, 2, 4] Essential skills also include data preprocessing, model development, and experience with cloud platforms like AWS, Azure, or GCP for deploying and scaling AI solutions. [1, 2, 4]' },
    { q: 'How can AI team augmentation benefit my business?', a: 'AI team augmentation provides immediate access to specialized skills, which accelerates your project timelines and reduces hiring costs. [5] It allows you to scale your team flexibly, enhances your in-house team\'s capabilities through knowledge transfer, and helps you stay competitive by adopting the latest AI technologies faster. [5]' },
    { q: 'What industries can benefit from AI team augmentation?', a: 'Nearly every industry can benefit, including healthcare (for diagnostics and patient data analysis), finance (for fraud detection and algorithmic trading), retail (for personalized recommendations), and manufacturing (for predictive maintenance and quality control). [6, 7]' },
    { q: 'How do I choose the right engagement model?', a: 'Choose the engagement model based on your project\'s needs. The Dedicated Team model is best for long-term, complex projects. Team Augmentation is ideal for extending your current team with specific skills. The Project-Based model works well for projects with a clearly defined scope and deliverables.' },
    { q: 'What is the typical process for augmenting my team with AI engineers?', a: 'The process typically starts with a consultation to define your needs. We then provide you with profiles of pre-vetted AI engineers. You interview the candidates to ensure a good fit, and once selected, we handle the onboarding process to seamlessly integrate them into your team.' },
    { q: 'Can I hire remote AI engineers on a part-time or hourly basis?', a: 'Yes, our AI staff augmentation services are flexible. You can hire engineers on a full-time, part-time, or hourly basis depending on your project requirements and budget, allowing you to scale your resources as needed.' },
    { q: 'How do you ensure the quality and reliability of your AI engineers?', a: 'We have a rigorous vetting process that includes technical assessments, portfolio reviews, and multiple rounds of interviews to evaluate both hard and soft skills. We also provide ongoing support and performance management to ensure our engineers consistently meet your standards.' },
    { q: 'What tools and platforms do your AI engineers work with?', a: 'Our engineers are proficient with a wide range of tools, including Python, TensorFlow, PyTorch, Scikit-learn, and NLP libraries. They are also experienced with cloud platforms like AWS, Azure, and Google Cloud, and MLOps tools like Docker, Kubernetes, and MLflow.' },
    { q: 'Can I scale my AI team up or down during the project?', a: 'Yes, scalability is a key benefit of our AI team augmentation service. You can easily adjust the size of your augmented team based on your project\'s changing needs, ensuring you always have the right resources at the right time.' },
    { q: 'Do you sign NDAs and ensure IP protection during AI team augmentation?', a: 'Absolutely. We prioritize your intellectual property and data security. We sign a Non-Disclosure Agreement (NDA) at the beginning of every engagement, and all IP rights for the work produced are transferred to you.' }
];

const userGuideContentAIAugmentation = {
    'Benefits of AI Team Augmentation': {
        intro: '',
        points: [
            { title: 'Access to Specialized Talent', text: 'With our AI staff augmentation services, you gain instant access to highly specialized talent tailored to your project’s unique needs. Whether it’s NLP, computer vision, or predictive modeling, our AI augmented staffing solutions deliver pre-vetted engineers with domain-specific experience and hands-on expertise in the latest AI technologies.' },
            { title: 'Cost-Effective Scaling', text: 'AI staff augmentation enables your organization to scale AI capabilities flexibly—without the long-term costs of full-time hiring. You can hire remote AI developers as needed, reducing overhead while ensuring enterprise-grade performance, faster delivery, and improved agility.' },
            { title: 'Accelerated Development', text: 'Speed up time-to-market by bringing in experienced professionals through AI staff augmentation services. Our engineers integrate quickly with your in-house team, contribute from day one, and accelerate product development, deployment, and feature enhancements.' },
            { title: 'Knowledge Transfer & Upskilling', text: 'Our AI augmented staffing solutions not only enhance delivery—they elevate your internal teams. Senior AI engineers work collaboratively, sharing best practices, tools, and real-world project experience that foster long-term AI capability within your organization.' }
        ]
    },
    'Industries Benefiting from AI Team Augmentation': {
        intro: '',
        points: [
            { title: 'Healthcare', text: 'Our AI staff augmentation services help healthcare organizations deploy smart systems for diagnostics, patient monitoring, and medical image analysis. Bring in AI developers who enhance accuracy, reduce critical delays, and enable data-driven care decisions.' },
            { title: 'Finance', text: 'Hire AI engineers through staff augmentation to implement fraud detection, credit scoring, and risk modeling. Our professionals bring deep experience in financial compliance, predictive analytics, and high-frequency trading models.' },
            { title: 'Retail & E-Commerce', text: 'Use AI augmented staffing solutions to deliver personalized shopping experiences, optimize pricing, and implement real-time inventory tracking. Our AI developers help retailers build smarter, data-driven customer journeys that drive engagement and conversions.' },
            { title: 'Manufacturing', text: 'Augment your team with AI specialists to implement predictive maintenance, automated quality checks, and computer vision for production efficiency. Our AI staff augmentation services reduce downtime and improve product consistency across the manufacturing pipeline.' }
        ]
    },
    'Essential Skills in Our AI Engineers': {
        intro: '',
        points: [
            { title: 'Programming Languages', text: 'With our AI staff augmentation services, you gain engineers proficient in Python, R, and Java—languages that power scalable, production-ready AI systems. Our team writes efficient code designed for complex datasets and real-time applications.' },
            { title: 'Frameworks & Libraries', text: 'Through our AI augmented staffing solutions, we provide engineers with hands-on expertise in frameworks like TensorFlow, PyTorch, Keras, and Scikit-learn. They’re also adept with NLP libraries such as spaCy and NLTK to build deep learning and language-based models.' },
            { title: 'Cloud Platforms', text: 'Our AI staff augmentation offerings include cloud-savvy professionals skilled in deploying AI models via AWS SageMaker, Google Cloud AI, Azure ML, and containerized environments like Docker and Kubernetes—for seamless, scalable cloud AI execution.' },
            { title: 'Data Handling & Visualization', text: 'With our AI augmented staffing solutions, you onboard engineers experienced in data preprocessing, transformation, and visualization. Using Pandas, NumPy, Matplotlib, and Seaborn, they prepare structured and unstructured data to maximize AI model performance.' }
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

// --- SECTIONS FOR HIRE AI TEAM AUGMENTATION PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top AI Experts</h3>
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

const AICoreExpertiseSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Our AI Team’s Core Expertise
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {aiCoreExpertiseAugmentation.map((service, index) => (
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
                    Why Choose Our AI Team Augmentation Services
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseAIAugmentation.map((reason, index) => (
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
                    <h2 className="text-4xl md:text-5xl font-bold">Our AI Team Augmentation Services</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Augment your team with AI experts to develop intelligent systems that enhance decision-making, automate processes, and provide actionable insights.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {aiAugmentationSolutions.map((solution, index) => (
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

const FeaturedCaseStudyAIAugmentation = () => {
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
                    <h2 className="text-4xl md:text-5xl font-bold">Case Studies: Solving Business Challenges with AI Team Support</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Alpixn Technologies empowers businesses to unlock AI’s true potential by embedding generative AI experts directly into their teams. With deep technical know-how and strategic foresight, our specialists co-develop intelligent, future-focused solutions tailored to your operational needs.
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

const UserGuideSidebarAIAugmentation = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentAIAugmentation)[0]);
    const content = userGuideContentAIAugmentation[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to AI Team Augmentation</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentAIAugmentation).map(topic => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Augment AI Developers in Your Teams with 3 Simple Steps</h2>
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
                        At Alpixn Technologies, we offer flexible engagement models to help you hire AI experts tailored to your unique needs, whether scaling teams, launching AI initiatives, or building custom solutions within your timeline and budget.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsAIAugmentation.map((model, index) => (
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
                    {faqsAIAugmentation.map((faq, index) => (
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
const HireAITeamAugmentationPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">AI Team Augmentation Services<br/>Scale Faster with Expert AI & ML Engineers</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Our AI staff augmentation services connect you with experienced AI engineers who collaborate seamlessly, helping you speed up development, reduce resource strain, and bring AI-powered products to life quickly and reliably.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Proven Expertise in NLP, CV, GenAI & More</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Custom AI/ML Development & Model Tuning</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Rapid Onboarding, Zero Hiring Hassles</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>NDA-Protected & Quality-First Delivery</li>
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
        <AICoreExpertiseSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Augment Your AI Team Today
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Request AI Team Plan
            </motion.button>
        </section>
        <WhatYouGetSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Scale Smarter with Expert AI Talent
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Schedule a Consultation Today
            </motion.button>
        </section>

        <FeaturedCaseStudyAIAugmentation />
        <UserGuideSidebarAIAugmentation />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireAITeamAugmentationPage;