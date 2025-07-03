import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-center">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-400 text-center">
            This is the contact page. Content will be added here.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage; 