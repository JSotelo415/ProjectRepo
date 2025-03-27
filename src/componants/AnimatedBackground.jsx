import React from "react";
import "../styles/AnimatedBackground.scss";

const AnimatedBackground = () => {
  return (
    <div className="background">
      {Array.from({ length: 20 }).map((_, index) => (
        <span key={index}></span>
      ))}
    </div>
  );
};

export default AnimatedBackground;
