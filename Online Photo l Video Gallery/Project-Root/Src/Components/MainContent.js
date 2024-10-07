import React from 'react';

function MainContent() {
  const uploadedImageURL = "/images/sample-logo.png"; // Default placeholder image
  const uploadedVideoURL = "/videos/sample-video.mp4"; // Default placeholder video

  return (
    <div className="main-block">
      <div className="asset-wrapper">
        {uploadedVideoURL ? (
          <video
            src={uploadedVideoURL}
            autoPlay
            muted
            loop
            className="content-element"
          />
        ) : (
          <img src={uploadedImageURL} alt="Logo l Slogan" className="content-element" />
        )}
        <div className="overlay"></div> {/* Transparent overlay to block interactions */}
      </div>
      <div className="loading-bar"></div>
    </div>
  );
}

export default MainContent;
