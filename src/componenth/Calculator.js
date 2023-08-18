import React from 'react'
import "../index.css";
import { useState } from 'react';
import Emical from './Emical';


const Calculator = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const handleButtonHover = () => {
    setShowModal(true);
  };

  const handleButtonLeave = () => {
    setShowModal(false);
  };

  const handleButtonHover1 = () => {
    setShowModal1(true);
  };

  const handleButtonLeave1 = () => {
    setShowModal1(false);
  };

  const handleButtonHover2 = () => {
    setShowModal2(true);
  };

  const handleButtonLeave2 = () => {
    setShowModal2(false);
  };
  const handleButtonHover3 = () => {
    setShowModal3(true);
  };

  const handleButtonLeave3 = () => {
    setShowModal3(false);
  };


  return (
    <>
    <section>
      <div className='container'>
          <div className='row'>
          <div className="dropdown">
      <button
             className="btn btn-danger dropdown-toggle cal-btn" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
        Calculator
      </button>
        <ul className="dropdown-menu dd-menu" aria-labelledby="dropdownMenuButton">
        <div className="button-container" onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave}>
        <button className='mod-btn1'>Building</button>
        {showModal && <Emical />}
        </div>
        <div className="button-container" onMouseEnter={handleButtonHover1} onMouseLeave={handleButtonLeave1}>
        <button className='mod-btn1'>Construction</button>
        {showModal1 && <Emical />}
        </div>
        <div className="button-container" onMouseEnter={handleButtonHover2} onMouseLeave={handleButtonLeave2}>
        <button className='mod-btn1'>Emi</button>
        {showModal2 && <Emical />}
        </div>
        <div className="button-container" onMouseEnter={handleButtonHover3} onMouseLeave={handleButtonLeave3}>
        <button className='mod-btn1'>Interior</button>
        {showModal3 && <Emical />}
        </div>
        </ul>
       </div>
       </div>
       </div>
    </section>
    </>
  )
}

export default Calculator