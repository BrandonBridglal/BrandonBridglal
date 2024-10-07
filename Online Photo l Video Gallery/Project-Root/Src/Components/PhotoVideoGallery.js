import React, { useState } from 'react';

const images = ['/images/photo1.jpg', '/images/photo2.jpg']; // Add more dynamically
const videos = ['/videos/video1.mp4', '/videos/video2.mp4']; // Add more dynamically

function PhotoVideoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery-block">
      <div className="gallery-content">
        <img src={images[currentIndex]} alt="Gallery" />
        <video src={videos[currentIndex]} controls />
      </div>
      <div className="gallery-navigation">
        <button className="arrow-left" onClick={handlePrevious}>
          &#10094;
        </button>
        <button className="arrow-right" onClick={handleNext}>
          &#10095;
        </button>
      </div>
      <div className="zoom-controls">
        <button className="zoom-out">-</button>
        <button className="zoom-in">+</button>
      </div>
      <div className="comment-section">
        <span className="pen-icon">✏️ Drag This Pen Over An Image | Video To Comment</span>
      </div>
    </div>
  );
}

export default PhotoVideoGallery;
