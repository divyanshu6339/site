import React from 'react';
import { motion } from 'framer-motion';

const ModernizationContactForm = () => {
    return (
        <div className="bg-gray-900 py-20 text-white">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-extrabold">Connect with Our Application Modernization Experts</h2>
                    <p className="mt-4 text-xl text-gray-300">
                        Connect with our experts to transform your data into insights and actions.
                    </p>
                </div>
                <motion.form
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Name" className="w-full bg-gray-800 border-gray-700 border-2 rounded-lg py-4 px-5 text-lg focus:ring-blue-500 focus:border-blue-500 transition-colors" />
                        <input type="text" placeholder="Phone" className="w-full bg-gray-800 border-gray-700 border-2 rounded-lg py-4 px-5 text-lg focus:ring-blue-500 focus:border-blue-500 transition-colors" />
                        <input type="email" placeholder="Email" className="w-full bg-gray-800 border-gray-700 border-2 rounded-lg py-4 px-5 text-lg focus:ring-blue-500 focus:border-blue-500 transition-colors" />
                        <input type="text" placeholder="Company" className="w-full bg-gray-800 border-gray-700 border-2 rounded-lg py-4 px-5 text-lg focus:ring-blue-500 focus:border-blue-500 transition-colors" />
                    </div>
                    <div>
                        <textarea placeholder="Tell us about your project" rows="6" className="w-full bg-gray-800 border-gray-700 border-2 rounded-lg py-4 px-5 text-lg focus:ring-blue-500 focus:border-blue-500 transition-colors"></textarea>
                    </div>
                    <div className="text-center">
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-lg text-lg transition-colors shadow-lg"
                        >
                            Start a Conversation
                        </motion.button>
                    </div>
                </motion.form>
            </div>
        </div>
    );
};

export default ModernizationContactForm; 