import React from 'react'
import "./construction.css"
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <>
    <section className='login-bg'>
        <div className='container'>
            <div className='sign-f'>
      <form className='form-sg'>
      <h3 className='sign-h'>Login</h3>
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
          placeholder="Password"
          className='sign-input'
          required
        />
        <br /><br />
        <button type="submit" className='sign-b'>Login</button><br />
        <Link to="/ForgotPass" className='forg-p'>Forgot Password?</Link><br />
        <Link to="/signup" className='sign-p'>SignUp</Link>
      </form>
            </div>
        </div>
    </section>
    </>
  )
}

export default Login