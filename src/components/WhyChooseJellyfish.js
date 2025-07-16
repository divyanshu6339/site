import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  { title: 'Leveraging Advanced Tech', description: 'The technology used is quite advanced such as Big Data, IoT, blockchain, metaverse, AB/VR, AI/ML, and so on. This helps to make the work simple and optimizes the work operation. Considering this fact, we can see to it that it is a very common practice that our firm uses to streamline the work. Moreover, one can make use of these things as a cost-effective technology as well as using digital marketing tools.' },
  { title: 'Integrity & Transparency', description: 'As a firm, we ensure that we are responsive to our client’s requirements. With our agile methodology, the work has worked is transparent and with ease. The usage of different tools such as Jira makes our project management transparent but also significant.' },
  { title: '14+ Years Of Experience', description: 'In this evolving commercial world of today, this is a crucial edge to have such great experience. This helps the firm to be at the top of its game in this industry. With more than 14 years of experience, we have our primary focus on becoming experts in tech knowledge and a professional team of developers.' },
  { title: 'Certified Professionals & Domain Experts', description: 'Our certified professionals and domain experts are always available to the business for the assistance they need to cater to their business requirements. With a brilliant team of communication our professionals are well capable of handling these challenges.' },
  { title: 'Migration Across Various Platforms', description: 'While migrating across multiple platforms is not an easy job to do, at Jellyfish Technologies we have a skilled team to get it done. We have the experience of migrating a large number of clients across platforms and technologies which demonstrates our skill in this area.' },
  { title: 'Continuous Delivery', description: 'With continuous delivery, we offer you consistent software development that not only saves your time and money but also makes your work easy. With continuous engagement with our services and co-effective. This deployment ensures rapid, reliable updates and enhancements to your product, without disruption or delay.' },
];

const WhyChooseJellyfish = () => {
  return (
    <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Why Choose Jellyfish Technologies as Your Application Modernization Services Provider?</h2>
          <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
            Jellyfish Technologies offers enterprise application modernization that entirely focuses on legacy application modernization including its coding language, architecture, user experience, and technology stack. The goal is to make the applications updated, efficient, and secure while improving their scalability and performance while preserving the data and logic.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/20 hover:border-blue-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
              <p className="text-lg text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseJellyfish; 