// src/components/Hero/Hero.tsx
import React from 'react';
import styles from './Hero.module.css';
// import { aboutMeData } from '../../data'; // Assuming hero text might come from a part of aboutMeData or a new section

const Hero: React.FC = () => {
  return (
    <section id="home" className={`${styles.heroSection} section`}>
      <div className={`${styles.heroOverlay}`}></div>
      <div className={`${styles.heroContent} container glass-effect`}>
        <h1 className={styles.heroTitle}>
          Visual <span className={styles.highlight}>Storyteller</span>
        </h1>
        <p className={styles.heroSubtitle}>
          {/* Using a snippet from aboutMeData, or you can create a dedicated hero tagline in data.ts */}
          I create visuals that tell stories, evoke emotions, and bring unique perspectives to life.
        </p>
        <div className={styles.heroActions}>
          <a href="#featured-works" className={`${styles.ctaButtonPrimary} btn btn-primary btn-glass`}>
            Explore My Work
          </a>
          <a href="#contact" className={`${styles.ctaButtonSecondary} btn btn-glass`}>
            Get In Touch
          </a>
        </div>
      </div>
      {/* Optional: Scroll down indicator */}
      <a href="#featured-works" className={styles.scrollDownIndicator} aria-label="Scroll down">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg>
      </a>
    </section>
  );
};

export default Hero;