import React from 'react'
import img1 from "../img/500sfqt.webp";
import img2 from "../img/750sqft.webp";
import img3 from "../img/950sqft.webp";
import img4 from "../img/1000sqft.webp";
import team1 from "../img/team-1.jpg";
import team2 from "../img/team-2.jpg";
import team3 from "../img/team-3.jpg";

const House = () => {
  return (
    <>
    <section className='hou-sec'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
            <h3>Most Affordable House Design</h3>
            </div>
            <div className='col-lg-6 hou-col'>
            <span>
                <button className='hou-btn'>Area</button><button className='hou-btn'>Interior</button><button className='hou-btn'>Professional</button>
            </span>
            </div>
          </div>
          <div className='row my-4'>
            <div className='col-lg-3'>
              <img src={img1} alt='img'className='img-fluid h-img'/>
              <h5 className='hou-h'>Area:Under 500sfqt</h5>
            </div>
            <div className='col-lg-3'>
            <img src={img2} alt='img'className='img-fluid h-img'/>
              <h5 className='hou-h'>Area:Under 750sfqt</h5>
            </div>
            <div className='col-lg-3'>
            <img src={img3} alt='img'className='img-fluid h-img'/>
              <h5 className='hou-h'>Area:Under 950sfqt</h5>
            </div>
            <div className='col-lg-3'>
            <img src={img4} alt='img'className='img-fluid h-img'/>
              <h5 className='hou-h'>Area:Under 1000sfqt</h5>
            </div>
          </div>
        </div>
    </section>


    <section className='team-sec'>
      <div className='container'>
          <div className='row'>
          <h1>Our Dedicated Team</h1>
          </div>
          <div className='row mt-4'>
             <div className='col-lg-3'>
             <div className="card team-c">
              <img src={team1} className="card-img-top team-img" alt="..." />
               <div className="card-body card-bd">
                <h5 className="card-title">Himnashu</h5>
                <p className="card-text">Architech</p>
               </div>
              </div>
             </div>
             <div className='col-lg-3'>
             <div className="card team-c">
              <img src={team2} className="card-img-top team-img" alt="..." />
               <div className="card-body card-bd">
                <h5 className="card-title">Garima</h5>
                <p className="card-text">Architech</p>
               </div>
              </div>
             </div>
             <div className='col-lg-3'>
             <div className="card team-c">
              <img src={team3} className="card-img-top team-img" alt="..." />
               <div className="card-body card-bd">
                <h5 className="card-title">Bhoomi</h5>
                <p className="card-text">Architech</p>
               </div>
              </div>
             </div>
             <div className='col-lg-3'>
             <div className="card team-c">
              <img src={team1} className="card-img-top team-img" alt="..." />
               <div className="card-body card-bd">
                <h5 className="card-title">Rohit</h5>
                <p className="card-text">Architech</p>
               </div>
              </div>
             </div>
          </div>
      </div>
    </section>
    </>
  )
}

export default House