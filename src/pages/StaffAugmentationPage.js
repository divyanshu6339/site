import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// Data arrays - moved to top of file
const caseStudies = [
  { 
    id: 'fmintegrated', 
    logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/FMIntegrated-logo.svg', 
    image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/FM-Integrated-768x768.webp', 
    title: 'Unify All FM Operations On A Single Platform To Enhance Efficiency And Cut Costs.', 
    description: 'Integrated FM Group, a leading facility management provider, collaborated with Alpixn Technologies to streamline operations. The developed platform integrates work orders, asset management, preventive maintenance, and vendor management, enhancing efficiency and reducing costs.', 
    points: ['Analyzed client\'s operations and FM trends, and followed a structured dev process.', 'The work order and management feature was added to create, assign, and track.', 'Conducted constructive user testing sessions during the development phase.', 'Enhanced facility managers to oversee service providers and suppliers.'], 
    tags: ['US', 'REACT', 'FACILITY MANAGEMENT'] 
  },
  { 
    id: 'patra', 
    logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/patra-corp.svg', 
    image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/PatraCorp-768x768.webp', 
    title: 'Empowers Brokers and Integrates With Top US Insurers For Swift Certificate Issuance And Optimal Premium Quotes.', 
    description: 'Patra Corporation partnered with Alpixn Technologies to develop a secure, web-based payment automation solution.', 
    points: ['API integration module with configuration capabilities.', 'The integration module has robust authorization systems.', 'XML transports diverse data formats efficiently.', 'Underwriting questions for comprehensive risk assessment.'], 
    tags: ['US', 'NODE.JS', 'SAILS', 'INSURTECH'] 
  },
  { 
    id: 'patronum', 
    logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/patronum.svg', 
    image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/Patronum-768x768.webp', 
    title: 'A SaaS Solution to Streamline Google Workspace User Management, Automating Tasks for Efficiency.', 
    description: 'Alpixn Technologies facilitated the launch of Patronum (Bespin Labs). The developed platform streamlines Google Workspace tasks.', 
    points: ['Code optimized for seamless handling of complex operations.', 'Real-time updates for unstructured data management.', 'Integrated Google API, enhancing product functionality.', 'Automated provisioning and de-provisioning workflows.'], 
    tags: ['US', 'JS', 'GOLANG', 'IT'] 
  },
  { 
    id: 'heffernan', 
    logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/heffernan.svg', 
    image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/Heffernan-768x768.webp', 
    title: 'Develop An Internal Insurance App For Daily Storage Of Client\'s Private Data By Employees.', 
    description: 'Heffernan, a leading US insurance brokerage, partnered with Alpixn Technologies to develop a secure internal application.', 
    points: ['With planning & research, evaluated app requirements thoroughly.', 'Top-notch user experience drove the design process.', 'Developed a responsive UI with full accessibility features.', 'App creates reports in CSV/PDF formats efficiently.'], 
    tags: ['US', 'JAVA-SPRING BOOT', 'INSURTECH'] 
  },
  { 
    id: '149photos', 
    logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/149.svg', 
    image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/Builder-Digital-768x768.webp', 
    title: 'Visual Solutions For Builders/Homebuyers And Provides Weekly Build Progress Reports Via Photos.', 
    description: 'Alpixn Technologies collaborated with Builder Digital Solutions to create and deliver various visual marketing solutions.', 
    points: ['Improved UI with enhanced design patterns.', 'Identified key features for mobile and web applications.', '24/7 maintenance & support for uninterrupted service.', 'We addressed bugs, refining existing features continuously.'], 
    tags: ['US', 'IONIC-ANGULAR', 'PROPTECH'] 
  }
];

const expertiseAreas = [
  { num: '01', title: 'Software Developers', description: 'As a renowned technical staffing augmentation company, we provide skilled software professionals who specialize in software development. Our certified software developers prioritize stability and scalability, seamlessly incorporating the latest technologies to boost the productivity of businesses.' },
  { num: '02', title: 'eCommerce Developers', description: 'We at Alpixn Technologies understand the potential of every business. We provide a distinctively dedicated team of eCommerce developers to propel your business forward with our technical IT augmentation services. Our skilled team masters offer seamless UX, responsive design, and secure transactions that drive growth and enhance customer satisfaction.' },
  { num: '03', title: 'Web Developers', description: 'We are a team of qualified professionals providing dedicated developers for your web development projects. Our skilled web developers integrate trending technologies such as React, Angular, Vue.js, Node.js, and Django to take your project beyond excellence and enhance the user experience.' },
  { num: '04', title: 'Mobile App Developers', description: 'Our skilled mobile app developers excel in crafting and maintaining applications across diverse industries—fintech, insurtech, proptech, healthcare, and more. Proficient in mobile app development, our qualified developers seamlessly integrate cutting-edge technologies such as Flutter, React Native, and SwiftUI, ensuring innovative and robust solutions for your specific industry needs.' },
  { num: '05', title: 'DevOps Engineers', description: 'Our qualified DevOps engineers are dedicated to optimizing your development and operations processes. With expertise in automation, continuous integration, and deployment, they streamline workflows and enhance collaboration. With expertise in tools like Git, Jenkins, Docker, Slack, etc., our team ensures your software development lifecycle runs seamlessly from code to production.' },
  { num: '06', title: 'Quality Assurance', description: 'Our Quality Assurance team ensures the excellence of your software products. From manual testing to automated processes, they ensure a flawless user experience. With a commitment to quality, our QA professionals are equipped with the latest tools like AI-powered testing, software composition analysis, etc., thus contributing to the reliability and success of your software solutions.' },
  { num: '07', title: 'UI/UX Developers', description: 'We provide skilled UI/UX developers to bring your digital vision to life, blending creativity with functionality. They craft intuitive and visually appealing user interfaces, ensuring seamless user experiences. Proficient in tools like Sketch, InVision Studio, and Adobe XD, our team creates designs that captivate and elevate your digital presence.' },
  { num: '08', title: 'AI & ML Experts', description: 'Our AI & ML experts are at the forefront of innovation, leveraging advanced algorithms and deep learning techniques. With expertise in the latest frameworks like Pytorch, Sonnet, and TensorFlow, they design and implement innovative solutions as per your project requirements.' },
  { num: '09', title: 'Cloud Experts', description: 'Our skilled cloud experts are proficient in optimizing the performance and scalability of your infrastructure. With expertise in top cloud platforms like AWS, Azure, and Google Cloud, we implement robust, secure, and scalable cloud solutions according to your business requirements.' },
];

const whyChooseUsFeatures = [
  { title: 'Diverse Agile Team', description: 'We at Alpixn Technologies provide certified individuals with different backgrounds, experiences, and perspectives through our IT augmentation services, bringing together a spectrum of skills toward a common goal using agile methodologies. This ensures innovative problem-solving, increased adaptability & resilience, and the ability to tailor solutions to the project\'s unique needs.' },
  { title: 'Cost-Effective Services', description: 'Alpixn Technologies prioritizes cost efficiency, offering services that maximize value for your investment. Our streamlined processes and strategic resource allocation ensure you receive high-quality IT staff augmentation without compromising your budget, fostering a mutually beneficial partnership for success.' },
  { title: 'High Quality & Flexibility', description: 'Alpixn Technologies offers a perfect blend of high-quality solutions and unparalleled flexibility. Our commitment to excellence ensures that every project performs beyond expectations. Our flexible approach ensures your project meets its requirements, enhancing success in dynamic business environments.' },
  { title: 'Experienced Software Engineers', description: 'Opt for Alpixn Technologies to access a team of certified software engineers. Our professionals bring years of expertise to the project, ensuring a depth of knowledge, precision in code to production, and the latest technology integration that accelerates project success.' },
  { title: '24*7 Dedicated Support', description: 'Alpixn Technologies stands out with round-the-clock dedicated support. We prioritize your success by providing regular assistance, ensuring that your IT operations run seamlessly at any hour. Our team is ready to address your concerns promptly and keep your projects on track.' },
  { title: 'Immediate Joining', description: 'Alpixn Technologies offers immediate resource augmentation services integrated with prominent IT staffing augmentation services. Our streamlined onboarding process ensures swift and efficient placements, allowing you to address urgent project needs promptly. Choose us for a quick response to your staffing requirements and accelerated project timelines.' },
];



// Project Success Section Component
const ProjectSuccessSection = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState(caseStudies[0].id);
  const activeStudy = caseStudies.find(study => study.id === activeTab);

  return (
    <div ref={ref} className="py-24 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            Our Dedicated Developers' Expertise Enhances Your Project Success
          </h2>
          <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            Our dedicated Software developers offer a range of benefits, with certified professionals skilled in emerging technologies like AI, low code/no code, and IoT. Hire dedicated software developers to integrate core tech strength and 24/7 support, ensuring seamless maintenance from code to production, offering your project success and scalability.
          </p>
        </div>
        <div className={`bg-gray-900/50 ring-1 ring-white/10 rounded-2xl p-4 md:p-6 transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-center items-center flex-wrap gap-4 border-b border-white/10 pb-6">
            {caseStudies.map(study => (
              <button key={study.id} onClick={() => setActiveTab(study.id)} className={`relative transition-transform duration-300 ease-in-out ${activeTab === study.id ? 'scale-110' : 'scale-100 hover:scale-105'}`}>
                <div className={`bg-white rounded-lg p-4 shadow-md transition-all duration-300 ${activeTab === study.id ? 'shadow-blue-500/40 shadow-lg' : ''}`}>
                  <img src={study.logo} alt={study.id} className="h-10 object-contain w-28" />
                </div>
              </button>
            ))}
          </div>
          <div className="mt-8">
            {activeStudy && (
              <div key={activeStudy.id} className="flex flex-col md:flex-row gap-8 md:gap-12 items-center animate-fade-in">
                <div className="w-full md:w-2/5">
                  <img src={activeStudy.image} alt={activeStudy.title} className="rounded-xl shadow-2xl shadow-blue-500/10" />
                </div>
                <div className="w-full md:w-3/5">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{activeStudy.title}</h3>
                  <p className="text-gray-300 mb-6">{activeStudy.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
                    {activeStudy.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap items-center gap-4">
                    <img src="https://www.jellyfishtechnologies.com/wp-content/uploads/2023/11/usa-flag.png" alt="USA" className="h-6 rounded" />
                    {activeStudy.tags.slice(1).map(tag => (
                      <span key={tag} className="text-xs font-semibold text-gray-400 bg-gray-800 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                    <button href="#" className="ml-auto text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center gap-2">
                      View Case Study
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`.animate-fade-in { animation: fadeIn 0.5s ease-in-out; } @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
};

// Expertise Section Component
const ExpertiseSection = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div ref={ref} className="py-24 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            The Right Software Expert To Scale Your In-House IT Development Team
          </h2>
          <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            Discover the perfect software experts to scale your in-house development team with precision. Leverage our certified developers at Alpixn Technologies for seamless integration, enhanced efficiency, and accelerated project growth. Boost your development capabilities with the right qualified talent, aligned to your expectations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={area.num} className={`relative p-8 bg-gray-900/50 ring-1 ring-white/10 rounded-2xl transition-all duration-500 ease-out hover:ring-blue-500/50 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="absolute top-8 left-8 text-4xl font-bold text-gray-700">{area.num}</div>
              <div className="relative pt-12">
                <h3 className="text-2xl font-bold mb-3">{area.title}</h3>
                <p className="text-gray-400 leading-relaxed">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Why Choose Us Section Component
const WhyChooseUsSection = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <div ref={ref} className="py-24 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
          Why Choose Alpixn Technologies As Your IT Staff Augmentation Company?
        </h2>
        <p className={`max-w-3xl mx-auto text-lg text-gray-400 mb-16 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
          We provide certified, highly skilled IT resources who are equipped with the excellence of tailored precision and innovation, allowing you to strengthen your business's technological foundation and keep up with evolving trends. Let's find out more about our key performance metrics:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsFeatures.map((reason, index) => (
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

const GuideSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const [activeTab, setActiveTab] = useState('what');

    const guideContent = {
        what: {
            title: 'What Is Staff Augmentation?',
            content: [
                { text: 'Staff augmentation is a strategic outsourcing model that involves hiring professionals from a third-party agency to support your existing team on a temporary or long-term basis. It removes the overhead burden associated with sourcing, recruiting, training, and retaining talent. It can be divided into two main categories:' },
                { title: 'Short Term Augmentation:', text: 'Short-term staff augmentation provides immediate access to specialized skills for a defined period, typically for a specific project or initiative.' },
                { title: 'Long Term Augmentation:', text: 'It involves integrating skilled professionals into your existing team for an extended period of time. It fosters deeper collaboration and knowledge transfer within the team.' },
            ]
        },
        process: {
            title: 'Process of Augmenting an IT Team at Alpixn Technologies',
            content: [
                 { text: 'We at Alpixn Technologies embark on a journey of your project success through these 5 steps. Experience a tailored approach that optimizes your team’s capabilities and propels your projects to new heights.' },
                { title: 'Needs Assessment:', text: 'We begin by understanding your project requirements, technology stack, and team dynamics to identify the precise skills needed for augmentation. Define clear goals and measurable outcomes for the augmented team’s contribution.' },
                { title: 'Skill Matching:', text: 'Leveraging our pool of talented professionals, we meticulously match your requirements with the expertise of our certified developers and engineers.' },
                { title: 'Onboarding Process:', text: 'Our streamlined onboarding process ensures a smooth transition for augmented team members, including orientation on project goals, methodologies, and collaboration tools.' },
                { title: 'Management and Ongoing Support:', text: 'Throughout the engagement, we provide continuous, 24*7 support, fostering open communication and quick issue resolution to ensure optimal team performance.' },
                { title: 'Performance Evaluation:', text: 'Regular performance evaluations and constructive feedback sessions are conducted to guarantee that our augmented team consistently meets and exceeds your expectations, ensuring project success.' },
            ]
        },
        tech: {
            title: 'Top Technologies We Have Expertise In',
            content: [
                { title: 'Web Development Services', text: 'Our experts excel in creating dynamic and responsive web applications using technologies such as React, Angular, Vue.js, and Node.js.' },
                { title: 'Mobile App Development Services', text: 'We specialize in crafting cutting-edge mobile apps, leveraging frameworks like Flutter, React Native, and SwiftUI for a seamless user experience.' },
                { title: 'Cloud Computing Services', text: 'Explore the power of the cloud with our proficiency in AWS, Azure, and Google Cloud Platform, ensuring scalable and efficient solutions.' },
                { title: 'Data Analytics Services', text: 'Unlock insights from your data with our expertise in Python, R, and frameworks like Sonnet and PyTorch, driving data-driven decision-making.' },
                { title: 'AI & Machine Learning Services', text: 'Harness the potential of AI and ML with our skilled professionals, adept in technologies like natural language processing, computer vision, and predictive analytics.' },
                { title: 'DevOps Services', text: 'Streamline your development and operations with our DevOps engineers, utilizing tools like Git, Docker, and Slack for efficient and automated workflows.' },
            ]
        },
        why: {
            title: 'Why Staff Augmentation?',
            content: [
                { title: 'Scalability:', text: 'Easily adjust your team size based on project needs without the commitment of full-time employees.' },
                { title: 'Cost-effectiveness:', text: 'Pay only for the time and expertise you need, eliminating the overhead of salaries, benefits, and infrastructure.' },
                { title: 'Access to Specialized Skills:', text: 'Staff augmentation allows organizations to quickly access specialized skills and expertise that may not be available in-house, helping to address specific project requirements effectively' },
                { title: 'Risk Mitigation:', text: 'Avoid the risks associated with hiring and managing full-time employees, including recruitment costs, performance issues, and termination procedures.' },
                { title: 'Flexibility:', text: 'Companies can scale their workforce up or down based on project demands, adapting to changing needs without the long-term commitment of hiring full-time employees.' },
                { title: 'Reduced Recruitment Burden:', text: 'Companies can quickly onboard skilled professionals without the need for extensive hiring procedures.' },
            ]
        },
        when: {
            title: 'When You Need IT Staff Augmentation?',
            content: [
                { title: 'Project Design', text: 'Increased IT staffing as project requirements suddenly increase enables you to rapidly scale your team, ensuring on-time delivery without compromising quality.' },
                { title: 'Skill Gap', text: 'Growth is needed when there is a skills gap in your existing team, providing specialized skills needed for a particular job or project.' },
                { title: 'Maximum Temporary Workload', text: 'In times of increased workload or tight deadlines, growing your team ensures that you can meet the needs of the business without overwhelming your internal staff.' },
                { title: 'Cost Management', text: 'Choose IT staffing increases to optimize cost-effectiveness while avoiding costs associated with long-term hiring while maintaining flexibility in adapting to changing business needs.' },
                { title: 'Technology Expertise', text: 'Empowering your team with experts as you move to new technologies or systems ensures a smooth transition and accelerates learning.' },
                { title: 'Project Deadline', text: 'By adding skilled workers through augmentation, tight project deadlines can be better met, ensuring on-time delivery and project success.' },
                { title: 'Seasonal Demands', text: 'If your business experiences seasonal changes in performance, the growing IT workforce allows you to scale your team accordingly, optimizing resource allocation' },
                { title: 'Specialized Projects', text: 'For tasks requiring specific skills that are not readily available in the workplace, management ensures that employees are available with the necessary skills to perform the task successfully.' },
            ]
        },
        india: {
            title: 'Staff Augmentation in India: Why It’s the Preferred Choice',
            content: [
                { text: 'Staff augmentation in India has emerged as the go-to solution for companies worldwide, offering unparalleled cost efficiency, access to a large talent pool, and faster project delivery. As a trusted staff augmentation company, we enable businesses to extend their in-house teams quickly and efficiently.' },
                { title: 'Cost-Effective Solutions with High-Quality Talent', text: 'Yes, we deliver high-quality resources at competitive rates. IT staff augmentation in India offers significant cost advantages compared to hiring in Western markets. With a vast pool of skilled developers, engineers, and IT professionals, IT staff augmentation companies in India can provide top-notch talent at a fraction of the cost' },
                { title: 'Access to a Large Pool of Skilled Professionals', text: 'India is home to a vast network of highly skilled professionals proficient in a wide range of technologies. As one of the best IT staffing companies in India, we provide access to a diverse talent pool that includes developers, project managers, QA specialists, DevOps engineers, and AI/ML experts' },
                { title: 'Seamless Integration with Your In-House Team', text: 'Yes, we ensure smooth collaboration and integration. Our IT staff augmentation services are designed to align with your internal processes and workflows. As a top IT staffing agency in India, we prioritize transparency, accountability, and delivering value to our clients' },
                { title: 'Compliance with Global Standards and Data Security', text: 'Yes, we ensure compliance and data security. As a trusted IT staff augmentation company, we adhere to global security standards and best practices, ensuring that your data and intellectual property remain protected. Our processes comply with industry regulations such as GDPR, HIPAA, and ISO, giving you peace of mind when working with an IT' },
            ]
        }
    };

    const tabs = [
        { id: 'what', label: 'What Is Staff Augmentation?' },
        { id: 'process', label: 'Process of Augmenting' },
        { id: 'tech', label: 'Top Technologies' },
        { id: 'why', label: 'Why Staff Augmentation?' },
        { id: 'when', label: 'When You Need It?' },
        { id: 'india', label: 'Staff Augmentation in India' },
    ];

    const currentContent = guideContent[activeTab];

    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>An Essential Guide to IT Staff Augmentation</h2>
                </div>
                <div className={`flex flex-col md:flex-row gap-8 md:gap-12 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-full md:w-1/3">
                        <div className="sticky top-24">
                            {tabs.map(tab => (
                                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full text-left p-4 rounded-lg mb-2 transition-all duration-300 ${activeTab === tab.id ? 'bg-blue-600 text-white font-bold' : 'hover:bg-gray-800'}`}>
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <div key={activeTab} className="animate-fade-in">
                            <h3 className="text-3xl font-bold mb-8">{currentContent.title}</h3>
                            <div className="space-y-6">
                                {currentContent.content.map(item => (
                                    <div key={item.title || item.text}>
                                        {item.title && <h4 className="text-xl font-semibold text-blue-400 mb-2">{item.title}</h4>}
                                        <p className="text-gray-400">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 10: FAQ Section
const FaqSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { q: "How does staff augmentation work?", a: "Staff augmentation involves seamlessly integrating skilled professionals into your existing team. We assess your project requirements, identify the needed expertise, and provide qualified developers temporarily. This flexible approach enhances your team’s capabilities." },
        { q: "What is the difference between staff augmentation and outsourcing?", a: "Staff augmentation involves supplementing your in-house team with external professionals, allowing for direct collaboration. In contrast, outsourcing involves delegating entire projects or tasks to external firms. Tech staff augmentation offers greater control, flexibility, and integration within your existing workflow." },
        { q: "What specific services do you provide within technical staff augmentation?", a: "Our technology staff augmentation services encompass a wide range of expertise, including software development, quality assurance, mobile app development, UI/UX services, data analytics, DevOps services, and more." },
        { q: "How do you ensure data security when providing resource augmentation services?", a: "Data security is a top priority for us. As one of the best IT staffing companies in India, we implement robust security protocols and compliance measures to protect your sensitive data. Our resource augmentation services adhere to global security standards." },
        { q: "Why do global enterprises prefer staff augmentation in India?", a: "Global enterprises prefer staff augmentation in India for multiple reasons. India offers a cost-effective and scalable solution for businesses looking to expand their development teams. Our staff augmentation services also ensure seamless collaboration and faster delivery." },
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`bg-gray-900/50 ring-1 ring-white/10 rounded-xl transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center text-left p-6">
                                <span className="text-lg font-semibold">{faq.q}</span>
                                <svg className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                                <div className="p-6 pt-0 text-gray-400">
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


// Section 12: Engagement Models Section
const EngagementModelsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const models = [
        {
            title: 'Dedicated Team',
            description: 'Alpixn Technologies’ dedicated team model functions as an Offshore Development Center (ODC), delivering a tailored approach. ',
            
            points: ['Client-Centric Approach ', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency']
        },
        {
            title: 'Team Augmentation',
            description: 'Alpixn Technologies offers a staff augmentation approach, bolstering a client’s in-house team with specialized skills, fostering collaboration, and optimizing project results. ',
            points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
        },
        {
            title: 'Project-Based',
            description: 'Alpixn Technologies’ project-based engagement model offers a structured approach for well-defined projects within a set scope, time, and budget. ',
            points: ['Fixed Budget', 'Milestones and Deliverables', 'Resource Allocation', 'Risk Mitigation']
        },
    ];

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Engagement Models</h2>
                    <p className={`mt-4 max-w-2xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies offers versatile engagement models for staff augmentation services, providing tailored solutions to meet diverse client needs. Let’s explore these engagement models:
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {models.map((model, index) => (
                        <div key={model.title} className={`p-8 bg-blue-900/20 ring-1 ring-blue-500/20 rounded-2xl transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <h3 className="text-3xl font-bold mb-4 text-center">{model.title}</h3>
                            <p className="text-gray-400 mb-6 text-center h-24">{model.description}</p>
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

const StaffAugmentationPage = () => {
  const services = [
    {
      title: 'Staff Augmentation',
      description: 'At Alpixn Technologies, we augment your tech department with our certified resources, bringing the expertise you need. Build your custom development team with our varied skill set to convert your potential business goals quickly and more cost-effectively.',
    },
    {
      title: 'IT Outstaffing Consulting',
      description: 'We provide expert consulting on hiring options. We at Alpixn Technologies assist in selecting the finest technology personnel, ensuring you acquire the specific tech staff required for your project from our extensive pool of IT experts. We convert your potential business goals faster and more cost-effectively with our cutting-edge solutions.',
    },
    {
      title: 'Dedicated IT Specialists',
      description: 'At Alpixn Technologies, our focus lies on delivering dedicated teams tailored to specific project development needs like software development, mobile app development, DevOps Services, API Integration, etc. Our IT professionals embody a high caliber of expertise in the latest technological advancements.',
    },
    {
      title: 'Remote Managed Services',
      description: 'We can either augment your tech department or fully become your outsourced IT department. Our teams provide remote managed services that span all technologies, and industries like fintech, insurtech, healthcare, etc. Our service enables you to concentrate on other aspects of your business while still maintaining overall oversight of the services we provide.',
    },
    {
      title: 'Long & Short-term Team Augmentation',
      description: 'Leveraging our 14-year IT legacy, we offer Short-Term Team Augmentation services for quick project support during in-house team unavailability. Also, our Long-Term Team Augmentation services fill skill gaps, accelerate in-house staff onboarding, and reduce costs for extended projects. We provide you with the right talent for your project needs.',
    },
    {
      title: 'Vendor Transition',
      description: 'Switching between IT development vendors can be challenging. Our team augmentation services ensure a smooth transition with an agile transformation of the project, minimizing disruptions and ensuring that project timelines are maintained without compromising on quality.',
    },
  ];

  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <motion.section
          className="relative bg-gradient-to-r from-blue-900 via-black to-black text-white py-20 pl-5 pr-4 sm:pl-10 sm:pr-6 md:pl-16 lg:pl-24 xl:pl-36 2xl:pl-48 flex items-center" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">IT Staff Augmentation Services</h1>
              <p className="text-lg md:text-xl mb-6">
                At Alpixn Technologies, we understand that every business is unique, and your technical needs are as distinctive as your goals. Add certified IT staff to your team, such as software developers, business analysts, scrum masters, and QA specialists. Boost your project's progress and scale up with our IT team augmentation services.
              </p>
              <motion.button
                className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a custom quote ➔
              </motion.button>
            </motion.div>
            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img src={StaffAugmentationImage} alt="API Integration" className="w-full max-w-md rounded-lg" />
            </motion.div>
          </div>
        </motion.section>

        <TrustedBy backgroundColor="bg-white" />

        {/* Staff Augmentation Services We Offer */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              Staff Augmentation Services We Offer
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 max-w-3xl mx-auto mb-12"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We at Alpixn Technologies offer extended IT staff augmentation services and provide on-demand skills and resources for the scalability of your project. Following is the list of services we offer under the IT resource augmentation process:
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
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
          </div>
        </section>

        {/* Connect with our Staff Augmentation Experts Now! */}
        <section className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              Connect With Our Staff Augmentation Experts Now!
            </motion.h2>
            <motion.form
              className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <input type="email" placeholder="Email id" className="w-full md:w-auto flex-grow bg-white text-black px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white" />
              <select className="w-full md:w-auto bg-white text-black px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white">
                <option>Please choose service</option>
                <option>Staff Augmentation</option>
                <option>IT Outstaffing Consulting</option>
                <option>Dedicated IT Specialists</option>
                <option>Remote Managed Services</option>
                <option>Long & Short-term Team Augmentation</option>
                <option>Vendor Transition</option>
              </select>
              <button type="submit" className="w-full md:w-auto bg-gray-800 text-white font-bold px-6 py-3 rounded-md hover:bg-gray-700 transition duration-300">Let's Talk</button>
            </motion.form>
          </div>
        </section>

        {/* Project Success Section */}
        <ProjectSuccessSection />

        {/* Expertise Section */}
        <ExpertiseSection />

        <ClutchTestimonials />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        <GuideSection />

        <FaqSection />

        <EngagementModelsSection />


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
              Ready to Get Started With Our Staff Augmentation Services?
            </motion.h2>
            <motion.p
              className="text-lg mb-8 max-w-3xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ready to launch your vision? Our custom software development team is geared up to bring your ideas to life. Let's embark on your unique project journey together, creating tailored solutions for your business needs.
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
              Get an Estimate of Your Project Today
            </motion.button>
          </div>
        </section>

        <TechStackTabs />
        <Insights />
      </main>
      <Footer />
    </div>
  );
};

export default StaffAugmentationPage;