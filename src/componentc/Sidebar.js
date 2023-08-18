import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import "./construction.css"


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
      
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
         
  return (
     <>
         <div className="container">
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        <ul className='side-menu'>
          <li className='side-list'>Profile</li>
          <li className='side-list'>Logout</li>
        </ul>
      </div>
      <div className={`content ${isOpen ? '' : 'expanded'}`}>
      <h1>Welcome to your dashboard!</h1>
      </div>
    </div>
     </>
  );
};

export default Sidebar;