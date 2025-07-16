import React from 'react';

const reasons = [
  {
    title: 'Vast Experience',
    description: 'With over a decade of excellence since 2011, Jellyfish Technologies brings a wealth of vast experience to mobile app development. Specializing in diverse technologies, we offer tailored solutions for iOS, Android, hybrid, on-demand, wearable, and cross-platform apps. Our seasoned team ensures cutting-edge solutions, driving digital innovation across industries.',
  },
  {
    title: 'Scalable Solutions',
    description: 'Jellyfish Technologies pioneers scalable solutions in mobile app development, ensuring adaptability to evolving business needs. Our range of expertise goes from mobile app development, App optimization, custom app solutions and applications to application maintenance. Integrating these expertise we provide comprehensive solutions for various industries and verticals.',
  },
  {
    title: 'Agile Methodology',
    description: 'At Jellyfish Technologies, we employ a robust Agile methodology to craft sustainable and high-quality mobile applications. Utilizing frameworks such as Scrum, Kanban, and Extreme Programming, we ensure an efficient development life cycle. Our commitment lies in effectively automating and enhancing essential mobile app development processes and consistently delivering top-tier solutions.',
  },
  {
    title: 'Dedicated Teams',
    description: 'Our certified mobile app developers are adept at industry best practices, guaranteeing the delivery of top-notch solutions. Our clients benefit from the assurance of working with a team that advances the latest technological trends, resulting in reliable and innovative app solutions.',
  },
  {
    title: 'Quality Assurance',
    description: 'Jellyfish Technologies takes pride in its rigorous quality assurance processes tailored for mobile app development. Ensuring each product adheres to the highest standards, our team implements meticulous quality checks at every stage. This commitment guarantees the delivery of effective and flawless mobile app solutions.',
  },
  {
    title: 'Optimum performance',
    description: 'We specialize in delivering highly personalized solutions for optimum performance. Our bespoke approach caters to specific needs and preferences, optimizing functionality, elevating user experiences, and enhancing efficiency. Clients praise our products for their outstanding performance, solidifying their satisfaction with doing business with us.',
  },
];

const ReasonCard = ({ title, description }) => (
  <div className="bg-gray-900 p-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
    <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
  </div>
);

const WhyChooseUs = () => {
  return (
    <div className="bg-black py-24 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Why Choose Jellyfish Technologies as Your Mobile App Development Company?</h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            Tailored precision meets innovation in our custom mobile app development services, ensuring your business receives solutions perfectly attuned to its requirements. Let’s find out more about our key parameters:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} {...reason} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs; 