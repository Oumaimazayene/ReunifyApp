// Header.js

import React, { useState } from "react";
import "../styles/header.css"; // Assurez-vous que le fichier CSS est correctement importé
import { Link as RouterLink } from "react-router-dom";
import logoD from "../assets/logoD.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="nav-bar">
      <div className="nav-logo-container"></div>
      <div className={`navbar-menu-container ${isMenuOpen ? "open" : ""}`}>
        <ul className="navbar-links-container">
          <li className="centered-item">
            <a href="#" className="white-text"></a>
          </li>
          <li className="centered-item">
            <a href="#" className="white-text"></a>
          </li>
          <li className="centered-item">
            <a href="#" className="white-text"></a>
          </li>
          {/* Ajoutez ici d'autres éléments du menu si nécessaire */}
          <li>
            <button className="primary-button white-text">
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </li>
        </ul>
      </div>
      <div className="menu-btn" onClick={toggleMenu}>
        <div className={`menu-icon ${isMenuOpen ? "open" : ""}`}>
          <span className="navicon"></span>
          <span className="navicon"></span>
          <span className="navicon"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
