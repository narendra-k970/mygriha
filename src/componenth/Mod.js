import React from 'react'
import { useState } from 'react';
import { FaCentercode } from "react-icons/fa";
import { FaDeezer } from "react-icons/fa";
import "../index.css"

const Mod = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

  return (
    <>
    <div
      className={`mod ${isHovered ? 'active' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="modal-content">
      <section >
        <div className='container'>
             <div className='row modal-row'>
                <div className='col-lg-5 text-center mod-col'>
                    <FaCentercode className='modal-icon'/>
                 <h2>Vedio</h2>
                </div>
                <div className='col-lg-5 text-center mod-col'>
                <FaDeezer className='modal-icon'/>
                <h2>FlowChart</h2>
                </div>
             </div>
        </div>
        </section>
      </div>
    </div>

    </>
  )
}

export default Mod