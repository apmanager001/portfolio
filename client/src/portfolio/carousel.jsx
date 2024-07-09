import React, { useState } from "react";
import styles from "./css/carousel.module.css";

const ImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.imageContainer}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentIndex === index ? styles.active : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <button className={styles.prev} onClick={goToPrevious}>
        &#10094;
      </button>
      <button className={styles.next} onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarousel;
