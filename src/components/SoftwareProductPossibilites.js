import React from 'react';
import { motion } from 'framer-motion';

const possibilities = [
  { number: '01', title: 'Enhance Your Development Capabilities', description: 'We design software products and boost your product development capabilities with our skilled team, utilizing the ideal for your project technologies and agile methodologies to enhance efficiency and innovation, driving superior custom business software solutions.' },
  { number: '02', title: 'Build a Comprehensive Product Strategy', description: 'Alpixn Technologies develops robust product strategies with our certified consultants, integrating market insights and advanced technology to align with your business goals and ensure a successful product roadmap.' },
  { number: '03', title: 'Accurately Assess Product Viability', description: 'We accurately assess product viability With our PoC and MVP development services, we conduct rigorous market analysis and technology feasibility studies, ensuring your product is well-aligned for commercial success.' },
  { number: '04', title: 'Create Breakthrough Solutions', description: 'Our R&D experts harness AI/ML, Big Data, IoT, Industry 4.0, Blockchain, and XR to solve complex problems. We deliver future-proof software products that set new standards and deliver exceptional value, positioning your business at the forefront of technology.' },
  { number: '05', title: 'Manage & Reduce Expenses', description: 'Optimize your budget with our cost-effective and reduced development cycles. With modern technologies and efficient project management for startups and large enterprises, we ensure high-quality software products within budget and a faster time to market.' },
  { number: '06', title: 'Select the Optimal Technologies', description: 'We opt for the best technologies for your project with our product development software expert guidance, ensuring optimal performance and scalability. Beyond full-cycle software engineering, we future-proof your software solutions.' },
  { number: '07', title: 'Accelerate Time-to-Market', description: 'Accelerate your product launch using our agile development and streamlined processes. We implement Agile and DevOps methodologies, CI/CD pipelines, and automated testing to ensure a swift and efficient customized software development cycle.' },
  { number: '08', title: 'Maximum Product Quality Possible', description: 'Alpixn Technologies ensures the highest product quality with its agile approach, rigorous QA processes, and technology-driven testing, ensuring a stable, secure, and reliable software product.' },
  { number: '09', title: 'Exclude Security Risks & Compliance Issues', description: 'Mitigate security risks and ensure compliance with industry standards through security best practices. By integrating secure SDLC and industry-leading tools, we offer risk-free development, product safety, and adherence to GDPR and industry standard regulations.' },

];

const ApiPossibilities = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore the Possibilities of API as a Service Solutions</h2>
        <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-12">Discover the potential of your business with Jellyfish Technologies. Our expert services range across various industries and verticals, enabling seamless integration, scalability, and enhanced functionality. Explore, streamline operations, and empower innovation with our comprehensive API as a Service solution.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {possibilities.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-lg text-left transform transition duration-500 hover:scale-105 hover:bg-gray-700"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4">{item.number}</h3>
              <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApiPossibilities;