import React from 'react'
import { useState } from 'react';

const Emical = () => {
    const [principal, setPrincipal] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [tenure, setTenure] = useState('');
    const [emi, setEmi] = useState('');

    const calculateEmi = () => {
        const p = parseFloat(principal);
        const r = parseFloat(interestRate) / 100 / 12;
        const n = parseFloat(tenure) * 12;
    
        const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        setEmi(emiValue.toFixed(2));
      };
      

  return (
    <>
       <div className='cale'>
      <h5>EMI Calculator</h5>
      <div>
        <label>Loan Amount:</label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        className='inp-emi'/>
      </div>
      <div>
        <label>Interest Rate (%):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className='inp-emi'/>
      </div>
      <div>
        <label>Tenure (in years):</label>
        <input
          type="number"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          className='inp-emi'/>
      </div>
      <button onClick={calculateEmi} className='calc-btn'>Calculate EMI</button>
      {emi && <div>Your EMI: {emi}</div>}
    </div>
    </>
  )
}

export default Emical