import React from 'react';

const OffshoreContactForm = () => {
    return (
        <div className="bg-[#1e5799] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background geometric shapes */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="geometric" patternUnits="userSpaceOnUse" width="100" height="100">
                            <path d="M-50 50L0 0L50 50L0 100z" fill="#fff" stroke="#fff" strokeWidth="1"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#geometric)"/>
                </svg>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                    Want to speak with our solution experts?
                </h2>
                <div className="mt-6">
                    <button className="border-2 border-white text-white font-bold py-2 px-6 rounded-md hover:bg-white hover:text-blue-700 transition duration-300">
                        Book a Meeting
                    </button>
                </div>
            </div>

            <div className="mt-12 max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-2xl relative z-10">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-gray-800">
                    <div>
                        <label htmlFor="full-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" id="full-name" className="bg-gray-100 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-gray-300" />
                    </div>
                    <div>
                        <label htmlFor="contact-number" className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                        <input type="text" id="contact-number" className="bg-gray-100 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-gray-300" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" id="email" className="bg-gray-100 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-gray-300" />
                    </div>
                    <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Your Organization/Company</label>
                        <input type="text" id="organization" className="bg-gray-100 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-gray-300" />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Select Budget</label>
                        <div className="relative">
                            <select id="budget" className="bg-gray-100 p-3 rounded-md w-full appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-gray-300">
                                <option disabled selected>Select Budget</option>
                                <option>$5,000 - $10,000</option>
                                <option>$10,000 - $25,000</option>
                                <option>$25,000 - $50,000</option>
                                <option>$50,000+</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                                <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                         <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea id="message" rows="6" className="bg-gray-100 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-gray-300"></textarea>
                    </div>
                    <div className="md:col-span-2 text-center mt-4">
                        <button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-16 rounded-lg transition-colors w-full md:w-auto">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OffshoreContactForm; 