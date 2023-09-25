import React from 'react'
import Navbar from '../components/Navbar'

const Profile = () => {
  return (
    <>
    <Navbar />
    <section>
        <div className='container-fluid'>
         <div className='row'>
         <div className='profile'>
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
    </section>
   </>
  )
}

export default Profile