import React from 'react'
import { FaPhone } from "react-icons/fa6";
import FeatureImage from '../assets/images/feature.jpg'
import SectionTitle from './SectionTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Feature = () => {

    AOS.init({
    duration: 3000,
    once: true,
    })
    
  return (
      <div className="container feature">
          <SectionTitle heading={'WHY CHOOSE US'} subHeading={'Custom IT Solutions for Your Successful Business'}/>
          <div className="feature__options">
              <div className="feature__option--2" >
                  <div className="feature__option--1 u-margin-top-small" data-aos="zoom-in"
                  data-aos-duration="1000">
                      <div className=" bg-primary counter__elements--icon text-white u-margin-bottom-small"><FaPhone /> </div>
                      <h5 className="about__call--question u-margin-bottom-small">Call to ask any question</h5>
                      <p className="paragraph">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                  </div>
                  <div className="feature__option--1 u-margin-top-small" data-aos="zoom-in"
                      data-aos-duration="1000"
                  >
                      <div className=" bg-primary counter__elements--icon text-white u-margin-bottom-small"><FaPhone /> </div>
                      <h5 className="about__call--question u-margin-bottom-small">Call to ask any question</h5>
                      <p className="paragraph">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                  </div>
              </div>

              <div className="feature__option--2 u-margin-top-small" data-aos="zoom-in"
              data-aos-duration="2000">
                 <img src={FeatureImage} alt="" className="feature__option--img" />
              </div>


              <div className="feature__option--2" >
                  <div className="feature__option--1 u-margin-top-small" data-aos="zoom-in"
                  data-aos-duration="1000">
                      <div className=" bg-primary counter__elements--icon text-white u-margin-bottom-small"><FaPhone /> </div>
                      <h5 className="about__call--question .u-margin-bottom-small">Call to ask any question</h5>
                      <p className="paragraph">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                  </div>
                  <div className="feature__option--1 u-margin-top-small" data-aos="zoom-in"
                  data-aos-duration="1000">
                      <div className=" bg-primary counter__elements--icon text-white u-margin-bottom-small"><FaPhone /> </div>
                      <h5 className="about__call--question .u-margin-bottom-small">Call to ask any question</h5>
                      <p className="paragraph">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Feature