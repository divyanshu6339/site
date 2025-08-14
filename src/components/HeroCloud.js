import React, { useState, useEffect, useRef } from 'react';

// Custom hook to detect when an element is in the viewport
const useOnScreen = (options) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Stop observing once it's visible to save resources
        observer.unobserve(entry.target);
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


// --- Particle Logic (Moved Outside Component) ---
class Particle {
  constructor(x, y, directionX, directionY, size, color, ctx, canvas) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
    this.ctx = ctx;
    this.canvas = canvas;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    this.ctx.fillStyle = 'rgba(100, 150, 255, 0.2)';
    this.ctx.fill();
  }
  update(mouse) {
    if (this.x > this.canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y > this.canvas.height || this.y < 0) {
      this.directionY = -this.directionY;
    }
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < mouse.radius + this.size) {
      if (mouse.x < this.x && this.x < this.canvas.width - this.size * 10) { this.x += 5; }
      if (mouse.x > this.x && this.x > this.size * 10) { this.x -= 5; }
      if (mouse.y < this.y && this.y < this.canvas.height - this.size * 10) { this.y += 5; }
      if (mouse.y > this.y && this.y > this.size * 10) { this.y -= 5; }
    }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }
}

// --- ServiceCard Component (Moved Outside Parent) ---
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
  }, []); // Empty dependency array is correct here as we only want to run this once

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

// Section 1: Hero Section
const ITStaffAugmentationSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    // This effect is for the text fade-in animation
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // This effect handles the canvas animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray;
    let animationFrameId;

    const mouse = {
      x: null,
      y: null,
      radius: (canvas.height / 120) * (canvas.width / 120)
    };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };
    window.addEventListener('mousemove', handleMouseMove);

    function init() {
      particlesArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * .4) - 0.2;
        let directionY = (Math.random() * .4) - 0.2;
        particlesArray.push(new Particle(x, y, directionX, directionY, size, 'rgba(100, 150, 255, 0.2)', ctx, canvas));
      }
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(mouse);
      }
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      mouse.radius = (canvas.height / 120) * (canvas.width / 120);
      init();
    };
    window.addEventListener('resize', handleResize);
    
    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // This effect runs only once

  return (
    <div className="w-full min-h-screen flex items-center bg-black overflow-hidden relative">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>
      <div className="relative z-10 flex flex-col md:flex-row items-center w-full px-4 sm:px-6 lg:px-8">
        <div className="w-full md:w-1/2 p-4 md:p-8 text-center md:text-left">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Cloud Consulting Services</h1>
          <p className={`text-xl text-gray-400 mb-8 leading-relaxed transition-all duration-1000 ease-out delay-200 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Empower your business’s digital transformation with our expert cloud consulting services, tailored to optimize, streamline, and elevate your operations in the ever-evolving cloud ecosystem. We deliver scalable, secure, and efficient strategies, ensuring seamless migration, optimization, and management, empowering businesses to thrive in the digital realm.</p>
          <button className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full overflow-hidden transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-20"></span>
            <span className="relative">Get a custom quote</span>
          </button>
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center">
          <div className={`relative transition-all duration-1000 ease-in-out delay-500 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ perspective: '1000px' }}>
            <img src="https://www.jellyfishtechnologies.com/wp-content/uploads/2024/03/cloud-300x203.webp" alt="Cloud - services" className="w-full h-auto max-w-7xl rounded-5xl" style={{ animation: 'float 6s ease-in-out infinite' }} />
          </div>
        </div>
      </div>
      <style>{`@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0px); } }`}</style>
    </div>
  );
};

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


// Section 3: Services We Offer
const ServicesSection = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const services = [
    { title: "Cloud Migration Services", description: "Alpixn Technologies delivers expert cloud migration consulting services, ensuring a seamless transition to the cloud. With our dedicated expertise in cloud services consulting, we streamline migration for enhanced scalability, security, and efficiency." },
    { title: "Cloud Modernization Services", description: "Revitalize your operations with our cutting-edge cloud modernization services. We specialize in leveraging advanced cloud services to upgrade, optimize, and transform your infrastructure, ensuring enhanced performance and agility for your business." },
    { title: "Cloud Infrastructure Management", description: "Elevate your operations with our comprehensive infrastructure as a service in cloud computing. Our adept team ensures seamless management, optimization, and maintenance of your cloud infrastructure, delivering scalability, security, and efficiency." },
    { title: "Cloud Managed Services", description: "Experience unparalleled support with our cloud-managed services. As a leading cloud consulting firm, we offer proactive monitoring, maintenance, and optimization, ensuring your cloud infrastructure operates seamlessly while you focus on core business objectives." },
    { title: "Cloud Application Development", description: "Our company specializes in cloud application development, delivering tailored solutions through expert cloud services consulting. We craft scalable, secure, and innovative applications, ensuring optimal performance in the dynamic digital landscape." },
    { title: "Cloud Optimization Services", description: "Our company excels in cloud optimization services, harnessing the full potential of cloud technology services. We fine-tune infrastructures, enhance performance, and maximize cost-efficiency, ensuring your business operates at its peak in the cloud." },
  ];

  return (
    <div ref={ref} className="py-24 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500">
            Cloud Consulting Services We Offer
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
            Our cloud computing consulting services, provided by our seasoned cloud consulting firm, encompass strategic planning, migration, security, and optimization, ensuring seamless integration and maximum efficiency for your business operations.
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


// ... (All your other section components go here, unchanged)
const ConnectSection = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
  const services = [ "Cloud Migration Services", "Cloud Modernization Services", "Cloud Infrastructure Management", "Remote Managed Services", "Cloud Application Development", "Cloud Optimization Services", ];
  return (
    <div ref={ref} className="py-24 bg-blue-900/10">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}> Connect With Our Cloud Consulting Services Experts Now! </h2>
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
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Our Dedicated Cloud Consulting Work Mastery</h2>
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
const ExpertiseSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const expertiseAreas = [
        { num: '01', title: 'Reduce Application cost', description: 'The company’s specialized approach to reducing application costs through cloud technology services results in streamlined operations, scalable infrastructure, and optimized expenses, ensuring enhanced efficiency and profitability for your business.' },
        { num: '02', title: 'Backup & Recovery', description: 'Experience peace of mind with our company’s best cloud computing services in backup & recovery. Safeguard your data with seamless, reliable solutions, ensuring quick restoration and continuous business continuity in any situation.' },
        { num: '03', title: 'Seamless Integration', description: 'The company’s cloud computing service providers offer seamless integration and insightful solutions, ensuring businesses unlock the full potential of integrated systems. Gain valuable insights and enhanced efficiency through our tailored, streamlined services.' },
        { num: '04', title: 'Enhanced Collaboration', description: 'The company’s expert cloud consultants facilitate enhanced collaboration through seamless integrations and tools, fostering a unified environment for remote teams. Streamlined communication, access to shared resources, and real-time interaction drive productivity and innovation.' },
        { num: '05', title: 'Streamlined Workflows', description: 'Experience enhanced efficiency with our streamlined workflows through tailored cloud computing consulting services. Our solutions optimize processes, foster collaboration, and improve productivity, ensuring your business operates seamlessly in the cloud environment.' },
        { num: '06', title: 'Improved Performance', description: 'Avail heightened efficiency with our cloud computing services. We optimize performance, ensuring faster operations, scalability, and reliability. Elevate your business with improved agility and streamlined processes, leveraging the power of the cloud.' },
        { num: '07', title: 'Advanced Analytics & Insights', description: 'Our advanced analytics & insights, integrated with cutting-edge cloud consultancy services, drive informed decision-making. We empower businesses to uncover valuable patterns, trends, and opportunities, leveraging data for strategic growth and innovation.' },
        { num: '08', title: 'Automatic Software Updates', description: 'Experience the advantages of automatic software updates with our cloud service providers. Enjoy enhanced security, improved performance, and seamless access to the latest features, ensuring your systems remain up-to-date and efficient.' },
        { num: '09', title: 'Flexible Scalability & Pricing', description: 'Jellyfish Technologies offers flexible scalability and pricing through cloud technology services, allowing businesses to adjust resources as needed. This adaptable model ensures cost-efficiency and agility, enabling seamless growth and optimization.' },
    ];

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Benefits of Cloud Consulting services</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}> Our cloud consulting services provide expert guidance for strategic planning, cost optimization, security, and scalability, empowering businesses to harness the full potential of cloud technology for growth and efficiency. The benefits are as follows </p>
                </div>
                <div className="grid grid-cols-1 md:-cols-2 lg:grid-cols-3 gap-8">
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
const WhyChooseUsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const reasons = [
        { title: 'Top Cloud Architects with Niche Skills', description: 'Opting for a cloud consulting company such as Jellyfish Technologies with top-tier cloud architects possessing niche skills yields unmatched advantages. Benefit from specialized expertise in crafting tailored, innovative solutions, ensuring optimal performance, scalability, and seamless cloud infrastructure management.' },
        { title: 'Certified Cloud Professionals', description: 'Our certified cloud professionals ensure expert guidance from seasoned cloud services consultants. Their proficiency leads to strategic, secure, and efficient cloud solutions, providing reliable expertise for optimal business operations in the cloud environment.' },
        { title: 'Reliability and Security', description: 'Selecting one of the reputable cloud consulting companies ensures reliability and security. Their expertise guarantees robust data protection, consistent service availability, and dependable support, mitigating risks and fostering trust in your cloud infrastructure.' },
        { title: 'Diverse Expertise', description: 'Opting for our diverse expertise in cloud computing and services yields multifaceted advantages. It ensures comprehensive solutions, innovative strategies, seamless integration, and optimal performance, catering to varied business needs efficiently.' },
        { title: 'Guaranteed Quality', description: 'Jellyfish Technologies guarantees quality in cloud computing and cloud services ensure reliable performance, security, and scalability. It offers peace of mind, consistent service levels, and optimized solutions for seamless operations, thus making it one of the best choices in this industry.' },
        { title: 'Well Architected Review', description: 'Choosing Jellyfish Technologies for a Well-Architected Review (WAR) ensures optimized cloud architecture, cost-efficiency, enhanced performance, improved security, and scalability, aligning your infrastructure with best practices and industry standards.' },
    ];
    
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
                <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Why Choose Jellyfish Technologies as Your Cloud Consulting Services Provider?</h2>
                <p className={`max-w-3xl mx-auto text-lg text-gray-400 mb-16 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>When seeking adept cloud computing service providers, Jellyfish Technologies stands out. Our expertise in cloud consulting services ensures tailored migration, security, and optimization solutions, empowering seamless and efficient cloud operations. Here is why you should choose Jellyfish Technologies as your service provider</p>
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
const GetStartedSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900">
             <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
                 <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Ready to Get Started With Our Cloud Consulting Services?</h2>
                 <p className={`mt-4 max-w-2xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}> Cloud consulting services assist businesses in making informed decisions that improve operations by acquainting them with the range of cloud computing services that are readily accessible. Experts in every facet of cloud computing and cloud consultants continue to play crucial roles in communication. </p>
                 <div className={`mt-8 transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                    <button className="bg-blue-600 text-white font-bold rounded-full py-4 px-8 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"> Get an Estimate of Your Project Today </button>
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
            title: 'Public vs Private vs Hybrid Cloud',
            content: [
                { text: 'Public, private, and hybrid clouds offer distinct features catering to diverse needs. Public clouds, like AWS or Azure, provide scalability, cost-effectiveness, and vast resources accessible to anyone over the Internet. On the other hand, private clouds, like those created within an organization, offer enhanced security, control, and dedicated resources, suitable for sensitive data. Hybrid clouds combine elements of both, offering flexibility, scalability, and the ability to balance workloads between private and public clouds.' },
                { title: 'Public Cloud:', text: 'Accessed over the internet by anyone. Provides scalability and cost-effectiveness. Offers vast resources and services. Shared infrastructure, less control over security.' },
                { title: 'Private Cloud:', text: 'Operated within an organization’s premises. Enhanced security and control over resources. Suitable for sensitive data and compliance needs. Customizable and dedicated resources.' },
                { title: 'Hybrid Cloud:', text: 'Combines public and private clouds. Offers flexibility and scalability. Balances workloads between private and public clouds. Enables data and application portability.' },
            ]
        },
        process: {
            title: 'Tips for Choosing a Cloud Consulting Company?',
            content: [
                 { text: 'When choosing a cloud consulting company, several factors are crucial for a successful partnership. You need to meet the right parameters to avoid a reverse effect. It is therefore essential to do in-depth research before choosing one.' },
                 {text : 'Here’s what you should look for when choosing a cloud consulting company:'},
                 {text : '1. Expertise and Experience: Look for a company with a proven track record in cloud consulting, migration, and management. Their experience in handling projects similar to yours is crucial.'},
                 {text : '2. Industry Knowledge: Ensure the company has expertise in your specific industry. Industry-specific knowledge helps in understanding unique challenges and compliance requirements.'},
                 {text : '3. Comprehensive Services: Choose a company that offers a wide range of cloud services, including strategy development, migration, security, optimization, and ongoing support. A full-service provider can better address your needs.'},
                 {text : '4. Customization: The company should be able to tailor solutions to   fit your specific business requirements. Avoid one-size-fits-all approaches.'},
                 {text : '5. Security and Compliance: Ensure the company prioritizes security and compliance with industry standards and regulations. They should have robust security measures in place to protect your data.'},
                 {text : '6. Client References and Case Studies: Ask for client references and case studies to gauge their past performance and client satisfaction. This will give you insights into their capabilities and reliability.'},
            ]
        },
        tech: {
            title: 'Top Cloud Computing Platforms',
            content: [
                { title: 'Amazon Web Services (AWS): ', text: 'Renowned for its extensive range of services including computing power, storage, databases, machine learning, and more.' },
                { title: 'Microsoft Azure: ', text: 'Offers a wide array of integrated tools and services for app development, AI, analytics, and enterprise solutions.' },
                { title: 'Google Cloud Platform (GCP): ', text: 'Known for its data analytics, machine learning, and AI capabilities, providing a robust infrastructure for various businesses.' },
                { title: 'IBM Cloud: ', text: 'Features a mix of IaaS, PaaS, and SaaS offerings, emphasizing AI, blockchain, and IoT capabilities.' },
                { title: 'Alibaba Cloud: ', text: 'A major player in the Asian market, offering diverse cloud services catering to e-commerce, gaming, IoT, and more.' },
                { title: 'Oracle Cloud:', text: ' Known for its cloud infrastructure, databases, and enterprise SaaS applications, it is particularly beneficial for businesses in need of robust database solutions.' },
            ]
        },
        why: {
            title: 'Types of Cloud Services',
            content: [
                { title: 'Infrastructure as a Service (IaaS):', text: 'IaaS offers scalable virtual resources like machines, storage, and networking via the internet. It allows flexible, pay-as-you-go access without hardware ownership, empowering businesses to customize and manage their IT infrastructure efficiently.' },
                { title: 'Platform as a Service (PaaS): ', text: 'PaaS simplifies infrastructure, and empowers app development by providing tools, databases, and OS. It streamlines coding, fosters collaboration, and accelerates app deployment, enhancing the time-to-market for applications.' },
                { title: 'Software as a Service (SaaS):', text: 'SaaS offers subscription-based software accessed online, eliminating local installations. Providers manage infrastructure, maintenance, and security, ensuring convenience and cost-effectiveness for various applications like email, CRM, and office tools.' },
               
            ]
        }
    };

    const tabs = [
        { id: 'what', label: 'Public vs Private vs Hybrid Cloud' },
        { id: 'process', label: 'Process of Augmenting' },
        { id: 'tech', label: 'Top Technologies' },
        { id: 'why', label: 'Why Staff Augmentation?' },
        
    ];

    const currentContent = guideContent[activeTab];

    return (
        <div ref={ref} className="py-24 bg-gray-900/50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>An Essential Guide to Cloud Consulting</h2>
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
const FaqSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { q: "How does Cloud strategy consulting benefit businesses? ", a: "Cloud strategy consulting benefits businesses by offering tailored guidance for seamless cloud adoption. It assists in optimizing infrastructure, enhancing scalability, and improving cost-efficiency. Through strategic planning, it enables innovation, boosts agility, and ensures security compliance, aligning technology with business objectives." },
        { q: "When should I engage a Cloud solutions consulting company?", a: "Engage a Cloud solutions consulting company when planning cloud adoption or facing IT challenges. They provide expertise in strategizing, migrating, optimizing, and managing cloud services. Whether starting from scratch or needing to enhance existing setups, their guidance ensures effective, efficient, and secure cloud integration aligned with business goals." },
        { q: "I need Cloud Consulting partners for my project. Can you help?", a: "Yes, Jellyfish Technologies specializes in comprehensive cloud consulting services. From strategizing cloud adoption to managing complex cloud infrastructures, they provide tailored solutions aligned with your project needs. With their expertise and client-centric approach, they ensure seamless cloud integration, optimization, and support, fostering success for your project." },
      
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
const EngagementModelsSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    const models = [
        {
            title: 'Dedicated Team',
            description: 'Jellyfish Technologies’ dedicated team model functions as an Offshore Development Center (ODC), delivering a tailored approach.',
            
            points: ['Client-Centric Approach', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency']
        },
        {
            title: 'Team Augmentation',
            description: 'Jellyfish Technologies offers a staff augmentation approach, bolstering a client’s in-house team with specialized skills, fostering collaboration, and optimizing project results. ',
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
                        Jellyfish Technologies offers versatile engagement models for staff augmentation services, providing tailored solutions to meet diverse client needs. Let’s explore these engagement models:
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


// Main App component - MOVED TO THE END OF THE FILE
export default function App() {
  return (
    <div className="font-sans bg-black text-white overflow-x-hidden">
      <ITStaffAugmentationSection />
      <TrustedBySection />
      <ServicesSection />
      <ConnectSection />
      <ProjectSuccessSection />
      <ExpertiseSection />
      <WhyChooseUsSection />
      <GetStartedSection />
      <GuideSection />
      <EngagementModelsSection />
      <FaqSection />
      <TestimonialsSection />
    </div>
  );
}