import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const guideContent = {
  'benefits': {
    title: 'Benefits of Outsourcing Web App Development',
    content: [
      {
        body: 'Outsourcing web app development has become a popular strategy for businesses aiming to leverage the expertise of specialized web app development companies. The benefits of this approach are numerous, spanning cost savings, access to specialized skills, and improved focus on core business activities. Here’s a detailed look at the advantages:'
      },
      {
        heading: '1. Cost Efficiency',
        body: 'One of the most significant benefits of outsourcing web app development is cost savings. By partnering with a web app development company, businesses can avoid the expenses associated with hiring, training, and maintaining an in-house development team. This is particularly advantageous for startups and small to medium-sized enterprises (SMEs) that need to manage their budgets carefully. Web app development companies in India, for instance, offer competitive pricing without compromising on quality, making them an attractive option for businesses worldwide.',
      },
      {
        heading: '2. Access to Specialized Expertise',
        body: 'Outsourcing provides access to a vast pool of talent and specialized skills that may not be available internally. Web application development companies employ experienced professionals who are proficient in the latest technologies and development methodologies. These experts bring a wealth of knowledge in areas such as custom web application development services, web application design services, and the latest frameworks and tools, ensuring high-quality, innovative solutions.',
      },
      {
        heading: '3. Focus on Core Business Activities',
        body: 'By outsourcing web app development, businesses can concentrate on their core competencies and strategic goals. This allows internal teams to focus on what they do best, whether it’s marketing, sales, or product development, without being sidetracked by the complexities of web application development. A dedicated web application development firm handles the technical aspects, enabling businesses to streamline their operations and improve overall productivity.',
      },
      {
        heading: '4. Scalability and Flexibility',
        body: 'Outsourcing offers scalability and flexibility that in-house teams often cannot match. Web apps development companies can quickly scale up or down based on project requirements. This means businesses can manage fluctuating demands more efficiently, avoiding the overhead costs associated with maintaining a large, permanent development team. Web app development services provide the agility needed to respond to market changes and evolving business needs.',
      },
      {
        heading: '5. Faster Time-to-Market',
        body: 'Leveraging the expertise and resources of a web app development company can significantly reduce the development timeline. These companies are equipped with established processes, tools, and methodologies that streamline the development cycle. As a result, businesses can launch their web applications faster, gaining a competitive edge in the market.',
      },
      {
        heading: '6. Quality and Reliability',
        body: 'Professional web application development firms adhere to industry best practices and quality standards, ensuring that the final product is robust, secure, and scalable. They employ rigorous testing and quality assurance procedures to identify and fix bugs before deployment, minimizing the risk of post-launch issues. This reliability is crucial for maintaining a positive user experience and protecting the business’s reputation.',
      },
      {
        heading: '7. Access to the Latest Technologies',
        body: 'Web app development companies stay abreast of the latest technological advancements and industry trends. By outsourcing, businesses can benefit from cutting-edge technologies and innovative solutions without investing in continuous training and development for their in-house teams. This access to the latest tools and technologies can enhance the functionality, performance, and user experience of the web application.',
      },
      {
        heading: '8. Risk Management',
        body: 'Outsourcing web app development also helps in managing risks more effectively. Reputable web apps development companies have extensive experience in handling various projects and can foresee and mitigate potential risks. They are adept at managing project timelines, budgets, and deliverables, reducing the likelihood of costly delays and overruns.',
      },
      {
        heading: '9. Global Talent Pool',
        body: 'Engaging with web app development companies in India and other countries opens up access to a global talent pool. These companies bring diverse perspectives and innovative solutions to the table, enriching the development process. Additionally, the time zone difference can be leveraged to ensure round-the-clock development and support, further speeding up the project timeline.',
      },
      {
        heading: '10. Long-Term Support and Maintenance',
        body: 'A significant advantage of outsourcing is the ongoing support and maintenance services provided by web application development firms. These companies offer website application development services that include regular updates, bug fixes, and enhancements, ensuring the web application remains up-to-date and performs optimally over time.',
      },
    ],
  },
  'tech-stack': {
    title: 'Top Web Application Development Tech Stack',
    content: [
      {
        body: 'Choosing the right tech stack is vital for the success of a web application. Here are the top technologies used by leading web app companies and web application developers in India and globally:'
      },
      {
        heading: 'Front-End Technologies',
        body: '1. HTML, CSS, and JavaScript: HTML provides the structure, CSS the styling, and JavaScript the interactivity for web pages. These are fundamental technologies for front-end development.\n\n2. React.js: Developed by Facebook, React.js is a popular JavaScript library for building dynamic user interfaces. Its component-based architecture makes it highly reusable and efficient.\n\n3. Angular: A robust front-end framework developed by Google, Angular is known for its two-way data binding and modular approach, making it suitable for large-scale applications.\n\n4. Vue.js: Vue.js is a progressive JavaScript framework that is easy to integrate and use for building user interfaces and single-page applications (SPAs).',
      },
      {
        heading: 'Back-End Technologies',
        body: '1. Node.js: Node.js is a server-side platform built on Chrome’s V8 JavaScript engine. It is widely used for building scalable network applications and real-time services.\n\n2. Django: A high-level Python framework, Django encourages rapid development and clean, pragmatic design. It is favored for its robustness and scalability.\n\n3. Ruby on Rails: Ruby on Rails is a server-side web application framework written in Ruby. It follows the convention over configuration (CoC) principle, enabling faster development.\n\n4. Spring Boot: Spring Boot is an extension of the Spring framework that simplifies the development of Java-based applications. It provides a range of pre-built components to streamline development.',
      },
      {
        heading: 'Database Technologies',
        body: '1. MySQL: A widely-used relational database management system, MySQL is known for its reliability and ease of use. It is suitable for a wide range of applications.\n\n2. PostgreSQL: PostgreSQL is an advanced, open-source relational database known for its extensibility and support for complex queries.\n\n3. MongoDB: A NoSQL database, MongoDB is designed for handling large volumes of unstructured data. It is highly scalable and flexible.\n\n4. Firebase: A platform developed by Google, Firebase provides real-time database services and is widely used for mobile and web applications.',
      },
    ],
  },
  'custom-benefits': {
    title: 'Custom Web Application Development Services',
    content: [
      {
        body: 'Custom web application development services offered by web application development agencies focus on creating tailored solutions to meet specific business needs. These services include:'
      },
      {
        body: 'Requirement Analysis– Detailed analysis of business needs to define project scope and objectives.\n\nCustom UI/UX Design– Designing unique and user-friendly interfaces that enhance user experience.\n\nBespoke Development– Building custom functionalities and features that align with business processes.\n\nIntegration Services– Integrating the web application with existing systems, APIs, and third-party services.\n\nQuality Assurance– Comprehensive testing to ensure the application is robust and error-free.\n\nMaintenance and Support– Ongoing support to update, maintain, and improve the application post-deployment.'
      }
    ]
  },
  'process': {
    title: 'Process of Web Application Development',
    content: [
        {
            body: 'Our website application development services follow a proven and structured process to ensure successful project delivery. The first step involves gathering requirements and understanding your business objectives. This is followed by wireframing and prototyping to visualize the application’s user interface and functionality. Once the prototype is approved, our team of web app developers begins the actual development phase, adhering to industry best practices and coding standards. Rigorous testing is conducted throughout the development cycle to identify and rectify any bugs or issues. Upon successful testing, the web application is deployed to a staging environment for final testing and client approval. After deployment, our web application development firm provides ongoing maintenance and support services to ensure the application remains up-to-date, and secure, and performs optimally. We also offer training and documentation to ensure a smooth transition and facilitate future updates or enhancements.'
        }
    ]
  },
  'reasons': {
    title: 'Top Reasons to Work with a Web App Development Company in India',
    content: [
        {
            body: 'Yes, we are the right partner for your web application development needs. As a leading web app development company in India, we specialize in creating dynamic, scalable, and secure web applications that empower businesses across the globe. Here’s why partnering with a web application development company like ours can be a game-changer for your business: Cost-Effective Development Without Compromising Quality, Access to Highly Skilled Developers and Cutting-Edge Technology, Faster Time-to-Market with Agile Development, Customized Web Applications Aligned With Your Business Goals, Flexible Engagement Models to Suit Your Needs, Proven Expertise Across Multiple Industries, End-to-End Web Application Development Services, Commitment to Security and Compliance, Long-Term Support and Scalability, Strong Communication and Transparent Processes.'
        }
    ]
  },
};

const EssentialGuideWebApp = () => {
  const [activeTab, setActiveTab] = useState('benefits');

  const tabs = [
    { id: 'benefits', label: 'Benefits of Outsourcing Web App Development' },
    { id: 'tech-stack', label: 'Top Web Application Development Tech Stack' },
    { id: 'custom-benefits', label: 'Custom Web App Development Benefits' },
    { id: 'process', label: 'Process of Web Application Development' },
    { id: 'reasons', label: 'Top Reasons to Work with a Web App Development Company in India' },
  ];

  return (
    <section className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          An Essential Guide to Web Application Development
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          <motion.div 
            className="md:w-1/3 space-y-2"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${activeTab === tab.id ? 'bg-blue-600 shadow-lg' : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
          <div className="md:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-800 p-8 rounded-lg"
              >
                <h3 className="text-2xl font-bold mb-6">{guideContent[activeTab].title}</h3>
                <div className="space-y-6">
                  {guideContent[activeTab].content.map((item, index) => (
                    <div key={index}>
                      {item.heading && <h4 className="text-xl font-semibold text-blue-400 mb-2">{item.heading}</h4>}
                      <p className="text-gray-300 leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EssentialGuideWebApp;
