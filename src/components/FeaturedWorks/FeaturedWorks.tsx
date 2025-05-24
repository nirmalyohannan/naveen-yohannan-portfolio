// src/components/FeaturedWorks/FeaturedWorks.tsx
import React, { useEffect, useState } from 'react';
import styles from './FeaturedWorks.module.css';
import { type PortfolioItem } from '../../types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { featuredWorksBasePath } from '../../data'; // Base path for images

// Helper function to simulate fetching image files from a directory
// In a real Vite project, we'd use `import.meta.glob` for dynamic imports
// const importAll = (r: __WebpackModuleApi.RequireContext) => {
//   return r.keys().map(r);
// };

const FeaturedWorks: React.FC = () => {
  const [works, setWorks] = useState<PortfolioItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Dynamically import images from the assets/featured-works folder
    // This specific method (require.context) is Webpack-specific.
    // For Vite, the approach is different, typically using import.meta.glob
    // Since this is a generic React setup, we'll mock this or use a placeholder.

    // VITE specific way to import images from a folder:
    const imageModules = import.meta.glob('/src/assets/featured-works/**/*.{png,jpg,jpeg,svg,gif,webp}', { eager: true });

    const loadWorks = async () => {
      const loadedImages: PortfolioItem[] = [];
      for (const path in imageModules) {
        const imageUrlModule = await imageModules[path];
        const imageUrl = (imageUrlModule as { default: string }).default;
        const fileName = path.split('/').pop()?.split('.')[0] || 'Untitled';
        loadedImages.push({
          id: path, // Use path as a unique ID
          title: fileName.replace(/[-_]/g, ' '), // Simple title from filename
          category: 'featured-works',
          imageUrl: imageUrl,
          description: `A captivating piece from the featured collection: ${fileName.replace(/[-_]/g, ' ')}.`
        });
      }
      setWorks(loadedImages);
    };

    loadWorks();

  }, []);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden'; // Prevent background scroll when modal is open
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scroll
  };

  if (works.length === 0) {
    return (
      <section id="featured-works" className={`${styles.featuredWorksSection} section`}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} section-title`}>Featured Works</h2>
          <p className={styles.emptyMessage}>Showcasing captivating moments and creative projects soon. Stay tuned!</p>
        </div>
      </section>
    );
  }

  return (
    <section id="featured-works" className={`${styles.featuredWorksSection} section`}>
      <div className="container">
        <h2 className={`${styles.sectionTitle} section-title`}>Featured Works</h2>
        <div className={styles.swiperContainerWrapper}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {works.map((work) => (
              <SwiperSlide key={work.id}>
                <div className={styles.workItem} onClick={() => openModal(work.imageUrl)}>
                  <img src={work.imageUrl} alt={work.title} className={styles.workImage} loading="lazy" />
                  <div className={styles.workItemOverlay}>
                    <h3 className={styles.workItemTitle}>{work.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> {/* Close wrapper div */}

        {selectedImage && (
          <div className={styles.modal} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="Selected work enlarged" className={styles.modalImage} />
              <button className={styles.closeModalButton} onClick={closeModal} aria-label="Close image viewer">
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedWorks;