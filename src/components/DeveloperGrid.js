import React from 'react';
import { motion } from 'framer-motion';

const developerData = [
    {
        title: 'Hire dedicated Power BI developers',
        description: 'Our specialized Power BI developers specialize in delivering dynamic data visualizations, BI reports, and interactive dashboards.',
        skills: ['Power Query', 'Power Pivot', 'Power View', 'SQL'],
      },
      {
        title: 'Hire dedicated Front-end developers',
        description: 'We transform web and mobile applications into captivating UX and responsive product design with our skilled front-end developers.',
        skills: ['React.js', 'Angular.js', 'HTML', 'Flutter'],
      },
      {
        title: 'Hire dedicated Back-end developers',
        description: 'Our dedicated back-end developers deliver scalable and secure server-side applications, ensuring high performance and data integrity.',
        skills: ['Javascript', 'Laravel', 'Python', 'Kotlin'],
      },
      {
        title: 'Hire dedicated Full-stack Developer',
        description: 'Our high-tech skilled full-stack developers offer database management to UI design and deliver end-to-end solutions for your project’s specific requirements.',
        skills: ['HTML/CSS', 'Django', 'Javascript', 'MongoDB'],
      },
      {
        title: 'Hire dedicated Web Developer',
        description: 'Empower your online presence with our web developers, encompassing the latest web technologies to offer development, migration, maintenance, and support.',
        skills: ['React', 'Express', 'Vue.js', 'Laravel'],
      },
      {
        title: 'Hire dedicated Mobile-app developers',
        description: 'Turn your app idea into reality with our dedicated mobile app developers, delivering high-performance mobile apps with top-notch user-exp across devices.',
        skills: ['React Native', 'Xamarin', 'Ionic', 'Kotlin'],
      },
      {
        title: 'Hire dedicated UX/UI designers',
        description: 'Modernize your digital products with intuitive and visually appealing custom designs & industry expertise in user behavior and interaction design.',
        skills: ['Sketch', 'InVision', 'Figma', 'Framer'],
      },
      {
        title: 'Hire dedicated Data scientists',
        description: 'We discover the power of your data with our dedicated data scientists. Predicting trends, and optimizing business processes to drive innovation.',
        skills: ['Apache Spark', 'Pandas', 'Pytorch', 'MLFlow'],
      },
      {
        title: 'Hire dedicated DevOps engineers',
        description: 'Streamline software delivery pipeline and enhance collaboration between development and operations teams with our dedicated DevOps engineers.',
        skills: ['Jenkins', 'Docker', 'Kubernetes', 'Chef'],
      },
];

const CheckmarkIcon = () => (
  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Skill = ({ name }) => (
    <div className="flex items-center text-gray-300">
      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      {name}
    </div>
  );

const DeveloperCard = ({ title, description, skills }) => (
  <motion.div 
    className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300"
    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
  >
    <div className="flex items-start mb-4">
      <CheckmarkIcon />
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-400 mb-4 h-24">{description}</p>
    <div className="grid grid-cols-2 gap-2">
      {skills.map(skill => <Skill key={skill} name={skill} />)}
    </div>
  </motion.div>
);

const DeveloperGrid = () => {
  return (
    <div className="bg-gray-900 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
            Hire Software Developers As Per Your Needs
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Experience custom software development as per projects' requirements with our agile approach. Hire a dedicated development team of skilled professionals providing 24/7 support, ensuring your project's success at every stage. Hire software developers who prioritize your needs and deliver exceptional results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developerData.map((dev, index) => (
            <DeveloperCard key={index} {...dev} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperGrid; 