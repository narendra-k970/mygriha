import React from 'react'
import img1 from "../icon/Group-1.png"
import img2 from "../icon/Group24.png"
import img3 from "../icon/formicon.png"
import img4 from "../icon/formicon1.png"
import india from "../img/india.png"
import Swiper from './Swiper'
import delhi from "../icon/r-delhi.png";
import up from "../icon/r-up.png";
import punjab from "../icon/r-pun.png";
import raj from "../icon/r-raj.png";
import karnatak from "../icon/r-kar.png";
import guj from "../icon/r-guj.png"
import jha from "../icon/r-jha.png";
import mha from "../icon/r-mah.png";
import goa from "../icon/r-goa.png";
import mum from "../icon/r-mum.png";
import ben from "../icon/r-ban.png";
import hyd from "../icon/r-hyd.png";


const Talk = () => {
  return (
    <>
    <section className='talk-sec'>
        <div className='container'>
            <div className='row'>
                  <div className='col-lg-7 f-left'>
                    <div className='row'>
                       <div className='col-lg-2 ta-img'>
                       <img src={img1} alt='img' className='form-icon'/>
                       </div>
                       <div className='col-lg-8 form-box2'>
                       <div className='form-h text-center'>Get a Free Design Condultation for Your Home</div>
                       </div>
                       <div className='col-lg-2 ta-img'>
                       <img src={img2} alt='img' className='form-icon'/>
                       </div>
                    </div>
                    <div className='row mt-5'>
                    <div className='col-lg-2 form-box'>
                    <img src={img3} alt='img' className='form-icon1'/>
                    </div>
                    <div className='col-lg-10 form-p'>
                    Visualise your dream home exterior in 3D sitting in the comfort of home.
                    </div>
                    </div>
                    <div className='row mt-5'>
                    <div className='col-lg-2 form-box'>
                    <img src={img4} alt='img' className='form-icon1'/>
                    </div>
                    <div className='col-lg-10 form-p'>
                    Receive customized quotes which take into account your distinct needs and requirements.
                    </div>
                    </div>
                  </div>
                  <div className='col-lg-1'>

                  </div>
                  
                  <div className='col-lg-4 form-bg'>
                  <div className="container">
                 
                 <form className='d-form'>
                 <h4>Talk to Our Designer</h4>
                 <hr />
                 <div className="form-group inp-bor mt-3">
                  <input type="text" id="name" name="name" required />
                  <label for="name" className='f-lable'>Name</label>
                </div>
                <div className="form-group inp-bor">
                <span className='flag'><img src={india} alt=''/></span>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className='row my-3'>
                     <div className='col-lg-9'>
                     <p className='fm-h'>You Can Reach me on WhatsApp</p>
                     <p className='fm-p'>Get Notification about upcoming design meeting and offers </p>
                     </div>
                     <div className='col-lg-3'>
                    <Swiper />
                     </div>
                </div>
                
                <div className="form-group inp-bor">
                  <input type="email" id="email" name="email" required />
                  <label for="email" className='f-lable'>Email</label>
                </div>
                <div className="form-group inp-bor">
                  <input type="text" id="text" name="text" required />
                  <label for="email" className='f-lable'>Requirements</label>
                </div>
                <div className="form-group">
                <button type="submit">Book Online Consultant</button>
                </div>
                <p className='fm-p'>By submitting this form, you agree to the Privacy <span className='poli-clr'>policy</span> & <span className='poli-clr'>terms and condition</span> </p>
                </form>
                </div>
                  </div>
            </div>
        </div>
    </section>

{/* find */}

<section className='find-sec'>
        <div className='container'>
             <div className='row'>
                 <div className='row'>
                    <h1 className='heading my-4 text-center'>Find Griha Designer in Your Pereferred City</h1>
                 </div>
                 <div className='row'>
                    <div className='col-lg-2 city-box'>
                      <div className='city'>
                      <img src={delhi} alt='delhi' className='city-img'/>
                      </div>
                      <p className='city-p'>Delhi</p>
                    </div>
                    <div className='col-lg-2 city-box'>
                      <div className='city'>
                      <img src={up} alt='delhi' className='city-img'/>
                      </div>
                      <p className='city-p'>Uttar Pradesh</p>
                    </div>
                    <div className='col-lg-2 city-box'>
                      <div className='city'>
                      <img src={punjab} alt='delhi' className='city-img'/>
                      </div>
                      <p className='city-p'>Punjab</p>
                    </div>
                    <div className='col-lg-2 city-box'>
                      <div className='city'>
                      <img src={raj} alt='delhi' className='city-img'/>
                      </div>
                      <p className='city-p'>Rajsthan</p>
                    </div>
                    <div className='col-lg-2 city-box'>
                      <div className='city'>
                      <img src={karnatak} alt='delhi' className='city-img'/>
                      </div>
                      <p className='city-p'>Karnataka</p>
                    </div>
                    <div className='col-lg-2 city-box'>
                      <div className='city'>
                      <img src={guj} alt='delhi' className='city-img'/>
                      </div>
                      <p className='city-p'>Gujrat</p>
                    </div>
                 </div>

                 <div className='row'>
                    <div className='col-lg-2 city-box'>
                      <div className='city'>
                      <img src={jha} alt='delhi' className='city-img'/>
                      </div>
                      <p className='city-p'>Jharkhand</p>
                    </div>
                    <div className='col-lg-2 city-box'>
                      <div className='city'>
                      <img src={mha} alt='delhi' className='city-img'/>
                      </div>
                      <p className='city-p'>Maharastra</p>
                    </div>
                    <div className='col-lg-2 city-box'>
                      <div className='city'>
                      <img src={goa} alt='delhi' className='city-img'/>
                      </div>
                      <p className='city-p'>Goa</p>
                    </div>
                    <div className='col-lg-2 city-box'>
                      <div className='city'>
                      <img src={mum} alt='delhi' className='city-img'/>
                      </div>
                      <p className='city-p'>Mumbai</p>
                    </div>
                    <div className='col-lg-2 city-box'>
                      <div className='city'>
                      <img src={ben} alt='delhi' className='city-img'/>
                      </div>
                      <p className='city-p'>Benglaru</p>
                    </div>
                    <div className='col-lg-2 city-box'>
                      <div className='city'>
                      <img src={hyd} alt='delhi' className='city-img'/>
                      </div>
                      <p className='city-p'>Hyderabad</p>
                    </div>
                 </div>
             </div>
        </div>
    </section>

    </>
  )
}

export default Talk