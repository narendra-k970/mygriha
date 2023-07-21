import React from 'react'
import { useState } from 'react';

const Swiper = () => {
    const [isActive, setIsActive] = useState(false);
      
    const toggleSwitch = () => {
        setIsActive(!isActive);
    };

  return (
    <>
      <div className={`switcher ${isActive ? 'active' : ''}`} onClick={toggleSwitch}>
      <div className="slider" />
    </div>
    </>
  )
}

export default Swiper