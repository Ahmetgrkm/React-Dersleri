// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header-container">
      <nav className="navbar">
        <img src="/analogo.jpg" alt="Treadmill Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="#info-container2">Koşu Bandımız</a></li>
          <li><a href="#cards-container">Kullanım Klavuzu</a></li>
          <li><a href="#clinic-info">Hakkımızda</a></li>
          <li><a href="#testimonials">Kullanıcı Yorumları</a></li>
          <li><a href="#footer">İletişim</a></li>
        </ul>
      </nav>
      <div className="header-title">
        <h1>Koşu Bandı Teknolojisinin Geleceğini Keşfedin</h1>

      </div>
    </header>
  );
}

export default Header;