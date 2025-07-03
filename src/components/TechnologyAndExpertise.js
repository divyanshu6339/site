import React, { useState } from 'react';

// Import Tech Logos
import netLogo from '../Assets/4.1.png';
import csharpLogo from '../Assets/4.2.png';
import goLogo from '../Assets/4.3.png';
import javaLogo from '../Assets/4.4.png';
import jsLogo from '../Assets/4.5.png';
import phpLogo from '../Assets/4.6.png';
import pythonLogo from '../Assets/4.7.png';
import rorLogo from '../Assets/4.8.png';
import swiftLogo from '../Assets/4.9.png';
import angularLogo from '../Assets/4.10.png';
import awsLogo from '../Assets/4.11.png';
import djangoLogo from '../Assets/4.12.png';
import dockerLogo from '../Assets/4.13.png';
import flutterLogo from '../Assets/4.14.png';
import laravelLogo from '../Assets/4.15.png';
import nodeLogo from '../Assets/4.16.png';
import reactLogo from '../Assets/4.17.png';
import vueLogo from '../Assets/4.18.png';

// Import Database Logos
import amazonRdsLogo from '../Assets/16.1.png';
import azureSqlLogo from '../Assets/16.2.png';
import cassandraDbLogo from '../Assets/16.3.png';
import dynamoDbLogo from '../Assets/16.4.png';
import elasticsearchDbLogo from '../Assets/16.5.png';
import mongoDbLogo from '../Assets/16.6.png';
import mysqlLogo from '../Assets/16.18.png';
import oracleDbLogo from '../Assets/16.7.png';
import postgresqlDbLogo from '../Assets/16.8.png';
import sqlServerLogo from '../Assets/16.9.png';

// Import Cloud & DevOps Logos
import googleCloudLogo from '../Assets/16.10.png';
import cassandraDevopsLogo from '../Assets/16.11.png';
import dynamoDevopsLogo from '../Assets/16.12.png';
import elasticsearchDevopsLogo from '../Assets/16.13.png';
import mongodbDevopsLogo from '../Assets/16.14.png';
import kafkaLogo from '../Assets/16.15.png';
import oracleDevopsLogo from '../Assets/16.16.png';
import postgresqlDevopsLogo from '../Assets/16.17.png';

// Import Benefit Icons
import diverseIcon from '../Assets/5.1.png';
import certifiedIcon from '../Assets/5.2.png';
import flexibleIcon from '../Assets/5.3.png';
import deliveryIcon from '../Assets/5.4.png';
import communicationIcon from '../Assets/5.5.png';
import qualityIcon from '../Assets/5.6.png';


const techData = {
  languages: [
    { name: '.Net', logo: netLogo }, { name: 'C#', logo: csharpLogo }, { name: 'Golang', logo: goLogo },
    { name: 'Java', logo: javaLogo }, { name: 'JavaScript', logo: jsLogo }, { name: 'PHP', logo: phpLogo },
    { name: 'Python', logo: pythonLogo }, { name: 'RoR', logo: rorLogo }, { name: 'Swift', logo: swiftLogo },
    { name: 'Angular', logo: angularLogo }, { name: 'AWS', logo: awsLogo }, { name: 'Django', logo: djangoLogo },
    { name: 'Docker', logo: dockerLogo }, { name: 'Flutter', logo: flutterLogo }, { name: 'Laravel', logo: laravelLogo },
    { name: 'Node.js', logo: nodeLogo }, { name: 'React', logo: reactLogo }, { name: 'Vue.js', logo: vueLogo },
  ],
  databases: [
    { name: 'Amazon RDS', logo: amazonRdsLogo },
    { name: 'Azure SQL', logo: azureSqlLogo },
    { name: 'Cassandra', logo: cassandraDbLogo },
    { name: 'DynamoDB', logo: dynamoDbLogo },
    { name: 'Elasticsearch', logo: elasticsearchDbLogo },
    { name: 'MongoDB', logo: mongoDbLogo },
    { name: 'MySQL', logo: mysqlLogo },
    { name: 'Oracle', logo: oracleDbLogo },
    { name: 'PostgreSQL', logo: postgresqlDbLogo },
    { name: 'SQL Server', logo: sqlServerLogo },
  ],
  devops: [
    { name: 'AWS', logo: awsLogo },
    { name: 'Google Cloud', logo: googleCloudLogo },
    { name: 'Cassandra', logo: cassandraDevopsLogo },
    { name: 'DynamoDB', logo: dynamoDevopsLogo },
    { name: 'Elasticsearch', logo: elasticsearchDevopsLogo },
    { name: 'MongoDB', logo: mongodbDevopsLogo },
    { name: 'Kafka', logo: kafkaLogo },
    { name: 'Oracle', logo: oracleDevopsLogo },
    { name: 'PostgreSQL', logo: postgresqlDevopsLogo },
    { name: 'Docker', logo: dockerLogo },
  ],
};

const whyChooseUsData = [
    { icon: diverseIcon, title: 'Diverse Industry Expertise', description: 'Our developers come from various technical backgrounds, enabling us to craft solutions for fintech, edtech, healthcare, logistics, and more.' },
    { icon: certifiedIcon, title: 'Certified & Skilled Developers', description: 'Work with professionals who are certified in the latest technologies and follow industry best practices for quality code and performance.' },
    { icon: flexibleIcon, title: 'Flexible Engagement Models', description: 'Choose what fits your needs: Dedicated Team, Staff Augmentation, or Project-Based Models—100% scalable and budget-friendly.' },
    { icon: deliveryIcon, title: 'Guaranteed On-Time Delivery', description: 'We respect your time. Our streamlined development process ensures consistent delivery without compromising quality.' },
    { icon: communicationIcon, title: 'Transparent Communication', description: 'Stay informed at every stage with open communication, regular updates, and collaborative tools like Slack, Jira, and Zoom.' },
    { icon: qualityIcon, title: 'Strict Quality Control', description: 'Every project undergoes multiple QA cycles to ensure bug-free, secure, and stable performance on all devices.' },
];

const TechCard = ({ logo, name }) => (
    <div className="flex flex-col items-center gap-2 transform hover:scale-110 transition-transform duration-300">
        <img src={logo} alt={name} className="h-16 w-16 object-contain" />
        <p className="text-gray-400 text-sm">{name}</p>
    </div>
);

const BenefitCard = ({ icon, title, description }) => (
    <div className="relative bg-[#0D121F] border-2 border-gray-800 rounded-lg p-8 pt-16 text-center transform hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0D121F] p-2 rounded-full">
            <img src={icon} alt={title} className="h-16 w-16" />
        </div>
        <h3 className="text-xl font-semibold text-blue-500 mb-4">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);


const TechnologyAndExpertise = () => {
    const [activeTab, setActiveTab] = useState('languages');

    const renderTechContent = () => {
        switch (activeTab) {
            case 'languages':
                return <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-9 gap-x-8 gap-y-12">{techData.languages.map(tech => <TechCard key={tech.name} {...tech} />)}</div>;
            case 'databases':
                return <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-9 gap-x-8 gap-y-12">{techData.databases.map(tech => <TechCard key={tech.name} {...tech} />)}</div>;
            case 'devops':
                return <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-9 gap-x-8 gap-y-12">{techData.devops.map(tech => <TechCard key={tech.name} {...tech} />)}</div>;
            default:
                return null;
        }
    };
    

    return (
        <div className="bg-[#00070E] text-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Tech Track Section */}
                <div className="text-center mb-24">
                    <h2 className="text-4xl font-bold mb-12">Our Tech Track</h2>
                    <div className="flex justify-center border-b border-gray-800 mb-12">
                        <button onClick={() => setActiveTab('languages')} className={`py-2 px-6 text-lg font-semibold border-b-2 transition-all duration-300 ${activeTab === 'languages' ? 'border-blue-500 text-white' : 'border-transparent text-gray-500 hover:text-white'}`}>Languages</button>
                        <button onClick={() => setActiveTab('databases')} className={`py-2 px-6 text-lg font-semibold border-b-2 transition-all duration-300 ${activeTab === 'databases' ? 'border-blue-500 text-white' : 'border-transparent text-gray-500 hover:text-white'}`}>Databases</button>
                        <button onClick={() => setActiveTab('devops')} className={`py-2 px-6 text-lg font-semibold border-b-2 transition-all duration-300 ${activeTab === 'devops' ? 'border-blue-500 text-white' : 'border-transparent text-gray-500 hover:text-white'}`}>Cloud & DevOps</button>
                    </div>
                    {renderTechContent()}
                </div>

                {/* Why Choose Us Section */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4 leading-tight">Why Choose Jellyfish Technologies as Your Software<br/>Development Services Provider?</h2>
                    <p className="text-gray-400 mb-20 max-w-3xl mx-auto">Partner with a team that delivers secure, scalable, and tailored software solutions—every time.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
                        {whyChooseUsData.map(benefit => <BenefitCard key={benefit.title} {...benefit} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechnologyAndExpertise;
 