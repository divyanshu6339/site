import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroHome from '../components/HeroHome';
import CustomSolutions from '../components/CustomSolutions';
import Offerings from '../components/Offerings';
import Awards from '../components/Awards';
import Industries from '../components/Industries';
import WorkSlider from '../components/WorkSlider';
import TechnologyAndExpertise from '../components/TechnologyAndExpertise';
import WhyChooseUs from '../components/WhyChooseUs';
import ClientTestimonial from '../components/ClientTestimonial';
import Insights from '../components/Insights';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const MotionWrap = ({ children }) => (
  <motion.div
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

const HomePage = () => {
  return (
    <div className="bg-gray-900">
      <Header />
      <HeroHome />
      <MotionWrap><CustomSolutions /></MotionWrap>
      <MotionWrap><Offerings /></MotionWrap>
      <MotionWrap><Awards /></MotionWrap>
      <MotionWrap><Industries /></MotionWrap>
      
      <MotionWrap><WorkSlider /></MotionWrap>
      <MotionWrap><TechnologyAndExpertise /></MotionWrap>
      <MotionWrap><WhyChooseUs /></MotionWrap>
      <MotionWrap><ClientTestimonial /></MotionWrap>
      <MotionWrap><Insights /></MotionWrap>
      <Footer />
    </div>
  );
}

export default HomePage; 