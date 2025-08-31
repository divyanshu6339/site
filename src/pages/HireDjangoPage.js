import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- DATA ARRAYS FOR HIRE DJANGO DEVELOPERS PAGE ---

const djangoStrengths = [
    { title: 'Event-Driven Programming', description: 'Hire Django developers skilled in event-driven programming, delivering real-time solutions with Django Channels for robust and scalable applications.', icon: 'event-driven-programming' },
    { title: 'Web/Mobile Solutions', description: 'Hire Python Django developers to create responsive, high-performing web and mobile solutions using Django’s robust framework.', icon: 'webmobile-solutions' },
    { title: 'Django API Development', description: 'Our dedicated Django developers build secure, scalable, and efficient APIs, integrating seamlessly into your applications for enhanced functionality and flexibility.', icon: 'django-api-development' },
    { title: 'Django CMS Development', description: 'Hire pre-vetted Django developers to create custom CMS solutions that streamline content management, enhance usability, and scale your growing business.', icon: 'django-cms-development' }
];

const whatYouGetDjango = [
    { title: 'Agile Development For Faster Delivery', description: 'Hire Django experts who leverage agile methodologies for efficient project management and accelerated delivery. Our team ensures seamless collaboration, adaptability, and quick iterations for high-quality Django solutions.' },
    { title: 'High-Performing Platform', description: 'Find Django developers skilled at building scalable and high-performing platforms tailored to your needs. Our vetted and certified Django developers optimize every aspect of your application for superior performance.' },
    { title: 'Stable & Secured Solutions', description: 'Hire dedicated Django developers to build robust, stable, and secure applications. We implement industry best practices to safeguard your data and provide seamless functionality for your users.' },
    { title: 'Reliable Django Testing and QA', description: 'Partner with experienced Django engineers for comprehensive testing and QA services. Our team ensures bug-free, reliable applications to deliver exceptional user experiences with every project.' }
];

const djangoTechExpertise = ['Wagtail', 'Sentry', 'Django-Migration', 'Mongo Engine', 'Django Rest', 'Jinga', 'Django ORM', 'Debug Toolbar', 'Selinux'];

const clientTestimonials = [
    { author: 'James Anderson', company: 'Co-Founder, Shootzu', text: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency." },
    { author: 'Earl VanBuskirk', company: 'Strategic Product Manager, Patra Corp', text: "Alpixn provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall–collaborative, responsive, and quick to turn around deliverables." },
    { author: 'Anonymous', company: 'Executive, Sagita Learning', text: "Alpixn Technologie's platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates." },
    { author: 'Ricardo Henriquez', company: 'Co-Founder & CEO, BlackGull', text: "The client was utterly amazed at the quality of the product and speed of delivery of Alpixn Technologies. Their team did an excellent job given the short amount of time and stood out for their performance and great price. They kept an open and fluid communication via Slack and Zoom." },
    { author: 'Jan Menzen', company: 'Founder & Managing Director, ImmoSnapp GmbH', text: "Alpixn Technologies successfully produces deliverables that satisfy internal stakeholders’ expectations. A dedicated and capable team, they effectively tackle a myriad of challenges. By introducing project management tools to the engagement, the team augmented collaboration." }
];

const djangoSolutions = [
    { title: 'Django Enterprise App Development', description: 'Hire Python Django developers to build secure and scalable enterprise-grade applications tailored to meet complex business requirements.' },
    { title: 'Django Template Design', description: 'Hire top Django developers to design responsive, dynamic, and user-friendly templates to enhance your web application’s UI/UX.' },
    { title: 'Backend Development', description: 'Hire Django coders to develop robust and scalable backends, ensuring your application performs seamlessly under varying loads.' },
    { title: 'SaaS Development', description: 'Hire the best Django developers to build cutting-edge SaaS platforms with features designed to meet your subscription-based business needs.' },
    { title: 'Custom Django Development', description: 'Hire dedicated Django developers to craft tailored solutions that align perfectly with your business goals and technical needs.' },
    { title: 'Django Consulting', description: 'Leverage our experienced Django engineers to strategize and optimize your Django projects with actionable consulting services.' },
    { title: 'Django Support and Maintenance', description: 'Hire pre-vetted Django developers to provide reliable post-deployment support and ensure the smooth functioning of your application.' },
    { title: 'DevOps and Deployment', description: 'Our Django developers are skilled in DevOps practices for application deployment, CI/CD pipelines, and optimized server performance.' },
    { title: 'E-commerce Development with Django', description: 'Build scalable and feature-rich e-commerce platforms using Django, designed to deliver shopping experience with high security.' }
];

const engagementModelsDjango = [
    { title: 'Dedicated Team', description: 'Build a dedicated team of Django developers who are fully committed to your project. This model ensures expert-led development, seamless collaboration, and steady progress aligned with your objectives. Perfect for businesses seeking long-term support and specialized expertise.', points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency'] },
    { title: 'Staff Augmentation', description: 'Augment your in-house team with skilled Django developers to address skill gaps, boost productivity, and meet tight deadlines. Our team augmentation model integrates seamlessly with your workflows, offering the flexibility to scale resources as needed.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Choose a project-based engagement model for goal-oriented delivery of defined Django development projects. With fixed timelines and budgets, this approach guarantees the precise execution of your objectives while optimizing costs and efficiency.', points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsDjango = [
    { q: 'How do I hire a Django developer from your company?', a: 'To hire Django developers, start by sharing your project details with us. Our process ensures you hire pre-vetted Django developers with the right expertise. Once we understand your requirements, we present top candidates who match your needs. Choose to hire dedicated Django developers for projects of any scale.' },
    { q: 'What is the typical timeline for onboarding a Django developer?', a: 'The onboarding timeline can vary, but we aim for efficiency. Typically, after you select a developer, the pre-onboarding process, including setting up accounts and sharing documentation, can be done within a few days. [39, 43] A new developer can often start contributing to your project within the first week, initially focusing on smaller tasks to get familiar with the codebase. [40, 41]' },
    { q: 'What industries benefit from Django development services?', a: 'Django is highly versatile and is used across numerous industries, including technology, e-commerce, fintech, social media, news, and entertainment. [5, 29, 35] Its scalability and security make it ideal for everything from SaaS platforms and enterprise applications to financial and data analysis tools. [35, 36]' },
    { q: 'Can your Django developers handle both frontend and backend development?', a: 'While Django is primarily a backend framework, our developers are skilled in creating full-stack applications. [10, 15] They can develop the backend logic with Django and integrate it with frontend technologies like React, Angular, or Vue.js to build complete, dynamic web applications. [2, 14]' },
    { q: 'What is the cost of hiring a Django developer?', a: 'The cost of hiring a Django developer depends on factors like experience level, project complexity, and the engagement model. Hourly rates can range from approximately $20 for a junior developer to over $100 for a senior architect, with various pricing models available to fit your budget. [3, 11, 12, 16, 17]' },
    { q: 'Do your developers offer ongoing support and maintenance?', a: 'Yes, we provide comprehensive post-deployment support and maintenance services. [1, 32] This includes bug fixes, security patches, performance monitoring, and feature updates to ensure your application remains stable, secure, and aligned with your evolving business needs. [30, 47]' },
    { q: 'What tools do your developers use for collaboration and project management?', a: 'Our teams use a variety of industry-standard collaboration and project management tools to ensure smooth communication and workflow. These often include Slack for real-time communication, Jira or Trello for task management, and GitHub/GitLab for version control. [6, 9, 21, 22, 28]' },
    { q: 'Can Django developers build scalable web applications?', a: 'Absolutely. Django is designed for scalability and is used by some of the busiest sites on the web, such as Instagram and Pinterest. [4, 13, 27] Its architecture allows for independent scaling of components, making it well-suited for applications with high traffic and large user bases. [7, 18]' },
    { q: 'How do you ensure the security of my data and intellectual property?', a: 'We prioritize your data security and intellectual property. We sign a Non-Disclosure Agreement (NDA) before starting any project to legally protect your confidential information. [8, 20] All IP rights for the code we develop are transferred to you upon project completion. [23, 31, 37]' },
    { q: 'Can I hire Django developers for an existing project?', a: 'Yes, our Django developers can be integrated into existing projects. We have a structured process for onboarding new team members to an ongoing project, which includes a detailed review of the current codebase and documentation to ensure a smooth transition and immediate productivity. [24, 34, 44, 45]' },
    { q: 'Do you provide post-development support and bug fixes?', a: 'Yes, our commitment extends beyond deployment. We offer post-development support that includes identifying and fixing any bugs that may arise in a live environment, ensuring your application runs smoothly and reliably for your users. [1, 25, 26, 46, 49]' }
];

const userGuideContentDjango = {
    'Where is Django Being Used?': {
        intro: 'Django, a high-level Python web framework, powers some of the most robust and scalable applications worldwide. Its versatility makes it an ideal choice for developing diverse web solutions across industries. Below are the primary use cases where hiring Django developers can significantly impact your project:',
        points: [
            { title: 'E-commerce Website Development', text: 'Django’s built-in features and modular architecture are ideal for creating scalable and secure e-commerce platforms. Hire Django developers to craft shopping carts, payment gateways, and dynamic product catalogs that enhance user experience' },
            { title: 'SaaS Application Development', text: 'For SaaS platforms, Django provides unmatched flexibility and scalability. Find Django developers to build cloud-based solutions with seamless user management, subscription services, and automated workflows' },
            { title: 'API Development and Integration', text: 'Django developers with expertise in RESTful APIs can design, integrate, and optimize APIs for mobile apps, web platforms, and third-party services. Hire Python Django developers to build reliable and efficient API-driven systems' },
            { title: 'Enterprise Applications', text: 'Django is perfect for complex enterprise-grade solutions that demand high performance and security. With Python and Django developers for enterprise applications, you can develop feature-rich ERP systems, CRM tools, and data-driven platforms' },
            { title: 'Custom Web Development for Startups and SMEs', text: 'Django’s rapid development capabilities make it a favorite for startups and small businesses looking to create MVPs or full-fledged platforms. Hire dedicated Django developers to bring your innovative ideas to life without compromising on budget or quality' },
            { title: 'Migration and Optimization', text: 'If you’re looking to migrate an existing system to Django, vetted and certified Django developers can handle the process seamlessly. Additionally, experienced Django engineers can optimize your application for better performance and user experience' },
            { title: 'Secure Web Applications', text: 'Django comes with robust security features such as protection against SQL injection and cross-site scripting (XSS). Hire Django experts to build secure applications tailored to your business needs' }
        ]
    },
    'How does Django help in web development?': {
        intro: 'Django, a high-level Python web framework, streamlines the web development process by offering a range of robust scalable, and secure features. It is the preferred choice for startups, enterprises, and small businesses due to its efficiency in handling complex projects:',
        points: [
            { title: 'Simplifies Complex Web Development Tasks', text: 'Django automates repetitive tasks, such as URL routing, authentication, and database migrations, making it easier for developers to focus on building core features. Hire Django coders to speed up development while maintaining high-quality standards' },
            { title: 'Ensures Scalability for Growing Businesses', text: 'Django’s modular design and ability to integrate with third-party tools ensure your application can scale as your business grows. Hire experienced Django developers for scalable web apps to future-proof your solutions' },
            { title: 'Enhances Development Speed', text: 'Django’s pre-built components, such as its ORM (Object-Relational Mapping) and admin panel, accelerate development without compromising functionality. Find Django developers who can deliver faster results without sacrificing code quality' },
            { title: 'Facilitates Secure Web Development', text: 'With built-in security features like CSRF protection and secure password hashing, Django minimizes vulnerabilities. Hire top Django developers to ensure your application meets the highest security standards' },
            { title: 'Versatility for Multiple Use Cases', text: 'From e-commerce platforms to SaaS applications, Django caters to various industries. Hire Django developers for e-commerce website development or Django developers for SaaS application development to create tailored solutions' }
        ]
    },
    'What are the key features of Django?': {
        intro: '',
        points: [
            { title: 'Comprehensive Framework', text: 'Django is a full-stack framework, offering a complete package of tools for front-end and back-end development. Hire full-stack Django developers with frontend skills for seamless end-to-end solutions' },
            { title: 'Powerful ORM for Database Management', text: 'Django’s ORM simplifies database interactions, enabling developers to query databases using Python instead of SQL. Hire Django developers skilled in database optimization to manage and optimize your application’s data layer effectively' },
            { title: 'Flexible Architecture', text: 'Django supports a decoupled design, allowing developers to integrate RESTful APIs, third-party tools, and microservices. Hire Django developers skilled in third-party integrations for tailored, interconnected systems' },
            { title: 'Built-in Admin Panel', text: 'Django’s admin interface streamlines content management and backend operations, making it ideal for startups and enterprises. Hire dedicated Django developers to customize and enhance this feature for your business' },
            { title: 'Scalability and Performance', text: 'Django is optimized for high performance, handling large user bases and complex queries with ease. Hire remote Django developers to create applications that can grow with your business needs' },
            { title: 'Extensive Libraries and Community Support', text: 'Django’s vast library ecosystem and active developer community ensure reliable support and continuous improvements. Hire Django experts who stay updated with the latest industry trends' }
        ]
    },
    'Steps to Hire Dedicated Django Developers': {
        intro: 'Here’s a step-by-step guide to hiring dedicated Django developers:',
        points: [
            { title: 'Step 1: Define Your Project Scope', text: 'Start by clearly outlining your project requirements, including technical specifications, timelines, and budget. Whether it’s a small business project or a scalable SaaS application, this clarity helps you hire the best Django developers for your needs' },
            { title: 'Step 2: Shortlist Qualified Candidates', text: 'Look for pre-vetted and certified Django developers with proven experience. Ensure they possess expertise in Python, Django, and related technologies. Alpixn Technologies offers a pool of vetted Django coders for hire' },
            { title: 'Step 3: Evaluate Technical Skills', text: 'Assess the candidates’ knowledge in areas like RESTful API development, database optimization, and third-party integrations. This ensures you hire Django programmers who align with your project goals' },
            { title: 'Step 4: Conduct Interviews and Assign Test Projects', text: 'Interview shortlisted candidates to gauge their problem-solving abilities and communication skills. Assign small test projects to validate their technical expertise. Alpixn Technologies simplifies this process with experienced Django engineers ready to take on your project' },
            { title: 'Step 5: Choose an Engagement Model', text: 'Decide whether you need full-time dedicated Django developers or a flexible team for specific tasks. Alpixn Technologies provides customized engagement models, from remote Django developers to on-demand support' },
            { title: 'Step 6: Onboard Your Team', text: 'Integrate the developers into your workflow with clear expectations and communication channels. By working with a Django development agency like Alpixn Technologies, you gain access to a streamlined onboarding process' }
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

// --- SECTIONS FOR HIRE DJANGO DEVELOPERS PAGE ---
const HireDeveloperForm = () => (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-6">Work with Top Django Developers</h3>
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

const DjangoStrengthsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="container mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Excellence Of Our Django Developers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {djangoStrengths.map((service, index) => (
                        <motion.div key={index} className="bg-gray-800 p-8 rounded-lg text-center transform transition duration-500 hover:scale-105 hover:bg-gray-700"
                            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                            <div className="text-blue-400 mb-4 text-4xl mx-auto w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                                {/* Placeholder for icons like 'event-driven-programming' */}
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
                    Why Partner with Our Dedicated Django Development Team
                </h2>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatYouGetDjango.map((reason, index) => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Expertise of Our Django Developers</h2>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    {djangoTechExpertise.map(tech => (
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
                    <h2 className="text-4xl md:text-5xl font-bold">Hire Django Developers for Reliable Software Solutions</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                        Our dedicated Django developers accelerate development with intelligent, secure, and high-performing web applications. Integrate their advanced Django expertise to create innovative solutions for diverse industries and businesses.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {djangoSolutions.map((solution, index) => (
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

const FeaturedCaseStudyDjango = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">Our Work Speaks for Itself</h2>
                <p className="mt-4 text-lg text-gray-400 max-w-4xl mx-auto">
                    Our Django developers combine advanced expertise in cutting-edge technologies like machine learning, RESTful APIs, and cloud computing to deliver top-tier solutions. With a strong focus on scalable architecture, our team ensures reliable development and ongoing support. Partner with us to drive innovation, streamline operations, and achieve success through versatile Django solutions.
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

const UserGuideSidebarDjango = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentDjango)[0]);
    const content = userGuideContentDjango[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">An Essential Guide to Hire Django Developers</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentDjango).map(topic => (
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Hire Top Django Developers in 3 Simple Steps</h2>
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>Engagement Models to Hire Best Django Developers</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies provides adaptable engagement models for Django development services, crafted to cater to diverse business requirements. Get the best fit for your business.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsDjango.map((model, index) => (
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
                    {faqsDjango.map((faq, index) => (
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
const HireDjangoPage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Hire Best Django Developers<br/>Top 1% Django Programmers for Your Project</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Our dedicated Django developers bring unmatched expertise and precision to your projects. Partner with us to build secure, scalable, and high-performance web applications that seamlessly turn your business vision into reality.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-lg">
                        <div className="flex items-center"><svg className="w-5 h-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Advanced Django Expertise</div>
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
        <DjangoStrengthsSection />
        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Ready to Transform Your Software Projects?
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Hire Our Expert Django Developers
            </motion.button>
        </section>
        <WhatYouGetSection />
        <TechExpertiseSection />
        <TestimonialsSection />
        <ReliableSolutionsSection />

        <section className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Build Scalable, Future-Ready Applications with Our Top Django Developers
            </motion.h2>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Book a Call
            </motion.button>
        </section>

        <FeaturedCaseStudyDjango />
        <UserGuideSidebarDjango />
        <HiringStepsSection />
        <EngagementModelsSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HireDjangoPage;