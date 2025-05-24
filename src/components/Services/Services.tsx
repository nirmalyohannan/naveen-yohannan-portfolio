// src/components/Services/Services.tsx
import React from 'react';
import styles from './Services.module.css';
import { servicesData } from '../../data';
import { type Service } from '../../types';

// Placeholder for SVG icons - in a real app, you'd import them or use a library
const PlaceholderIcon: React.FC<{ name: string }> = ({ name }) => (
  <div className={styles.serviceIconPlaceholder}>{name.substring(0, 2).toUpperCase()}</div>
);

const Services: React.FC = () => {
  if (!servicesData || servicesData.length === 0) {
    return null; // Don't render section if no services defined
  }

  return (
    <section id="services" className={`${styles.servicesSection} section`}>
      <div className="container">
        <h2 className={`${styles.sectionTitle} section-title`}>What I Offer</h2>
        <div className={`${styles.servicesGrid} glass-effect`}>
          {servicesData.map((service: Service) => (
            <div key={service.id} className={`${styles.serviceCard} glass-effect`}>
              <div className={styles.serviceIconContainer}>
                {/* Render actual SVG icon if path is provided, else placeholder */}
                {service.icon ? (
                  <img src={`/assets/icons/${service.icon}`} alt={`${service.title} icon`} className={styles.serviceIcon} />
                ) : (
                  <PlaceholderIcon name={service.title} />
                )}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;