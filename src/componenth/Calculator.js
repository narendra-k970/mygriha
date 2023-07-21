import React from 'react'
import "../index.css";
import { useState } from 'react';
import Emical from './Emical';

const Calculator = () => {

   const [showModal, setShowModal] = useState(false);
   const [showModal1, setShowModal1] = useState(false);
   const [showModal2, setShowModal2] = useState(false);
   const [showModal3, setShowModal3] = useState(false);

   
   const MyModal = () => {
    return(
      <>
      <Emical />
      </>
    )
   }
   

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
        <li><button onClick={() => setShowModal(true)} className="dropdown-item dp-item" to="#">Building</button>{showModal && <MyModal />}</li><hr className='hr1'/>
        <li><button onClick={() => setShowModal1(true)} className="dropdown-item dp-item" to="#">Construction</button>{showModal1 && <MyModal />}</li><hr className='hr1'/>
        <li><button onClick={() => setShowModal2(true)} className="dropdown-item dp-item" to="#" >EMI</button>{showModal2 && <MyModal />}</li><hr className='hr1'/>
        <li><button onClick={() => setShowModal3(true)} className="dropdown-item dp-item" to="#">Interior</button>{showModal3 && <MyModal />}</li>
        </ul>
       </div>
       </div>
       </div>
    </section>
    </>
  )
}

export default Calculator