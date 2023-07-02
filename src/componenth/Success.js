import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
import { Pagination, Navigation } from "swiper";

import city1 from "../img/MP.png";
import city2 from "../img/MH.webp";
import city3 from "../img/Karnataka.png";
import city4 from "../img/gujrat.webp";
import city5 from "../img/UP.webp"
import city6 from "../img/RJ.webp"
import city7 from "../img/cityicon.webp"
import city8 from "../img/Delhi.webp"
import city9 from "../img/punjab.webp"

const Success = () => {
  return (
    <>
    <section className='swip-sec'>
        <div className='container'>
           <div className='row'>
           <h1 className='text-center'>Know More About Our Success</h1>
           </div>
           <div className='row mt-4'>
           <Swiper
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={city1} alt='city' className='img-fluid swip'/><h5>230 Projects</h5><p className='com-p'>Complete In</p><p className='state-p'>Madhya Pradesh</p></SwiperSlide>
        <SwiperSlide><img src={city2} alt='city' className='img-fluid swip'/><h5>210 Projects</h5><p className='com-p'>Complete In</p><p className='state-p'>Maharastra</p></SwiperSlide>
        <SwiperSlide><img src={city3} alt='city' className='img-fluid swip'/><h5>150 Projects</h5><p className='com-p'>Complete In</p><p className='state-p'>Karnataka</p></SwiperSlide>
        <SwiperSlide><img src={city4} alt='city' className='img-fluid swip'/><h5>130 Projects</h5><p className='com-p'>Complete In</p><p className='state-p'>Gujrat</p></SwiperSlide>
        <SwiperSlide><img src={city5} alt='city' className='img-fluid swip'/><h5>270 Projects</h5><p className='com-p'>Complete In</p><p className='state-p'>Uttar Pradesh</p></SwiperSlide>
        <SwiperSlide><img src={city6} alt='city' className='img-fluid swip'/><h5>220 Projects</h5><p className='com-p'>Complete In</p><p className='state-p'>Rajsthan</p></SwiperSlide>
        <SwiperSlide><img src={city7} alt='city' className='img-fluid swip'/><h5>170 Projects</h5><p className='com-p'>Complete In</p><p className='state-p'>Jharkhand</p></SwiperSlide>
        <SwiperSlide><img src={city8} alt='city' className='img-fluid swip'/><h5>240 Projects</h5><p className='com-p'>Complete In</p><p className='state-p'>Delhi</p></SwiperSlide>
        <SwiperSlide><img src={city9} alt='city' className='img-fluid swip'/><h5>140 Projects</h5><p className='com-p'>Complete In</p><p className='state-p'>Punjab</p></SwiperSlide>
      </Swiper>
           </div>
        </div>
    </section>
 
    <section>
        <div className='container'>
             <div className='row'>
                 <div className='col-lg-6'>

                 </div>
                 <div className='col-lg-6'>

                 </div>
             </div>
        </div>
    </section>

    </>
  )
}

export default Success