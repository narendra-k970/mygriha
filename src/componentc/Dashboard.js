import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './construction.css';
import Enquiries from "./Enquiries"
import Orders from "./Orders"
import Wishlist from "./Wishlist"
import Address from "./Address"

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('enquiries'); 
  

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };


  return (
    <div className="app">
     <Header collapsed={collapsed} onToggle={toggleSidebar} />
     <div className='main-container'>
      <Sidebar collapsed={collapsed} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content">
        {activeTab === 'enquiries' && <Enquiries />}
        {activeTab === 'orders' && <Orders />}
        {activeTab === 'wishlist' && <Wishlist />}
        {activeTab === 'address' && <Address />}
      </div>
      </div>
    </div>
  );
};

export default App;