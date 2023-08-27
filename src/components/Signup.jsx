import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser  } from "react-icons/fa6";
const Signup = () => {
  return (
      <div className='signup bg-primary text-center'>
          <Link className='signup__logo'><h1><FaUser className='signup__logo--icon' /> Startup </h1></Link>
          <p className="paragraph text-white signup__text">Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.</p>
          <div className="signup__input-group">
              <input type="text" className="signup__input" placeholder='Your Email' />
              <button className="btn bg-dark signup__btn">Sign Up</button>
          </div>
      </div>
  )
}

export default Signup