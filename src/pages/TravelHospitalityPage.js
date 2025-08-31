import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- NEW DATA ARRAYS FOR TRAVEL & HOSPITALITY ---
const travelHospitalityServices = [
    { title: 'Mobile Hotel Applications', description: 'With innovative hotel management software solutions, we empower seamless booking of travel arrangements, from tickets to accommodations and itinerary planning. Our solutions provide AI-generated personalized recommendations and enhance your travel journey with interactive tech features.' },
    { title: 'Travel Portals Development', description: 'Our b2b travel portal development services offer cutting-edge web and mobile platforms, integrating technologies like React.js and React Native for seamless user experiences across any device. With advanced features such as real-time booking integration and personalized recommendations, we make planning and booking journeys effortless.' },
    { title: 'Booking Management System', description: 'Experience efficient booking management with our system, built on a cloud-native architecture using microservices and Kubernetes. Utilizing AI algorithms for predictive analytics and dynamic pricing, our solution optimizes inventory management and enhances revenue streams for hotels, airlines, and travel agencies.' },
    { title: 'Contactless Hospitality Management', description: 'We offer cost-effective, eLearning application development services. We build feature-rich applications integrating advanced tech like AI, AR/VR. From educational gaming and video streaming apps to teaching solutions for the differently-abled and language learning applications, we develop solutions that are engaging and responsive.' },
    { title: 'Booking Engines', description: 'Boost your online presence and revenue generation with our Booking Engines, powered by cloud-based architecture and serverless computing. Leveraging microservices and GraphQL for scalability and flexibility, our solution delivers fast and reliable booking experiences, driving conversion rates and maximizing revenue for travel businesses of all sizes.' },
    { title: 'Document Management System', description: 'Stay organized and compliant with our Document Management System, utilizing blockchain technology for secure document storage and encryption. Featuring automated workflows and version control, our solution ensures seamless collaboration and streamlined document handling for travel agencies, tour operators, and hospitality businesses.' }
];

const exploreTravelHospitalitySolutions = [
    { number: '01', title: 'Vehicle Tracking System', description: 'Ensure fleet efficiency and security with our Vehicle Tracking System, utilizing GPS technology and real-time monitoring. Offering route optimization and driver behavior analysis, our solution enhances operational efficiency and safety for vehicle fleets in the travel and transportation industry.' },
    { number: '02', title: 'Smart Rooms', description: 'Experience the future of hospitality with our Smart Rooms solution, leveraging IoT sensors and AI algorithms for automated room control and personalized guest experiences. From temperature and lighting adjustments to in-room entertainment, our solution enhances comfort and convenience for hotel guests.' },
    { number: '03', title: 'Virtual Tours', description: 'Immerse travelers in virtual experiences with our Virtual Tours solution, utilizing 360-degree video technology and virtual reality (VR) headsets. From destination previews to hotel room tours, our solution provides an immersive and interactive way for travelers to explore and plan their journeys.' },
    { number: '04', title: 'GDS creation & integration', description: 'Seamlessly connect with global distribution systems (GDS) with our creation and integration solution. Leveraging XML and SOAP APIs, our solution enables real-time access to inventory, pricing, and availability from multiple travel suppliers, ensuring comprehensive and up-to-date content for travel agencies and OTAs.' },
    { number: '05', title: 'Car Rental And Hire', description: 'Our solution features online booking and fleet management capabilities to simplify car rental and hire operations. Utilizing RFID technology and mobile apps for vehicle access, our solution offers a seamless and convenient experience for both rental businesses and customers.' },
    { number: '06', title: 'Agency And Agent Details', description: 'Simplify agency and agent management with our comprehensive solution, featuring role-based access control and centralized data management. Utilizing cloud-based architecture and RESTful APIs, our solution enables efficient collaboration and communication among agencies and agents in the travel ecosystem.' },
    { number: '07', title: 'Payment Management', description: 'Streamline payment processes with our Payment Management solution, utilizing blockchain technology for secure transactions and fraud prevention. Integrated with various payment gateways and digital wallets, our solution ensures seamless and secure transactions for businesses and customers in the travel industry.' },
    { number: '08', title: 'CRM Solutions', description: 'Maximize customer relationships with our CRM solutions, powered by AI-driven analytics and omnichannel communication capabilities. From personalized marketing campaigns to proactive customer service, our CRM solution helps travel businesses build lasting connections and drive loyalty in a competitive market.' },
    { number: '09', title: 'Travel Planning Solution', description: 'Optimize travel planning with our comprehensive Travel Planning Solution, leveraging AI algorithms and data analytics for personalized itinerary creation. Integrating with various travel APIs and platforms, our solution offers seamless booking, activity recommendations, and real-time updates, ensuring a hassle-free travel experience for users.' }
];

const whyChooseUsTravelHospitality = [
    { title: 'Dedicated Teams', description: 'Engage our Dedicated Teams, well-versed in Agile and Scrum methodologies, coupled with proficiency in the latest technologies like AI and cloud computing. Their expertise ensures focused efforts and efficient project management, delivering custom travel and hospitality software solutions efficiently.' },
    { title: 'Innovative Technologies', description: 'Stay ahead of the competition with our commitment to innovative technologies, including AI, IoT, and blockchain, seamlessly integrated into our solutions. Leveraging these cutting-edge tools, we develop innovative features and functionalities that enhance user experiences and drive business growth with our hospitality solutions development.' },
    { title: 'Domain Knowledge', description: 'Our skilled developers carry in-depth domain knowledge in travel and hospitality, acquired through years of experience and successful project implementations. Understanding the unique challenges and opportunities in the industry, we leverage this expertise to develop solutions that address your business needs effectively.' },
    { title: '100% Client Satisfaction', description: 'With our client-centric approach and commitment to quality, through transparent communication, timely delivery, and personalized attention to your requirements, we ensure that our hospitality management solutions not only meet but exceed your expectations, fostering long-term partnerships.' },
    { title: 'Consistent Quality', description: 'Experience consistent quality in every aspect of our travel and hospitality software development process. From requirement gathering to design, development, testing, and deployment, we adhere to industry best practices and quality standards, ensuring that our solutions are innovative, reliable, and future-proof.' },
    { title: '24*7 Support', description: 'Our 24*7 support services ensure prompt resolution to any technical issues or queries. With a dedicated support team available round-the-clock, we provide timely assistance and effective problem-solving, ensuring uninterrupted operations and maximum uptime for your custom hospitality software development.' }
];

const clutchTestimonials = [
    { rating: '5.0', text: "They're a top-notch developer all around.", author: "Strategic Product Manager", company: "Patra Corp" },
    { rating: '5.0', text: "There's no job too big or small for the team to fix in rapid time.", author: "Co-Founder", company: "Shootzu" },
    { rating: '4.5', text: "They’re reliable, and the price value is very high.", author: "Co-Founder & CEO", company: "BlackGull" },
    { rating: '4.5', text: "Their team has a lot of backend development knowledge.", author: "Founder & Managing Director", company: "ImmoSnapp GmbH" },
    { rating: '5.0', text: "Their commitment to excellence and collaborative approach set them apart.", author: "Executive", company: "Sagita Learning" },
    { rating: '5.0', text: "The team is very friendly & responsive, they are always ready to connect via Meets and Zoom calls.", author: "VP Operations", company: "Transport Company" }
];

const engagementModelsTravelHospitality = [
    { title: 'Dedicated Team', description: 'Alpixn Technologies’ dedicated team model functions as an Offshore Development Center (ODC), delivering a tailored approach. This works exclusively on the client’s project, ensuring cost-effectiveness, scalability, optimized outcomes, efficiency, & high-quality standards.', points: ['Client-Centric Team Formation', 'Direct Reporting And Transparency', 'Scalability And Flexibility', 'Quality And Efficiency'] },
    { title: 'Team Augmentation', description: 'Alpixn Technologies offers a team augmentation approach and access to top-notch UI and UX design services tailored to your specific needs. Ideal for short-term support or filling skill gaps, this model provides flexibility and immediate access to the expertise required.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project Based', description: 'Alpixn Technologies’ project-based engagement model offers a structured approach for well-defined projects within a set scope, time, and budget. This model guarantees timely, on-budget delivery, meeting quality standards, and fostering collaboration for successful outcomes.', points: ['Fixed Budget', 'Milestones And Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsTravelHospitality = [
    { q: 'What do travel agency software solutions include?', a: 'Travel agency software solutions typically incorporate administrative tools for client management, secure online payment processing, and an integrated online booking engine for flights, hotels, and transportation services, enhancing efficiency for both travelers and agents.' },
    { q: 'How much does it cost for travel and hospitality application development?', a: 'The cost to develop a travel app can range from $10,000 to over $250,000. [2] A basic app with simple features might cost between $10,000 and $30,000, while a mid-level app with more features like real-time updates and trip planning can range from $70,000 to $120,000. [2, 4, 5] Advanced, feature-rich apps with AI, AR, and complex integrations can exceed $120,000. [2]' },
    { q: 'How does Alpixn Technologies ensure data security and privacy in its travel software solutions?', a: 'Alpixn Technologies ensures data security and privacy by adhering to regulations like GDPR and CCPA, which involves practices like data encryption, secure authentication, and transparent data handling policies. [3, 15] Key strategies include implementing strong access controls, using multi-factor authentication, regularly updating software, and training employees on data protection to minimize risks from human error and cyber threats. [10, 12, 17]' }
];

const userGuideContentTravelHospitality = {
    'What are different types of travel and hospitality softwares?': {
        intro: 'Certainly, here are different types of travel and hospitality software:',
        points: [
            { title: 'Booking and Hotel Reservation Solution:', text: 'These software solutions facilitate the booking of flights, hotels, rental cars, and other travel-related services. They often integrate with global distribution systems (GDS) to provide real-time availability and pricing information.' },
            { title: 'Hotel Property Management Software (PMS):', text: 'PMS software is used by hotels, resorts, and other accommodation providers to manage reservations, check-ins, room assignments, housekeeping, billing, and guest communication.' },
            { title: 'Customer Relationship Management (CRM) Systems:', text: 'CRM software helps businesses in the travel and hospitality industry to manage interactions with customers, track leads, personalize marketing campaigns, and analyze customer data to improve service and loyalty.' },
            { title: 'Channel Management Systems:', text: 'These systems allow hotels and other accommodation providers to manage their online distribution channels, including OTAs (Online Travel Agencies), GDS, and their own websites, to optimize room inventory and maximize revenue.' },
            { title: 'Tour Operator Software:', text: 'Tour operators use this software to manage tour packages, itineraries, bookings, guides, transportation, and other logistics associated with organizing group travel experiences.' },
            { title: 'Point of Sale (POS) Systems:', text: 'POS software is used in restaurants, bars, gift shops, and other hospitality businesses to process payments, manage inventory, and track sales.' },
            { title: 'Revenue Management Systems:', text: 'These systems analyze market data, demand trends, and competitor pricing to optimize pricing strategies for hotel rooms, airline tickets, and other travel services, maximizing revenue and profitability.' },
            { title: 'Guest Experience Management Systems:', text: 'These software solutions focus on enhancing the guest experience by providing personalized services, managing guest feedback, and facilitating communication between guests and staff.' },
            { title: 'Travel Agency Software:', text: 'This type of software is used by travel agencies to manage client profiles, bookings, supplier relationships, commissions, accounting, and other aspects of their business operations.' },
            { title: 'Contactless Technology Solutions:', text: 'With the emergence of COVID-19, contactless technology solutions such as mobile check-in/check-out, digital room keys, and virtual concierge services have become increasingly important for hotels and other hospitality businesses to ensure guest safety and convenience.' },
        ],
        outro: ''
    },
    'Benefits of innovative software solutions in tourism and hospitality': {
        intro: 'Innovative software solutions are shaking up the tourism and hospitality industry, offering exciting benefits for both businesses and travelers. Here are some key advantages of hospitality software development services:',
        points: [
            { title: 'For travelers:', text: 'Enhanced experience: AI-powered recommendations for destinations, attractions, and activities based on individual preferences. Virtual tours and augmented reality experiences that immerse travelers before they even arrive. Chatbots for personalized assistance and real-time problem-solving.\nSeamless booking and planning: Blockchain technology for secure and transparent transactions. Flexible booking options with dynamic pricing and personalized packages. Smart contracts for automated refunds and cancellations.\nIncreased convenience: Mobile apps for easy access to booking, itinerary management, on-site navigation, and contactless payments. Keyless entry to hotels and attractions. Integration with local transportation and ticketing platforms.' },
            { title: 'For businesses:', text: 'Operational efficiency: Automated tasks like booking management, guest communication, and inventory control. Data analytics for informed decision-making and resource allocation. Streamlined operations through cloud-based solutions.\nPersonalized marketing and guest engagement: AI-powered marketing tools for targeted campaigns and promotions. Social media management platforms for direct interaction with guests. Loyalty programs and gamification to increase engagement and repeat business.\nDynamic pricing and revenue management: Algorithms to optimize pricing based on demand and market trends. Automated adjustments to maximize revenue while offering competitive rates. Revenue management insights to identify and capitalize on new opportunities.' }
        ],
        outro: 'Overall, innovative software solutions in tourism and hospitality have the potential to transform the industry, creating a more personalized, convenient, and enjoyable experience for both travelers and businesses. As technology continues to evolve, we can expect even more exciting advancements in the years to come.'
    },
    'What is the definition of travel software?': {
        intro: 'The definition of travel software solutions encompasses applications, platforms, and solutions designed specifically to facilitate various aspects of the travel industry, including booking, reservation management, itinerary planning, and customer relationship management. Travel software enables businesses such as travel agencies, airlines, hotels, and tour operators to streamline operations, enhance customer experiences, and optimize revenue generation processes within the dynamic and competitive travel sector.',
        points: [],
        outro: ''
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

// --- NEW SECTIONS FOR TRAVEL & HOSPITALITY PAGE ---

const TravelHospitalityServicesSection = ({services}) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="container mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
              Travel & Hospitality Software Development Services We Offer
            </h2>
            <p className={`text-lg text-gray-400 max-w-4xl mx-auto mb-12 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                Alpixn Technologies develops custom travel and hospitality software solutions, automating processes, and enhancing productivity. From seamless booking management to efficient sales recording and payment processing, our integrated systems ensure a flawless customer experience, empowering your business for success in the industry.
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
                    Connect With Our Travel & Hospitality Software Development Experts Now!
                </motion.button>
            </div>
          </div>
        </section>
    );
};

const DedicatedWorkMasterySection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
                <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Our Dedicated Hospitality Software Development Work Mastery
                </h2>
                <p className={`mt-4 text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Our dedicated Hospitality Software developers offer a range of benefits, with certified professionals skilled in emerging technologies like AI, low code/no code, and IoT. Hire dedicated software developers to integrate core tech strength and 24/7 support, ensuring seamless maintenance from code to production, offering your project success and scalability.
                </p>
            </div>
        </div>
    );
};

const FeaturedCaseStudyTravelHospitality = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-800 ring-1 ring-white/10 rounded-2xl p-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-2/5">
                        <h3 className="text-3xl font-bold mb-2">Payleadr</h3>
                        <p className="text-blue-400 font-semibold mb-4">A Direct Debit Payment Service System, Enhancing Security, Efficient Scheduling, Streamlining Operations, and Driving Business Growth</p>
                        <ul className="space-y-3 mb-6">
                             {['Secure transactions through the integration of a PCI-compliant payment gateway', 'Operational efficiency streamlined through schedulers and caching, reducing data latency', 'Platform’s customizable nature attracted a new client base, driving revenue', 'Custom development tailored to specific business needs and requirements'].map((point, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                         <div className="flex flex-wrap items-center gap-2">
                             {['Australia', 'Australia', 'REACT', 'FACILITY MANAGEMENT'].map(tag => <div key={tag} className="text-xs font-semibold text-gray-300 bg-gray-700 px-3 py-1 rounded-full">{tag}</div>)}
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

const ExploreTravelHospitalitySolutionsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Explore Our Travel & Hospitality Software Development Solutions
                    </h2>
                    <p className={`mt-4 text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Discover our industry-leading travel software development solutions, crafted to elevate your business. From intuitive travel portal development to innovative travel CRM software and contactless hospitality management solutions, we provide innovative technologies that meet your unique requirements.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {exploreTravelHospitalitySolutions.map((service, index) => (
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

const WhyChooseUsTravelHospitalitySection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
      <div ref={ref} className="py-24 bg-gray-900/50">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
              Why Choose Alpixn Technologies as a travel & hospitality Software Development Company?
          </h2>
          <p className={`max-w-4xl mx-auto text-lg text-gray-400 mb-16 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
              Alpixn Technologies offers a dedicated team for intelligent travel and hospitality software solutions. With in-house dedicated teams and an agile approach, our software engineers leverage state-of-the-art technology to enhance user experience and streamline operations, ensuring success in the dynamic travel industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsTravelHospitality.map((reason, index) => (
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

const UserGuideSidebarTravelHospitality = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentTravelHospitality)[0]);
    const content = userGuideContentTravelHospitality[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">User Guide To Custom Travel & Hospitality Software Development</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentTravelHospitality).map(topic => (
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
                            <p className="text-gray-400 mb-6 whitespace-pre-line">{content.intro}</p>
                            <div className="space-y-6">
                                {content.points.map((point, index) => (
                                    <div key={index}>
                                        <h4 className="text-xl font-bold text-blue-400 mb-2">{point.title}</h4>
                                        <p className="text-gray-300 whitespace-pre-line">{point.text}</p>
                                    </div>
                                ))}
                            </div>
                            {content.outro && <p className="text-gray-400 mt-6 italic whitespace-pre-line">{content.outro}</p>}
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
                        Alpixn Technologies offers versatile engagement models for travel and hospitality application development services, providing innovative solutions to match clients’ unique requirements. Let’s explore these engagement models.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsTravelHospitality.map((model, index) => (
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
                    {faqsTravelHospitality.map((faq, index) => (
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect with Our Travel & Hospitality Software Development Experts</h2>
                <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-400">Connect with our expert travel and hospitality software development engineers to add advanced, certified retail software developers who integrate the latest tech to transform your concepts into engaging and seamless user experiences.</p>
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
const TravelHospitalityPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Travel & Hospitality Software Development Services</h1>
                    <p className="text-lg md:text-xl mb-6">
                        We deliver customer-centric hospitality & travel software solutions with an industry-leading technological tech stack. Our dedicated team of certified developers builds bespoke solutions that make the user experience hassle-free and feature-rich making their journeys exciting.
                    </p>
                    <motion.button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition" whileHover={{ scale: 1.05 }}>
                        Get a custom quote
                    </motion.button>
                </motion.div>
                <motion.div className="md:w-1/2 flex justify-center"
                    initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                    <img src={StaffAugmentationImage} alt="Travel & Hospitality Software Development" className="w-full max-w-md rounded-lg" />
                </motion.div>
            </div>
          </div>
        </motion.section>

        <TrustedBy backgroundColor="bg-white" />
        <TravelHospitalityServicesSection services={travelHospitalityServices} />
        <DedicatedWorkMasterySection />
        <FeaturedCaseStudyTravelHospitality />
        <ExploreTravelHospitalitySolutionsSection />
        <TestimonialsSection />
        <WhyChooseUsTravelHospitalitySection />

        <section className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready To Get Started With Our Travel & Hospitality Software Development Services?
            </motion.h2>
            <motion.p className="text-lg mb-8 max-w-3xl mx-auto" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                Ready to launch your vision? Our custom Travel & Hospitality Software development team is geared up to bring your ideas to life. Let’s embark on your unique project journey together, creating tailored solutions for your business needs.
            </motion.p>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Get an Estimate of Your Project Today
            </motion.button>
        </section>
        
        <UserGuideSidebarTravelHospitality />
        <EngagementModelsSection />
        <FinalCtaSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default TravelHospitalityPage;