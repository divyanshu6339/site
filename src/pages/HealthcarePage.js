import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import TrustedBy from '../components/TrustedBy';
import StaffAugmentationImage from '../Assets/Assests2/91.webp';
import ClutchTestimonials from '../components/ClutchTestimonials';
import TechStackTabs from '../components/TechStackTabs';
import Insights from '../components/Insights';

// --- NEW DATA ARRAYS FOR HEALTHCARE ---
const healthcareServices = [
    { title: 'Custom Healthcare Software Development', description: 'Our custom healthcare software development services enhance remote care and automate medical workflows through our expertise in developing custom healthcare solutions, ensuring your healthcare practices align seamlessly with evolving needs and technological advancements.' },
    { title: 'Custom mHealth Development', description: 'As a mHealth app development company, we offer cross-functional solutions to enhance medical services. Our healthcare software development services encompass the development of mhealth apps, telemedicine apps, fitness tracking apps, hospital management apps, and various other applications within the healthcare industry.' },
    { title: 'AI-Powered EMR/EHR Application', description: 'We provide EHR/EMR software development, developing systems for streamlined patient data management. EMR and EHR systems enhance patient care, boost efficiency, and minimize errors. Our integration of innovative technologies like Artificial Intelligence (AI) and the Internet of Things (IoT) ensures readiness for future demands.' },
    { title: 'Telemedicine Software Development', description: 'Our custom app development company develops telemedicine software for contactless treatment. Patients can connect with doctors through video calls or instant chat. We offer smart technological solutions to healthcare organizations, streamlining workflows and reducing costs effectively.' },
    { title: 'Healthcare Claims Management Software', description: 'We build healthcare claims management software solutions that optimize the claims process, ensuring efficient handling and reducing complexities. Streamlining workflows with our automated error-free healthcare claims management boosts the overall workflow for precise processing.' },
    { title: 'Home Health Software', description: 'Alpixn Technologies’ certified developers build home healthcare management software solutions, offering services such as home visit scheduling, shift optimization, offline capabilities, electronic visit verification, billing records, and comprehensive care and medication management.' }
];

const exploreHealthcareSolutions = [
    { number: '01', title: 'IoT Healthcare Software', description: 'We empower IoT software solutions for telemedicine and remote treatment. IoT-enabled real-time monitoring systems help deliver efficient remote care for patients. IoT solutions allow our engineers to optimize operations management in hospitals and improve the efficiency of patient treatment.' },
    { number: '02', title: 'AR Medical App Development', description: 'Alpixn Technologies facilitates skilled healthcare software developers for new-age software solutions. Our expertise in AR development spans augmented reality exposure therapy apps, advanced content broadcasting tools, and intelligent medical imaging solutions.' },
    { number: '03', title: 'HIS & Practice Management Software', description: 'Our Healthcare Information Systems (HIS) and Practice Management Software solutions offer efficient medical operations. Our medical software development services specialize in client-centric solutions to improve healthcare delivery by streamlining tasks, scheduling, and billing.' },
    { number: '04', title: 'Healthcare CRM', description: 'Our healthcare Customer Relationship Management (CRM) development focuses on creating tailored solutions for efficient patient engagement and management. From personalized communication to data-driven insights, our CRM empowers healthcare providers to enhance patient relationships, streamline processes, and deliver personalized care.' },
    { number: '05', title: 'Medical Chatbots', description: 'Integrating advanced AI, our chatbots provide instant support, appointment scheduling, and medical information dissemination. Enhance patient engagement, streamline inquiries, and ensure round-the-clock accessibility, contributing to an efficient and responsive healthcare experience.' },
    { number: '06', title: 'Pharmacy Management Solutions', description: 'Revive your pharmacy operations with our pharmacy management software solutions. Our smart software streamlines inventory management, prescription processing, and customer interactions. With features like automated refills and robust reporting, we empower pharmacies to enhance efficiency, accuracy, and overall service quality, ultimately benefiting both staff and customers.' },
    { number: '07', title: 'Remote Patient Monitoring Software', description: 'Our unique software solutions empower healthcare providers to remotely track and manage patient health data. Our solution ensures real-time insights, timely interventions, and personalized care plans. Enhance patient outcomes by leveraging cutting-edge technology like AI, IoT, ML, and more for continuous monitoring and proactive healthcare management.' },
    { number: '08', title: 'Management System (LIMS) Applications', description: 'Our skilled developers build Laboratory Information Management System (LIMS) applications that provide precise sample tracking, data management, and workflow automation in laboratories. Optimizing efficiency, accuracy, and compliance, our applications empower laboratories to deliver results with precision and streamline their processes effectively.' },
    { number: '09', title: 'Healthcare Consulting', description: 'Alpixn Technologies offers health software consulting services, which include failproof IT strategy plans and innovative tech structures for healthcare providers, medical devices, and pharmaceutical companies. Our prompt analysis of your business allows us to design secure and efficient software solutions, enhancing operations.' }
];

const whyChooseUsHealthcare = [
    { title: 'Patient-Centric Technologies', description: 'Our healthcare software development services prioritize patients, incorporating modern-day technologies to enhance their well-being experience. From easy-to-understand interfaces to personalized care platforms, our certified healthcare software developers aim to deliver patient-centric software solutions that promote user engagement and upgrade the healthcare ecosystem.' },
    { title: 'Enhanced Interoperability', description: 'We at Alpixn Technologies develop web, desktop, and mobile applications for healthcare management that enhance interoperability, streamline clinical workflows, and improve doctor-patient communications. Our solutions allow patients and medical providers to seamlessly exchange health-related information, track patient data, and more.' },
    { title: 'Security and Compliance Assurance', description: 'We understand the prime health information privacy standards and our software solutions are developed following common regulatory standards and adherence to policies for collecting, processing, and securing personal data such as HIPAA, FDA, HHS, and DEA, we guarantee that our Healthcare Management Software Development prioritizes data protection.' },
    { title: 'Healthcare Mobile Apps', description: 'Alpixn Technologies offers a diverse range of healthcare mobile app development, including practice management, medical device data collection, drug inventory tracking, hospital management, appointment scheduling, tracking, patient engagement, medical billing, and medical diagnosis. Our software solutions address specific needs across the healthcare spectrum.' },
    { title: 'AI/ML Integrated Solutions', description: 'Employing data science, machine learning, and artificial intelligence, we provide agile business solutions. Our expertise extends to AI-assisted robotic surgery, nurse-like chatbots, diagnostics, wearable tech apps, and medical billing. In clinical documentation, we offer AI-powered NLP applications and custom software solutions which establishes a AI-driven ecosystem.' },
    { title: 'Healthcare eCommerce Software Solutions', description: 'Alpixn Technologies specialize in developing cutting-edge healthcare ecommerce software solutions. Our expertise lies in creating secure, user-friendly platforms that enable seamless online transactions, enhancing accessibility to medical products and healthcare application development services, and ensuring compliance with industry regulations and standards.' }
];

const clutchTestimonials = [
    { rating: '5.0', text: "They're a top-notch developer all around.", author: "Strategic Product Manager", company: "Patra Corp" },
    { rating: '5.0', text: "There's no job too big or small for the team to fix in rapid time.", author: "Co-Founder", company: "Shootzu" },
    { rating: '4.5', text: "They’re reliable, and the price value is very high.", author: "Co-Founder & CEO", company: "BlackGull" },
    { rating: '4.5', text: "Their team has a lot of backend development knowledge.", author: "Founder & Managing Director", company: "ImmoSnapp GmbH" },
    { rating: '5.0', text: "Their commitment to excellence and collaborative approach set them apart.", author: "Executive", company: "Sagita Learning" },
    { rating: '5.0', text: "The team is very friendly & responsive, they are always ready to connect via Meets and Zoom calls.", author: "VP Operations", company: "Transport Company" }
];

const engagementModelsHealthcare = [
    { title: 'Dedicated Team', description: "Alpixn Technologies’ dedicated team model functions as an Offshore Development Center (ODC), delivering a tailored approach. This specialized center works exclusively on the client’s project, ensuring cost-effectiveness, scalability, optimized outcomes, efficiency, and high-quality standards.", points: ['Client-Centric Team Formation', 'Direct Reporting And Transparency', 'Scalability And Flexibility', 'Quality And Efficiency'] },
    { title: 'Team Augmentation', description: 'Alpixn Technologies offers a team augmentation approach and access to top-notch UI/UX design services tailored to your specific needs. Ideal for short-term support or filling skill gaps, this model provides flexibility and immediate access to the expertise required.', points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication'] },
    { title: 'Project-Based', description: 'Alpixn Technologies’ project-based engagement model offers a structured approach for well-defined projects within a set scope, time, and budget. This model guarantees timely, on-budget delivery, meeting quality standards, and fostering collaboration for successful outcomes.', points: ['Fixed Budget', 'Milestones And Deliverables', 'Resource Allocation', 'Risk Mitigation'] },
];

const faqsHealthcare = [
    { q: 'What is the cost of developing the mHealth app?', a: 'The cost of developing a mHealth (mobile health) app can vary significantly based on factors like features, complexity, platforms (iOS, Android), and development time. Basic apps may start around $20,000, while more complex ones with advanced functionalities can range from $50,000 to over $200,000. Explore the cutting-edge capabilities of our Custom Healthcare Software Development Company, designed to align seamlessly with evolving healthcare needs and technological advancements.' },
    { q: 'What is the difference between EHR software & EMR software?', a: 'EMR (Electronic Medical Record) is a digital version of a patient\'s chart from a single practice, while an EHR (Electronic Health Record) is a more comprehensive record of a patient\'s overall health designed to be shared across different healthcare providers. [4, 5, 10, 11] EHRs are built for data portability, allowing labs, specialists, and hospitals to see the same holistic data, whereas EMRs are primarily for internal use within one clinic. [4]' },
    { q: 'What are the benefits of software development for the healthcare industry?', a: 'Custom software development in healthcare enhances patient care through personalized solutions, improves operational efficiency by automating administrative tasks, and strengthens data security and compliance. [2, 3, 6] It leads to better patient experiences via portals and apps, higher productivity for medical staff, and easier integration with existing and legacy systems. [1, 3]' },
    { q: 'What is digital health software?', a: 'Digital health is the use of information and communication technologies to manage illnesses, health risks, and promote wellness. [8, 9] It encompasses a wide range of tools including mobile health (mHealth) apps, EHRs, wearable devices, telehealth platforms, and AI-driven diagnostics to make healthcare more personalized, efficient, and accessible. [8, 15]' }
];

const userGuideContentHealthcare = {
    'Popular Healthcare Software Products': {
        intro: 'The healthcare software products market has witnessed exponential growth driven by technological advancements, increased demand for efficient custom healthcare solutions, and a shift toward digital transformation. Let’s look into some game-changing technologies in the healthcare software industry:',
        points: [
            { title: 'Electronic Health Records (EHR) Systems:', text: 'Comprehensive digital platforms for managing patient health records, improving accessibility, and streamlining healthcare workflows.' },
            { title: 'Practice Management Software:', text: 'Tools facilitating efficient administrative tasks, appointment scheduling, billing, and resource management for healthcare practices.' },
            { title: 'Telemedicine Platforms:', text: 'Virtual custom healthcare solutions enabling remote consultations, video conferencing, and telehealth services for patients and healthcare professionals.' },
            { title: 'Medical Billing Software:', text: 'Streamlining billing processes, claims submission, and revenue management for healthcare providers.' },
            { title: 'Picture Archiving and Communication Systems (PACS):', text: 'Digital systems for storing, retrieving, and distributing medical images like X-rays and MRIs, enhancing diagnostic capabilities.' },
            { title: 'Health Information Exchange (HIE) Platforms:', text: 'Facilitating secure sharing of patient information among healthcare providers, promoting coordinated and comprehensive care.' },
            { title: 'Pharmacy Management Software:', text: 'Supporting efficient management of pharmaceutical processes, prescription tracking, inventory control, and customer interactions.' },
            { title: 'Laboratory Information Management Systems (LIMS):', text: 'Optimizing laboratory workflows by managing sample tracking, data, and documentation for increased accuracy and efficiency.' },
            { title: 'Radiology Information Systems (RIS):', text: 'Specialized software for managing radiology imaging workflows, appointments, and reporting in medical facilities.' },
            { title: 'Patient Portal Software:', text: 'Interactive platforms providing patients access to their health records, appointment scheduling, and communication with healthcare providers.' }
        ],
        outro: ''
    },
    'Challenges in developing healthcare management software?': {
        intro: 'Developing healthcare management software comes with a unique set of challenges. Explore the forefront of technology with software healthcare companies committed to advancing medical software solutions. Here are some key challenges to consider:',
        points: [
            { title: 'Data Security and Privacy:', text: 'Protecting sensitive patient data: Healthcare software handles highly sensitive data, requiring robust security measures to prevent breaches and ensure compliance with regulations like HIPAA (Health Insurance Portability and Accountability Act).\nBalancing privacy with accessibility: Striking the right balance between protecting patient privacy and allowing authorized users access to necessary data for optimal care can be complex.' },
            { title: 'Integration and Interoperability:', text: 'Connecting with existing systems: Healthcare institutions often have a patchwork of legacy systems. Integrating new software seamlessly with existing systems can be a technical hurdle.\nData standardization: Lack of standardized data formats across different systems can hinder smooth data exchange and interoperability.' },
            { title: 'Regulatory Compliance:', text: 'Navigating a complex regulatory landscape: Healthcare software must comply with numerous federal, state, and industry regulations, making the development process intricate and requiring specialized expertise.\nStaying updated with changing regulations: Healthcare regulations are constantly evolving, necessitating constant updates and adaptations to the software.' },
            { title: 'User Adoption and Usability:', text: 'Addressing diverse user needs: Healthcare software caters to various users with diverse needs and technical skills, requiring intuitive and user-friendly interfaces for efficient adoption.\nTraining and support: Providing adequate training and ongoing support for users is crucial for successful software implementation and utilization.' },
            { title: 'Other Challenges:', text: 'Cost and resource constraints: Developing and maintaining healthcare software can be resource-intensive and expensive, requiring careful budgeting and allocation of resources.\nEvolving needs of the healthcare industry: The healthcare landscape is constantly evolving, demanding adaptability and flexibility in software design and functionality.\nMeeting patient expectations: Patients are increasingly tech-savvy and demand user-friendly, transparent, and accessible healthcare software experiences.' }
        ]
    },
    'Healthcare software development technologies trends': {
        intro: 'We’ve listed some of the most exciting trends in healthcare software development! Let’s dive deeper into each one:',
        points: [
            { title: 'AI in Health Diagnosis:', text: 'AI plays a pivotal role in diagnostic processes, aiding healthcare professionals in interpreting medical images, identifying patterns, and making accurate diagnoses. Machine learning algorithms continue to evolve, enhancing the precision and efficiency of diagnostic procedures.' },
            { title: 'IoT integrated Wearable Devices:', text: 'Wearable devices equipped with IoT technology contribute to remote patient monitoring, allowing continuous tracking of vital signs, physical activity, and other health metrics. These devices facilitate proactive healthcare management and provide valuable data for personalized treatment plans.' },
            { title: 'Extended Reality (XR) in Healthcare:', text: 'Extended Reality, including Virtual Reality (VR) and Augmented Reality (AR), is transforming healthcare education, training, and patient care. VR is utilized for surgical simulations and medical training, while AR enhances real-time information for clinicians during procedures.' },
            { title: 'Mobile Health Apps:', text: 'Mobile health apps are integral to healthcare software development, promoting patient engagement, medication adherence, and overall health management. These apps often incorporate features like telemedicine, appointment scheduling, health tracking, and access to medical records.' },
            { title: 'Remote Patient Monitoring:', text: 'Remote Patient Monitoring (RPM) leverages technology to monitor patients outside traditional healthcare settings. Connected devices and mobile applications enable real-time tracking of vital signs, chronic conditions, and overall health status, fostering proactive intervention and personalized care.' }
        ]
    },
    'Impact of AI and IoT on Healthcare Industry': {
        intro: 'The Healthcare AI Revolution\n\nArtificial Intelligence (AI), leveraging its prowess in processing vast datasets and making intricate decisions, has seamlessly integrated into the healthcare sector, notably transforming hospital operations. Here’s a glimpse into AI’s impact:',
        points: [
            { title: 'Advanced Medical Imaging:', text: 'AI-driven algorithms meticulously analyze medical images like X-rays, MRIs, and CT scans, expediting diagnoses and minimizing errors. This precision translates to enhanced patient outcomes.' },
            { title: 'Predictive Analytics:', text: 'AI-powered predictive analytics forecast disease outbreaks, patient admission rates, and individual health trajectories. This empowers hospitals to allocate resources judiciously, fostering proactive patient care management.' },
            { title: 'Personalized Medicine:', text: 'AI facilitates the creation of personalized treatment plans based on patients’ genetic profiles and medical histories, optimizing effectiveness while minimizing side effects.' },
            { title: 'Administrative Efficiency:', text: 'AI-driven chatbots and virtual assistants streamline administrative tasks, from appointment scheduling to billing. This efficiency allows hospital staff to concentrate more on patient care.' }
        ],
        outro: 'The Healthcare IoT Revolution\n\nThe Internet of Things (IoT), linking everyday devices through the internet, is a transformative force in healthcare:\n\n1. Remote Patient Monitoring:\nIoT devices, including wearables and sensors, empower healthcare providers to remotely monitor patients’ vital signs and health data, ensuring comfort and enabling timely interventions.\n\n2. Asset Tracking:\nHospitals leverage IoT to track the location and condition of medical equipment, ensuring availability when needed, reducing downtime, and cutting costs.\n\n3. Temperature and Environment Control:\nIoT systems maintain optimal conditions for medical supplies, drugs, and equipment, guaranteeing their efficacy and safety.\n\n4. Patient Engagement:\nIoT fosters patient engagement by delivering real-time health data, encouraging individuals to actively manage their health.'
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

// --- NEW SECTIONS FOR HEALTHCARE PAGE ---

const HealthcareServicesSection = ({services}) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="container mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
              Healthcare Software Development Services We Offer
            </h2>
            <p className={`text-lg text-gray-400 max-w-4xl mx-auto mb-12 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                Delivering software solutions to the healthcare sector since 2011, we specialize in developing secure, compliant medical software. Our solutions streamline interactions among patients, healthcare professionals, insurers, pharmacists, and medical device providers, fostering a robust healthcare ecosystem. We develop highly customized, innovative healthcare software adaptable to industry evolution.
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
                    Connect With Our Healthcare Software Development Experts Now!
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
                    Our Dedicated Healthcare Software Development Work Mastery
                </h2>
                <p className={`mt-4 text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                    Our dedicated Healthcare Software developers offer a range of benefits, with certified professionals skilled in emerging technologies like AI, low code/no code, and IoB. Hire dedicated Healthcare software developers to integrate core tech strength and 24/7 support, ensuring seamless maintenance from code to production, offering your project success and scalability.
                </p>
            </div>
        </div>
    );
};

const FeaturedCaseStudyHealthcare = () => {
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

const ExploreHealthcareSolutionsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Our Custom Healthcare Solutions Improve Patient Outcomes
                    </h2>
                    <p className={`mt-4 text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
                        Our bespoke healthcare software solutions are developed to meet evolving healthcare industry needs. Incorporating advanced technology, we develop & design customized applications and systems that enhance patient care, streamline operations, and ensure compliance with regulatory standards.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {exploreHealthcareSolutions.map((service, index) => (
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

const WhyChooseUsHealthcareSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
      <div ref={ref} className="py-24 bg-gray-900/50">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
              Why Choose Alpixn Technologies as a Healthcare Software Development Company?
          </h2>
          <p className={`max-w-4xl mx-auto text-lg text-gray-400 mb-16 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-5'}`}>
              We, as a leading custom healthcare software development company, bring years of expertise in developing software solutions that optimize healthcare processes, ensure compliance, and enhance patient care. Our commitment to innovation and quality makes us a leading healthcare software development company.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsHealthcare.map((reason, index) => (
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

const UserGuideSidebarHealthcare = () => {
    const [activeTopic, setActiveTopic] = useState(Object.keys(userGuideContentHealthcare)[0]);
    const content = userGuideContentHealthcare[activeTopic];

    return (
        <section className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">User Guide To Custom Healthcare Software Development</h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto">
                    <aside className="md:w-1/3">
                        <ul className="space-y-2 sticky top-24">
                            {Object.keys(userGuideContentHealthcare).map(topic => (
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
                        The engagement model for mobile app development services involves a collaborative approach tailored to client needs. Take a look at Alpixn Technologies’ engagement model for mobile app development.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {engagementModelsHealthcare.map((model, index) => (
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
                    {faqsHealthcare.map((faq, index) => (
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect with Our Healthcare Software Development Experts</h2>
                <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-400">Connect with our expert healthcare software developers to add advanced, certified developers who integrate the latest tech to transform your concepts into engaging and seamless user experiences.</p>
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
const HealthcarePage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Healthcare Software Development Company</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Alpixn Technologies offers custom healthcare software development services for improved patient outcomes, remote care, and streamlined medical workflows. We empower cutting-edge tech stacks like artificial neural networks (ANNs) and deep learning compliant with HIPAA standards to put your projects ahead of the competition.
                    </p>
                    <motion.button className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition" whileHover={{ scale: 1.05 }}>
                        Get a custom quote
                    </motion.button>
                </motion.div>
                <motion.div className="md:w-1/2 flex justify-center"
                    initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
                    <img src={StaffAugmentationImage} alt="Healthcare Software Development" className="w-full max-w-md rounded-lg" />
                </motion.div>
            </div>
          </div>
        </motion.section>

        <TrustedBy backgroundColor="bg-white" />
        <HealthcareServicesSection services={healthcareServices} />
        <DedicatedWorkMasterySection />
        <FeaturedCaseStudyHealthcare />
        <ExploreHealthcareSolutionsSection />
        <TestimonialsSection />
        <WhyChooseUsHealthcareSection />

        <section className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                 Ready to launch your vision?
            </motion.h2>
            <motion.p className="text-lg mb-8 max-w-3xl mx-auto" initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                 Our custom healthcare software development team is geared up to bring your ideas to life. Let’s embark on your unique project journey together, creating tailored solutions for your business needs.
            </motion.p>
            <motion.button className="bg-gray-800 text-white font-bold py-4 px-8 rounded-full hover:bg-gray-700 transition text-lg" whileHover={{ scale: 1.05 }}>
                Get an Estimate of Your Project Today
            </motion.button>
        </section>
        
        <UserGuideSidebarHealthcare />
        <EngagementModelsSection />
        <FinalCtaSection />
        <FaqSection />

      </main>
      <Footer />
    </div>
  );
};

export default HealthcarePage;