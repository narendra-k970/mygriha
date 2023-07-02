import React from 'react';
import Hero from "../componenth/Hero";
import Navbar from "./Navbar";
import Sidebar from '../componenth/Sidebar';
import Calculator from '../componenth/Calculator';
import Demand from '../componenth/Demand';
import Modal from '../componenth/Modal';
import Quick from '../componenth/Quick';
import Professional from '../componenth/Professional';
import Book from "../componenth/Book";
import House from '../componenth/House';
import Success from '../componenth/Success';
import Talk from '../componenth/Talk';
import Footer from '../componenth/Footer';


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
            <Demand />
          </div>
          <div className='col-lg-2'>
            <Calculator />
          </div>
       </div>
       <div className='row'>
           <Quick />
           <Professional />
           <Book />
           <House />
           <Success />
           <Talk />
           <Footer />
       </div>
     </div>
    </section>
    
    </>
  )
}

export default Home