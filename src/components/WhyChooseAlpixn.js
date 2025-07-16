import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
    {
        title: "Time Zone Aligned",
        description: "We align to your time zone. At Alpixn, you can rely on our communication expertise for seamless collaboration and efficient project management. Our work hours ensure we deliver timely updates for a cohesive and productive partnership."
    },
    {
        title: "Professional Designer",
        description: "Opt for highly skilled designers backed by innovative skills. Our experts bring a wealth of experience and creativity, ensuring your project benefits from top-tier design skills. We are the best UI/UX company to transform your digital presence, with stunning, user-centric interfaces that align seamlessly with your brand vision."
    },
    {
        title: "Extensive Experience",
        description: "Opt for Alpixn’s creative UI/UX services backed by our extensive experience. With a proven track record of successful projects, our collection brings a wealth of expertise. This deep knowledge ensures innovative solutions that seamlessly align with your brand, providing a successful and tailored user experience."
    },
    {
        title: "High Quality & Flexibility",
        description: "We deliver top-notch designs adaptable to your evolving needs. Our dynamic approach ensures dynamic solutions while maintaining quality throughout, providing you with the versatility required for a successful digital presence. At Alpixn, we provide innovative, high-quality solutions as per your project requirements."
    },
    {
        title: "Cost-effective",
        description: "We provide innovative solutions to your ideas, at our UI/UX design services company. We ascertain value for your investment by streamlining processes without sacrificing quality. Our commitment to excellence and affordability ensures that you receive high-impact, engaging services while staying within your budget."
    },
    {
        title: "On-Time Delivery",
        description: "Alpixn is the best UI/UX Service provider where we promise and guarantee on-time delivery. Our commitment to punctuality ensures your project milestones are met without compromising on excellence and reliable experience. Trust us to bring your vision to life, on schedule and with exceptional quality."
    }
];

const WhyChooseAlpixn = () => {
    return (
        <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Why Choose Alpixn for UI/UX Services?
                    </h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-4xl mx-auto">
                        Alpixn is a game-changing UI/UX company. Our certified UI/UX developers blend innovation with user-centric approaches, ensuring visually stunning and intuitively crafted interfaces. With a client-first mindset, we prioritize your unique needs, delivering bespoke solutions that elevate user engagement, satisfaction, and overall project success.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseAlpixn; 