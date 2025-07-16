import React from 'react';
import { motion } from 'framer-motion';
import payleadrLogo from '../Assets/1.1.png';
import patraLogo from '../Assets/1.5.png';
import redquantaLogo from '../Assets/26.2.png';
import heffernanLogo from '../Assets/26.4.png';

const logos = [
  { src: payleadrLogo, alt: 'Payleadr' },
  { src: patraLogo, alt: 'Patra' },
  { src: redquantaLogo, alt: 'Redquanta' },
  { src: heffernanLogo, alt: 'Heffernan' },
];

const TrustedBy = ({ backgroundColor = 'bg-white' }) => {
  const textColor = backgroundColor === 'bg-white' ? 'text-gray-500' : 'text-gray-400';
  return (
        <div className={`${backgroundColor} py-12`}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
                    <h2 className={`text-center text-lg font-semibold ${textColor} tracking-wider`}>
            TRUSTED BY
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className="col-span-1 flex justify-center"
              >
                <img className="h-20" src={logo.src} alt={logo.alt} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TrustedBy; 