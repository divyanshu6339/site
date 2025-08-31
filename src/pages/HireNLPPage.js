import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE NLP DEVELOPERS PAGE ---

const nlpExpertise = [
    { title: 'Text Classification & Sentiment Analysis', description: 'Hire NLP developers to detect emotions, classify themes, and automate content filtering with real-time, actionable insights.', icon: 'text-classification-sentiment-analysis' },
    { title: 'Named Entity Recognition (NER)', description: 'Our NLP engineers extract names, places, and entities from raw text to streamline data retrieval and tagging with higher accuracy.', icon: 'named-entity-recognition' },
    { title: 'Text Summarization & Translation', description: 'Hire NLP experts to condense long texts and translate multilingual content without losing the content\'s tone, structure, or meaning.', icon: 'text-summarization-translation' },
    { title: 'Speech-to-Text & Conversational AI', description: 'Our NLP engineers develop voice-driven chatbots and assistants with real-time speech recognition and smart dialogue flow.', icon: 'speech-to-text-conversational-ai' }
];

const whyHireNLP = [
    { title: 'Expertise in Advanced NLP Frameworks', description: 'Hire NLP engineers skilled in Hugging Face, TensorFlow, PyTorch, and ONNX. Our experts deliver high-performance NLP systems tailored to business goals across industries.' },
    { title: 'Multilingual Capabilities', description: 'Hire NLP experts to build language models in English, Hindi, German, and Spanish using mBERT and mT5. Enable inclusive AI tools with global language support for enterprise-grade communication and engagement.' },
    { title: 'End-to-End Development', description: 'Our NLP engineers manage the complete NLP lifecycle, from dataset curation and text processing to model training, deployment and monitoring. Hire remote NLP developers for seamless AI integration across your product pipeline.' },
    { title: 'Transparent Communication', description: 'Work with NLP engineers for hire who prioritize clarity and collaboration. We provide regular updates, real-time progress tracking, and responsive communication for fully aligned and successful project outcomes.' }
];

const aiTechStack = ['Tensorflow', 'Streamlit', 'RAY', 'PyTorch', 'ONNX', 'MLflow', 'MetaGPT', 'LlamaIndex', 'JAX', 'Haystack', 'Gradio', 'Flask'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const nlpSolutions = [
    { title: 'Chatbots & Virtual Assistants', description: 'We build intelligent bots that automate customer conversations, improving engagement, saving time, and enhancing round-the-clock support.' },
    { title: 'Sentiment Analysis', description: 'Our NLP developers help you uncover customer emotions and feedback, so you can make smarter marketing and product decisions.' },
    { title: 'Machine Translation', description: 'Our vetted software developers break language barriers with real-time translation tools, helping you connect with global audiences more effectively.' },
    { title: 'Text Summarization', description: 'Our team creates tools that condense lengthy content into actionable insights, so your team can move faster.' },
    { title: 'Speech Recognition', description: 'We turn voice into text with high accuracy, powering voice assistants, hands-free tools, and smart transcription.' },
    { title: 'Spam Detection', description: 'Our solutions filter out unwanted or harmful content, keeping your platform secure and communication relevant.' },
    { title: 'Information Extraction', description: 'We help you extract valuable data from raw text, automating data analysis and improving operational efficiency.' },
    { title: 'Predictive Text & Autocomplete', description: 'Our NLP models speed up typing with intelligent suggestions, improving user experience and content accuracy.' },
    { title: 'Named Entity Recognition (NER)', description: 'We identify names, places, dates, and more so you can organize, analyze, and act on your data smarter.' }
];

const engagementModelsNLP = [
    { title: 'Dedicated Team', description: 'Hire NLP engineers dedicated entirely to your project. This model ensures long-term commitment, deep focus, and consistent delivery, offering scalable resources, transparent communication, and full alignment with your technical and strategic goals throughout the development lifecycle.', points: ['Full-Time, Long-Term Commitments', 'Transparent Reporting', 'Scalable as Your Needs Grow'] },
    { title: 'Team Augmentation', description: 'Add highly skilled NLP developers to your existing team to bridge skill gaps or speed up development. Our experts integrate seamlessly, adapt quickly, and offer flexible engagement, boosting productivity without disrupting your current workflows or team structure.', points: ['Seamless Integration', 'Flexible Contracts', 'Rapid Ramp-Up'] },
    { title: 'Project-Based', description: 'Hire NLP programmers for well-defined, fixed-scope projects like chatbots, classifiers, or summarization tools. This model offers cost control, milestone-based execution, and clear deliverables, ideal for short-term needs or proof-of-concept solutions with predictable timelines and budgets.', points: ['Defined Timelines', 'Fixed Budgets', 'Clear Milestones'] },
];

const faqsNLP = [
    { q: 'Why hire NLP developers instead of using prebuilt APIs?', a: 'Hiring NLP developers allows for the creation of custom, domain-specific models that are fine-tuned to your data, offering superior accuracy, better privacy, and more control than generic, off-the-shelf APIs. This is crucial for enterprise-grade applications where performance and data security are paramount.' },
    { q: 'What industries benefit from NLP?', a: 'NLP benefits a wide range of industries, including healthcare (for clinical note analysis), finance (for sentiment analysis of market trends), customer service (for chatbots), and legal (for document review). Any industry that deals with large volumes of unstructured text can leverage NLP to gain insights and automate processes.' },
    { q: 'How long does it take to build an NLP solution?', a: 'The timeline for an NLP project depends on its complexity. A simple proof-of-concept might take a few weeks. A production-ready solution, such as a custom chatbot or a sentiment analysis model, can take anywhere from 3 to 6 months, depending on data availability and model training requirements.' },
    { q: 'Can you train models on our proprietary data?', a: 'Yes, we specialize in training and fine-tuning NLP models on proprietary datasets. This approach ensures that the model is highly accurate and tailored to your specific domain and use case, while also maintaining the confidentiality and security of your data.' },
    { q: 'Do you offer multilingual NLP support?', a: 'Yes, our NLP experts are experienced in building multilingual models using advanced architectures like mBERT and mT5. We can develop solutions that understand and process text in multiple languages, including English, Spanish, German, and Hindi, enabling you to build inclusive, global AI applications.' }
];

const userGuideContentNLP = {
    'What Skills Should an NLP Developer Have?': {
        intro: 'When you’re planning to hire NLP developers, it’s essential to assess both technical expertise and domain understanding. NLP engineers combine computer science with linguistics, AI, and machine learning to build applications that can read, understand, and act on human language. A skilled NLP team often includes:',
        points: [
            { title: 'NLP Engineers', text: 'who specialize in parsing, language modeling, semantic understanding, and tokenization.' },
            { title: 'Machine Learning Experts', text: 'with experience in supervised and unsupervised algorithms applied to language data.' },
            { title: 'Data Scientists', text: 'skilled in feature engineering, data labeling, and statistical language processing.' },
            { title: 'Deep Learning Specialists', text: 'with hands-on knowledge of transformers, RNNs, and BERT-based architectures.' }
        ],
        outro: 'To get the best results, hire NLP experts familiar with frameworks like Hugging Face Transformers, TensorFlow, SpaCy, NLTK, and libraries like Gensim or OpenNLP. Additionally, knowledge of vector databases and tools like FAISS or Pinecone for semantic search is a plus. Hiring from a top-tier firm means you get access to vetted Natural Language Processing engineers who don’t just write code—they understand how language technologies create real business impact.'
    },
    'Why Hire a Dedicated NLP Development Team Instead of Freelancers?': {
        intro: 'While freelancers can offer short-term fixes, building intelligent, production-ready NLP systems demands continuity, context, and collaboration. Businesses looking for sustainable outcomes prefer to hire dedicated NLP teams for several reasons:',
        points: [
            { title: 'Consistent Delivery', text: 'A dedicated team remains aligned with your long-term roadmap—ensuring model consistency, data integrity, and solution scalability.' },
            { title: 'Real-Time Collaboration', text: 'Unlike siloed freelancers, a structured team of NLP engineers, ML specialists, and data scientists can collaborate in real-time to accelerate development cycles.' },
            { title: 'Faster Time-to-Market', text: 'NLP projects often require continuous training, tuning, and feedback loops. A dedicated team works in agile sprints to deliver results faster.' },
            { title: 'Enterprise-Grade Security', text: 'When you hire NLP developers from a trusted company, you ensure IP protection, NDA compliance, and responsible AI practices aligned with GDPR and other regulations. Choosing to outsource Natural Language Processing engineers through a specialized firm minimizes risks, reduces overheads, and delivers long-term value beyond just MVP development.' }
        ]
    },
    'How Can an NLP Development Team Accelerate My Business?': {
        intro: 'Businesses hire NLP engineers not just to build features, but to create intelligent systems that understand and engage users better. Here’s how:',
        points: [
            { title: 'Conversational AI', text: 'Hire NLP engineers for chatbot development to create voice assistants and AI-powered chatbots that resolve queries, capture leads, and enhance support.' },
            { title: 'Sentiment & Intent Detection', text: 'NLP models can analyze customer reviews, support tickets, or surveys to extract meaningful feedback, drive product decisions, and personalize engagement.' },
            { title: 'Intelligent Search & Summarization', text: 'With NLP, you can enable context-aware search experiences, generate document summaries, or even build custom Q&A engines.' },
            { title: 'Decision Intelligence', text: 'When you hire NLP and machine learning experts, you gain access to advanced analytics tools that process millions of documents and extract actionable insights.' }
        ],
        outro: 'Whether you run an eCommerce platform, a healthcare service, or a legal firm—hiring an NLP engineer brings cognitive capabilities that give you a competitive edge.'
    },
    'What’s the Cost of Hiring an NLP Development Team?': {
        intro: 'Understanding the cost of hiring NLP experts means evaluating project scope, timeline, and expertise. Here are a few factors that influence cost:',
        points: [
            { title: 'Role Diversity', text: 'A team with senior NLP engineers, MLOps experts, and annotators will cost more but deliver enterprise-grade outcomes.' },
            { title: 'Project Scope', text: 'Building a custom NER system or semantic search tool is more complex than integrating a pre-built chatbot.' },
            { title: 'Engagement Model', text: 'Whether you hire remote NLP engineers, opt for team augmentation, or work on a fixed-project basis affects your overall cost.' },
            { title: 'Infrastructure Requirements', text: 'Some NLP models require GPU-based training, cloud orchestration, and model deployment pipelines that factor into budget planning.' }
        ],
        outro: 'While initial investment may seem high, businesses that hire NLP engineers for AI projects typically see returns through automation, improved user experience, and faster decision-making. For cost-effective delivery, it’s best to partner with the best company to hire NLP engineers—one that provides transparent pricing, flexible engagement models, and scalable expertise.'
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

// --- SECTIONS FOR HIRE NLP DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top NLP Developers</h3>
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

const NLPExpertiseSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Expertise of Our NLP Developers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {nlpExpertise.map((service, index) => (
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
                    Why Hire Our Dedicated NLP Developers
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyHireNLP.map((reason, index) => (
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
                    <h2 className="text-4xl md:text-5xl font-bold">Hire NLP Developers for Smart Software Solutions</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Hire NLP developers who turn everyday language into business intelligence, developing smart software solutions that understand, respond, and evolve with your users. We bring human-like understanding to your digital products.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {nlpSolutions.map((solution, index) => (
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

const FeaturedCaseStudyNLP = () => {
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
                    <h2 className="text-4xl md:text-5xl font-bold">Success Stories: How Our Developers Made a Difference</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        AI has moved beyond hype; it’s now driving real change across industries. At Alpixn Technologies, we craft AI solutions that directly align with your business objectives. Be it optimizing workflows, elevating user experiences, or creating new growth opportunities, our AI systems deliver outcomes that align with your strategic vision and scale as you grow.
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

const UserGuideSidebarNLP = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentNLP)[0]);
    const content = userGuideContentNLP[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Hire NLP Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentNLP).map(topic => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top NLP Developers in 3 Simple Steps</h2>
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
                        At Alpixn Technologies, our engagement models let you hire top NLP developers through dedicated teams, part-time experts, or fully managed services, tailored to your project scope, technical requirements, budget, and delivery timeline.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsNLP.map((model, index) => (
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
                    {faqsNLP.map((faq, index) => (
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
const HireNLPPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire Expert NLP Developers<br/>Transform Language into Intelligence with Our Top NLP Talent</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Looking to enhance your software’s understanding of human language? Our experienced NLP developers specialize in creating sophisticated language models and applications incorporating custom NLP pipelines, chatbots, and sentiment analysis.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>5+ Years of Avg Experience in NLP</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Expertise in GPT, BERT, SpaCy, NLTK, Hugging Face</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Enterprise-Grade Scalability & Security</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>NDA-Protected Development</li>
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
        <NLPExpertiseSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Transform Your Projects with Language Intelligence ?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire NLP Developer
            </motion.button>
        </section>
        <WhatYouGetSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Get Pre-Vetted NLP Engineers On-Demand
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Free Consultation
            </motion.button>
        </section>

        <FeaturedCaseStudyNLP />
        <UserGuideSidebarNLP />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireNLPPage;