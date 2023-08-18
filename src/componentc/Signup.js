import React from 'react'
import "./construction.css"
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
    <section className='sign-bg'>
        <div className='container'>
            <div className='sign-f'>
      <form className='form-sg'>
      <h3 className='sign-h'>Register</h3>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          className='sign-input'
          required
        />
        <br /><br />

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
        <button type="submit" className='sign-b'>Sign Up</button><br ></br>
        <Link to="/login" className='sign-p'>Login</Link>
      </form>
    </div>
  </div>
  </section>
    </>
  )
}

export default Signup