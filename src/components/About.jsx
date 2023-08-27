import React from 'react'
import about from '../assets/images/about.jpg'
import { FaCheck,FaPhone} from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const aboutOptions=['Award Winning','Professional Staff','24/7 Support','Fair Prices']
const About = () => {
  AOS.init({
    duration: 1000,
    once:true,
  })
  
  return (
      <section className='container'>
          <div className="about"> 
         <div className="about__text"data-aos="fade-up" >
                  <div className="about__title">   
     <h5 className="about__title--tags text-primary">About us</h5>
                  <h1 className="heading--secondary">The Best IT Solution With 10 Years of Experience</h1>
                  </div>
                  <div className="div2">
                    <div className="div2__inner"></div>
                  </div>
                  <p className="paragraph u-margin-bottom-small">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                  <div className="about__options">
                      
                      
                      {aboutOptions.map((item) => {   
                          return(
                          <h5 className="about__option"><FaCheck className='about__option--icon text-primary' />{ item}</h5>
)                      })}
                  </div>

                  <div className="about__call">
                      <div className=" bg-primary counter__elements--icon text-white"><FaPhone /> </div>
                      <div className="about__call--detail"><h5 className="about__call--question">Call to ask any question</h5>
                      <h4 className="text-primary about__call--number">+012 345 6789</h4></div>
                  </div>
                  <button className="btn btn__hero" style={{animation: 'zoomIn .6s ease-out 1.2s '}}>Request A Quote</button>
              </div>
              <div className="about__right" data-aos="fade-up">
                  <img src={about} alt="about image" className="about__right--img" />
              </div>
          </div>   
    </section>
  )
}

export default About