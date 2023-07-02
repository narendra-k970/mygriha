import React from 'react'
import image1 from "../img/2d-plan.webp";
import image2 from "../img/3d-house.webp";
import image3 from "../img/Presentation_plan.webp";
import image4 from "../img/Structural-plan.webp";
import image5 from "../img/calculation.webp";
import image6 from "../img/premium-quality.webp";

const Quick = () => {
  return (
    <>
    <section className='qui-sec'>
        <div className='container'>
          <div className='row'>
          <h2 className='text-center mb-3'>Quick Checkout</h2>
          </div>
          <div className='row text-center'>
             <div className='col-lg-2'>
                <div className='qui-col'>
                <img src={image1} alt='2dimage' className='img-fluid des-img'/>
                 <p>Concept 2D <br/>Plan</p>
                </div>
             </div>
             <div className='col-lg-2'>
                <div className='qui-col'>
                <img src={image2} alt='2dimage' className='img-fluid des-img'/>
                 <p>Concept 3D <br/>Plan</p>
                </div>
             </div>
             <div className='col-lg-2'>
                <div className='qui-col'>
                <img src={image3} alt='2dimage' className='img-fluid des-img'/>
                 <p>Structural <br/>Drawing</p>
                </div>
             </div>
             <div className='col-lg-2'>
                <div className='qui-col'>
                <img src={image4} alt='2dimage' className='img-fluid des-img'/>
                 <p>Presentation <br/>Plan</p>
                </div>
             </div>
             <div className='col-lg-2'>
                <div className='qui-col'>
                <img src={image5} alt='2dimage' className='img-fluid des-img'/>
                 <p>House <br/>Design</p>
                </div>
             </div>
             <div className='col-lg-2'>
                <div className='qui-col'>
                <img src={image6} alt='2dimage' className='img-fluid des-img'/>
                 <p>Premium House Design</p>
                </div>
             </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Quick