import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE AI DEVELOPMENT TEAM PAGE ---

const aiCoreExpertise = [
    { title: 'ML & Deep Learning', description: 'Our engineers build intelligent systems using neural networks, supervised/unsupervised learning, and reinforcement learning techniques.', icon: 'ml-deep-learning' },
    { title: 'Natural Language Processing', description: 'Our experts develop AI models for sentiment analysis, document classification, chatbots, and generative text using libraries like spaCy, NLTK, and transformers.', icon: 'natural-language-processing' },
    { title: 'Data Engineering & MLOps', description: 'We ensure your data pipelines, model deployment, and monitoring are robust, automated, and scalable across cloud or hybrid environments for smooth business operations.', icon: 'data-engineering-mlops' },
    { title: 'Generative AI Development', description: 'Hire an AI development team experienced in building custom LLM-powered apps, chat assistants, AI agents, and multimodal interfaces using OpenAI or Hugging Face.', icon: 'generative-ai-development' }
];

const whyChooseAI = [
    { title: 'Cross-Functional Expertise', description: 'When you hire an AI development team from us, you gain access to ML, NLP, computer vision, and Generative AI experts who bring cross-domain skills to create powerful, integrated AI solutions.' },
    { title: 'Faster Project Delivery', description: 'Our dedicated AI development team works as a tightly knit unit—data engineers, MLOps experts, and developers collaborate seamlessly, accelerating project timelines and ensuring precision in delivery across every AI initiative.' },
    { title: 'Strategic Consultation', description: 'Hire an AI development team that supports every phase—from strategy and model selection to deployment—ensuring scalable, business-aligned AI solutions powered by cloud, automation, and continuous optimization best practices.' },
    { title: 'Security-First Development', description: 'Our AI development team follows strict protocols for data security, compliance, and ethical AI standards. Hire AI experts committed to building transparent, regulation-ready solutions for your most sensitive use cases.' }
];

const aiTechStack = ['Tensorflow', 'Streamlit', 'RAY', 'PyTorch', 'ONNX', 'MLflow', 'MetaGPT', 'LlamaIndex', 'JAX', 'Haystack', 'Gradio', 'Flask'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const aiSolutions = [
    { title: 'AI-Powered Automation Tools', description: 'Streamline operations by automating repetitive tasks, workflows, and business processes with intelligent rule-based and learning-enabled systems.' },
    { title: 'Recommendation Systems', description: 'Deliver personalized product, content, or service recommendations based on real-time behavior, user profiles, and purchase history.' },
    { title: 'AI in Data Analytics', description: 'Extract insights from complex datasets with smart analytics, trend forecasting, and anomaly detection using advanced AI and ML techniques.' },
    { title: 'Voice and Speech Recognition', description: 'Develop voice-enabled AI apps for command recognition, speech-to-text transcription, and virtual assistant functionalities.' },
    { title: 'Predictive Maintenance Solutions', description: 'Monitor systems in real-time and predict equipment failures before they happen, reducing downtime and optimizing operational efficiency.' },
    { title: 'AI-Powered Chatbots', description: 'Deploy intelligent chatbots that offer 24/7 customer support, automate conversations, and enhance user engagement across web and mobile platforms.' },
    { title: 'Fraud Detection Systems', description: 'Hire AI development teams to build models that detect suspicious patterns, reduce financial fraud, and ensure secure transactions in real time.' },
    { title: 'Intelligent Document Processing', description: 'Use AI to extract, classify, and validate data from unstructured documents like invoices, contracts, and forms with high accuracy & prominent precision.' },
    { title: 'Demand Forecasting Models', description: 'Develop AI tools that predict future demand based on market trends, sales history, and seasonality, optimizing inventory and resource planning.' }
];

const engagementModelsAI = [
    { title: 'Dedicated AI Team', description: 'Hire a dedicated AI team to work exclusively on your project—from strategy and model development to testing, deployment, and long-term optimization. This model ensures deep involvement, domain understanding, and seamless integration.', points: ['Client-Aligned Development Approach', 'Transparent Communication & Reporting', 'Full-Time Resource Commitment', 'Scalable & Agile Team Structure'] },
    { title: 'AI Team Augmentation', description: 'Need to expand your internal capabilities? Hire AI development teams to augment your existing team with niche AI expertise. Whether it’s NLP, computer vision, or generative AI, we help bridge skill gaps and accelerate delivery timelines.', points: ['Specialized Talent On-Demand', 'Smooth Integration with In-House Teams', 'Flexible Engagement Duration', 'Cost-Efficient Resource Allocation'] },
    { title: 'Project-Based AI Development', description: 'For well-scoped, outcome-driven initiatives, we offer project-based AI development services. Engage a high-performance AI developers team to execute your project end-to-end from concept to product delivery within a fixed budget & timeline.', points: ['Defined Milestones & Deliverables', 'Transparent Resource Planning', 'Low Risk, High Efficiency', 'Results-Focused Delivery Model'] },
];

const faqsAI = [
    { q: 'Why should I hire AI development teams instead of individual freelancers?', a: 'Hiring a full AI development team provides a synergistic blend of skills—from data science and machine learning engineering to MLOps—that individual freelancers often lack. A cohesive team ensures better collaboration, streamlined workflows, robust security, and end-to-end project ownership, leading to faster, more reliable, and scalable AI solutions.' },
    { q: 'How do I know if I need to hire a dedicated team of AI engineers?', a: 'You should hire a dedicated AI team if your project is long-term, complex, and core to your business strategy. If you require continuous model training, iteration, and maintenance, or if you need to build a scalable AI infrastructure from the ground up, a dedicated team offers the consistency, focus, and deep domain expertise required for success.' },
    { q: 'What kind of projects can I build if I hire AI development teams?', a: 'You can build a wide array of intelligent solutions, including custom generative AI and LLM applications, predictive analytics models, NLP-powered chatbots, computer vision systems for image recognition, recommendation engines, and AI-powered automation tools for various business processes.' },
    { q: 'Can I scale the AI team as my project grows?', a: 'Yes, one of the key advantages of our engagement models is flexibility. You can easily scale your team up or down by adding more AI specialists, such as MLOps engineers or data scientists, as your project requirements evolve and your AI initiatives expand.' },
    { q: 'How do you ensure confidentiality and security when we hire an AI team?', a: 'We prioritize your data\'s security and confidentiality. We start with a comprehensive Non-Disclosure Agreement (NDA) and adhere to strict data protection protocols throughout the project. Our team follows secure coding practices and ethical AI standards to ensure your intellectual property and sensitive data are always protected.' }
];

const userGuideContentAI = {
    'What Skills Should an AI Development Team Have?': {
        intro: 'When you plan to hire AI developers team, ensure you’re choosing professionals with not only strong coding skills but also deep domain knowledge in artificial intelligence, data science, and software engineering. A competent AI team typically consists of:\n\n- Machine Learning Engineers who design and fine-tune predictive models\n- Data Scientists who prepare and interpret large datasets\n- NLP Experts for building language-based tools like chatbots, summarizers, and sentiment analyzers\n- Computer Vision Engineers for tasks such as facial recognition and object detection\n- MLOps Engineers to streamline the model lifecycle from development to deployment\n\nYour ideal decision is to hire dedicated team of AI engineers with practical experience in frameworks like TensorFlow, PyTorch, Keras, and Scikit-learn. Knowledge of cloud ecosystems like AWS SageMaker, Google Vertex AI, or Azure ML Studio is also crucial for seamless deployment. By working with companies that specialize in AI, you can hire AI development teams who don’t just code—they understand the business objectives and deliver AI systems that align with your strategic goals.',
        points: []
    },
    'Why Hire a Dedicated AI Development Team Instead of Freelancers?': {
        intro: 'AI projects are long-term, data-intensive, and iterative—making them vastly different from short-term software development gigs. That’s why businesses looking for sustainable, scalable AI solutions prefer to hire a dedicated team of AI engineers instead of freelancers. Here’s why a dedicated team is a better investment:',
        points: [
            { title: 'Consistency & Long-Term Focus', text: 'A dedicated AI team remains with your project throughout its lifecycle, ensuring continuity, stable architecture, and aligned vision.' },
            { title: 'Structured Collaboration', text: 'Unlike freelancers working in isolation, an integrated team consists of developers, data scientists, and architects collaborating in real time.' },
            { title: 'Faster Iterations', text: 'AI model building, testing, and optimization require constant feedback loops. A dedicated team works in sprints, enabling faster development cycles.' },
            { title: 'Security & Compliance', text: 'Dedicated teams operate under strict NDAs, offer GDPR/CCPA compliance, and ensure secure handling of sensitive business data.' }
        ],
        outro: 'When you hire AI team through an experienced partner, you reduce project risk, enhance delivery efficiency, and gain access to a managed, goal-oriented workforce. Companies that consistently achieve success with AI are those that hire AI development teams aligned with their long-term roadmap.'
    },
    'How Can a Dedicated AI Team Accelerate My Business Goals?': {
        intro: 'One of the top reasons to hire AI development teams is the tangible business acceleration they offer. AI is not just a trend—it’s a strategic tool for driving revenue, enhancing customer experience, and making smarter decisions. Here’s how a dedicated AI team brings business value:',
        points: [
            { title: 'Automation at Scale', text: 'From document processing and predictive analytics to fraud detection and chatbot support, AI automates repetitive processes, reducing manual effort and operational cost.' },
            { title: 'Real-Time Intelligence', text: 'When you hire an AI development team, you get access to models that can analyze large data streams and deliver actionable insights in real time.' },
            { title: 'Personalized User Experiences', text: 'AI enables hyper-personalization across eCommerce, entertainment, healthcare, and finance. Recommendation engines, dynamic pricing models, and user segmentation become seamless with an expert AI team.' },
            { title: 'Innovation Acceleration', text: 'A dedicated team of AI engineers can transform your ideas into prototypes and MVPs quickly, helping you test hypotheses, gather feedback, and iterate faster.' }
        ],
        outro: 'Startups and enterprises alike hire an AI team to gain a first-mover advantage in their industry. With the right team, you don’t just build apps, you build intelligent systems that adapt, learn, and scale with your business.'
    },
    'What Is the Cost of Hiring an AI Development Team?': {
        intro: 'When evaluating whether to hire AI development teams, cost is a major consideration, but it should be seen in the context of value delivered. AI projects often involve phases such as research, model building, infrastructure setup, training, testing, and deployment, and their cost depends on several variables:',
        points: [
            { title: 'Team Composition', text: 'A senior AI developers team with diverse roles (ML, MLOps, NLP, etc.) will command higher rates, but deliver higher quality output.' },
            { title: 'Project Complexity', text: 'Training a custom deep learning model requires more effort and resources than integrating an off-the-shelf AI API.' },
            { title: 'Engagement Model', text: 'Choosing between dedicated, team augmentation, or project-based models impacts cost structure and flexibility.' },
            { title: 'Time & Scope', text: 'Short-term proofs of concept may cost less, while full-scale AI product development over months will require larger budgets.' }
        ],
        outro: 'Businesses that hire a dedicated team of AI engineers often find that the long-term ROI far outweighs the upfront investment. AI-powered solutions reduce costs through automation, improve customer retention, and unlock new revenue channels. For the most efficient budgeting, partner with a company that lets you hire AI development teams based on transparent pricing, clear milestones, and performance guarantees.'
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

// --- SECTIONS FOR HIRE AI DEVELOPMENT TEAM PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top AI Development Team</h3>
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
                    {aiCoreExpertise.map((service, index) => (
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
                    Why Choose Our Dedicated AI Development Team
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseAI.map((reason, index) => (
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
                    <h2 className="text-4xl md:text-5xl font-bold">Hire Dedicated AI Teams for Intelligent Software Solutions</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Hire dedicated AI teams that transform your vision into intelligent, data-driven software solutions. From predictive analytics to automation and personalization, we build scalable AI systems that learn, adapt, and deliver real business impact.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {aiSolutions.map((solution, index) => (
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

const FeaturedCaseStudyAI = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Our AI Development Success Stories</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    At Alpixn Technologies, our AI development team brings deep domain expertise and strategic insight to every project. From generative AI to custom machine learning solutions, we build intelligent, future-ready systems tailored to your business goals, enabling innovation and enterprise-wide digital transformation.
                </p>
            </div>
            <div className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-800 ring-1 ring-white/10 rounded-2xl p-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-2/5">
                        <h3 className="text-3xl font-bold mb-2">AI Chatbot</h3>
                        <p className="text-gray-400 font-semibold mb-4">TECH: Python | LangChain</p>
                        <p className="text-blue-400 font-semibold mb-4">Alpixn Technologies Redefines Chatbot Development for a Top IT Organization with Next- Gen AI SaaS Platform</p>
                        <ul className="space-y-3 mb-6">
                             {['Smart AI Training & Adaptability', 'Automated & Scalable Management', 'Real-Time Insights & Optimization', 'Seamless Deployment & Integration'].map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-3/5">
                        <p className="text-gray-300 mb-6 text-lg">Alpixn Technologies partnered with a global enterprise to develop an AI-powered SaaS platform, integrating AI models, automation, and real-time analytics to optimize workflow automation, customer engagement, and data-driven decision-making.</p>
                        <div className="text-center mt-6 space-x-4">
                            <button className="text-white bg-blue-600 font-semibold hover:bg-blue-700 transition-colors py-2 px-4 rounded-lg">Read Story</button>
                            <button className="text-blue-400 font-semibold hover:text-blue-300 transition-colors py-2 px-4">Explore IT & SaaS Services</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const UserGuideSidebarAI = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentAI)[0]);
    const content = userGuideContentAI[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Hire AI Development Team</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentAI).map(topic => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top-Tier AI Engineers Team in 3 Simple Step</h2>
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
                        At Alpixn Technologies, we offer flexible engagement models to help you hire AI development teams that best fit your business goals, budget, and timelines.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsAI.map((model, index) => (
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
                    {faqsAI.map((faq, index) => (
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
const HireAIDevelopmentPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire AI Development Team<br/>Build Future-Ready AI Solutions with Our Dedicated Experts</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Hire AI developers specializing in LLMs, Gen AI, NLP, and computer vision to build intelligent AI solutions. From ideation to deployment, our AI development team delivers advanced, scalable AI products.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Experienced specialists in ML, Data Science, & NLP</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Expertise in LLMs, GenAI, ML, and NLP technologies</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Proven delivery across various industries</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>End-to-end development: Ideation to deployment</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Agile execution with NDA-backed confidentiality</li>
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
                Ready to Integrate AI Developers in Your Team?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire AI Team
            </motion.button>
        </section>
        <WhatYouGetSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Get a Custom AI Team in 48 Hours
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Free Consultation
            </motion.button>
        </section>

        <FeaturedCaseStudyAI />
        <UserGuideSidebarAI />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireAIDevelopmentPage;