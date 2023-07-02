import React from 'react'
import img1 from "../icon/Group 1 (1).png"
import img2 from "../icon/Group 240.png"
import img3 from "../icon/Group (8).png"
import img4 from "../icon/Group (7).png"

const Talk = () => {
  return (
    <>
    <section className='talk-sec'>
        <div className='container'>
            <div className='row'>
                  <div className='col-lg-6'>
                    <div className='row'>
                       <div className='col-lg-2'>
                       <img src={img1} alt='img' className='form-icon'/>
                       </div>
                       <div className='col-lg-8'>
                       <div className='form-h text-center'>Get a Free Design Condultation for Your Home</div>
                       </div>
                       <div className='col-lg-2'>
                       <img src={img2} alt='img' className='form-icon'/>
                       </div>
                    </div>
                    <div className='row mt-5'>
                    <div className='col-lg-2'>
                    <img src={img3} alt='img' className='form-icon1'/>
                    </div>
                    <div className='col-lg-10 form-p'>
                    Visualise your dream home exterior in 3D sitting in the comfort of home.
                    </div>
                    </div>
                    <div className='row mt-5'>
                    <div className='col-lg-2'>
                    <img src={img4} alt='img' className='form-icon1'/>
                    </div>
                    <div className='col-lg-10 form-p'>
                    Receive customized quotes which take into account your distinct needs and requirements.
                    </div>
                    </div>
                  </div>
                  <div className='col-lg-6'>


                  </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Talk