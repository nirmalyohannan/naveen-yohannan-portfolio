// src/components/Navbar/Navbar.tsx
import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { navLinks, socialLinks } from '../../data';
// import { NavLink as RouterLink } from 'react-router'; // Assuming usage of React Router for SPA navigation if sections are routes
// If sections are on the same page, a simple anchor tag or scroll-to-logic would be used.

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  }

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} glass-effect`}>
      <div className={`${styles.navbarContainer} container`}>
        <a href="#home" className={styles.logo} onClick={closeMobileMenu}>
          Naveen Yohannan
          {/* <img src="/assets/logo.svg" alt="Naveen Yohannan Logo" /> */}
        </a>

        <nav className={`${styles.navMenu} ${mobileMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.id} className={styles.navItem}>
                {/* If using React Router for different pages/routes */}
                {/* <RouterLink to={link.url} className={styles.navLink} onClick={closeMobileMenu}>{link.title}</RouterLink> */}

                {/* For single-page scroll navigation */}
                <a href={link.url} className={styles.navLink} onClick={closeMobileMenu}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.mobileSocialLinks}>
            {socialLinks.map(link => (
              <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.socialIconLinkMobile} onClick={closeMobileMenu}>
                {/* Placeholder for actual icons - using text for now */}
                {link.name.charAt(0)}
              </a>
            ))}
          </div>
        </nav>

        <div className={styles.headerActions}>
          <div className={styles.desktopSocialLinks}>
            {socialLinks.map(link => (
              <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.socialIconLink}>
                {/* Placeholder for actual icons - e.g., <img src={link.icon} alt={link.name} /> */}
                {/* For simplicity, using first letter or name. Implement SVG icons later */}
                {link.name}
              </a>
            ))}
          </div>
          <button className={`${styles.mobileMenuToggle} ${mobileMenuOpen ? styles.open : ''}`} onClick={toggleMobileMenu} aria-label="Toggle menu">
            <div className={styles.hamburgerBar}></div>
            <div className={styles.hamburgerBar}></div>
            <div className={styles.hamburgerBar}></div>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;