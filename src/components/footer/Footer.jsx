import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <p>&copy; 2024 Your Company. All rights reserved.</p>
      <ul>
        <li><a href="/terms">Terms of Service</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
      </ul>
    </div>
  );
};

export default Footer;
