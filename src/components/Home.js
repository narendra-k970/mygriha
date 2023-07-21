import React from 'react';
import Hero from "../componenth/Hero";
import Navbar from "./Navbar";
import Sidebar from '../componenth/Sidebar';
import Calculator from '../componenth/Calculator';
import Modal from '../componenth/Modal';
import Quick from '../componenth/Quick';
import House from '../componenth/House';
import Talk from '../componenth/Talk';
import Footer from '../componenth/Footer';
// import Emical from '../componenth/Emical';


const Home = () => {
  return (
    <>
    <Navbar />
    <section>
     <div className='container-fluid'>
       <div className='row'>
          <div className='col-lg-2'>
            <Sidebar />
          </div>
          <div className='col-lg-8 hero-box'>
            <Modal/>
            <Hero/>
          </div>
          <div className='col-lg-2'>
            <Calculator /><br />
            {/* <Emical /> */}
          </div>
       </div>
       <div className='row'>
           <Quick />
           <House />
           <Talk />
           <Footer />
       </div>
     </div>
    </section>
    
    </>
  )
}

export default Home