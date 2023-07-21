import React from 'react'

const Sticky = () => {
    const handleClick = () => {
        // Handle button click functionality
      };
    
  return (
   <>
      <div className="container">
      {/* Your component's content */}
      
      {/* Sticky button */}
      <button className="sticky-button" onClick={handleClick}>
        Sticky Button
      </button>
    </div>

   </>  
)
}

export default Sticky