import React from 'react';
import '../styles/footer.scss'; // Import the SCSS file for styling
import { on } from 'events';
import { Link, useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const onFaqClick = () => {
    navigate('/faq');
  }
  const onAboutClick = () => {
    navigate("/about");
  }
  const onPrivacyClick = () => {
    navigate('/privacypolicy'); 
  }
  const onHomeClick = () => {
    navigate('/'); 
  }
  return (
    <>
    <img src="/assets/rich.png" alt="Richard" className="rich pixchar"/>
    <img src="/assets/mich.png" alt="Michelle" className="mich pixchar"/>
      <footer className="site-footer">
        <div className = "footer-content">
          <div>
            <h1 onClick={onFaqClick}>FAQ</h1>
          </div>
          <div className="stackedContainer">
            <h1 onClick={onAboutClick}>ABOUT</h1>
            <h1 onClick={onHomeClick}>HOME</h1>
          </div>
         
          <div>
            <h1 onClick={onPrivacyClick}>DATA</h1>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;