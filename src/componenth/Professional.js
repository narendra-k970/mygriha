import React from 'react'
import { FaSistrix } from "react-icons/fa";
import icon1 from "../icon/pin (5).png";
import icon2 from "../icon/target (1).png";


const Professional = () => {
  return (
    <>
    <section className='pro-sec'>
        <div className='container'>
           <div className='row text-center'>
           <h1>Find Professionals</h1>
           <p className='pro-p'>Get designing done by our Professionals<br/>Try a service now</p>
           </div>
           <div className='row con-row2'>
             <form>
         <div className="form-row text-center">
            <div className="input-with-icon">
                I am looking for
            </div>
           <div className="input-with-icon">
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
    </>
  )
}

export default Professional