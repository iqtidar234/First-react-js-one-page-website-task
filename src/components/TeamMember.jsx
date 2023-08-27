import React from 'react'
import {socialIcons} from '../constant/Constant'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamMember = ({ item ,duration}) => {
    
    AOS.init({
    once: true,
    })
    
  return (
      <div className="team-member bg-light" data-aos="fade-up" data-aos-duration={`${duration}000`}>
          <div className="team-member__img-box">
              <img src={item.image} alt="" className="team-member__image" />
              <div className="team-member__overlay"></div>
              <div className="team-member__social">
                  {socialIcons.map((icon) => {
                      return (
                          <Link className='btn team-member__social--icon'>{ icon}</Link>
                      )
                  })}
              </div>
              </div>
          <div className="team-member__text">
          <h4 className="team-member__tags tags">{item.name}</h4>
              <p className="paragraph">{item.job}</p>
              </div>
    </div>
  )
}

export default TeamMember