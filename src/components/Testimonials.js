import React from 'react';

// Import assets
import quotationMark from '../Assets/Vector.svg';
import person1 from '../Assets/28.jpg';
import person2 from '../Assets/29.jpg';
import person3 from '../Assets/30.jpg';

const testimonialsData = [
  {
    quote: "The team enabled the app to launch in both New Zealand and the United States, seamlessly handling multiple currencies and transactions upon deployment. About 1,200 users are registered to the platform, and the app is fully-functioning. The team added value with their responsiveness and efficiency.",
    image: person1,
    name: 'James Anderson',
    title: 'Co-Founder, Shootzu',
  },
  {
    quote: "Jellyfish provides high-quality design and development services that have already received a lot of positive feedback from other providers taking notice of their work. They're also great to work with overall—collaborative, responsive, and quick to turn around deliverables.",
    image: person2,
    name: 'Earl VanBuskirk',
    title: 'Strategic Product Manager, Patra Corp',
  },
  {
    quote: "Jellyfish Technologies' platform increased efficiency and reduced the administrative burden of the client's processes. The team was reliable and accurate, with responsive and transparent communication. The team was also proactive in addressing challenges and providing regular status updates.",
    image: person3,
    name: 'Anonymous',
    title: 'Executive, Sagita Learning',
  },
];

const TestimonialCard = ({ quote, image, name, title }) => (
  <div className="flex-1 bg-[#0a192f] border border-gray-700 rounded-lg p-8 flex flex-col justify-between min-w-[300px] transition-all duration-300 hover:border-cyan-400 hover:-translate-y-2">
    <div>
      <img src={quotationMark} alt="Quote" className="h-8 w-8 mb-6" />
      <p className="text-gray-300 text-lg leading-relaxed">{quote}</p>
    </div>
    <div className="mt-8 pt-6 border-t border-gray-800 flex items-center gap-4">
      <img src={image} alt={name} className="h-16 w-16 rounded-full border-2 border-cyan-400" />
      <div>
        <p className="font-bold text-white text-xl">{name}</p>
        <p className="text-gray-400">{title}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <div className="bg-[#020c1b] text-white py-16 sm:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
          What Our Clients Say
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 