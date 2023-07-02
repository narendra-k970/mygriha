import React, { useState } from 'react'
import { FaTimesCircle } from "react-icons/fa";
import { FaCentercode } from "react-icons/fa";
import { FaDeezer } from "react-icons/fa";
import { FaChevronDown} from "react-icons/fa";
import "../index.css"



const Modal = () => {
const [showModal,setShowModal] = useState(false);


const MyModal = () => {
    return (
        <>
        <section >
        <div className='container'>
             <div className='row modal-row'>
                <div className='col-lg-5 text-center mod-col'>
                    <FaCentercode className='modal-icon'/>
                 <h2>Vedio</h2>
                </div>
                <div className='col-lg-5 text-center mod-col'>
                <FaTimesCircle onClick={() => setShowModal(false)} className='cls-btn'/>
                <FaDeezer className='modal-icon'/>
                <h2>FlowChart</h2>
                </div>
             </div>
        </div>
        </section>
        </>
    )
}

  return (
    <>    
    <div className='row btnc'>
    <button onClick={() => setShowModal(true)} className='show-btn'>How it works<FaChevronDown /></button>
    {showModal && <MyModal />}
    </div>
    </>
  )
}

export default Modal