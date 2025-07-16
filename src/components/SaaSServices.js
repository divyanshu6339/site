import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "SaaS Application Development",
    description: "Our SaaS application development service focuses on creating robust, scalable, and secure cloud-based applications from scratch. We utilize the latest technologies and best practices to build SaaS solutions that meet your specific business requirements, ensuring seamless performance and an intuitive user experience."
  },
  {
    title: "Custom SaaS Product Development",
    description: "We specialize in developing custom SaaS products tailored to your unique business needs. Our experienced team works closely with you to understand your goals, target audience, and market demands, delivering a personalized SaaS solution that sets you apart from competitors and drives growth."
  },
  {
    title: "SaaS Cloud Migration",
    description: "Our SaaS cloud migration service helps businesses transition their existing applications to the cloud seamlessly. We assess your current infrastructure, develop a comprehensive migration strategy, and execute the migration process while ensuring data security, minimal downtime, and smooth integration with cloud platforms."
  },
  {
    title: "SaaS Architecture Design",
    description: "We provide expert SaaS architecture design services to ensure your application is built on a solid foundation. Our team designs scalable, multi-tenant architectures that optimize performance, security, and maintainability, enabling your SaaS solution to grow and evolve alongside your business."
  },
  {
    title: "SaaS Integration Services",
    description: "Our SaaS integration services enable seamless connectivity between your SaaS application and other systems, tools, and platforms. We develop and implement robust APIs, webhooks, and integration protocols to ensure smooth data flow and enhanced functionality, allowing your SaaS solution to work in harmony with your existing ecosystem."
  },
  {
    title: "SaaS Modernization & Migration",
    description: "We help businesses modernize their legacy applications and migrate them to a SaaS model. Our team assesses your current application, identifies areas for improvement, and develops a modernization roadmap. We then execute the migration process, ensuring a smooth transition to a modern, cloud-based SaaS solution."
  }
];

const SaaSServices = () => {
  return (
    <div className="bg-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            SaaS Development Services We Offer
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-4xl mx-auto">
            Our SaaS development services encompass custom application development, cloud migration, UI/UX design, API integration, architecture implementation, performance optimization, and ongoing maintenance. We build secure SaaS solutions that align with their unique business requirements and drive growth.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2"
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

export default SaaSServices; 