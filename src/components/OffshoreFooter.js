import React from 'react';
import OffshoreContactForm from './OffshoreContactForm'; // Import the new form
import instagramIcon from '../Assets/Instagram.png';
import linkedinIcon from '../Assets/LinkedIn.png';
import facebookIcon from '../Assets/Facebook.png';
import twitterIcon from '../Assets/Twitter.png';

const OffshoreFooter = () => {
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
            {/* Use the new OffshoreContactForm component */}
            <OffshoreContactForm />

            {/* Newsletter and Links Section */}
            <div className="bg-gray-900 -mt-16 relative z-20">
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                  {/* Newsletter */}
                  <div className="text-center mb-12">
                      <h3 className="text-2xl font-bold uppercase tracking-wider">Subscribe to our newsletter</h3>
                      <form className="mt-4 max-w-xl mx-auto flex">
                          <input type="email" placeholder="Email Address" className="bg-gray-800 text-white p-3 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                          <button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold p-3 rounded-r-md transition-colors">Subscribe</button>
                      </form>
                  </div>

                  {/* Links */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-left">
                      <div>
                          <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                          <ul>
                              {quickLinks.map(link => <li key={link} className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a></li>)}
                          </ul>
                      </div>
                      <div>
                          <h4 className="font-bold text-lg mb-4">Services</h4>
                          <ul>
                              {services.map(link => <li key={link} className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a></li>)}
                          </ul>
                      </div>
                      <div>
                          <h4 className="font-bold text-lg mb-4">Industries</h4>
                          <ul>
                              {industries.map(link => <li key={link} className="mb-2"><a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a></li>)}
                          </ul>
                      </div>
                  </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-black py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center mb-4 md:mb-0">
                        <span className="mr-4">Follow Us:</span>
                        <a href="#" className="mr-3 hover:opacity-75"><img src={instagramIcon} alt="Instagram" className="w-6 h-6" /></a>
                        <a href="#" className="mr-3 hover:opacity-75"><img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" /></a>
                        <a href="#" className="mr-3 hover:opacity-75"><img src={facebookIcon} alt="Facebook" className="w-6 h-6" /></a>
                        <a href="#" className="hover:opacity-75"><img src={twitterIcon} alt="Twitter" className="w-6 h-6" /></a>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <span>© 2016 - 2025 Alpixn Technologies Private Limited . All Rights Reserved.</span>
                    </div>
                    <div>
                        <a href="#" className="hover:text-white transition-colors">SITEMAP</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default OffshoreFooter; 