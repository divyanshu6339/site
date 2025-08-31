import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import GenAIImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// Data arrays - moved to top of file
const caseStudies = [
  { 
    id: 'aichatbot', 
    logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/FMIntegrated-logo.svg', 
    image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/FM-Integrated-768x768.webp', 
    title: 'AI Chatbot Development for Enterprise IT Organization with Next-Gen SaaS Platform', 
    description: 'Alpixn Technologies partnered with a global enterprise to develop an AI-powered SaaS platform, integrating AI models, automation, and real-time analytics to optimize workflow automation, customer engagement, and data-driven decision-making.', 
    points: ['Smart AI Training & Adaptability for enhanced learning capabilities.', 'Automated & Scalable Management for streamlined operations.', 'Real-Time Insights & Optimization for data-driven decisions.', 'Seamless Deployment & Integration across enterprise systems.'], 
    tags: ['US', 'PYTHON', 'LANGCHAIN', 'AI CHATBOT'] 
  },
  { 
    id: 'genaifintech', 
    logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/patra-corp.svg', 
    image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/PatraCorp-768x768.webp', 
    title: 'Custom Gen AI Application for Financial Risk Assessment and Automated Underwriting', 
    description: 'Developed a comprehensive generative AI solution for financial services, automating risk assessment and underwriting processes with advanced ML models.', 
    points: ['Fine-tuned LLM for financial domain-specific tasks.', 'Multi-modal data processing for comprehensive analysis.', 'Real-time risk scoring with explainable AI outputs.', 'Automated compliance and regulatory reporting features.'], 
    tags: ['US', 'PYTORCH', 'TENSORFLOW', 'FINTECH'] 
  },
  { 
    id: 'aiworkspace', 
    logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/patronum.svg', 
    image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/Patronum-768x768.webp', 
    title: 'AI-Powered Workspace Management Solution with Intelligent Automation', 
    description: 'Built an intelligent workspace management platform leveraging generative AI for automated task allocation, resource optimization, and predictive analytics.', 
    points: ['Advanced NLP for intelligent task understanding and routing.', 'Predictive analytics for resource planning and optimization.', 'Multi-modal AI for processing diverse data formats.', 'Automated workflow generation and optimization.'], 
    tags: ['US', 'FASTAPI', 'LANGCHAIN', 'WORKSPACE AI'] 
  },
  { 
    id: 'healthcareai', 
    logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/heffernan.svg', 
    image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/Heffernan-768x768.webp', 
    title: 'Healthcare AI Assistant for Patient Data Analysis and Clinical Decision Support', 
    description: 'Developed a HIPAA-compliant AI assistant for healthcare providers, enabling intelligent patient data analysis and clinical decision support.', 
    points: ['HIPAA-compliant AI architecture with advanced security measures.', 'Medical NLP for clinical note analysis and insights.', 'Multi-modal medical image processing capabilities.', 'Real-time clinical decision support and recommendations.'], 
    tags: ['US', 'PYTORCH', 'HEALTHCARE AI'] 
  },
  { 
    id: 'retailai', 
    logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/149.svg', 
    image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/Builder-Digital-768x768.webp', 
    title: 'AI-Driven E-commerce Personalization Engine with Visual Recognition', 
    description: 'Created an advanced AI personalization engine for e-commerce platforms, combining computer vision and NLP for enhanced customer experiences.', 
    points: ['Computer vision for product image analysis and categorization.', 'Personalized recommendation engine with real-time learning.', 'Natural language processing for customer query understanding.', 'Advanced analytics dashboard for business insights.'], 
    tags: ['US', 'TENSORFLOW', 'COMPUTER VISION', 'E-COMMERCE'] 
  }
];

const aiServices = [
  { num: '01', title: 'Gen AI Custom App Development', description: 'We build custom generative AI applications that solve real-world business challenges—automating workflows, boosting engagement, and driving innovation—offering business-specific, scalable solutions aligned with your growth goals.' },
  { num: '02', title: 'Gen AI Model Fine-Tuning', description: 'Our domain-specific large language model fine-tuning solutions reduce hallucinations and improve accuracy while generating contextually intelligent, business-ready results via expert-led generative AI development services tailored to your data and goals.' },
  { num: '03', title: 'Gen AI Multimodal Solutions', description: 'AI developers build next-gen multimodal generative AI services and solutions to help organizations gain advanced automation, richer insights, and more seamless user experiences while handling data across different formats like text, image, and audio.' },
  { num: '04', title: 'Generative AI Model Integration', description: 'Alpixn Technologies seamless generative AI integration services help you integrate AI into your existing systems—breaking down silos, improving efficiency, and providing enterprise-grade performance without disrupting workflows or your digital ecosystem.' },
  { num: '05', title: 'Gen AI Infrastructure & Deployment', description: 'We build a robust, scalable AI infrastructure setup and deployment, ensuring your generative AI applications are secure, high-performing, and production-ready, using modern cloud, MLOps, and enterprise IT best practices.' },
  { num: '06', title: 'Gen AI Support & Optimization', description: 'We provide continuous support to keep your GenAI systems optimized, compliant, and effective—addressing drift, amplifying output, and maximizing the long-term value of your investment with leading AI development services.' }
];

const whyChooseUsFeatures = [
  { title: 'Adaptive, Future-Proof Architecture', description: 'Our generative AI solutions are designed to adapt so that when your business pivots, your systems don\'t break. As new data sources, tools, or goals emerge, your AI stays agile, scalable, and ready. No rework. No tech debt. Just enduring value and a competitive advantage that scales with you.' },
  { title: 'Cross-functional Collaboration Support', description: 'We engineer more than software—we engineer alignment. Our delivery model connects siloed business, product, and engineering teams through a single onboarding execution framework. The result? Quicker rollouts, easier buy-in, and AI systems that work where it matters.' },
  { title: 'Minimized AI Implementation Risk', description: 'Launching AI should move your business forward—not slow it down. That\'s why we bring a tried-and-true, step-by-step development process that minimizes missteps, provides clarity at every stage, and delivers reliable outcomes with enterprise-grade execution.' },
  { title: 'Built-In Security & Compliance', description: 'Security is not an afterthought for us. Every solution is built with enterprise controls, audibility, and compliance as table stakes. Whether you\'re in healthcare, finance, or SaaS—your generative AI stays safe, responsible, and deployment-ready on day one.' },
  { title: 'Proven Gen AI Expertise', description: 'We provide enterprise-grade generative AI development services with proven success across various industries. We help enterprises build robust, scalable AI systems that align with core business objectives, future growth, and operational efficiency.' },
  { title: 'Accelerated Value Delivery', description: 'Our agile, lean execution model enables rapid delivery without compromising quality. We help companies validate concepts, shorten development cycles, and launch impactful generative AI applications faster—with measurable results and low complexity.' }
];

// Project Success Section Component
const ProjectSuccessSection = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState(caseStudies[0].id);
  const activeStudy = caseStudies.find(study => study.id === activeTab);

  return (
    <div ref={ref} className="py-24 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            Case Studies: From AI Strategy to Scalable Solutions
          </h2>
          <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            Models aren't the only requirement for making successful AI systems — it's also about strategy, infrastructure, and seamless execution. Our end-to-end AI approach ensures that every solution is prepared for scale, complexity, and real-world usage.
          </p>
        </div>
        <div className={`bg-gray-900/50 ring-1 ring-white/10 rounded-2xl p-4 md:p-6 transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-center items-center flex-wrap gap-4 border-b border-white/10 pb-6">
            {caseStudies.map(study => (
              <button key={study.id} onClick={() => setActiveTab(study.id)} className={`relative transition-transform duration-300 ease-in-out ${activeTab === study.id ? 'scale-110' : 'scale-100 hover:scale-105'}`}>
                <div className={`bg-white rounded-lg p-4 shadow-md transition-all duration-300 ${activeTab === study.id ? 'shadow-blue-500/40 shadow-lg' : ''}`}>
                  <img src={study.logo} alt={study.id} className="h-10 object-contain w-28" />
                </div>
              </button>
            ))}
          </div>
          <div className="mt-8">
            {activeStudy && (
              <div key={activeStudy.id} className="flex flex-col md:flex-row gap-8 md:gap-12 items-center animate-fade-in">
                <div className="w-full md:w-2/5">
                  <img src={activeStudy.image} alt={activeStudy.title} className="rounded-xl shadow-2xl shadow-blue-500/10" />
                </div>
                <div className="w-full md:w-3/5">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{activeStudy.title}</h3>
                  <p className="text-gray-300 mb-6">{activeStudy.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
                    {activeStudy.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap items-center gap-4">
                    <img src="https://www.jellyfishtechnologies.com/wp-content/uploads/2023/11/usa-flag.png" alt="USA" className="h-6 rounded" />
                    {activeStudy.tags.slice(1).map(tag => (
                      <span key={tag} className="text-xs font-semibold text-gray-400 bg-gray-800 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                    <button className="ml-auto text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center gap-2">
                      Read Story
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`.animate-fade-in { animation: fadeIn 0.5s ease-in-out; } @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
};

// AI Services Section Component
const AIServicesSection = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div ref={ref} className="py-24 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            Generative AI Development Services We Offer
          </h2>
          <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            We develop purpose-built, high-impact, generative AI applications and solutions to solve business challenges, accelerate speed-to-market, and generate significant new revenue streams powered by intelligent automation and adaptive learning.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <div key={service.num} className={`relative p-8 bg-gray-900/50 ring-1 ring-white/10 rounded-2xl transition-all duration-500 ease-out hover:ring-blue-500/50 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="absolute top-8 left-8 text-4xl font-bold text-gray-700">{service.num}</div>
              <div className="relative pt-12">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Why Choose Us Section Component
const WhyChooseUsSection = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div ref={ref} className="py-24 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
          Why Choose Us for Generative AI Development Services
        </h2>
        <p className={`max-w-3xl mx-auto text-lg text-gray-400 mb-16 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
          At Alpixn Technologies, we are a strategic AI partner, not just a service provider. Backed by deep industry knowledge and end-to-end capabilities, we empower businesses to mitigate risk, drive innovation, and realize sustainable value with generative AI.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsFeatures.map((reason, index) => (
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

const GuideSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const [activeTab, setActiveTab] = useState('what');

    const guideContent = {
        what: {
            title: 'What Is Generative AI Development?',
            content: [
                { text: 'Generative AI development involves creating intelligent systems that can generate human-like content, insights, and solutions. It encompasses the design, training, and deployment of AI models capable of producing text, images, code, and other creative outputs that solve real-world business challenges.' },
                { title: 'Custom AI Applications:', text: 'Tailored generative AI solutions designed specifically for your business needs, industry requirements, and operational workflows.' },
                { title: 'Enterprise AI Integration:', text: 'Seamless integration of generative AI capabilities into existing systems, ensuring minimal disruption while maximizing efficiency and productivity gains.' },
            ]
        },
        process: {
            title: 'Our Gen AI Development Process at Alpixn Technologies',
            content: [
                { text: 'We follow a comprehensive 6-step approach to deliver enterprise-grade generative AI solutions that drive measurable business impact and sustainable growth.' },
                { title: 'Discovery & Strategy:', text: 'We begin by understanding your business objectives, identifying AI use cases, and developing a comprehensive AI strategy aligned with your goals and technical infrastructure.' },
                { title: 'Data Assessment & Preparation:', text: 'Our experts analyze your data landscape, ensuring data quality, privacy compliance, and optimal preparation for AI model training and fine-tuning.' },
                { title: 'Model Selection & Fine-tuning:', text: 'We select the most appropriate AI models for your use case and fine-tune them using your domain-specific data to ensure accurate, contextual, and business-relevant outputs.' },
                { title: 'Development & Integration:', text: 'Our development team builds custom AI applications and integrates them seamlessly with your existing systems, ensuring optimal performance and user experience.' },
                { title: 'Testing & Optimization:', text: 'Rigorous testing phases include performance evaluation, security assessment, and continuous optimization to ensure reliability, scalability, and compliance with industry standards.' },
                { title: 'Deployment & Support:', text: 'We provide end-to-end deployment services and ongoing support, including monitoring, maintenance, and performance optimization to maximize your AI investment ROI.' },
            ]
        },
        tech: {
            title: 'Our Generative AI Tech Stack',
            content: [
                { title: 'Large Language Models', text: 'We work with cutting-edge LLMs including OpenAI GPT models, Claude, and custom fine-tuned models for domain-specific applications and enhanced performance.' },
                { title: 'AI Frameworks & Libraries', text: 'Our expertise spans TensorFlow, PyTorch, LangChain, LlamaIndex, and Haystack for building robust, scalable AI applications with advanced capabilities.' },
                { title: 'Vector Databases & Search', text: 'We utilize Pinecone, Weaviate, and Chroma for efficient vector storage and retrieval, enabling powerful semantic search and knowledge management systems.' },
                { title: 'MLOps & Deployment', text: 'Our MLOps pipeline includes MLflow, Docker, Kubernetes, and cloud-native solutions for seamless model deployment, monitoring, and lifecycle management.' },
                { title: 'Development Tools', text: 'We leverage FastAPI, Streamlit, Gradio, and Flask for rapid prototyping, API development, and user interface creation for AI applications.' },
                { title: 'Cloud & Infrastructure', text: 'Multi-cloud expertise across AWS, Azure, and Google Cloud Platform ensures scalable, secure, and cost-effective AI infrastructure deployment.' },
            ]
        },
        why: {
            title: 'Why Generative AI for Your Business?',
            content: [
                { title: 'Operational Efficiency:', text: 'Automate complex tasks, reduce manual work, and streamline workflows while maintaining high quality and consistency across operations.' },
                { title: 'Innovation Acceleration:', text: 'Rapidly prototype new ideas, generate creative solutions, and explore new business models with AI-powered insights and automation.' },
                { title: 'Competitive Advantage:', text: 'Stay ahead of the competition by leveraging cutting-edge AI technology to deliver superior products, services, and customer experiences.' },
                { title: 'Cost Optimization:', text: 'Reduce operational costs through intelligent automation while improving accuracy and reducing human error in critical business processes.' },
                { title: 'Scalable Solutions:', text: 'Build AI systems that grow with your business, handling increased workloads and complexity without proportional increases in resources.' },
                { title: 'Data-Driven Decisions:', text: 'Transform raw data into actionable insights, enabling smarter decision-making and strategic planning across all business functions.' },
            ]
        },
        when: {
            title: 'When Your Business Needs Generative AI?',
            content: [
                { title: 'Content Creation at Scale', text: 'When your business requires high-volume, personalized content generation for marketing, documentation, or customer communications.' },
                { title: 'Complex Data Analysis', text: 'When you need to extract insights from large, unstructured datasets or require intelligent data processing beyond traditional analytics.' },
                { title: 'Customer Service Automation', text: 'When looking to provide 24/7 customer support with intelligent chatbots and automated response systems that understand context and nuance.' },
                { title: 'Process Automation', text: 'When manual processes are becoming bottlenecks and you need intelligent automation that can handle complex, decision-based workflows.' },
                { title: 'Personalization Requirements', text: 'When your business needs to deliver highly personalized experiences to customers at scale across multiple touchpoints and channels.' },
                { title: 'Competitive Differentiation', text: 'When you need innovative AI capabilities to differentiate your products and services in a competitive market landscape.' },
                { title: 'Knowledge Management', text: 'When your organization has vast amounts of institutional knowledge that needs to be organized, searchable, and accessible to teams.' },
                { title: 'Innovation Initiatives', text: 'When exploring new business models, products, or services that can benefit from AI-generated insights, content, or automated capabilities.' },
            ]
        },
        industries: {
            title: 'Industries We Serve with Gen AI Solutions',
            content: [
                { text: 'We serve a diverse client base across multiple industries, building generative AI applications that satisfy industry-specific needs and enterprise-grade standards. Our focus: tailored outcomes, proven execution, and sustainable impact.' },
                { title: 'Healthcare & Life Sciences', text: 'AI-powered clinical decision support, medical documentation automation, drug discovery acceleration, and patient engagement solutions with full HIPAA compliance.' },
                { title: 'Financial Services & Fintech', text: 'Intelligent risk assessment, automated underwriting, fraud detection, regulatory compliance automation, and personalized financial advisory solutions.' },
                { title: 'Retail & E-commerce', text: 'Dynamic pricing optimization, personalized recommendations, automated customer service, inventory management, and supply chain intelligence solutions.' },
                { title: 'Technology & SaaS', text: 'Code generation and optimization, automated testing, technical documentation, customer support automation, and product development acceleration.' },
                { title: 'Manufacturing & Logistics', text: 'Predictive maintenance, supply chain optimization, quality control automation, and intelligent warehouse management systems.' },
                { title: 'Education & Training', text: 'Personalized learning experiences, automated content creation, assessment generation, and intelligent tutoring systems for enhanced educational outcomes.' },
            ]
        }
    };

    const tabs = [
        { id: 'what', label: 'What Is Gen AI Development?' },
        { id: 'process', label: 'Our Development Process' },
        { id: 'tech', label: 'Tech Stack' },
        { id: 'why', label: 'Why Generative AI?' },
        { id: 'when', label: 'When You Need It?' },
        { id: 'industries', label: 'Industries We Serve' },
    ];

    const currentContent = guideContent[activeTab];

    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Complete Guide to Generative AI Development</h2>
                </div>
                <div className={`flex flex-col md:flex-row gap-8 md:gap-12 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-full md:w-1/3">
                        <div className="sticky top-24">
                            {tabs.map(tab => (
                                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full text-left p-4 rounded-lg mb-2 transition-all duration-300 ${activeTab === tab.id ? 'bg-blue-600 text-white font-bold' : 'hover:bg-gray-800'}`}>
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <div key={activeTab} className="animate-fade-in">
                            <h3 className="text-3xl font-bold mb-8">{currentContent.title}</h3>
                            <div className="space-y-6">
                                {currentContent.content.map(item => (
                                    <div key={item.title || item.text}>
                                        {item.title && <h4 className="text-xl font-semibold text-blue-400 mb-2">{item.title}</h4>}
                                        <p className="text-gray-400">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// FAQ Section
const FaqSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { q: "What is generative AI development and how can it benefit my business?", a: "Generative AI development involves creating intelligent systems that can generate human-like content, automate complex tasks, and provide intelligent insights. It benefits businesses by increasing operational efficiency, reducing costs, enabling personalization at scale, and creating new revenue opportunities through innovative AI-powered products and services." },
        { q: "How long does it take to develop and deploy a custom generative AI solution?", a: "Development timelines vary based on project complexity, data requirements, and integration needs. Simple AI applications can be developed in 6-12 weeks, while enterprise-grade solutions with custom model fine-tuning typically take 3-6 months. We provide detailed project timelines during our initial consultation phase." },
        { q: "What kind of data is needed for generative AI model fine-tuning?", a: "The data requirements depend on your specific use case. Generally, we need relevant, high-quality datasets that represent your domain or business context. Our team conducts a comprehensive data assessment, helps with data preparation, ensures privacy compliance, and optimizes data quality for optimal AI model performance." },
        { q: "How do you ensure the security and compliance of AI solutions?", a: "Security and compliance are built into every solution from day one. We implement enterprise-grade security protocols, data encryption, access controls, and audit trails. Our solutions comply with industry standards including GDPR, HIPAA, SOC 2, and other relevant regulations based on your industry requirements." },
        { q: "Can you integrate generative AI with our existing systems and workflows?", a: "Yes, we specialize in seamless AI integration with existing systems. Our integration approach ensures minimal disruption to current workflows while maximizing the benefits of AI capabilities. We work with APIs, databases, cloud platforms, and legacy systems to create cohesive, intelligent solutions." },
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`bg-gray-900/50 ring-1 ring-white/10 rounded-xl transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center text-left p-6">
                                <span className="text-lg font-semibold">{faq.q}</span>
                                <svg className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                                <div className="p-6 pt-0 text-gray-400">
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Engagement Models Section
const EngagementModelsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const models = [
        {
            title: 'Offshore Dedicated Team',
            description: 'Our offshore dedicated team model is ideal for companies that want to scale quickly while retaining complete control over their AI projects and team members—we provide you with a team of dedicated generative AI developers exclusively for your project.',
            points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency']
        },
        {
            title: 'Staff Augmentation',
            description: 'Looking for high-quality expertise to augment your internal AI team—without a full hiring cycle? Our staff augmentation model enables you to bring on the generative AI consultants you need, when you need them, and where you need them.',
            points: ['Tailored Expertise', 'Seamless Integration', 'Cost-effective Solution', 'Transparent Communication']
        },
        {
            title: 'Project-Based',
            description: 'For well-defined AI initiatives with a defined scope and timeline, our project-based model provides end-to-end execution — with complete ownership, accountability, and milestone-driven delivery. We take care of the process — you focus on the results.',
            points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
        },
    ];

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Engagement Models</h2>
                    <p className={`mt-4 max-w-2xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        At Alpixn Technologies, we understand that every business has its specific requirements. That's why we offer flexible engagement models based on your project scope, execution style, and growth strategy. Whether you want a long-term AI partner, a team for targeted support, or delivery on a fixed scope—we've got a model to match.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {models.map((model, index) => (
                        <div key={model.title} className={`p-8 bg-blue-900/20 ring-1 ring-blue-500/20 rounded-2xl transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <h3 className="text-3xl font-bold mb-4 text-center">{model.title}</h3>
                            <p className="text-gray-400 mb-6 text-center h-24">{model.description}</p>
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

const GenAIDevelopmentPage = () => {
  const services = [
    {
      title: 'Gen AI Custom App Development',
      description: 'We at Alpixn Technologies build custom generative AI applications that solve real-world business challenges—automating workflows, boosting engagement, and driving innovation—offering business-specific, scalable solutions aligned with your growth goals.',
    },
    {
      title: 'Gen AI Model Fine-Tuning',
      description: 'Our domain-specific large language model fine-tuning solutions reduce hallucinations and improve accuracy while generating contextually intelligent, business-ready results via expert-led generative AI development services tailored to your data and goals.',
    },
    {
      title: 'Gen AI Multimodal Solutions',
      description: 'AI developers build next-gen multimodal generative AI services and solutions to help organizations gain advanced automation, richer insights, and more seamless user experiences while handling data across different formats like text, image, and audio.',
    },
    {
      title: 'Generative AI Model Integration',
      description: 'Alpixn Technologiess seamless generative AI integration services help you integrate AI into your existing systems—breaking down silos, improving efficiency, and providing enterprise-grade performance without disrupting workflows or your digital ecosystem.',
    },
    {
      title: 'Gen AI Infrastructure & Deployment',
      description: 'We build a robust, scalable AI infrastructure setup and deployment, ensuring your generative AI applications are secure, high-performing, and production-ready, using modern cloud, MLOps, and enterprise IT best practices.',
    },
    {
      title: 'Gen AI Support & Optimization',
      description: 'We provide continuous support to keep your GenAI systems optimized, compliant, and effective—addressing drift, amplifying output, and maximizing the long-term value of your investment with leading AI development services.',
    },
  ];

  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <motion.section
          className="relative bg-gradient-to-r from-blue-900 via-black to-black text-white py-20 pl-5 pr-4 sm:pl-10 sm:pr-6 md:pl-16 lg:pl-24 xl:pl-36 2xl:pl-48 flex items-center" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Generative AI Development Company</h1>
              <p className="text-lg md:text-xl mb-6">
                As a leading generative AI development company, we build advanced production-ready AI solutions, empowering your business intelligence that go beyond just automation. We offer end-to-end GenAI development services focused on model fine-tuning, LLM integration, and multi-modal application development, addressing scalability and performance.
              </p>
              <motion.button
                className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Free Consultation ➔
              </motion.button>
            </motion.div>
            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img src={GenAIImage} alt="Gen AI Development" className="w-full max-w-md rounded-lg" />
            </motion.div>
          </div>
        </motion.section>

        <TrustedBy backgroundColor="bg-white" />

        {/* Gen AI Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              Generative AI Development Services We Offer
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 max-w-3xl mx-auto mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We develop purpose-built, high-impact, generative AI applications and solutions to solve business challenges, accelerate speed-to-market, and generate significant new revenue streams powered by intelligent automation and adaptive learning.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-8 rounded-lg text-left transform transition duration-500 hover:scale-105 hover:bg-gray-700"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              Bring Your Gen AI Vision to Life with Confidence & Speed
            </motion.h2>
            <motion.p
              className="text-lg mb-8 max-w-3xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We help you validate concepts, build intelligent systems, and deploy them at scale to meet your business objectives faster.
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

        {/* Project Success Section */}
        <ProjectSuccessSection />

        {/* AI Services Section */}
        <AIServicesSection />

        <ClutchTestimonials />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        <GuideSection />

        <FaqSection />

        <EngagementModelsSection />

        {/* Final CTA Section */}
        <section className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              Ready to Transform Your Business with Generative AI?
            </motion.h2>
            <motion.p
              className="text-lg mb-8 max-w-3xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ready to harness the power of AI? Our expert generative AI development team is prepared to bring your vision to life. Let's embark on your AI transformation journey together, creating intelligent solutions tailored to your business needs.
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
              Start Your AI Project Today
            </motion.button>
          </div>
        </section>

        <TechStackTabs />
        <Insights />
      </main>
      <Footer />
    </div>
  );
};

export default GenAIDevelopmentPage;