import React from 'react';

const serviceOptions = [
  'Custom Software Development',
  'Enterprise Software Development',
  'Software Product Development',
  'Software Consulting Development',
  'Offshore Software Development',
  'Software Integration Development',
];

const ContactForm = () => {
  return (
    <div className="bg-[#223A5E] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Connect With A Software Development Service Expert Now!
        </h2>
        <form className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Email ID"
            className="bg-white rounded-md p-3 w-full md:w-auto flex-grow"
          />
          <div className="relative w-full md:w-auto flex-grow">
            <select
              defaultValue=""
              className="bg-white rounded-md p-3 appearance-none w-full"
            >
              <option value="" disabled>Please Choose Service</option>
              {serviceOptions.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            className="bg-white text-gray-800 font-semibold py-3 px-6 rounded-md w-full md:w-auto"
          >
            Let's Talk
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm; 