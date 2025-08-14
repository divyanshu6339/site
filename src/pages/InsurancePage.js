import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- NEW DATA ARRAYS ---
const insuranceServices = [
    { title: 'Custom Insurance Solutions Development', description: 'We offer custom insurance software development services that help you achieve your business goals. Frontend or backend, web or mobile, our certified developers are skilled in designing and developing custom insurance applications that address the pain points across the various insurance verticals.' },
    { title: 'Insurtech Automation Consulting', description: 'Stay a step ahead of the competition with our insurtech consulting services. Streamline insurance processes, enhance customer interactions, and optimize workflows. Our innovative automation solutions empower insurance companies to navigate complexities easily and audit seamlessly, ensuring an advanced approach to insurance operations.' },
    { title: 'Maintenance of Legacy Insurance Systems', description: 'We modernize your legacy systems to keep you ahead of the evolving technological landscape and business environment. Our experts analyze and enhance your software architecture by integrating advanced web or mobile solutions, upgrading your infrastructure, and empowering your businesses.' },
    { title: 'CRM and ERP Insurance Software', description: 'We deliver custom and platform-based customer relationship management (CRM) and ERP solutions to automate daily tasks within workflows to maximize operational efficiency. Optimize your client relationships with the best CRM for insurance agents. Our developers utilize emerging technologies to integrate automation into your daily workflow.' },
    { title: 'Insurance Data Analytics', description: 'We provide emerging insurance Data Analytics services, leveraging advanced analytics and data-driven insights. Our solutions encompass risk assessment, fraud detection, customer behavior analysis, and predictive modeling. By harnessing the power of data, we empower insurance entities to make informed decisions, optimize processes, and enhance overall operational efficiency.' },
    { title: 'Insurance AI Chatbot Development', description: 'Redefine your customer engagement with our insurance AI Chatbot Development services. We specialize in creating intelligent and intuitive chatbots tailored for the insurance industry. Our solutions streamline customer interactions, provide instant assistance, and enhance overall user experience, increasing efficiency and customer satisfaction in insurance operations.' }
];

const exploreInsuranceSolutions = [
    { number: '01', title: 'Insurance Document Management Software', description: 'As a prominent insurance software company, Jellyfish Technologies offers insurance document management solutions to help automate paper-intensive processes and streamline internal workflows while maintaining compliance standards and making the task of creating, sharing, storing, retrieving, securing, and reviewing documents easier.' },
    { number: '02', title: 'Insurance Claims Management software', description: 'Experience streamlined and efficient claims processing with our insurance claims management software services. Our innovative solution optimizes the end-to-end claims lifecycle, from submission to settlement. With advanced automation, real-time tracking, and analytics, we empower insurance providers to enhance accuracy and reduce processing times.' },
    { number: '03', title: 'Investment Management Software', description: 'We provide emerging tech for portfolio analysis, risk management, and performance tracking. Harness real-time data, streamline decision-making, and optimize investment strategies to navigate the complexities of financial markets effectively. Experience a sophisticated approach to investment management with our cutting-edge software solution.' },
    { number: '04', title: 'Insurance API Development & Integration', description: 'We specialize in integrating APIs for the insurance industry, facilitating seamless connectivity and data exchange between multiple devices and platforms. From third-party integrations to custom API development, we ensure a secure and efficient flow of information, enhancing overall operational agility and connectivity within your insurance infrastructure.' },
    { number: '05', title: 'Insurance Risk Management Software', description: 'We at Jellyfish Technologies have certified developers to embark on data security with innovation. We incorporate tools for risk identification, fraud detection, assessment, and mitigation. From real-time analytics to compliance tracking, empower your organization to proactively manage risks, ensuring a resilient and secure foundation for your insurance operations.' },
    { number: '06', 'title': 'Insurance Compliance Software', description: 'We provide game-changing insurance compliance software services by leveraging emerging technologies to enable innovation and automation. Streamline reporting processes, increase transparency, and ensure your insurance operations consistently meet compliance standards. Our solution includes tracking, managing, and ensuring compliance with industry regulations.' },
    { number: '07', title: 'Agency Management Software', description: 'We at Jellyfish Technologies provide solutions that streamline tasks such as policy issuance, commission tracking, and agent performance analysis. Enhance collaboration, automate workflows, and gain valuable insights to boost efficiency, ultimately empowering insurance agencies to deliver top-notch service and achieve business success.' },
    { number: '08', title: 'Customer-facing Insurance Apps', description: 'We transform businesses with customer-facing insurance app development solutions for various platforms. We offer seamless user experiences, automated claims submission, policy management, and real-time assistance. With intuitive interfaces and secure functionalities, our digital solutions enhance customer satisfaction and retention.' },
    { number: '09', title: 'Insurance Billing software', description: 'Simplify and streamline billing processes with our insurance billing software. We integrate emerging tech for calculation, invoicing, and payment tracking. From automated billing cycles to customized reporting, our insurance software ensures accuracy and efficiency in managing financial transactions within the insurance billing framework.' }
];

const whyDevelopWithUs = [
    { title: 'Improved Customer Experience', description: 'Develop your insurance software with Jellyfish Technologies. Achieve an improved customer experience. Our user-centric UI/UX design is easy to navigate with advanced functionalities to ensure a seamless, intuitive interface. Consider outsourcing insurance software development to us for cost-effective and high-quality solutions.' },
    { title: 'Faster Settlement of Claims', description: 'Our insurance software streamlines the claims process with advanced automation incorporating the latest tech like AI/ML, real-time tracking, and efficient workflows. Experience accelerated claims settlement, enhancing operational efficiency and customer satisfaction within your insurance operations.' },
    { title: 'Automated Fraud Detection', description: 'Opt for Jellyfish Technologies for automated fraud detection. Our insurance software employs cutting-edge algorithms and analytics to identify and mitigate fraudulent activities swiftly, utilizing innovative technology such as deep learning, safeguarding your operations, and enhancing overall data security.' },
    { title: 'Improved Collaboration', description: 'Jellyfish Technologies fosters improved collaboration. Our qualified software developers facilitate seamless communication and collaboration, ensuring efficient workflows, enhanced teamwork, and optimized processes of application across various platforms within insurance operations.' },
    { title: 'Reduced Operating Cost', description: 'Partner with Jellyfish Technologies for Reduced Operating Costs. Our software solutions are made to simplify things, do tasks automatically, and use resources better, ultimately leading to significant cost savings within your insurance business.' },
    { title: 'Fraud Prevention Software Systems', description: 'Employ Jellyfish Technologies for Advanced Fraud Prevention Software Systems. Our expert developers provide solutions that go beyond detection, proactively preventing fraudulent activities within your insurance operations. With unmatched security measures, stay ahead of potential threats.' }
];

const clutchTestimonials = [
    { rating: '5.0', text: "They're a top-notch developer all around.", author: "Strategic Product Manager", company: "Patra Corp" },
    { rating: '5.0', text: "There's no job too big or small for the team to fix in rapid time.", author: "Co-Founder", company: "Shootzu" },
    { rating: '4.5', text: "They’re reliable, and the price value is very high.", author: "Co-Founder & CEO", company: "BlackGull" },
    { rating: '4.5', text: "Their team has a lot of backend development knowledge.", author: "Founder & Managing Director", company: "ImmoSnapp GmbH" },
    { rating: '5.0', text: "Their commitment to excellence and collaborative approach set them apart.", author: "Executive", company: "Sagita Learning" },
    { rating: '5.0', text: "The team is very friendly & responsive, they are always ready to connect via Meets and Zoom calls.", author: "VP Operations", company: "Transport Company" }
];

const engagementModelsInsurance = [
    { title: 'Offshore Development', description: 'Jellyfish Technologies’ offshore engagement model functions as an Offshore Development Center (ODC), delivering a tailored approach. This specialized center works exclusively on the client’s project, ensuring cost-effectiveness, scalability, optimized outcomes, efficiency, and high-quality standards.', points: ['Client-Centric Team Formation', 'Direct Reporting And Transparency', 'Scalability And Flexibility', 'Quality And Efficiency'] },
    { title: 'Dedicated Team Model', description: 'Jellyfish Technologies offers a dedicated team approach, bolstering a client’s in-house team with specialized skills, fostering collaboration, and optimizing project results. Ideal for companies aiming to enhance their workforce with specific expertise for better project outcomes.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Jellyfish Technologies’ project-based engagement model offers a structured approach for well-defined projects within a set scope, time, and budget. This model guarantees timely, on-budget delivery meeting quality standards, and fostering collaboration for successful outcomes.', points: ['Fixed Budget', 'Milestones And Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsInsurance = [
    { q: 'What improvements can insurance software development services make to the operations of "traditional" insurers?', a: 'Essentially, you are starting your digital transformation journey when you integrate insurance software into your core operations. Moving toward data and technology in the insurance sector means satisfying end users’ expectations in every situation and staying current for them. Explore our comprehensive insurance solutions software, designed to address diverse needs within the industry.' },
    { q: 'How long does it take to build an insurance app?', a: 'The timeline for building an insurance app depends on its complexity. A simple app with basic features like quote generation and policy viewing (an MVP) could take 3-6 months. A more comprehensive application with features like claims processing, AI-powered chatbots, and advanced analytics can take anywhere from 6 to 12+ months. Our agile development process helps deliver critical features faster.' },
    { q: 'How much do solutions for developing custom software for insurance companies cost?', a: "The cost of custom insurance software varies widely based on the scope, technology stack, and integration complexity. A basic solution could start from $50,000, while complex, enterprise-level platforms for claims management or underwriting automation can cost several hundred thousand dollars. We provide a detailed estimate after understanding your specific business needs and goals." }
];

const userGuideContentInsurance = [
    { title: 'Key Industry Challenges for Insurance Companies', content: 'The insurance industry, despite its stability, faces a multitude of challenges. These include: \n1. Digital Transformation: Adopting new technologies like AI, IoT, and blockchain. \n2. Customer Expectations: Meeting demands for seamless digital experiences. \n3. Legacy Systems: The need to modernize outdated and inefficient systems. \n4. Cybersecurity Threats: Protecting sensitive data from increasingly sophisticated attacks. \n5. Data Management: Effectively managing and analyzing vast amounts of data. \n6. Talent Acquisition: Attracting professionals skilled in emerging tech. \n7. Changing Risk Landscape: Adapting to new risks like cyber threats and pandemics.' },
    { title: 'Insurance Software Development with Latest Tech', content: 'The insurance industry is being transformed by technology. We leverage: \n- Cloud Computing (AWS, Azure, GCP) for agility. \n- Microservices Architecture for flexibility. \n- API Integration for seamless data exchange. \n- Mobile-First Design for user convenience. \n- Data Analytics and AI for insights, fraud detection, and dynamic pricing. \n- Emerging Trends like IoT, Conversational AI, and robust Cybersecurity measures.' },
    { title: 'Reasons to Hire Expert Insurance Software Developers', content: 'Hiring expert developers provides: \n1. Deep Industry Knowledge of regulations and workflows. \n2. Tech Expertise in AI, blockchain, and cloud. \n3. Enhanced Security and Compliance with industry standards. \n4. Streamlined Operations through automation and efficiency. \n5. Improved Customer Experience with user-friendly apps and portals. \n6. Competitive Advantage through agile and scalable infrastructure.' },
    { title: 'What Is Insurance Underwriting?', content: "Insurance underwriting is the process of evaluating the risk of insuring a person or asset to set the premium. The key steps are: \n1. Gather Information: Collect data about the applicant. \n2. Assess the Risk: Determine the likelihood and potential cost of a claim. \n3. Decide on Approval: Accept or reject the application based on the risk. \n4. Set the Premium: Price the policy based on the assessed risk. \n5. Monitor the Policy: Periodically review and adjust the policy as needed." }
];

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

// --- NEW SECTIONS FOR INSURANCE PAGE ---

const InsuranceServicesSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="container mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
              Insurance Software Development Services We Offer
            </h2>
            <p className={`text-lg text-gray-400 max-w-4xl mx-auto mb-12 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                Jellyfish Technologies is among the leading insurance software development companies. We deliver customized user experiences and navigate challenges such as data management and cybersecurity to help insurance organizations boost their efficiency, profitability, and safety through innovative insurance software development services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insuranceServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-8 rounded-lg text-left transform transition duration-500 hover:scale-105 hover:bg-gray-700"
                  initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-12">
                <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
                    <input type="email" placeholder="Email id" className="flex-grow bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <select className="bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Please choose service</option>
                        {insuranceServices.map(s => <option key={s.title}>{s.title}</option>)}
                    </select>
                </form>
                <motion.button className="mt-6 bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300" whileHover={{ scale: 1.05 }}>
                    Connect With Our Insurance Software Development Experts Now!
                </motion.button>
            </div>
          </div>
        </section>
    );
};

const InsuranceWorkMasterySection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
                <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Our Dedicated Insurance Software Development Work Mastery
                </h2>
                <p className={`mt-4 text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Our Insurance dedicated Software developers offer a range of benefits, with certified professionals skilled in emerging technologies like AI, low code/no code, and IoT. Hire dedicated software developers to integrate core tech strength and 24/7 support, ensuring seamless maintenance from code to production, offering your project success and scalability.
                </p>
            </div>
        </div>
    );
};

const FeaturedCaseStudyInsurance = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-800 ring-1 ring-white/10 rounded-2xl p-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-2/5">
                        <h3 className="text-3xl font-bold mb-2">Payleadr</h3>
                        <p className="text-blue-400 font-semibold mb-4">A Direct Debit Payment Service System, Enhancing Security, Efficient Scheduling, Streamlining Operations, and Driving Business Growth.</p>
                        <ul className="space-y-3 mb-6">
                            {['Secure transactions through the integration of a PCI-compliant payment gateway', 'Operational efficiency streamlined through schedulers and caching, reducing data latency', 'Platform’s customizable nature attracted a new client base, driving revenue', 'Custom development tailored to specific business needs and requirements'].map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                         <div className="flex flex-wrap items-center gap-2">
                             {['Australia', 'REACT', 'FINTECH'].map(tag => <div key={tag} className="text-xs font-semibold text-gray-300 bg-gray-700 px-3 py-1 rounded-full">{tag}</div>)}
                         </div>
                    </div>
                    <div className="w-full md:w-3/5">
                        <p className="text-gray-300 mb-6 text-lg">Jellyfish Technologies collaborated with Payleadr to create a customizable platform, integrating a PCI-compliant payment gateway, mobile-centric web app, and efficient scheduling, streamlining transactions, enhancing customer support, and driving business growth.</p>
                        <img src={StaffAugmentationImage} alt="Payleadr Case Study" className="rounded-xl shadow-2xl shadow-blue-500/10" />
                        <div className="text-center mt-6">
                            <button className="text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center gap-2 mx-auto">View Case Study <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ExploreInsuranceSolutionsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Explore Our Insurance Software Development Solutions
                    </h2>
                    <p className={`mt-4 text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Our insurance industry software solutions solutions include policy management systems, claims processing platforms, and innovative insurance solutions. From seamless integration to insurance billing software, and advanced analytics, we deliver prominent custom insurance software solutions that are data-driven and enhance operational efficiency, optimize processes, and drive excellence in the insurance sector.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {exploreInsuranceSolutions.map((service, index) => (
                        <div key={index} className={`bg-gray-900/50 ring-1 ring-white/10 p-8 rounded-2xl transition-all duration-500 ease-out hover:ring-blue-500/50 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="flex items-start gap-4">
                                <div className="text-blue-400 font-bold text-3xl">{service.number}</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const WhyDevelopWithUsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
      <div ref={ref} className="py-24 bg-gray-900/50">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
              Why Develop Your Insurance Software With Jellyfish Technologies?
          </h2>
          <p className={`max-w-4xl mx-auto text-lg text-gray-400 mb-16 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
              Jellyfish Technologies is among the leading insurance software companies. We integrate the latest technology adoption, unparalleled security measures, user-centric design, maintenance & support, Agile methodologies, transparent communication, and a proven track record, ensuring innovation and efficiency throughout the software development journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyDevelopWithUs.map((reason, index) => (
              <div key={reason.title} className={`p-8 bg-gray-800 rounded-2xl text-left transition-all duration-500 ease-out hover:bg-gray-700 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

const UserGuideAccordionInsurance = () => {
    const [open, setOpen] = useState(null);
    const toggle = (index) => setOpen(open === index ? null : index);
    return (
        <div className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Insurance Software Development Services</h2>
                <div className="max-w-4xl mx-auto">
                    {userGuideContentInsurance.map((item, index) => (
                        <div key={index} className="border-b border-gray-700 py-4">
                            <button onClick={() => toggle(index)} className="w-full flex justify-between items-center text-left text-lg font-semibold text-white">
                                <span>{item.title}</span>
                                <span className="text-blue-400 text-2xl">{open === index ? '−' : '+'}</span>
                            </button>
                            <motion.div
                                initial={false}
                                animate={{ height: open === index ? 'auto' : 0, opacity: open === index ? 1 : 0, marginTop: open === index ? '1rem' : '0' }}
                                transition={{ duration: 0.3 }} className="overflow-hidden">
                                <p className="text-gray-400 pr-5 whitespace-pre-line">{item.content}</p>
                            </motion.div>
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
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>See what our clients have to say</h2>
                    <img src="https://www.jellyfishtechnologies.com/wp-content/uploads/2024/04/clutch-logo.png" alt="Clutch" className="h-12 mx-auto mt-4" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {clutchTestimonials.map((testimonial, index) => (
                        <div key={index} className={`p-8 bg-gray-800 ring-1 ring-white/10 rounded-2xl transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="flex items-center mb-4"><div className="text-yellow-400 text-2xl font-bold">{testimonial.rating} ★</div></div>
                            <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                            <div className="font-bold text-white">{testimonial.author}</div>
                            <div className="text-sm text-gray-400">{testimonial.company}</div>
                            <div className="text-xs text-green-400 mt-2 font-semibold">Verified Review</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const EngagementModelsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Engagement Model</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Jellyfish Technologies offers versatile engagement models for Insurance software development services, providing innovative solutions to match clients’ unique requirements. Let’s explore these engagement models.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsInsurance.map((model, index) => (
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
                    {faqsInsurance.map((faq, index) => (
                        <div key={index} className="border-b border-gray-700 py-4">
                            <button onClick={() => toggle(index)} className="w-full flex justify-between items-center text-left text-lg font-semibold">
                                <span className="text-white">{faq.q}</span>
                                <span className="text-blue-400 text-2xl">{open === index ? '−' : '+'}</span>
                            </button>
                            <motion.div initial={false} animate={{ height: open === index ? 'auto' : 0, opacity: open === index ? 1 : 0, marginTop: open === index ? '1rem' : '0' }} transition={{ duration: 0.3 }} className="overflow-hidden">
                                <p className="text-gray-400">{faq.a}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const FinalCtaSection = () => {
    return (
        <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect with Our Insurance Software Development Experts</h2>
                <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-400">Connect with our expert insurance software engineers to add advanced, certified developers who integrate the latest tech to transform your concepts into engaging and seamless user experiences.</p>
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
const InsurancePage = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <motion.section
          className="relative bg-gradient-to-r from-blue-900 via-black to-black text-white py-20 pl-5 pr-4 sm:pl-10 sm:pr-6 md:pl-16 lg:pl-24"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center">
                <motion.div
                    className="md:w-1/2 mb-10 md:mb-0"
                    initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Insurance Software Development Services</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Jellyfish Technologies provides insurance software solutions that automate processes and assist insurance providers in improving operational efficiency, increasing customer loyalty, revamping risk mitigation practices, and expanding their client base. We lead innovative, transformative projects by utilizing our extensive technological knowledge and industry insights.
                    </p>
                    <motion.button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition" whileHover={{ scale: 1.05 }}>
                        Get a custom quote
                    </motion.button>
                </motion.div>
                <motion.div
                    className="md:w-1/2 flex justify-center"
                    initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                    <img src={StaffAugmentationImage} alt="Insurance Software Development" className="w-full max-w-md rounded-lg" />
                </motion.div>
            </div>
          </div>
        </motion.section>

        <TrustedBy backgroundColor="bg-white" />
        <InsuranceServicesSection />
        <InsuranceWorkMasterySection />
        <FeaturedCaseStudyInsurance />
        <ExploreInsuranceSolutionsSection />
        <TestimonialsSection />
        <WhyDevelopWithUsSection />

        <section className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Connect with Our Insurance Software Development Experts
            </motion.h2>
            <motion.p className="text-lg mb-8 max-w-3xl mx-auto" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                Let’s transform your vision into reality and craft outstanding, customized mobile app solutions collaboratively. Start your mobile app development journey with us today.
            </motion.p>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Get an Estimate of Your Project Today
            </motion.button>
        </section>
        
        <UserGuideAccordionInsurance />
        <EngagementModelsSection />
        <FinalCtaSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default InsurancePage;