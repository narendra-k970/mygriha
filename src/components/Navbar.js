import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from 'react-icons/fa';
import "../index.css";


const Navbar = () => {
  return (
    <>
   <section className='nav-bg'>
    <div className='container-fluid'>
       <div className='row'>
       <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">< FaHome className='nav-icon'/></NavLink><b className='title'>Griha</b>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
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
        <button className='btn-main'>+ Book Designer</button>
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