import React from 'react';

const NewContactForm = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Connect with Our Software Development Experts</h2>
          <p className="mt-4 text-lg text-gray-400">Connect with our experts to transform your ideas into reality</p>
        </div>
        <div className="mt-12">
          <form action="#" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" name="name" id="name" placeholder="Name" className="bg-gray-800 text-white w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">Phone</label>
              <input type="text" name="phone" id="phone" placeholder="Phone" className="bg-gray-800 text-white w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" name="email" id="email" placeholder="Email" className="bg-gray-800 text-white w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="company" className="sr-only">Company</label>
              <input type="text" name="company" id="company" placeholder="Company" className="bg-gray-800 text-white w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="project" className="sr-only">Tell us About Your Project</label>
              <textarea name="project" id="project" rows="4" placeholder="Tell us About Your Project" className="bg-gray-800 text-white w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg">
                Save a Conversation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewContactForm; 