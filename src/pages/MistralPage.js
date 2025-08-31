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
const mistralServices = [
    { title: 'Custom Mistral Model Development', description: 'We build bespoke AI solutions using Mistral models tailored to your business needs. Through custom Mistral AI development, we help businesses drive innovation, boost precision, and solve real-world challenges with intelligent automation.', icon: 'custom-mistral-model-development' },
    { title: 'Mistral API Integration', description: 'We seamlessly integrate Mistral models into your internal systems via secure and scalable APIs, streamlining processes, boosting operational efficiency, and enabling real-time business insights across departments.', icon: 'mistral-api-integration' },
    { title: 'Mistral AI Deployment and Scaling', description: 'Our Mistral AI integration and customization services ensure hassle-free deployment and scaling. We optimize Mistral models for production environments, enabling businesses to turn ideas into scalable Mistral AI solutions more quickly and efficiently.', icon: 'mistral-ai-deployment-and-scaling' },
    { title: 'Mistral Model Performance Optimization', description: 'Enhance model efficiency and minimize errors through our expert Mistral AI fine-tuning services. We carefully optimize Mistral models for higher accuracy, lower costs, and better outcomes for businesses needing smarter, scalable Mistral AI integration services.', icon: 'mistral-model-performance-optimization' },
    { title: 'Mistral Multimodal Application Development', description: 'Unlock more innovative customer experiences with multimodal Mistral AI solutions. We build bespoke Mistral applications that combine text, images, and workflows—ideal for businesses seeking Mistral AI for enterprise workflow automation across industries.', icon: 'mistral-multimodal-application-development' },
    { title: 'Mistral AI Consulting & Integration Strategy', description: 'Navigate the AI journey confidently with Alpixn Technologies’ Mistral AI consulting services. We provide Mistral AI implementation consulting and strategy support to align your vision with tailored, real-world Mistral AI integration with existing systems.', icon: 'mistral-ai-consulting-integration-strategy' }
];

const mistralBenefits = [
    { title: 'Seamless Mistral Integration', description: 'Our Mistral AI integration and customization services ensure the seamless integration of Mistral models into current systems, reducing downtime and accelerating time to market for businesses looking to scale their operations intelligently.', icon: 'seamless-mistral-integration' },
    { title: 'Smarter Enterprise Automation', description: 'We drive intelligent enterprise automation with Mistral AI for enterprise workflow automation, assisting businesses in eliminating manual work, accelerating productivity, and increasing the pace of growth with smart, fully optimized AI-driven processes.', icon: 'smarter-enterprise-automation' },
    { title: 'High-Accuracy Models', description: 'With custom Mistral AI model development, we fine-tune Mistral models for higher precision, delivering smarter predictions, fewer errors, and reliable insights businesses need to stay competitive and innovate faster.', icon: 'high-accuracy-models' },
    { title: 'Faster Time-to-Value', description: 'Our Mistral AI integration services accelerate the time to deployment, enabling you to transition from concept to scalable Mistral AI solutions faster, save costs, mitigate potential risks, and realize measurable value in less time.', icon: 'faster-time-to-value' }
];

const whyChooseUsMistral = [
    { title: 'Business-Centric AI Strategies', description: 'We align Mistral AI integration and customization services with your business goals. We provide real-world solutions that enable faster ROI, smarter automation, and substantial growth with AI-powered solutions using Mistral models.', icon: 'business-centric-ai-strategies' },
    { title: 'Expertise With Mistral Models', description: 'Our team specializes in Mistral models, delivering robust Mistral AI solutions across sectors. From chatbot integrations to enterprise automation, we swiftly and consistently turn complex AI capabilities into quantifiable business benefits.', icon: 'expertise-with-mistral-models' },
    { title: 'Transparent Collaboration', description: 'We maintain clear, transparent communication throughout your Mistral AI integration with existing systems, providing full project visibility, faster decision-making, and assurance on deadlines, delivery, and long-term outcomes.', icon: 'transparent-collaboration' },
    { title: 'Proven Fine-Tuning Skills', description: 'Leveraging proven expertise in Mistral AI fine-tuning services, we optimize models for maximum precision, efficiency, and business relevance, ensuring your custom Mistral AI solutions outperform off-the-shelf alternatives every time.', icon: 'proven-fine-tuning-skills' },
    { title: 'Custom AI Development Focus', description: 'We prioritize custom Mistral AI model development tailored to your data, workflows, and business needs, delivering smarter, highly targeted AI systems that provide improved decisions, faster results, and sustainable growth.', icon: 'custom-ai-development-focus' },
    { title: 'Scalable Integration Solutions', description: 'Our Mistral AI API integration solutions are designed for effortless scalability, helping businesses seamlessly expand AI capabilities as they grow—without sacrificing uptime, risking system failure, or incurring costly rework later.', icon: 'scalable-integration-solutions' }
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
                        Success Stories: Driving Impact with Custom AI Solutions
                    </h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Through real-world deployments, our AI solutions have helped businesses cut inefficiencies, improve accuracy, and scale faster — showing that the right implementation delivers results, not just hype.
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
            Benefits of Our Mistral AI Integration Services
          </h2>
          <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            Our Mistral AI integration and customization services deliver more intelligent automation, seamless scalability, and a quicker time to value, built on fine-tuned Mistral models tailored to fit your specific workflows and enterprise data ecosystem.
          </p>
          <div className="mt-8">
             <button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300">Not Sure Where to Begin with AI? Get Expert Guidance</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {mistralBenefits.map((item, index) => (
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
            Why Choose Us for Mistral AI Integration Services
        </h2>
        <p className={`max-w-3xl mx-auto text-lg text-gray-400 mb-16 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            Alpixn Technologies stands out with full-spectrum Mistral AI consulting services—delivering custom AI solutions leveraging Mistral models, fine-tuned for performance, integrated with ease, and built alongside your objectives.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsMistral.map((reason, index) => (
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
                        From e-commerce to enterprise Saas, our Mistral AI integration and customization services help businesses drive intelligent automation, implement AI chatbots, and refine models that scale with industry-specific workflows.
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
                        Alpixn Technologies’ Mistral AI integration and customization services are praised for quick deployment, thoughtful execution, and AI solutions that scale, enabling teams to stay agile while minimizing overhead and manual work.
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
                        From Mistral AI chatbot integration services to advanced customization, our stack features model training pipelines, NLP toolkits, and secure integration layers—designed for fast deployment and future-proof AI solutions.
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
            description: 'Our offshore Mistral AI integration team works exclusively on your project, delivering custom AI model development, continuous support, and deep technical alignment for long-term scalability, automation, and enterprise-grade performance.',
            points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency'],
            icon: 'offshore-dedicated-team'
        },
        {
            title: 'Staff Augmentation',
            description: 'Quickly extend your team with certified AI engineers skilled in Mistral models, chatbot integration, and API solutions—reducing ramp-up time while maintaining consistent delivery, system compatibility, and on-demand scalability.',
            points: ['Tailored Expertise', 'Seamless Integration', 'Cost-effective Solution', 'Transparent Communication'],
            icon: 'staff-augmentation'
        },
        {
            title: 'Project-Based',
            description: 'For defined AI initiatives, our fixed-cost model offers complete Mistral AI integration—from roadmap planning to deployment—delivered through milestones, predictable timelines, and precision-focused execution that minimizes risk and maximizes results.',
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
                        Alpixn Technologies offers flexible engagement models tailored to your business needs. Whether scaling teams or launching fixed-scope AI projects, we ensure strategic delivery, faster execution, and seamless Mistral AI integration services.
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
        { q: 'What are Mistral AI integration and customization services?', a: 'Mistral AI integration and customization services help businesses integrate Mistral models into their existing applications. At Alpixn Technologies, we customize Mistral AI solutions for enterprise-grade performance, providing custom Mistral AI model development and seamless AI integration to boost operational efficiency and innovation.' },
        { q: 'How can Mistral AI integration services benefit my startup or enterprise?', a: 'Startups can benefit from rapid prototyping and cost-effective scaling, while enterprises can leverage Mistral AI for robust workflow automation, enhanced data analysis, and creating sophisticated internal tools. For both, it translates to increased efficiency, a better competitive edge, and smarter, data-driven operations.' },
        { q: 'What are the advantages of custom AI solutions using Mistral models?', a: 'Custom solutions offer superior accuracy because they are trained on your specific data. They provide better performance, as they are optimized for your unique workflows, and enhanced security, as your proprietary data remains in your control. This leads to more relevant outputs and a higher return on investment compared to generic models.' },
        { q: 'How can Mistral AI be used for enterprise workflow automation?', a: 'Mistral AI can automate tasks like summarizing long reports, routing customer support tickets, extracting key information from documents (like invoices or contracts), generating code, and powering internal knowledge base chatbots. This frees up employees from repetitive tasks to focus on more strategic work.' },
        { q: 'Do you offer Mistral AI fine-tuning services for domain-specific models?', a: 'Yes, we specialize in fine-tuning Mistral models. By training the base models on your industry-specific or company-specific data, we significantly improve their understanding of your unique context, terminology, and nuances. This results in highly accurate and relevant outputs for specialized tasks.' },
        { q: 'Can Mistral AI integration services be tailored to my specific business needs?', a: 'Absolutely. Every service we offer is tailored. Our process starts with a deep dive into your business goals, workflows, and data. We then design and implement a custom integration strategy that ensures the Mistral AI solution solves your specific problems and delivers measurable value.' },
        { q: 'How do I get started with Mistral AI integration services for my business?', a: 'The first step is to book a free consultation with our Mistral AI experts. We will discuss your vision, identify high-impact use cases, and outline a strategic roadmap. From there, we can move to a Proof of Concept (PoC) to validate the approach before full-scale development.' },
        { q: 'What is the typical timeline for a Mistral AI integration project?', a: 'A simple Mistral API integration project can be completed in as little as 2 to 4 weeks. More complex projects, such as developing a custom fine-tuned model and integrating it into multiple systems, can range from 2 to 6 months, depending on the scope and complexity.' },
        { q: 'How much do Mistral AI integration and customization services cost?', a: 'The cost varies based on project complexity, the extent of customization (e.g., fine-tuning), the volume of data, and the selected engagement model. We provide transparent, upfront pricing with a detailed breakdown of costs after an initial consultation to understand your requirements.' },
        { q: 'Do you offer Mistral AI integration services in India and internationally?', a: 'Yes, we serve a global clientele. With our main delivery center in India, we offer a competitive advantage in terms of cost and access to a vast talent pool. Our remote collaboration model ensures seamless communication and project delivery to clients anywhere in the world.' }
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Speak to Our Mistral AI Integration Experts</h2>
                <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-400">Tap into Mistral’s lightweight LLMs through seamless integration—designed to accelerate decision-making, automation, and AI-driven business outcomes.</p>
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
const MistralPage = () => {
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
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Enterprise-Grade Mistral AI Integration Services</h1>
                <p className="text-lg md:text-xl mb-6">
                    Experience the power of precision-built AI. At Alpixn Technologies, we provide premium Mistral AI integration services, customizing Mistral models to boost enterprise automation, improve decision-making, and embed intelligent insights directly into your existing systems with zero disruption.
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
                <img src={StaffAugmentationImage} alt="Mistral AI Integration" className="w-full max-w-md rounded-lg" />
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

        {/* Mistral AI Integration Services We Offer */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              Mistral AI Integration Services We Offer
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 max-w-3xl mx-auto mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Alpixn Technologies delivers tailored Mistral AI integration services, including custom models, intelligent automation, and seamless API integration, that speed up results, reduce friction, and bring enterprise-grade precision to every layer of your business.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mistralServices.map((service, index) => (
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
              Turn Data Into Foresight With Predictive Analytics Solutions
            </motion.h2>
            <motion.p
              className="text-lg mb-8 max-w-3xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Partner with experts to build predictive models that uncover patterns, reduce risks, enhance operational visibility and enable data-driven decisions.
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
                Across industries, clients choose our bespoke Mistral AI model development and integration services for deep technical expertise, hands-on consulting, and delivery that never compromises quality or speed.
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

export default MistralPage;