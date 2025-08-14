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
            ctx.fillStyle = 'rgba(100, 150, 255, 0.2)';
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
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>DevOps Services and Solutions</h1>
          <p className={`text-xl text-gray-400 mb-8 leading-relaxed transition-all duration-1000 ease-out delay-200 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Elevate your software development lifecycle with our tailored DevOps solutions. Jellyfish Technologies delivers comprehensive DevOps services, empowering seamless collaboration between development and operations teams. We specialize in continuous integration, automated testing, infrastructure as code, and deployment automation.</p>
          <button className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full overflow-hidden transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-20"></span>
            <span className="relative">Get a custom quote</span>
          </button>
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center">
          <div className={`relative transition-all duration-1000 ease-in-out delay-500 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ perspective: '1000px' }}>
            <img src="https://www.jellyfishtechnologies.com/wp-content/uploads/2024/03/devops-service.webp" className="w-full h-auto max-w-xl rounded-2xl" style={{ animation: 'float 6s ease-in-out infinite' }} />
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
    { title: "DevOps Consulting Services", description: "DevOps consulting services offered by Jellyfish Technologies streamline software delivery, enhance collaboration, and automate processes. Leverage the expertise for optimal efficiency, accelerated development, and improved deployment reliability, ensuring sustained business success." },
    { title: "Infrastructure Management", description: "Explore advanced infrastructure management through the comprehensive dev services offered here. Efficiently oversee, monitor, and optimize your IT infrastructure. Jellyfish Technologies’ solutions ensure scalability, security, and performance, empowering your business with a robust technological foundation." },
    { title: "DevOps CI/CD Services ", description: "As a DevOps company, we specialize in DevOps consulting services & CI/CD services, ensuring swift and automated delivery pipelines. This allows users to streamline software development with continuous integration, guaranteeing reliable code merges, automated testing, and seamless deployment for faster releases and enhanced product quality." },
    { title: "Azure DevOps Services", description: "Explore top-tier Azure DevOps services from Jellyfish Technologies, a leading service provider. We ensure that our users can leverage advanced tools for continuous integration, automated testing, and deployment. This enhances collaboration, streamlines workflows, and achieves faster, more efficient software development cycles on Azure." },
    { title: "AWS DevOps Services", description: "Leverage AWS DevOps consulting services for streamlined cloud solutions, optimizing scalability, security, and automation. The offerings encompass continuous integration, deployment, and infrastructure management, ensuring seamless, efficient operations and accelerated development cycles." },
    { title: "DevOps Containerization Services", description: "We excel in delivering cutting-edge DevOps containerization services, streamlining software deployment, and enhancing scalability. Users can benefit from rapid application development, consistent environments, and efficient resource utilization, ensuring agility and resilience in your IT infrastructure." },
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
            Comprehensive DevOps Services We Offer
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
           Alpixn Technologies excels in DevOps consulting services seamlessly integrating cloud computing solutions into your business operations. We offer strategic planning, migration, security, and optimization services, that aid in enhancing your efficiency through expertly tailored DevOps solutions, paving the way for a robust and streamlined IT infrastructure.
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
  const services = [ "Devops Consulting services", "infrastructure Management", "DevOps CI/CD Services", "Azure DevOps Services", "AWS DevOps Services", "DevOps Contani ", ];
  return (
    <div ref={ref} className="py-24 bg-blue-900/10">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}> Connect With a Cloud Consulting Services Expert Now! </h2>
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Our Dedicated Developers' Expertise Enhances Your Project Success</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}> Our dedicated Software developers offer a range of benefits, with certified professionals skilled in emerging technologies like AI, low code/no code, and IoT... </p>
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
        { num: '01', title: 'Continuous Monitoring', description: 'Experience heightened security and performance with our Continuous Monitoring solution. Proactively identify and address issues, ensuring a resilient and optimized environment. Safeguard your business with real-time insights and alerts.' },
        { num: '02', title: 'Containerisation/K8s', description: 'Unlock efficiency and scalability with our cutting-edge Containerization/Kubernetes solutions. Seamlessly deploy, manage, and scale applications. Revolutionize your infrastructure for enhanced performance and agility in the digital era.' },
        { num: '03', title: 'Release Management', description: 'Get streamlined software delivery with our Release Management solution. We orchestrate efficient deployment processes, minimizing risks and maximizing reliability. Elevate your releases with our expert management for optimal outcomes.' },
        { num: '04', title: 'Security Management (DevSecOps)', description: 'Jellyfish Technologies delivers robust Security Management (DevSecOps) solutions, seamlessly integrating security practices into the development lifecycle. Safeguard your applications with proactive measures, ensuring a resilient and secure digital environment.' },
        { num: '05', title: 'Testing and Health Monitoring', description: 'We offer robust testing and health monitoring solutions, ensuring the reliability and performance of your systems. Proactively identify issues, optimize functionality, and safeguard your digital infrastructure seamlessly.' },
        { num: '06', title: 'Ongoing Performance', description: 'Avail uninterrupted excellence with the Jellyfish technologies ongoing performance solution. We meticulously monitor, analyze, and optimize systems, ensuring peak performance to keep your business running seamlessly and efficiently.' },
        { num: '07', title: 'Optimization Serverless Architecture', description: 'Unlock unparalleled efficiency with our serverless architecture optimization. Our tailored solutions enhance scalability, reduce costs, and ensure seamless operation that will help elevate your business with cutting-edge serverless technologies.' },
        { num: '08', title: 'Security & Compliance Automation', description: 'Empower your business with our security & compliance automation solution. Safeguard data integrity, ensure regulatory adherence, and mitigate risks seamlessly. Achieve operational excellence while maintaining the highest standards of security.' },
        { num: '09', title: 'Third-Party Software Integration', description: 'Seamlessly integrate third-party software with expert solutions offered by Jellyfish Technologies that enhance functionality, streamline processes, and maximize efficiencies.' },
    ];

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Professional DevOps Services and Solutions for your Business Needs</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}> Elevate your business with professional DevOps services and solutions offered by Alpixn Technologies. We optimize workflows, enhance collaboration, and ensure seamless integration for improved agility and efficiency which tailors solutions to meet your unique business needs.</p>
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
    const [activeTab, setActiveTab] = useState('what');

    const guideContent = {
        // CORRECTED SECTION
        what: {
            title: 'Benefits of DevOps Solutions',
            content: [
                { text: 'Discover the transformative benefits of DevOps solutions with our essential guide. Streamline collaboration between development and operations, leading to faster, more reliable software delivery. Achieve increased efficiency through automated processes, enhanced communication, and continuous feedback loops. Embrace scalability, security, and innovation while reducing risks. Unlock the full potential of DevOps to propel your organization forward, optimizing workflows and ensuring a competitive edge in the dynamic landscape of software development.' },
                { text: '1. DevOps streamlines development and operations, facilitating faster and more reliable software releases.' },
                { text: '2. Automated processes improve efficiency, reducing manual errors and optimizing workflows.' },
                { text: '3. DevOps fosters collaboration between development and operations teams, enhancing communication and teamwork.' },
                { text: '4. Feedback loops ensure continuous improvement, allowing for quicker adjustments and innovation.' },
                { text: '5. Scalability and security are enhanced, enabling organizations to adapt to changing demands while maintaining robust protection.' },
            ]
        },
        process: {
            title: 'DevOps Approach & Lifecycle',
            content: [
                 { text: 'Navigate the DevOps approach and lifecycle with our essential guide. From continuous integration to deployment and monitoring, discover key practices. Foster collaboration, automate workflows, and ensure seamless delivery. Embrace a culture of continuous improvement, adapting to change effortlessly. Elevate your software development and IT operations by mastering the essential principles and methodologies of the DevOps lifecycle.' },
               { text: "1. Delve into the DevOps approach and lifecycle"},
               { text: "2. Uncover key practices from continuous integration to monitoring" },
               { text: "3. Foster collaboration and automate workflows for seamless delivery" },
               { text: "4. Embrace a culture of continuous improvement and adaptability" },
                { text: "5. Master essential principles for software development and IT operations" },
                { text: "6. Explore scalability, enhance security, streamline communication" },
                { text: "7. Optimize resource utilization for optimal results" },
            ]
        },
        tech: {
            title: 'DevOps Tools and Technologies',
            content: [
                {  text: 'Unlock the power of DevOps with our essential guide on tools and technologies. Navigate a comprehensive array, from version control to deployment automation. Explore CI/CD pipelines, containerization, and orchestration. Enhance collaboration, streamline workflows, and achieve seamless integration. Stay ahead with insights into monitoring, logging, and testing tools. Master the diverse landscape of DevOps technologies to propel your software development and IT operations efficiently.' },
                { text: '1. Explore the diverse landscape of DevOps tools and technologies.' },
                { text: '2. Explore diverse DevOps tools and technologies.'},
                { text: '3. Embrace version control and deployment automation.'},
                { text: '4. Dive into CI/CD, containerization, and orchestration.'},
                { text: '5. Enhance collaboration, streamline workflows, and ensure integration.'},
                { text: '6. Master DevOps technologies for efficient development and operations.'},
            ]
        },
        why: {
            title: 'CI/CD and Its Importance for DevOps',
            content: [
                { text: 'Embark on a transformative journey with our essential guide on CI/CD and its pivotal role in DevOps. Explore seamless integration and continuous delivery practices to enhance efficiency. Learn how CI/CD accelerates development cycles, mitigates risks, and ensures reliable software releases. Master the art of automated testing and deployment, fostering a culture of collaboration and innovation to propel your DevOps success.' },
                { text: '1. Accelerates development cycles for faster releases.' },
                { text: '2. Mitigates risks through automated testing and deployment.' },
                { text: '3. Ensures reliable software releases with continuous integration.' },
                { text: '4. Fosters a culture of collaboration and innovation.' },
                { text: '5. Propels overall DevOps success with seamless integration.' },
            ]
        },
        when: {
            title: 'Use cases of DevOps',
            content: [
                { title: 'Release Management:', text: 'Efficiently manage software releases for seamless deployment and updates.' },
                { title: 'Monitoring and Logging: ', text: 'Monitor and log system activities to ensure optimal performance.' },
                { title: 'Automation Testing:', text: 'Automate testing processes for enhanced software quality and reliability.' },
                { title: 'Infrastructure as Code (IaC): ', text: ' Implement Infrastructure as Code (IaC) for scalable and consistent setups.' },
                { title: 'Continuous Integration (CI):', text: 'Ensure code integration with Continuous Integration (CI) practices.' },
                { title: 'Collaborative Development: ', text: 'Foster collaborative development for improved team efficiency and communication.' },
                { title: 'Security and Compliance:', text: 'Prioritize security and compliance within your development and operations.' },
                { title: 'Continuous Deployment (CD):', text: 'Enable Continuous Deployment (CD) for swift and reliable software releases.' },
            ]
        }
    };

    const tabs = [
        { id: 'what', label: 'Benefits of DevOps Solutions' },
        { id: 'process', label: 'DevOps Approach & Lifecycle' },
        { id: 'tech', label: 'DevOps Tools and Technologies' },
        { id: 'why', label: 'CI/CD and Its Importance for DevOps' },
        { id: 'when', label: 'Use cases of DevOps' },
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
                        {currentContent && (
                            <div key={activeTab} className="animate-fade-in">
                                <h3 className="text-3xl font-bold mb-8">{currentContent.title}</h3>
                                <div className="space-y-6">
                                    {currentContent.content.map((item, index) => (
                                        <div key={item.title || item.text || index}>
                                            {item.title && <h4 className="text-xl font-semibold text-blue-400 mb-2">{item.title}</h4>}
                                            <p className="text-gray-400">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
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
        { q: "How much does it cost to build a custom software?", a: "The cost of building a custom software varies significantly based on project complexity, features, and development hours required. Typically, it can range from a few thousand dollars for simpler projects to millions for more complex, extensive software, tailored to the client’s specific needs and requirements. For an accurate estimate, it’s crucial to consult with developers or software development firms to assess your project’s scope and obtain a detailed quote." },
        { q: "What Is ODC — Offshore Development Center?", a: "An Offshore Development Center (ODC) is a dedicated facility set up by a company in another country to handle software development, maintenance, and support. It serves as an extended arm of the client’s organization, offering cost-effective, skilled talent, and flexible working hours. ODCs are established to facilitate long-term collaborations, fostering efficient project management and reducing operational costs." },
        { q: "What industries do you cater to for software product development?", a: "We cater to a diverse range of industries for software product development, including but not limited to finance, healthcare, e-commerce, education, and technology sectors. Our expertise spans across various domains, enabling tailored solutions to meet the unique needs of each industry we serve." },
        { q: "How many years of experience does your software developer possess?", a: "Our software developers possess an average of 7 to 10 years of industry experience, with expertise spanning various technological domains. Each developer undergoes rigorous vetting to ensure a high standard of proficiency and adaptability to diverse project needs." },
        { q: "What technologies do you use for software development?", a: "We employ a diverse array of cutting-edge technologies for software development, including but not limited to programming languages like Python, Java, JavaScript, and frameworks such as React, Angular, and Django. Our tech stack continually evolves to adapt to the specific project requirements and industry best practices." },
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
            description: 'Alpixn Technologies’ DevOps services include a dedicated team engagement model, known as an Offshore Development Center (ODC). ',
            
            points: ['Specialized team for tailored DevOps solutions.', 'Flexibly scale to meet project demands.', 'Client control for transparency and alignment.', 'A cost-effective model with high-quality expertise.','Sustain collaboration for consistently aligned objectives.']
        },
        {
            title: 'Team Augmentation',
            description: 'Alpixn Technologies’ DevOps Team Augmentation involves clients in a flexible model.',
            points: ['Targeted expertise boosts project efficiency.', 'Optimize resources with flexible team sizes.', 'Integrated experts foster collaboration and knowledge transfer.', 'Tailored solutions for specific project needs.', 'Streamlined Workflows Ensure Smooth Project Execution.']
        },
        {
            title: 'Project-Based',
            description: 'At Alpixn Technologies, DevOps services adopt a project-based engagement model, ensuring a structured and targeted delivery process. ',
            points: ['Understand client goals and scope.', 'Analyze infrastructure, and define cloud strategy.', 'Execute migration and deployment plans.', 'Test solution integrity and functionality.','Provide continuous support, monitoring, and enhancement.']
        },
    ];

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Engagement Models</h2>
                    <p className={`mt-4 max-w-2xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                        Alpixn Technologies excels in delivering DevOps services with a customized engagement model. Rooted in a customer-centric approach, our tailored strategies and comprehensive support ensure seamless cloud integration and optimization. Our scalable solutions adapt to clients’ evolving needs, fostering a collaborative and successful DevOps journey.
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
    const [activeTab, setActiveTab] = useState('Environments');

    const techData = {
        Environments: [
            { name: 'Azure', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/azure.webp' },
            { name: 'Jenkins', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/jenkins.webp' },
            { name: 'Docker', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/docker-1-1.webp' },
            { name: 'Kubernetes', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/kubernet.webp' },
            { name: 'Terraform', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/terraform.png' },
            { name: 'AWS Light Sale', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/aws.webp' },
            { name: 'Amazon', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/aws.png' },
            { name: 'Ansible', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/ansible.webp' },
            { name: 'Cloud Engine', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/google-engine.webp' },
        ],
        Tools: [
            { name: 'Cloud template', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/google-engine.webp' },
            { name: 'Lighthouse', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/lighthouse.webp' },
            { name: 'Memcached', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/memcached.webp' },
            { name: 'Ignite', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/ignite.webp' },
            { name: 'Bamboo', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/bamboo.webp' },
            { name: 'Application Insight', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/Application-Insight.webp' },
            { name: 'Puppet', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/puppet.webp' },
            { name: 'Kafka', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/kafka.webp' },
            { name: 'Ansible', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/ansible.webp' },
            { name: 'Terraform', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/01/terraform.png' },
        
        ],
        Deployments: [
            { name: 'SQS', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/SQS.webp' },
            { name: 'S3 Glacier', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/S3-Glacier.webp' },
            { name: 'Elastic Beanstalk ', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/Elastic-Beanstalk.webp' },
            { name: 'CloudFront', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/CloudFront.webp' },
            { name: 'CDN', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/CDN.webp' },
            { name: 'App Engine', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/App-Engine.webp' },
            { name: 'Google engine', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/google-engine.webp' },
            { name: 'ELB', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/ELB.webp' },
            { name: 'Cloud Function', icon: 'https://www.jellyfishtechnologies.com/wp-content/uploads/2024/05/Cloud-Function.webp' },   
        ]
    };

    const tabs = [
        { id: 'Environments', label: 'Environments' },
        { id: 'Tools', label: 'Tools' },
        { id: 'Deployments', label: 'Deployments' },
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
      <WhyChooseUsSection />
      <GetStartedSection />
      <GuideSection />
      <FaqSection />
      <EngagementModelsSection />
      <TestimonialsSection />
    </div>
  );
}