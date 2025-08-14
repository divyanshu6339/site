import React, { useState, useEffect, useRef } from 'react';

// A single, self-contained component for the Development Services section
const DevelopmentServicesSection = () => {
    // Custom hook to detect if an element is on screen, defined within the component scope
    const useOnScreen = (options) => {
        const ref = useRef(null);
        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            const currentRef = ref.current; // Capture ref.current to use in the cleanup function
            const observer = new IntersectionObserver(
                ([entry]) => {
                    // Update state when element is intersecting
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        // Stop observing the element once it is visible to improve performance
                        observer.unobserve(entry.target);
                    }
                },
                options
            );

            if (currentRef) {
                observer.observe(currentRef);
            }

            return () => {
                if (currentRef) {
                    observer.unobserve(currentRef);
                }
            };
        }, [ref, options]); // Effect dependencies

        return [ref, isVisible];
    };

    // Data for the service cards, now part of the component's scope
    const servicesData = [
      {
        title: 'Fintech',
        description: 'Our fintech software development services cater to the dynamic needs of the financial technology industry.',
        items: [
          'Financial Transactions Monitoring',
          'Financial Risk Management',
          'Anti-Money Laundering Compliance',
          'Mobile Money Transfer',
        ],
      },
      {
        title: 'Healthcare',
        description: 'Our healthcare software solutions streamline operations, improve patient care, and ensure compliance within the healthcare sector.',
        items: [
          'Custom EMR/EHR Software',
          'Therapy Practice Software',
          'Homecare Services Platform',
          'Online Pharmacy Supply',
        ],
      },
      {
        title: 'Insurance',
        description: 'Our insurance software development services develop customized solutions that automate processes, enhance customer experiences, and enable data-driven decision-making.',
        items: [
          'Policy Management System',
          'Risk Assessment Modeling',
          'Fraud Detection Prevention',
          'Digital Claims Processing',
        ],
      },
      {
        title: 'Transportation',
        description: 'Our transportation software solutions optimize transportation services while enhancing visibility and collaboration across the entire supply chain.',
        items: [
          'Fleet Management Tracking',
          'Freight Forwarding Platform',
          'Intelligent Transportation System (ITS)',
          'Transportation Marketplace Platform',
        ],
      },
      {
        title: 'Oil & Gas',
        description: 'Our oil and gas software development services cover upstream, midstream, and downstream operations.',
        items: [
          'Exploration and Production Management',
          'Refinery Management System',
          'Pipeline Integrity Management',
          'Environmental Compliance and Reporting',
        ],
      },
      {
        title: 'Retail',
        description: 'Our retail software solutions enable seamless omnichannel experiences, supply chain optimization, and data-driven decision-making.',
        items: [
          'Multi-Channel eCommerce Management',
          'B2B & B2C Marketplace Solutions',
          'Custom POS Solution',
          'AR Product Selection Solution',
        ],
      },
    ];

    // SVG Icon Components defined locally
    const CheckCircleIcon = () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-indigo-400 mr-3 flex-shrink-0"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    );

    const ChevronRightIcon = () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 text-indigo-400 mr-2 mt-1 flex-shrink-0"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    );

    // Service Card Component, also defined locally
    const ServiceCard = ({ title, description, items, index }) => {
        const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

        return (
            <div
                ref={ref}
                className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 flex flex-col h-full transform hover:-translate-y-2 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
            >
                <div className="flex items-center mb-4">
                    <CheckCircleIcon />
                    <h3 className="text-xl font-bold text-gray-100">{title}</h3>
                </div>
                <p className="text-gray-400 mb-5 flex-grow">{description}</p>
                <ul className="space-y-3">
                    {items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                            <ChevronRightIcon />
                            <span className="text-gray-300">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    // Main component logic and state
    const [headerRef, isHeaderVisible] = useOnScreen({ threshold: 0.2 });

    // The returned JSX for the entire section
    return (
        <div className="bg-gray-900 min-h-screen font-sans p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div ref={headerRef} className="text-center mb-12 md:mb-16">
                    <h1 className={`text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-4 transition-all duration-700 ease-out ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Development Services and Solutions
                    </h1>
                    <p className={`text-lg md:text-xl text-gray-400 max-w-4xl mx-auto transition-all duration-700 ease-out delay-150 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Jellyfish Technologies is at the forefront of delivering innovative and reliable software solutions. From healthcare to finance and beyond, we specialize in crafting custom software solutions that address industry-specific challenges, streamline processes, and drive innovation, ensuring your organization stays ahead in digital transformation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            index={index}
                            title={service.title}
                            description={service.description}
                            items={service.items}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};



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


// Section 1: Hero Section - NOW WITH INTERACTIVE PARTICLE BACKGROUND
const ITStaffAugmentationSection = () => {
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
        radius: (canvas.height / 120) * (canvas.width / 120)
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
            ctx.fillStyle = 'rgba(128, 154, 239, 1)';
            ctx.fill();
        }
        update() {
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.directionY = -this.directionY;
            }
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius + this.size) {
                if (mouse.x < this.x && this.x < canvas.width - this.size * 10) { this.x += 5; }
                if (mouse.x > this.x && this.x > this.size * 10) { this.x -= 5; }
                if (mouse.y < this.y && this.y < canvas.height - this.size * 10) { this.y += 5; }
                if (mouse.y > this.y && this.y > this.size * 10) { this.y -= 5; }
            }
            this.x += this.directionX;
            this.y += this.directionY;
            this.draw();
        }
    }

    function init() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 9000;
        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 2) + 1;
            let x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * .4) - 0.2;
            let directionY = (Math.random() * .4) - 0.2;
            particlesArray.push(new Particle(x, y, directionX, directionY, size, 'rgba(100, 150, 255, 0.2)'));
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
        mouse.radius = (canvas.height / 120) * (canvas.width / 120);
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
    <div className="w-full min-h-screen flex items-center bg-black overflow-hidden relative">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>
      <div className="relative z-10 flex flex-col md:flex-row items-center w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full md:w-1/2 p-4 md:p-8 text-center md:text-left">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Enterprise Software Development Company</h1>
          <p className={`text-xl text-gray-400 mb-8 leading-relaxed transition-all duration-1000 ease-out delay-200 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>With our expert industry knowledge and technical expertise of 14+ years, we build reliable custom enterprise software solutions that support your business infrastructure seamlessly. We offer a full spectrum of app design, development and innovation, maintenance, 24*7 support services, and flexibility in engagement models for your project’s success.</p>
          <button className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full overflow-hidden transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-20"></span>
            <span className="relative">Get a custom quote</span>
          </button>
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center">
          <div className={`relative transition-all duration-1000 ease-in-out delay-500 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ perspective: '1000px' }}>
            <img src="https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/erp-hero-facts.webp" className="w-full h-auto max-w-xl rounded-2xl" style={{ animation: 'float 6s ease-in-out infinite' }} />
          </div>
        </div>
      </div>
      <style>{`@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0px); } }`}</style>
    </div>
  );
};

// ... (Keep other sections as they are)

// Section 2: Trusted By Logos
const TrustedBySection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const logos = [
        { src: "https://www.jellyfishtechnologies.com/wp-content/uploads/2023/10/payleadr.svg", alt: "Payleadr" },
        { src: "https://www.jellyfishtechnologies.com/wp-content/uploads/elementor/thumbs/patra_logo_black-quwihe83hf74a7rm5iakzcac5dnpzeqq1uhrf0vaik.png", alt: "Patra" },
        { src: "https://www.jellyfishtechnologies.com/wp-content/uploads/2023/10/Redquanta.svg", alt: "Redquanta" },
        { src: "https://www.jellyfishtechnologies.com/wp-content/uploads/elementor/thumbs/heffins-quwihe83hf74a7rm5iakzcac5dnpzeqq1uhrf0valm.png", alt: "Heffernan" }
    ];

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                        Trusted by
                    </h2>
                    <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
                        {logos.map((logo, index) => (
                            <div key={logo.alt} className={`flex justify-center items-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                                <div className="bg-white p-4 rounded-xl shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <img className="h-10 md:h-12 object-contain" src={logo.src} alt={logo.alt} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


// Section 3: Services We Offer - NOW WITH 3D TILT EFFECT
const ServicesSection = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const services = [
    { title: "Custom Retail Software Development", description: "Our enterprise software developers help you design and develop custom enterprise web & mobile solutions that automate workflows. Gain a competitive edge with our innovative, agile, and scalable digital solutions. Our services include both the development of new solutions and the optimization of your existing systems to ensure seamless integration within your IT infrastructure." },
    { title: "Digital Transformation Services", description: "Through our digital transformation services, we harness the power of innovative technologies and agile methodologies to deliver a successful digital transformation process. We ensure a smooth transition to secure, future-ready digital platforms. Our developers create responsive design, intuitive UI/UX, and scalable digital solutions that seamlessly integrate with your brand’s values." },
    { title: "Legacy Application Modernization", description: "Our legacy application modernization services help enterprises future-proof their existing systems by migrating them to modern architectures, frameworks, and platforms. We at Jellyfish Technologies integrate the latest technologies across systems to enhance software performance, scalability, and user experience while preserving critical business logic and data." },
    { title: "Software Integration Services", description: "Our software integration services enable seamless communication and data exchange between disparate systems, applications, and platforms within an organization’s IT ecosystem. We ensure interoperability, streamlined workflows, and optimized business processes through robust and secure integration solutions." },
    { title: "Enterprise Mobility Services", description: "We offer end-to-end enterprise mobility services, designing and developing mobile applications that empower your workforce with any-time, anywhere access to mission-critical data and functionality. Our solutions ensure optimal performance, security, and user experience across various mobile platforms." },
    { title: "Big Data & Analytics Services", description: "Incorporate our big data and analytics services to unlock valuable insights from your organization’s data assets. We provide software solutions for data ingestion, processing, storage, and analysis, enabling data-driven decision-making, predictive modeling, and actionable intelligence for competitive advantage." },
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
            const rotateX = (y / height - 0.5) * -20;
            const rotateY = (x / width - 0.5) * 20;
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
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                <p className="mt-4 text-gray-300">{service.description}</p>
            </div>
        </div>
    );
  };

  return (
    <div ref={ref} className="py-24 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500">
            Enterprise Software Development Services We Offer
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
          As a custom enterprise software development service provider, we focus on developing unique solutions that integrate advanced tech like blockchain, web3, machine learning (ML), artificial intelligence (AI), and more. Our strengths lie in building bespoke software and applications that are designed and developed as per your requirements.
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

// Section 4: Connect With Experts
const ConnectSection = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
  const services = [ "Custom Retail software Development", "Digital transformation services", "Legacy Application Modernization", "Software Integration services", "Enterprise Mobility Services", "Big Data analytics Services ", ];
  return (
    <div ref={ref} className="py-24 bg-blue-900/10">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}> Connect With Our Enterprise Software Development Experts Now! </h2>
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
          <button className="w-full md:w-auto bg-blue-600 text-white font-bold rounded-full py-3 px-8 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"> Let's Talk </button>
        </div>
      </div>
    </div>
  );
};

// Section 5: Project Success Section
const ProjectSuccessSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const caseStudies = [
        { id: 'fmintegrated', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/FMIntegrated-logo.svg', image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/FM-Integrated-768x768.webp', title: 'Unify All FM Operations On A Single Platform To Enhance Efficiency And Cut Costs.', description: 'Integrated FM Group, a leading facility management provider, collaborated with Alpixn Technologies to streamline operations...', points: ['Analyzed client’s operations and FM trends...', 'The work order and management feature was added...', 'Conducted constructive user testing sessions...', 'Enhanced facility managers to oversee service providers...'], tags: ['US', 'REACT', 'FACILITY MANAGEMENT'] },
        { id: 'patra', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/patra-corp.svg', image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/PatraCorp-768x768.webp', title: 'Empowers Brokers and Integrates With Top US Insurers For Swift Certificate Issuance And Optimal Premium Quotes.', description: 'Patra Corporation partnered with Alpixn Technologies to develop a secure, web-based payment automation solution...', points: ['API integration module with configuration...', 'The integration module has robust authorization...', 'XML transports diverse data formats...', 'Underwriting questions for risk assessment...'], tags: ['US', 'NODE.JS', 'SAILS', 'INSURTECH'] },
        { id: 'patronum', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/patronum.svg', image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/Patronum-768x768.webp', title: 'A SaaS Solution to Streamline Google Workspace User Management, Automating Tasks for Efficiency.', description: 'Alpixn Technologies facilitated the launch of Patronum (Bespin Labs). The developed platform streamlines Google Workspace tasks...', points: ['Code optimized for seamless handling...', 'Real-time updates for unstructured data...', 'Integrated Google API, enhancing product...', 'Automated provisioning and de-provisioning...'], tags: ['US', 'JS', 'GOLANG', 'IT'] },
        { id: 'heffernan', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/heffernan.svg', image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/Heffernan-768x768.webp', title: 'Develop An Internal Insurance App For Daily Storage Of Client’s Private Data By Employees.', description: 'Heffernan, a leading US insurance brokerage, partnered with Alpixn Technologies to develop a secure internal application...', points: ['With planning & research, evaluated app...', 'Top-notch user experience drove the design...', 'Developed a responsive UI with full accessibility...', 'App creates reports in CSV/PDF formats...'], tags: ['US', 'JAVA-SPRING BOOT', 'INSURTECH'] },
        { id: '149photos', logo: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/149.svg', image: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/Builder-Digital-768x768.webp', title: 'Visual Solutions For Builders/Homebuyers And Provides Weekly Build Progress Reports Via Photos.', description: 'Alpixn Technologies collaborated with Builder Digital Solutions to create and deliver various visual marketing solutions...', points: ['Improved UI with enhanced design...', 'Identified key features for mobile and web app...', '24/7 maintenance & support for uninterrupted...', 'We addressed bugs, refining existing features...'], tags: ['US', 'IONIC-ANGULAR', 'PROPTECH'] }
    ];
    const [activeTab, setActiveTab] = useState(caseStudies[0].id);
    const activeStudy = caseStudies.find(study => study.id === activeTab);

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Our Future-proof Enterprise Software Solutions</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}> Our enterprise software developers offer a range of benefits. With certified professionals skilled in emerging technologies like AI, low code/no code, and IoT, we provide core tech strength and 24/7 support, ensuring seamless maintenance from code to production, offering your project success and scalability. </p>
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
                                        <img src="https://www.jellyfishtechnologies.com/wp-content/uploads/2023/11/usa-flag.png" alt="USA" className="h-6 rounded" />
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

// Section 6: Expertise Section
const ExpertiseSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const expertiseAreas = [
        { num: '01', title: 'Enterprise Technology Consulting', description: 'Our enterprise technology consulting services provide strategic guidance and expert advice to organizations seeking to leverage emerging technologies and optimize their IT infrastructure. We help businesses make informed decisions, mitigate risks, and stay ahead of the curve in an ever-evolving digital landscape.' },
        { num: '02', title: 'Enterprise Data Management', description: 'Our enterprise data management solutions enable organizations to effectively manage, govern, and extract value from their data assets. We offer services for data architecture, integration, quality management, and security, ensuring data integrity, accessibility, and compliance with industry regulations.' },
        { num: '03', title: 'Managed IT Services & DevOps', description: 'Jellyfish Technologies offers managed IT services and DevOps solutions that enable businesses to focus on their core competencies while we handle IT operations, infrastructure management, and application development & deployment processes. We leverage advanced tools and methodologies to drive efficiency and agility.' },
        { num: '04', title: 'CRM Development', description: 'We specialize in developing custom Customer Relationship Management (CRM) solutions that streamline customer interactions, automate sales processes, and provide valuable insights for data-driven decision-making. Our CRM development services empower organizations to enhance their customer experiences.' },
        { num: '05', title: 'Salesforce Integration', description: 'Our Salesforce integration services enable organizations to integrate the Salesforce platform seamlessly with their existing systems, applications, and data sources. We at Jellyfish Technologies ensure efficient data exchange, streamlined workflows, and optimized business processes within the Salesforce ecosystem.' },
        { num: '06', title: 'Business Workflow Process', description: 'Our business workflow process solutions optimize and automate critical business processes, enhancing operational efficiency, reducing manual efforts, and improving overall productivity. We design and implement customized workflow solutions that align with your unique business requirements and industry best practices.' },
        { num: '07', title: 'Data Warehousing Solutions', description: 'Our data warehousing solutions enable organizations to consolidate and manage large volumes of data from disparate sources, facilitating advanced analytics, business intelligence, and informed decision-making with the integration of advanced tech stack. We design and implement scalable, high-performance data warehousing architectures tailored to your specific needs.' },
        { num: '08', title: 'Enterprise Resource Planning (ERP) Solutions', description: 'Our Enterprise Resource Planning (ERP) solutions integrate and streamline core business processes, including finance, accounting, procurement, inventory management, and human resources. We implement and customize industry-leading ERP systems to drive operational excellence and data-driven insights.' },
        { num: '09', title: 'Supply Chain Management (SCM) Solutions', description: 'Our Supply Chain Management (SCM) solutions optimize and automate supply chain processes, from procurement and inventory management to logistics and distribution. We deliver SCM solutions that enhance visibility, collaboration, and decision-making capabilities across the entire supply chain network.' },
    ];

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Our Enterprise Software Development Capabilities</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}> Jellyfish Technologies offers a comprehensive suite of enterprise software development services addressing diverse industries. With deep technical expertise, industry knowledge, and a commitment to excellence, we empower organizations to achieve digital transformation and gain a competitive edge through cutting-edge software development services.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {expertiseAreas.map((area, index) => (
                        <div key={area.num} className={`relative p-8 bg-gray-900/50 ring-1 ring-white/10 rounded-2xl transition-all duration-500 ease-out hover:ring-blue-500/50 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="absolute top-8 left-8 text-4xl font-bold text-gray-700">{area.num}</div>
                            <div className="relative pt-12"> <h3 className="text-2xl font-bold mb-3">{area.title}</h3> <p className="text-gray-400 leading-relaxed">{area.description}</p> </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Section 7: Why Choose Us Section
const WhyChooseUsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const reasons = [
        { title: 'Complex Delivery Experience', description: 'Experience the benefits of complex delivery expertise – refined proficiency, proven success, and surpassing expectations. Navigate intricate projects confidently with a dedicated team, ensuring optimal solutions and streamlined project outcomes.' },
        { title: 'Skilled DevOps Engineers', description: 'Alpixn Technologies stands out by offering flexible engagement models that cater to clients’ unique requirements. These models allow businesses to tailor their projects and resources according to their specific needs and budget constraints, promoting cost efficiency.' },
        { title: 'Best Security Integration', description: 'Experience superior security integration and its distinct advantages, thus helping users achieve robust protection and seamless integration. This will not only elevate your system’s resilience, fortify defenses, and ensure comprehensive security measures, but also create a safeguarded environment for sustained operational excellence.' },
        { title: 'Dedicated DevOps Team', description: 'The advantage of a dedicated DevOps team can be beneficial from specialized expertise, streamlined workflows, and enhanced collaboration. This can be achieved with optimal results as our committed professionals ensure efficient deployment, continuous integration, and scalable solutions.' },
        { title: 'Ongoing monitoring', description: 'Continuous monitoring brings numerous advantages. It ensures real-time insights, identifies potential issues promptly, and enhances overall system performance. This proactive approach fosters efficiency, security, and optimal functionality, leading to sustained success in dynamic environments.' },
        { title: 'Agile & Adaptive Approach', description: 'Embrace an agile and adaptive approach by achieving flexibility and responsiveness in project execution, ensuring swift adaptation to changing requirements. This approach enhances efficiency, collaboration, and the overall success of endeavors.' },
    ];
    
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
                <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Why Choose Alpixn Technologies as Your DevOps Consulting Services Provider?</h2>
                <p className={`max-w-3xl mx-auto text-lg text-gray-400 mb-16 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Looking for top-tier DevOps consulting services? Jellyfish Technology’s expert team ensures seamless integration, continuous delivery, and optimal automation, empowering your business with agile and efficient software development processes.</p>
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

// Section 8: Get Started Section
const GetStartedSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900">
             <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
                 <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Ready to Get Started With Our DevOps Consulting Services?</h2>
                 <p className={`mt-4 max-w-2xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}> DevOps services optimize operations through informed decisions on accessible cloud computing services. Our experts, proficient in all facets of cloud computing, ensure effective communication, making us leaders in DevOps service management.</p>
                 <div className={`mt-8 transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                    <button className="bg-blue-600 text-white font-bold rounded-full py-4 px-8 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"> Get an Estimate of Your Project Today </button>
                 </div>
             </div>
        </div>
    );
};

// Section 9: Guide Section
const GuideSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const [activeTab, setActiveTab] = useState('process');

    const guideContent = {
        process: {
            title: 'Enterprise Application Development Process',
            content: [
                { text: 'The enterprise application development process typically involves several stages, each crucial to the project’s success. These stages include:' },
                { title: 'Step 1- Requirements Gathering', text: 'When it comes to building enterprise applications, there’s a well-defined process that software development teams follow to ensure success. It all starts with understanding what the client or organization truly needs and wants to achieve. This crucial first step, called requirements gathering, involves sitting down with stakeholders, analyzing existing systems, and getting a clear picture of the key features and functionalities required in the new application.' },
                { title: 'Step 2- Architecture and Design', text: 'Once the team has a solid grasp of the requirements, it’s time to roll up their sleeves and get into the nitty-gritty of architecture and design. This stage is all about defining the application’s structure, designing the database, and user interface, and figuring out how it will integrate with other systems already in place. It’s like creating the blueprint for a house before you start building.' },
                { title: 'Step 3- Development and Testing', text: 'With the architecture and design in place, the real fun begins – coding! During the development and testing stage, the team brings the application to life by writing code, integrating various components, and rigorously testing every aspect to ensure it’s functioning as intended and meeting the required quality standards.' },
                { title: 'Step 4- Deployment and Maintenance', text: 'Finally, when the application is ready for prime time, it’s deployed to the production environment. This involves setting up servers, configuring databases, and ensuring a smooth transition from the development environment to the live, operational environment. But the work doesn’t stop there – the application requires ongoing maintenance, bug fixing, performance optimization, and updates to keep up with changing business needs and technological advancements.' },
                { text: 'This process requires careful planning, execution, and collaboration between the development team and the client to deliver a successful enterprise application that meets the organization’s needs and drives business value.' }
            ]
        },
        trends: {
            title: 'Technology Trends for Enterprise Software Development',
            content: [
                { text: 'The importance of enterprise software development shifts on an annual, monthly, or even daily basis. Entrepreneurs can look forward to some significant defining shifts, which would shape this industry.' },
                { title: '1. Generative AI', text: 'Generative AI is revolutionizing content creation, enabling enterprises to automate various tasks like writing, image generation, and code development, boosting productivity and efficiency.' },
                { title: '2. Quantum computing', text: 'Quantum computing harnesses quantum mechanics principles, offering exponential computing power for complex simulations, cryptography, and optimization problems, driving innovation across industries.' },
                { title: '3. AI data management', text: 'AI-driven data management solutions ensure efficient data governance, quality control, and insight extraction, empowering enterprises to make data-driven decisions.' },
                { title: '4. Low-Code/No-Code EAS Development', text: 'Low-code/no-code platforms enable rapid application development with minimal coding, allowing businesses to quickly adapt to changing requirements and accelerate digital transformation.' },
                { title: '5. Artificial Intelligence', text: 'AI is transforming enterprises by automating processes, enhancing decision-making, and enabling predictive analytics, driving operational efficiencies and competitive advantages.' },
                { title: '6. Mixed Reality', text: 'Mixed reality blends virtual and physical environments, enabling immersive training, product visualization, and remote collaboration, enhancing productivity and customer experiences.' },
                { title: '7. DevOps Integration', text: 'DevOps integration streamlines software development and deployment processes, fostering collaboration between development and operations teams, enabling faster time-to-market and continuous improvement.' },
                { text: 'Corporate software developments are reframing the tech infrastructure. Corporate software development focuses on creating applications for businesses and organizations. Enterprise-level software development requires expertise in scalability, security, and integration. Enterprise application development services provide custom software solutions for large enterprises.' }
            ]
        },
        benefits: {
            title: 'Benefits of Custom Enterprise Software Solutions',
            content: [
                 { text: 'Here are some key benefits of custom enterprise software solutions for businesses:' },
                { title: '1. Custom Software Solutions for Specific Business Needs', text: 'Custom software is designed and developed to meet the unique requirements and processes of an organization, ensuring a perfect fit for their operations and goals, unlike off-the-shelf solutions.' },
                { title: '2. Gain a Competitive Advantage', text: 'Customized software can provide businesses with a competitive edge by automating and streamlining processes specific to their industry or business model, improving efficiency, and enhancing customer experiences.' },
                { title: '3. Scalability and Flexibility', text: 'Custom enterprise software can be easily scaled and modified to accommodate business growth, changing market conditions, or evolving customer demands, ensuring long-term viability and adaptability.' },
                { title: '4. Seamless Integration', text: 'Custom solutions can seamlessly integrate with existing systems, applications, and databases within an organization’s IT infrastructure, enabling improved data flow, communication, and overall operational efficiency.' },
                { title: '5. Enhanced Security and Compliance', text: 'Custom software development allows for the implementation of robust security measures, data protection protocols, and compliance with industry-specific regulations, ensuring the safety and integrity of sensitive business data.' },
                { title: '6. Increased Productivity and Efficiency', text: 'By automating and streamlining processes, custom enterprise software can significantly reduce manual efforts, minimize errors, and improve overall productivity, leading to cost savings and increased profitability.' },
                { title: '7. Exclusive Ownership', text: 'Businesses have complete ownership and control over custom software, enabling them to make modifications, add new features, or integrate with other systems without being dependent on third-party vendors or licensing agreements.' }
            ]
        }
    };

    const tabs = [
        { id: 'process', label: 'Enterprise Application Development Process' },
        { id: 'trends', label: 'Technology Trends for Enterprise Software Development' },
        { id: 'benefits', label: 'Benefits of Custom Enterprise Software Solutions' },
    ];

    const currentContent = guideContent[activeTab];

    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>User Guide To Hire Software Developer</h2>
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
                                {currentContent.content.map((item, index) => (
                                    <div key={index}>
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
        {
            q: "What are enterprise software development companies?",
            a: "Enterprise software companies develop and sell software solutions designed for large organizations and businesses. They cater to enterprise-level requirements, scalability, and integrations. Enterprise software solutions companies offer reliable, new tech-oriented software products for enterprises. Developing enterprise software involves creating software tailored for large organizations. Enterprise software engineering applies engineering principles to build enterprise-grade software."
        },
        {
            q: "How much does enterprise app development cost?",
            a: "Enterprise app development costs vary significantly based on the complexity, features, and customizations required. Typical costs range from $50,000 to over $1 million for large-scale projects. Enterprise application software companies provide specialized applications for enterprises. Enterprise-level software development demands robust architectures and advanced features. Developing enterprise applications requires an understanding of enterprise-level requirements and processes."
        },
        {
            q: "What is a custom enterprise software development company?",
            a: "A custom enterprise software development company specializes in building end-to-end software solutions. Enterprise IT software development involves creating software solutions for enterprise-level IT systems. An enterprise solution software is a comprehensive application catering to various enterprise needs. A software company enterprise specializes in developing software for large businesses and corporations."
        },
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
            description: 'Jellyfish Technologies provides you with a dedicated team of enterprise software developers working exclusively on your project. It offers complete control, seamless collaboration, and a deep understanding of your unique business requirements.',
            points: ['Client-Centric Team Formation', 'Direct Reporting And Transparency', 'Scalability And Flexibility', 'Quality And Efficiency']
        },
        {
            title: 'Team Augmentation',
            description: 'Augment your in-house team with our skilled enterprise software developers to bridge talent gaps and meet project deadlines. This flexible model ensures efficient resource allocation and cost-effective solutions.',
            points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
        },
        {
            title: 'Project-Based',
            description: 'Jellyfish Technologies’ project-based engagement model offers a structured specific enterprise software development initiatives with defined scope and timelines. We assemble a specialized team to deliver high-quality solutions within your budget and timeline.',
            points: ['Fixed Budget', 'Milestones And Deliverables', 'Resource Allocation', 'Risk Mitigation']
        },
    ];

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Engagement Model</h2>
                    <p className={`mt-4 max-w-4xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Jellyfish Technologies offers versatile engagement models for custom enterprise software development services, providing innovative solutions to match clients’ unique requirements. Let’s explore these engagement models
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {models.map((model, index) => (
                        <div key={model.title} className={`p-8 bg-blue-900/20 ring-1 ring-blue-500/20 rounded-2xl transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <h3 className="text-3xl font-bold mb-4 text-center">{model.title}</h3>
                            <p className="text-gray-400 mb-6 text-center h-40">{model.description}</p>
                            <ul className="space-y-3">
                                {model.points.map(point => (
                                    <li key={point} className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
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

// Section 11: Testimonials Section - NOW AN AUTOPLAYING CAROUSEL
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

// Section 7: Tech Stack Section
const TechStackSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const [activeTab, setActiveTab] = useState('Languages');

    const techData = {
        Languages: [
            { name: '.Net', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/net.png' },
            { name: 'C#', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/c-sharp.webp' },
            { name: 'Golang', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/go.webp' },
            { name: 'Java', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/java.webp' },
            { name: 'JavaScript', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/js.webp' },
            { name: 'PHP', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/php.webp' },
            { name: 'Python', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/python.webp' },
            { name: 'RoR', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/rust.webp' },
            { name: 'Swift', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/swift.webp' },
            { name: 'Angular', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/angular.webp' },
            {name : 'AWS', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/aws.webp' },
            { name: 'Django', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/django.webp' },
            { name: 'Docker', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/docker-1.webp'},
            { name : 'Flutter' , icon :'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/flutter.webp'},
            { name: 'Laravel', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/laravel.webp' },
            {name : 'Node.js' , icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/nodejs.webp' },
            { name: 'React', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/react.webp' },
        ],
        Databases: [
            { name: 'Amazon RDS', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/aws.png' },
            { name: 'Azure SQL', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/azure.png' },
            { name: 'Cassandra', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/cassandra.png' },
            { name: 'Dynamo', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/dynamo.png' },
            { name: 'Elasticsearch', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/elastic.png' },
            { name: 'MongoDB', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/mongodb.png' },
            { name: 'PostgreSQL', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/mysql.png' },
            { name: 'Oracle', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/oracle.png' },
            { name: 'PostgreSQL', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/postgres.png' },
            { name: 'SQL Server', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/sql.png' },
        
        ],
        CloudDevOps: [
                { name: 'AWS', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/aws.webp' },
                { name: 'Google Cloud', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/vloud.webp' },
                { name: 'Terraform', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/terraform.png' },
                { name: 'Power BI', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/power-bi.png' },
                { name: 'SharePoint', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/sharepoint.png' },
                { name: 'Kubernetes', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/kubernet.webp' },
                { name: 'Kafka', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/kafka.webp' },
                { name: 'Jenkins', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/jenkins.webp' },
                { name: 'Azure', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/azure.webp' },
                { name: 'Docker', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/docker-1.webp' }
            ]
    };

    const tabs = [
        { id: 'Languages', label: 'Languages' },
        { id: 'Databases', label: 'Databases' },
        { id: 'CloudDevOps', label: 'CloudDevOps' },
    ];
    
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Our Tech Stack</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                       Our tech stack for enterprise software development encompasses a diverse range of cutting-edge technologies and frameworks. From robust programming languages and databases to cloud platforms and DevOps tools, we leverage the most suitable tech stack to build scalable, secure, and high-performance enterprise solutions
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

// Main App component
export default function App() {
  return (
    <div className="font-sans bg-black text-white overflow-x-hidden">
      <ITStaffAugmentationSection />
      <TrustedBySection />
      <ServicesSection />
      <ConnectSection />
      <ProjectSuccessSection />
      <DevelopmentServicesSection/>
      <ExpertiseSection />
      <TechStackSection/>
      
      
      <GuideSection />
      <FaqSection />
      <EngagementModelsSection />
      <TestimonialsSection />
    </div>
  );
}
