import React from 'react';
import { motion } from 'framer-motion';

const ExcitedToLaunch = () => {
    return (
        <div className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl font-extrabold text-white sm:text-4xl"
                >
                    Excited To Launch Your UI/UX Project? Start Here!
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto"
                >
                    Let's transform your vision into reality and craft outstanding, customized UI/UX solutions collaboratively. Start your UI/UX design journey with the best UI/UX design firm today.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8"
                >
                    <a
                        href="/contact"
                        className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition-colors duration-300 shadow-lg transform hover:scale-105"
                    >
                        Get an Estimate of Your Project Today
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default ExcitedToLaunch; 