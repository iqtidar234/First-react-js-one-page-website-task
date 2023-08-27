import React, { useState } from 'react';
import { FaFacebookF, FaLocationDot ,FaLinkedinIn} from "react-icons/fa6";
import {TfiTwitterAlt } from "react-icons/tfi";
import {FiInstagram} from "react-icons/fi";
import {BsYoutube,BsFillTelephoneFill,BsEnvelopeOpen} from "react-icons/bs";
const SubNavbar = () => {
  const [show, setShow] = useState(false)
  
  const setSubNavbar = () => {
    if (window.scrollY >= 5) {
      setShow(true)
    }
    else {
      setShow(false)
    }
  }
  window.addEventListener('scroll',setSubNavbar)

  return (
      <div className={`sub-navbar ${show?'hide':null}`}>
          <div className="sub-navbar__information">
              <p className="sub-navbar__information__text"><span><FaLocationDot /></span>123 Street, New York, USA</p> 
              <p className="sub-navbar__information__text"><span><BsFillTelephoneFill /></span>+012 345 6789</p> 
              <p className="sub-navbar__information__text"><span><BsEnvelopeOpen/></span>info@example.com</p> 
          </div>
          <div className="sub-navbar__icons">
              <p className="sub-navbar__icons__icon"><TfiTwitterAlt /></p>
              <p className="sub-navbar__icons__icon"><FaFacebookF /></p>
              <p className="sub-navbar__icons__icon"><FaLinkedinIn /></p>
              <p className="sub-navbar__icons__icon"><FiInstagram /></p>
              <p className="sub-navbar__icons__icon"><BsYoutube/></p>
          </div>
    </div>
  )
}

export default SubNavbar;