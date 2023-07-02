import React from 'react'
import serv1 from "../img/livingroom.webp";
import serv2 from "../img/bedroom.webp";
import serv3 from "../img/kitchen.webp";
import serv4 from "../img/pujaroom.webp";
import serv5 from "../img/study.webp";
import svg1 from "../icon/whymmhicons-02.svg";
import svg2 from "../icon/whymmhicons-03.svg";
import svg3 from "../icon/whymmhicons-04.svg";
import svg4 from "../icon/whymmhicons-05.svg";
import mmh from "../icon/experince_mmh.png"


const Book = () => {
  return (
    <>
    <section>
     <div className='conatiner'>
          <div className='row text-center'>
          <h1>Book Services</h1>
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
              <img src={serv5} class="card-img-top" alt="..." />
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


    <section className='hap-sec'>
        <div className='container'>
        <div className='row'>
          <h2 className='text-center mb-4'>Why MyGriha</h2>
          </div>
          <div className='row text-center hap-row'>
             <div className='col-lg-3'>
                <div className='qui-col1'>
                <img src={svg1} alt='2dimage' className='img-fluid des-img1'/>
                </div>
             </div>
             <div className='col-lg-3'>
                <div className='qui-col1'>
                <img src={svg2} alt='2dimage' className='img-fluid des-img1'/>
                </div>
             </div>
             <div className='col-lg-3'>
                <div className='qui-col1'>
                <img src={svg3} alt='2dimage' className='img-fluid des-img1'/>
                </div>
             </div>
             <div className='col-lg-3'>
                <div className='qui-col1'>
                <img src={svg4} alt='2dimage' className='img-fluid des-img1'/>
                </div>
             </div>
          </div>
        </div>
    </section>

    <section className='hap-sec'>
        <div className='container'>
          <div className='row hap-row1'>
            <div className='col-lg-1'>

            </div>
             <div className='col-lg-2'>
                <div>
                <img src={mmh} alt='2dimage' className='img-fluid des-img2'/>
                </div>
             </div>
             <div className='col-lg-2'>
                <div className='hap-bor'>
                    <h4>On-time</h4>
                    <p>Project Delivery</p>
                </div>
             </div>
             <div className='col-lg-2'>
                <div className='hap-bor'>
                <h4>Best</h4>
                <p>Price</p>                
                </div>
             </div>
             <div className='col-lg-2'>
                <div className='hap-bor'>
                <h4>Superior</h4>
                <p>Design</p>
                </div>
             </div>
             <div className='col-lg-2'>
                <div className='hap-bor'>
                <h4>Experenced</h4>
                <p>Team</p>
                </div>
             </div>
             <div className='col-lg-1'>

            </div>
          </div>
        </div>
    </section>

    </>
  )
}

export default Book