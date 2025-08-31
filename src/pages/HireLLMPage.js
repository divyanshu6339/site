import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE LLM DEVELOPERS PAGE ---

const llmExpertise = [
    { title: 'Custom LLM Fine-Tuning', description: 'Tailoring large language models to specific domains for improved accuracy, performance, and task-specific language understanding.', icon: 'custom-llm-fine-tuning' },
    { title: 'Prompt Engineering', description: 'Designing, testing, and refining prompts to guide LLM outputs with precision, context awareness, and minimal errors.', icon: 'prompt-engineering' },
    { title: 'Model Integration', description: 'Seamlessly integrating LLMs into enterprise applications with scalable infrastructure, API endpoints, and real-time processing capabilities.', icon: 'model-integration' },
    { title: 'Data Curation & Preprocessing', description: 'Preparing high-quality training datasets by cleaning, annotating, and formatting data to ensure effective LLM learning outcomes.', icon: 'data-curation-preprocessing' }
];

const whyHireLLM = [
    { title: 'Proven LLM Expertise Across Domains', description: 'Hire LLM experts with proven expertise of delivering secure AI systems using GPT, LLaMA, Claude, and open-source models across finance, healthcare, and legal sectors.' },
    { title: 'Custom Model Development', description: 'Train, fine-tune, and optimize LLMs for domain-specific tasks, ensuring relevance, performance, and innovation in every AI-powered application.' },
    { title: 'Faster Time-to-Market', description: 'Launch production-ready LLM systems in weeks with our streamlined development workflows and pre-vetted engineers.' },
    { title: 'Enterprise-Grade Security & Compliance', description: 'Ensure your AI solutions meet security standards and compliance requirements like GDPR, HIPAA, and SOC2, needed for enterprise grade applications.' }
];

const aiTechStack = ['Tensorflow', 'Streamlit', 'RAY', 'PyTorch', 'ONNX', 'MLflow', 'MetaGPT', 'LlamaIndex', 'JAX', 'Haystack', 'Gradio', 'Flask'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const llmSolutions = [
    { title: 'Custom LLM Development', description: 'Build domain-specific LLMs from scratch using frameworks like PyTorch, tailored for precision, scalability, and business impact.' },
    { title: 'LLM Fine-Tuning', description: 'Refine pre-trained models like GPT and PaLM to improve accuracy for industry-specific applications and tasks.' },
    { title: 'GenAI App Development', description: 'Develop GenAI applications using LLMs to automate decisions, enhance UX, and transform digital workflows intelligently.' },
    { title: 'LLM Integration', description: 'Seamlessly embed LLMs into your existing systems for AI-driven workflows, real-time responses, and operational efficiency.' },
    { title: 'Chatbot Development', description: 'Create intelligent, context-aware chatbots that improve customer interaction using LLMs and real-time conversation flows.' },
    { title: 'Sentiment Analysis', description: 'Use LLMs to analyze sentiment, tone, and intent in text, guiding smarter marketing and business decisions.' },
    { title: 'NLP Solutions', description: 'Implement NLP capabilities like summarization, NLU, and translation to automate and enhance communication processes.' },
    { title: 'Content Generation & Management', description: 'Generate high-quality, relevant content at scale using LLMs with semantic understanding and domain-specific knowledge.' },
    { title: 'Data Analytics & Extraction', description: 'Extract insights from raw data using LLMs and RAG (Retrieval-Augmented Generation) models to support decisions with real-time intelligence.' }
];

const engagementModelsLLM = [
    { title: 'Dedicated Team', description: 'Hire a dedicated AI team to work exclusively on your project from strategy and model development to testing, deployment, and long-term optimization. This model ensures deep involvement, domain understanding, and seamless integration.', points: ['Client-Aligned Development Approach', 'Transparent Communication & Reporting', 'Full-Time Resource Commitment', 'Scalable & Agile Team Structure'] },
    { title: 'Team Augmentation', description: 'Need to expand your internal capabilities? Hire AI development teams to augment your existing team with niche AI expertise. Whether it’s NLP, computer vision, or generative AI, we help bridge skill gaps and accelerate delivery timelines.', points: ['Specialized Talent On-Demand', 'Smooth Integration with In-House Teams', 'Flexible Engagement Duration', 'Cost-Efficient Resource Allocation'] },
    { title: 'Project-Based', description: 'For well-scoped, outcome-driven initiatives, we offer project-based AI development services. Engage a high-performance AI developer team to execute your project end-to-end from proof of concept to product delivery within a fixed budget and timeline.', points: ['Defined Milestones & Deliverables', 'Transparent Resource Planning', 'Low Risk, High Efficiency', 'Results-Focused Delivery Model'] },
];

const faqsLLM = [
    { q: 'Why should I hire LLM developers for my business?', a: 'Hiring LLM developers allows you to build custom, intelligent applications that can automate tasks, enhance customer engagement, and extract valuable insights from unstructured data. They can create solutions like advanced chatbots, content generation tools, and semantic search engines that are tailored to your specific industry and business goals.' },
    { q: 'What skills should I look for in an LLM developer for hire?', a: 'Look for a strong foundation in Python, deep learning, and NLP principles. Key skills include experience with frameworks like TensorFlow or PyTorch, proficiency with transformer models (like GPT and BERT), and practical knowledge of model fine-tuning techniques, prompt engineering, and deploying models at scale.' },
    { q: 'Can I hire remote large language model (LLM) developers for short-term projects?', a: 'Yes, we offer flexible engagement models, including project-based and hourly options. This allows you to hire our expert LLM developers for short-term projects, proof-of-concepts, or specific tasks without a long-term commitment.' },
    { q: 'How do LLM prompt engineers improve model performance?', a: 'Prompt engineers are crucial for improving LLM performance by designing, testing, and refining the prompts given to the model. A well-crafted prompt can significantly enhance the accuracy, relevance, and context-awareness of the LLM\'s output, while also minimizing biases and hallucinations.' },
    { q: 'What engagement models are available to hire large language model developers?', a: 'We offer several engagement models to fit your needs: a Dedicated Team for long-term development, Team Augmentation to supplement your existing team with specialized skills, and a Project-Based model for projects with a defined scope and deliverables.' }
];

const userGuideContentLLM = {
    'Assess Your Use Case and AI Readiness': {
        intro: 'Before you begin your search to hire large language model developers, take time to clearly define the problem you want to solve with AI. Are you looking to build a GenAI-powered chatbot? Automate content generation? Improve enterprise search through semantic understanding? Each goal will demand different LLM capabilities, such as text summarization, question answering, or sentiment analysis. Additionally, assess your AI readiness. Do you already have clean, labeled data? Do you need support for multilingual models? This clarity will help you engage the right LLM developer for hire who aligns with your use case, data availability, and deployment environment. LLMs are powerful—but only when implemented in the right context with the right foundation.',
        points: []
    },
    'Look for Specialized LLM Skillsets': {
        intro: 'Not all developers can work effectively with LLMs. These models require a deep understanding of natural language processing (NLP), prompt engineering, tokenization, model fine-tuning, and inference optimization. When you hire LLM engineers or hire LLM prompt engineers, look for individuals proficient in:',
        points: [
            { title: 'Pre-trained models', text: 'like GPT, BERT, LLaMA, Claude, or PaLM' },
            { title: 'Frameworks', text: 'like Hugging Face, TensorFlow, PyTorch, and LangChain' },
            { title: 'Experience in', text: 'prompt design, attention mechanisms, zero/few-shot learning' }
        ],
        outro: 'Skilled LLM programmers for hire can build or fine-tune models that not only deliver accurate results but also minimize hallucinations and bias. This specialized talent ensures you’re not just deploying an AI system, but one that’s reliable, fast, and aligned with real-world context.'
    },
    'Choose Developers with Domain and Deployment Experience': {
        intro: 'LLMs behave differently depending on the dataset, domain language, and end-user expectations. For example, legal language demands precision and formality, while healthcare applications must ensure compliance and contextual accuracy. When you hire dedicated large language model developers, prioritize candidates with domain expertise relevant to your industry. Beyond that, deployment expertise is crucial. Can they integrate the model into your existing cloud or on-prem infrastructure? Do they understand how to manage APIs, reduce latency, or optimize cost through model distillation? Hiring experienced developers who’ve taken models from experimentation to production ensures your solution is not only intelligent but also secure, scalable, and enterprise-ready.',
        points: []
    },
    'Select the Right Engagement Model': {
        intro: 'You’ve found the right LLM experts—now structure the collaboration to suit your project. Depending on your scope, timeline, and budget, choose from the following:',
        points: [
            { title: 'Hire remote large language model (LLM) developers', text: 'for quick, project-based development' },
            { title: 'Hire dedicated LLM developers', text: 'for ongoing AI innovation and support' },
            { title: 'Outsource to a specialized AI partner', text: 'for full-cycle LLM development, from ideation to maintenance' }
        ],
        outro: 'Flexibility in engagement helps you stay agile. Whether you need full-time support, sprint-based development, or consulting from LLM engineers for hire, an adaptive model ensures you get maximum value without overcommitting resources. Also, ensure IP security, NDA protection, and transparent delivery models—especially if your use case involves sensitive data or proprietary workflows.'
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

// --- SECTIONS FOR HIRE LLM DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top LLM Developers</h3>
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

const LLMExpertiseSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Expertise of Our LLM Engineers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {llmExpertise.map((service, index) => (
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
                    Why Hire Our Dedicated LLM Developers
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyHireLLM.map((reason, index) => (
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
                    <h2 className="text-4xl md:text-5xl font-bold">Hire Experienced LLM Engineers for Custom AI Solutions</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Supercharge your AI initiatives by hiring our experienced LLM engineers. We design advanced, customized language solutions that streamline workflows, enhance user experience, and deliver measurable business impact at scale.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {llmSolutions.map((solution, index) => (
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

const FeaturedCaseStudyLLM = () => {
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
                    <h2 className="text-4xl md:text-5xl font-bold">Case Studies: How Our AI Developers Built Intelligent Solutions</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Artificial intelligence has evolved from a trend into a core business enabler. At Alpixn Technologies, we deliver AI solutions that are purpose-built to align with your strategic goals—enhancing user experiences, streamlining operations, and achieving measurable business outcomes across diverse industries.
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

const UserGuideSidebarLLM = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentLLM)[0]);
    const content = userGuideContentLLM[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Hire Expert LLM Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentLLM).map(topic => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top LLM Developers in 3 Simple Steps</h2>
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
                        At Alpixn Technologies, we offer flexible engagement models to help you hire AI development teams that best fit your business goals, budget, and timelines. Whether you’re looking to hire a dedicated team of AI engineers, scale an existing project, or execute a well-defined AI roadmap, we provide tailored solutions for every scenario.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsLLM.map((model, index) => (
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
                    {faqsLLM.map((faq, index) => (
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
const HireLLMPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire Top LLM Developers<br/>Build Smarter, Faster AI Systems</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Our LLM engineers specialize in prompt engineering, data preprocessing, model training, and seamless integration, delivering scalable AI solutions. From custom chatbots to enterprise-grade NLP systems, our LLM developers build high-performance language models.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Custom LLM Training & Fine-Tuning</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Expertise in GPT, LLaMA, PaLM, and Open-Source Models</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Deployment-Ready Models in Weeks</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Enterprise-Grade Security & Compliance</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Scalable Teams with NDA Protection</li>
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
        <LLMExpertiseSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Build Smarter AI Solutions?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire LLM Developers
            </motion.button>
        </section>
        <WhatYouGetSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Drive Enterprise Growth with Scalable LLM Solutions
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Call
            </motion.button>
        </section>

        <FeaturedCaseStudyLLM />
        <UserGuideSidebarLLM />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireLLMPage;