import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Cotford Honey. All rights reserved.</p>
    </footer>
  );
};

export default Footer;