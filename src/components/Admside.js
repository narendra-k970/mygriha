import React from 'react'
import "../componentc/construction.css"


const Admside = ({ collapsed, activeTab, setActiveTab }) => {

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };

  return (
    <>
      <div className={`admside ${collapsed ? 'collapsed' : ''}`}>
      <ul className="nav">
      {!collapsed && (
        <>
        <li
          className={activeTab === 'estimate' ? 'active' : ''}
          onClick={() => handleTabClick('estimate')}
        >
          Get Estimate
        </li>
        </>
       )}
      </ul>
    </div>
    </>
  )
}

export default Admside