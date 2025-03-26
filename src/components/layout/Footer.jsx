import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div>
        &copy; {currentYear} SVIT College, Andhra Pradesh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;