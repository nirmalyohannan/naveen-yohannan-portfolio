// src/components/Photography/Photography.tsx
import React, { useEffect, useState } from 'react';
import styles from './Photography.module.css'; // Use the same styles as FeaturedWorks or create new ones
import { type PortfolioItem } from '../../types';
// import { photographyBasePath } from '../../data'; // Base path for images

const Photography: React.FC = () => {
  const [photos, setPhotos] = useState<PortfolioItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // VITE specific way to import images from a folder:
    const imageModules = import.meta.glob('/src/assets/photography/**/*.{png,jpg,jpeg,svg,gif,webp}');

    const loadPhotos = async () => {
      const loadedImages: PortfolioItem[] = [];
      for (const path in imageModules) {
        const imageUrlModule = await imageModules[path]();
        const imageUrl = (imageUrlModule as { default: string }).default;
        const fileName = path.split('/').pop()?.split('.')[0] || 'Untitled Photo';
        loadedImages.push({
          id: path, // Use path as a unique ID
          title: fileName.replace(/[-_]/g, ' '),
          category: 'photography',
          imageUrl: imageUrl,
          description: `A beautiful shot from the photography collection: ${fileName.replace(/[-_]/g, ' ')}.`
        });
      }
      setPhotos(loadedImages);
    };

    loadPhotos();

  }, []);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  if (photos.length === 0) {
    return (
      <section id="photography" className={`${styles.photographySection} section`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} section-title`}>Photography</h2>
          <p className={styles.emptyMessage}>More stunning photography coming soon. Watch this space!</p>
        </div>
      </section>
    );
  }

  return (
    <section id="photography" className={`${styles.photographySection} section`}>
      <div className="container">
        <h2 className={`${styles.sectionTitle} section-title`}>Photography</h2>
        <div className={`${styles.photoGrid} glass-effect`}>
          {photos.map((photo) => (
            <div key={photo.id} className={styles.photoItem} onClick={() => openModal(photo.imageUrl)}>
              <img src={photo.imageUrl} alt={photo.title} className={styles.photoImage} loading="lazy" />
              <div className={styles.photoItemOverlay}>
                <h3 className={styles.photoItemTitle}>{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected photo enlarged" className={styles.modalImage} />
            <button className={styles.closeModalButton} onClick={closeModal} aria-label="Close image viewer">
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Photography;