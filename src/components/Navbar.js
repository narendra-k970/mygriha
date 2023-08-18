import React from 'react'
import logo from "../img/Group-1.png"
import { NavLink } from 'react-router-dom'
import "../index.css";
import { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


return (  
    <>
   <section className='nav-bg'>
    <div className='container-fluid'>
       <div className='row'>
       <nav className="navbar navbar-expand-lg">
   <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><img src={logo} alt='logo' className='logo-s'/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
    {/* <div className={`collapse ${isOpen ? 'show' : ''}`} style={{position: 'absolute',top: '100%', background:"#ffffff",marginTop:'20px', padding:"20px",width:"100%",zIndex: '2'}}> */}
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/architecture">Architecture</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/construction">Construction</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/interior">Interior</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/bidproject">Bid Project</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/rentproprties">Buy/Sell/Rent of Properties</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/shoponline">Shop Online</NavLink>
        </li>
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
        </li>
        <button className='btn-main'>+ Book GrahRahi</button>
      </ul>
    </div>
  </div>
</nav>
</div>
</div>
</section>
  

  {/* mobile view */}
  <section className='nav-bg1'>
    <div className='container-fluid'>
       <div className='row'>
       <nav className="navbar navbar-expand-lg">
   <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><img src={logo} alt='logo' className='logo-s'/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* <div className="collapse navbar-collapse" id="navbarNavDropdown"> */}
    <div className={`collapse ${isOpen ? 'show' : ''}`} style={{position: 'absolute',top: '100%', background:"#ffffff",marginTop:'20px', padding:"20px",width:"100%",zIndex: '2'}}>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/architecture">Architecture</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/construction">Construction</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/interior">Interior</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/bidproject">Bid Project</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/rentproprties">Buy/Sell/Rent of Properties</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/shoponline">Shop Online</NavLink>
        </li>
        <li className="nav-item me-4">
          <NavLink className="nav-link" to="/signin">Sign In</NavLink>
        </li>
        <button className='btn-main'>+ Book GrahRahi</button>
      </ul>
    </div>
  </div>
</nav>
</div>
</div>
</section>
  </>
  )
}

export default Navbar;