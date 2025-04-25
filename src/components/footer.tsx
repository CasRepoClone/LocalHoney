import React from 'react';
import '../styles/footer.scss'; // Import the SCSS file for styling

const Footer: React.FC = () => {
  return (
    <>
    <img src="/assets/rich.png" alt="Richard" className="rich pixchar"/>
    <img src="/assets/mich.png" alt="Michelle" className="mich pixchar"/>
      <footer className="site-footer">
        <div className = "footer-content">
          <div>
            <h1>FAQ</h1>
          </div>
          <div>
            <h1>ABOUT</h1>
          </div>
          <div>
            <h1>Contact us</h1>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;