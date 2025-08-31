import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- NEW DATA ARRAYS FOR FACILITY MANAGEMENT ---
const facilityServices = [
    { title: 'Computerized Maintenance Management Systems (CMMS)', description: 'Our CMMS software streamlines maintenance operations, work order management, and asset tracking. These healthcare CMMS and facility maintenance services tools ensure efficient building maintenance management for national facility maintenance companies.' },
    { title: 'Integrated Workplace Management Systems (IWMS)', description: 'Our IWMS solutions offer a centralized platform for managing facilities, assets, space, and maintenance operations. These integrated facility management companies’ tools enable data-driven decision-making and real-time insights for optimizing building management.' },
    { title: 'Computer-Aided Facility Management (CAFM) Software', description: 'Our CAFM software streamlines facility management processes through automated maintenance tracking, space optimization, and asset lifecycle management. This integrated facility management system enhances operational efficiency and reduces costs.' },
    { title: 'AI ML integrated Solutions', description: 'We leverage AI and ML capabilities to drive smart facility management. These intelligent solutions automate tasks, predict maintenance needs, and optimize resource allocation, providing cutting-edge facility management services for leading FM companies.' },
    { title: 'Space Management and Hoteling Solutions', description: 'Our space utilization solutions enable agile workspace management, hoteling, and optimized space allocation. These integrated facility management tools drive cost savings and productivity for commercial facility maintenance and property maintenance management.' },
    { title: 'Mobile Applications for Facility Management', description: 'Our mobile apps empower on-the-go facility teams with access to maintenance requests, asset data, and building insights. These smart facilities management tools enhance responsiveness and operational excellence for leading facilities companies.' }
];

const exploreFacilitySolutions = [
    { number: '01', title: 'Predictive Asset Tracking Software', description: 'Our AI-driven predictive asset tracking software enables proactive maintenance and optimizes asset lifecycle management for facility maintenance companies and integrated facility management firms through real-time monitoring and analytics.' },
    { number: '02', title: 'Inventory Management Solution', description: 'Our inventory management solution streamlines procurement, stock control, and asset tracking processes for facilities companies, ensuring efficient resource utilization and cost optimization across building maintenance operations.' },
    { number: '03', title: 'Maintenance Management', description: 'Our comprehensive maintenance management platform empowers facility management services firms with tools for preventive maintenance scheduling, work order management, and vendor coordination, driving operational excellence.' },
    { number: '04', title: 'Work Order Management Solutions', description: 'Our work order management solutions enable streamlined request handling, efficient technician dispatching, and real-time status tracking for facility management teams in healthcare facilities management and commercial building maintenance.' },
    { number: '05', title: 'Building Maintenance & Operations', description: 'Our building maintenance and operations software equips facilities maintenance companies with tools for managing HVAC, electrical, plumbing, and other critical building systems, ensuring regulatory compliance and optimal performance.' },
    { number: '06', title: 'Enterprise Facilities Management', description: 'Our enterprise-grade facilities management solutions offer centralized control and visibility across multiple sites, enabling global facilities management companies to drive consistency and streamline operations at scale.' },
    { number: '07', title: 'Smart Maintenance Management Software', description: 'Leveraging IoT and AI, our smart maintenance management software provides predictive insights, automated workflows, and real-time monitoring for proactive maintenance in smart facilities management environments.' },
    { number: '08', title: 'Third-Party Integrations', description: 'Our open architecture supports seamless integrations with leading ERP, CMMS, BMS, and other third-party systems, enabling a unified facility management ecosystem for integrated facility services companies.' },
    { number: '09', title: 'Integrated Central Reservation Systems (CRS)', description: 'Our CRS solutions facilitate efficient space management and hoteling services, enabling property facility management teams to optimize workspace utilization and enhance employee experiences.' }
];

const whyChooseUsFacility = [
    { title: 'Experienced Developers', description: 'Our software development dedicated team comprises expert software developers with an average experience of 5+ years in diverse technologies and domains. Their deep technical expertise enables them to deliver innovative software solutions.' },
    { title: 'Advanced Tech Stack', description: 'With an advanced tech stack, Alpixn Technologies empowers retail businesses with cutting-edge technologies, enabling seamless integration of AI, IoT, blockchain, and other innovations to enhance customer experiences and drive growth.' },
    { title: 'Agile Principles', description: 'We at Alpixn Technologies embrace agile development methodologies. We prioritize collaboration, adaptability, and continuous improvement, ensuring swift development cycles and responsiveness to changing project needs and market demands.' },
    { title: 'Cross-functional Teams', description: 'Our diverse teams bring together expertise from various domains, promoting innovation, problem-solving, and collaborative perspectives to deliver innovative and smarter CRM solutions that address all aspects of various industries and client requirements.' },
    { title: '24*7 Support', description: 'Our 24*7 support services ensure prompt resolution to any technical issues or queries. With a dedicated support team available round-the-clock, we provide timely assistance and effective problem-solving, ensuring uninterrupted operations.' },
    { title: 'Talent Quality', description: 'Alpixn Technologies employs a rigorous screening process, ensuring only the top 5% of software developers are hired. Our developers possess exceptional technical skills, problem-solving abilities, and a deep understanding of industry best practices.' }
];

const clutchTestimonials = [
    { rating: '5.0', text: "They're a top-notch developer all around.", author: "Strategic Product Manager", company: "Patra Corp" },
    { rating: '5.0', text: "There's no job too big or small for the team to fix in rapid time.", author: "Co-Founder", company: "Shootzu" },
    { rating: '4.5', text: "They’re reliable, and the price value is very high.", author: "Co-Founder & CEO", company: "BlackGull" },
    { rating: '4.5', text: "Their team has a lot of backend development knowledge.", author: "Founder & Managing Director", company: "ImmoSnapp GmbH" },
    { rating: '5.0', text: "Their commitment to excellence and collaborative approach set them apart.", author: "Executive", company: "Sagita Learning" },
    { rating: '5.0', text: "The team is very friendly & responsive, they are always ready to connect via Meets and Zoom calls.", author: "VP Operations", company: "Transport Company" }
];

const engagementModelsFacility = [
    { title: 'Dedicated Team', description: 'Alpixn Technologies provides a fully managed, dedicated team of facility management software developers. We offer long-term collaboration, seamless integration with your existing processes, and flexibility to scale resources as needed for project development.', points: ['Client-Centric Approach', 'Direct Reporting And Transparency', 'Scalability And Flexibility', 'Quality And Efficiency'] },
    { title: 'Team Augmentation', description: 'We extend your in-house capabilities by adding our skilled facility management software experts from Alpixn Technologies. It provides quick access to specialized talent, filling skill gaps and accelerating project timelines while maintaining the development process.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'For clients with well-defined facility management software requirements, Alpixn Technologies offers a project-based model. This approach provides end-to-end development services, from conceptualization to deployment, with a focus on delivering top-notch solutions.', points: ['Fixed Budget', 'Milestones And Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsFacility = [
    { q: 'What is facilities management software?', a: 'Facilities management software is a software program tool that aids facilities management companies and facility maintenance companies in efficiently managing their buildings and assets. It integrates functionalities like maintenance management, space management, and facility asset management, streamlining operations for improved efficiency and cost savings across various facility management services.' },
    { q: 'How much does facility management software cost?', a: "The cost of facility management software varies widely based on factors like the number of users, the size of the facility, and the specific features required. Pricing models can range from $100 to over $1,000 per month. [2] Some providers charge per user, per site, or based on square footage, and there are often initial setup or implementation fees. [2, 5]" },
    { q: 'What are the 4 Pillars of facility management?', a: 'The four pillars of facility management are People, Processes, the Building, and Technology. [1, 4] This framework ensures that a facility is managed holistically, focusing on the needs of occupants (People), creating efficient workflows (Processes), maintaining the physical structure (Building), and leveraging technology for optimization and data-driven decisions. [8]' }
];

const userGuideContentFacility = {
    'Benefits of Facility Management Software': {
        intro: 'Facility management software offers numerous advantages for organizations across various industries:',
        points: [
            { title: 'Enhanced Efficiency:', text: 'Automating routine tasks and centralizing information streamlines operations, reducing manual errors and saving time.' },
            { title: 'Cost Reduction:', text: 'Better resource allocation and preventive maintenance lead to significant cost savings in the long run.' },
            { title: 'Improved Asset Management:', text: 'Comprehensive tracking of facility assets extends their lifespan and optimizes their usage.' },
            { title: 'Data-Driven Decision Making:', text: 'Advanced analytics provide insights for strategic planning and resource allocation.' },
            { title: 'Compliance Management:', text: 'Automated tracking ensures adherence to regulatory requirements and industry standards.' },
            { title: 'Sustainability:', text: 'Energy management features contribute to more sustainable and eco-friendly operations.' },
            { title: 'Enhanced User Experience:', text: 'For both facility managers and building occupants, through better space management and prompt maintenance.' }
        ],
        outro: ''
    },
    'Advantages of Outsourcing Facility Management': {
        intro: 'Outsourcing facility management to specialized facilities management companies or integrated facility management services providers offers several benefits:',
        points: [
            { title: 'Expertise:', text: 'Access to specialized knowledge and best practices in facility management.' },
            { title: 'Cost-Effectiveness:', text: 'Reduced overhead costs and more predictable expenses through service agreements.' },
            { title: 'Focus on Core Business:', text: 'Allows organizations to concentrate on their primary operations while experts handle facility management.' },
            { title: 'Scalability:', text: 'Easier to scale services up or down based on changing needs.' },
            { title: 'Technology Access:', text: 'Benefit from advanced facility management systems without direct investment.' },
            { title: 'Risk Mitigation:', text: 'Professional facility services companies often provide better risk management and compliance adherence.' },
            { title: 'Global Reach:', text: 'For international organizations, global facilities management providers offer consistent service across locations.' }
        ]
    },
    'What Software Does Facility Management Use?': {
        intro: 'Facility management utilizes a variety of software solutions to operate effectively:',
        points: [
            { title: 'Computerized Maintenance Management Systems (CMMS):', text: 'For managing maintenance operations and work orders.' },
            { title: 'Integrated Workplace Management Systems (IWMS):', text: 'Comprehensive solutions covering space management, maintenance, and more.' },
            { title: 'Building Information Modeling (BIM) Software:', text: 'For visualizing and managing building infrastructure.' },
            { title: 'Energy Management Systems:', text: 'To monitor and optimize energy consumption.' },
            { title: 'Space Management Software:', text: 'For efficient allocation and utilization of workspace.' },
            { title: 'Asset Management Tools:', text: 'To track and manage facility assets throughout their lifecycle.' },
            { title: 'IoT-enabled Facilities Management Platforms:', text: 'Leveraging smart sensors for real-time monitoring and control.' }
        ]
    },
    'What are the different types of Facilities Management Systems?': {
        intro: 'Facilities management systems can be categorized into several types, each catering to specific needs within the broad spectrum of facility management, from general building maintenance to specialized applications. The choice of system depends on the organization’s size, industry, and specific requirements.',
        points: [
            { title: 'Standalone CMMS:', text: 'Focused primarily on maintenance management and work order processing.' },
            { title: 'Integrated Facility Management Systems:', text: 'Comprehensive platforms covering multiple aspects of facility management.' },
            { title: 'Building Automation Systems (BAS):', text: 'For controlling and monitoring building mechanical and electrical equipment.' },
            { title: 'Space and Move Management Systems:', text: 'Specialized in optimizing space utilization and managing relocations.' },
            { title: 'Environmental and Energy Management Systems:', text: 'Focused on sustainability and energy efficiency.' },
            { title: 'Facility Asset Management Systems:', text: 'Centered on tracking and maintaining facility assets.' },
            { title: 'Healthcare Facility Management Systems:', text: 'Tailored for the unique needs of healthcare facilities, including compliance with medical regulations.' },
            { title: 'Smart Facilities Management Systems:', text: 'Incorporating IoT and AI for predictive maintenance and automated controls.' },
            { title: 'Cloud-Based Facility Management Solutions:', text: 'Offering accessibility and scalability through cloud technology.' },
            { title: 'Mobile Facility Management Apps:', text: 'Enabling on-the-go access and management of facility-related tasks.' }
        ]
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

// --- NEW SECTIONS FOR FACILITY MANAGEMENT PAGE ---

const FacilityServicesSection = ({services}) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="container mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
              Facility Management Services We Offer
            </h2>
            <p className={`text-lg text-gray-400 max-w-4xl mx-auto mb-12 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
              Our facility management services encompass custom software development, system integration, consulting, maintenance, and support. With proven industry expertise and next-gen tech stack, our software solutions streamline operations and maximize productivity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div key={index} className="bg-gray-800 p-8 rounded-lg text-left transform transition duration-500 hover:scale-105 hover:bg-gray-700"
                  initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-12">
                <motion.button className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300" whileHover={{ scale: 1.05 }}>
                    Connect With Our Facility Management Software Development Experts Now!
                </motion.button>
            </div>
          </div>
        </section>
    );
};

const ProvenExcellenceSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
                <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Our Proven Excellence
                </h2>
                <p className={`mt-4 text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Our facility management software developers offer a range of benefits, with certified professionals skilled in emerging technologies like AI, low code/no code, and IoT. Our software developers integrate core tech strength and 24/7 support, ensuring seamless maintenance from code to production, offering your project success and scalability.
                </p>
            </div>
        </div>
    );
};

const FeaturedCaseStudyFacility = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-800 ring-1 ring-white/10 rounded-2xl p-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-2/5">
                        <h3 className="text-3xl font-bold mb-2">CertVault</h3>
                        <p className="text-blue-400 font-semibold mb-4">State-Of-The-Art Cloud-Based Certificate Vault. Crafting Secure, Efficient, and User-Centered Digital Solutions</p>
                        <ul className="space-y-3 mb-6">
                             {['Comprehensive analysis to assess web application functionalities and architecture', 'Highly secure platform enabling seamless certificate upload and access, enhancing UX', 'Blockchain-based solutions ensure the integrity and verification of uploaded certificates', 'Robust data security measures implemented for a secure and  future-proof solution'].map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                         <div className="flex flex-wrap items-center gap-2">
                             {['USA', 'US', 'REACT', 'FACILITY MANAGEMENT'].map(tag => <div key={tag} className="text-xs font-semibold text-gray-300 bg-gray-700 px-3 py-1 rounded-full">{tag}</div>)}
                         </div>
                    </div>
                    <div className="w-full md:w-3/5">
                        <p className="text-gray-300 mb-6 text-lg">Alpixn Technologies partnered with Patra Corporation to develop a secure cloud-based certificate vault, enabling instant access to financial documents, streamlining processes, enhancing the customer experience, and reducing costs. This results in a successful partnership with repeat business.</p>
                        <img src={StaffAugmentationImage} alt="CertVault Case Study" className="rounded-xl shadow-2xl shadow-blue-500/10" />
                        <div className="text-center mt-6">
                            <button className="text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center gap-2 mx-auto">View Case Study <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ExploreFacilitySolutionsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Types of Facility Management Solutions We Develop
                    </h2>
                    <p className={`mt-4 text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies specializes in innovative facility management solutions. We develop cutting-edge software for building automation, maintenance tracking, space optimization, energy monitoring, asset management, work order processing, and security systems.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {exploreFacilitySolutions.map((service, index) => (
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

const WhyChooseUsFacilitySection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
      <div ref={ref} className="py-24 bg-gray-900/50">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
              Why Choose Alpixn Technologies as Your Facility Management Software Development Company?
          </h2>
          <p className={`max-w-4xl mx-auto text-lg text-gray-400 mb-16 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
              Alpixn Technologies delivers high-tech facility management solutions with in-house dedicated teams and an agile approach. Our diverse industry expertise and innovative tech stack incorporation ensure our solutions are future-proof, aligning with your unique requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsFacility.map((reason, index) => (
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

const UserGuideSidebarFacility = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentFacility)[0]);
    const content = userGuideContentFacility[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Facility Management Software Development</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentFacility).map(topic => (
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
                            <p className="text-gray-400 mb-6">{content.intro}</p>
                            <div className="space-y-6">
                                {content.points.map((point, index) => (
                                    <div key={index}>
                                        <h4 className="text-xl font-bold text-blue-400 mb-2">{point.title}</h4>
                                        <p className="text-gray-300 whitespace-pre-line">{point.text}</p>
                                    </div>
                                ))}
                            </div>
                            {content.outro && <p className="text-gray-400 mt-6 italic">{content.outro}</p>}
                        </div>
                    </main>
                </div>
            </div>
        </section>
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
                        Alpixn Technologies offers versatile engagement models for facility management software development services, providing innovative solutions to match clients’ unique requirements. Let’s explore these engagement models.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsFacility.map((model, index) => (
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
                    {faqsFacility.map((faq, index) => (
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Us To Hire Skilled Facility Management Software Developers</h2>
                <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-400">Connect with our expert facility management software developers to add advanced, certified developers who integrate the latest tech to transform your concepts into engaging and seamless user experiences.</p>
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
const FacilityManagementPage = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <motion.section className="relative bg-gradient-to-r from-blue-900 via-black to-black text-white py-20 pl-5 pr-4 sm:pl-10 sm:pr-6 md:pl-16 lg:pl-24"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center">
                <motion.div className="md:w-1/2 mb-10 md:mb-0"
                    initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Facility Management Software Development Services</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Alpixn Technologies provides high-end facility management services for various industries. Our custom-built software solutions are intelligent and reliable, backed by dedicated, certified facility software developers. With 14+ years of extensive experience and domain knowledge, our services take your businesses ahead of market trends.
                    </p>
                    <motion.button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition" whileHover={{ scale: 1.05 }}>
                        Get a custom quote
                    </motion.button>
                </motion.div>
                <motion.div className="md:w-1/2 flex justify-center"
                    initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                    <img src={StaffAugmentationImage} alt="Facility Management Software Development" className="w-full max-w-md rounded-lg" />
                </motion.div>
            </div>
          </div>
        </motion.section>

        <TrustedBy backgroundColor="bg-white" />
        <FacilityServicesSection services={facilityServices} />
        <ProvenExcellenceSection />
        <FeaturedCaseStudyFacility />
        <ExploreFacilitySolutionsSection />
        <TestimonialsSection />
        <WhyChooseUsFacilitySection />

        <section className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to launch your vision? Our custom facility management software development team is geared up to bring your ideas to life.
            </motion.h2>
            <motion.p className="text-lg mb-8 max-w-3xl mx-auto" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                Let’s embark on your unique project journey together, creating tailored solutions for your business needs.
            </motion.p>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Get an Estimate of Your Project Today
            </motion.button>
        </section>
        
        <UserGuideSidebarFacility />
        <EngagementModelsSection />
        <FinalCtaSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default FacilityManagementPage;