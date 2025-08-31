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
    { title: 'Custom Gen AI App Development', description: 'We develop custom generative AI applications that drive your business goals, optimize operations, boost productivity, and enable scalable growth through seamless integration and performance-focused development.', icon: 'custom-gen-ai-app-development' },
    { title: 'Gen AI Consulting & Strategy', description: 'Our consultants work with you to define your generative AI strategy, identifying integration opportunities, minimizing risks, and aligning solutions with your business goals to support effective adoption and measurable results.', icon: 'gen-ai-consulting-strategy' },
    { title: 'OpenAI API Integration Services', description: 'We integrate OpenAI APIs into your existing systems to automate processes, gain insights, and provide intelligent user interactions based on advanced natural language processing capabilities.', icon: 'openai-api-integration-services' },
    { title: 'Voice & Chat AI Integration', description: 'We deploy generative AI-powered voice assistants, automating interactions, improving engagement, lowering operational costs, and streamlining communication across customer support and internal functions.', icon: 'voice-chat-ai-integration' },
    { title: 'Gen AI Model Tuning & Optimization', description: 'We fine-tune generative AI models with your business-specific data to maximize accuracy and relevance and ensure the system functions properly, considering your industry and operational needs.', icon: 'gen-ai-model-tuning-optimization' },
    { title: 'Ongoing Gen AI Support', description: 'We offer continuous support and maintenance services for your generative AI systems to ensure stability, security, optimal performance, and alignment with evolving business needs and compliance requirements.', icon: 'ongoing-gen-ai-support' }
];

const tangibleResults = [
    { title: 'Industry-Specific AI Solutions', description: 'We provide domain-trained generative AI solutions tailored to your industry. As the premier company integrating generative AI, we place generative AI systems that enhance your workflow efficiency in accuracy, relevance, and automation.', icon: 'industry-specific-ai-solutions' },
    { title: 'Secure & Compliant Standards', description: 'We offer generative AI integration services with built-in security and compliance to ensure secure deployment and data integrity. We help enterprises meet regulatory standards with confidence using trusted artificial intelligence integration services.', icon: 'secure-compliant-standards' },
    { title: 'End-to-End AI Integration Expertise', description: 'As a full-service generative AI integration services company, we manage every aspect of planning to execution. Our AI integration services guarantee reliable performance and scalable outcomes with no disturbance to your systems.', icon: 'end-to-end-ai-integration-expertise' },
    { title: '24/7 Support & Maintenance', description: 'We provide continuous support for your generative AI system, keeping it secure and efficient. Being a reliable generative AI integration service provider, we guarantee round-the-clock stability and peace of mind for your business.', icon: '24-7-support-maintenance' }
];

const whyChooseUsGenAi = [
    { title: 'No-Downtime Deployment', description: 'At Alpixn Technologies, we deploy generative AI systems to your current infrastructure without disrupting business operations. Our AI integration services ensure operational continuity while delivering fast, stable, and reliable performance enhancements.' },
    { title: 'Business-First Approach', description: 'We prioritize business outcomes over buzzwords. Our generative AI integration services are strategically aligned with your objectives, leveraging cutting-edge technologies to address genuine challenges, enhance ROI, and fuel sustainable growth.' },
    { title: 'Flexible Tech Integration', description: 'We offer flexibility across platforms—OpenAI, Azure OpenAI, AWS Bedrock, and more. As a vendor-neutral generative AI integration company, we recommend tailored solutions that serve your business best without locking you in.' },
    { title: 'Dedicated AI Delivery Teams', description: 'You work with a specialized team of AI engineers, project managers, and domain experts. Our delivery units ensure focused execution and deep technical leadership across every generative AI system we implement.' },
    { title: 'Fast Prototyping & Pilots', description: 'We accelerate innovation through quick-turn AI prototypes and low-risk pilot programs. This approach lets you test value early, reduce uncertainty, and move confidently from proof of concept to enterprise-scale gen AI integration.' },
    { title: 'Clear & Collaborative Delivery', description: 'As a trusted generative AI integration services company in India, we believe in full transparency, open communication, and aligned execution—so you’re always informed, involved, and in control of your project outcomes.' }
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
                        Case Studies: AI-Powered Transformation for the Real World
                    </h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Artificial intelligence is becoming a strategic engine for innovation and expansion rather than only a term. From improving customer experiences to simplifying processes, we enable businesses to unlock AI’s actual value by aligning technology with tangible outcomes.
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
            How Our Gen AI Integration Services Deliver Real Results
          </h2>
          <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            With Alpixn Technologies as your generative AI integration services company, you gain access to enterprise-grade implementations that scale with your business. Our solutions are designed for dependability, security, and consistent performance, supported by technical knowledge you can rely on.
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
            Why Choose Us for Generative AI Integration Services
        </h2>
        <p className={`max-w-3xl mx-auto text-lg text-gray-400 mb-16 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            From strategy to support, our end-to-end generative AI IT services help simplify implementation, reduce risk, and ensure your systems are innovative, efficient, and built for scale.
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
                        We offer generative AI consulting services to enterprises, startups, and mid-sized companies across industries, delivering intelligent, scalable solutions tailored to their data, operations, and business goals.
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
                        From the launch of AI products to intelligent automation, clients trust us to deliver precision, scale, and lasting investment value.
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Our Generative AI Tech Stack</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Our tech stack combines advanced AI frameworks, cloud platforms, and MLOps tools to develop enterprise-grade, secure, scalable, and production-ready generative AI systems.
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
            description: 'We provide a qualified offshore team dedicated exclusively to your project, allowing you to scale fast while maintaining complete control, visibility, and strategic alignment all across your generative AI development path.',
            points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency'],
            icon: 'offshore-dedicated-team'
        },
        {
            title: 'Staff Augmentation',
            description: 'Our staff augmentation model provides instant access to certified generative AI professionals that easily interact with your own team, therefore enabling you to increase capacity, lower recruiting cycles, and speed delivery times.',
            points: ['Tailored Expertise', 'Seamless Integration', 'Cost-effective Solution', 'Transparent Communication'],
            icon: 'staff-augmentation'
        },
        {
            title: 'Project-Based',
            description: 'We provide a milestone-based delivery approach with explicit timetables, set budgets, and complete ownership for defined-scope AI projects, ensuring on-time delivery, predictable costs, and minimal risk to your business.',
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
                        Alpixn Technologies, a trusted generative AI integration services company, provides flexible engagement models designed to cater to your project objective, deadlines, and team setup — providing agility, transparency, and performance at all levels.
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
        { q: 'What is Generative AI integration & why is it important?', a: 'Integrating generative AI means embedding advanced generative AI models into your existing business systems to automate tasks, generate content, and enhance decision-making. It is critical for enterprises looking for scalable transformation with trusted AI integration services and intelligent automation.' },
        { q: 'How can my business benefit from Generative AI integration?', a: 'Your business can benefit by automating repetitive tasks, enhancing creativity in marketing and product design, delivering hyper-personalized customer experiences, and unlocking insights from unstructured data. This leads to increased efficiency, reduced operational costs, and a significant competitive advantage.' },
        { q: 'What kind of ROI can businesses expect from implementing AI integration services?', a: 'ROI is realized through multiple channels: cost savings from automating workflows, increased revenue from personalized marketing and improved customer engagement, and higher productivity as employees can focus on more strategic tasks. While exact figures vary, the impact is typically substantial and measurable.' },
        { q: 'How long does the integration process take?', a: 'The timeline depends on the complexity of your existing systems and the scope of the project. A simple API integration might take a few weeks, while a custom application with fine-tuned models could take a few months. We often start with a pilot project to deliver value quickly and validate the approach.' },
        { q: 'How can I integrate Generative AI into existing business systems?', a: 'The most common method is through APIs, which allow your current applications (like CRMs, ERPs, or internal tools) to communicate with the AI model. This approach minimizes disruption and allows for a phased, seamless integration without needing to overhaul your entire infrastructure.' },
        { q: 'How secure is your service?', a: 'Security is our top priority. We employ a multi-layered security strategy that includes data encryption (both in transit and at rest), strict access controls, and secure, isolated cloud environments. Our practices are designed to protect your data and systems at every stage of the integration.' },
        { q: 'What measures are taken for data privacy during Generative AI integration?', a: 'We adhere to strict data privacy protocols, ensuring compliance with regulations like GDPR and CCPA. Client data used for fine-tuning is isolated and never used for other purposes. We also implement data anonymization and other privacy-preserving techniques wherever possible.' },
        { q: 'Do you offer customer support?', a: 'Yes, we offer comprehensive customer support. Our commitment doesn’t end at deployment; we are your long-term partners in success.' },
        { q: 'Do Generative AI integration services include post-implementation support?', a: 'Absolutely. Our services include ongoing support and maintenance packages to ensure your AI systems remain stable, secure, and performant. This includes monitoring, updates, and optimization as your business needs evolve.' },
        { q: 'Is continuous technical support available?', a: 'Yes, we offer continuous technical support tailored to your needs. This can range from standard business-hour support to 24/7 monitoring and assistance for mission-critical applications, ensuring you have peace of mind.' },
        { q: 'Do I need any technical knowledge to use your service?', a: 'No. Our goal is to build intuitive solutions that integrate seamlessly into your existing workflows. Your team can leverage the power of Generative AI without needing to be AI experts. We handle the underlying complexity so you can focus on the business benefits.' }
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Speak to Our Generative AI Consultants</h2>
                <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-400">Let our consultants help you harness generative AI for scalable transformation, strategic advantage, and operational excellence.</p>
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
const AIIntegration = () => {
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
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">High-End Generative AI Integration Services</h1>
                <p className="text-lg md:text-xl mb-6">
                    Your next big leap begins with Generative AI Integration Services. Alpixn Technologies empowers businesses to leverage Gen AI’s full potential with precision integration, scalable architecture, and purpose-built models that drive revenue, reduce friction, and future-proof your tech stack.
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
              Generative AI Integration Services We Offer
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 max-w-3xl mx-auto mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our Generative AI integration services integrate the AI capability within your existing architecture, discreetly, efficiently, and powerfully. No tech overhauls. Just seamless deployments that deliver intelligence exactly where and when you need it.
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

        <TechStackTabs />

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
              Alpixn Technologies helps you adopt and implement advanced artificial intelligence integration services to accelerate implementation, reduce risk, and realize value.
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
                Powered by a portfolio of trusted partnerships with industry leaders who rely on us for mission-critical AI integration.
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

export default AIIntegration;