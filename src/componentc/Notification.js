import React from 'react'
import Icon from "../icon/notification.png"
import profile from "../icon/house.png"

const Notification = () => {
  return (
    <>
      <div className="tab-content">
    <div className='row dash-top px-3'>
              <div className='col-lg-6'>
                   <h4 className='mt-3'>MyGriha</h4>
              </div>
              <div className='col-lg-6 pro-box'>
              <img src={Icon} alt='notification' className='noti-icon'/>
               <img src={profile} alt='profile' className='pro-pic'/>
              </div>
         </div>
    <div className='row mt-2'>
    <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Message</th>
          <th>TimeStamp</th>
          <th>Action</th>
        </tr>
      </thead>
    </table>
  </div>
    </div>
    </div>
    </>
  )
}

export default Notification