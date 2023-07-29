import React, { useState } from 'react';
import './App.css';
import logo from './cryptosight-logo.png';

const ImageWithInfoBox3 = ({infoText3}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="containerz3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span class="material-symbols-outlined">info</span>

      {isHovering && <div className="info-box3">{infoText3}</div>}
    </div>
  );
};

export default ImageWithInfoBox3;