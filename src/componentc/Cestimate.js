import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../componenth/Footer'
import img1 from '../img/Cement.png'
import img2 from '../img/Bricks.png'
import img3 from '../img/Steel Rods.png'
import img4 from '../img/Electrical.png'
import img5 from '../img/acc.jpg'
import img6 from '../img/ultratech premium.jpg'
import img7 from '../img/lafarge.jpeg'
import img8 from '../img/brick-A.jpg'
import img9 from '../img/rathi-steel-1.png'
import img10 from '../img/sale.jpeg'
import './construction.css'



const Cestimate = () => {
  return (
    <>
    <Navbar />
    <section className='est-top'>
    <div className='container'>
        <div className='row est-row'>
           <div className='col-lg-3'>
           <div class="dropdown">
      <label for="city">Select City:</label>
      <select id="city">
        <option value="city1">Noida</option>
        <option value="city2">Gurgaon</option>
        <option value="city3">Ghaziabad</option>
        <option value="city3">Meerut</option>
        <option value="city3">Etah</option>

      </select>
    </div>
           </div>
           <div className='col-lg-3'>
           <label for="slabArea">Slab Area of One Floor:</label>
      <select id="slabArea">
        <option value="area1">Area 1</option>
        <option value="area2">Area 2</option>
        <option value="area3">Area 3</option>
      </select>
           </div>
           <div className='col-lg-3'>
           <div class="dropdown">
      <label for="numFloors">No of Floors:</label>
      <select id="numFloors">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
           </div>
           <div className='col-lg-3'>
           <div class="dropdown">
      <label for="foundationType">Foundation Type:</label>
      <select id="foundationType">
        <option value="type1">Type 1</option>
        <option value="type2">Type 2</option>
        <option value="type3">Type 3</option>
      </select>
    </div>
    </div>
        </div>
    </div>
    </section>
    


    <section className='mate-top'>
       <div className='container'>
          <div className='row'>
              <div className='col-lg-9'>
                <div className='row'>
                   <div className='col-lg-2'>
                     <img src={img1} alt='abc' className='img-fluid mate-img'/>
                     <img src={img2} alt='abc' className='img-fluid mate-img'/>
                     <img src={img3} alt='abc' className='img-fluid mate-img'/>
                     <img src={img4} alt='abc' className='img-fluid mate-img'/>
                   </div>
                   <div className='col-lg-10'>
                      <div className='row'>
                        <div className='col-lg-4'>
                        <div className='mat-box'>
                            <img src={img5} alt='abc' className='img-fluid mater-img'/>
                            <h6>Acc</h6>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='mat-box'>
                            <img src={img6} alt='abc' className='img-fluid mater-img'/>
                            <h6>Ultratech</h6>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='mat-box'>
                            <img src={img7} alt='abc' className='img-fluid mater-img'/>
                            <h6>Lafarge Duragold</h6>
                            </div>
                        </div>
                      </div>

                      <div className='row mt-4'>
                        <div className='col-lg-4'>
                        <div className='mat-box'>
                            <img src={img8} alt='abc' className='img-fluid mater-img'/>
                            <h6>Bricks</h6>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='mat-box'>
                            <img src={img9} alt='abc' className='img-fluid mater-img'/>
                            <h6>Rathi Steel</h6>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='mat-box'>
                            <img src={img10} alt='abc' className='img-fluid mater-img'/>
                            <h6>Sail Steel</h6>
                            </div>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
              <div className='col-lg-3 est-side'>
                 <div className=''>
                    <h1>Material</h1>
                    <hr className='mat-hr'/>
                    {/* <img src={img11} alt='' className='img-fluid'/> */}
                    <div className='ms-3 mt-3'>
                      <h5>Bricks</h5>
                      <h5>Steel</h5>
                      <h5>Cement</h5>
                    </div>
                    <button className='getes-btn'>Get Estimate</button>
                 </div>
              </div>
          </div>
       </div>
    </section>
    <Footer />
    </>
  )
}

export default Cestimate