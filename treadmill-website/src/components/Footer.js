import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-container">
        <p>&copy; 2024 Treadmill Inc. All Rights Reserved.</p>
        <div className='mail'>
          <i class="fa fa-envelope"></i>
          <a href="https://www.gmail.com" target="_self" title="Kişisel Site"> Mail Adresi </a> <br></br>
        </div>
        <div className='telefon'>
          <i class="fa fa-phone"></i>
          <a href="tel:555-999-88-77">555-999-88-77</a>
        </div>
        <div className='adres'>
          <i class="fa-solid fa-house-medical"></i>
          <p>klinik adresi</p>
        </div>
        <ul className="social-links">
          <li><a href="https://www.gmail.com" target="_blank" rel="noreferrer"><i className="fab fa-google"></i></a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;