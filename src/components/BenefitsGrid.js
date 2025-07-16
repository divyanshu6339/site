import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
    {
        title: 'Talent Quality',
        description: 'Our screening process ensures only the top 5% of developers are selected. Our developers possess exceptional technical skills and a deep understanding of industry best practices.'
    },
    {
        title: 'Security Protocols',
        description: 'We prioritize data security by implementing security compliance, including encrypted communication, multi-factor authentication, and regular security audits. Our team follows secure coding practices and data-handling procedures.'
    },
    {
        title: 'Proven Track Record',
        description: 'We have a diverse portfolio spanning diverse industries and project complexities. Our developers have consistently delivered high-quality software solutions, and our many successful project completions testify to our expertise.'
    },
    {
        title: 'Convenient Time Zones',
        description: 'Our global presence allows us to offer flexible work hours, ensuring seamless collaboration with clients worldwide. Our developers are available during your preferred working hours, facilitating efficient communication and project management.'
    },
    {
        title: 'Cost-Effective',
        description: 'We offer cost-effective solutions without compromising on quality. We leverage our global talent pool and optimized processes. This allows both startups and established businesses to access top-notch software development services within their budget brackets.'
    },
    {
        title: '100% Own Team, No Freelancers',
        description: 'At Jellyfish technologies, we exclusively work with our in-house team of dedicated software developers. We do not outsource to freelancers. This ensures high-quality work, effective communication, and adherence to our stringent security and coding standards.'
    },
    {
        title: 'Competitive Pricing Models',
        description: 'We offer flexible pricing models as per the project requirements, including fixed-price, time and materials, and dedicated team models. Our transparent approach ensures you have a clear understanding of costs and can select the model that best suits your needs.'
    },
    {
        title: 'Flexible Engagement Options',
        description: 'Whether you require augmenting your existing team, building a dedicated offshore team, or need project-based services, Jellyfish technologies provides flexible engagement options. Our tailored approach ensures seamless integration with your workflow and project objectives.'
    },
    {
        title: 'Experienced Software Developers',
        description: 'Our software development dedicated team comprises expert software developers with an average of 5+ years of experience across diverse technologies and domains. Their deep technical expertise, combined with industry knowledge, enables them to tackle complex challenges and deliver robust software solutions.'
    }
];

const BenefitCard = ({ title, description, index }) => {
    const cardVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.1
        }
      }
    };
  
    return (
      <motion.div
        className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 h-full"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
      >
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </motion.div>
    );
  };

const BenefitsGrid = () => {
  return (
    <section className="bg-gray-900 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            Benefits of Choosing Software Developers From Jellyfish Technologies
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Our software developers offer a range of benefits. With certified professionals skilled in emerging technologies like AI, low code/no code, and IoT, we provide core tech strength and 24/7 support, ensuring seamless maintenance from code to production, offering your project success and scalability.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid; 