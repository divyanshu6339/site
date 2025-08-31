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
      <WhyChooseUsSection />
      <GetStartedSection />
      <GuideSection />
      <FaqSection />
      <EngagementModelsSection />
      <TestimonialsSection />
    </div>
  );
}

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
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>IT Staff Augmentation Services</h1>
          <p className={`text-xl text-gray-400 mb-8 leading-relaxed transition-all duration-1000 ease-out delay-200 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>At Jellyfish Technologies, we understand that every business is unique, and your technical needs are as distinctive as your goals. Add certified IT staff to your team, such as software developers, business analysts, scrum masters, and QA specialists. Boost your project’s progress and scale up with our IT team augmentation services.</p>
          <button className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full overflow-hidden transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-20"></span>
            <span className="relative">Get a custom quote</span>
          </button>
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-8 flex items-center justify-center">
          <div className={`relative transition-all duration-1000 ease-in-out delay-500 ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ perspective: '1000px' }}>
            <img src="https://www.jellyfishtechnologies.com/wp-content/uploads/2024/03/IT-staff-augmentation-services-video.webp" alt="IT Staff Augmentation" className="w-full h-auto max-w-xl rounded-2xl" style={{ animation: 'float 6s ease-in-out infinite' }} />
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
    { title: "Staff Augmentation", description: "At Alpixn Technologies, we augment your tech department with our certified resources, bringing the expertise you need. Build your custom development team..." },
    { title: "IT Outstaffing Consulting", description: "We provide expert consulting on hiring options. We at Alpixn technologies assist in selecting the finest technology personnel, ensuring you acquire the specific tech staff..." },
    { title: "Dedicated IT Specialists", description: "At Alpixn Technologies, our focus lies on delivering dedicated teams tailored to specific project development needs like software development, mobile app development..." },
    { title: "Remote Managed Services", description: "We can either augment your tech department or fully become your outsourced IT department. Our teams provide remote managed services that span all technologies..." },
    { title: "Long & Short-term Team Augmentation", description: "Leveraging our 14-year IT legacy, we offer Short-Term Team Augmentation services for quick project support during in-house team unavailability..." },
    { title: "Vendor Transition", description: "Switching between IT development vendors can be challenging. Our team augmentation services ensure a smooth transition with an agile transformation of the project..." },
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
            Staff Augmentation Services We Offer
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
            We at Alpixn Technologies offer extended IT staff augmentation services and provide on-demand skills and resources for the scalability of your project.
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
  const services = [ "Staff Augmentation", "IT Outstaffing Consulting", "Dedicated IT Specialists", "Remote Managed Services", "Long & Short-term Team Augmentation", "Vendor Transition", ];
  return (
    <div ref={ref} className="py-24 bg-blue-900/10">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}> Connect With Our Staff Augmentation Experts Now! </h2>
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
        { num: '01', title: 'Software Developers', description: 'As a renowned technical staffing augmentation company, we provide skilled software professionals who specialize in software development.' },
        { num: '02', title: 'eCommerce Developers', description: 'We at Alpixn Technologies understand the potential of every business. We provide a distinctive dedicated team of eCommerce developers.' },
        { num: '03', title: 'Web Developers', description: 'We are a team of qualified professionals providing dedicated developers for your web development projects. Our skilled web developers integrate trending technologies.' },
        { num: '04', title: 'Mobile App Developers', description: 'Our skilled mobile app developers excel in creating and maintaining applications across diverse industries—fintech, insurtech, proptech, healthcare, and more.' },
        { num: '05', title: 'DevOps Engineers', description: 'Our qualified DevOps engineers are dedicated to optimizing your development and operation processes. With expertise in automation, continuous integration, and deployment.' },
        { num: '06', title: 'Quality Assurance', description: 'Our Quality Assurance team ensures the correctness of your software products. From manual testing to automated processes, they ensure a flawless user experience.' },
        { num: '07', title: 'UI/UX Developers', description: 'We provide skilled UI/UX developers to bring your digital vision to life, blending creativity with functionality. They craft intuitive and visually appealing user interfaces.' },
        { num: '08', title: 'AI & ML Experts', description: 'Our AI & ML experts are at the forefront of innovation, leveraging advanced algorithms and deep learning techniques. With expertise in the latest frameworks.' },
        { num: '09', title: 'Cloud Experts', description: 'Our skilled cloud experts are proficient in optimizing the performance and scalability of your infrastructure. With expertise in top cloud platforms like AWS, Azure, and Google Cloud.' },
    ];

    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>The Right Software Expert To Scale Your In-House IT Development Team</h2>
                    <p className={`mt-4 max-w-3xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}> Discover the perfect software experts to scale your in-house development team with precision. Leverage our certified developers at Alpixn Technologies for seamless integration, enhanced efficiency, and accelerated project growth. </p>
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
        { title: 'Diverse Agile Team', description: 'We at Alpixn Technologies provide certified individuals with different backgrounds, experiences, and perspectives through our IT augmentation services.' },
        { title: 'Cost-Effective Services', description: 'Alpixn Technologies prioritizes cost efficiency, offering services that maximize value for your investment. Our streamlined processes and strategic resource allocation ensure you receive high-quality.' },
        { title: 'High Quality & Flexibility', description: 'Alpixn Technologies offers a perfect blend of high-quality solutions and unparalleled flexibility. Our commitment to excellence ensures that every project performs beyond expectations.' },
        { title: 'Experienced Software Engineers', description: 'Opt for Alpixn Technologies to access a team of certified software engineers. Our professionals bring years of expertise to the project, ensuring a depth of knowledge.' },
        { title: '24*7 Dedicated Support', description: 'Alpixn Technologies stands out with round-the-clock dedicated support. We prioritize your success by providing regular assistance, ensuring that your IT operations run seamlessly.' },
        { title: 'Immediate Joining', description: 'Alpixn Technologies offers immediate resource augmentation services integrated with prominent IT staffing augmentation services. Our streamlined onboarding process ensures swift and efficient placements.' },
    ];
    
    return (
        <div ref={ref} className="py-24 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
                <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Why Choose Alpixn Technologies As Your IT Staff Augmentation Company?</h2>
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

// Section 8: Get Started Section
const GetStartedSection = () => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    return (
        <div ref={ref} className="py-24 bg-gray-900">
             <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
                 <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>Ready To Get Started With Our Staff Augmentation Services?</h2>
                 <p className={`mt-4 max-w-2xl mx-auto text-lg text-gray-400 transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}> Ready to launch your vision? Our custom software development team is geared up to bring your ideas to life. Let's embark on your unique project journey together, creating tailored solutions for your business needs. </p>
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
            description: 'Jellyfish Technologies’ dedicated team model functions as an Offshore Development Center (ODC), delivering a tailored approach. ',
            
            points: ['Client-Centric Approach ', 'Direct Reporting and Transparency', 'Scalability and Flexibility', 'Quality and Efficiency']
        },
        {
            title: 'Team Augmentation',
            description: 'Jellyfish Technologies offers a staff augmentation approach, bolstering a client’s in-house team with specialized skills, fostering collaboration, and optimizing project results. ',
            points: ['Tailored Expertise', 'Seamless Integration', 'Cost-Effective Solution', 'Transparent Communication']
        },
        {
            title: 'Project-Based',
            description: 'Jellyfish Technologies’ project-based engagement model offers a structured approach for well-defined projects within a set scope, time, and budget. ',
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