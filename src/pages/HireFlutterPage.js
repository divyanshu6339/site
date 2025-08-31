import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE FLUTTER DEVELOPERS PAGE ---

const flutterStrengths = [
    { title: 'Custom Flutter Development', description: 'Leverage our expertise to hire Flutter app developers for tailored solutions that address unique business challenges with cutting-edge technologies.', icon: 'custom-flutter-development' },
    { title: 'Cross-Platform Applications', description: 'Hire dedicated Flutter app developers to build responsive, feature-rich, high-performing cross-platform mobile, web, and desktop applications.', icon: 'cross-platform-applications-flutter' },
    { title: 'Flutter Dart Apps', description: 'Hire Flutter programmers to develop Flutter Dart-based applications that offer unparalleled user experience and streamlined codebases for global businesses.', icon: 'flutter-dart-apps' },
    { title: 'Flutter Enterprise Apps', description: 'Hire Flutter expert teams to develop enterprise-grade apps that ensure secure, scalable, and efficient operations for diverse business ecosystems.', icon: 'flutter-enterprise-apps' }
];

const whatYouGetFlutter = [
    { title: 'Extensive Tech Expertise', description: 'When you hire Flutter programmers from us, you gain access to seasoned engineers proficient in crafting cutting-edge, scalable, and efficient Flutter applications. Our expertise ensures top-notch development standards and adherence to best practices in cross-platform app development.' },
    { title: 'Future-Ready Architecture', description: 'Hire expert Flutter app developers to design robust, modular architectures tailored for scalability and seamless integrations. We ensure your applications are ready to adapt to evolving technologies and market demands, keeping your solutions ahead of the competition.' },
    { title: 'Values-Driven Development', description: 'By choosing to hire a dedicated Flutter developer, you align with a team that emphasizes transparency, collaboration, and user-focused designs. Our developers prioritize delivering value through solutions that enhance operational efficiency and user experience.' },
    { title: 'Post-Launch Support', description: 'With our offshore Flutter app development services, you receive end-to-end support, including maintenance and updates, ensuring your applications remain reliable and secure post-deployment. We are committed to your long-term success in the digital landscape.' }
];

const flutterTechExpertise = ['Riverpod', 'Hive', 'Getex', 'Flutter SDK', 'Firebase', 'Bloc', 'Dart'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const flutterSolutions = [
    { title: 'Flutter App UI/UX Design', description: 'Hire Flutter app developers to design intuitive, user-centric interfaces delivering seamless experiences across platforms, emphasizing performance and aesthetic perfection.' },
    { title: 'Flutter App Migration', description: 'With Flutter hiring, ensure smooth migration of your existing apps to Flutter, retaining functionality while leveraging advanced cross-platform features.' },
    { title: 'Flutter POS App Development', description: 'Hire a dedicated Flutter developer to create secure, feature-rich Point-of-Sale solutions optimized for fast and reliable retail operations to enhance business growth.' },
    { title: 'Flutter TV App Development', description: 'Hire Flutter engineers to develop interactive TV applications with high-performance playback, optimized for different screen resolutions and smart device compatibility.' },
    { title: 'Flutter State Management', description: 'Hire expert Flutter app developers skilled in implementing efficient state management solutions, ensuring consistent performance and easy scalability for your applications.' },
    { title: 'Flutter API Integration', description: 'Hire Flutter programmers to integrate custom APIs seamlessly, enabling efficient communication between services and enhancing application functionality.' },
    { title: 'Flutter Consulting Services', description: 'Hire Flutter consultants to receive expert guidance on optimizing your app development strategy and achieving your business goals efficiently with vetted flutter developers.' },
    { title: 'Flutter Game Development', description: 'Hire Flutter agency specialists to build immersive, performance-driven games leveraging Flutter’s capabilities for stunning graphics and responsive gameplay.' },
    { title: 'FlutterFlow App Development', description: 'With offshore Flutter app development, our developers leverage FlutterFlow to create visually appealing apps rapidly, reducing development time without compromising quality.' }
];

const engagementModelsFlutter = [
    { title: 'Dedicated Team', description: 'Assemble a dedicated team of Flutter developers focused exclusively on your project. Ensure expert-level attention, smooth integration, and consistent progress aligned with your business goals.', points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'] },
    { title: 'Staff Augmentation', description: 'Enhance your existing team with skilled Flutter developers to bridge expertise gaps, boost productivity, and accelerate timelines—all while preserving your current team structure and workflow.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Hire Flutter developers on a project-based model for focused and efficient delivery of specific objectives. Ideal for well-defined projects with clear goals and timelines, ensuring timely and cost-effective results.', points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsFlutter = [
    { q: 'What steps should I follow to hire a Flutter Developer?', a: 'To hire a Flutter developer, start by clearly defining your project requirements and the specific skills you need. Next, source candidates from reputable platforms or development agencies. Conduct a thorough screening process that includes reviewing portfolios and technical interviews. Finally, choose an engagement model that suits your project and onboard the selected developer. [1, 2, 6]' },
    { q: 'What can our Flutter Developers do for you?', a: 'Our Flutter developers can build high-performance, visually appealing, and scalable cross-platform applications for mobile, web, and desktop from a single codebase. They handle everything from UI/UX design and custom widget development to API integration, state management, and post-launch maintenance.' },
    { q: 'How does Alpixn\'s pre-screening process work?', a: 'Our pre-screening process is rigorous. We start with a resume review, followed by a technical assessment to evaluate their coding skills and knowledge of Dart and Flutter. Candidates then go through multiple rounds of interviews, including a technical round with senior architects and a final HR round to assess soft skills and cultural fit.' },
    { q: 'How do you manage it if I\'m not satisfied with a candidate?', a: 'Client satisfaction is our priority. If you are not satisfied with a developer’s performance, we offer a replacement policy. We will work with you to understand the issues and provide a more suitable candidate from our talent pool, ensuring a smooth transition for your project.' },
    { q: 'How much does it cost to hire a Flutter developer?', a: 'The cost varies based on experience, location, and the complexity of the project. On average, hourly rates can range from $25 to over $100. [7, 8, 12] A simple Flutter app might cost between $10,000 and $25,000, while a complex, feature-rich application could exceed $50,000. [7, 8, 12]' },
    { q: 'What should I take care of while hiring Flutter app developers?', a: 'When hiring, look for a strong portfolio of completed Flutter projects, proficiency in the Dart programming language, experience with state management solutions like BLoC or Riverpod, and knowledge of integrating RESTful APIs and Firebase services. [14, 15, 17] Also, assess their problem-solving and communication skills. [14]' },
    { q: 'What are the modes of communication through which we can get in touch with hired Flutter developers?', a: 'We use a variety of modern communication tools to ensure seamless collaboration. You can connect with your hired developers through platforms like Slack for instant messaging, Jira for project management, and video conferencing tools like Zoom or Google Meet for regular meetings and updates.' }
];

const userGuideContentFlutter = {
    'What Is a Flutter Developer?': {
        intro: 'A Flutter developer is a software expert skilled in building dynamic, high-performance applications using Flutter, Google’s powerful open-source UI toolkit. These professionals specialize in creating cross-platform applications with a single codebase, ensuring consistent performance across Android, iOS, web, and desktop platforms. Flutter developers possess in-depth knowledge of the Dart programming language, Flutter widgets, state management solutions (e.g., Provider, Riverpod, or BLoC), and seamless integration with backend services. By using Flutter’s hot-reload feature, they accelerate the development process, allowing for quick iterations and refined user experiences. Hire Flutter developers to harness the full potential of this cutting-edge framework, whether you’re building MVPs, full-scale apps, or modernizing existing applications for improved functionality and design.',
        points: []
    },
    'Why Hire a Flutter Developer?': {
        intro: '',
        points: [
            { title: 'Cross-Platform Development Expertise', text: 'Flutter developers eliminate the need for separate native development teams by delivering apps for multiple platforms with a unified codebase. By hiring dedicated Flutter app developers, you save time and reduce costs while ensuring a native-like performance and UI experience.' },
            { title: 'Faster Development with Advanced Tools', text: 'Flutter developers leverage advanced tools and features like hot reload, pre-built widgets, and native code interoperability to significantly reduce development cycles. When you hire a Flutter engineer, your projects are completed more efficiently without compromising on quality.' },
            { title: 'Scalability and Customization', text: 'Flutter app developers excel at creating scalable applications, making it easier to adapt to future business needs. By hiring a dedicated Flutter developer, you gain access to custom solutions tailored to your specific project requirements, ensuring robust performance and high user engagement.' },
            { title: 'Cost-Effective Solutions for All Business Sizes', text: 'Whether you’re a startup or an enterprise, Flutter developers offer cost-effective solutions that maximize your ROI. With the ability to build apps for multiple platforms simultaneously, hiring a Flutter consultant or offshore Flutter app development team minimizes overall expenditure without sacrificing quality.' },
            { title: 'Seamless Integration and Maintenance', text: 'Flutter developers are proficient in integrating third-party APIs, Firebase, and backend services. They also provide long-term maintenance, ensuring your apps remain secure, updated, and functional. Hire Flutter mobile app developers to ensure your applications evolve with your business needs.' }
        ],
        outro: 'Why Choose Alpixn Technologies for Flutter Hiring?\n\nAs a Flutter software development firm, Alpixn Technologies offers access to a pool of highly skilled dedicated Flutter app developers. Our developers are well-versed in modern app development practices, ensuring every project meets the highest standards of performance and reliability. Hire Flutter development services from us to benefit from:\n\n- Custom app solutions tailored to your business goals\n- A dedicated team of experienced developers ensures seamless project execution\n- Transparent communication and agile methodologies\n- Competitive pricing for superior quality outcomes'
    },
    'When to Consider Hiring a Flutter Developer?': {
        intro: '',
        points: [
            { title: 'Building a New App', text: 'Hire Flutter programmers to develop modern, feature-rich apps with a polished user interface for iOS, Android, and web platforms.' },
            { title: 'Optimizing Existing Applications', text: 'Hire Flutter engineers to modernize your legacy systems with Flutter’s efficient framework, improving performance and UI consistency.' },
            { title: 'Scaling Your Development Team', text: 'Whether you need additional expertise or faster delivery, hire remote Flutter developers or a Flutter agency for project augmentation.' },
            { title: 'Accessing Expertise in Niche Features', text: 'For advanced functionality like AR, animations, or advanced state management, hire expert Flutter app developers with proven technical proficiency.' }
        ]
    },
    'What Makes Flutter an Ideal Platform for Cross-Platform App Development?': {
        intro: 'Flutter has redefined cross-platform app development by offering a framework that combines performance, versatility, and cost-effectiveness. Businesses can leverage Flutter to create seamless applications across multiple platforms with a single codebase. Here’s why Flutter stands out:',
        points: [
            { title: 'Unified Codebase for Multiple Platforms', text: 'Flutter allows developers to build applications for iOS, Android, web, and desktop from a single codebase. By hiring Flutter app developers, you can significantly reduce development time and costs while maintaining consistent performance and design across platforms.' },
            { title: 'Rich and Customizable Widgets', text: 'Flutter’s library of pre-built and customizable widgets enables developers to create visually stunning UIs that mimic native app experiences. Businesses that hire a dedicated Flutter developer can ensure their applications deliver superior user experiences tailored to their brand identity.' },
            { title: 'High-Performance Rendering Engine', text: 'Powered by the Skia graphics engine, Flutter delivers smooth animations and lightning-fast rendering. Hire Flutter experts to build high-performance apps that excel in speed, responsiveness, and user satisfaction.' },
            { title: 'Hot Reload for Faster Iterations', text: 'Flutter’s hot reload feature allows developers to instantly see changes in the app without restarting the development process. This accelerates testing, debugging, and iteration cycles, ensuring timely project delivery. Hire dedicated Flutter app developers to take full advantage of this feature for streamlined workflows.' },
            { title: 'Easy Integration with Backend Services', text: 'Flutter seamlessly integrates with popular backend services like Firebase, enabling features like real-time databases, authentication, and cloud storage. When you hire a Flutter mobile app developer, they bring expertise in connecting front-end and back-end systems for robust app functionality.' }
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

// --- SECTIONS FOR HIRE FLUTTER DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top Flutter Developers</h3>
        <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="Contact Number" className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Business Email" className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="Company Name" className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Describe Your Query" rows="4" className="w-full bg-gray-700 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">Submit</button>
        </form>
    </div>
);

const FlutterStrengthsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Excellence of Our Certified Flutter Developers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {flutterStrengths.map((service, index) => (
                        <motion.div key={index} className="bg-gray-800 p-8 rounded-lg text-center transform transition duration-500 hover:scale-105 hover:bg-gray-700"
                            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                            <div className="text-blue-400 mb-4 text-4xl mx-auto w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                                {/* Placeholder for icons */}
                                {service.icon.substring(0,2)}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const WhatYouGetSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
      <div ref={ref} className="py-24 bg-gray-900/50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Why Partner with Our Dedicated Flutter Development Team
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatYouGetFlutter.map((reason, index) => (
              <div key={reason.title} className={`p-8 bg-gray-800 rounded-2xl text-left transition-all duration-500 ease-out hover:bg-gray-700 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <h3 className="text-2xl font-bold text-blue-400 mb-3">{reason.title}</h3>
                <p className="text-gray-300 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-blue-400 font-semibold text-xl mt-12">Have a Question? <a href="#" className="underline hover:text-blue-300">Talk to an Expert ⊙</a></p>
        </div>
      </div>
    );
};

const TechExpertiseSection = () => {
    return (
        <div className="py-24 bg-black">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Expertise of Our Flutter Developers</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {flutterTechExpertise.map(tech => (
                        <div key={tech} className="text-center">
                            <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto flex items-center justify-center ring-1 ring-white/10">
                                <span className="text-white font-semibold text-lg">{tech}</span>
                            </div>
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
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>What Our Clients Say</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {clientTestimonials.slice(0, 3).map((testimonial, index) => (
                        <div key={index} className={`p-8 bg-gray-800 ring-1 ring-white/10 rounded-2xl transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                            <div className="font-bold text-white">{testimonial.author}</div>
                            <div className="text-sm text-gray-400">{testimonial.company}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ReliableSolutionsSection = () => {
    return(
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">Power Your Projects with Our Vetted Flutter Developers</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Scalable applications, expert developers, custom solutions, seamless integrations, cutting-edge technology, robust support, and future-proof development to drive your business’s digital transformation effortlessly.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {flutterSolutions.map((solution, index) => (
                        <div key={index} className="bg-gray-900/50 p-6 rounded-lg ring-1 ring-white/10 hover:ring-blue-500/50 transition-all">
                            <h3 className="text-2xl font-bold mb-3 text-blue-400">{solution.title}</h3>
                            <p className="text-gray-400">{solution.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeaturedCaseStudyFlutter = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Our Work Speaks for Itself</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Explore how our Flutter developers delivered cutting-edge, scalable solutions tailored to client needs, ensuring seamless performance, engaging UI/UX, and measurable business success.
                </p>
            </div>
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
                             {['USA', 'US', 'REACT', 'FACILITY MANAGEMENT'].map(tag => <div key={tag} className="text-xs font-semibold text-gray-300 bg-gray-700 px-3 py-1 rounded-full">{tag}</div>)}
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

const UserGuideSidebarFlutter = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentFlutter)[0]);
    const content = userGuideContentFlutter[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Hire Flutter Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentFlutter).map(topic => (
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
                            {content.intro && <p className="text-gray-400 mb-6 whitespace-pre-line">{content.intro}</p>}
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

const HiringStepsSection = () => {
    const steps = [
        { icon: 'call', title: 'Schedule a Call', description: 'Share your project details and developer requirements with our experts.' },
        { icon: 'group', title: 'Select Your Team', description: 'Interview and handpick the best developers tailored to your needs.' },
        { icon: 'monitor-progress', title: 'Start Your Project', description: 'We handle onboarding while you focus on launching your project seamlessly.' }
    ];

    return (
        <div className="py-24 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top Flutter Developers in 3 Simple Steps</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mb-4">{index + 1}</div>
                            <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                            <p className="text-gray-400 max-w-xs">{step.description}</p>
                        </div>
                    ))}
                </div>
                <button className="mt-12 bg-blue-500 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-600 transition text-lg">
                    Hire Top 1% Talent Now
                </button>
            </div>
        </div>
    );
};

const EngagementModelsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Engagement Models to Hire Best Flutter Programmers</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies offers flexible engagement models for Flutter development services, providing customized solutions to meet your specific requirements. Explore our engagement options.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsFlutter.map((model, index) => (
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
                    {faqsFlutter.map((faq, index) => (
                        <div key={index} className="border-b border-gray-700 py-4">
                            <button onClick={() => toggle(index)} className="w-full flex justify-between items-center text-left text-lg font-semibold">
                                <span className="text-white">{faq.q}</span>
                                <span className="text-blue-400 text-2xl">{open === index ? '−' : '+'}</span>
                            </button>
                            <motion.div initial={false} animate={{ height: open === index ? 'auto' : 0, opacity: open === index ? 1 : 0, marginTop: open === index ? '1rem' : '0' }} transition={{ duration: 0.3 }} className="overflow-hidden">
                                <p className="text-gray-400" dangerouslySetInnerHTML={{ __html: faq.a }}></p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


// --- MAIN PAGE COMPONENT ---
const HireFlutterPage = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 via-black to-black text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                <motion.div className="md:w-1/2"
                    initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire Experienced Flutter Developers<br/>Onboard Top-Tier Flutter Talents</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Our dedicated Flutter developers bring creativity and efficiency to your mobile and web app projects. Partner with us to build dynamic, scalable, and high-performance solutions that turn your vision into reality.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Advanced Flutter Expertise</div>
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>100% Quality Assurance</div>
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>5+ Years Avg Experience</div>
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>NDA-Backed Confidentiality</div>
                    </div>
                </motion.div>
                <motion.div className="md:w-1/2 flex justify-center"
                    initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                    <HireDeveloperForm />
                </motion.div>
            </div>
          </div>
        </section>

        <TrustedBy backgroundColor="bg-white" />
        <FlutterStrengthsSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Transform Your Software Projects?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire Our Expert Flutter Developers
            </motion.button>
        </section>
        <WhatYouGetSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Build Scalable, Future-Ready Solutions with Our Top Flutter Developers
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Call
            </motion.button>
        </section>

        <FeaturedCaseStudyFlutter />
        <UserGuideSidebarFlutter />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireFlutterPage;