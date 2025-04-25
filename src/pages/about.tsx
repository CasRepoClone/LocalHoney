import React from 'react';
import '../styles/faq.scss'; // Import the SCSS file for styling
import Footer from '../components/footer';
import { motion } from 'framer-motion';



const about: React.FC = () => {
  return (
    
    <>
    <h5 className="titleAbout">About us </h5>
    <div className="about">
        
        
        
        <div className="scroll">
        <img src="/assets/honey.png" alt="beeB" className="beeB"/>
        <p>We are a small family run business based in the heart of Somerset. We have been keeping bees for over 3 years and have a passion for all things honey. Our bees are kept in the beautiful countryside of Somerset, where they have access to a wide variety of wildflowers and plants. This gives our honey its unique flavour and colour.</p>
        <img src="/assets/rich.png" alt="beeB" className="beeB"/>
        <p>Rich is the main beekeeper for our hives. He spends countless hours caring for the bees, ensuring they are happy and healthy. His dedication and love for beekeeping shine through in every jar of honey we produce. Rich believes in working in harmony with nature, and his passion is the heart of our family business.</p>
        <img src="/assets/mich.png" alt="beeB" className="beeB"/>
        <p>Michelle is Rich's wife and the assistant beekeeper. She brings warmth and care to every part of the process, from helping with the hives to packaging the honey with love. Her attention to detail and nurturing spirit ensure that every jar reflects the heart of our family and the beauty of Somerset.</p>
        
        
        </div>
        <h4> ↓ scroll down for more ↓</h4>
    </div>
    <Footer />
    </>
  );
};

export default about;