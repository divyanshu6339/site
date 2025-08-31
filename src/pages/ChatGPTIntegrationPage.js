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
const chatGptServices = [
    { title: 'ChatGPT Consulting', description: 'We help businesses identify potential high-impact use cases, define integration strategies, and ensure successful deployment. Through expert ChatGPT consulting services, we make AI adoption uncomplicated, scalable, and aligned with actual business goals.', icon: 'chatgpt-consulting' },
    { title: 'GPT App Development', description: 'Our developers build secure, scalable GPT-powered applications tailored to your business objectives, streamlining user interaction, automating services, and delivering intelligent, real-time experiences that boost engagement and operational efficiency.', icon: 'gpt-app-development' },
    { title: 'ChatGPT API Integration', description: 'We integrate ChatGPT into your systems via secure APIs, automating communication, improving responsiveness, and facilitating seamless, intelligent interactions within your current platforms, CRMs, ERPs, or customer service tools and workflows.', icon: 'chatgpt-api-integration' },
    { title: 'Custom ChatGPT Development', description: 'At Alpixn Technologies, we develop AI solutions tailored for your business—automating workflows, enhancing user experiences, and tackling complex challenges with custom ChatGPT integration aligned with your objectives and infrastructure.', icon: 'custom-chatgpt-development' },
    { title: 'Chatbot Integration', description: 'We deploy advanced, contextually aware AI chatbots that deliver 24/7 support, reduce ticket volumes, and significantly improve user satisfaction, revolutionizing how your business engages customers, automates workflows, and addresses repetitive mundane tasks.', icon: 'chatbot-integration' },
    { title: 'Voice Assistant Integration', description: 'Our team integrates voice-enabled assistants using ChatGPT, enabling hands-free, natural conversations that streamline tasks, improve accessibility, and enhance the customer experience across mobile apps, web platforms, and enterprise systems.', icon: 'voice-assistant-integration' }
];

const chatGptBenefits = [
    { title: 'Seamless System Integration', description: 'Our ChatGPT integration services seamlessly integrate with your existing systems, such as CRM, ERP, or helpdesk, to foster unified, AI-driven workflows without disrupting your current operations. We provide smooth deployments with trusted chatbot integration and scalable AI integration services.', icon: 'seamless-system-integration' },
    { title: 'Real-Time Data Insights', description: 'With custom ChatGPT integration services, businesses gain instant access to user behavior, intent, and feedback. This enables better decision-making, continuous optimization, and more intelligent automation through context-driven AI chatbot development services.', icon: 'real-time-data-insights' },
    { title: 'Reduced Operational Workloads', description: 'ChatGPT development services automate repetitive queries and manual tasks, liberating your team for more strategic initiatives. Our ChatGPT business integration services reduce costs, increase efficiency, and boost service quality at scale.', icon: 'reduced-operational-workloads' },
    { title: 'Streamlined Internal Workflows', description: 'Using ChatGPT AI integration, we streamline internal processes like ticket routing, scheduling, and employee onboarding. Alpixn Technologies’ chatGPT consulting services build efficient internal systems that drive productivity and reduce friction across departments.', icon: 'streamlined-internal-workflows' }
];

const whyChooseUsChatGpt = [
    { title: 'Expertise in ChatGPT Integration', description: 'Alpixn Technologies brings expertise in delivering ChatGPT integration services that are scalable, secure, and aligned with your objectives. This enables enterprise-ready chatbot integration that transforms user experience and workflow efficiency.', icon: 'expertise-in-chatgpt-integration' },
    { title: 'Certified AI Development Team', description: 'Our certified team specializes in ChatGPT development services and AI integration services. We enable businesses to deploy robust, high-impact solutions by combining technical precision with real-world domain knowledge.', icon: 'certified-ai-development-team' },
    { title: 'Secure, Compliant Deployments', description: 'We ensure that every ChatGPT API integration meets enterprise security standards, data privacy regulations, and industry compliance, making us a reliable partner for businesses requiring safe, stable, and auditable deployments.', icon: 'secure-compliant-deployments' },
    { title: 'Custom Business-Focused Solutions', description: 'Our bespoke ChatGPT integration services are tailored to your systems, objectives, and customer touchpoints, providing AI chatbot development services that add value, reduce costs, and foster long-term growth.', icon: 'custom-business-focused-solutions' },
    { title: 'Enterprise-Grade Quality Standards', description: 'From structured QA to performance optimization, our ChatGPT integration services are tested for precision, scalability, and reliability, ensuring consistent performance across enterprise chatbot deployments.', icon: 'enterprise-grade-quality-standards' },
    { title: 'Trusted by Global Clients', description: 'Leading brands choose us for ChatGPT integration services in India and globally. They trust our proven methodology, speedy delivery, and strategic AI consulting services that generate measurable business impact.', icon: 'trusted-by-global-clients' }
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
    { text: "Working with Alpixn Technologies has been a truly positive experience. The developers integrated seamlessly with our team, quickly understood our requirements, and delivered reliable, high-quality solutions...", author: "Sajin J SN", title: "Project Management Officer, Gojo & Company, Inc." },
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
        title: 'Alpixn Technologies Redefines Chatbot Development for a Top IT Organization with Next- Gen AI SaaS Platform',
        description: 'Alpixn Technologies partnered with a global enterprise to develop an AI-powered SaaS platform, integrating AI models, automation, and real-time analytics to optimize workflow automation, customer engagement, and data-driven decision-making.',
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
                        Case Studies: Smart AI Solutions. Real Business Outcomes.
                    </h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        We develop and deploy tailored AI solutions that solve real business challenges — from automation to prediction — delivering measurable improvements in efficiency, customer experience, and bottom-line performance across industries.
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

const BenefitsSection = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div ref={ref} className="py-24 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            Benefits of Our ChatGPT Integration Services
          </h2>
          <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            Accelerate innovation with seamless ChatGPT integration that enhances user interactions, automates service workflows, and delivers intelligent insights—without disrupting your existing infrastructure or draining IT resources.
          </p>
          <div className="mt-8">
             <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300">Not Sure Where to Begin with AI? Get Expert Guidance</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {chatGptBenefits.map((item, index) => (
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
            Why Choose Us for ChatGPT Integration Services
        </h2>
        <p className={`max-w-3xl mx-auto text-lg text-gray-400 mb-16 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            At Alpixn Technologies, our ChatGPT integration & development services focus on driving real business impact. We bring cutting-edge AI, agile execution, and full-lifecycle support to help your business move faster, think smarter, and turn ChatGPT into a strategic growth engine.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsChatGpt.map((reason, index) => (
            <div key={reason.title} className={`p-8 bg-gray-900/50 ring-1 ring-white/10 rounded-2xl text-left transition-all duration-500 ease-out hover:ring-blue-500/50 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
               {/* You can add an icon here based on reason.icon */}
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
                        Alpixn Technologies delivers ChatGPT business integration services for the education, SaaS, and enterprise sectors—helping businesses automate tasks, improve engagement, and leverage real-time insights through custom AI chatbot development.
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
                        Our clients consistently value our custom ChatGPT integration services for delivering measurable results—fast deployment, intelligent automation, and enhanced communication through secure, scalable AI chatbot development tailored to complex enterprise needs.
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
                        Our full-stack ChatGPT development services are powered by OpenAI APIs, prompt engineering frameworks, RAG pipelines, and secure orchestration layers—optimized for dynamic use cases, enterprise security, rapid rollouts, and cross-platform expansibility.
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
            description: 'Our offshore ChatGPT integration team works exclusively on your project, providing full-cycle support, custom LLM integration services, and consistent delivery for scalable, long-term AI transformation.',
            points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency'],
            icon: 'offshore-dedicated-team'
        },
        {
            title: 'Staff Augmentation',
            description: 'Scale your internal resources with certified AI developers. Our staff augmentation model supports your ChatGPT roadmap, ensuring minimal ramp-up time and high performance across evolving project stages.',
            points: ['Tailored Expertise', 'Seamless Integration', 'Cost-effective Solution', 'Transparent Communication'],
            icon: 'staff-augmentation'
        },
        {
            title: 'Project-Based',
            description: 'For well-scoped projects, our fixed-cost model ensures rapid ChatGPT deployment, API optimization, and streamlined delivery, perfect for enterprises seeking defined AI development sprints with visible results.',
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
                        Alpixn Technologies provides flexible engagement models to suit your unique project needs. Whether scaling fast or launching a targeted solution, our models guarantee efficiency, clarity, and optimal delivery.
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
        { q: 'What are ChatGPT integration services, and how can they benefit my business?', a: 'ChatGPT integration services allow you to embed conversational AI into your systems. With scalable AI-powered solutions, Alpixn Technologies helps companies automate support, simplify processes, and enhance engagement, improving productivity, lowering costs, and giving your company a competitive advantage.' },
        { q: 'Can ChatGPT be integrated into existing CRM or ERP systems?', a: 'Yes, absolutely. We specialize in integrating ChatGPT with a wide range of enterprise systems, including CRMs like Salesforce and HubSpot, and various ERPs. This allows you to automate data entry, generate reports using natural language, and create intelligent assistants for your sales and support teams directly within the platforms they already use.' },
        { q: 'What are the prerequisites for implementing ChatGPT API integration?', a: 'The primary prerequisites are a clear business use case, access to the relevant data for context (e.g., product info, FAQs), and an available API endpoint in your existing system if you want seamless data flow. Our consulting team works with you to define these prerequisites and ensure your technical environment is ready for a smooth integration.' },
        { q: 'How secure is ChatGPT integration in terms of data privacy and compliance?', a: 'Security is paramount. We implement secure authentication methods, data encryption, and role-based access controls. For businesses with strict data privacy needs, we can utilize solutions like the private endpoints with major cloud providers or deploy models in your own virtual private cloud. We ensure all integrations adhere to GDPR, HIPAA, and other relevant data protection regulations.' },
        { q: 'Can I customize ChatGPT responses to align with my brand\'s tone and guidelines?', a: 'Yes. Customization is key to our service. We use techniques like prompt engineering, fine-tuning on your company\'s documents, and Retrieval-Augmented Generation (RAG) to ensure the AIs responses are consistently aligned with your brand’s specific voice, tone, and factual information. This prevents generic replies and creates an authentic brand experience.' },
        { q: 'What is the typical timeline for deploying ChatGPT integration & development services?', a: 'A standard ChatGPT API integration for a chatbot or a simple workflow automation can take as little as 2-4 weeks. More complex projects, like custom GPT app development or deep integration into multiple enterprise systems, may range from 1 to 3 months. We prioritize an agile approach to deliver value quickly.' },
        { q: 'What distinguishes Alpixn Technologies\' ChatGPT consulting services from others?', a: 'We focus on business outcomes, not just technology. Our consulting goes beyond technical implementation to include strategic use-case identification, ROI analysis, and building a scalable AI roadmap. Our full-lifecycle support, from ideation to post-launch optimization, ensures your investment delivers continuous value.' },
        { q: 'Can I hire ChatGPT integration developers for ongoing support and maintenance?', a: 'Yes, we offer flexible engagement models, including staff augmentation and dedicated teams for ongoing support. This ensures your ChatGPT solution remains optimized, up-to-date with the latest AI advancements, and continuously aligned with your evolving business needs.' },
        { q: 'What factors influence the cost of ChatGPT development services?', a: 'The main factors are the complexity of the integration, the level of customization required (e.g., fine-tuning vs. standard API use), the number of systems to integrate with, and the chosen engagement model. We provide transparent, detailed quotes based on a thorough analysis of your project scope.' },
        { q: 'Are there any hidden costs associated with ChatGPT integration services in India?', a: 'No, we operate with full transparency. All costs, including development, third-party API usage (like OpenAI\'s fees), and maintenance, are clearly outlined in our proposals. Our goal is to provide cost-effective solutions without any hidden fees, ensuring a predictable and positive ROI for your business.' }
    ];

    const toggle = (index) => setOpen(open === index ? null : index);

    return (
        <div className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">FAQs</h2>
                <div className="max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-700 py-4">
                            <button onClick={() => toggle(index)} className="w-full flex justify-between items-center text-left text-lg font-semibold">
                                <span>{`0${index + 1}`.slice(-2)}<span className="ml-4">{faq.q}</span></span>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Our ChatGPT Integration Team</h2>
                <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-400">Unlock AI-powered experiences by integrating ChatGPT into your digital ecosystem—driving smarter interactions and real-time responses that deliver results.</p>
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
const ChatGPTIntegrationPage = () => {
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
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Top-Rated ChatGPT Integration Services</h1>
                <p className="text-lg md:text-xl mb-6">
                    Boost your business growth with ChatGPT integration services. We deliver bespoke AI solutions that connect domain-specific language intelligence, automation, and enterprise-grade execution. More than integration, we make AI your strategic driver for performance, ROI, and scalable innovation.
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
                <img src={StaffAugmentationImage} alt="ChatGPT Integration" className="w-full max-w-md rounded-lg" />
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

        {/* ChatGPT Integration Services We Offer */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              ChatGPT Integration Services We Offer
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 max-w-3xl mx-auto mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              With our expert ChatGPT integration services, your organization gains a competitive edge through intelligent automation, personalized communication, and streamlined operations—all backed by secure, enterprise-ready AI implementation.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {chatGptServices.map((service, index) => (
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

        <BenefitsSection />
        
        <WhyChooseUsSection />

        <IndustriesServedSection />
        
        <GenAiTechStackSection />
        
        <TestimonialsSection />

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
              Cut Costs, Save Time, and Scale with GenAI Integration
            </motion.h2>
            <motion.p
              className="text-lg mb-8 max-w-3xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Accelerate your roadmap with ChatGPT solutions that automate workflows, speed deployments, and deliver seamless AI across your business.
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
                Leading organizations rely on Alpixn Technologies for ChatGPT API integration, citing our reliability, technical depth, and ability to deliver scalable solutions that drive operational efficiency.
            </p>
            <TrustedBy backgroundColor="bg-black" />
        </section>

        <EngagementModelsSection />
        
        <FaqSection />
        
        <FinalCtaSection />

      </main>
      <Footer />
    </div>
  );
};

export default ChatGPTIntegrationPage;