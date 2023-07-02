import React from 'react';
import "../index.css";
import { BiArch } from "react-icons/bi";
import { BiBuildings } from "react-icons/bi";
import { FaSistrix } from "react-icons/fa";
import icon1 from "../icon/pin (5).png";
import icon2 from "../icon/target (1).png";
import icon3 from "../icon/office-building.png";
import icon4 from "../icon/down-arrow (4).png";



const Demand = () => {
  return (
    <>
    <section>
        <div className='container'>
             <div className='row mt-5 con-row1'>
             <h5 className='text-center'>
               On demand construction,Architecture & Interior Design Consultancy.<br/>Simple fast & Affordable
             </h5>
             <h5 className='text-center my-3'>
               <b>Search for best Architect</b>
            </h5>
             </div>
             <div className='row text-center con-row'>
              <div className='col-lg-3 con-box1'>
                 <div className='con-box'>
                    <BiArch className='con-icon'/><p>Construction</p>
                 </div>
              </div>
              <div className='col-lg-3 con-box1'>
                <div className='con-box'>
                    <BiBuildings className='con-icon'/><p>Interior Designing</p>
                    </div>
              </div>
              <div className='col-lg-3 con-box1'>
                <div className='con-box'>
              <BiArch className='con-icon'/><p>Architecture</p>
              </div>
              </div>
              <div className='col-lg-3 con-box1'>
                <div className='con-box'>
                <BiBuildings className='con-icon'/><p>Bid Project</p>
                </div>
              </div>
             </div>
             <div className='row con-row2'>
             <form>
              <div className="form-row text-center">
               <div className="input-with-icon inp-bg">
               <img src={icon1} alt='icon' className='s-icon1'/>
               <input type="text" name="email" placeholder="Project Location" className='input-con'/>
               <img src={icon2} alt='icon' className='s-icon1'/>
              </div>

              <div className="input-with-icon inp-bg">
               <img src={icon3} alt='icon' className='s-icon1'/>
               <input type="text" name="email" placeholder="Type of Specialist" className='input-con'/>
               <img src={icon4} alt='icon' className='s-icon1'/>
              </div>

              <button type="submit" className='serch-btn'><FaSistrix />Search</button>
              </div>
              </form>
              </div>
        </div>
    </section>
    </>
  )
}

export default Demand