import React from 'react'
import image1 from "../img/gb1.png"
import image2 from "../img/gb2.png"
import image3 from "../img/gb3.png"
import { FaSistrix } from "react-icons/fa";
import cons1 from "../icon/dicon.png"
import cons2 from "../icon/dicon1.png"
import cons3 from "../icon/dicon2.png"
import cons4 from "../icon/dicon3.png"
import icon1 from "../icon/pin.png";
import icon2 from "../icon/target.png";
import icon3 from "../icon/office-building.png";
import icon4 from "../icon/down-arrow.png";



const Hero = () => {
  return (
    <>
    <section>
    <div className='container-fluid'>
        <div className='row'>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src={image2} className="d-block w-100 banner" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={image1} className="d-block w-100 banner" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={image3} className="d-block w-100 banner" alt="..." />
    </div>
  </div>
</div>
</div>
           
    <div className="content">
      <div className='row'>
        <div className='col-lg-4'>
          <div className='box'>
          <p>Construction</p>
        <button className='btn-main1'>Get Estimate</button>
          </div>
       </div>
        <div className='col-lg-4'>
          <div className='box'>
          <p>Architecture</p>
        <button className='btn-main1'>Get Estimate</button>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='box'>
          <p>Interior Designer</p>
        <button className='btn-main1'>Get Estimate</button>
          </div>
        
        </div>
      </div>
    </div>

    </div>
</section>


{/* Demand */}
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
                   <img src={cons1} alt='' /><p>Construction</p>
                 </div>
              </div>
              <div className='col-lg-3 con-box1'>
                <div className='con-box'>
                <img src={cons2} alt='' /><p>Interior Designing</p>
                    </div>
              </div>
              <div className='col-lg-3 con-box1'>
                <div className='con-box'>
                <img src={cons3} alt='' /><p>Architecture</p>
              </div>
              </div>
              <div className='col-lg-3 con-box1'>
                <div className='con-box'>
                <img src={cons4} alt='' /><p>Buy/Sale/Rent</p>
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

export default Hero