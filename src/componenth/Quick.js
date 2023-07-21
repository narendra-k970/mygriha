import React from 'react'
import image1 from "../icon/home-1.png";
import image2 from "../icon/house.png";
import image3 from "../icon/drawing-compass.png";
import image4 from "../icon/presentation-2.png";
import image5 from "../icon/estimate-1.png";
import image6 from "../icon/house-1.png";
import { FaSistrix } from "react-icons/fa";
import icon1 from "../icon/loc-icon.png";
import icon2 from "../icon/drop-icon.png";
import icon3 from "../icon/des-icon.png";
import CountUp from 'react-countup';
import serv1 from "../img/const1.png";
import serv2 from "../img/const2.png";
import serv3 from "../img/const3.png";
import serv4 from "../img/const4.png";
import serv5 from "../img/const5.png";
import svg1 from "../icon/Frame.png";
import svg2 from "../icon/Group (7).png";
import svg3 from "../icon/Group (8).png";
import svg4 from "../icon/Group (9).png";
import client from "../icon/client.png";
import expert from "../icon/expert.png";
import project from "../icon/floor.png";
import plan from "../icon/plan.png";

const Quick = () => {
  return (
    <>
    <section className='qui-sec px-3'>
        <div className='container-fluid'>
          <div className='row'>
          <h2 className='text-center mb-4 heading'>Quick Checkout</h2>
          </div>
          <div className='row text-center'>
             <div className='col-lg-2 qui-box'>
                <div className='qui-col'>
                <img src={image1} alt='2dimage' className='img-fluid des-img'/>
                 <p className='quick-p'>Concept 2D Plan</p>
                </div>
             </div>
             <div className='col-lg-2 qui-box'>
                <div className='qui-col'>
                <img src={image2} alt='2dimage' className='img-fluid des-img'/>
                 <p className='quick-p'>Concept 3D Plan</p>
                </div>
             </div>
             <div className='col-lg-2 qui-box'>
                <div className='qui-col'>
                <img src={image3} alt='2dimage' className='img-fluid des-img'/>
                 <p className='quick-p'>Structural Drawing</p>
                </div>
             </div>
             <div className='col-lg-2 qui-box'>
                <div className='qui-col'>
                <img src={image4} alt='2dimage' className='img-fluid des-img'/>
                 <p className='quick-p'>Presentation Plan</p>
                </div>
             </div>
             <div className='col-lg-2 qui-box'>
                <div className='qui-col'>
                <img src={image5} alt='2dimage' className='img-fluid des-img'/>
                 <p className='quick-p'>House <br/>Design</p>
                </div>
             </div>
             <div className='col-lg-2 qui-box'>
                <div className='qui-col'>
                <img src={image6} alt='2dimage' className='img-fluid des-img'/>
                 <p className='quick-p'>Premium Design</p>
                </div>
             </div>
          </div>
        </div>
    </section>

{/* Professional */}

<section className='pro-sec'>
        <div className='container'>
           <div className='row text-center'>
           <h1 className='heading'>Find Professionals</h1>
           <p className='pro-p'>Get designing done by our Professionals<br/>Try a service now</p>
           </div>
           <div className='row con-row2'>
             <form>
         <div className="form-row text-center">
            <div className="input-with-icon">
                I am looking for
            </div>
           <div className="input-with-icon inp-bg">
           <img src={icon3} alt='icon' className='s-icon1'/>
          <input type="text" name="email" placeholder="Designer" className='input-con'/>
          </div>

          <div className="input-with-icon">
           In
          </div>
          <div className="input-with-icon inp-bg">
          <img src={icon1} alt='icon' className='s-icon1'/>
          <input type="text" name="email" placeholder="Project Location" className='input-con'/>
          <img src={icon2} alt='icon' className='s-icon1'/>
           </div>
           <button type="submit" className='serch-btn'><FaSistrix />Search</button>
           </div>
            </form>
            </div>
        </div>
    </section>
   
{/* Why  */}
<section className='hap-sec'>
        <div className='container'>
        <div className='row'>
          <h2 className='text-center pb-3 heading'>Why MyGriha</h2>
          </div>
          <div className='row text-center hap-row'>
             <div className='col-lg-3 qui-box'>
                <div className='qui-col1'>
                <img src={svg1} alt='2dimage' className='des-img1'/>
                <h4 className='mt-4'>Project Done on time</h4>
                <button className='re-btn'>Read More</button>
                </div>
             </div>
             <div className='col-lg-3 qui-box'>
                <div className='qui-col1'>
                <img src={svg2} alt='2dimage' className='des-img1'/>
                <h4 className='mt-4'>Best Price</h4>
                <button className='re-btn'>Read More</button>
                </div>
             </div>
             <div className='col-lg-3 qui-box'>
                <div className='qui-col1'>
                <img src={svg3} alt='2dimage' className='des-img1'/>
                <h4 className='mt-4'>Superior Design</h4>
                <button className='re-btn'>Read More</button>
                </div>
             </div>
             <div className='col-lg-3 qui-box'>
                <div className='qui-col1'>
                <img src={svg4} alt='2dimage' className='des-img1'/>
                <h4 className='mt-4'>Experenced Team</h4>
                <button className='re-btn'>Read More</button>
                </div>
             </div>
          </div>
        </div>
    </section>


{/* Book  */}

<section className='book-sec'>
     <div className='conatiner'>
          <div className='row text-center'>
          <h1 className='heading'>Book Services</h1>
          <h6>With our team of 100000+ designers.our highly creative services are there for you.<br/>all of the design none of these</h6>
          </div>
          <div className='row ser-row'>
              <div className='col-lg-4'>
              <div className="card card1">
              <img src={serv1} class="card-img-top" alt="..." />
              <div className="card-body">
                <div className='ct'>
                <h5 className="card-title">Construction</h5>
                <p>Start at Rs-1000/</p>
                </div>
                <div className='bok'>
                    <button className='b-btn'>Book Now</button>
                </div>
                </div>
              </div>
              </div>
              <div className='col-lg-4'>
              <div className="card card1">
              <img src={serv2} class="card-img-top" alt="..." />
              <div className="card-body">
                <div className='ct'>
                <h5 className="card-title">Interior-Design</h5>
                <p>Start at Rs-2000/</p>
                </div>
                <div className='bok'>
                    <button className='b-btn'>Book Now</button>
                </div>
                </div>
              </div>
              </div>
              <div className='col-lg-4'>
              <div className="card card1">
              <img src={serv3} class="card-img-top" alt="..." />
              <div className="card-body">
                <div className='ct'>
                <h5 className="card-title">Architecture</h5>
                <p>Start at Rs-3000/</p>
                </div>
                <div className='bok'>
                    <button className='b-btn'>Book Now</button>
                </div>
                </div>
              </div>
              </div>
          </div>
          <div className='row ser-row1'>
          <div className='col-lg-4'>
              <div className="card card1">
              <img src={serv4} class="card-img-top" alt="..." />
              <div className="card-body">
                <div className='ct'>
                <h5 className="card-title">Vastu Area</h5>
                <p>Start at Rs-4000/</p>
                </div>
                <div className='bok'>
                    <button className='b-btn'>Book Now</button>
                </div>
                </div>
              </div>
              </div>
              <div className='col-lg-4'>
              <div className="card card1">
              <img src={serv5} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className='ct'>
                <h5 className="card-title">On call advisory</h5>
                <p>Start at Rs-5000/</p>
                </div>
                <div className='bok'>
                    <button className='b-btn'>Book Now</button>
                </div>
                </div>
              </div>
              </div>
          </div>
     </div>
    </section>

    {/* Client */}
    <section className='hap-sec'>
        <div className='container'>
          <div className='row hap-row1'>
            <div className='col-lg-3 cl-box'>
            <img src={client} alt='client' /><br/>
            <span className='count'><CountUp end={100} />+</span>
            <h6 className='cl-color'>Happy Clients</h6>
            </div>
            <div className='col-lg-3 cl-box'>
            <img src={expert} alt='client' /><br/>
            <span className='count'><CountUp end={100} />+</span>
            <h6 className='cl-color'>Design Experts</h6>
            </div>
            <div className='col-lg-3 cl-box'>
            <img src={project} alt='client' /><br/>
            <span className='count'><CountUp end={100} />+</span>
            <h6 className='cl-color'>Projects</h6>
            </div>
            <div className='col-lg-3 cl-box'>
            <img src={plan} alt='client' /><br/>
            <span className='count'><CountUp end={24} />Hr</span>
            <h6 className='cl-color'>Get floor Plan</h6>
            </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Quick