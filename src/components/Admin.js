import React from 'react'
import { useState } from 'react';
import Header from '../componentc/Header';
import Admside from './Admside';
import Estimate from '../componentc/Estimate';

const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeTab, setActiveTab] = useState('estimate'); 
    

    const toggleSidebar = () => {
      setCollapsed(!collapsed);
    };

  return (
    <>
        <div className="app">
     <Header collapsed={collapsed} onToggle={toggleSidebar} />
     <div className='main-container'>
      <Admside collapsed={collapsed} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content">
        {activeTab === 'estimate' && <Estimate />}
      </div>
      </div>
    </div>
    </>
  )
}


export default Admin