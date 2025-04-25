import React from 'react';
import '../styles/footer.scss'; // Import the SCSS file for styling
import { on } from 'events';

const Footer: React.FC = () => {

  const onFaqClick = () => {
    alert("Hello! This is a test alert. faq");
  }
  const onAboutClick = () => {
    alert("Hello! This is a test alert. about");
  }
  const onContactClick = () => {
    alert("Hello! This is a test alert. contact");
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
          <div>
            <h1 onClick={onAboutClick}>ABOUT</h1>
          </div>
          <div>
            <h1 onClick={onContactClick}>Contact us</h1>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;