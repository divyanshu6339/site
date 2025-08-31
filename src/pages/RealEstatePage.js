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
const proptechServices = [
    { title: 'Property listing and management platforms', description: 'We build end-to-end solutions for property listing and management that are designed to be user-friendly, and scalable, and include features like content management, lead generation, and CRM integration.' },
    { title: 'Lease and asset management software', description: 'Our lease and asset management software solutions are designed to streamline operations, reduce costs, and improve efficiency. Furthermore, they are customizable, easy to use, and come with robust reporting features.' },
    { title: '3D proptech solutions', description: 'We build customized 3D proptech solutions like virtual tours that allow potential buyers and renters to explore properties remotely. They are designed to showcase properties in an immersive way, leading to increased engagement and higher conversion rates.' },
    { title: 'Predictive building maintenance', description: 'Our customized predictive building maintenance solutions use machine learning algorithms to analyze data from IoT sensors and other sources. Furthermore, they help identify potential maintenance issues before they become major problems, saving time and money on repairs and reducing downtime.' },
    { title: 'Customized MLS integration software', description: 'We offer customized MLS integration software solutions that allow our clients to integrate their property listings with multiple listing services. This helps them reach a larger audience and increase their chances of closing deals.' }
];

const whyChooseUsProptech = [
    { title: 'Cost-effective services', content: 'Alpixn Technologies provide cost-effective IT consulting and software development services that are tailored to meet the specific needs and budgets of proptech companies, helping them save costs while achieving their business goals.' },
    { title: 'Seamless integration', content: 'Our team of experts helps proptech companies streamline their systems and ensures seamless integration of new technologies to improve overall efficiency.' },
    { title: 'Advanced data security', content: 'Alpixn Technologies provides secure and reliable cloud solutions and data encryption services that help ensure our client’s data remains safe and protected.' },
    { title: 'Top-notch technical expertise', content: 'We provide advanced software solutions and IT support to stay ahead of the competition.' },
    { title: 'Data analysis and insights', content: 'We use data analytics tools and techniques to provide our clients with valuable insights into their business operations, helping them identify areas for improvement and optimization.' },
    { title: '24/7 support', content: 'Our team of dedicated professionals is always available to address any concerns or issues that may arise, ensuring that our clients’ businesses run smoothly without interruption.' }
];

const caseStudies = [
    {
        title: 'Builder Digital',
        description: 'Builder Digital, a real estate platform, sought to enhance its 149Photos web and mobile apps. Alpixn Technologies provided solutions including feature enhancement, bug fixing, UI design, and a custom file transfer app, resulting in improved customer engagement and increased sales.',
        image: 'https://www.Alpixntechnologies.com/wp-content/uploads/2024/05/AI-Chatbot.webp' // Reusing image as per instruction
    },
    {
        title: 'Keey',
        description: 'Keey, a proptech startup, sought a development partner to bring their real-estate booking platform to life. Leveraging React Native and Node.js, we crafted a mobile app enabling users to discreetly rent properties to friends or family.',
        image: 'https://www.Alpixntechnologies.com/wp-content/uploads/2024/01/patronum.svg' // Reusing image as per instruction
    }
];

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

// --- NEW SECTIONS ---

const IntroSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
                <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                    IT Services for Real-Estate Industry
                </h2>
                <p className={`max-w-4xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                    Technology has revolutionized the way we interact with the world, and the real estate industry is no exception. From mobile apps and online platforms to smart home technology and predictive analytics, technology is making real estate more accessible, efficient, and customer-centric.
                    As a trusted IT partner for proptech companies, Alpixn Technologies is committed to providing bespoke IT outsourcing services that help companies leverage technology to achieve their business goals. Whether it’s developing custom software applications, providing cloud solutions, or offering end-to-end IT support, our team of experts is committed to delivering high-quality services that exceed expectations.
                    Contact us today to learn more about our services and how we can help you drive growth and success.
                </p>
            </div>
        </div>
    );
};

const ProptechServicesSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="container mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
              Our Custom Proptech Software Development Services
            </h2>
            <p className={`text-lg text-gray-400 max-w-3xl mx-auto mb-12 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
              Our IT services are tailored to meet the specific needs of the proptech industry.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {proptechServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-8 rounded-lg text-left transform transition duration-500 hover:scale-105 hover:bg-gray-700"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                    {/* Placeholder for Cloud logo */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
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

const WhyChooseUsAccordion = () => {
    const [open, setOpen] = useState(0); // Open the first item by default
    const toggle = (index) => setOpen(open === index ? null : index);

    return (
        <div className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Why Alpixn Technologies is the Right Choice for Your Custom Proptech Software Development Needs</h2>
                <div className="max-w-4xl mx-auto">
                    {whyChooseUsProptech.map((item, index) => (
                        <div key={index} className="border-b border-gray-700 py-4">
                            <button onClick={() => toggle(index)} className="w-full flex justify-between items-center text-left text-lg font-semibold text-white">
                                <span>{item.title}</span>
                                <span className="text-blue-400 text-2xl">{open === index ? '−' : '+'}</span>
                            </button>
                            <motion.div
                                initial={false}
                                animate={{ height: open === index ? 'auto' : 0, opacity: open === index ? 1 : 0, marginTop: open === index ? '1rem' : '0' }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
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
}

const CaseStudiesSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Case Studies
                    </h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Our case studies showcase real-world examples of how our custom software solutions drive success and innovation for our clients. Read on to get a detailed insight into our work.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <img src={study.image} alt={study.title} className="w-full h-56 object-cover" />
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3 text-white">{study.title}</h3>
                                <p className="text-gray-400">{study.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-16">
                    <motion.button
                        className="bg-blue-500 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        More Case Studies
                    </motion.button>
                </div>
            </div>
        </div>
    );
};


// --- MAIN PAGE COMPONENT ---
const RealEstatePage = () => {
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
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">IT Services for Real-Estate Industry</h1>
                    <p className="text-lg md:text-xl mb-6">
                        Helping traditional real estate companies evolve into tech-powered giants.
                    </p>
                    <motion.button
                        className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Book A Free Consultation
                    </motion.button>
                </motion.div>
                <motion.div
                    className="md:w-1/2 flex justify-center"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <img src={StaffAugmentationImage} alt="Real Estate IT Services" className="w-full max-w-md rounded-lg" />
                </motion.div>
            </div>
          </div>
        </motion.section>

        <TrustedBy backgroundColor="bg-white" />

        <IntroSection />
        
        <ProptechServicesSection />
        
        <WhyChooseUsAccordion />
        
        <CaseStudiesSection />

      </main>
      <Footer />
    </div>
  );
};

export default RealEstatePage;