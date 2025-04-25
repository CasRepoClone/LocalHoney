// src/pages/HomePage.tsx
import React from 'react';
import '../styles/HomePage.scss'; // Import the SCSS file for styling
import Footer from '../components/footer';
import { motion } from 'framer-motion';
import { Link, useNavigate } from "react-router-dom";



const HomePage: React.FC = () => {
  const navigate = useNavigate();

  // code here

  const onHoneyClick = () => {
    navigate('/contactus');
  };

  return (
    <>
    <div className="homepage-container">
        <h1>Junabug Honey</h1>
        <div className="bee-container">
            <img src="/assets/bee.png" alt="Bee" className="bee" />
            <div className="honey-wrapper">
            <motion.img
              src="/assets/honey.png"
              alt="Honey"
              className="honey"
              animate={{ rotate: [-3, 3, -3] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              onClick={onHoneyClick}
            />
          </div>
        </div>
        <h2 onClick={onHoneyClick}>Click me to buy :) </h2>
    </div>

    <Footer />
    </>
  );
};

export default HomePage;
