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
const retailServices = [
    { title: 'Custom Retail Software Development', description: 'We at Alpixn Technologies deliver the retail software services you need, from retail custom POS software systems to inventory management software systems. Our retail software developers understand your requirements and develop custom retail software solutions that can scale the business, prevent fraud, work seamlessly with third-party tools, and more.' },
    { title: 'Pos Systems & Billing', description: 'Our expert custom POS software developers deliver seamless retail POS systems. We offer POS integrations built with automated invoicing, payment processing, and security features that work seamlessly with all payment forms, such as bank cards, checks, and mobile payments. Our solutions enable payment methods: by card, cash, phone, or wearable devices.' },
    { title: 'Commercial Operations', description: 'We deliver industry-leading retail software application solutions tailored for commercial operations. Our software services automate and streamline processes for product information, merchandise, and promotion management, delivering comprehensive tools to enhance efficiency and drive success in retail businesses.' },
    { title: 'Inventory Management', description: 'Our inventory management software services empower businesses—retailers, manufacturers, and suppliers with control and visibility across stores and warehouses. Our application development solutions facilitate accurate stock accounting, enable customer demand forecasting, and ensure optimized operations and enhanced efficiency throughout the supply chain.' },
    { title: 'Order Management', description: 'Our order management services enhance retail workflows with advanced order processing modules, automated distributed order management, inventory tracking, and omnichannel fulfillment. Our new-age software technologies capture orders from various channels, and intelligently route them for efficient fulfillment, offering doorstep delivery to in-store pickup.' },
    { title: 'Supply Chain & Logistics Management', description: 'We integrate intelligent tech like AI, IoT, and AR across supply chain and retail management software to streamline transportation, warehouse, logistics, and reverse logistics operations seamlessly. This ensures optimized efficiency across the board, facilitating smoother transportation management and increased productivity and cost-effectiveness.' }
];

const exploreRetailSolutions = [
    { number: '01', title: 'E-commerce Solutions', description: 'We develop exciting e-commerce solutions for online retailers, offering comprehensive features like product catalogs, shopping carts, and payment gateways. From UI/UX design to software development and support, our services ensure seamless omnichannel experiences, encompassing mobile apps, marketplaces, CRM solutions, and trade portals.' },
    { number: '02', title: 'Virtual Try-On Solutions', description: 'We at Alpixn Technologies offer virtual try-on software solutions, developed by AR and AI dedicated retail software developers, that cater to diverse industries. From AR/VR-based retail apps to virtual fitting rooms and immersive experiences, we provide innovative software development solutions to enhance the brand’s online shopping experiences with cutting-edge technology.' },
    { number: '03', title: 'Demand/Sales Forecasting', description: 'We develop intelligent software solutions offering demand forecasting and predictive analysis services, utilizing algorithms to analyze sales and market data to generate demand forecasts. Our solutions optimize inventory, ensure stock availability, and reduce over/understocking also automate processes by generating purchase orders based on previous demand patterns.' },
    { number: '04', title: 'Chatbot Development', description: 'We provide intelligent chatbot development services to enterprises. Utilizing AI and NLP technology, we integrate interactive chatbots, enhancing customer engagement and satisfaction. Offering 24/7 support, they minimize wait times and communicate fluently in multiple languages, broadening sales opportunities and enriching the customer experience.' },
    { number: '05', title: 'Recommendation Engines', description: 'Our certified retail software developers utilize collaborative filtering algorithms and provide recommendation engines for your existing IT infrastructure. Our solutions employ machine learning techniques such as clustering and matrix factorization to enhance accuracy and relevance, optimize user engagement, and drive sales.' },
    { number: '06', title: 'Retail Analytics Software', description: 'Retail analytics software aggregates and analyzes sales data, customer demographics, and inventory metrics to derive actionable insights. Employing data mining algorithms and statistical models enables retailers to identify trends, forecast demand, and optimize pricing strategies, facilitating informed decision-making and maximizing profitability.' },
    { number: '07', title: 'Mobile Apps Development', description: 'Mobile app development involves designing, coding, and testing applications for mobile devices. Utilizing platforms like Android or iOS and programming languages such as Java or Swift, retail software developers create intuitive and feature-rich apps tailored to specific user needs, ensuring optimal performance and user experience across devices.' },
    { number: '08', title: 'Staff Management Software', description: 'Staff management software automates HR tasks such as scheduling, attendance tracking, and performance evaluation. Featuring modules for shift planning, timekeeping, and employee feedback, it streamlines workforce management processes, improving operational efficiency and employee productivity.' },
    { number: '09', title: 'Multi-channel Retail Solutions', description: 'Multi-channel retail solutions integrate various sales channels, including online stores, brick-and-mortar outlets, and social media platforms, into a centralized system. Offering features like inventory synchronization, order management, and customer relationship management, they enable retailers to deliver seamless omnichannel experiences, enhancing customer satisfaction and loyalty.' }
];

const whyChooseUsRetail = [
    { title: 'Efficient Operations', description: 'Alpixn Technologies ensures efficient retail operations by leveraging streamlined processes and optimized workflows, enhancing productivity, and reducing overhead costs through their cutting-edge software solutions.' },
    { title: 'Advanced Tech Stack', description: 'With an advanced tech stack, Alpixn Technologies empowers retail businesses with cutting-edge technologies, enabling seamless integration of AI, IoT, blockchain, and other innovations to enhance customer experiences and drive growth.' },
    { title: '14+ Years Of Expertise', description: 'Alpixn Technologies’ leading industry technologies come with 14+ years of experience in retail application development, gaining insights and expertise that result in robust, scalable, and future-proof solutions tailored to the unique challenges and opportunities of the retail industry.' },
    { title: 'Certified Experts', description: 'Alpixn Technologies boasts a team of certified experts proficient in the latest technologies and methodologies, ensuring the highest quality standards in retail software development and maintenance—delivering exceptional results and value to clients.' },
    { title: 'Faster Delivery', description: 'Embrace a culture of continuous delivery with Alpixn Technologies, leveraging agile methodologies and DevOps practices to rapidly iterate, test, and deploy software updates, ensuring timely enhancements, bug fixes, and feature releases to meet evolving business needs and customer demands.' },
    { title: 'Client-Centric Approach', description: 'Experience a client-centric approach with Alpixn Technologies, where the needs, goals, and feedback of clients are prioritized throughout the software development lifecycle, promoting collaboration, transparency, and solutions that exceed expectations and drive business success.' }
];

const clutchTestimonials = [
    { rating: '5.0', text: "They're a top-notch developer all around.", author: "Strategic Product Manager", company: "Patra Corp" },
    { rating: '5.0', text: "There's no job too big or small for the team to fix in rapid time.", author: "Co-Founder", company: "Shootzu" },
    { rating: '4.5', text: "They’re reliable, and the price value is very high.", author: "Co-Founder & CEO", company: "BlackGull" },
    { rating: '4.5', text: "Their team has a lot of backend development knowledge.", author: "Founder & Managing Director", company: "ImmoSnapp GmbH" },
    { rating: '5.0', text: "Their commitment to excellence and collaborative approach set them apart.", author: "Executive", company: "Sagita Learning" },
    { rating: '5.0', text: "The team is very friendly & responsive, they are always ready to connect via Meets and Zoom calls.", author: "VP Operations", company: "Transport Company" }
];

const engagementModelsRetail = [
    { title: 'Offshore Development', description: 'Alpixn Technologies’ dedicated team model functions as an Offshore Development Center (ODC), delivering a tailored approach. This works exclusively on the client’s project, ensuring cost-effectiveness, scalability, optimized outcomes, efficiency, & high-quality standards.', points: ['Client-Centric Team Formation', 'Direct Reporting And Transparency', 'Scalability And Flexibility', 'Quality And Efficiency'] },
    { title: 'Dedicated Team Model', description: 'Alpixn Technologies offers a team augmentation approach and access to top-notch UI and UX design services tailored to your specific needs. Ideal for short-term support or filling skill gaps, this model provides flexibility and immediate access to the expertise required.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Alpixn Technologies’ project-based engagement model offers a structured approach for well-defined projects within a set scope, time, and budget. This model guarantees timely, on-budget delivery, meeting quality standards, and fostering collaboration for successful outcomes.', points: ['Fixed Budget', 'Milestones And Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsRetail = [
    { q: 'How are software services used in retail?', a: 'Software plays a vital role in the retail sector by facilitating growth, optimizing operations, and enhancing consumer experiences. Retailers leverage various software solutions including point of sale (POS) systems, inventory management, e-commerce platforms, CRM, analytics, loyalty programs, supply chain management, customer service, operations, reporting, and data security. Through digital solutions, retailers streamline processes, personalize customer interactions, make data-driven decisions, and ensure efficient operations in today’s dynamic retail landscape. Also, revolutionize your online sales platform with shopping cart software solutions that provide seamless user experiences.' },
    { q: 'How much time does a retail software development process take?', a: 'The timeline for retail software development varies based on the project\'s complexity. A basic Minimum Viable Product (MVP), such as a simple inventory tracker or POS system, might take 3 to 6 months. A comprehensive, feature-rich platform with omnichannel integrations, AI-powered analytics, and custom e-commerce capabilities can take 9 to 18 months or more. Our agile approach ensures we deliver value in incremental stages.' },
    { q: 'Do you provide custom retail software development services?', a: 'Yes, absolutely. Custom retail software development is at the core of what we do. We don’t believe in one-size-fits-all solutions. Our process begins with understanding your unique business challenges, workflows, and goals. From there, we design and build tailored software—whether it’s a custom POS system, an advanced inventory management platform, or a full e-commerce solution—that integrates seamlessly with your existing tools and scales with your business.' }
];

const userGuideContentRetail = {
    'What are the challenges in developing custom retail software?': {
        intro: "Developing custom retail software applications can be a rewarding experience, but it comes with its fair share of challenges. Partner with a leading retail software company to harness innovative technologies for your business’s success and overcome these challenges:",
        points: [
            { title: 'Defining clear requirements and goals:', text: 'Inadequate requirements gathering: Without a clear understanding of your needs and limitations, the software might not meet your expectations. This can lead to wasted time and resources.\nUnclear objectives and goals: What do you want to achieve with the software? Setting vague goals makes it difficult to measure success and create a focused solution.\nScope creep: Adding new features or changing requirements mid-development can inflate costs and delay the project.' },
            { title: 'Technical hurdles:', text: 'Integration with existing systems: Retail software applications often need to connect with multiple systems like inventory management, custom POS software, and accounting. Ensuring seamless and secure integration can be complex.\nTechnology stack selection: Choosing the right programming languages, frameworks, and databases is crucial for performance, security, and maintainability.\nData security and compliance: Retail software handles sensitive customer and financial data. Implementing robust security measures is essential.' },
            { title: 'Project management and resources:', text: 'Poor communication with stakeholders: Keeping everyone informed, aligned, and engaged throughout the process is crucial for smooth development.\nInsufficient budget or resources: Underestimating costs or not having enough skilled retail software developers can lead to delays and compromises.\nInexperienced or incompatible team members: Building a team with the right expertise and compatibility is key to a successful project.' },
        ],
        outro: "Collaborate with a trusted retail software development firm to explore new possibilities for your business. Hire retail software developers skilled in delivering custom retail solutions tailored to your unique retail needs. Switch to smarter software solutions for a retail business that optimizes operations and enhances customer satisfaction."
    },
    'Importance of Retail CRM software': {
        intro: "Retail CRM software plays a crucial role in modern retail businesses’ success, offering many benefits across various aspects of customer relationships and overall operations. Here’s why it’s so important:",
        points: [
            { title: 'Enhanced Customer Relationships:', text: 'Personalized Experiences: CRMs help you understand customer preferences, purchase history, and interactions, enabling personalized recommendations, offers, and marketing campaigns. This fosters stronger connections and loyalty.\nImproved Customer Service: With centralized customer data and interaction history readily available, your team can address inquiries and resolve issues faster and more effectively, leading to higher customer satisfaction.\nLoyalty Programs & Retention: CRMs facilitate targeted loyalty programs and promotions based on customer segments, driving repeat business and boosting revenue.' },
            { title: 'Increased Sales and Efficiency:', text: 'Lead Management & Conversion: CRMs streamline lead nurturing and sales processes, providing insights into customer behavior and helping convert leads into paying customers.\nTargeted Marketing: By leveraging customer data, you can create targeted marketing campaigns that resonate with specific customer segments, increasing return on investment.\nImproved Inventory Management: Understanding customer preferences and purchase patterns through CRMs helps optimize inventory management, reduce stockouts, and improve the availability of desired products.' },
            { title: 'Data-driven Decision Making:', text: 'Customer Insights: Retail CRM software provides valuable data on customer behavior, trends, and preferences, enabling informed decision-making on product offerings, promotions, and store operations.\nPerformance Analysis: Track sales performance, marketing campaign effectiveness, and customer service metrics, allowing you to identify areas for improvement and optimize your overall strategy.\nCompetitive Advantage: By leveraging customer data and insights, you can gain a competitive edge by better understanding your target audience and tailoring your offerings accordingly.' }
        ],
        outro: "Retail software solutions are paramount for diverse businesses and verticals like pharmaceuticals, logistics, food, and beverages. With our expert retail developers, experience seamless operations in pharmaceutical retail with advanced pharma retail software development solutions."
    },
    'Technological advancements in retail software development': {
        intro: "The retail landscape is undergoing a transformative journey, propelled by exciting advancements in software development. Here are some key trends reshaping the future of retail software development:",
        points: [
            { title: 'Artificial Intelligence (AI) and Machine Learning (ML):', text: 'Personalized shopping experiences: AI recommends products based on individual preferences, past purchases, and browsing behavior. This leads to increased satisfaction and loyalty.\nDemand forecasting: ML models predict future demand fluctuations, enabling optimized inventory management and preventing stockouts.\nChatbots and virtual assistants: Provide 24/7 customer support, answer product inquiries, and automate repetitive tasks.\nDynamic pricing: AI adjusts prices based on real-time factors like demand, competitor pricing, and customer segments, maximizing profitability.' },
            { title: 'Omnichannel Integration:', text: 'Seamless online-offline experiences: Customers can easily research online, buy in-store, and pick up curbside or have items delivered.\nUnified customer profiles: All customer data from various channels (online store, physical stores, mobile app) is consolidated for a holistic view and personalized engagement.\nInventory management software across channels: Real-time inventory visibility eliminates overselling and ensures product availability wherever customers choose to shop.' },
            { title: 'Emerging Technologies:', text: 'Augmented Reality (AR) and Virtual Reality (VR): Create immersive product experiences, allowing virtual try-ons, furniture placement visualization, and interactive product demos.\nRobotics: Automate various tasks, including warehouse operations, order fulfillment, and even in-store customer service.\nInternet of Things (IoT): Track product status, monitor store environment, and gather real-time data for improved inventory management and operational efficiency.\nVoice Commerce: Customers can search for products, place orders, and track deliveries using voice commands, offering a convenient and hands-free shopping experience.' }
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

// --- NEW SECTIONS FOR RETAIL PAGE ---

const RetailServicesSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="container mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
              Retail Software Development Services We Offer
            </h2>
            <p className={`text-lg text-gray-400 max-w-4xl mx-auto mb-12 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                Our retail software application services encompass the latest tech advancement integration into the retail supply chain to transform your business operations via automation and innovative solutions. Our dedicated teams have industry expertise and provide 360° support and maintenance throughout the project lifecycle.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {retailServices.map((service, index) => (
                <motion.div key={index} className="bg-gray-800 p-8 rounded-lg text-left transform transition duration-500 hover:scale-105 hover:bg-gray-700"
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
                        {retailServices.map(s => <option key={s.title}>{s.title}</option>)}
                    </select>
                </form>
                <motion.button className="mt-6 bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300" whileHover={{ scale: 1.05 }}>
                    Connect With Our Retail Software Development Experts Now!
                </motion.button>
            </div>
          </div>
        </section>
    );
};

const RetailWorkMasterySection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
                <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Our Dedicated Retail Software Development Work Mastery
                </h2>
                <p className={`mt-4 text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Our dedicated Retail Software developers offer a range of benefits, with certified professionals skilled in emerging technologies like AI, low code/no code, and IoT. Hire dedicated software developers to integrate core tech strength and 24/7 support, ensuring seamless maintenance from code to production, offering your project success and scalability.
                </p>
            </div>
        </div>
    );
};

const FeaturedCaseStudyRetail = () => {
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
                        <p className="text-gray-300 mb-6 text-lg">Alpixn Technologies collaborated with Payleadr to create a customizable platform, integrating a PCI-compliant payment gateway, mobile-centric web app, and efficient scheduling, streamlining transactions, enhancing customer support, and driving business growth.</p>
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

const ExploreRetailSolutionsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Explore Our Retail Software Development Solutions
                    </h2>
                    <p className={`mt-4 text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Our dedicated team delivers innovative retail software solutions, empowering the retail and logistics industries. Our retail software developers utilize game-changing technologies to make retail processes and operations smarter and more intelligent while enhancing overall logistical processes for increased productivity and cost-effectiveness.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {exploreRetailSolutions.map((service, index) => (
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

const WhyChooseUsRetailSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
      <div ref={ref} className="py-24 bg-gray-900/50">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
              Why Choose Alpixn Technologies as a Retail Software Development Company?
          </h2>
          <p className={`max-w-4xl mx-auto text-lg text-gray-400 mb-16 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
              Alpixn Technologies offers industry-leading retail software development due to its agile methodology, seamless integration of modern technologies, 24*7 availability, and provision of smart & innovative solutions. Stay ahead of the competition with our expertise in delivering intelligent, scalable, and innovative software solutions for retail businesses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsRetail.map((reason, index) => (
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

const UserGuideSidebarRetail = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentRetail)[0]);
    const content = userGuideContentRetail[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">User Guide To Custom Retail Software Development</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    {/* Sidebar */}
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentRetail).map(topic => (
                                <li key={topic}>
                                    <button
                                        onClick={() => setActiveTopic(topic)}
                                        className={`w-full text-left p-4 rounded-lg transition-colors duration-300 ${activeTopic === topic ? 'bg-blue-600 text-white font-bold' : 'bg-gray-800 hover:bg-gray-700'}`}>
                                        {topic}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </aside>
                    {/* Content */}
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
                            {content.outro && <p className="text-gray-400 mt-6">{content.outro}</p>}
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
                        Alpixn Technologies offers versatile engagement models for Retail application development services, providing innovative solutions to match clients’ unique requirements. Let’s explore these engagement models.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsRetail.map((model, index) => (
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
                    {faqsRetail.map((faq, index) => (
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect with Our Retail Software Development Experts</h2>
                <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-400">Connect with our expert retail software development engineers to add advanced, certified retail software developers who integrate the latest tech to transform your concepts into engaging and seamless user experiences.</p>
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
const RetailPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Retail Software Development Services</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Alpixn Technologies builds advanced retail software solutions to help retailers boost their operations, improve the customer experience, and ensure sustainable growth at each step of the retail value chain. We offer integration, process optimization, data analysis, and ML demand prediction services to improve your operations.
                    </p>
                    <motion.button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition" whileHover={{ scale: 1.05 }}>
                        Get a custom quote
                    </motion.button>
                </motion.div>
                <motion.div className="md:w-1/2 flex justify-center"
                    initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                    <img src={StaffAugmentationImage} alt="Retail Software Development" className="w-full max-w-md rounded-lg" />
                </motion.div>
            </div>
          </div>
        </motion.section>

        <TrustedBy backgroundColor="bg-white" />
        <RetailServicesSection />
        <RetailWorkMasterySection />
        <FeaturedCaseStudyRetail />
        <ExploreRetailSolutionsSection />
        <TestimonialsSection />
        <WhyChooseUsRetailSection />

        <section className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Get Started With Our Retail Software Development Services?
            </motion.h2>
            <motion.p className="text-lg mb-8 max-w-3xl mx-auto" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                Ready to launch your vision? Our custom retail software development team is geared up to bring your ideas to life. Let’s embark on your unique project journey together, creating tailored solutions for your business needs.
            </motion.p>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Get an Estimate of Your Project Today
            </motion.button>
        </section>
        
        <UserGuideSidebarRetail />
        <EngagementModelsSection />
        <FinalCtaSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default RetailPage;