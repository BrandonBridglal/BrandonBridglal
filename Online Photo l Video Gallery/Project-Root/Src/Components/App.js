import React from 'react';
import MainContent from './components/MainContent';
import PhotoVideoGallery from './components/PhotoVideoGallery';
import Timer from './components/Timer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <MainContent />
      <PhotoVideoGallery />
      <Timer />
    </div>
  );
}

export default App;
