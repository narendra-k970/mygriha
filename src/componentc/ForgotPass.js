import React from 'react'
import { Link } from 'react-router-dom'


const ForgotPass = () => {
  return (
    <>
    <section className='sign-forgot'>
        <div className='container'>
            <div className='sign-f'>
      <form className='form-sg'>
      <h3 className='sign-h'>Reset Password</h3>
         <input
          type="text"
          id="emailMobile"
          name="emailMobile"
          placeholder="Email/Mobile Number"
          className='sign-input'
          required
        />
        <br /><br />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="NewPassword"
          className='sign-input'
          required
        />
        <br /><br />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="ConfirmNewPassword"
          className='sign-input'
          required
        />
        <br /><br />

        <button type="submit" className='sign-b'>Reset Password</button><br ></br>
        <Link to="/login" className='sign-p'>Login</Link>
      </form>
            </div>
        </div>
    </section>
    </>
  )
}

export default ForgotPass