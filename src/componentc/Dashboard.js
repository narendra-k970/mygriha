import React from 'react'
import Sidebar from './Sidebar'
import Icon from "../icon/notification.png"
import profile from "../icon/house.png"


const Dashboard = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <div className='dash-top'>
            <div className='row'>
                <div className='col-lg-6'>
                <h5 className='dash-h'>Profile Details</h5>
                </div>
                <div className='col-lg-6 pro-box'>
                 <img src={Icon} alt='notification' className='noti-icon'/>
                 <img src={profile} alt='profile' className='pro-pic'/>
                </div>
            </div>
            </div>
            <div>
              <form className='update-form'>
              <div class="input-row">
              <div class="input-container">
              <label for="input1">Profile Pic</label>
              <input type="file" id="fileInput" name="fileInput" />
              </div>
              <div class="input-container">
              <label for="input2">First Name</label>
              <input type="text" id="input2" />
              </div>
              </div>
              <div class="input-row">
              <div class="input-container">
              <label for="input1">Last Name</label>
              <input type="text" id="input1" />
              </div>
              <div class="input-container">
              <label for="input2">UserName</label>
              <input type="text" id="input2" />
              </div>
              </div>
              <div class="input-row">
              <div class="input-container">
              <label for="input1">Email</label>
              <input type="email" id="input1" />
              </div>
              <div class="input-container">
              <label for="input2">Phone/Mobile No.</label>
              <input type="nuumber" id="input2" />
              </div>
              </div>
              <div class="input-row">
              <div class="input-container">
              <label for="input1">Password</label>
              <input type="email" id="input1" />
              </div>
              <div class="input-container">
              <label for="input2">Country</label>
              <input type="nuumber" id="input2" />
              </div>
              </div>
              <button className='edit-btn'>Edit</button>
              </form>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard