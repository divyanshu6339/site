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
const telecomServices = [
    { title: 'Custom Telecom Software Development', description: 'Our custom telecom software development services are designed to meet your specific business needs. Backed by an agile development team and dedicated developers, we ensure tailored solutions that effectively address challenges and drive innovation in the telecommunications industry.' },
    { title: 'Operations Support Systems (OSS)', description: 'Our dedicated software professionals are prompt with new-age technologies and a depth of telecom industry expertise. Our custom Operations Support Systems solutions include calling accounting, telecom expense management, security monitoring, ensuring cost-effectiveness, and safeguarding against potential threats.' },
    { title: 'Business Support Systems (BSS)', description: 'Our Business Support Systems (BSS) services offer web and telecom application development, custom automation solutions, billing software, and CRM integrations. From modernizing BSS infrastructure to developing tailored solutions, we optimize telecom operations, enhance efficiency, and empower providers with advanced capabilities in their businesses.' },
    { title: 'Call Accounting Software', description: 'We deliver custom call accounting software solutions for your telecom business infrastructure to easily manage incoming, outgoing, local, and long-distance calls. Our developers integrate advanced algorithms to track different types of calls, capture records and documents, and optimize your network, security, and PCI-DSS compliance.' },
    { title: 'Omnichannel Customer Services', description: 'We at Alpixn Technologies provide client-centric solutions to meet bespoke specifications. Our skilled developers deliver custom solutions like user portals, help desks, and SMS mobile applications of varying complexity, ensuring businesses provide smart and efficient services.' },
    { title: 'Telecom Digital Services', description: 'Our custom telecom digital services include VoIP solutions, a business messaging system, bespoke telecom application development, network data analytics, and dashboard creation. With our innovative services transform your business in the evolving digital landscape.' }
];

const exploreSolutions = [
    { number: '01', title: 'Telephony VoIP Solutions', description: 'Our certified developers engineer custom-built VoIP-based telecom software solutions enhancing automatic data conversions, intelligent call routing, and voice traffic transmissions. Alpixn Technologies provides a transformation from telephony to a voice-over IP solution that is smooth and built as per your business objectives.' },
    { number: '02', title: 'Digital Media Streaming', description: 'We at Alpixn Technologies provide software development services to develop solutions that offer seamless live streaming and media recording features. Our services include the integration of modern-day technologies into your existing telecom infrastructure. we provide engaging solutions to enhance digital media distribution and consumption.' },
    { number: '03', title: 'International Calling Systems', description: 'Our telecom software development services specialize in creating international calling systems. Incorporating industry-leading technology and expertise, we craft smart solutions to meet the diverse needs of global communication, ensuring seamless and reliable international calling capabilities for enhanced connectivity and user experience.' },
    { number: '04', title: 'AI-powered Telecom Data Analytics', description: 'Utilizing AI, our telecom development services offer cutting-edge solutions in network optimization, predictive maintenance, demand forecasting, and IoT data analytics. Empowering telecom providers with advanced insights, we drive efficiency, reliability, and agility in operations, ensuring readiness for future demands and challenges.' },
    { number: '05', title: 'Intelligent Telecom Data Analytics', description: 'With proven expertise in telecom application development and integration, we offer a full-cycle development, re-engineering, and modernization of telecom infrastructure. From business analysis, design, and architecture to deployment, testing, and ongoing support, we ensure seamless solutions tailored to telecom industry requirements and challenges.' },
    { number: '06', title: 'Telecom Billing Software', description: 'Our Telecom Billing Software solutions offer to streamline the billing process from invoicing to revenue management, ensuring accuracy and efficiency. By simplifying operations, we enable precise record-keeping and enhanced revenue collection, empowering telecom businesses to thrive in a competitive landscape. Optimize your telecom operations with our custom telecom solutions.' },
    { number: '07', title: 'Telecom BI Solutions', description: 'Alpixn Technologies offers custom telecommunications BI services for analyzing telecom data, enabling providers to make informed decisions. From custom dashboards to predictive analytics, our expertise ensures efficient utilization of resources, improved customer satisfaction, and strategic business insights, fostering growth in the telecommunications industry.' },
    { number: '08', title: 'Third-Party Software Integration', description: 'Our Telecom Software Development Services specialize in seamless third-party integrations utilizing APIs and ESB frameworks. By ensuring correct operation, we minimize development costs and enhance functionality, enabling smooth operations and optimal performance for our clients.' },
    { number: '09', title: 'Telecom Security Management', description: 'We at Alpixn Technologies prioritize security with bespoke telecom security management software solutions. We ensure network integrity with end-to-end security solutions, safeguarding every device within the network. With a focus on protection, we empower businesses to thrive in an increasingly connected landscape.' }
];

const whyChooseUsTelecom = [
    { title: 'Broad Technology Spectrum', description: 'We possess expertise across diverse technologies, allowing us to deliver custom software solutions utilizing the latest tech advancements. From traditional telecom frameworks to emerging technologies, our proficiency ensures secure and future-proofed telecom software solutions that align with your unique requirements and business objectives.' },
    { title: 'Agile Development Methodology', description: 'Our Agile approach emphasizes collaboration, adaptability, and iterative development cycles. By breaking down projects into manageable sprints, we empower transparency, responsiveness, and faster delivery of high-quality telecom software that evolves alongside your evolving needs, ensuring maximum flexibility and customer satisfaction.' },
    { title: 'Accelerated Time to Market', description: 'Incorporating structured practices and streamlined processes, we expedite the development lifecycle without compromising quality. Through efficient planning, rapid prototyping, and continuous integration, we minimize time-to-market for your telecom software, enabling you to gain a competitive edge in the dynamic telecommunications landscape.' },
    { title: 'Industry Expert Team', description: 'Our team consists of dedicated, certified developers with deep domain expertise in the telecommunications industry. With a thorough understanding of industry trends, regulations, and best practices, we collaborate closely with you to conceptualize and implement solutions that address your specific challenges and capitalize on market opportunities effectively.' },
    { title: 'Long term maintenance and support', description: 'Beyond development, we offer 24*7 maintenance and support services to ensure the ongoing performance, reliability, and scalability of your telecom software. With proactive monitoring, timely updates, and responsive assistance, we safeguard your investment and empower your business for sustained success in the long run.' },
    { title: 'Modularity and Reliability', description: 'We design telecom software with a modular architecture and robust infrastructure, enhancing scalability, flexibility, and reliability. By adhering to industry standards, we enable seamless integration, easier maintenance, and superior performance, ensuring that your telecom solutions meet the highest standards of reliability and efficiency.' }
];

const clutchTestimonials = [
    { rating: '5.0', text: "They're a top-notch developer all around.", author: "Strategic Product Manager", company: "Patra Corp" },
    { rating: '5.0', text: "There's no job too big or small for the team to fix in rapid time.", author: "Co-Founder", company: "Shootzu" },
    { rating: '4.5', text: "They’re reliable, and the price value is very high.", author: "Co-Founder & CEO", company: "BlackGull" },
    { rating: '4.5', text: "Their team has a lot of backend development knowledge.", author: "Founder & Managing Director", company: "ImmoSnapp GmbH" },
    { rating: '5.0', text: "Their commitment to excellence and collaborative approach set them apart.", author: "Executive", company: "Sagita Learning" },
    { rating: '5.0', text: "The team is very friendly & responsive, they are always ready to connect via Meets and Zoom calls.", author: "VP Operations", company: "Transport Company" }
];

const engagementModelsTelecom = [
    {
        title: 'Offshore Development',
        description: 'Alpixn Technologies’ dedicated team model functions as an Offshore Development Center (ODC), delivering a tailored approach. This works exclusively on the client’s project, ensuring cost-effectiveness, scalability, optimized outcomes, efficiency, & high-quality standards.',
        points: ['Client-Centric Team Formation', 'Direct Reporting And Transparency', 'Scalability And Flexibility', 'Quality And Efficiency']
    },
    {
        title: 'Dedicated Team Model',
        description: 'Alpixn Technologies offers a team augmentation approach and access to top-notch UI and UX design services tailored to your specific needs. Ideal for short-term support or filling skill gaps, this model provides flexibility and immediate access to the expertise required.',
        points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
    },
    {
        title: 'Project-Based',
        description: 'Alpixn Technologies’ project-based engagement model offers a structured approach for well-defined projects within a set scope, time, and budget. This model guarantees timely, on-budget delivery, meeting quality standards, and fostering collaboration for successful outcomes.',
        points: ['Fixed Budget', 'Milestones & Deliverables', 'Resource Allocation', 'Risk Mitigation']
    },
];

const faqsTelecom = [
    { 
        q: 'What are the services you provided in your telecom software development?', 
        a: 'In our telecom software development services, we offer the industry’s best range of solutions tailored to meet the unique needs and challenges of the telecommunications industry. These services include–Telecom Application Development, Telecom Billing Software, Telecom Security Management Software, CRM Development and Integrations, Web Development, Custom Business Automation Solutions, ERP Systems, Task and Document Management Tools, Corporate Portals, and more. With our comprehensive range of telecom software development services, we aim to empower telecom providers with innovative solutions that drive efficiency, enhance customer satisfaction, and accelerate business growth.' 
    },
    { 
        q: 'How much does it cost to build a telecom software?', 
        a: "The cost of building custom telecom software varies significantly based on several factors, including the project's complexity, the number of features, integration requirements with existing systems (like OSS/BSS), and the size of the development team. A simple application might start in the tens of thousands of dollars, while complex, enterprise-grade platforms can run into hundreds of thousands or more. We recommend a detailed consultation to provide a precise quote tailored to your specific requirements." 
    },
    { 
        q: 'How long does it take to develop custom-built telecom software?', 
        a: "The development timeline for custom telecom software is directly related to its scope and complexity. A straightforward application with a clear feature set might take 3-6 months to develop. However, a comprehensive solution, such as a full-scale BSS/OSS or a complex VoIP system, could take a year or longer. Our agile development methodology allows us to deliver functional components in iterative sprints, providing value faster and allowing for adjustments throughout the process." 
    }
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

// --- NEW SECTIONS FOR TELECOM PAGE ---

const TelecomServicesSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="container mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
              Telecom Software Development Services We Offer
            </h2>
            <p className={`text-lg text-gray-400 max-w-4xl mx-auto mb-12 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
              We utilize cutting-edge technologies to empower businesses with the industry’s best tech stack, such as 5G and xRAN, using open-source technology or integrating solutions from leading cloud vendors, including AWS, GCP, and Azure. With the agile approach and dedicated teams, we improve software’s operational efficiency and drive innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {telecomServices.map((service, index) => (
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
            <div className="mt-12">
                <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
                    <input type="email" placeholder="Email id" className="flex-grow bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <select className="bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Please choose service</option>
                        {telecomServices.map(s => <option key={s.title}>{s.title}</option>)}
                    </select>
                </form>
                <motion.button 
                    className="mt-6 bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                >
                    Connect With Our Telecommunications Software Development Experts Now!
                </motion.button>
            </div>
          </div>
        </section>
    );
};

const WorkMasterySection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
                <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                    Our Dedicated Telecom Software Development Work Mastery
                </h2>
                <p className={`mt-4 text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                    Our dedicated Telecom Software developers offer a range of benefits, with certified professionals skilled in emerging technologies like AI, low code/no code, and IoT. Hire dedicated software developers to integrate core tech strength and 24/7 support, ensuring seamless maintenance from code to production, offering your project success and scalability.
                </p>
            </div>
        </div>
    );
};

const FeaturedCaseStudySection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-800 ring-1 ring-white/10 rounded-2xl p-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-2/5">
                        <h3 className="text-3xl font-bold mb-2">FM Integrated</h3>
                        <p className="text-blue-400 font-semibold mb-4">Unify All FM Operations On A Single Platform To Enhance Efficiency And Cut Costs.</p>
                        <ul className="space-y-3 mb-6">
                            {['Analyzed client’s operations and FM trends, and followed a structured dev process.', 'Conducted constructive user testing sessions during the development phase.', 'The work order and management feature was added to create, assign, and track.', 'Enhanced facility managers to oversee service providers and suppliers.'].map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                         <div className="flex flex-wrap items-center gap-2">
                             {['USA', 'REACT', 'FACILITY MANAGEMENT'].map(tag => <div key={tag} className="text-xs font-semibold text-gray-300 bg-gray-700 px-3 py-1 rounded-full">{tag}</div>)}
                         </div>
                    </div>
                    <div className="w-full md:w-3/5">
                        <p className="text-gray-300 mb-6 text-lg">Integrated FM Group, a leading facility management provider, collaborated with Alpixn Technologies to streamline operations. The developed platform integrates work orders, asset management, preventive maintenance, and vendor management, enhancing efficiency and reducing costs.</p>
                        <img src={StaffAugmentationImage} alt="FM Integrated Case Study" className="rounded-xl shadow-2xl shadow-blue-500/10" />
                        <div className="text-center mt-6">
                            <button className="text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center gap-2 mx-auto">View Case Study <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ExploreSolutionsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Explore Our Telecom Software Development Solutions
                    </h2>
                    <p className={`mt-4 text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies offers custom telecom software solutions that are high-value and evolutionary. We deliver software utilizing industry-leading technologies in the telecommunications industry to secure and maintain their businesses and networks, expand service coverage, and increase customer engagement.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {exploreSolutions.map((service, index) => (
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
}

const TestimonialsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>See what our clients have to say</h2>
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

const WhyChooseUsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
      <div ref={ref} className="py-24 bg-black">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
              Why Choose Alpixn Technologies as a Telecommunications Software Development Company?
          </h2>
          <p className={`max-w-4xl mx-auto text-lg text-gray-400 mb-16 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
              Alpixn Technologies offers custom telecommunications software development services with industry expertise, innovative solutions, and a commitment to excellence. With a proven track record, we deliver engaging software solutions for your business needs, ensuring reliability, security, and scalability to propel your business forward.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsTelecom.map((reason, index) => (
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

const UserGuideAccordion = () => {
    const [open, setOpen] = useState(0);
    const toggle = (index) => setOpen(open === index ? null : index);
    
    const userGuideContent = [
        {
            title: 'What is custom telecommunications software?',
            content: "Telecommunications software is a broad term encompassing diverse systems that manage, operate, and deliver communication services. It’s like the invisible backbone behind our calls, texts, video chats, and internet access. We offer custom telecom software development services tailored to your specific needs and requirements. It can manage networks (OSS), enable services (BSS), power communications (VoIP), and enhance user experiences. Our skilled telecom software engineers are dedicated to delivering high-quality software solutions for your telecom infrastructure. Partner with leading telecommunication software development firms for smart solutions and reliable support."
        },
        {
            title: 'Benefits of AI in the telecom industry?',
            content: "Artificial Intelligence (AI) is revolutionizing the telecom industry by enabling predictive network maintenance to prevent outages, optimizing network traffic in real-time to improve quality of service, and providing personalized customer experiences through AI-powered chatbots and recommendation engines. Furthermore, AI helps in fraud detection and enhances security, leading to significant cost savings and improved operational efficiency."
        },
        {
            title: 'What are software support services for Telecom?',
            content: "Software support services for telecom are crucial for ensuring the continuous, reliable operation of communication networks. These services include 24/7 technical support to resolve issues, proactive network monitoring to identify potential problems, regular software updates and patch management to maintain security and functionality, and long-term maintenance to ensure the scalability and performance of the software as the business grows. This ensures minimal downtime and a consistently high-quality service for end-users."
        }
    ];

    return (
        <div className="py-24 bg-gray-900/50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">User Guide To Custom Telecom Software Development</h2>
                <div className="max-w-4xl mx-auto">
                    {userGuideContent.map((item, index) => (
                        <div key={index} className="border-b border-gray-700 py-4">
                            <button onClick={() => toggle(index)} className="w-full flex justify-between items-center text-left text-lg font-semibold text-white">
                                <span>{item.title}</span>
                                <span className="text-blue-400 text-2xl">{open === index ? '−' : '+'}</span>
                            </button>
                            <motion.div
                                initial={false}
                                animate={{ height: open === index ? 'auto' : 0, opacity: open === index ? 1 : 0, marginTop: open === index ? '1rem' : '0' }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <p className="text-gray-400 pr-5">{item.content}</p>
                            </motion.div>
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Engagement Model</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies offers versatile engagement models for telecommunications software development services, providing innovative solutions to match clients’ unique requirements. Let’s explore these engagement models.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsTelecom.map((model, index) => (
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
                    {faqsTelecom.map((faq, index) => (
                        <div key={index} className="border-b border-gray-700 py-4">
                            <button onClick={() => toggle(index)} className="w-full flex justify-between items-center text-left text-lg font-semibold">
                                <span className="text-white">{faq.q}</span>
                                <span className="text-blue-400 text-2xl">{open === index ? '−' : '+'}</span>
                            </button>
                            <motion.div
                                initial={false}
                                animate={{ height: open === index ? 'auto' : 0, opacity: open === index ? 1 : 0, marginTop: open === index ? '1rem' : '0' }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <p className="text-gray-400">{faq.a}</p>
                            </motion.div>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect with Our Telecom Software Development Experts</h2>
                <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-400">Connect with our expert telecommunications software development engineers to add advanced, certified developers who integrate the latest tech to transform your concepts into engaging and seamless user experiences.</p>
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
const TelecomPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Telecom Software Development Services</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Alpixn Technologies offers tailor-made telecommunication software solutions that streamline your businesses with custom OSS/BSS software, VolP services, and other next-gen technological solutions. Our telecom software solutions ensure high-performance application development services, low latency, and stable operations.
                    </p>
                    <motion.button
                        className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get a custom quote
                    </motion.button>
                </motion.div>
                <motion.div
                    className="md:w-1/2 flex justify-center"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <img src={StaffAugmentationImage} alt="Telecom Software Development" className="w-full max-w-md rounded-lg" />
                </motion.div>
            </div>
          </div>
        </motion.section>

        <TrustedBy backgroundColor="bg-white" />

        <TelecomServicesSection />
        
        <WorkMasterySection />

        <FeaturedCaseStudySection />

        <ExploreSolutionsSection />

        <TestimonialsSection />

        <WhyChooseUsSection />

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
              Ready to Get Started With Our Telecom Software Development Services?
            </motion.h2>
            <motion.p
              className="text-lg mb-8 max-w-3xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ready to launch your vision? Our custom Telecom software development team is geared up to bring your ideas to life. Let’s embark on your unique project journey together, creating tailored solutions for your business needs.
            </motion.p>
            <motion.button
              className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get an Estimate of Your Project Today
            </motion.button>
          </div>
        </section>
        
        <UserGuideAccordion />

        <EngagementModelsSection />

        <FinalCtaSection />
        
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default TelecomPage;