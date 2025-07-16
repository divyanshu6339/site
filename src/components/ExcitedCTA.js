import React from 'react';
import { Link } from 'react-router-dom';

const ExcitedCTA = () => {
  return (
    <div className="bg-blue-800">
      <div className="max-w-screen-xl mx-auto text-center py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
          Excited To Launch Your Mobile App Project? Start Here!
        </h2>
        <p className="mt-4 text-xl text-blue-200">
          Let's transform your vision into reality and craft outstanding, customized mobile app solutions collaboratively. Start your mobile app development journey with us today.
        </p>
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105"
          >
            Get an Estimate of Your Project Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExcitedCTA; 