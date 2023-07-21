import React from 'react'
import logo from "../img/Group-1.png"
import { NavLink } from 'react-router-dom'
import { BsFillSquareFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import icon1 from "../icon/Group (4).png";
import icon2 from "../icon/Group (5).png";
import icon3 from "../icon/Group (6).png";
import img from "../icon/Group 208.png";



const Footer = () => {
  return (
    <>
    <section className='f-sec'>
        <div className='container'>
             <div className='row'>
                 <div className='col-lg-4'>
                  <img src={logo} alt='logo' className='img-fluid logo-fot'/>
                  <p className='mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <NavLink className="f-read">Read More <FaArrowRightLong /></NavLink>
                  <p className='f-head mt-3'><b>Sign Up For Special Offers</b></p>
                  <form>
                  <input type="email" id="emailInput" placeholder="Enter your email" required className='f-input'/>
                  <button type="submit" className='signup'>Sign up</button>
                  </form>

                 </div>
                 <div className='col-lg-2 f-abt'>
                 <h4 className='f-head'>About Us</h4>
                 <li className='f-list'><BsFillSquareFill className='f-icon'/><NavLink to="#" className="f-link">Team</NavLink></li>
                 <li className='f-list'><BsFillSquareFill className='f-icon'/><NavLink to="#" className="f-link">Blogs</NavLink></li>
                 <li className='f-list'><BsFillSquareFill className='f-icon'/><NavLink to="#" className="f-link">Prodcasts</NavLink></li>
                 <li className='f-list'><BsFillSquareFill className='f-icon'/><NavLink to="#" className="f-link">Career</NavLink></li>
                 </div>
                 <div className='col-lg-2'>
                 <h4 className='f-head'>Our Services</h4>
                 <li className='f-list'><BsFillSquareFill className='f-icon'/><NavLink to="#" className="f-link">House Planning</NavLink></li>
                 <li className='f-list'><BsFillSquareFill className='f-icon'/><NavLink to="#" className="f-link">Interior Design</NavLink></li>
                 <li className='f-list'><BsFillSquareFill className='f-icon'/><NavLink to="#" className="f-link">Exterior Design</NavLink></li>
                 <li className='f-list'><BsFillSquareFill className='f-icon'/><NavLink to="#" className="f-link">Landscape Plan</NavLink></li>
                 <li className='f-list'><BsFillSquareFill className='f-icon'/><NavLink to="#" className="f-link">On call advisory</NavLink></li><br/>
                 <NavLink className="f-read">Explore Service<FaArrowRightLong /></NavLink>
                 </div>
                 <div className='col-lg-2'>
                 <h4 className='f-head'>Professional</h4>
                 <li className='f-list'><BsFillSquareFill className='f-icon'/><NavLink to="#" className="f-link">Architect</NavLink></li>
                 <li className='f-list'><BsFillSquareFill className='f-icon'/><NavLink to="#" className="f-link">Interior Design</NavLink></li>
                 <li className='f-list'><BsFillSquareFill className='f-icon'/><NavLink to="#" className="f-link">Landscape Design</NavLink></li>
                 <li className='f-list'><BsFillSquareFill className='f-icon'/><NavLink to="#" className="f-link">Structural Design</NavLink></li>
                 <li className='f-list'><BsFillSquareFill className='f-icon'/><NavLink to="#" className="f-link">Architectural Photographers</NavLink></li><br/>
                 <NavLink className="f-read">Other Service <FaArrowRightLong /></NavLink>
                 </div>
                 <div className='col-lg-2'>
                 <h4 className='f-head'>Buy Drawing</h4>
                 <li className='f-list'><BsFillSquareFill className='f-icon'/><NavLink to="#" className="f-link">30x60 House Plans</NavLink></li>
                 <li className='f-list'><BsFillSquareFill className='f-icon'/><NavLink to="#" className="f-link">30x75 House Plans</NavLink></li>
                 <li className='f-list'><BsFillSquareFill className='f-icon'/><NavLink to="#" className="f-link">50x90 House Plans</NavLink></li>
                 <li className='f-list'><BsFillSquareFill className='f-icon'/><NavLink to="#" className="f-link">Complete House Drawinga</NavLink></li><br/>
                 <FaFacebookSquare className='f-sc'/><FaInstagram className='f-sc'/><FaLinkedinIn className='f-sc'/><FaTwitterSquare className='f-sc'/>
                 </div>
             </div>
             <hr className='f-hr'/>
             <div className='row ft-row g-2'>
                <div className='col-lg-1'>

                </div>
                <div className='col-lg-2'>
                <h4 className='f-head'>Contact Us </h4>
                </div>
                <div className='col-lg-2 fot-p'>
                <img src={icon1} alt='icon' />+91 987 654 3210
                </div>
                <div className='col-lg-2 fot-p'>
                <img src={icon2} alt='icon' />deaign@gmail.com
                </div>
                <div className='col-lg-5 fot-p'>
                <img src={icon3} alt='icon' />G-39, 3rd Floor, Office No.-301, sec-63 Noida, Up.
                </div>
                
              </div>
              <div className='row mt-3'>
                 <div className='col-lg-6'>
                  <p className='fot-p'>©copyright My Griha 2023 Design & Developed by DTPL.</p>
                 </div>
                 <div className='col-lg-3'>
                 </div>
                 <div className='col-lg-3 fo-img'>
                    <img src={img} alt='img'/>
                 </div>
              </div>
        </div>
    </section>
    </>
  )
}

export default Footer