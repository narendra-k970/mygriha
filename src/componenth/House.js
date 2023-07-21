import React from 'react'
import img1 from "../img/Maskgroup.png";
import img2 from "../img/Mask group (4).png";
import img3 from "../img/Mask group (5).png";
import img4 from "../img/Mask group (6).png";
import { Swiper, SwiperSlide, } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay,Pagination, Navigation } from "swiper";

import city1 from "../img/MP.png";
import city2 from "../img/MH.webp";
import city3 from "../img/Karnataka.png";
import city4 from "../img/gujrat.webp";
import city5 from "../img/UP.webp"
import city6 from "../img/RJ.webp"
import city7 from "../img/cityicon.webp"
import city8 from "../img/Delhi.webp"
import city9 from "../img/punjab.webp"


const House = () => {
  return (
    <>
    <section className='hou-sec'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7'>
            <h3 className='heading'>Most Affordable House Design</h3>
            </div>
            <div className='col-lg-5 hou-col'>
            <span><span className='serch'>Search By-</span>
                <button className='hou-btn'>Area</button><button className='hou-btn'>Interior</button><button className='hou-btn'>Professional</button>
            </span>
            </div>
          </div>
          <div className='row my-4 h-row'>
            <div className='col-lg-3'>
              <img src={img1} alt='img'className='img-fluid h-img'/>
              <h5 className='hou-h'>1 BHK House Design</h5>
            </div>
            <div className='col-lg-3'>
            <img src={img2} alt='img'className='img-fluid h-img'/>
              <h5 className='hou-h'>2 BHK House Design</h5>
            </div>
            <div className='col-lg-3'>
            <img src={img3} alt='img'className='img-fluid h-img'/>
              <h5 className='hou-h'>3 BHK House Design</h5>
            </div>
            <div className='col-lg-3'>
            <img src={img4} alt='img'className='img-fluid h-img'/>
              <h5 className='hou-h'>4 BHK House Design</h5>
            </div>
          </div>
        </div>
    </section>

{/* Success city */}

<section className='swip-sec'>
        <div className='container'>
           <div className='row'>
           <h1 className='text-center heading'>Know More About Our Success</h1>
           </div>
           <div className='row mt-4'>
           <Swiper
           breakpoints={{
            576: {
              width: 576,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
          }}
        // slidesPerView={6}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={city1} alt='city' className='img-fluid swip'/><h5>230 Projects</h5><p className='com-p'>Complete In</p><p className='state-p'>(Madhya Pradesh)</p></SwiperSlide>
        <SwiperSlide><img src={city2} alt='city' className='img-fluid swip'/><h5>210 Projects</h5><p className='com-p'>Complete In</p><p className='state-p'>(Maharastra)</p></SwiperSlide>
        <SwiperSlide><img src={city3} alt='city' className='img-fluid swip'/><h5>150 Projects</h5><p className='com-p'>Complete In</p><p className='state-p'>(Karnataka)</p></SwiperSlide>
        <SwiperSlide><img src={city4} alt='city' className='img-fluid swip'/><h5>130 Projects</h5><p className='com-p'>Complete In</p><p className='state-p'>(Gujrat)</p></SwiperSlide>
        <SwiperSlide><img src={city5} alt='city' className='img-fluid swip'/><h5>270 Projects</h5><p className='com-p'>Complete In</p><p className='state-p'>(Uttar Pradesh)</p></SwiperSlide>
        <SwiperSlide><img src={city6} alt='city' className='img-fluid swip'/><h5>220 Projects</h5><p className='com-p'>Complete In</p><p className='state-p'>(Rajsthan)</p></SwiperSlide>
        <SwiperSlide><img src={city7} alt='city' className='img-fluid swip'/><h5>170 Projects</h5><p className='com-p'>Complete In</p><p className='state-p'>(Jharkhand)</p></SwiperSlide>
        <SwiperSlide><img src={city8} alt='city' className='img-fluid swip'/><h5>240 Projects</h5><p className='com-p'>Complete In</p><p className='state-p'>(Delhi)</p></SwiperSlide>
        <SwiperSlide><img src={city9} alt='city' className='img-fluid swip'/><h5>140 Projects</h5><p className='com-p'>Complete In</p><p className='state-p'>(Punjab)</p></SwiperSlide>
      </Swiper>
           </div>
        </div>
    </section>
    
    </>
  )
}

export default House