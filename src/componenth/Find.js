import React from 'react'
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

const Find = () => {
  return (
    <>
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

export default Find