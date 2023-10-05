import React from 'react'


const Estimate = () => {
  return (
    <>
    <section>
    <div className='container'>
       <div className='row'>
        <div className="tab-content">
    <div className='row mt-2'>
    <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Sr. No</th>
          <th>Contact Details</th>
          <th>City</th>
          <th>Plot Area</th>
          <th>Slab Area</th>
          <th>No. of Floor</th>
          <th>Material</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="ID">1.</td>
          <td data-label="Product Name">9887654321,abc@gmail.com</td>
          <td data-label="Order ID">Noida</td>
          <td data-label="Enquiry Type">1000x1000</td>
          <td data-label="Amount">1200x1200</td>
          <td data-label="Payment Mode">3</td>
          <td data-label="Payment Mode">Cement-Acc,Steel-Rathi,Bricks</td>
        </tr>
        <tr>
          <td data-label="ID">2.</td>
          <td data-label="Product Name">8976543219,cde@gmail.com</td>
          <td data-label="Order ID">Patna</td>
          <td data-label="Enquiry Type">5000x5000</td>
          <td data-label="Amount">5100x5100</td>
          <td data-label="Payment Mode">5</td>
          <td data-label="Payment Mode">Cement-Acc,Steel-Rathi,Bricks</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>
</div>
</div>
</section>
    </>
  )
}

export default Estimate