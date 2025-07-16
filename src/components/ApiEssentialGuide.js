import React, { useState } from 'react';
import { motion } from 'framer-motion';

const guideData = {
  benefits: {
    title: 'Benefits Of API Development',
    content: [
      {
        subtitle: 'For Businesses:',
        points: [
          'Increased Agility and Innovation: Build new features and integrate third-party services faster, unlocking quicker responses to market trends and customer needs.',
          'Enhanced Scalability and Efficiency: Easily scale your application by leveraging the resources of external systems seamlessly.',
          'Improved Customer Experience: Offer personalized recommendations, location-based services, and richer user experiences by integrating external data and functionalities.',
          'New Revenue Streams and Partnerships: Monetize your APIs by offering access to valuable data or functionalities to other developers.',
        ],
      },
      {
        subtitle: 'For Developers:',
        points: [
          'Faster Development Speed: Focus on core functionalities by utilizing readily available APIs for common tasks, increasing productivity.',
          'Increased Flexibility and Choice: Choose from a diverse range of APIs, allowing you to find the perfect solution for your specific needs.',
          'Simplified Maintenance and Updates: Benefit from automatic updates and bug fixes offered by API providers, reducing maintenance overhead.',
          'Broader Reach and Community: Tap into new markets and audiences by building applications that integrate with popular APIs.',
        ],
      },
    ],
  },
  types: {
    title: 'Different Types of APIs',
    content: [
      { subtitle: 'Open APIs', points: ['Publicly available for anyone to use, often without restrictions or fees.', 'Promote collaboration, innovation, and interoperability between different systems.', 'Examples: Google Maps API, Twitter API, OpenWeatherMap API.'] },
      { subtitle: 'Partner APIs', points: ['Created specifically for sharing data or functionality between business partners.', 'Usually involve contractual agreements and controlled access.', 'Examples: Payment gateways like Stripe or PayPal, shipping platforms like FedEx or UPS.'] },
      { subtitle: 'Internal APIs', points: ['Used within an organization to connect different internal systems and applications.', 'Improve communication and data sharing between departments and teams.', 'Examples: Human resource management system API, customer relationship management (CRM) API.'] },
      { subtitle: 'Composite APIs', points: ['Combine multiple APIs into a single interface, simplifying complex interactions.', 'Offer a streamlined experience for developers and reduce the need for multiple API calls.', 'Examples: Travel booking APIs that combine flight, hotel, and car rental data.'] },
      { subtitle: 'REST APIs', points: ['Follow the REST (Representational State Transfer) architectural style for web services.', 'Use HTTP methods (GET, POST, PUT, DELETE) to interact with resources.', 'Widely adopted for their simplicity and flexibility.'] },
      { subtitle: 'SOAP APIs', points: ['Rely on SOAP (Simple Object Access Protocol), an XML-based messaging protocol.', 'Often used in enterprise applications for their security and reliability features.', 'More complex than REST APIs but offer stronger data validation and governance.'] },
      { subtitle: 'GraphQL APIs', points: ['A query language for APIs, allowing clients to specify the exact data they need.', 'Reduce over-fetching and improve performance.', 'Gaining popularity for its flexibility and efficiency in data retrieval.'] },
      { subtitle: 'Real-Time APIs', points: ['Enable real-time communication and data exchange between systems.', 'Use technologies like WebSockets, Server-Sent Events (SSE), or GraphQL Subscriptions.', 'Ideal for live updates, chat applications, and collaborative tools.'] },
      { subtitle: 'Event-Driven APIs', points: ['Trigger actions based on events, rather than direct requests.', 'Promote asynchronous communication and decoupled systems.', 'Ideal for IoT applications, microservices architectures, and reactive systems.'] },
      { subtitle: 'Microservices APIs', points: ['Facilitate communication between independently deployable microservices.', 'Often RESTful, but can also use other protocols like gRPC.', 'Enable modular and scalable application architectures.'] },
    ],
  },
  trends: {
    title: 'Latest Trends in API Development and Integration',
    content: [
      { subtitle: 'Rise of GraphQL', points: ['Its ability to efficiently handle complex data relationships makes it ideal for building modern, data-driven applications.'] },
      { subtitle: 'Microservices and API-first Approach', points: ['Decoupling applications into smaller, independent microservices connected through APIs leads to increased agility, scalability, and maintainability. API-first development, where APIs are defined before implementing functionality, ensures seamless integration and data sharing across microservices.'] },
      { subtitle: 'Serverless Architecture and the Cloud', points: ['Serverless functions hosted in the cloud eliminate the need for managing servers, allowing developers to focus on building APIs without infrastructure concerns.'] },
      { subtitle: 'AI and Machine Learning Integration', points: ['Embedding AI and ML capabilities into APIs unlocks powerful features like personalized recommendations, real-time data analysis, and predictive insights.'] },
      { subtitle: 'Focus on Developer Experience (DX)', points: ['Providing intuitive documentation, interactive API playgrounds, and robust developer tools enhances API discoverability, usability, and adoption.'] },
      { subtitle: 'Security and Compliance Take Center Stage', points: ['With increasing data privacy regulations and security threats, robust authentication, authorization, and encryption mechanisms are crucial for secure API communication.'] },
      { subtitle: 'API Mesh Technology', points: ['API mesh platforms manage and secure API traffic across complex, distributed architectures, including microservices and multi-cloud environments.'] },
    ],
  },
  scope: {
    title: 'Scope of Third-Party API Integrations',
    content: [
        { subtitle: 'Payments', points: ['In the digital era, virtually every e-commerce site relies on third-party payment APIs for seamless transactions. Industry leaders like Stripe, PayPal, Square, and Mollie offer external APIs enabling merchants to handle diverse transactions, including regular payments, recurring charges, refunds, and currency management.'] },
        { subtitle: 'Chat', points: ['Third-party APIs, exemplified by chat features, enhance user engagement on websites or apps, providing real-time assistance. Notably, Messenger integration allows seamless communication on websites, enabling customers to interact with personalized profiles, and fostering an enhanced and direct engagement experience.'] },
        { subtitle: 'Access and Authorization', points: ['Implementing a social login API enables swift and authorized user access, allowing account creation via social profiles. Additionally, for users across multiple websites, a single sign-in credential through the third-party API simplifies access to all platforms.'] },
        { subtitle: 'Geolocation', points: ['Geolocation is used by a wide range of services. It is used by banking apps to display ATMs and bank branches in the area, by food delivery apps to track deliveries, by real estate apps to map routes, and so forth. Among the most well-known geolocation integrations are those for Google Maps and Directions.'] },
    ],
  },
  importance: {
    title: 'Importance of APIs for Business',
    content: [
      { subtitle: '', points: ['In today’s digital world, APIs are vital for businesses of all sizes across various industries. They act as bridges, connecting internal systems and applications with external data and services. Here’s why APIs matter for businesses:'] },
      { subtitle: '', points: ['Increased Agility and Innovation', 'Enhanced Scalability and Efficiency', 'Improved Customer Experience', 'New Revenue Streams and Partnerships', 'Robust Security and Data Control'] },
      { subtitle: 'Here are some specific examples of how businesses benefit from APIs:', points: [] },
      { subtitle: 'Retail:', points: ['Integrating with payment gateways like Stripe, and Amazon Pay enables secure online transactions while connecting with marketing automation platforms to personalize customer communications.'] },
      { subtitle: 'Healthcare:', points: ['APIs facilitate exchanging patient data between hospitals and clinics while integrating with wearables enables remote monitoring of patient health.'] },
      { subtitle: 'Finance:', points: ['Banking apps access user account information via APIs to provide real-time balance updates and transaction history, while fintech startups leverage APIs to offer innovative financial services.'] },
    ],
  },
};

const ApiEssentialGuide = () => {
  const [activeTab, setActiveTab] = useState('benefits');

  const renderContent = () => {
    const data = guideData[activeTab];
    return (
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        {data.content.map((section, index) => (
          <div key={index} className="mb-6">
            {section.subtitle && <h4 className="text-xl font-semibold text-blue-400 mb-3">{section.subtitle}</h4>}
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {section.points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">An Essential Guide to API Integration Services</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto text-center mb-12">APIs, or Application Programming Interfaces, are revolutionizing the way software communicates and shares data. Let’s dive into some of the key advantages:</p>
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-1/4">
            <ul className="space-y-2 sticky top-24">
              {Object.keys(guideData).map(key => (
                <li key={key}>
                  <button 
                    onClick={() => setActiveTab(key)} 
                    className={`w-full text-left p-4 rounded-lg transition-colors duration-300 ${activeTab === key ? 'bg-blue-600 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}>
                    {guideData[key].title}
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          <main className="md:w-3/4 bg-gray-900 p-8 rounded-lg">
            {renderContent()}
          </main>
        </div>
      </div>
    </section>
  );
};

export default ApiEssentialGuide;
