import React from "react";
import "../theme/CSS/LoadingFallback.css";

const LoadingFallback = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingFallback;
