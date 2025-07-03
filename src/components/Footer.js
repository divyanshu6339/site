import React from 'react';
import instagramIcon from '../Assets/Instagram.png';
import linkedinIcon from '../Assets/LinkedIn.png';
import facebookIcon from '../Assets/Facebook.png';
import twitterIcon from '../Assets/Twitter.png';

const Footer = () => {
    const quickLinks = ['Ex-Employees Verification', 'Blog', 'Contact Us', 'Case study', 'Careers'];
    const services = [
        'Software Development', 'Mobile App Development', 'Application Modernization', 
        'CRM Development Services', 'ERP Software', 'Data Analytics', 'DevOps Services', 
        'Cloud Consulting', 'Staff Augmentation', 'Hire Developers'
    ];
    const industries = [
        'FinTech', 'Insurtech', 'Proptech', 'EdTech', 'Media & Entertainment', 'Healthcare',
        'Retail', 'Facility Management', 'Supply Chain & Logistics', 'Telecom', 'Travel & Hospitality'
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Top section with contact form */}
            <div className="bg-gradient-to-b from-cyan-500 to-blue-800 py-16 px-6 sm:px-10 lg:px-16">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold">Let's Collaborate & Co-Create our Success Story!</h2>
                    <p className="mt-4 text-xl text-blue-100">We believe in solving complex business challenges of the converging world, by using cutting-edge technologies.</p>
                </div>

                <div className="mt-12 max-w-4xl mx-auto">
                    <div className="bg-white p-8 sm:p-12 rounded-lg shadow-2xl">
                        <form>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                                <input type="text" placeholder="Name" className="bg-gray-100 text-gray-700 p-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                                <input type="email" placeholder="Email Address" className="bg-gray-100 text-gray-700 p-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                            </div>
                            <div className="mb-6 relative">
                                <select defaultValue="" className="bg-gray-100 text-gray-700 p-4 rounded-md w-full appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-cyan-500">
                                    <option value="" disabled>Subject</option>
                                <option>General Inquiry</option>
                                    <option>Project Proposal</option>
                                <option>Partnership</option>
                                    <option>Other</option>
                            </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                                    <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                                </div>
                            </div>
                            <div className="mb-8">
                                <textarea placeholder="Message" rows="5" className="bg-gray-100 text-gray-700 p-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
                        </div>
                            <div className="text-center">
                                <button type="submit" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-16 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                                Send Message
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>

            {/* Newsletter and Links Section */}
            <div className="bg-gray-900 py-16">
              <div className="px-6 sm:px-10 lg:px-16">
                  {/* Newsletter */}
                  <div className="text-center mb-16">
                      <h3 className="text-3xl font-bold uppercase tracking-wider">Subscribe to our newsletter</h3>
                      <form className="mt-6 max-w-2xl mx-auto flex">
                          <input type="email" placeholder="Email Address" className="bg-gray-800 text-white p-4 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg" />
                          <button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-r-md transition-colors text-lg">Subscribe</button>
                      </form>
                  </div>

                  {/* Links */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-left">
                      <div>
                          <h4 className="font-bold text-2xl mb-6">Quick Links</h4>
                          <ul className="space-y-4">
                              {quickLinks.map(link => <li key={link}><a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">{link}</a></li>)}
                          </ul>
                      </div>
                      <div>
                          <h4 className="font-bold text-2xl mb-6">Services</h4>
                          <ul className="space-y-4">
                              {services.map(link => <li key={link}><a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">{link}</a></li>)}
                          </ul>
                      </div>
                      <div>
                          <h4 className="font-bold text-2xl mb-6">Industries</h4>
                          <ul className="space-y-4">
                              {industries.map(link => <li key={link}><a href="#" className="text-gray-300 hover:text-white transition-colors text-lg">{link}</a></li>)}
                          </ul>
                      </div>
                  </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-black py-8 px-6 sm:px-10 lg:px-16">
                <div className="flex flex-col md:flex-row justify-between items-center text-base text-gray-400 gap-8">
                    <div className="flex items-center">
                        <span className="mr-6 text-lg">Follow Us:</span>
                        <div className="flex space-x-5">
                          <a href="#" className="hover:opacity-75"><img src={instagramIcon} alt="Instagram" className="w-8 h-8" /></a>
                          <a href="#" className="hover:opacity-75"><img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" /></a>
                          <a href="#" className="hover:opacity-75"><img src={facebookIcon} alt="Facebook" className="w-8 h-8" /></a>
                          <a href="#" className="hover:opacity-75"><img src={twitterIcon} alt="Twitter" className="w-8 h-8" /></a>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
                        <a href="#" className="hover:text-white transition-colors">SITEMAP</a>
                    </div>
                    <div className="text-center md:text-right">
                        <span>© 2016 - 2025 Alpixn Technologies Private Limited . All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 