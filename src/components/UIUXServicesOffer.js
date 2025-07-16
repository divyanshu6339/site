import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "UI/UX Consulting",
    description: "Empower digital presence with our UI/UX consulting. We help you make informed decisions to create products that delight users and drive business results. From design system development and UX audits to detailed reports and recommendations, our expert guidance will help you identify opportunities and build future-proof, user-centric solutions."
  },
  {
    title: "Website Design",
    description: "As an innovative and creative design company, our UI/UX experts create modern and responsive websites that are easy to use. Our specialty is crafting clutter-free, fast-loading, fluid, and scalable websites that improve user satisfaction and drive business growth. With our expertise, we bring your vision to life through wireframes, prototypes, and user flows, ensuring an engaging digital experience."
  },
  {
    title: "Mobile App Design",
    description: "Experience user-protection UI/UX design services and deliver products that your customers will love. Our in-house team of experts will help you craft a sleek user interface tailored to your specific needs. We’ll work with you to test and optimize your mobile app’s usability with our experts, ensuring a seamless and engaging user experience across multiple devices."
  },
  {
    title: "Product Design",
    description: "Jellyfish Technologies is among the top UI/UX agencies around the globe. We specialize in developing user-centric products by conducting research, wireframing, prototyping, and delivering high-fidelity mockups. With our user-centric approach, we ensure your product captivates and engages your users, effectively conveying your brand identity."
  },
  {
    title: "Interaction Design",
    description: "Transform static screens into dynamic interactions with our interaction design services. We practice user-centered design to craft intuitive, seamless interactions that create an instant and lasting connection. By blending form and function, our expert UI/UX web design services create fluid, dynamic experiences that guide your users through a truly engaging experience."
  },
  {
    title: "UI Testing",
    description: "We test all components of the product, such as buttons, flows, menus, and other interface elements, to ensure a flawless user experience. We evaluate UI consistency, visual appeal, and accessibility to help you craft a better version of the product/UI, which includes two-way communication channels and the ability to track messages and feedback."
  }
];

const UIUXServicesOffer = () => {
  return (
    <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            UI/UX Design Services We Offer
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Transform user interfaces with our innovative UI/UX services. Incorporating the latest tech integrations, we create seamless user experiences. Jellyfish Technologies offers comprehensive, flexible, and scalable UI/UX design services. We ensure a tech-oriented approach, a blend of innovation, and user-centric functionality.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UIUXServicesOffer; 