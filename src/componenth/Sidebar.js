import React from 'react'
import icon1 from "../icon/Architecture.png";
import icon2 from "../icon/Construction.png";
import icon3 from "../icon/Interior-1.png"
import icon4 from "../icon/Calculator.png"
import icon5 from "../icon/Bid-Project.png"
import icon6 from "../icon/Post-your-project.png"
import icon7 from "../icon/Furniture.png"
import icon8 from "../icon/Vastu-Consultant....png"
import icon9 from "../icon/Design-Library.png"
import icon10 from "../icon/Architech.png"
import icon11 from "../icon/Blogs.png"
import icon12 from "../icon/Queries.png"
import icon13 from "../icon/Booking-red.png"
import icon14 from "../icon/Resoursing.png"
import icon15 from "../icon/Professnal.png"
import icon16 from "../icon/Deal.png"
import icon17 from "../icon/Outsourcing.png"
import icon18 from "../icon/About-us.png"
import icon19 from "../icon/Contact-Us.png"
import icon20 from "../icon/Design-Cour.png"
import icon21 from "../icon/Design-Lib.png"
import icon22 from "../icon/dicon3.png"
import "../index.css";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <>
    <section className='side'>
        <div className='container'>
            <div className='row'>
                <h6 className='mt-3'>MENU</h6>
            <nav className="nav flex-column">
            <NavLink className="nav-link" to="#"><img src={icon1} alt='' className='s-icon'/>
            <span className='title2'>Architecture</span></NavLink>
            <NavLink className="nav-link" to="#"><img src={icon2} alt='' className='s-icon'/>
            <span className='title2'>Construction</span></NavLink>
            <NavLink className="nav-link" to="#"><img src={icon3} alt='' className='s-icon'/>
            <span className='title2'>Interior</span></NavLink>
            <NavLink className="nav-link" to="#"><img src={icon22} alt='' className='s-icon'/>
            <span className='title2'>Buy/Sell/Rent</span></NavLink>
            <NavLink className="nav-link" to="#"><img src={icon4} alt='' className='s-icon'/>
            <span className='title2'>Calculator</span></NavLink>
            <NavLink className="nav-link" to="#"><img src={icon5} alt='' className='s-icon'/>
            <span className='title2'>Bid Project</span></NavLink>
            <NavLink className="nav-link" to="#"><img src={icon6} alt='' className='s-icon'/>
            <span className='title2'>Post your Project</span></NavLink>
            <NavLink className="nav-link" to="#"><img src={icon7} alt='' className='s-icon'/>
            <span className='title2'>Furniture & Decor</span></NavLink>
            <NavLink className="nav-link" to="#"><img src={icon8} alt='' className='s-icon'/>
            <span className='title2'>Vastu Consultant</span></NavLink>
            <NavLink className="nav-link" to="#"><img src={icon20} alt='' className='s-icon'/>
            <span className='title2'>Courses</span></NavLink>
            <NavLink className="nav-link" to="#"><img src={icon9} alt='' className='s-icon'/>
            <span className='title2'>Design Idea</span></NavLink>
            <NavLink className="nav-link" to="#"><img src={icon21} alt='' className='s-icon'/>
            <span className='title2'>Design Library</span></NavLink>
            <NavLink className="nav-link" to="#"><img src={icon10} alt='' className='s-icon'/>
            <span className='title2'>Forem/Architect</span></NavLink>
            <NavLink className="nav-link" to="#"><img src={icon11} alt='' className='s-icon'/>
            <span className='title2'>Blog</span></NavLink>
            <NavLink className="nav-link" to="#"><img src={icon12} alt='' className='s-icon'/>
            <span className='title2'>Queries/Help Me</span></NavLink>
            <NavLink className="nav-link" to="#"><img src={icon13} alt='' className='s-icon'/>
            <span className='title2'>Book Consultant</span></NavLink>
            <NavLink className="nav-link" to="#"><img src={icon14} alt='' className='s-icon'/>
            <span className='title2'>Resources</span></NavLink>
            <NavLink className="nav-link" to="#"><img src={icon15} alt='' className='s-icon'/>
            <span className='title2'>Professional</span></NavLink>
            <NavLink className="nav-link" to="#"><img src={icon16} alt='' className='s-icon'/>
            <span className='title2'>Become Partner</span></NavLink>
            <NavLink className="nav-link" to="#"><img src={icon17} alt='' className='s-icon'/>
            <span className='title2'>Outsourcing</span></NavLink>
            <NavLink className="nav-link" to="#"><img src={icon18} alt='' className='s-icon'/>
            <span className='title2'>About Us</span></NavLink>
            <NavLink className="nav-link" to="#"><img src={icon19} alt='' className='s-icon'/>
            <span className='title2'>Contact Us</span></NavLink>
            </nav>
            </div>
        </div>
    </section>
  
    </>
  )
}

export default Sidebar