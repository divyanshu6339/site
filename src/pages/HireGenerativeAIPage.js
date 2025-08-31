import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE GENERATIVE AI ENGINEERS PAGE ---

const genAIExpertise = [
    { title: 'Foundation Model Development', description: 'We build and fine-tune models like GPT, PaLM, and LLaMA to deliver accurate, scalable, industry-specific AI applications.', icon: 'foundation-model-development' },
    { title: 'Multimodal Artificial Intelligence (AI)', description: 'We create AI systems that understand and generate across multiple modalities, text, image, audio, and video, for seamless interactions.', icon: 'multimodal-ai' },
    { title: 'Custom Generative AI Solutions', description: 'Build custom AI-powered tools and apps, from virtual assistants to creative engines, designed to address your unique business challenges.', icon: 'custom-gen-ai-solutions' },
    { title: 'Large Language Model Development', description: 'We develop & deploy LLMs optimized for contextual understanding, generation, summarization, and conversational AI applications.', icon: 'llm-development' }
];

const whyChooseGenAI = [
    { title: 'Model Fine-tuning', description: 'Our generative AI engineers fine-tune foundation models using RLHF, LoRA, and QLoRA techniques, enhancing accuracy, alignment, safety, and domain adaptability for use cases like chatbots, code generation, and enterprise-specific tasks.' },
    { title: 'Advanced Fine-Tuning & Model Optimization', description: 'We apply LoRA, QLoRA, RLHF, quantization, and distillation to optimize model size, latency, and output quality, ensuring efficient, context-aware generative models tailored for real-time performance and enterprise-level deployment.' },
    { title: 'Full-Stack AI Integration & Deployment', description: 'Hire generative AI developers skilled in integrating models with LangChain, APIs, Pinecone, and FAISS, and deploying them in scalable environments using Docker, Kubernetes, and serverless cloud platforms for real-world production readiness.' },
    { title: 'On-Premise & Privacy-First AI Architecture', description: 'Our generative AI experts deploy models securely within your infrastructure, enabling enterprise-grade privacy, data control, and compliance without relying on third-party APIs or external inference endpoints for sensitive applications.' }
];

const aiTechStack = ['Tensorflow', 'Streamlit', 'RAY', 'PyTorch', 'ONNX', 'MLflow', 'MetaGPT', 'LlamaIndex', 'JAX', 'Haystack', 'Gradio', 'Flask'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const genAISolutions = [
    { title: 'Custom Generative AI Solutions', description: 'We design bespoke generative AI apps built around your unique challenges, delivering innovation, scalability, and precision to meet industry-specific needs.' },
    { title: 'Generative AI Development', description: 'Our top GenAI developers build intelligent systems that automate tasks, personalize customer experiences, and accelerate digital transformation across your enterprise.' },
    { title: 'Generative AI Integration', description: 'With deep platform expertise, we ensure smooth integration of GenAI models into your existing infrastructure, boosting efficiency without disrupting operations.' },
    { title: 'Model Fine-Tuning & Optimization', description: 'Already using generative AI? We help you fine-tune models for specific goals, enhancing accuracy, performance, and business alignment.' },
    { title: 'System Architecture Design', description: 'We craft future-proof, scalable AI system architectures that support your evolving needs and ensure seamless growth across applications and platforms.' },
    { title: 'Industry-Focused LLM Development', description: 'Our team develops domain-tuned large language models that speak your industry’s language, delivering sharper insights and smarter content generation.' },
    { title: 'Advanced Data Analysis & Strategy', description: 'Leverage our data science expertise to unlock powerful insights from your datasets, driving strategic decisions with GenAI-powered analytics.' },
    { title: 'Generative AI Consulting Services', description: 'At Alpixn Technologies, our experts guide you through GenAI strategy, demystifying the technology and identifying high-impact opportunities for your business vision.' },
    { title: 'Ethical AI Advisory Services', description: 'We embed responsible AI principles into every solution, ensuring fairness, transparency, and compliance with evolving regulatory and ethical standards.' }
];

const engagementModelsGenAI = [
    { title: 'Dedicated Team', description: 'Hire Generative AI engineers to work exclusively on your project. This model ensures focused collaboration, end-to-end ownership, and continuous innovation aligned with your business goals. You get a managed team of generative AI experts, ideal for long-term development.', points: ['Client-Centric AI Strategy', 'Transparent Communication', 'Full-Time Commitment', 'High-Quality, Scalable Solutions'] },
    { title: 'Team Augmentation', description: 'Looking to accelerate development without restructuring your in-house team? Hire remote Generative AI developers to bridge the skill gap and strengthen your internal resources. This model is perfect for companies that need specialized GenAI talent without overhead.', points: ['Specialized Gen AI Engineers', 'Collaboration with In-House Teams', 'Cost-Efficient and Flexible', 'Fast Onboarding & High Productivity'] },
    { title: 'Project-Based', description: 'Hire Generative AI engineers for specific projects with clearly defined goals, deliverables, and timelines. Whether you’re building an AI chatbot, generative content engine, or AI-based recommendation system, this engagement model ensures timely delivery and measurable outcomes.', points: ['Fixed Budget with Predictable Costs', 'Milestone-Driven Development', 'Targeted Resource Allocation', 'Risk-Controlled Execution'] },
];

const faqsGenAI = [
    { q: 'Why should I hire Generative AI engineers instead of using an API?', a: 'Hiring generative AI engineers gives you the ability to build custom, proprietary models that are fine-tuned to your specific data and business needs. This offers greater control, better performance, enhanced security, and long-term cost-effectiveness compared to relying on generic, third-party APIs.' },
    { q: 'How long does it take to build a Generative AI solution?', a: 'The timeline varies based on complexity. A proof-of-concept or a simple prototype can be built in a few weeks. A full-scale, production-ready generative AI application, including data preparation, model training, and integration, can take anywhere from 3 to 9 months.' },
    { q: 'Can you deploy models on our infrastructure?', a: 'Yes, we specialize in on-premise and private cloud deployments. Our team can deploy and manage generative AI models within your secure infrastructure, ensuring you maintain full control over your data and comply with privacy regulations.' },
    { q: 'Do you offer post-deployment support?', a: 'Absolutely. We provide comprehensive post-deployment support, including model monitoring, performance optimization, and regular updates to ensure your generative AI solution remains effective, secure, and aligned with your evolving business needs.' },
    { q: 'What are the benefits of hiring Generative AI developers?', a: 'Hiring generative AI developers allows you to unlock new capabilities like content automation, personalized user experiences, and accelerated innovation. They can build intelligent systems that drive efficiency, reduce costs, and create a significant competitive advantage for your business.' },
    { q: 'What skills should I look for in a Generative AI engineer?', a: 'A skilled generative AI engineer should have a strong foundation in deep learning, proficiency in Python and ML frameworks like TensorFlow or PyTorch, and hands-on experience with transformer architectures and models like GPT. Expertise in data preprocessing, model fine-tuning, and MLOps for deployment is also crucial.' },
    { q: 'What is the process of hiring Generative AI engineers?', a: 'Our process begins with a consultation to understand your project goals. We then present you with a shortlist of pre-vetted generative AI engineers. You can interview the candidates to ensure a perfect fit, and once selected, we handle a smooth onboarding process to integrate them into your team.' }
];

const userGuideContentGenAI = {
    'What Skills Should Generative AI Developers Have?': {
        intro: 'To build meaningful and intelligent systems, you need more than coders—you need strategic thinkers who can create, adapt, and scale GenAI solutions. When you hire generative AI developers, make sure they’re equipped with:',
        points: [
            { title: 'Deep Learning Expertise', text: 'Familiarity with GANs, VAEs, Transformers, and diffusion models' },
            { title: 'Proficiency in ML Frameworks', text: 'PyTorch, TensorFlow, Hugging Face, and OpenAI APIs' },
            { title: 'Data Handling Skills', text: 'Preprocessing, vectorization, embeddings, and synthetic data generation' },
            { title: 'Strong Math Foundation', text: 'Linear algebra, statistics, probability, and calculus for model training and evaluation' },
            { title: 'Deployment Experience', text: 'Cloud platforms like AWS, GCP, and Azure with tools like SageMaker and Vertex AI' }
        ],
        outro: 'When you hire generative AI engineers, you want professionals who not only build models but also align them with business outcomes—whether it’s content automation, AI copilots, or real-time personalization engines.'
    },
    'Why Choose a Dedicated GenAI Team Over Freelancers?': {
        intro: 'While freelancers might work on isolated projects, generative AI demands consistency, collaboration, and continuous learning. That’s why organizations looking to scale responsibly prefer to hire dedicated generative AI developers through trusted tech partners.',
        points: [
            { title: 'End-to-End Delivery', text: 'From architecture to integration, dedicated teams handle everything.' },
            { title: 'Faster Iterations', text: 'Agile workflows mean quicker testing, training, and deployment.' },
            { title: 'IP Protection & Compliance', text: 'Dedicated teams operate under strict NDAs and data protocols.' },
            { title: 'Cross-Functional Collaboration', text: 'Data scientists, MLOps engineers, and GenAI experts work as one unit.' }
        ]
    },
    'How Can Generative AI Developers Add Value to Your Business?': {
        intro: 'When you hire top generative AI developers, you’re not just adding technical talent—you’re unlocking new capabilities across your business.',
        points: [
            { title: 'Content Automation', text: 'Automate blog writing, product descriptions, email campaigns, and code generation.' },
            { title: 'Image & Video Generation', text: 'Create synthetic visuals, design mockups, and training datasets.' },
            { title: 'Intelligent Assistants', text: 'Build AI copilots for internal tools, customer service, and creative teams.' },
            { title: 'Recommendation Engines', text: 'Use GenAI to personalize product suggestions, pricing strategies, or learning paths.' },
            { title: 'Faster Prototyping', text: 'Quickly turn ideas into MVPs with reusable GenAI components.' }
        ],
        outro: 'Businesses that hire generative AI experts gain a competitive edge by accelerating innovation, reducing manual work, and delivering AI-powered user experiences.'
    },
    'What Does It Cost to Hire Generative AI Developers?': {
        intro: 'Cost depends on expertise, project scope, engagement model, and duration. But when evaluated in terms of long-term ROI, investing in the best generative AI engineers pays off significantly.',
        points: [
            { title: 'Team Composition', text: 'More senior roles like solution architects and MLOps engineers increase the budget.' },
            { title: 'Model Complexity', text: 'Building custom LLMs or integrating diffusion models requires more resources than plug-and-play tools.' },
            { title: 'Engagement Models', text: 'Hiring full-time, remote generative AI developers or opting for project-based delivery affects pricing.' },
            { title: 'Duration', text: 'Longer engagements typically lower the cost per sprint.' }
        ],
        outro: 'To optimize costs, many companies choose to hire remote generative AI developers from reliable service providers who offer flexibility, scalability, and managed delivery without compromising on quality.'
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

// --- SECTIONS FOR HIRE GENERATIVE AI ENGINEERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top Gen AI Engineers</h3>
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

const GenAIExpertiseSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Expertise of Our Generative AI Engineers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {genAIExpertise.map((service, index) => (
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
                    Why Partner with Our Dedicated Generative AI Engineers?
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseGenAI.map((reason, index) => (
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
                    <h2 className="text-4xl md:text-5xl font-bold">Hire GenAI Developers for Smart AI Services</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Hire top GenAI developers to transform your business with AI-driven solutions that write, predict, automate, and innovate. We fuse cutting-edge technology with strategy to fuel scalable, intelligent growth.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {genAISolutions.map((solution, index) => (
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

const FeaturedCaseStudyGenAI = () => {
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
                    <h2 className="text-4xl md:text-5xl font-bold">Success Stories from Our AI Partnerships</h2>
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

const UserGuideSidebarGenAI = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentGenAI)[0]);
    const content = userGuideContentGenAI[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Hire Generative AI Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentGenAI).map(topic => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top Generative AI Developers in 3 Simple Steps</h2>
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
                        At Alpixn Technologies, we offer flexible and scalable engagement models to help you hire top Generative AI developers based on your project scope, speed, and team structure.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsGenAI.map((model, index) => (
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
                    {faqsGenAI.map((faq, index) => (
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
const HireGenerativeAIPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire Generative AI Engineers<br/>Build Innovative & Intelligent Solutions with Best GenAI Developers</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Our vetted Generative AI engineers bring unmatched creativity and technical expertise to build powerful, scalable AI systems, from fine-tuned language models to automated content generators. Partner with us to access the top 1% AI talent and deliver innovation at scale.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Certified AI Professionals with Proven Track Records</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Expertise with GPT, LLaMA, Stable Diffusion, and DALL-E</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Fast Prototyping & Scalable Solutions Development</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Strict Adherence to NDA and Confidentiality Agreements</li>
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
        <GenAIExpertiseSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Start Your Generative AI Project Today
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire GenAI Engineers
            </motion.button>
        </section>
        <WhatYouGetSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Experience Faster , Smarter AI Engineering
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Free Consultation
            </motion.button>
        </section>

        <FeaturedCaseStudyGenAI />
        <UserGuideSidebarGenAI />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireGenerativeAIPage;