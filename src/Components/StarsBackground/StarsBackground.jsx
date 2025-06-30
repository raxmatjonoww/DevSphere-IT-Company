// Components/StarsBackground.jsx
import React from "react";
import "./StarsBackground.css";

function generateStars(count = 120) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const style = {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 2 + 1.5}px`,
      height: `${Math.random() * 2 + 1.5}px`,
      animationDuration: `${Math.random() * 3 + 2}s`,
    };
    stars.push(<div key={i} className="star" style={style} />);
  }
  return stars;
}

const StarsBackground = () => {
  return <div className="stars-wrapper">{generateStars()}</div>;
};

export default StarsBackground;
