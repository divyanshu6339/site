import React from 'react';
import { motion } from 'framer-motion';

const possibilities = [
  { number: '01', title: 'Payment APIs', description: 'Jellyfish Technologies integrates leading payment gateway APIs, such as PayPal, Authorize.Net, Stripe, and many more, that work with your unique project requirements. Our team of certified API developers allows your business to process payments quickly and easily.' },
  { number: '02', title: 'Shipping APIs', description: 'We, at Jellyfish Technologies provide seamless API integrations with industry-leading shipping carrier APIs. For any e-commerce business, we organize the shipping carrier API integration services, including FedEx, USPS, UPS, and many more. We empower your projects with our qualified custom API development experts.' },
  { number: '03', title: 'SMS Gateway APIs', description: 'Jellyfish Technologies has been at the forefront of providing exceptional and secure API solutions since 2011. We integrate leading cloud communications platform APIs, such as Twilio, Plivo, and Nexmo, connecting various applications and enabling the communication functionalities utilizing web service API integration.' },
  { number: '04', title: 'Social Network APIs', description: 'Jellyfish Technologies seamlessly integrates APIs to connect your business to any social networking platforms using our custom public API integrations. We connect your website, e-commerce store, financial firm, or any business of varied domains to your Facebook, Twitter, Instagram, and YouTube channel.' },
  { number: '05', title: 'CRM-ERP Integration', description: 'Simply operations with CRM-ERP integration. We use our Application Programming Interface (API) integration services seamlessly connect Customer Relationship Management (CRM) and Enterprise Resource Planning (ERP) systems, stimulating enhanced collaboration, data management, and improved overall efficiency in your organization.' },
  { number: '06', title: 'API-as-a-Service', description: 'Our API as a Service (APIaaS) services offer a comprehensive framework, allowing you to utilize APIs seamlessly, promoting efficient data exchange and integration. We use HTTP/HTTPS, XML, XHTML, JSON, Java, SOAP, EDI, AJAX, TCP/IP, and REST API development services to build authentic & secure APIaaS platforms.' },
];

const ApiPossibilities = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore the Possibilities of API as a Service Solutions</h2>
        <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-12">Discover the potential of your business with Jellyfish Technologies. Our expert services range across various industries and verticals, enabling seamless integration, scalability, and enhanced functionality. Explore, streamline operations, and empower innovation with our comprehensive API as a Service solution.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {possibilities.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-lg text-left transform transition duration-500 hover:scale-105 hover:bg-gray-700"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4">{item.number}</h3>
              <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApiPossibilities;
