import React from 'react';
import { FaHeartbeat, FaGraduationCap, FaChartLine, FaBuilding, FaStore, FaTruck, FaBroadcastTower, FaCar, FaShieldAlt, FaPlane, FaTasks, FaFilm } from 'react-icons/fa';

const industries = [
  { name: 'Healthcare', icon: <FaHeartbeat /> },
  { name: 'EdTech', icon: <FaGraduationCap /> },
  { name: 'Fintech', icon: <FaChartLine /> },
  { name: 'Proptech', icon: <FaBuilding /> },
  { name: 'Retail', icon: <FaStore /> },
  { name: 'Transport', icon: <FaTruck /> },
  { name: 'Telecom', icon: <FaBroadcastTower /> },
  { name: 'Automotive', icon: <FaCar /> },
  { name: 'Insurtech', icon: <FaShieldAlt /> },
  { name: 'Travel & Hospitality', icon: <FaPlane /> },
  { name: 'Facility Management', icon: <FaTasks /> },
  { name: 'Media & Entertainment', icon: <FaFilm /> },
];

const Industries = () => {
  return (
    <div className="bg-[#04102a] text-white py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-blue-400">Industries</span> We Serve
          </h2>
          <div className="inline-block">
            <div className="w-24 h-1 bg-blue-400 mt-2"></div>
            <div className="w-32 h-1 bg-blue-400 mt-1 ml-2"></div>
          </div>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            We serve a diverse range of industries, catering to a wide spectrum of fields and sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry) => (
            <div key={industry.name} className="bg-[#0f1a3e] border border-gray-700 rounded-lg p-6 flex flex-col justify-between h-48">
              <div>
                <h3 className="text-xl font-semibold text-gray-200">{industry.name}</h3>
              </div>
              <div className="self-start">
                <div className="bg-gray-600 rounded-full p-3 text-3xl text-white">
                  {industry.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries; 