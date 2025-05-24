// src/components/Footer/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';
import { socialLinks, navLinks } from '../../data'; // Optional: for quick links or social icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} glass-effect`}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <p className={styles.copyright}>
              &copy; {currentYear} Naveen Yohannan. All Rights Reserved.
            </p>
            <p className={styles.tagline}>
              Capturing Moments, Creating Memories.
            </p>
          </div>

          {/* Optional: Quick Navigation Links */}
          {navLinks && navLinks.length > 0 && (
            <div className={styles.footerNav}>
              <h4 className={styles.footerNavTitle}>Quick Links</h4>
              <ul className={styles.footerNavList}>
                {navLinks.slice(0, 4).map((link) => ( // Display first 4 links
                  <li key={link.id} className={styles.footerNavItem}>
                    <a href={link.url} className={styles.footerNavLink}>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Optional: Social Media Links */}
          {socialLinks && socialLinks.length > 0 && (
            <div className={styles.footerSocial}>
              <h4 className={styles.footerSocialTitle}>Follow Me</h4>
              <div className={styles.socialIconsContainer}>
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIconLink}
                    aria-label={link.name}
                  >
                    {/* Placeholder for actual icons - replace with SVGs or <img> */}
                    {link.icon ? (
                      <img src={link.icon} alt={link.name} className={styles.socialIcon} />
                    ) : (
                      <span>{link.name.substring(0, 2).toUpperCase()}</span> // Fallback to initials
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={styles.footerBottom}>
          {/* <p>Designed with Glassmorphism aesthetics.</p> */}
          {/* You can add more links or info here if needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;