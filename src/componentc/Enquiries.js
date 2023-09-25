import React from 'react'
import { NavLink } from 'react-router-dom'

const Enquiries = () => {
  return (
    <>
    <div className="tab-content">
    <div className='row mt-2'>
    <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Order ID</th>
          <th>Enquiry Type</th>
          <th>Amount</th>
          <th>Payment Mode</th>
          <th>Payment Status</th>
          <th>Comment</th>
          <th>Status</th>
          <th>Address</th>
          <th>View Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="ID">1</td>
          <td data-label="Product Name">Product A</td>
          <td data-label="Order ID">12345</td>
          <td data-label="Enquiry Type">General</td>
          <td data-label="Amount">$100</td>
          <td data-label="Payment Mode">Credit Card</td>
          <td data-label="Payment Status">Paid</td>
          <td data-label="Comment">Lorem ipsum</td>
          <td data-label="Status">Processed</td>
          <td data-label="Address">123 Main St</td>
          <td data-label="View Details"><NavLink href="#">View</NavLink></td>
        </tr>
        <tr>
          <td data-label="ID">2</td>
          <td data-label="Product Name">Product B</td>
          <td data-label="Order ID">12345</td>
          <td data-label="Enquiry Type">General</td>
          <td data-label="Amount">$100</td>
          <td data-label="Payment Mode">Credit Card</td>
          <td data-label="Payment Status">Paid</td>
          <td data-label="Comment">Lorem ipsum</td>
          <td data-label="Status">Processed</td>
          <td data-label="Address">123 Main St</td>
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

export default Enquiries