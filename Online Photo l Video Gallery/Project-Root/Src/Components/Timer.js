import React, { useEffect, useState } from 'react';

function Timer() {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}:${mins}:${secs}`;
  };

  if (timeLeft <= 0) {
    return <ExplosionEffect />;
  }

  return (
    <div className="timer-container">
      <div className="timer">{formatTime(timeLeft)}</div>
      <div className="separator"></div>
      <div className="self-destruct-text">This Page Will Self Destruct</div>
    </div>
  );
}

function ExplosionEffect() {
  return (
    <div className="explosion">
      <video src="/videos/explosion.webm" autoPlay muted />
      <div className="message">Your Time to View This Slideshow Is Up</div>
      <button onClick={() => window.location.reload()}>View Again</button>
    </div>
  );
}

export default Timer;
