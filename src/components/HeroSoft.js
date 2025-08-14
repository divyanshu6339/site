


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
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Outsource Software Development Services</h1>
          <p className={`text-xl text-gray-400 mb-8 leading-relaxed transition-all duration-1000 ease-out delay-200 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Jellyfish Technologies has 14+ years of expertise in software outsourcing and delivering projects across industries. We design, build, test, support, and deploy software for businesses like healthcare, fintech, proptech, media & entertainment, and many more. We take pride in being one of the leading outsourcing software development company.</p>
          <button className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full overflow-hidden transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-20"></span>
            <span className="relative">Get a custom quote</span>
          </button>
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center">
          <div className={`relative transition-all duration-1000 ease-in-out delay-500 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ perspective: '1000px' }}>
            <img src="https://www.jellyfishtechnologies.com/wp-content/uploads/2023/12/Outsource-Software-Development-Services.webp" className="w-full h-auto max-w-xl rounded-2xl" style={{ animation: 'float 6s ease-in-out infinite' }} />
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
    { title: "Software Development Consulting", description: "With our software development outsourcing services, you will be able to identify the software solutions required to meet your specific business requirements. We at Jellyfish Technologies provide tech stack assessment, software infrastructure and redesign, and software modernization to enterprises of various industries to improve product and service quality." },
    { title: "Outsource Custom Software Development", description: "Promote your business with our top-notch custom software development services. Outsource developers from us for tailored solutions that align perfectly with your unique needs, ensuring efficiency, innovation, and a competitive edge in the dynamic market landscape. Partner with us for seamless, top-notch custom software development." },
    { title: "IT Outsourcing Services", description: "Discover cost-effective excellence with our software development outsourcing company. Enlist a certified IT workforce dedicated to your project’s success. From requirements and planning to seamless deployment, our services encompass design, architecture, frontend & backend development, QA testing, and support. Elevate your business outcomes with us." },
    { title: "Offshore Development Center", description: "Take your business a step ahead through our Offshore development center services. We provide a dedicated team, streamline communication, and provide innovative technological solutions to drive projects forward. Enhance efficiency, reduce costs, and achieve your unique business goals with our expert ODC solutions." },
    { title: "IT Staff Augmentation", description: "Jellyfish Technologies provides your IT department with certified resources, bringing the expertise you require. Build your custom development team with our diverse skill set to convert your potential business goals faster and more cost-effectively.Hire the expert latest tech professionals, catering to your project needs." },
    { title: "Dedicated Development Teams", description: "We employ developers of all specializations with expertise in their domains. From software and mobile backend/frontend/full-stack developers, QA engineers, UI/UX designers, system administrators, etc.,—we provide top-notch software project outsourcing services for your projects’ seamless scalability." },
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
            Outsource Software Development Services We Offer
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
         With a passion for excellence, we provide high-quality software development outsourcing services. We integrate innovative technology through our custom software outsourcing services. With a client-centric approach, we an outsource software company—offer a suite of services designed to propel your software development project to success.
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
  const services = [ "Software Developing Consulting ", "Custom Software", "IT Outsourcing services", "Offshore software development", "IT Staff Augumentation", "Dedicated Development Teams", ];
  return (
    <div ref={ref} className="py-24 bg-blue-900/10">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}> Connect With Our Outsource Software Development Experts Now! </h2>
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Outsourced Software Development for Streamlined Project Delivery</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}> Our dedicated Software developers offer a range of benefits, with certified professionals skilled in emerging technologies like AI, low code/no code, and IoT. Hire dedicated software developers to integrate core tech strength and 24/7 support, ensuring seamless maintenance from code to production, offering your project success and scalability. </p>
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
        { num: '01', title: 'UX Services', description: 'We present exceptional digital experiences with our comprehensive UX services. From user research to prototyping, we craft intuitive interfaces that elevate your product. Our services include – UI/UX consulting, website design, mobile app design, interaction design, and UI testing, ensuring a seamless and delightful user journey.' },
        { num: '02', title: 'Mobile App Development', description: 'Our qualified developers employ modern technologies such as Kotlin, Swift, Flutter, React Native, XCode, Java, and SwiftUI to help businesses grow digitally. Specializing in cutting-edge mobile app development, we excel in maintenance and modernization, delivering swift and enhanced user experiences (UX) across Android and iOS platforms.' },
        { num: '03', title: 'Cloud Development', description: 'Embark on a transformative journey with our cloud development services. We specialize in cloud development, migration, modernization, and continuous integration/continuous delivery (CI/CD), and have expertise in top cloud platforms like AWS, Azure, and Google Cloud, tailored to your unique business requirements.' },
        { num: '04', title: 'DevOps Integration', description: 'At Jellyfish Technologies, we offer a comprehensive suite of DevOps integration services to help you achieve your business goals With expertise in tools like Git, Jenkins, Docker, Slack, etc., our outsourced software engineers ensure your software development lifecycle (SDLC) runs seamlessly from code to production.' },
        { num: '05', title: 'Legacy Modernization', description: 'Experience a transformative journey with our Legacy Modernization Services. Our dedicated team specializes in upgrading outdated systems, ensuring seamless transitions to modern, scalable, and efficient architectures. From legacy application assessment to migration, we offer innovative solutions to advance your technology landscape.' },
        { num: '06', title: 'Digital Transformation', description: 'Experience a profound shift in your business landscape with our digital transformation services. We provide end-to-end solutions, leveraging innovative technologies such as AI, IoT, and deep learning. Our services cover software development, deployment, innovative UI/UX, etc., ensuring your enterprise evolves dynamically to meet the challenges of the digital era.' },
        { num: '07', title: 'MVP Development', description: 'As a leading MVP development company, we understand a well-balanced Minimum Viable Product (MVP) is crucial to knowing the potential of a business idea. Our expertise ranges from idea validation to rapid prototyping and iterative development. We provide solutions using cutting-edge technologies, ensuring a market-ready MVP for a successful product journey.' },
        { num: '08', title: 'Software As A Service', description: 'Explore our Software as a Service (SAAS) offerings, providing game-changing solutions to your project requirements. Our qualified developers streamline data management, enhance efficiency, and lower your infrastructure costs. Software Development Outsourcing Services play a game-changing role in streamlining project workflows for businesses looking to optimize their IT development processes.' },
        { num: '09', title: 'AI Development', description: 'Experience the future with our AI development services. Our offerings include generative AI development services, AI product development services, AI/ML consulting services, AI integration and deployment services, natural language processing (NLP) services, and deep learning services. We specialize in developing solutions leveraging cutting-edge AI technologies.' },
    ];

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>How We Help in Outsource Software Development</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}> We bring certified expertise to your projects, from conceptualization to deployment. Our dedicated developers excel in strategic planning, design and development, quality assurance, testing, and ongoing support and maintenance. We ensure our outsourced software development services align with your project requirements.</p>
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
    {
        title: 'Onboard in 48 Hours',
        description: 'Jellyfish Technologies incorporates swift project commencement. With an agile approach, we ensure your team is onboarded within 48 hours, expediting the initiation of your projects. Experience efficiency and accelerated timelines with our custom software outsourcing company, as we prioritize your business objectives from the outset.'
    },
    {
        title: '4+ Yrs Exp Developers',
        description: 'We at Jellyfish Technologies have dedicated developers specializing in their particular domains, with an exceptional expertise of over 4 years. Benefit from a skilled team committed to delivering high-quality solutions, ensuring a wealth of knowledge and proficiency in navigating complex challenges and driving your projects to success.'
    },
    {
        title: 'Time Zone Aligned',
        description: 'With our time zone-aligned teams, you can rely on Jellyfish Technologies for seamless collaboration. Experience smooth communication and efficient project management as we ensure our work hours align with yours, fostering real-time interactions and timely project updates for a cohesive and productive partnership.'
    },
    {
        title: 'Flexible Hiring Models',
        description: 'We offer versatile hiring models tailored to your project needs, whether it’s dedicated teams, project-based, or fixed-price arrangements. Our flexible hiring models cater to diverse project needs, providing scalability and cost-effectiveness.'
    },
    {
        title: 'India’s Top 1% Software Talent',
        description: 'We encompass India’s top 1% of software talent. We pride ourselves on curating an elite team of certified developers, ensuring unparalleled expertise and innovation for your projects. Benefit from a team that consistently delivers superior results, propelling your business forward.'
    },
    {
        title: 'GDPR Principles Consideration',
        description: 'Jellyfish Technologies commits to data privacy. We prioritize GDPR principles in our practices, ensuring that your projects adhere to the highest standards of data protection. Trust us for secure and compliant software development, fostering trust and reliability in our partnership.'
    },
];
    
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
                <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Why Choose Jellyfish Technologies as a Software Outsourcing Company?</h2>
                <p className={`max-w-3xl mx-auto text-lg text-gray-400 mb-16 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Harness the expertise of our software development service experts and consultants to streamline operations, optimize productivity, and deliver user-centric, cutting-edge solutions, empowering your business with technological advancements and competitive advantages.</p>
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
                 <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Ready to Get Started With Our Offshore
Software Outsourcing?</h2>
                 <p className={`mt-4 max-w-2xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}> Ready to launch your vision? Our custom software development team is geared up to bring your ideas to life. Let’s embark on your unique project journey together, creating tailored solutions for your business needs.</p>
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
    what: {
        title: 'What is software development outsourcing?',
        content: [
            { text: 'Software development outsourcing is the process of hiring a third-party outsourcing company to handle some or all of your software development needs. This means entrusting an external outsourcing software company or team with the responsibility of building, maintaining, or enhancing your software solutions.' },
            { text: 'Here’s a breakdown of what gets outsourced:' },
            { title: 'Full projects', text: 'You offload the entire development process, from planning and coding to testing and deployment.' },
            { title: 'Specific tasks', text: 'You outsource specific parts of the development cycle, like front-end development, back-end development, or QA testing.' },
            { title: 'Specialized skills', text: 'You tap into the outsourcing company’s expertise for areas your in-house team might lack, like specific programming languages or niche technologies.' }
        ]
    },
    benefits: {
        title: 'Benefits Of Software Development Outsourcing',
        content: [
            { text: 'Software development outsourcing offers benefits for businesses of all sizes, from startups to established corporations. Here are some of the most compelling advantages:' },
            { title: 'Cost Efficiency:', points: ['Reduced overhead costs: No need to invest in infrastructure, software licenses, or additional office space for in-house developers.'] },
            { title: 'Increased Speed and Scalability:', points: ['Scalability on demand: Easily scale your development team up or down based on project needs without the hassle of recruitment and onboarding.', 'Focus on core business: Free up your internal resources to focus on core business functions while the outsourcing company handles the development.'] },
            { title: 'Access to Talent and Expertise:', points: ['Wider talent pool: Tap into a global network of skilled developers, including those with specialized skills or niche technology expertise.'] },
            { title: 'Other Benefits:', points: ['Risk Mitigation: Share development risk with the outsourcing company, potentially minimizing the impact of project failures or delays.', 'Enhanced flexibility: Adapt your development resources to changing market demands and project requirements more easily.'] }
        ]
    },
    process: {
        title: 'The Stages/Process Of Our Outsourcing Service',
        content: [
            { text: 'Here’s an outline of the typical stages/processes involved in the IT development outsourcing service provided by our company:' },
            { title: 'Client Consultation and Requirement Analysis', points: ['Initial discussions with the client to understand their project requirements, goals, and expectations.', 'Detailed analysis of the project scope, budget constraints, and timelines.'] },
            { title: 'Proposal and Contract Negotiation', points: ['Preparation of a comprehensive proposal outlining the project plan, timelines, deliverables, and cost estimates.', 'Negotiation of terms and agreement on the contract details.'] },
            { title: 'Project Kickoff', points: ['Formal initiation of the project with a kickoff meeting involving both the client and the outsourcing team.', 'Introduction of key team members, clarification of roles, and alignment on project objectives.'] },
            { title: 'Development Planning', points: ['Detailed project planning, including the selection of technologies, development methodologies, and resource allocation.'] },
            { title: 'Design and Development', points: ['Development of system architecture and design based on the project requirements.', 'Implementation of the software according to the approved design.'] },
            { title: 'Quality Assurance and Testing', points: ['Rigorous testing of the software to ensure functionality, performance, and security.', 'Iterative testing and debugging are needed.'] },
            { title: 'Client Review and Feedback', points: ['Regular updates and demonstrations to the client to gather constructive feedback and make adjustments as necessary.'] },
            { title: 'Deployment and Implementation', points: ['Release of the final product or features to the production environment.', 'Support during the initial implementation phase.'] },
            { title: 'Maintenance and Support', points: ['Ongoing maintenance, updates, and support as needed.', 'Monitoring system performance and addressing any issues that may arise.'] }
        ]
    },
    tech: {
        title: 'Top Technologies We have expertise In',
        content: [
            { text: 'As a software development outsourcing company, the expertise of our team spans a wide range of technologies to meet diverse client needs. Here’s an overview of the top technologies in which we have expertise:' },
            { title: 'Programming Languages:', points: ['Java', 'Python', 'JavaScript', 'C#', 'Ruby', 'PHP'] },
            { title: 'Web Development Frameworks:', points: ['React.js', 'Angular', 'Vue.js', 'Django', 'Laravel'] },
            { title: 'Mobile App Development:', points: ['Swift (iOS)', 'Kotlin (Android)', 'React Native', 'Flutter'] },
            { title: 'Backend Development:', points: ['Node.js', 'Express.js', 'Spring Boot', 'Flask'] },
            { title: 'Cloud Services:', points: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (GCP)'] },
            { title: 'DevOps and CI/CD:', points: ['Docker', 'Git', 'Jenkins', 'Travis CI'] },
            { title: 'Machine Learning (ML) and AI:', points: ['TensorFlow', 'PyTorch', 'Sonnet'] },
            { title: 'Project Management and Collaboration Tools:', points: ['Jira', 'Trello', 'Asana', 'Slack'] },
            { text: 'Our team of certified developers is adaptable to new technologies and tools as they emerge.' }
        ]
    },
    industries: {
        title: 'Industries That Benefit from Software Outsourcing',
        content: [
            { title: 'Technology:', points: ['Startups: Access skilled developers at lower costs, accelerate product development, and stay competitive.', 'Outsource IT Development Companies: Scale their teams quickly, access specialized expertise, and improve project profitability.'] },
            { title: 'Healthcare:', points: ['Hospitals and Clinics: Develop patient portals, telemedicine applications, and electronic health records (EHR) systems at competitive rates.', 'Pharmaceutical Companies: Build research and development platforms, clinical trial management systems, and drug discovery tools.'] },
            { title: 'Finance and Fintech:', points: ['Banks and Insurance Companies: Implement core banking systems, trading platforms, and risk management applications.', 'Payment Processing Companies: Develop secure payment gateways, mobile wallets, and fraud detection systems.'] },
            { title: 'Retail and E-commerce:', points: ['Online Retailers: Develop eCommerce platforms, mobile apps, and recommendation engines.', 'Logistics and Delivery Companies: Optimize delivery routes, track shipments, and build custom logistics software.'] },
            { title: 'Travel and Hospitality:', points: ['Travel Agencies: Develop online booking platforms, mobile travel apps, and personalized travel recommendations.', 'Tourism Boards: Build interactive travel websites, mobile apps, and marketing campaigns.'] },
            { title: 'Education and Edtech:', points: ['Online Education Universities & Companies: Build Massive Open Online Courses (MOOC) platforms, personalized learning dashboards, and content creation tools.', 'Educational Publishers: Develop digital textbooks, interactive learning materials, and assessment tools.'] },
            { title: 'Media and Entertainment:', points: ['Streaming Services: Develop video streaming platforms, content management systems, and recommendation algorithms.', 'Gaming Companies: Build online games, mobile apps, and game engines.'] },
            { title: 'Government and Public Sector:', points: ['Government Agencies: Develop citizen service portals, voting systems, and data analysis platforms.', 'Defense and Aerospace: Develop simulation software, communication systems, and mission-critical applications.'] }
        ]
    }
    };

    const tabs = [
        { id: 'what', label: 'What is software development outsourcing?' },
        { id: 'benefits', label: 'Benefits Of Software Development Outsourcing' },
        { id: 'process', label: 'The Stages/Process Of Our Outsourcing Service' },
        { id: 'tech', label: 'Top Technologies We have expertise In' },
        { id: 'industries', label: 'Industries That Benefit from Software Outsourcing' },
    ];

    const currentContent = guideContent[activeTab];

    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>User Guide To Offshore Software Outsourcing</h2>
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
                                        {/* This part handles the title */}
                                        {item.title && <h4 className="text-xl font-semibold text-blue-400 mb-2">{item.title}</h4>}

                                        {/* This handles simple text paragraphs */}
                                        {item.text && <p className="text-gray-400">{item.text}</p>}

                                        {/* This new part handles the points array */}
                                        {item.points && (
                                            <ul className="space-y-2 list-disc list-inside text-gray-400">
                                                {item.points.map((point, pointIndex) => (
                                                    <li key={pointIndex}>{point}</li>
                                                ))}
                                            </ul>
                                        )}
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
        q: "Do you guarantee the security and confidentiality of our intellectual property?",
        a: "Yes, we take the security and confidentiality of your intellectual property very seriously. Our company follows non-disclosure agreements (NDAs) and GDPR principles, has robust security protocols, and implements industry best practices to safeguard your project information."
    },
    {
        q: "What is the cost of software outsourcing services?",
        a: `The cost of software outsourcing services can vary significantly depending on the region you choose. Here’s a breakdown of the average hourly rates for developers in different regions:\n\n- Eastern Europe: $20-$45\n- Central and Eastern Europe: $26-$95\n- Latin America: $34-$96\n- South Asia: $15-$40\n- Southeast Asia: $20-$50\n- Africa: $25-$45\n- Western Europe: $40-$85\n- North America: $62-$209\n- India: $20-$35\n\nIT development companies seeking to enhance their development capabilities often opt to outsource software engineers from global regions, tapping into a pool of skilled professionals to accelerate project delivery.`
    },
    {
        q: "Do you provide NDA and IP protection for my project?",
        a: "Yes, protecting your intellectual property is of utmost importance to us. We understand the sensitive nature of the information involved in software development outsource projects. To ensure the confidentiality of your intellectual property, we are more than willing to enter into a Non-Disclosure Agreement (NDA) with you. In addition to the NDA, our contracts typically include clauses related to intellectual property (IP) protection. These clauses outline the ownership of the developed software and any associated rights."
    },
    {
        q: "What are the most effective software development outsourcing models?",
        a: `Following are the models incorporated by top outsourcing companies:\n\nLocation-based software development outsourcing models\n- Nearshore Outsourcing\n- Offshore Outsourcing\n- Onsite Outsourcing\n- Multisource Outsourcing\n\nRelationship-Based Software Development Outsourcing Models\n- Staff Augmentation Model\n- Dedicated Team Model\n- Project Based Model\n\nContract-Based Software Development Outsourcing Models\n- Fixed Price Model\n- Time and Material Model`
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
            title: 'Offshore Dedicated Team',
            description: 'Jellyfish Technologies’ dedicated team model functions as an Offshore Development Center (ODC), delivering a tailored approach. This specialized center works exclusively on the client’s project, ensuring cost-effectiveness, scalability, optimized outcomes, efficiency, and high-quality standards.',
            points: ['Client-Centric Team Formation', 'Direct Reporting And Transparency', 'Scalability And Flexibility', 'Quality And Efficiency']
        },
        {
            title: 'Staff Augmentation',
            description: 'Jellyfish Technologies offers a staff augmentation approach. Ideal for short-term support or filling skill gaps, this model provides flexibility and immediate access to the expertise required. Ideal for companies aiming to enhance their productivity with specific expertise for better project outcomes.',
            points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'High Quality & Flexibility']
        },
        {
            title: 'Project-Based',
            description: 'Jellyfish Technologies’ project-based engagement model offers a structured approach for well-defined projects within a set scope, time, and budget. This model guarantees timely, on-budget delivery, meeting quality standards, and fostering collaboration for successful outcomes.',
            points: ['Fixed Budget', 'Milestones And Deliverables', 'Resource Allocation', 'Risk Mitigation']
        },
    ];

    // The rest of your component's rendering logic would go here
    // return ( ... );


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
      
      <ExpertiseSection />
      <TechStackSection/>
      
      <GetStartedSection />
      <GuideSection />
      <EngagementModelsSection />
       <TestimonialsSection />
      <FaqSection />
      
     
    </div>
  );
}
