import React, { useState, useEffect, useRef } from 'react';

// Custom hook to detect when an element is in the viewport
const useOnScreen = (options) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(ref.current);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};


// Main App component for the new page
export default function App() {
  return (
    <div className="font-sans bg-black text-white overflow-x-hidden">
      <HeroSection />
      <TrustedBySection />
      <ServicesSuiteSection />
      <BenefitsSection />
      <ContactSection />
      <MasterySection />
      <TechStackSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FinalCtaSection />
      <GuideSection />
      <EngagementModelsSection />
      <FaqSection />
    </div>
  );
}

// Section 1: Hero Section with Interactive Particle Background
const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray;

    const mouse = {
        x: null,
        y: null,
        radius: (canvas.height / 100) * (canvas.width / 100)
    }

    const handleMouseMove = (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = 'rgba(0, 123, 255, 0.15)';
            ctx.fill();
        }
        update() {
            if (this.x > canvas.width || this.x < 0) { this.directionX = -this.directionX; }
            if (this.y > canvas.height || this.y < 0) { this.directionY = -this.directionY; }
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius + this.size) {
                if (mouse.x < this.x && this.x < canvas.width - this.size * 10) { this.x += 3; }
                if (mouse.x > this.x && this.x > this.size * 10) { this.x -= 3; }
                if (mouse.y < this.y && this.y < canvas.height - this.size * 10) { this.y += 3; }
                if (mouse.y > this.y && this.y > this.size * 10) { this.y -= 3; }
            }
            this.x += this.directionX;
            this.y += this.directionY;
            this.draw();
        }
    }

    function init() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 10000;
        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 3) + 1;
            let x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * .6) - 0.3;
            let directionY = (Math.random() * .6) - 0.3;
            particlesArray.push(new Particle(x, y, directionX, directionY, size, 'rgba(0, 123, 255, 0.15)'));
        }
    }

    let animationFrameId;
    function animate() {
        animationFrameId = requestAnimationFrame(animate);
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
    }
    
    init();
    animate();

    const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        mouse.radius = (canvas.height / 100) * (canvas.width / 100);
        init();
    };
    window.addEventListener('resize', handleResize);

    return () => {
        clearTimeout(timer);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center bg-black overflow-hidden relative py-24">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>
      <div className="relative z-10 flex flex-col md:flex-row items-center w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full md:w-1/2 p-4 md:p-8 text-center md:text-left">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Data Analytics Services and Solutions</h1>
          <p className={`text-xl text-gray-400 mb-8 leading-relaxed transition-all duration-1000 ease-out delay-200 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Alpixn Technologies offers cutting-edge data analytics services that leverage advanced algorithms, machine learning, and artificial intelligence to unlock valuable insights from the data reservoirs, make informed decisions, optimize operations, and gain a competitive edge.</p>
          <button className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full overflow-hidden transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-20"></span>
            <span className="relative">Get a custom quote</span>
          </button>
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center">
          <div className={`relative transition-all duration-1000 ease-in-out delay-500 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ perspective: '1000px' }}>
            <img src="https://www.jellyfishtechnologies.com/wp-content/uploads/2023/10/Site-Stats-amico.svg" alt="Data Analytics" className="w-full h-auto mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Section 2: Trusted By Logos
const TrustedBySection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const logos = [
        { src: "https://www.jellyfishtechnologies.com/wp-content/uploads/2023/10/certvault.svg", alt: "CertVault" },
        { src: "https://www.jellyfishtechnologies.com/wp-content/uploads/2023/10/payleadr.svg", alt: "Payleadr" },
        { src: "https://www.jellyfishtechnologies.com/wp-content/uploads/2023/10/Redquanta.svg", alt: "Redquanta" },
        { src: "https://www.jellyfishtechnologies.com/wp-content/uploads/elementor/thumbs/patra_logo_black-quwihe83hf74a7rm5iakzcac5dnpzeqq1uhrf0vaik.png", alt: "Patra" }
    ];

    return (
        <div ref={ref} className="py-16 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                        Trusted by
                    </h2>
                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
                        {logos.map((logo, index) => (
                            <div key={logo.alt} className={`flex justify-center items-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                                <div className="bg-white p-4 h-24 w-48 flex items-center justify-center rounded-xl shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <img className="max-h-12 object-contain" src={logo.src} alt={logo.alt} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 3: Services Suite with 3D Tilt Effect
const ServicesSuiteSection = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const services = [
    { title: "Data Strategy & Consulting", description: "Our expert data analytics consultants excel at meticulously crafting a data-driven roadmap, aligning your strategies with business goals for optimal results and informed strategic direction." },
    { title: "Data Integration & Warehousing", description: "Effortlessly consolidate and store data for real-time insights. Our solutions guarantee unified data sources, enabling well-informed decisions and streamlined data management." },
    { title: "Data Visualization & Modernization", description: "Our data visualization and modernization services focus on simplifying complex information, making it easily digestible and empowering quick, data-driven decisions." },
    { title: "Business Intelligence", description: "Alpixn Technologies provides a comprehensive suite of BI tools, including KPI dashboards and predictive analytics, to ensure that our clients have the insights needed to thrive." },
    { title: "Big Data", description: "Unlock the full potential of big data through our cutting-edge big data analytics services and solutions. We expertly manage, process, and analyze vast datasets to unveil opportunities." },
    { title: "Data Science", description: "Utilize machine learning, AI, and statistical analysis to extract actionable insights. Our data scientists deeply transform your business data into a strategic asset." },
  ];
  
  const ServiceCard = ({ service, isVisible, index }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e) => {
            const { clientX, clientY, currentTarget } = e;
            const { left, top, width, height } = currentTarget.getBoundingClientRect();
            const x = clientX - left;
            const y = clientY - top;
            const rotateX = (y / height - 0.5) * -15;
            const rotateY = (x / width - 0.5) * 15;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        };

        const handleMouseLeave = () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div ref={cardRef} className={`group relative transition-all duration-500 ease-out transform-style-3d ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
            <div className="absolute -inset-px bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 group-hover:duration-200 transition-opacity duration-1000"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-sm ring-1 ring-white/10 rounded-2xl p-8 h-full transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
            </div>
        </div>
    );
  };

  return (
    <div ref={ref} className="py-24 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500">
            Our Suite of Data Analytics Services and Solutions
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
            At Alpixn Technologies, we redefine data analytics. Our tailor-made data analytics services empower businesses to harness data's full potential for success.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
      <style>{`.transform-style-3d { transform-style: preserve-3d; }`}</style>
    </div>
  );
};

// Section 4: Benefits Section
const BenefitsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const benefits = [
        { num: '01', title: 'Data Transformation', description: 'Our data science services empower businesses to with data transformation, ensuring it is refined into valuable insights.' },
        { num: '02', title: 'Data Visualization', description: 'Through advanced data visualization, we transform complex data sets into clear, interactive visuals. This enables companies to gain deeper insights.' },
        { num: '03', title: 'Supply Chain Analytics', description: 'Our data analytics experts facilitate the optimization of your entire supply chain, enhancing efficiency, reducing costs, and ensuring a seamless flow of goods.' },
        { num: '04', title: 'Procurement Analytics', description: 'Our dedicated team of data analysis experts excels in managing procurement processes, enabling businesses to realize cost savings.' },
        { num: '05', title: 'Pricing Optimization', description: 'Our services enable dynamic pricing optimization, helping businesses set the right prices for their products and services.' },
        { num: '06', title: 'BI Implementation', description: 'Our business intelligence (BI) implementation services deliver customized solutions that help aid in data-driven decision-making.' },
        { num: '07', title: 'Workforce Automation', description: 'Our data science services are tailored to optimize HR processes, resulting in significant time and resource savings.' },
        { num: '08', title: 'CFO Analytics', description: 'CFO Analytics, an integral part of our data science services, empowers financial decision-makers with essential data and insights.' },
        { num: '09', title: 'Cost Management', description: 'Our data analytics services identify cost-saving opportunities, manage expenses, and enhance profitability.' },
    ];

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Benefits That Define Our Data Analytics and Consulting Services</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        We help businesses unlock the full potential of their data resources, setting the stage for business excellence and innovation.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={benefit.num} className={`relative p-8 bg-gray-900/50 ring-1 ring-white/10 rounded-2xl transition-all duration-500 ease-out hover:ring-blue-500/50 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="absolute top-8 left-8 text-4xl font-bold text-gray-700">{benefit.num}</div>
                            <div className="relative pt-12">
                                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 5: Contact Section
const ContactSection = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
  const services = [ "Data Strategy & Consulting", "Data Integration & Warehousing", "Data Visualization & Modernization", "Business Intelligence", "Big Data", "Data Science" ];
  return (
    <div ref={ref} className="py-24 bg-blue-900/10">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Get In Touch With Our Data Analytics Experts Today!</h2>
        </div>
        <div className={`mt-12 max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-4 transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
          <input type="email" placeholder="Email Id" className="w-full md:w-1/3 flex-grow bg-gray-900/80 backdrop-blur-sm ring-1 ring-white/10 rounded-full py-3 px-5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300" />
          <div className="w-full md:w-1/3 flex-grow relative">
            <select className="appearance-none w-full bg-gray-900/80 backdrop-blur-sm ring-1 ring-white/10 rounded-full py-3 px-5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300">
              <option className="text-gray-500">Please choose service</option>
              {services.map(service => ( <option key={service} value={service} className="bg-gray-800 text-white">{service}</option> ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400"> <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg> </div>
          </div>
          <button className="w-full md:w-auto bg-blue-600 text-white font-bold rounded-full py-3 px-8 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105">Let's Talk</button>
        </div>
      </div>
    </div>
  );
};

// Section 6: Mastery Section
const MasterySection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const caseStudies = [
        {
            id: 'certvault',
            logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2023/10/certvault.svg',
            image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/02/CertVault-768x588.webp',
            title: 'State-Of-The-Art Cloud-Based Certificate Vault. Crafting Secure, Efficient, and User-Centered Digital Solutions',
            description: 'Alpixn Technologies partnered with Patra Corporation to develop a secure cloud-based certificate vault, enabling instant access to financial documents, streamlining processes, enhancing the customer experience, and reducing costs.',
            points: [
                'Comprehensive analysis to assess web application functionalities and architecture',
                'Blockchain-based solutions ensure the integrity and verification of uploaded certificates',
                'Highly secure platform enabling seamless certificate upload and access, enhancing UX',
                'Robust data security measures implemented for a secure and future-proof solution'
            ],
            tags: ['US', 'REACT', 'FACILITY MANAGEMENT']
        },
        {
            id: 'jbilling',
            logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2023/10/jBilling.png',
            image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/jBilling-768x653.webp',
            title: 'jBilling Telco Edition. A purpose-built, open-source billing solution designed to meet the unique needs of the telecommunications industry.',
            description: 'Our dedicated team of software developers collaborated with jBilling to develop a secure, web-based billing solution for the telecommunications industry.',
            points: [
                'Real-time analytics and reporting for informed decision-making',
                'Scalable architecture to support growing business needs',
                'Seamless integration with existing systems and third-party applications',
                'Customizable and flexible to meet unique business requirements'
            ],
            tags: ['CANADA', 'JAVA', 'TELECOM']
        },
        {
            id: 'patra',
            logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/patra-corp.svg',
            image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/02/patra-corp-mockup-image-e1712748353230-768x323.webp',
            title: 'Patra’s Certificate Issuance and Policy Management Services. A comprehensive solution for managing insurance certificates and policies.',
            description: 'Our team of experts partnered with Patra to develop a secure, web-based solution for managing insurance certificates and policies, streamlining processes and enhancing the customer experience.',
            points: [
                'Automated certificate issuance and delivery',
                'Centralized policy management and tracking',
                'Real-time analytics and reporting for informed decision-making',
                'Seamless integration with existing systems and third-party applications'
            ],
            tags: ['US', 'NODE.JS', 'INSURTECH']
        },
        {
            id: 'spacehubb',
            logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/spacehubb_logo.webp',
            image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/SpaceHubb-768x653.webp',
            title: 'Space Hubb. A comprehensive platform for managing and booking spaces, designed to meet the unique needs of the real estate industry.',
            description: 'Our team of experts collaborated with Space Hubb to develop a secure, web-based platform for managing and booking spaces, streamlining processes and enhancing the customer experience.',
            points: [
                'Real-time availability and booking of spaces',
                'Seamless integration with existing systems and third-party applications',
                'Customizable and flexible to meet unique business requirements',
                'Scalable architecture to support growing business needs'
            ],
            tags: ['UK', 'PHP', 'REAL ESTATE']
        },
        {
            id: 'ayla',
            logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/aylaLogoDark-svg.webp',
            image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/Ayla-App-768x653.webp',
            title: 'Ayla. A comprehensive platform for managing and booking beauty and wellness services, designed to meet the unique needs of the industry.',
            description: 'Our team of experts collaborated with Ayla to develop a secure, web-based platform for managing and booking beauty and wellness services, streamlining processes and enhancing the customer experience.',
            points: [
                'Real-time availability and booking of services',
                'Seamless integration with existing systems and third-party applications',
                'Customizable and flexible to meet unique business requirements',
                'Scalable architecture to support growing business needs'
            ],
            tags: ['AUSTRALIA', 'FLUTTER', 'WELLNESS']
        }
    ];
    
    const countryFlags = {
        US: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2023/11/usa-flag.png',
        CANADA: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2023/11/canada-flag.png',
        UK: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2023/11/great-britain.png',
        AUSTRALIA: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2023/11/australia.png',
    }

    const [activeTab, setActiveTab] = useState(caseStudies[0].id);
    const activeStudy = caseStudies.find(study => study.id === activeTab);

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Our Dedicated Data Analytics Development Work Mastery</h2>
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
                                <div className="w-full md:w-2/5"><img src={activeStudy.image} alt={activeStudy.title} className="rounded-xl shadow-2xl shadow-blue-500/10" /></div>
                                <div className="w-full md:w-3/5">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{activeStudy.title}</h3>
                                    <p className="text-gray-300 mb-6">{activeStudy.description}</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
                                        {activeStudy.points.map((point, i) => ( <li key={i} className="flex items-start gap-3"> <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> <span>{point}</span> </li> ))}
                                    </ul>
                                    <div className="flex flex-wrap items-center gap-4">
                                        <img src={countryFlags[activeStudy.tags[0]]} alt={activeStudy.tags[0]} className="h-6 rounded" />
                                        {activeStudy.tags.slice(1).map(tag => ( <span key={tag} className="text-xs font-semibold text-gray-400 bg-gray-800 px-3 py-1 rounded-full">{tag}</span> ))}
                                        <a href="#" className="ml-auto text-blue-400 font-semibold hover:text-blue-300 transition-colors flex items-center gap-2"> View Case Study <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg> </a>
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

// Section 7: Tech Stack Section
const TechStackSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const [activeTab, setActiveTab] = useState('technologies');

    const techData = {
        technologies: [
            { name: 'Pandas', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/Pandas.webp' },
            { name: 'R', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/R.webp' },
            { name: 'Hadoop', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/hadoop.webp' },
            { name: 'Spark', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/Apache-Spark-MLlib.webp' },
            { name: 'Flink', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/Flink.webp' },
            { name: 'Kafka', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/kafka.webp' },
            { name: 'TensorFlow', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/TensorFlow.webp' },
            { name: 'PyTorch', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/PyTorch.webp' },
            { name: 'Azure', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/azure.webp' },
        ],
        frontend: [
            { name: 'React', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/react.webp' },
            { name: 'HTML', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/html.webp' },
            { name: 'CSS', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/css.webp' },
            { name: 'D3.js', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/d3.webp' },
            { name: 'Plotly.js', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/Plotly.webp' },
            { name: 'Bokeh', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/Bokeh.webp' },
            { name: 'Tableau', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/Tableau.webp' },
            { name: 'Power BI', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/power-bi.png' },
        ],
        backend: [
            { name: 'Python', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/python.webp' },
            { name: 'Node.js', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/nodejs.webp' },
            { name: 'Java', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/java.webp' },
            { name: 'Go', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/go.webp' },
            { name: 'PHP', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/php.webp' },
            { name: 'Laravel', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/laravel.webp' },
            { name: '.NET Core', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/net.png' },
            { name: 'Kotlin', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/Kotlin.webp' },
            { name: 'Rust', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/rust.webp' },
            { name: 'Scala', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/Scala.webp' },
        ]
    };

    const tabs = [
        { id: 'technologies', label: 'Technologies' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
    ];
    
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Our Tech Stack</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Our tech stack for Data Analytics encompasses a diverse range of cutting-edge technologies and frameworks. From robust programming languages and databases to cloud platforms and DevOps tools, we leverage the most suitable tech stack to build scalable, secure, and high-performance enterprise solutions.
                    </p>
                </div>
                
                <div className={`bg-gray-900/50 ring-1 ring-white/10 rounded-2xl p-4 md:p-6 transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex justify-center items-center gap-4 border-b border-white/10 pb-4 mb-8">
                        {tabs.map(tab => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-4 py-2 text-lg font-semibold rounded-md transition-colors duration-300 ${activeTab === tab.id ? 'text-blue-400' : 'text-gray-500 hover:text-white'}`}>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    
                    <div key={activeTab} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 animate-fade-in">
                        {techData[activeTab].map((tech, index) => (
                            <div key={tech.name} className={`group flex flex-col items-center justify-center gap-2 p-4 rounded-lg transition-all duration-500 ease-out hover:bg-white/5 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${index * 50}ms` }}>
                                <img src={tech.icon} alt={tech.name} className="h-16 object-contain transition-transform duration-300 group-hover:scale-110" />
                                <span className="text-gray-300 transition-colors duration-300 group-hover:text-white">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Section 8: Why Choose Us Section
const WhyChooseUsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const reasons = [
        { title: 'Data-driven Strategy', description: 'Our data analytics consultants help you craft a data-driven strategy that aligns with your business goals and objectives, ensuring that you make informed decisions that drive growth and innovation.' },
        { title: 'Advanced Analytics', description: 'We use advanced analytics techniques such as machine learning, AI, and statistical analysis to extract actionable insights from your data, enabling you to identify trends, patterns, and opportunities for growth.' },
        { title: 'Data Visualization', description: 'Our data visualization experts create intuitive and interactive dashboards and reports that make it easy to understand and interpret complex data, empowering you to make data-driven decisions with confidence.' },
        { title: 'Data Management', description: 'We help you manage your data effectively, ensuring that it is accurate, complete, and secure. Our data management solutions enable you to unlock the full potential of your data and drive business growth.' },
        { title: 'Big Data Solutions', description: 'Our big data solutions help you process and analyze large and complex datasets, enabling you to identify trends, patterns, and opportunities for growth that would otherwise be hidden in your data.' },
        { title: 'Data Science', description: 'Our data scientists use advanced analytics techniques to extract actionable insights from your data, enabling you to identify trends, patterns, and opportunities for growth that would otherwise be hidden in your data.' },
    ];
    
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
                <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Why Choose Alpixn Technologies for Data Analytics Services?</h2>
                <p className={`max-w-3xl mx-auto text-lg text-gray-400 mb-16 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>We provide certified, highly skilled IT resources who are equipped with the excellence of tailored precision and innovation, allowing you to strengthen your business’s technological foundation and keep up with evolving trends.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
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


// Section 9: Testimonials Section - NOW AN AUTOPLAYING CAROUSEL
const TestimonialsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        { rating: 4.5, text: "Their team has a lot of backend development knowledge.", author: "Founder & Managing Director, ImmoSnapp GmbH" },
        { rating: 5.0, text: "Their commitment to excellence and collaborative approach set them apart.", author: "Executive, Sagita Learning" },
        { rating: 5.0, text: "The team is very friendly & responsive, they are always ready to connect via Meets and Zoom calls.", author: "VP Operations, Transport Company" },
        { rating: 5.0, text: "They're a top-notch developer all around.", author: "Strategic Product Manager, Patra Corp" },
        { rating: 4.5, text: "They're reliable, and the price value is very high.", author: "Co-Founder & CEO, BlackGull" },
    ];

    useEffect(() => {
        if (!isVisible) return;
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 4000); // Change testimonial every 4 seconds
        return () => clearInterval(timer);
    }, [isVisible, testimonials.length]);

    const StarRating = ({ rating }) => (
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-red-500' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-4">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>See What Our Clients Have To Say</h2>
                </div>
                <div className={`flex justify-center items-center gap-4 mb-12 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                    <span className="font-bold text-lg">Alpixn Reviews 5.0</span> <StarRating rating={5.0} /> <span className="text-gray-500 text-sm ml-auto">Powered by</span> <img src="https://www.jellyfishtechnologies.com/wp-content/uploads/2023/10/clutch-svg.png" alt="Clutch" className="h-6" />
                </div>
                <div className="relative h-80">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={`absolute w-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                            <div className={`w-full max-w-2xl mx-auto bg-gray-900/80 backdrop-blur-sm ring-1 ring-white/10 rounded-2xl p-8`}>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="font-bold text-lg">{testimonial.rating.toFixed(1)}</span> <StarRating rating={testimonial.rating} />
                                </div>
                                <p className="text-gray-300 text-xl italic mb-6 h-24">"{testimonial.text}"</p>
                                <p className="font-semibold text-blue-400 text-right">{testimonial.author}</p>
                                <div className="flex items-center gap-2 mt-4 text-sm text-green-400">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span>Verified Review</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 10: Final CTA Section
const FinalCtaSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900">
             <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
                 <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Ready To Unleash The Full Potential Of Your Data With Our Data Analytics Services?</h2>
                 <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                    With expertise in data transformation and compelling visualization, coupled with profound industry knowledge, our solutions are meticulously customized to align with your unique requirements. Contact us today to embark on a data-driven journey that will transform your data into a strategic asset.
                 </p>
                 <div className={`mt-8 transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                    <button className="bg-white text-black font-bold rounded-full py-4 px-8 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105">
                        Calculate Project Estimate
                    </button>
                 </div>
             </div>
        </div>
    );
};

// Section 11: Guide Section
const GuideSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const [activeTab, setActiveTab] = useState('trends');

    const guideContent = {
        trends: {
            title: 'What Trends and Technologies Are Shaping the Field of Data Analytics?',
            content: "The realm of data analytics is in a perpetual state of transformation, driven by an array of trends and technologies. One noteworthy trend is the integration of big data analytics solutions, which empower businesses to glean valuable insights from extensive datasets, providing a deeper understanding of customer behavior, market dynamics, and operational efficiencies. \n\n Additionally, the surge of cloud business intelligence solutions is significantly impacting the data analytics landscape. This trend is primarily fueled by the increasing need for enhanced accessibility and collaboration in today’s remote work environment. Cloud-based services offer organizations adaptable and scalable platforms for data storage and analysis, culminating in improved data accessibility, streamlined insights sharing, and the facilitation of collaborative teamwork. \n\n Another pivotal trend shaping the data analytics arena is the escalating focus on data security. Given the escalating data volumes being processed, data analytics consulting services are placing a heightened emphasis on data protection and privacy. Companies are adopting sophisticated security measures to ensure data integrity and confidentiality, encompassing the implementation of stringent data access controls, encryption techniques, and adherence to data protection regulations. \n\n In summary, the field of data analytics is undergoing significant transformations to meet the evolving needs of businesses. Trends, such as the integration of big data analytics solutions, the prominence of cloud business intelligence solutions, and the increased focus on data security are propelling the demand for data analytics services. These trends and technologies are shaping the future of data analytics and are poised to have a lasting impact on the industry. \n\n The realm of data analytics is in a perpetual state of transformation, driven by an array of trends and technologies. One noteworthy trend is the integration of big data analytics solutions, which empower businesses to glean valuable insights from extensive datasets, providing a deeper understanding of customer behavior, market dynamics, and operational efficiencies. \n\n Additionally, the surge of cloud business intelligence solutions is significantly impacting the data analytics landscape. This trend is primarily fueled by the increasing need for enhanced accessibility and collaboration in today’s remote work environment. Cloud-based services offer organizations adaptable and scalable platforms for data storage and analysis, culminating in improved data accessibility, streamlined insights sharing, and the facilitation of collaborative teamwork. \n\n Another pivotal trend shaping the data analytics arena is the escalating focus on data security. Given the escalating data volumes being processed, data analytics consulting services are placing a heightened emphasis on data protection and privacy. Companies are adopting sophisticated security measures to ensure data integrity and confidentiality, encompassing the implementation of stringent data access controls, encryption techniques, and adherence to data protection regulations. \n\n In summary, the field of data analytics is undergoing significant transformations to meet the evolving needs of businesses. Trends, such as the integration of big data analytics solutions, the prominence of cloud business intelligence solutions, and the increased focus on data security are propelling the demand for data analytics services. These trends and technologies are shaping the future of data analytics and are poised to have a lasting impact on the industry."
        },
        significance: {
            title: 'What Is the Significance of Data Analytics for Business?',
            content: "In today’s digital age, data analytics services have become the cornerstone of business success. These data & analytics services provide a powerful tool to extract insights from the wealth of data at a company’s disposal with the primary goal of making informed decisions, enhancing operational efficiency, and fostering innovation. \n\n Furthermore, data analytics services, such as big data analytics services, play a vital role in optimizing business operations. It helps organizations pinpoint inefficiencies and streamline their processes which is crucial for resource allocation and cost reduction. \n\n The insights derived from data analysis also reveal new opportunities and market trends, enabling companies to outpace the competition in an era of rapid technological change. This, in turn, assists companies in maintaining innovation and relevance within their respective industries. \n\n Lastly, data analytics consulting services assist companies in delivering personalized customer experiences. Contented customers are also more likely to become loyal patrons and advocates for the brand. In summary, data analytics services go beyond mere buzzwords; they are a strategic imperative for businesses aiming to excel in today’s data-rich landscape."
        },
        challenges: {
            title: 'How Are Industry Challenges Solved with Data Analytics Consulting?',
            content: "Industry challenges are effectively addressed through the implementation of data analytics consulting services. These challenges can encompass a range of issues, from market fluctuations to operational inefficiencies, which result in a significant impact on business operations and profitability. \n\n By leveraging data analytics services, businesses gain the capability to extract actionable insights from their data, which helps in making informed decisions. Whether it’s identifying customer trends or optimizing supply chain management, data analytics consulting offers the tools to tackle these issues head-on. \n\n Data analytics consulting services go beyond the surface level of data analysis. They involve a comprehensive approach that often includes data science services, ensuring the data is not only analyzed but also processed, cleaned, and transformed into valuable information. This deep data expertise is essential for addressing industry-specific challenges that may involve complex data sets. \n\n Additionally, data consulting services provide businesses with the opportunity to develop data-driven strategies, which can be vital in overcoming industry challenges. By understanding the unique needs and nuances of a particular sector, data analytics consulting experts can tailor their services to address the specific issues faced by businesses in that industry."
        },
        benefits: {
            title: 'What Are the Benefits of Integrating Machine Learning with Data Analytics Consulting?',
            content: "Integrating machine learning with data analytics consulting offers a myriad of benefits for businesses. Machine learning algorithms can analyze vast datasets, identify patterns, and provide insights at a speed and scale that would be challenging to achieve manually. This synergy between data analytics and machine learning translates into quicker, more accurate decision-making, a key advantage for businesses in today’s fast-paced, data-driven environment. \n\n Another significant benefit is the ability to uncover deeper insights. Machine learning models can delve into data with a level of complexity that may elude traditional data analytics methods. By combining these approaches, data consulting services can deliver a comprehensive understanding of data, offering more profound and actionable insights to drive business strategies. \n\n Moreover, integrating machine learning with data analytics services fosters predictive analytics. Machine learning models can predict future trends, customer behavior, and potential issues, allowing businesses to address challenges and seize opportunities proactively. This predictive capability is invaluable for enhancing operational efficiency and staying ahead in competitive markets. \n\n Finally, the synergy between machine learning and data analytics consulting helps in automating repetitive tasks. Machine learning models can handle routine data analysis, freeing up human resources to focus on higher-value tasks such as strategic planning and creative problem-solving. This automation not only reduces operational costs but also accelerates the overall decision-making process."
        },
        hire: {
            title: 'Why Hire Data Scientists and Leverage Data Analytics Services for Your Business?',
            content: "Hiring data scientists and leveraging data analytics services is a strategic move for businesses seeking to harness the full potential of their data. These services go beyond internal capabilities, introducing specialists well-versed in the latest data analysis techniques and tools. Their expertise allows them to navigate complex data sets, unveil intricate patterns, and provide invaluable insights, tackling challenges that can surface when solely relying on in-house resources. \n\n Secondly, hiring offshore data analysts or outsourced data analysts offers cost-effective solutions. Instead of building an entire in-house data team, which can be expensive and time-consuming, businesses can tap into the expertise of data analytics experts on a project basis. This flexibility in hiring allows them to scale up or down based on their specific needs, saving costs while maintaining efficiency. \n\n Moreover, data analytics consulting services are instrumental in driving informed decision-making. By sifting through data, they help you identify growth opportunities, optimize operations, and tailor marketing strategies. This leads to more precise business strategies, ultimately enhancing your competitive edge. \n\n In conclusion, the decision to hire data scientists and data analytics services is a strategic one. It grants your business access to specialized expertise, cost-effective solutions, and data-driven decision-making capabilities. In an era where data is a valuable asset, leveraging the skills of data analytics experts is a forward-thinking move that can lead to business growth and success."
        }
    };

    const tabs = [
        { id: 'trends', label: 'What Trends and Technologies Are Shaping the Field of Data Analytics?' },
        { id: 'significance', label: 'What Is the Significance of Data Analytics for Business?' },
        { id: 'challenges', label: 'How Are Industry Challenges Solved with Data Analytics Consulting?' },
        { id: 'benefits', label: 'What Are the Benefits of Integrating Machine Learning with Data Analytics Consulting?' },
        { id: 'hire', label: 'Why Hire Data Scientists and Leverage Data Analytics Services for Your Business?' },
    ];

    const currentContent = guideContent[activeTab];

    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>An Essential Guide to Data Analytics Services</h2>
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
                                <p className="text-gray-400 whitespace-pre-line">{currentContent.content}</p>
                            </div>
                        </div>
                    </div>
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
            description: 'We place a team of skilled professionals exclusively on your projects, offering expanded capabilities and complete project oversight.',
            points: ['Exclusive Team', 'Ongoing Collaboration', 'Scalability', 'Cost-Effective']
        },
        {
            title: 'Team Augmentation',
            description: 'We offer highly experienced data analytics experts to complement your existing team, providing flexibility, on-demand expertise, and shortened project timelines.',
            points: ['Augmenting Skills', 'On-Demand Expertise', 'Seamless Integration', 'Heightened Productivity']
        },
        {
            title: 'Project-Based',
            description: 'Choose our project-based approach as benefit from a focused strategy, fixed timelines, and budget control, all of which contribute to the success of your project.',
            points: ['Fixed Timelines', 'Budget Control', 'Outcome Oriented', 'Reduced Risk']
        },
    ];

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Engagement Models</h2>
                    <p className={`mt-4 max-w-2xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Explore our flexible engagement models tailored to meet your data analytics needs.
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

// Section 13: FaqSection
const FaqSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: "What are the prerequisites for data analytics consultation?",
            a: "Data analytics consultation prerequisites involve defining business goals, collecting pertinent data, and engaging with a team or partner experienced in data analytics to facilitate the process."
        },
        {
            q: "What steps are included in the data analytics development process?",
            a: "The data analytics development process encompasses data collection, preprocessing, exploratory data analysis, model selection, training, evaluation, and results interpretation to deliver actionable insights."
        },
        {
            q: "Why is MLOps important for data analytics?",
            a: "MLOps is vital for data analytics as it ensures the seamless integration and reliable operation of machine learning models throughout the analytics process, enhancing performance and scalability."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>FAQ's</h2>
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