import React from 'react'
import { FaFacebookF, FaLocationDot, FaLinkedinIn } from "react-icons/fa6";
import { BsYoutube, BsFillTelephoneFill, BsEnvelopeOpen } from "react-icons/bs";

const FooterInformation = ({ information }) => {
    console.log(information.heading);
  return (
      <div className="information text-white">
          <div className="information__title"><h4 className="information__heading">{information.heading}</h4></div>
          <div className="div2">
         <div className="div2__inner"></div>
      </div>
          {information.location.map((item) => {
              return (
                   <div className="information__item">
                  {item.icon}
                      <p className="paragraph text-white">{ item.text}</p>
          </div>
              )
          })}
         
   </div>
  )
}

export default FooterInformation