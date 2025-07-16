import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Research & Analysis",
        description: "We are an exceptional UI UX design agency that excels in diligent research and analysis. Our ui ux designers delve into your industry, user behavior studies, competitor analysis, and existing product data. This diligence ensures that our designs are informed, user-focused, and strategically positioned for success, distinguishing us in delivering impactful and tailored solutions."
    },
    {
        title: "Consumer Focused",
        description: "We internalize the consumer at the core of our UI UX design agency. Our unwavering commitment to user-centric UI/UX design ensures that every element serves the end user, resulting in an intuitive experience. This focus drives our relentless pursuit of crafting designs that resonate and intensify user satisfaction."
    },
    {
        title: "AR/VR Experience Design",
        description: "We at Jellyfish Technologies step up user engagement through immersive & interactive experiences. We are a next-gen UI UX design agency, with expertise in augmented and virtual reality, to create designs that captivate and redefine user experiences. Step into the future of the digital landscape with our unparalleled AR/VR design solutions."
    },
    {
        title: "Cross-platform Experiences Design",
        description: "We distinguish ourselves through our cross-platform experience design. We master ui ux design, ensuring seamless interaction across a multitude of devices, including desktops, mobiles, and tablets. Our designs are optimized for consistency and performance, ensuring a unified and engaging user experience that reinforces your brand identity, enhancing accessibility and user satisfaction."
    },
    {
        title: "Product Vision & Strategy",
        description: "We understand that every project is unique so our UI UX designers along with qualified developers who lay the foundation of your project, starting with business goals, vision and strategic insights. With 14+ years of experience in the industry, we pride ourselves on being the best strategic partners you need to see things from."
    },
    {
        title: "Wireframing & Prototyping",
        description: "Wireframing and prototyping are essential for successful product development. We provide wireframing and prototyping for web and mobile applications on demand. Through it, we see the product visually, and our team gets a chance to test it prior to its development and launch. We always take a prudent approach for your product development."
    },
    {
        title: "Testing & Validation",
        description: "Our rigorous testing and validation phase verifies the design’s functionality, aligning it with user expectations. A series of usability test runs refine the web app, ensuring it not only meets but also exceeds user demands. User satisfaction is integral, ensuring a design that resonates effectively with both client vision and user goals."
    },
    {
        title: "Agile Process",
        description: "Our Agile Process is a key metric for our success. It ensures continuous improvement through flexibility and rapid adaptations. By embracing constructive feedback and incorporating it into our evolving project dynamics, delivering UI/UX services that meet your product goals, deadlines, and exceed client expectations."
    },
    {
        title: "Boost Performance",
        description: "We elevate performance as a core principle. Through meticulous optimization and efficient coding, our UI/UX solutions not only meet but exceed expectations. This relentless focus ensures swift, efficient, and high-performing digital solutions, which in turn elevates overall user satisfaction and overall project success."
    }
];

const StunningServices = () => {
  return (
    <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            What Makes Our UI/UX Design and Development Services Stunning?
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-4xl mx-auto">
            We blend user experience with user-centric functionality and the latest tech for creating interfaces that captivate and streamline user experiences. At Alpixn, we integrate innovative design trends with seamless development, ensuring your product not only looks exceptional but also delivers unparalleled usability and engagement.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StunningServices; 