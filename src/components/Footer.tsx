import React from 'react';
import './styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="scrolling-text">
        <p>Footer content goes here. This text should auto-scroll.</p>
      </div>
    </div>
  );
};

export default Footer;
