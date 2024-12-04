import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <div className={styles.logo}>
          <Code2 size={32} color="#4f46e5" />
          <span>TechJE</span>
        </div>

        <div className={styles.desktopNav}>
          <Link to="/" className={styles.navLink}>
            Inicio
          </Link>
          <a href="#services" className={styles.navLink}>Servicios</a>
          <a href="#portfolio" className={styles.navLink}>Proceso</a>
          <a href="#contact" className={styles.contactButton}>Contactar</a>

        </div>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}
        >
          <Link to="/" className={styles.navLink}>
            Inicio
          </Link>
          <a href="#services" className={styles.navLink}>Servicios</a>
          <a href="#process" className={styles.navLink}>Proceso</a>
          <a href="#contact" className={styles.contactButton}>Contactar</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
