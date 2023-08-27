import React from 'react'
import Signup from './Signup'
import FooterInformation from './FooterInformation'
import { footerLinks, footerLinks2, footerLocation,socialIcons } from '../constant/Constant'
import FooterLinks from './FooterLinks'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

  AOS.init({
    once: true,
  })
  
  return (
      <section className=" bg-dark " data-aos="fade-up" data-aos-duration={`1000`}>
          <div className="container mb-0">
              <div className="footer">
          <Signup />
          <div className="footer__links">
            <div>
              <FooterInformation information={footerLocation} />


             <div className="footer__social">
                  {socialIcons.map((icon) => {
                      return (
                          <Link className='btn footer__social--icon'>{ icon}</Link>
                      )
                   })}
              </div>


            </div>
             <div>
             <FooterLinks links={footerLinks}/>
            </div>
            <div>
             <FooterLinks links={footerLinks2}/>
            </div>
          </div>
              </div>
      </div>
      <div className="copy-right">
        <div className="container copy-right__box text-center paragraph text-white">
          <p className='paragraph text-white'>&copy; <Link className='text-white'>Your Site Name</Link>. All Rights Reserved. Designed by <Link className='text-white'>HTML Codex</Link></p><br />
          Distributed By: 
          <Link className='text-primary'>ThemeWagon</Link>
        </div>
      </div>
    </section>
  )
}

export default Footer