import React from 'react'
import { NavLink } from 'react-router-dom'

const Address = () => {
  return (
    <>
    <div className=''>
         <div className='row add-header'>
              <div className='col-lg-6'>
                   <h4 className='mt-3'>Add New Address</h4>
              </div>
              <div className='col-lg-6 pro-box'>
               <button className='add-btn'>Add Address</button>
              </div>
         </div>

  <div className='row mt-2'>
    <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip Code</th>
          <th>Near by</th>
          <th>Country</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className='table-b'>
          <td data-label="ID">123-A,Gangtok,India</td>
          <td data-label="Product Name">Gangtok</td>
          <td data-label="Order ID">Asssam</td>
          <td data-label="Enquiry Type">200001</td>
          <td data-label="Amount">S P College</td>
          <td data-label="Payment Mode">India</td>
          <td data-label="View Details"><NavLink href="#">View</NavLink></td>
        </tr>
        <tr className='table-b'>
          <td data-label="ID">123-A,Gangtok,India</td>
          <td data-label="Product Name">Gangtok</td>
          <td data-label="Order ID">Asssam</td>
          <td data-label="Enquiry Type">200001</td>
          <td data-label="Amount">S P College</td>
          <td data-label="Payment Mode">India</td>
          <td data-label="View Details"><NavLink href="#">View</NavLink></td>
        </tr>
      </tbody>
    </table>
  </div>
    </div>
    </div>
    </>
  )
}

export default Address