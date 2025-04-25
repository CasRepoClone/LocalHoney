// src/pages/HomePage.tsx
import React from 'react';
import '../styles/HomePage.scss'; // Import the SCSS file for styling
import Footer from '../components/footer';

const HomePage: React.FC = () => {
  return (
    <>
    <div className="homepage-container">
        <h1>Lorem ipsum dolor </h1>
        <div className="bee-container">
            <img src="/assets/bee.png" alt="Bee" className="bee" />
            <img src="/assets/honey.png" alt="Honey" className="honey" />
        </div>
        <h2> test size</h2>
    </div>
    <Footer />
    </>
  );
};

export default HomePage;
