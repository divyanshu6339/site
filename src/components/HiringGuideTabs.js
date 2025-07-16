import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const guideData = [
  {
    id: 'how-to-hire',
    title: 'How to Hire Dedicated Developers',
    content: [
      {
        heading: 'Define Project Requirements',
        text: 'Clearly outline your project scope, tech stack (e.g., Laravel, WordPress, React, PHP, .NET, Java, Mobile App Development), timelines, and specific skill sets required. Whether you want to hire WordPress developers, hire dedicated React developers, or iPhone app programmers, this will help you identify the right candidates for your dedicated development team.'
      },
      {
        heading: 'Evaluate and Shortlist Candidates',
        text: 'Research and evaluate potential candidates or software development companies specializing in your desired technologies.'
      },
      {
        heading: 'Establish Communication Channels',
        text: 'Set up effective communication channels and project management tools to facilitate seamless collaboration and real-time updates with your dedicated remote developers.'
      },
      {
        heading: 'Provide Onboarding and Training',
        text: 'Ensure your dedicated developers receive comprehensive onboarding and training to familiarize themselves with your project’s requirements, codebase, and processes. This will facilitate a smoother transition and accelerate productivity for your dedicated remote developers.'
      },
      {
        heading: 'Manage and Monitor Progress',
        text: 'Implement robust project management practices, including regular progress reviews, risk assessments, and performance evaluations. Address any challenges or roadblocks promptly to maintain momentum and ensure timely deliveries from your dedicated development team.'
      },
      {
        heading: 'Continuous Improvement',
        text: 'Encourage continuous learning and skill development within your dedicated team. Provide opportunities for training, knowledge sharing, and exposure to new technologies to keep them up-to-date and motivated.'
      }
    ]
  },
  {
    id: 'company-vs-freelancer',
    title: 'Hiring a Software Development Company vs. Freelancer',
    content: [
      {
        text: "Each approach has its advantages and considerations, and the choice depends on the project's scope, budget, and specific requirements. Here's a comparison of the two:"
      },
      {
        heading: 'Hiring a Software Development Company',
        list: [
          'Team Structure: Software development companies offer a structured team with diverse skill sets, including project managers, developers, quality assurance specialists, and support personnel.',
          'Established Processes: Reputable software development companies follow industry best practices, including project management methodologies, quality assurance protocols, and security measures.',
          'Expertise and Experience: Companies typically have experience working on a wide range of projects across various industries, bringing valuable domain knowledge and expertise to the table.',
          'Accountability and Support: With a company, you have a single point of contact for project management, issue resolution, and ongoing support, ensuring accountability and clear communication channels.'
        ]
      },
      {
        heading: 'Hiring Freelance Developers',
        list: [
          'Cost-effectiveness: Freelancers often have lower overhead costs compared to software development companies, making them a more cost-effective option for smaller projects or specific tasks.',
          'Flexibility: Freelancers can be hired on a project basis, allowing for greater flexibility in terms of duration and scope of work.',
          'Specialized Skills: Freelancers may have niche expertise in specific technologies or programming languages, making them a suitable choice for highly specialized projects.',
          'Limited Resources: Freelancers typically work independently, which can limit their ability to handle large-scale or complex projects that require a diverse set of skills and resources.'
        ]
      }
    ]
  },
  {
    id: 'how-to-hire-best',
    title: 'How to Hire the Best Software Developers in 2024',
    content: [
      { text: "Hiring the best software developers in 2024 requires a strategic approach to identify, attract, and retain top talent in a competitive market. Here are the steps to hire dedicated developers effectively: Define Project Requirements, Evaluate and Shortlist Candidates, Establish Communication Channels, Provide Onboarding and Training, Manage and Monitor Progress, and Continuous Improvement." }
    ]
  },
  {
    id: 'hiring-models',
    title: 'Types of Hiring Models',
    content: [
        {
            list: [
                'In-house hiring: Building an internal team of developers within your organization, suitable for long-term projects and maintaining full control over the development process.',
                'Outsourcing: Engaging a third-party software development company to handle specific projects or augment your existing team, providing access to specialized skills and cost savings.',
                'Freelancing: Hiring independent contractors or freelance developers for short-term or specific tasks, offering flexibility and cost-effectiveness for smaller projects.',
                'Staff augmentation: Supplementing your in-house team with external developers, allowing you to scale resources as needed while maintaining control over the project.',
                'Dedicated team: Engaging a dedicated offshore team from a software development company, providing a cost-effective and scalable solution for long-term projects.'
            ]
        },
        {
            text: 'Evaluate your project requirements, budget, and timeline to determine the most suitable hiring model for your software development needs.'
        }
    ]
  },
  {
    id: 'top-reasons',
    title: 'Top Reasons to Hire Programmers in India for Your Next Project',
    content: [
      { text: "Yes, we are your go-to partner when you want to hire programmers in India. With years of experience and a strong track record, we make it easy and efficient for global businesses to tap into India's vast tech talent pool. Whether you need one developer or a full dedicated development team, we provide the flexibility and expertise to scale your project efficiently" },
      { heading: 'Access to World-Class Talent', text: "When you hire software developers in India, you gain access to highly skilled professionals who are proficient in modern technologies—be it web, mobile, cloud, DevOps, AI, or blockchain. Our developers are handpicked for their technical depth, problem-solving skills, and ability to adapt to global project standards" },
      { heading: 'Cost-Effective Without Compromising Quality', text: "We help you hire Indian software developers who deliver exceptional results at a fraction of the cost of hiring locally in Western markets. India offers significant cost savings due to lower operational and labor costs, allowing you to invest more in growth and innovation" },
      { heading: 'Time Zone Advantage and Faster Turnaround', text: "Our clients benefit from the time zone difference. While you're offline, our dedicated developers are already making progress. This “round-the-clock” development cycle results in faster delivery and shorter time-to-market, giving you a competitive edge" },
      { heading: 'Proven Experience Across Industries', text: "We've helped businesses across fintech, healthcare, retail, eCommerce, logistics, and SaaS to hire software developers in India and build products that scale. Whether you're a startup or an enterprise, our developers bring domain expertise and best practices tailored to your industry" },
      { heading: 'End-to-End Support and Seamless Collaboration', text: "Our software development dedicated team comprises expert software developers with an average of 5+ years of experience across diverse technologies and domains. Their deep technical expertise, combined with industry knowledge, enables them to tackle complex challenges and deliver robust software solutions." }
    ]
  }
];

const HiringGuideTabs = () => {
  const [activeTab, setActiveTab] = useState(guideData[0].id);
  const activeContent = guideData.find(guide => guide.id === activeTab);

  const renderContent = (content) => {
    return content.map((item, index) => (
      <div key={index} className="mb-4">
        {item.heading && <h4 className="font-bold text-xl mb-2 text-blue-400">{item.heading}</h4>}
        {item.text && <p className="text-gray-300">{item.text}</p>}
        {item.list && (
          <ul className="list-disc list-inside space-y-2">
            {item.list.map((listItem, i) => (
              <li key={i} className="text-gray-300">{listItem}</li>
            ))}
          </ul>
        )}
      </div>
    ));
  };

  return (
    <section className="bg-gray-800 text-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold">
            An Essential Guide to Hire Dedicated Software Developers
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3">
            <ul className="space-y-2">
              {guideData.map(guide => (
                <li key={guide.id}>
                  <button
                    onClick={() => setActiveTab(guide.id)}
                    className={`w-full text-left px-6 py-4 rounded-lg text-lg transition-all duration-300 ${
                      activeTab === guide.id ? 'bg-blue-600 font-bold' : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    {guide.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-700 p-8 rounded-lg"
              >
                {renderContent(activeContent.content)}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringGuideTabs; 