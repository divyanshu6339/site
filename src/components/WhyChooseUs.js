import React from 'react';

const reasons = [
  {
    number: '01',
    text: 'One-Stop Solution',
  },
  {
    number: '02',
    text: 'Leader in Outsourcing',
  },
  {
    number: '03',
    text: 'Quality Assurance',
  },
  {
    number: '04',
    text: 'Kick-Off in 5 Days or less',
  },
  {
    number: '05',
    text: 'Wide Tech Expertise',
  },
  {
    number: '06',
    text: 'Quality Development and On-Time Delivery',
  },
];

const ReasonCard = ({ number, text }) => (
  <div className="bg-[#0f1a3e] border border-gray-700 rounded-lg p-6 h-40 flex flex-col justify-between">
    <span className="text-4xl font-bold text-blue-400">{number}</span>
    <p className="text-xl font-semibold text-gray-200">{text}</p>
  </div>
);

const WhyChooseUs = () => {
  return (
    <div className="bg-[#04102a] text-white py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            Why Choose Alpixn Technologies?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            With over <span className="text-blue-400">14+ years</span> of experience in the <span className="text-blue-400">software development industry</span>, Jellyfish Technologies is a trusted choice, backed by a proven track record of successful projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} {...reason} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs; 