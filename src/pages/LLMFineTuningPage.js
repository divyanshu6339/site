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
    { title: 'Hyperparameter Optimization', description: 'Guided by LLM optimization experts in India, our approach to LLM tuning achieves optimal hyperparameter configuration tailored to your inputs, helping you scale faster while reducing compute costs without quality tradeoff.', icon: 'hyperparameter-optimization' },
    { title: 'Early Stopping & LR Scheduling', description: 'We use early stopping and learning rate (LR) schedules to fine tune large language models efficiently, minimizing the risk of overfitting and computation waste with proven LLM fine-tuning as a service.', icon: 'early-stopping-lr-scheduling' },
    { title: 'Custom Loss & Training Workflows', description: 'We develop custom loss functions and training workflows to suit your objectives. This focused LLM fine tuning service in India ensures better relevance, safety, and control over your model outputs.', icon: 'custom-loss-training-workflows' },
    { title: 'Dataset Selection and Annotation', description: 'We curate and annotate high-quality, domain-specific datasets to fine-tune large language models. Our LLM fine tuning service in India ensures accuracy, relevance, and real-world context for global businesses.', icon: 'dataset-selection-and-annotation' },
    { title: 'Thorough Post-Training Evaluation', description: 'Every model we deliver undergoes extensive testing and real-world validation. As part of our LLM fine tuning service in India, we guarantee your model is accurate, stable, and ready to scale.', icon: 'thorough-post-training-evaluation' },
    { title: 'Continuous Model Refinements', description: 'With our LLM fine tuning as a service, we monitor model performance, retrain as needed, and keep your AI systems current—so your solution transforms with your users and business needs.', icon: 'continuous-model-refinements' }
];

const tangibleResults = [
    { title: 'Domain-Aligned Model Behavior', description: 'We fine tune large language models to your domain language, processes, and standards, optimizing to make the outputs more relevant and consistent with your business objectives and minimizing context errors in critical tasks.', icon: 'domain-aligned-model-behavior' },
    { title: 'Secure Data Fine Tuning', description: 'Our LLM fine tuning services prioritize data privacy and regulatory compliance. At Alpixn Technologies, fine tuning occurs within secure environments, so your sensitive information is protected during the tuning process without sacrificing model performance.', icon: 'secure-data-fine-tuning' },
    { title: 'Task-Specific LLM Training', description: 'We train LLMs on case-specific data to achieve highly relevant and accurate performance. Whether it’s legal summarization or customer service, your model responds as though it were architected for the task from day one.', icon: 'task-specific-llm-training' },
    { title: 'Enterprise Workflow Integration', description: 'Fine-tuned models are only good if they function where you do. We ensure seamless integration into your existing enterprise systems—so your AI delivers immediate impact without disrupting operations.', icon: 'enterprise-workflow-integration' }
];

const whyChooseUsGenAi = [
    { title: 'Industry-Focused Expertise', description: 'We understand your industry language entirely. Our LLM fine tuning services adapt models to your domain, enabling more precise, pertinent, and compliant outputs that correspond with actual business and compliance demands.' },
    { title: 'Custom-Tuned AI Models', description: 'We don’t do generic. Our experts fine tune large language models, leveraging your unique data and goals—building task-specific AI that empowers productivity, user experience, and decision-making at every level.' },
    { title: 'Scalable Model Architecture', description: 'Our LLM optimization services are designed for scalable, modular architectures that expand as your business does—minimizing rework, facilitating future upgrades, and speeding time-to-value across ever-evolving or high-volume use cases.' },
    { title: 'Integration-Ready Models', description: 'We expertly design fine-tuned models to fit within your ecosystem. Whether it is integration into CRM or internal tools, the customization of LLM leads to maximum utility without disturbing the current process flow and infrastructure.' },
    { title: 'Transparent Communication', description: 'Clear updates. Shared milestones. No guesswork. We deliver LLM fine-tuning services with full visibility and continuous, ongoing collaboration—so you always know where your project stands and what’s coming next.' },
    { title: 'Proven Client Success', description: 'Enterprises trust us because we deliver measurable outcomes. From smarter automation to more efficient customer support, our LLM fine tuning solutions have driven real business wins across industries and cases.' }
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
                        Case Studies: Harnessing AI for Scalable Business Growth
                    </h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Our AI solutions go beyond experimentation. We enable you to transform disruptive technology into scalable, operationalized systems that accelerate growth, reveal actionable insights, and modernize operations. At Alpixn Technologies, our AI is designed to scale, perform, and impact.
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
            Why Enterprises Rely on Our LLM Fine Tuning Services
          </h2>
          <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            Our work is trusted because it produces real results, custom-trained models that understand contexts, reduce noise, and turn the LLMs into reliable assets, powering mission-critical workflows and enterprise-grade AI applications.
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
            Why Choose Us for Precision LLM Fine Tuning?
        </h2>
        <p className={`max-w-3xl mx-auto text-lg text-gray-400 mb-16 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            Our approach combines deep model knowledge, structured evaluation, and production readiness. That is why enterprises depend on our LLM fine-tuning services to unlock AI that’s accurate, consistent, and business-ready.
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
                        We help high-complexity industries turn general AI into specialized intelligence. Whether legal insights or clinical summaries, our LLMs have been fine-tuned to guide decisions, mitigate risks, and automate meticulous work where accuracy is paramount.
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
                        Clients appreciate how we translate complex models into usable solutions. Our LLM customization services help teams work faster, reduce manual effort, and confidently achieve NLP goals.
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
                        From LoRA to ONNX, we integrate state-of-the-art optimization tools and model training workflows—providing fast, cost-effective, and enterprise-grade fine tuned large language models fit for production.
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
            description: 'Perfect for long-term, evolving LLM projects, our offshore dedicated team model provides a full-time group of LLM optimization experts working exclusively on your LLM project, roadmap, data set, and business goals.',
            points: ['Client-Centric Approach', 'Direct Reporting & Transparency', 'Scalability & Flexibility', 'Quality & Efficiency'],
            icon: 'offshore-dedicated-team'
        },
        {
            title: 'Staff Augmentation',
            description: 'Need to augment your internal AI capabilities quickly? Our LLM fine tuning specialists work as an extension of your team—bringing the domain experience and agility you need without the long-term commitments.',
            points: ['Tailored Expertise', 'Seamless Integration', 'Cost-effective Solution', 'Transparent Communication'],
            icon: 'staff-augmentation'
        },
        {
            title: 'Project-Based',
            description: 'Perfect for focused initiatives, our project-based model is best suited for businesses with clearly defined goals, budgets, and timelines for fine tuning large language models with measurable outcomes and streamlined delivery.',
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
                        We offer flexible engagement models tailored to your business objectives, technical needs, and budget at Alpixn Technologies. We have you covered, whether you need full-time professionals, part-time experts, or a clearly defined project scope.
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
        { q: 'What is LLM fine-tuning, and how does it enhance model performance?', a: 'LLM fine-tuning involves training a pre-trained language model on your domain-specific data to increase accuracy, relevance, and task performance. This makes the models more useful, reliable, and suited to your business objectives.' },
        { q: 'How does fine-tuning differ from prompt engineering or using pre-trained models?', a: 'Using a pre-trained model is like having a generalist. Prompt engineering is about giving that generalist very specific instructions to get a better result. Fine-tuning, however, is like sending that generalist to a specialized school; it fundamentally updates the model’s internal knowledge to make it an expert in your specific domain, resulting in consistently better and more reliable outputs.' },
        { q: 'What are the key benefits of fine-tuning large language models for my business?', a: 'The key benefits include higher accuracy for your specific tasks, improved brand voice consistency, better handling of domain-specific jargon, enhanced data privacy (as you can often use smaller, on-premise models), and reduced operational costs from fewer errors and more efficient workflows.' },
        { q: 'How long does it typically take to fine-tune a large language model?', a: 'The timeline varies but typically ranges from a few weeks to a couple of months. It depends on factors like the quality and size of your dataset, the complexity of the task, and the specific model being used. Our process focuses on efficiency, moving from data preparation to a deployable model as quickly as possible.' },
        { q: 'What factors influence the cost of LLM fine-tuning services?', a: 'Costs are influenced by the amount of data preparation and annotation needed, the size of the model being tuned, the required compute resources (GPU time), and the level of post-training support and evaluation required to ensure enterprise-grade performance.' },
        { q: 'Can you fine-tune models like GPT, BERT, or LLaMA for specific business needs?', a: 'Yes, we have expertise in fine-tuning a wide range of open-source and proprietary models, including those from the GPT family (like GPT-3.5), BERT, T5, and LLaMA. We select the best base model for your specific use case and budget to ensure optimal results.' },
        { q: 'What types of data are required for effective LLM fine-tuning?', a: 'High-quality, labeled data relevant to your specific task is crucial. This could be a dataset of customer support inquiries and ideal responses, a collection of legal documents and their summaries, or product descriptions and their corresponding marketing copy. We can assist in curating and annotating this data.' },
        { q: 'How do you ensure data privacy and security during the fine-tuning process?', a: 'We follow a strict security protocol, including operating within secure cloud or on-premise environments, data anonymization where possible, and adhering to strict access controls. Your proprietary data is treated as a highly sensitive asset and is never used for any purpose other than fine-tuning your model.' },
        { q: 'Is fine-tuning suitable for small businesses or only large enterprises?', a: 'Fine-tuning is increasingly accessible for businesses of all sizes. While large enterprises benefit from deep customization, even small businesses can gain a competitive edge by fine-tuning smaller, efficient models for specific tasks like customer service or content creation, leading to significant ROI.' },
        { q: 'Do I need an in-house AI team to manage a fine-tuned language model?', a: 'Not necessarily. We offer end-to-end services, including deployment and ongoing maintenance. We can deliver a fine-tuned model as a managed API endpoint, allowing your existing development team to integrate its capabilities without needing specialized in-house AI expertise.' }
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Speak to Our LLM Fine-Tuning Experts</h2>
                <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-400">Collaborate with experts to adapt large language models for smarter outputs, sharper context, and enterprise-ready performance.</p>
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
const LLMFineTuningPage = () => {
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
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">LLM Fine Tuning Services</h1>
                <p className="text-lg md:text-xl mb-6">
                    Generic models understand language. We make them understand your business. At Alpixn Technologies, we fine-tune Large Language Models (LLMs) that align pre-trained AI with your KPIs, delivering the right-sized, high-performing NLP implementations fluent in your domain.
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
              LLM Fine Tuning Services We Offer
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 max-w-3xl mx-auto mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We assist enterprises in refining large language models via formalized training, bespoke validation, and ongoing enhancements, improving response quality, lowering bias, and aligning output with the business context and NLP best practices.
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
              Boost NLP Accuracy with Expert LLM Fine-Tuning
            </motion.h2>
            <motion.p
              className="text-lg mb-8 max-w-3xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From customer support to legal automation, our guided LLM fine tuning services provide you with a model built for your domain — and providing consistent, reliable NLP across every use case.
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
                We fine tune large language models for enterprises that can’t afford inaccuracy—enabling them to unleash intelligent automation, speed time to value, and arm themselves with purpose-built, business-ready NLP systems.
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

export default LLMFineTuningPage;