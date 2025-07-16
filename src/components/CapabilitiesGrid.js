import React from 'react';

const capabilitiesData = [
  {
    number: '01',
    title: 'eCommerce App Development',
    description: 'Jellyfish Technologies has years of experience developing splendid eCommerce mobile apps for startups and Big companies alike. Our dedicated eCommerce developers create user-centric applications that offer mobility and scalability and bridge the gap between businesses and customers.',
  },
  {
    number: '02',
    title: 'AR/VR Apps Development',
    description: 'Empowering startups and enterprises, we enhance the value proposition of digital products through cutting-edge AR / VR app developments. We master the latest technologies like OpenCV, Vuforia, ARToolkit, ARCore, and more. We seamlessly blend backend expertise with creativity, delivering immersive applications.',
  },
  {
    number: '03',
    title: 'Digital Wallet App Development',
    description: 'Jellyfish Technologies is at the forefront of providing cutting-edge digital wallet application development solutions for Android and iOS. Our digital wallet app development services offer contactless payments and secure bank authorization with a range of future-proofed digital wallet applications like Swift, Flutter, React, and more.',
  },
  {
    number: '04',
    title: 'Healthcare App Development',
    description: 'Embarking on a mission to redefine healthcare, we excel in integrating innovative security into healthcare application development services. Our developers specialize in crafting mobile apps tailored for clinical, administrative, and financial operations. Leverage advanced technologies such as Swift, React Native, etc.',
  },
  {
    number: '05',
    title: 'VoIP App Development',
    description: 'We specialize in creating custom VoIP applications that revolutionize the way you communicate, offering seamless, high-quality voice and video communication over the Internet. Our skilled team of VoIP app developers integrates emerging technologies to build VoIP mobile solutions tailored to your business, ensuring optimized interactions and streamlined operations.',
  },
  {
    number: '06',
    title: 'Insurance App Development',
    description: 'Jellyfish Technologies is committed to delivering scalable and innovative solutions tailored for insurance enterprises. Led by a dedicated team of insurtech developers, we prioritize the creation of next-generation analytical and digital solutions that streamline processes, optimize claims management, and upscale the user experience.',
  },
  {
    number: '07',
    title: 'IoT Application Development',
    description: 'We offer companies the full potential of the Internet of Things and offer IoT app development services for any industry and vertical. Our team of IoT developers builds innovative smart solutions for both consumer and industrial applications. We integrate advanced technologies for real-world solutions through the end-to-end full-stack IoT application development.',
  },
  {
    number: '08',
    title: 'OTT App Development',
    description: 'We as a high-end OTT app development company help you with a seamless streaming experience. Leveraging top-tier technologies like AWS, MS-Azure, and Google Cloud, we craft custom OTT solutions tailored to your business. From video-on-demand (VOD) and streaming to delivering high-definition entertainment, we ensure an unparalleled viewing experience for your target audience.',
  },
  {
    number: '09',
    title: 'Logistics App Development',
    description: 'As a top-tier logistics app development company, we offer high-quality logistics tracking and management solutions across various platforms, Android, and iOS. Whether you’re a startup or an enterprise, embark on a digital transformation journey with our in-house mobile app services for warehousing, transport, and courier delivery.',
  },
];

const CapabilityCard = ({ number, title, description }) => (
  <div className="bg-gray-900 p-8 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl hover:-translate-y-2 group relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
    <div className="relative">
      <span className="text-gray-700 font-bold text-6xl">{number}</span>
      <h3 className="text-3xl font-bold text-white mt-4 mb-4">{title}</h3>
      <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
    </div>
  </div>
);

const CapabilitiesGrid = () => {
  return (
    <div className="bg-black py-24 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Mobile App Development Services Capabilities</h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Explore our mobile app building services capabilities, spanning diverse industries like <a href="#" className="text-blue-400 hover:underline">healthcare</a>, <a href="#" className="text-blue-400 hover:underline">fintech</a>, <a href="#" className="text-blue-400 hover:underline">insurtech</a>, proptech, <a href="#" className="text-blue-400 hover:underline">media</a>, <a href="#" className="text-blue-400 hover:underline">entertainment</a>, <a href="#" className="text-blue-400 hover:underline">retail</a>, and <a href="#" className="text-blue-400 hover:underline">logistics</a>. Our expertise extends across different horizons, ensuring tailored, custom app development solutions that redefine user experiences and drive digital innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilitiesData.map((capability) => (
            <CapabilityCard key={capability.number} {...capability} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesGrid; 