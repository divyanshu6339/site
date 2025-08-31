import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE GOLANG DEVELOPERS PAGE ---

const golangExcellence = [
    { title: 'Golang Microservices Development', description: 'Our Golang developers specialize in creating lightweight, scalable microservice architectures, ensuring faster, more efficient app performance.', icon: 'golang-microservices-development' },
    { title: 'Golang AI Development Solutions', description: 'Our Go programmers deliver intelligent AI-powered solutions tailored to enhance business operations, improve error handling, and automate complex processes.', icon: 'golang-ai-development-solutions' },
    { title: 'Golang Cloud App Development', description: 'Hire Go developers to help you develop complex cloud solutions for flexibility and reliability across cloud platforms like AWS, Google Cloud, and Azure.', icon: 'golang-cloud-app-development' },
    { title: 'Reduce Development Costs and Time', description: 'Our Golang developers ensure the timely delivery of high-performance applications, allowing you to save both time and money without compromising on quality.', icon: 'reduce-development-costs-and-time' }
];

const whyPartnerGolang = [
    { title: 'Industry expert Go developers', description: 'Our Go developers are seasoned professionals with experience in diverse industries. They bring top-notch expertise to ensure high-quality, scalable, and efficient solutions tailored to your business needs.' },
    { title: 'Agile Working Model', description: 'We follow the Agile methodology for faster, more adaptable development cycles. This approach allows us to respond quickly to changes and deliver solutions that align with your evolving project goals.' },
    { title: 'Full Stack Developers', description: 'Our full-time Golang developers provide end-to-end services, from front-end user interfaces to back-end systems such as ReactJS, AngularJS, MongoDB, Strings, Docker, Vuejs, and more.' },
    { title: '24*7 Support', description: 'We provide 24/7 support to ensure the continuous and efficient functioning of your Golang applications. Our dedicated team of Go developers is always available to resolve any issues and keep high-load systems running smoothly.' }
];

const golangTechExpertise = ['Docker', 'Echo', 'Fiber', 'Gin', 'Go-Module', 'Gorm', 'Swagger', 'CHI', 'Mongo DB'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const golangSolutions = [
    { title: 'Full-Stack Development with Go', description: 'Our full-stack Go developers provide complete development services, from front-end interfaces to back-end infrastructure, ensuring smooth, unified application performance across every layer.' },
    { title: 'Go for Cloud and Network Services', description: 'Our Golang developers are experts in building secure, scalable cloud and network services, ensuring that your infrastructure can handle growing demands and data loads effectively.' },
    { title: 'Golang for Mobile Development', description: 'Leverage our Golang expertise to develop fast, secure mobile applications that work seamlessly across platforms. We build apps that are scalable and adaptable to future advancements.' },
    { title: 'Streamlined Apps Development', description: 'We streamline your app development process with Golang. Hire Golang developers to create cross-platform apps, delivering high-performance, scalable, and efficient software solutions tailored to your specific business needs.' },
    { title: 'Migration and Upgrade', description: 'Our Go language developers ensure smooth migration execution to migrate your existing project to Golang-based architecture. Our Golang developers also test and optimize various project components as needed.' },
    { title: 'Multi-chain solution', description: 'We build robust, decentralized multi-chain blockchain solutions using Golang, offering expertise in various web3 tools, frameworks, and tech stacks. Our Golang developers deliver interoperable and secure multi-chain solutions.' },
    { title: 'Golang Consulting', description: 'Hire Golang developers for expert consulting, guiding your team through Golang-based architecture, system design, and best practices for optimal project performance.' },
    { title: 'Golang Application Modernization', description: 'Hire dedicated Golang developers to modernize your legacy applications, enhancing scalability, performance, and reliability with the latest Golang features and techniques.' },
    { title: 'Go Routine Concurrency', description: 'Leverage Golang’s powerful concurrency model by hiring Golang programmers skilled in Go Routines to efficiently manage multiple tasks concurrently for high-performance systems.' }
];

const engagementModelsGolang = [
    { title: 'Dedicated Team', description: 'Our Dedicated Team model offers you a committed group of developers working exclusively on your project. This approach ensures seamless collaboration, scalability, and quality tailored to your evolving business requirements.', points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'] },
    { title: 'Staff Augmentation', description: 'With our Staff Augmentation model, we integrate experienced Golang developers into your existing team to boost capabilities, fill gaps, and accelerate the development process, ensuring cost-effective and high-quality solutions.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Our Project-Based Model provides end-to-end Golang development services for specific projects. We manage the entire lifecycle, delivering on time and within budget to ensure your project’s success.', points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsGolang = [
    { q: 'Why should I hire dedicated Golang developers?', a: 'Hiring dedicated Golang developers ensures your project gets focused attention from experts, leading to higher-quality code, faster development cycles, and better overall results. [3, 8] They are more invested in your project’s success and offer greater reliability and consistency compared to freelancers. [3]' },
    { q: 'What is the typical cost of hiring a Golang developer?', a: "The hourly rate for Golang developers varies by experience and location, typically ranging from $22 to over $127. [2, 4] Entry-level developers might charge $20-$38 per hour, while senior developers can command rates from $65 to $127 per hour. [4] We offer competitive pricing models tailored to your project's scope and budget. [1]" },
    { q: 'Can I communicate directly with my Golang development team?', a: 'Yes, we facilitate direct communication with your dedicated development team. [12] We use various tools like Slack, Jira, and video conferencing to ensure transparent and effective interaction, keeping you in the loop and in control of your project. [13, 14, 21]' }
];

const userGuideContentGolang = {
    'What is Golang Used For?': {
        intro: 'Golang, also known as Go, is a versatile programming language developed by Google, widely appreciated for its efficiency, scalability, and simplicity. It’s favored by Go developers for building reliable and high-performance software, making it a top choice in various industries.',
        points: [
            { title: 'Cloud Services and Networking', text: 'Golang excels in creating cloud-based solutions and networking services due to its high concurrency support. This makes it ideal for building scalable cloud platforms and microservices. It is also trusted by Golang programmers for reliable network communication.' },
            { title: 'Web Development', text: 'Go developers utilize Golang to create modern web applications due to its simplicity and powerful standard libraries. Golang app development provides speed and performance, making it perfect for scalable, production-ready web solutions.' },
            { title: 'DevOps and Automation Tools', text: 'Golang is a preferred language for Go developers working in DevOps, thanks to its ability to build fast, lightweight, and efficient tools for automation. Go development ensures the development of robust solutions for managing infrastructure and automating workflows.' },
            { title: 'Data Science and Machine Learning', text: 'Though traditionally dominated by Python, Golang consulting is on the rise in the fields of Data Science and Machine Learning. Developer Golang is known for building high-performance solutions in this domain, offering better memory management and execution speed.' },
            { title: 'Building Microservices', text: 'Go language developers often choose Golang for building microservices due to its excellent performance in handling concurrent processes and communication between services. This makes Golang app development an optimal choice for scalable, distributed systems.' },
            { title: 'Blockchain and Cryptocurrency Applications', text: 'With the growing demand for Golang programmers in blockchain development, Golang is increasingly used to build decentralized applications and cryptocurrency platforms. Its security and performance make it a suitable language for Web3 projects.' },
            { title: 'Gaming Development', text: 'Golang’s high performance, memory management, and concurrency make it a good choice for real-time applications like game development. Golang consulting services are often hired for building multiplayer servers and backend gaming services.' }
        ]
    },
    'Essential skills to look for in a Go developer': {
        intro: 'Hiring the right Go developer is crucial for successful Go language development projects. Whether you’re looking for Golang app development or seeking experts in Golang consulting, identifying the right skill set is essential. Here’s a comprehensive guide on the must-have skills for any Golang programmer:',
        points: [
            { title: 'Proficiency in Go Language', text: 'A strong grasp of the Go language is the foundation for any Golang developer. This includes proficiency in its syntax, data types, and memory management. Go’s ability to handle concurrency through goroutines is a critical skill for any Golang programmer.' },
            { title: 'Experience with Go Development Frameworks', text: 'A skilled Golang developer should be familiar with frameworks such as Gin, Echo, Revel, and Buffalo for building robust applications. Experience with designing microservices using Go ensures that the go developers can create scalable and maintainable systems.' },
            { title: 'Expertise in API and Web Development', text: 'Expertise in building and maintaining RESTful APIs using Go is critical for modern web applications. Advanced Golang developers should also have experience in gRPC or GraphQL for scalable go development.' },
            { title: 'Hands-on experience with DevOps', text: 'A solid understanding of integrating Go development into CI/CD pipelines is an advantage. Experience with deploying Go applications in containers (like Docker) and managing them in Kubernetes is highly valued in the industry.' }
        ],
        outro: 'Whether you’re looking for go language developers for scalable systems or specialized Golang consulting services, these skills are critical to evaluate.'
    },
    'How does Golang ensure high performance in large-scale applications?': {
        intro: 'Golang, or Go, is designed with performance and concurrency as core principles, making it the go-to language for building scalable, high-performance applications. Here’s how Golang ensures top-tier performance and concurrency, making it ideal for large-scale projects:',
        points: [
            { title: 'Efficient Concurrency with Goroutines', text: 'One of the key reasons Golang excels in large-scale applications is its Goroutines—lightweight, concurrent threads that allow a Go application to handle thousands of tasks simultaneously. Goroutines are managed by the Go runtime, ensuring that your application can scale efficiently, even under heavy traffic. For instance, if you hire Golang developers to work on a real-time communication platform, they can leverage Goroutines to handle multiple user interactions at once without slowing down the system.' },
            { title: 'Go Scheduler and Non-Blocking I/O', text: 'Go’s scheduler efficiently distributes Goroutines across multiple CPU cores, ensuring optimal use of system resources. Unlike other languages that use threads that can block execution, Go implements non-blocking I/O operations, meaning your application can continue executing other tasks while waiting for data, making it particularly suitable for high-concurrency applications such as APIs, streaming services, and financial applications. When you hire a Golang developer, you’re tapping into an expert who understands how to harness Go’s concurrency model to maintain high performance.' },
            { title: 'Built-in Garbage Collection for Low Latency', text: 'Go features an advanced garbage collector that operates in the background, cleaning up unused memory without affecting application performance. This feature is crucial for long-running services, such as those in cloud environments or large-scale systems. The Go garbage collector is designed to have minimal latency, ensuring that it doesn’t block execution and keeps your application’s performance at its peak.' },
            { title: 'Optimized for Multi-Core Processing', text: 'Golang was built to scale horizontally by fully utilizing multi-core processors. Whether you’re running your application on a cloud server or on-premise hardware, Go developers can distribute workloads efficiently across multiple cores, reducing latency and improving throughput. This is particularly valuable in cloud-based and microservices architectures, where distributed systems require maximum performance.' },
            { title: 'Go’s Simplicity and Maintainability', text: 'While it delivers exceptional performance, Golang also emphasizes simplicity, which ensures that your code remains maintainable even as your system grows. A simpler codebase leads to fewer bugs and better performance as the system evolves. When you hire Golang programmers, you are ensuring that your project benefits from Go’s clean syntax and efficient concurrency mechanisms.' },
            { title: 'Ideal for Microservices and Cloud-Based Applications', text: 'The combination of performance, concurrency, and scalability makes Golang perfect for developing microservices and cloud-native applications. Go’s lightweight concurrency model is ideal for building highly scalable distributed systems that can handle thousands of requests concurrently. When you hire Golang developers, you’re making a strategic choice for future-proofing your infrastructure with scalable, efficient code.' },
            { title: 'Real-Time Data Processing and Integration', text: 'Golang’s speed and efficiency make it ideal for applications that require real-time data processing and integration, such as IoT systems or real-time analytics platforms. With Go development, large-scale, real-time applications can handle data streams and process large datasets quickly without bottlenecks.' }
        ]
    },
    'What type of projects are best suited for Golang development?': {
        intro: 'Golang, or Go, is a highly efficient programming language known for its concurrency, scalability, and performance. It is well-suited for projects that require high concurrency, low latency, and large-scale, distributed systems. Below are the types of projects where Golang excels:',
        points: [
            { title: 'Cloud-Native Applications', text: 'Golang is a top choice for cloud-native development due to its ability to handle high concurrency and real-time communication. Its performance and scalability make it an ideal language for cloud platforms like AWS, Google Cloud, and Microsoft Azure. If you’re looking to hire Golang developers, they can help you build highly efficient cloud applications that can scale horizontally with ease.' },
            { title: 'Networking and Cloud Services', text: 'Golang’s ability to handle concurrent tasks efficiently makes it the ideal language for developing networking tools and cloud services. Whether you’re building API gateways, load balancers, or cloud storage solutions, Golang’s performance and scalability ensure high availability and fast response times. Hiring Golang programmers for hire can help you leverage Go’s powerful libraries for cloud computing and networking.' },
            { title: 'Data Streaming and Processing', text: 'Golang excels in projects involving data streaming and real-time data processing. Its ability to process large volumes of data concurrently makes it ideal for building data pipelines, ETL systems, and other real-time analytics tools. With Golang, you can handle continuous streams of data with minimal latency and high throughput, making it a great choice for data-driven projects.' },
            { title: 'Gaming Back-End Services', text: 'Golang is gaining popularity in the game development community for building backend services for multiplayer online games. Its high concurrency capabilities make it an ideal choice for managing large numbers of concurrent game sessions. Whether you are building a game server or a game analytics platform, Go development ensures real-time performance and stability.' },
            { title: 'Internet of Things (IoT)', text: 'Golang is well-suited for developing IoT systems due to its ability to efficiently handle large numbers of devices and data streams. Whether it’s a smart home system or a connected manufacturing platform, Go development ensures that your IoT application can scale effectively and handle high concurrency while consuming minimal resources.' }
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

// --- SECTIONS FOR HIRE GOLANG DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top Golang Developers</h3>
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

const GolangExcellenceSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Excellence Of Our Golang Developers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {golangExcellence.map((service, index) => (
                        <motion.div key={index} className="bg-gray-800 p-8 rounded-lg text-center transform transition duration-500 hover:scale-105 hover:bg-gray-700"
                            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
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
                    Why Partner with Our Dedicated Golang Development Team
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyPartnerGolang.map((reason, index) => (
              <div key={reason.title} className={`p-8 bg-gray-800 rounded-2xl text-left transition-all duration-500 ease-out hover:bg-gray-700 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <h3 className="text-2xl font-bold text-blue-400 mb-3">{reason.title}</h3>
                <p className="text-gray-300 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-blue-400 font-semibold text-xl mt-12">Have a question? <a href="#" className="underline hover:text-blue-300">Talk to an expert ⊙</a></p>
        </div>
      </div>
    );
};

const TechExpertiseSection = () => {
    return (
        <div className="py-24 bg-black">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Expertise of Our Golang Developers</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {golangTechExpertise.map(tech => (
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
                    <h2 className="text-4xl md:text-5xl font-bold">Hire Golang Developers for Reliable Software Solutions</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Hire our expert Go developers for efficient, reliable software development. We specialize in streamlining the app development process, delivering cutting-edge solutions for cloud services, mobile apps, full-stack development, and much more.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {golangSolutions.map((solution, index) => (
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

const FeaturedCaseStudyGolang = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Our Work Speaks For Itself</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Our expert Go (Golang) developers are proficient in building highly scalable and efficient systems and drive innovation and reliability in every project. Hire Golang developers in the USA to leverage advanced performance capabilities and streamline development, ensuring continuous support and seamless production deployment.
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

const UserGuideSidebarGolang = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentGolang)[0]);
    const content = userGuideContentGolang[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Essential Guide to Hire Best Golang Developer</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentGolang).map(topic => (
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
                            {content.outro && <p className="text-gray-400 mt-6 italic">{content.outro}</p>}
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top Golang Developers in 3 Simple Steps</h2>
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Engagement Models to Hire Expert Golang Developers</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        We offer flexible engagement models for hiring Golang developers. From dedicated teams to project-based solutions, we provide innovative services. Explore the ideal model for your project.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsGolang.map((model, index) => (
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
                    {faqsGolang.map((faq, index) => (
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


// --- MAIN PAGE COMPONENT ---
const HireGolangPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire Certified Golang Developers<br/>Top 1% Go Programmers for Your Project</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Our vetted Golang developers build modern applications and optimize existing ones. With expertise in cloud services, DevOps, and data science, they ensure scalable, high-performance solutions using industry best practices.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Advanced Golang Expertise</div>
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
        <GolangExcellenceSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Transform Your Software Projects?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire Our Expert Golang Developers
            </motion.button>
        </section>
        <WhyPartnerSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Build Scalable, Future-Ready Applications with Our Top Golang Developers
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Call
            </motion.button>
        </section>

        <FeaturedCaseStudyGolang />
        <UserGuideSidebarGolang />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireGolangPage;