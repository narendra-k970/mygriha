import React from 'react'
import image1 from "../img/gb1.png"
import image2 from "../img/gb2.png"
import image3 from "../img/gb3.png"



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
    </>
  )
}

export default Hero