import React from 'react'
import "../index.css";
import { NavLink } from 'react-router-dom';

const Calculator = () => {
  return (
    <>
    <section>
      <div className='container'>
          <div className='row text-center'>
          <div className="dropdown">
  <button
    className="btn btn-danger dropdown-toggle cal-btn" type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false">
    Calculator
  </button>
  <ul className="dropdown-menu dd-menu" aria-labelledby="dropdownMenuButton">
    <li><NavLink className="dropdown-item dp-item" to="#">Building</NavLink></li><hr className='hr1'/>
    <li><NavLink className="dropdown-item dp-item" to="#">Construction</NavLink></li><hr className='hr1'/>
    <li><NavLink className="dropdown-item dp-item" to="#">EMI</NavLink></li><hr className='hr1'/>
    <li><NavLink className="dropdown-item dp-item" to="#">Interior</NavLink></li>
  </ul>
</div>
          </div>
      </div>
    </section>
    </>
  )
}

export default Calculator