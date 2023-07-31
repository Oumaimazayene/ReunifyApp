import React, { useState } from "react";
import "../styles/navbar.css"; // Assurez-vous que le fichier CSS est correctement importé

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {};

  return (
    <nav className="nav-bar">
      <div className="nav-logo-container">
        {/* Insérez ici le code pour votre logo */}
      </div>
      <div className={`navbar-menu-container ${isMenuOpen ? "open" : ""}`}>
        <ul className="navbar-links-container">
          <li>
            <a href="#" className="white-text">
              Accueil
            </a>
          </li>
          <li>
            <a href="#" className="white-text">
              Profil
            </a>
          </li>
          <li>
            <a href="#" className="white-text">
              Paramètres
            </a>
          </li>
          {/* Ajoutez ici d'autres éléments du menu si nécessaire */}
          <li>
            <button className="primary-button" onClick={handleLogout}>
              Déconnexion
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
    </nav>
  );
};

export default NavBar;
