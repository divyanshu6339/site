import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- UPDATED DATA ARRAYS ---
const genAiServices = [
    { title: 'Custom AI Agent Development', description: 'We create bespoke AI agents specific to your goals, helping automate business processes, minimize human error, and fast-track productivity through business workflows mapped onto data-driven logic.', icon: 'custom-ai-agent-development' },
    { title: 'AI Agent Design and Architecture', description: 'We architect intelligent AI agents with flexible, scalable structures that evolve with your business, ensuring long-term adaptability, smoother updates, and optimal alignment with your systems and strategic vision.', icon: 'ai-agent-design-and-architecture' },
    { title: 'AI Agent Integration Services', description: 'We integrate AI agents directly into your existing environment, improving speed, decision-making, and functionality without overhauling operations, making adoption easier, faster, and cost-effective.', icon: 'ai-agent-integration-services' },
    { title: 'AI Agent Strategy and Consulting', description: 'We provide expert consulting services to define AI agent opportunities, validate use cases, and map implementation strategies—so you spend wisely, launch sooner, and gain a clear competitive advantage.', icon: 'ai-agent-strategy-and-consulting' },
    { title: 'AI Agent Performance Optimization', description: 'We improve AI agent accuracy, speed, and learning through continuous tuning and testing, ensuring consistency, less downtime, and efficiency to scale and evolve your business.', icon: 'ai-agent-performance-optimization' },
    { title: 'AI Agent Support and Maintenance', description: 'Our approach to monitoring and optimizing AI agents ensures accuracy, quicker handling time, and improved learning as organizations grow, resulting in decreased downtime and increased productivity.', icon: 'ai-agent-support-and-maintenance' }
];

const tangibleResults = [
    { title: 'Task Automation & Productivity Gains', description: 'From automating repetitive tasks to reducing manual effort, our AI agent development services empower your team to shift their focus to high-impact work. Whether you’re an enterprise or a startup, we help you build AI agents that drive measurable productivity and faster execution across workflows.', icon: 'task-automation-productivity-gains' },
    { title: 'Seamless Integration with Existing Tools', description: 'We design custom AI agent development solutions that integrate seamlessly into your technology landscape – no extensive transformations required. As a trusted AI agent development company, we ensure your agent plugin is seamlessly integrated into CRMs, ERPs, and internal platforms to deliver immediate value.', icon: 'seamless-integration-with-existing-tools' },
    { title: 'Data-Driven Business Insights', description: 'Our advanced AI agent solutions extract large-scale operational data and provide actionable insights. From better forecasting to more astute business decisions, companies depend on our AI agent services to convert data into strategy — and strategy into growth.', icon: 'data-driven-business-insights' },
    { title: 'Enterprise-Ready Security & Compliance', description: 'Security is non-negotiable. We follow industry best practices and standards to protect your systems and data. Regardless of your vertical — healthcare, finance, SaaS- our solutions are engineered to address compliance requirements and scale securely.', icon: 'enterprise-ready-security-compliance' }
];

const whyChooseUsGenAi = [
    { title: 'Business-Aligned AI Strategy', description: 'We don’t push tech—we solve real problems. Our strategies for AI agents are centered on your business priorities, unlocking automation where it matters most and accelerating results that leadership teams care about.' },
    { title: 'Custom-Built AI Agent Solutions', description: 'No templates. No shortcuts. We create tailored AI agents that capture your unique business DNA—so your automation is natural, your scaling seamless, and your results relevant to your team.' },
    { title: 'Faster Time to Automation', description: 'Time is leverage. We enable you to become extremely fast in building AI agents—without skimping—so you can save time, lower costs, and realize ROI while others are still in planning mode.' },
    { title: 'Dedicated AI Development Teams', description: 'You’re not just buying code—you’re getting an invested, result-driven team. Our AI experienced experts work with you end to end, providing strategic input, agile delivery, and clear accountability at every step.' },
    { title: 'Secure and Compliant Architecture', description: 'We build AI agents with enterprise-level security from day one—safeguarding sensitive data, abiding by compliance mandates, and gaining trust where trust matters most: in industries where failure is not an option.' },
    { title: 'Ongoing Support and Optimization', description: 'Your AI agent should grow with your business. We stay with you after launch—constantly refining, updating, and optimizing, keeping your automation sharp, impactful, and in lockstep with changing needs.' }
];

const industries = [
    "Healthcare", "EdTech", "Fintech", "Proptech", "Retail", "Transport", "Telecom", "Automotive", "Insurtech", "Travel & Hospitality", "Facility Management", "Media & Entertainment"
];

const genAiTechStack = [
    { name: 'Tensorflow', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/tensorflow.png' },
    { name: 'Streamlit', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/streamlit.png' },
    { name: 'RAY', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/ray.png' },
    { name: 'PyTorch', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/pytorch.png' },
    { name: 'ONNX', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/onnx.png' },
    { name: 'MLflow', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/mlflow.png' },
    { name: 'MetaGPT', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/meta-gpt.png' },
    { name: 'LlamaIndex', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/LlamaIndex.png' },
    { name: 'JAX', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/jax.png' },
    { name: 'Haystack', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/haystack.png' },
    { name: 'Gradio', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/gradio.png' },
    { name: 'Flask', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/flask.png' }
];

const newTestimonials = [
    { text: "Working with Jellyfish Technologies has been a truly positive experience. The developers integrated seamlessly with our team, quickly understood our requirements, and delivered reliable, high-quality solutions...", author: "Sajin J SN", title: "Project Management Officer, Gojo & Company, Inc." },
    { text: "Not only would I hire them again without hesitation, but I will point out that after the first two test projects were done, they earned my repeat business...", author: "Karl Margrain", title: "Founder and Managing Director, Payleadr" },
    { text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment...", author: "James Anderson", title: "Co-Founder, Shootzu" }
];


// Custom hook for intersection observer
const useOnScreen = (options) => {
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    if (!ref) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);
    
    observer.observe(ref);
    
    return () => observer.disconnect();
  }, [ref, options]);

  return [setRef, isVisible];
};

// --- REBUILT & NEW SECTIONS ---

const AiSuccessStorySection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const activeStudy = {
        logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/patronum.svg',
        image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/AI-Chatbot.webp',
        title: 'Jellyfish Technologies Redefines Chatbot Development for a Top IT Organization with Next- Gen AI SaaS Platform',
        description: 'Jellyfish Technologies partnered with a global enterprise to develop an AI-powered SaaS platform, integrating AI models, automation, and real-time analytics to optimize workflow automation, customer engagement, and data-driven decision-making.',
        points: ['Smart AI Training & Adaptability', 'Automated & Scalable Management', 'Real-Time Insights & Optimization', 'Seamless Deployment & Integration'],
        tags: ['PYTHON', 'LANGCHAIN'],
        storyLink: "#",
        serviceLink: "#"
    };

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Success Stories: Turning AI Potential into Business Performance
                    </h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Our AI initiatives are grounded in solving real problems, not just experimenting with algorithms. With a profound grasp of data science and business dynamics, we develop AI solutions that immediately start significant transformations.
                    </p>
                </div>
                <div className={`bg-gray-900/50 ring-1 ring-white/10 rounded-2xl p-6 md:p-8 transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                        <div className="w-full md:w-2/5">
                            <h3 className="text-2xl font-bold mb-4">AI Chatbot</h3>
                            <div className="text-sm font-semibold text-gray-400 bg-gray-800 px-3 py-1 rounded-full inline-block mb-4">TECH: {activeStudy.tags.join(' | ')}</div>
                            <img src={activeStudy.image} alt={activeStudy.title} className="rounded-xl shadow-2xl shadow-blue-500/10" />
                        </div>
                        <div className="w-full md:w-3/5">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{activeStudy.title}</h3>
                            <p className="text-gray-300 mb-6">{activeStudy.description}</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
                                {activeStudy.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap items-center gap-4 mt-6">
                                <button href={activeStudy.storyLink} className="text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center gap-2">Read Story <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></button>
                                <button href={activeStudy.serviceLink} className="ml-auto text-blue-400 font-semibold hover:text-blue-300 transition-colors">Explore IT & SaaS Services</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TangibleResultsSection = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div ref={ref} className="py-24 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            Why Businesses Trust Our AI Agent Development Expertise
          </h2>
          <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            We enable organizations to innovate confidently, automate smarter, and scale faster. Our AI agent development company deploys real-world, high-performance solutions that are purpose-built to tackle complex problems and provide lasting business advantages.
          </p>
          <div className="mt-8">
             <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300">Not Sure Where to Begin with AI? Get Expert Guidance</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {tangibleResults.map((item, index) => (
            <div key={item.title} className={`relative p-8 bg-gray-900/50 ring-1 ring-white/10 rounded-2xl transition-all duration-500 ease-out hover:ring-blue-500/50 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              {/* You can add image here based on item.icon if you have the assets */}
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const WhyChooseUsSection = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div ref={ref} className="py-24 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            Why Choose Us for AI Agent Development Services?
        </h2>
        <p className={`max-w-3xl mx-auto text-lg text-gray-400 mb-16 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            At Jellyfish Technologies,we take a unified approach to building custom AI agents, which leads to faster timelines, stronger performance, and complete confidence from start to scale.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsGenAi.map((reason, index) => (
            <div key={reason.title} className={`p-8 bg-gray-900/50 ring-1 ring-white/10 rounded-2xl text-left transition-all duration-500 ease-out hover:ring-blue-500/50 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const IndustriesServedSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Industries We Serve</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        We partner with businesses across retail, SaaS, logistics, and more—building intelligent, scalable AI agents that meet real-world use cases and deliver measurable impact across multiple industries.
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {industries.map((industry, index) => (
                        <div key={industry} className={`p-4 bg-gray-800 ring-1 ring-white/10 rounded-xl text-center transition-all duration-500 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${index * 50}ms` }}>
                            <p className="font-semibold text-gray-300">{industry}</p>
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
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>See what our clients have to say</h2>
                     <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        We’re not just a tech vendor; we’re a transformation partner. Our clients rely on us to drive innovation, reduce overhead, and execute faster with confidence.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newTestimonials.map((testimonial, index) => (
                        <div key={index} className={`p-8 bg-gray-900/50 ring-1 ring-white/10 rounded-2xl transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <p className="text-gray-300 mb-6">"{testimonial.text}"</p>
                            <div className="font-bold text-white">Author</div>
                            <div className="font-bold text-white">{testimonial.author}</div>
                            <div className="text-sm text-gray-400">{testimonial.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const GenAiTechStackSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Our AI Tech Stack</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Built to grow with your business, our team utilizes state-of-the-art ML platforms, DevOps pipelines, and adaptive agent frameworks to manufacture AI agents for startups and enterprises.
                    </p>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center">
                    {genAiTechStack.map((tech, index) => (
                        <div key={tech.name} className={`flex justify-center items-center p-4 bg-gray-800 rounded-xl transition-all duration-500 ease-out hover:bg-gray-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: `${index * 50}ms` }}>
                           <img src={tech.logo} alt={tech.name} className="h-16 object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const EngagementModelsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const models = [
        {
            title: 'Offshore Dedicated Team',
            description: 'Our offshore dedicated team model is ideal for companies looking to scale fast yet keep complete control over their team and projects. We provide you with a team of AI consultants and engineers dedicated exclusively to your project.',
            points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency'],
            icon: 'offshore-dedicated-team'
        },
        {
            title: 'Staff Augmentation',
            description: 'Seeking high-level expertise to augment your internal AI division—without the hiring process? With our staff augmentation model, you can onboard expert AI agent developers at your convenience—when and where you need them.',
            points: ['Tailored Expertise', 'Seamless Integration', 'Cost-effective Solution', 'Transparent Communication'],
            icon: 'staff-augmentation'
        },
        {
            title: 'Project-Based',
            description: 'For well-defined AI initiatives with a clear scope and timelines, our project-based model offers end-to-end execution — with complete ownership, accountability, and milestone-driven delivery. We handle the process — you get the results.',
            points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation'],
            icon: 'project-based-project-based'
        },
    ];

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Engagement Models</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        As a leading AI Agent development company, Jellyfish Technologies offers varied engagement models to meet your project vision, schedules, and team structure — ensuring agility, transparency, and performance at every stage.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {models.map((model, index) => (
                        <div key={model.title} className={`p-8 bg-blue-900/20 ring-1 ring-blue-500/20 rounded-2xl transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                             {/* You can add an icon here based on model.icon */}
                            <h3 className="text-3xl font-bold mb-4 text-center">{model.title}</h3>
                            <p className="text-gray-400 mb-6 text-center h-32">{model.description}</p>
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
    const faqs = [
        { q: 'What is an AI agent development company?', a: 'Content for this answer is not available yet.' },
        { q: 'How can AI agent development services benefit my business?', a: 'Content for this answer is not available yet.' },
        { q: 'Why should I choose a custom AI agent development solution?', a: 'Content for this answer is not available yet.' },
        { q: 'What industries can benefit from AI agents development?', a: 'Content for this answer is not available yet.' },
        { q: 'How do AI agent development solutions integrate with existing systems?', a: 'Content for this answer is not available yet.' },
        { q: 'What is the process to build an AI agent for my business?', a: 'Content for this answer is not available yet.' },
        { q: 'What are advanced AI agent solutions?', a: 'Content for this answer is not available yet.' },
        { q: 'How can AI agents for startups drive growth?', a: 'Content for this answer is not available yet.' },
        { q: 'What should I look for in an AI agent development team?', a: 'Content for this answer is not available yet.' },
        { q: 'How do AI agents for software development improve productivity?', a: 'Content for this answer is not available yet.' }
    ];

    const toggle = (index) => setOpen(open === index ? null : index);

    return (
        <div className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Everything you need to know about</h2>
                <div className="max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-700 py-4">
                            <button onClick={() => toggle(index)} className="w-full flex justify-between items-center text-left text-lg font-semibold">
                                <span>{`0${index + 1}`}<span className="ml-4">{faq.q}</span></span>
                                <span>{open === index ? '-' : '+'}</span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open === index ? 'max-h-96' : 'max-h-0'}`}>
                                <p className="pt-4 text-gray-400">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const FinalCtaSection = () => {
    return (
        <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect with Our AI Agent Team</h2>
                <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-400">Leverage our deep expertise to create AI agents that drive innovation, responsiveness, and long-term business impact.</p>
                <form className="max-w-2xl mx-auto text-left grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" className="bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="Phone" className="bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="email" placeholder="Email" className="bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="Company" className="bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <textarea placeholder="Tell us about your project" rows="4" className="md:col-span-2 bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </form>
            </div>
        </section>
    );
}

// --- MAIN PAGE COMPONENT ---
const AiAgentDevelopmentPage = () => {
  const stats = [
    { label: 'Years of Experience', value: '14+' },
    { label: 'Full Time Experts', value: '150+' },
    { label: 'Projects Delivered', value: '98%' },
    { label: 'Customer Ratings', value: '4.9/5' }
  ];

  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <motion.section
          className="relative bg-gradient-to-r from-blue-900 via-black to-black text-white py-20 pl-5 pr-4 sm:pl-10 sm:pr-6 md:pl-16 lg:pl-24 xl:pl-36 2xl:pl-48"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center">
                <motion.div
                className="md:w-1/2 mb-10 md:mb-0"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Best-in-Class AI Agent Development Company</h1>
                <p className="text-lg md:text-xl mb-6">
                    Transform business complexity into streamlined efficiency with our state-of-the-art AI agent development services. Jellyfish Technologies builds intelligent agents to cater to specific business challenges, helping you innovate faster, reduce time-to-market, and stay ahead of the curve.
                </p>
                <motion.button
                    className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Book a Free Consultation
                </motion.button>
                </motion.div>
                <motion.div
                className="md:w-1/2 flex justify-center"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                >
                <img src={StaffAugmentationImage} alt="Generative AI" className="w-full max-w-md rounded-lg" />
                </motion.div>
            </div>
            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-20">
                {stats.map((stat) => (
                    <motion.div 
                        key={stat.label}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}>
                        <p className="text-4xl font-bold text-blue-400">{stat.value}</p>
                        <p className="text-gray-400 mt-2">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
          </div>
        </motion.section>

        <TrustedBy backgroundColor="bg-white" />

        {/* AI Development Services We Offer */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              AI Agent Development Services We Offer
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 max-w-3xl mx-auto mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Jellyfish Technologies, one of the leading AI agent development companies, builds AI agents that integrate seamlessly with your software stack, implementing intelligence, speed, and adaptability without re-engineering the existing architecture.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {genAiServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-8 rounded-lg text-left transform transition duration-500 hover:scale-105 hover:bg-gray-700"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* You can add an icon here based on service.icon */}
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <AiSuccessStorySection />

        <TangibleResultsSection />
        
        <WhyChooseUsSection />

        <IndustriesServedSection />
        
        <GenAiTechStackSection />
        
        <TestimonialsSection />

        <EngagementModelsSection />

        <Insights />

        {/* CTA Section */}
        <section className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              Unlock Business Efficiency with Intelligent AI Agents
            </motion.h2>
            <motion.p
              className="text-lg mb-8 max-w-3xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Seeking purposeful automation? We empower companies like yours to create AI agents that address genuine challenges and foster sustainable success. Book a discovery session with our experts now.
            </motion.p>
            <motion.button
              className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Get a quote for your project
            </motion.button>
          </div>
        </section>
        
        {/* Trusted By Section with Paragraph */}
        <section className="py-20 bg-black text-center">
            <h2 className="text-3xl font-bold mb-4">Trusted By</h2>
            <p className="max-w-4xl mx-auto text-gray-400 mb-10">
                Top brands partner with Jellyfish Technologies for enterprise-grade AI agent development solutions—because we build intelligent systems that work consistently in fast-moving, high-impact environments.
            </p>
            <TrustedBy backgroundColor="bg-black" />
        </section>
        
        <FaqSection />
        
        <FinalCtaSection />

      </main>
      <Footer />
    </div>
  );
};

export default AiAgentDevelopmentPage;