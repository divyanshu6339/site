import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE NODE.JS DEVELOPERS PAGE ---

const nodeJsExcellence = [
    { title: 'Node.js CMS Development', description: 'Hire Node.js developers to create dynamic, scalable CMS platforms with robust features and seamless content management tailored to your needs.', icon: 'nodejs-cms-development' },
    { title: 'Node.js API Development', description: 'We develop secure, high-performance APIs using Node.js, ensuring efficient communication and robust integrations for web and mobile applications.', icon: 'nodejs-api-development' },
    { title: 'Node Web App Development', description: 'Hire Node js programmers to develop feature-rich, real-time web applications using Node.js, ensuring optimal performance and user engagement.', icon: 'node-web-app-development' },
    { title: 'Node.js App Migration', description: 'Hire node js experts to migrate legacy systems to Node.js, enhancing scalability, performance, and compatibility with modern application architectures.', icon: 'nodejs-app-migration' }
];

const whyPartnerNodeJs = [
    { title: 'Stable & Secured Solutions', description: 'Hire nodejs developers to deliver stable, secure applications. Our Node.js development team ensures robust architectures and data protection for every project.' },
    { title: 'Superior Quality of Work', description: 'Hire node js programmers skilled in crafting high-performance solutions with clean, maintainable code that exceeds industry standards and client expectations.' },
    { title: 'Full Stack Developers', description: 'Hire full-stack Node.js developers who excel in frontend and backend development, ensuring seamless application functionality and dynamic user experiences.' },
    { title: 'Cost Effectiveness', description: 'Collaborate with our hire node js development company to access expert developers at competitive rates, optimizing your investment without compromising on quality.' }
];

const backendTechStack = [
    'Node js Developer', 'Python Developer', 'Php Developer', 'Java Developer', 'Golang Developer',
    'SQL Developer', '.Net Developer', 'Django Developer', 'Express Developer', 'Spring Boot Developer'
];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const nodeJsSolutions = [
    { title: 'Custom Node.js Development', description: 'Hire Node.js developers to create tailored applications that meet specific business needs, delivering innovative solutions with robust, scalable architectures.' },
    { title: 'Enterprise Node.js Web Apps', description: 'Hire Node.js development experts to build enterprise-grade web applications that ensure seamless performance and meet complex organizational demands.' },
    { title: 'Node.js Application Modernization', description: 'Modernize legacy systems by hiring Node.js consultants for efficient upgrades, enhanced compatibility, and performance improvements using the latest technologies.' },
    { title: 'Microservice Architecture Development', description: 'Hire Node.js programmers to design and implement modular microservices, ensuring flexibility, scalability, and seamless integration.' },
    { title: 'Real-Time Chat Apps', description: 'Build feature-rich real-time chat applications with our Node.js experts for enhanced communication, user engagement, and scalability.' },
    { title: 'Node.js Plugin Development', description: 'Hire Node.js developers to create custom plugins that extend your application’s functionality and optimize performance for specific requirements.' },
    { title: 'Node.js Developer Augmentation', description: 'Hire dedicated node js developers to augment your existing team, accelerating project delivery and enhancing technical expertise.' },
    { title: 'Node.js Development Consulting', description: 'Find Node.js developers to guide your project with expert consulting, addressing challenges and ensuring optimal implementation strategies.' },
    { title: 'Node.js Maintenance and Support', description: 'Hire remote Node.js developers for maintenance and support services, keeping your application secure, updated, and performing optimally.' }
];

const nodeJsTechnologies = ['Jest', 'Moongoose', 'Nest Js', 'Sequelize', 'Socketio', 'TypeScript', 'Webpack'];

const engagementModelsNodeJs = [
    { title: 'Dedicated Team', description: 'Our Dedicated Team model provides clients with a committed group of hire dedicated nodejs developers working exclusively on their projects. This model ensures deep focus, seamless integration with your in-house team, and flexibility in meeting evolving requirements.', points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'] },
    { title: 'Staff Augmentation', description: 'With Staff Augmentation, we integrate our hire node js experts into your existing team to boost capabilities and fill skill gaps. This model enhances productivity and speeds up development by leveraging our specialized talent alongside your internal resources.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Our Project-based model offers a unique solution for specific Node.js projects. We handle the entire project lifecycle from conception to delivery, ensuring timely completion and quality results based on your unique requirements and objectives.', points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsNodeJs = [
    { q: "How does node.js differ from other server-side programming languages?", a: "Node.js differs from other server-side languages like Python or PHP due to its event-driven, non-blocking I/O model, which allows it to handle many concurrent connections efficiently. This makes it exceptionally fast and scalable for I/O-heavy applications, whereas traditional languages often use a multi-threaded approach that can be more resource-intensive." },
    { q: "Which companies use node.js for software development?", a: "Many major tech companies use Node.js, including Netflix, Uber, PayPal, LinkedIn, and Trello. Its ability to handle high traffic, real-time data, and microservices architecture makes it a popular choice for large-scale enterprise applications." },
    { q: "Why should you outsource node.js development?", a: "Outsourcing Node.js development provides access to a global talent pool of specialized experts, which can be more cost-effective than hiring in-house. It also allows companies to scale their development team quickly, reduce development time, and focus on core business activities while benefiting from the expertise of a dedicated development firm." },
    { q: "What kind of applications can you build using node.js?", a: "Node.js is versatile and can be used to build a wide range of applications, including real-time chat apps, streaming services, single-page applications (SPAs), RESTful APIs, e-commerce platforms, IoT solutions, and collaborative tools." },
    { q: "What is the cost of node.js development?", a: "The cost of Node.js development varies based on project complexity, features, and the location and experience of the developers. A project can range from a few thousand dollars for a simple application to over $100,000 for a complex, enterprise-level solution." },
    { q: "Is Node.js suitable for building real-time applications?", a: "Yes, Node.js is exceptionally well-suited for real-time applications like chat apps, online gaming, and live data streaming. Its event-driven, non-blocking architecture and support for WebSockets enable efficient, two-way communication between the server and client." },
    { q: "Is Node.js good for eCommerce website development?", a: "Yes, Node.js is an excellent choice for e-commerce websites. Its high performance and scalability can handle large amounts of traffic and real-time data processing for inventory management and transactions, which are critical for online stores." },
    { q: "Why should I hire Node.js developers from your company?", a: "We are a trusted team of Nodejs developers with extensive experience in building high-performance applications. Our developers use the latest technologies to ensure your Node.js project is scalable, secure, and efficient." },
    { q: "How can I hire senior Node.js developers for my project?", a: "Hiring senior Node.js developers involves defining your project requirements, searching on talent platforms or partnering with a development company, conducting technical interviews to assess their expertise in Node.js core concepts and frameworks, and reviewing their portfolio of past projects." },
    { q: "Can I hire dedicated Node.js developers for my project?", a: "Yes, you can hire dedicated Node.js developers. This model provides you with a team of developers who work exclusively on your project, offering deep focus, better communication, and seamless integration with your existing team and processes." },
    { q: "What are the benefits of hiring offshore Node.js developers?", a: "Hiring offshore Node.js developers offers significant cost savings, access to a larger pool of skilled talent, and the ability to scale your team quickly. It also allows for around-the-clock development cycles, potentially speeding up project delivery." }
];

const userGuideContentNodeJs = {
    'Why Opt For Node.JS Development Services?': {
        intro: 'By implementing Node.js development services, businesses can harness these advantages to build robust, scalable, and high-performance applications tailored to their specific needs.',
        points: [
            { title: 'To Create Streaming Apps', text: 'Node.js’s built-in stream module enables developers to create efficient data-streaming applications. This allows for the processing of files while they are being uploaded, significantly enhancing performance for real-time applications like video streaming services.' },
            { title: 'Effective for Microservices', text: 'Node.js is highly effective for developing microservices. Its lightweight and modular nature allows developers to build small, independent services that communicate with each other, simplifying the architecture and enhancing maintainability and scalability.' },
            { title: 'IoT Apps Preferred', text: 'Node.js supports protocols like MQTT and WebSockets, which are essential for IoT applications. These protocols enable efficient, real-time communication between devices, making Node.js a preferred choice for developing IoT solutions that require reliable and fast data transmission.' },
            { title: 'Develop Scalable Apps', text: 'Node.js’s event-driven, non-blocking architecture makes it ideal for building scalable applications. It can handle high-peak loads and numerous simultaneous connections without performance degradation, ensuring your app remains responsive even under heavy traffic.' },
            { title: 'Fast Execution', text: 'Powered by Google’s V8 engine, Node.js executes JavaScript code at impressive speeds. This high-performance execution is crucial for applications requiring quick response times and efficient processing, making Node.js suitable for performance-critical projects.' },
            { title: 'Communicate With API', text: 'Experienced Node.js developers can efficiently make calls to external APIs. Node.js is well-suited for handling API interactions due to its non-blocking I/O model, allowing it to manage multiple API requests and responses concurrently, improving overall performance.' },
            { title: 'Develop Single-Page Apps', text: 'Node.js is a popular choice for developing single-page applications (SPAs) due to its ability to handle asynchronous data flow. This allows SPAs to dynamically update content without refreshing the entire page, providing a smooth and responsive user experience.' }
        ]
    },
    'Benefits of Using Node.js for Software Development': {
        intro: '',
        points: [
            { title: 'High Performance', text: 'Node.js is powered by Google’s V8 engine, which compiles JavaScript directly into machine code. This allows Node.js applications to execute faster and more efficiently, making it ideal for performance-critical projects. Node.js developers leverage this high performance to build responsive and efficient applications.' },
            { title: 'Better Scalability', text: 'Node.js’s event-driven, non-blocking architecture makes it highly scalable. Node.js developers can handle a large number of simultaneous connections with high throughput, making it perfect for applications that expect to grow and handle increasing user loads.' },
            { title: 'Full-Stack JavaScript', text: 'Node.js allows developers to use JavaScript for both server-side and client-side development. This unified language environment simplifies the development process and enhances productivity. Node.js development companies can build cohesive, maintainable codebases, streamlining the entire Node development process.' },
            { title: 'Real-Time Applications', text: 'Node.js is excellent for developing real-time applications like chat apps, online gaming, and live streaming services. Its non-blocking, event-driven nature enables real-time updates and interactions, which Node developers utilize to create dynamic, user-friendly experiences.' },
            { title: 'Robust Community and Support', text: 'Node.js boasts a strong community of developers and continuous contributions. This means regular updates, comprehensive documentation, and an abundance of shared resources. Node.js development companies benefit from this robust support, ensuring that Node applications are built on a solid foundation.' },
            { title: 'Cost Efficient Solutions', text: 'Node.js development can be more cost-effective due to the ability to use the same language across the stack, reducing the need for separate teams for front-end and back-end development. This unified approach helps Node.js development companies streamline workflows and reduce overall development costs.' },
            { title: 'Effective API Handling', text: 'Node.js is perfectly suited for making calls to external APIs, thanks to its non-blocking I/O model. This allows Node.js developers to handle multiple API requests and responses efficiently, improving the performance and responsiveness of Node.js applications.' }
        ]
    },
    'Types of Apps & Software Can Build with Node JS': {
        intro: '',
        points: [
            { title: 'Real-Time Applications', text: 'Node.js is ideal for real-time applications such as chat applications, live streaming platforms, and online gaming. Its non-blocking, event-driven architecture allows Node.js developers to build highly responsive and interactive experiences.' },
            { title: 'Single-Page Applications (SPAs)', text: 'Node.js is well-suited for developing single-page applications that require asynchronous data flow and dynamic content updates. By utilizing Node.js, developers can ensure a smooth and fast user experience, which is crucial for SPAs.' },
            { title: 'RESTful APIs', text: 'Building robust and scalable RESTful APIs is one of the core strengths of Node.js. Its efficient handling of multiple requests and responses makes it a go-to choice for creating APIs that interact with various front-end and back-end services.' },
            { title: 'Microservices Architecture', text: 'Node.js is perfect for developing microservices-based architectures. This modular approach allows for independent deployment and scaling of different services. By hiring a Node.js developer or a Node.js development company, you can build flexible and scalable applications using microservices.' },
            { title: 'Content Management Systems (CMS)', text: 'Node.js can be used to create powerful and customizable content management systems. With the ability to handle real-time data and support complex interactions, Node.js developers can build CMS solutions that offer high performance and flexibility, catering to your specific content management needs.' },
            { title: 'E-Commerce Platforms', text: 'Node.js is an excellent choice for building e-commerce platforms due to its scalability and performance. It can handle high-traffic loads and provide real-time updates for inventory and transactions. Whether you need to hire Node.js developers or consult with Node.js experts, Node.js is a strong option for e-commerce development.' },
            { title: 'Collaborative Tools', text: 'Applications that require real-time collaboration, such as project management tools and document editors, benefit from Node.js’s real-time capabilities.' },
            { title: 'Internet of Things (IoT) Applications', text: 'Node.js supports protocols like MQTT and WebSockets, making it suitable for developing IoT applications. Its ability to handle real-time communication and manage numerous simultaneous connections is advantageous for IoT solutions that require constant data exchange.' },
            { title: 'Social Networking Platforms', text: 'Building social networking platforms with Node.js allows for efficient handling of user interactions, data processing, and real-time updates. Node.js’s scalability and performance make it an ideal choice for creating dynamic and engaging social networking sites.' },
            { title: 'Enterprise-Level Applications', text: 'Node.js can be used to develop large-scale enterprise applications that require high performance, scalability, and efficiency. Senior Node.js developers and Node.js experts can build enterprise solutions that meet complex business requirements and handle substantial data loads.' }
        ]
    },
    'Industries That Benefit from Node.js Development': {
        intro: '',
        points: [
            { title: 'E-Commerce', text: 'The e-commerce industry benefits significantly from Node.js development due to its ability to handle high traffic and real-time updates. Node.js developers build scalable and fast e-commerce platforms that manage inventory, process transactions, and enhance user experiences efficiently.' },
            { title: 'Financial Services', text: 'In the financial sector, Node.js is used to develop applications requiring high performance and security. Node.js developers create real-time trading platforms, financial analytics tools, and secure payment gateways that handle complex transactions and large volumes of data.' },
            { title: 'Healthcare', text: 'Node.js applications in healthcare include telemedicine platforms, electronic health records, and real-time patient monitoring systems. Node.js experts utilize its real-time capabilities and scalability to build secure, efficient solutions that improve patient care and streamline healthcare operations.' },
            { title: 'Entertainment & Media', text: 'The entertainment and media industry uses Node.js to build streaming services, content management systems, and interactive media platforms. Node.js’s ability to handle real-time data and high traffic ensures seamless streaming and engaging user experiences.' },
            { title: 'Travel & Hospitality', text: 'Node.js development benefits travel and hospitality companies by enabling real-time booking systems, reservation management, and dynamic travel itineraries. Node.js developers build scalable applications that handle high volumes of data and provide seamless user interactions.' },
            { title: 'Education & E-Learning', text: 'In education and e-learning, Node.js is used to develop interactive learning platforms, virtual classrooms, and online course management systems. Node.js developers create responsive and scalable solutions that support real-time interactions and handle large amounts of educational content.' },
            { title: 'Logistics & Supply Chain', text: 'Node.js applications in logistics and supply chain management include real-time tracking systems, inventory management, and route optimization tools. Node.js experts use its scalability and performance to build solutions that enhance operational efficiency and provide real-time updates.' }
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

// --- NEW SECTIONS FOR HIRE NODE.JS DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top Node.js Developers</h3>
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

const NodeJsExcellenceSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Excellence of Our Node.js Developers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {nodeJsExcellence.map((service, index) => (
                        <motion.div key={index} className="bg-gray-800 p-8 rounded-lg text-center transform transition duration-500 hover:scale-105 hover:bg-gray-700"
                            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                            {/* Placeholder for icon */}
                            <div className="text-blue-400 mb-4 text-4xl mx-auto w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">?</div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const WhyPartnerSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
      <div ref={ref} className="py-24 bg-gray-900/50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Why Partner with Our Dedicated Node.js Development Team
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyPartnerNodeJs.map((reason, index) => (
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

const TechStackGridSection = () => {
    return (
        <div className="py-24 bg-black">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Hire From Our Pool of Backend Developers in the Tech Stack You Need</h2>
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {backendTechStack.map(tech => (
                        <button key={tech} className="bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                            {tech}
                        </button>
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
                    <h2 className="text-4xl md:text-5xl font-bold">Hire Nodejs developers for Reliable Software Solutions</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Our Node.js development services provide businesses with scalable, high-performance applications, seamless API integration, real-time data processing capabilities, robust security, microservices architecture, and reduced development costs and time, all tailored to meet your specific needs and goals.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {nodeJsSolutions.map((solution, index) => (
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

const FeaturedCaseStudyNodeJs = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Our Work Speaks for Itself</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Explore how our hire node js development company has transformed businesses by delivering scalable, secure, and cost-effective solutions tailored to meet diverse industry needs and challenges.
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

const UserGuideSidebarNodeJs = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentNodeJs)[0]);
    const content = userGuideContentNodeJs[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Essential Guide to Hiring Best Node.js Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentNodeJs).map(topic => (
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
                            {content.intro && <p className="text-gray-400 mb-6">{content.intro}</p>}
                            <div className="space-y-6">
                                {content.points.map((point, index) => (
                                    <div key={index}>
                                        <h4 className="text-xl font-bold text-blue-400 mb-2">{point.title}</h4>
                                        <p className="text-gray-300 whitespace-pre-line">{point.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
};

const TechnologiesSection = () => {
    return(
        <div className="py-20 bg-gray-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Technologies Powering Our Node.js Solutions</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {nodeJsTechnologies.map(tech => (
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

const HiringStepsSection = () => {
    const steps = [
        { icon: 'call', title: 'Schedule a Call', description: 'Share your project details and developer requirements with our experts.' },
        { icon: 'group', title: 'Select Your Team', description: 'Interview and handpick the best developers tailored to your needs.' },
        { icon: 'monitor-progress', title: 'Start Your Project', description: 'We handle onboarding while you focus on launching your project seamlessly.' }
    ];

    return (
        <div className="py-24 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Node js Programmers in 3 Simple Steps</h2>
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Engagement Models to Hire Dedicated Nodejs Developers</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies offers versatile engagement models for Node.js application development services, providing innovative solutions. Get the best fit for your business.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsNodeJs.map((model, index) => (
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
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">FAQs</h2>
                <div className="max-w-4xl mx-auto">
                    {faqsNodeJs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-700 py-4">
                            <button onClick={() => toggle(index)} className="w-full flex justify-between items-center text-left text-lg font-semibold">
                                <span className="text-white"> <span className="text-blue-400 mr-2">{String(index+1).padStart(2,'0')}</span>{faq.q}</span>
                                <span className="text-blue-400 text-2xl">{open === index ? '−' : '+'}</span>
                            </button>
                            <motion.div initial={false} animate={{ height: open === index ? 'auto' : 0, opacity: open === index ? 1 : 0, marginTop: open === index ? '1rem' : '0' }} transition={{ duration: 0.3 }} className="overflow-hidden">
                                <p className="text-gray-400 pl-8">{faq.a}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


// --- MAIN PAGE COMPONENT ---
const HireNodeJSPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire Node.js Developers<br/>Partner With Top-Rated Node.js Programmers</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Hire nodejs developers to build projects with real-time functionality, efficient data processing, and scalable architecture. Our dedicated Node.js developers specialize in creating data-intensive applications, custom web apps, RESTful APIs, SPAs, and more.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Advanced Node.js Expertise</div>
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
        <NodeJsExcellenceSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Transform Your Software Projects?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire Our Node.js Developers
            </motion.button>
        </section>
        <WhyPartnerSection />
        <TechStackGridSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Build Scalable, Future-Ready Applications with Our Top Node.js Developers
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Call
            </motion.button>
        </section>

        <FeaturedCaseStudyNodeJs />
        <UserGuideSidebarNodeJs />
        <TechnologiesSection />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireNodeJSPage;