import React, { useState } from 'react'
import Mod from './Mod';


const Modal = () => {
const [showModal, setShowModal] = useState(false);


  const handleButtonHover = () => {
    setShowModal(true);
  };

  const handleButtonLeave = () => {
    setShowModal(false);
  };
  
  

  return (
    <>    
    <div className='row mod-row'>
      <div className="button-container" onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave}>
        <button className='mod-btn'>How it works</button>
        {showModal && <Mod />}
        
      </div>
    </div>
    </>
  )
}

export default Modal