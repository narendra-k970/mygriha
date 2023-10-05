import React from 'react';
import './construction.css';

const Sidebar = ({ collapsed, activeTab, setActiveTab }) => {
    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };
    
  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <ul className="nav">
      {!collapsed && (
        <>
        <li
          className={activeTab === 'enquiries' ? 'active' : ''}
          onClick={() => handleTabClick('enquiries')}
        >
          Enquiries
        </li>
        <li
          className={activeTab === 'orders' ? 'active' : ''}
          onClick={() => handleTabClick('orders')}
        >
          Orders
        </li>
        <li
          className={activeTab === 'wishlist' ? 'active' : ''}
          onClick={() => handleTabClick('wishlist')}
        >
          Wishlist
        </li>
        <li
          className={activeTab === 'wishlist' ? 'active' : ''}
          onClick={() => handleTabClick('address')}
        >
          Address
        </li>
        </>
       )}
      </ul>
    </div>
  );
};

export default Sidebar;


