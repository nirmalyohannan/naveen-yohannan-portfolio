// src/components/AboutMe/AboutMe.tsx
import React from 'react';
import styles from './AboutMe.module.css';
import { aboutMeData } from '../../data';

const AboutMe: React.FC = () => {
  const { greeting, name, introduction, profileImageUrl, cvUrl } = aboutMeData;

  // Fallback for profile image if not found or path is incorrect
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // e.currentTarget.src = '/assets/profile/default-profile.png'; // Path to a default image
    e.currentTarget.style.display = 'none'; // Or hide if no default
    const parent = e.currentTarget.parentElement;
    if (parent && parent.classList.contains(styles.profileImageContainer)) {
      parent.classList.add(styles.noImage);
    }
  };

  return (
    <section id="about" className={`${styles.aboutSection} section`}>
      <div className={`${styles.aboutContainer} container`}>
        <h2 className={`${styles.sectionTitle} section-title`}>About Me</h2>
        <div className={`${styles.aboutContentWrapper} glass-effect`}>
          {profileImageUrl && (
            <div className={styles.profileImageContainer}>
              <img
                src={profileImageUrl}
                alt={`${name} - Profile`}
                className={styles.profileImage}
                onError={handleImageError}
                loading="lazy"
              />
            </div>
          )}
          <div className={styles.aboutTextContent}>
            <h3 className={styles.aboutGreeting}>{greeting}</h3>
            <h1 className={styles.aboutName}>{name}</h1>
            <div className={styles.aboutIntroduction}>
              {introduction.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            {cvUrl && (
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.cvButton} btn btn-primary btn-glass`}
              >
                Download CV
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;