import React from 'react';

function Footer() {
  return (
    <footer className="footer flex flex-col md:flex-row">
      <p>&copy; 2025 Inventory Management System</p>
      <div className="social-icons">
        <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
