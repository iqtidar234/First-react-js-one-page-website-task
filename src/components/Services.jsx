import React from 'react'
import { FaCode } from "react-icons/fa6";
import { ServicesItems } from '../constant/Constant';
import { BsArrowRight } from "react-icons/bs";
import SectionTitle from './SectionTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

   AOS.init({
   
    once: true,
   })
  
  return (
    <div className="container services">
       <SectionTitle heading={'OUR SERVICES'} subHeading={'Custom IT Solutions for Your Successful Business'}/>
      
      <div className="services__items">
        {ServicesItems.map((item) => {
          
          return(
           <div className="services__item bg-light" key={item.id} data-aos="zoom-in" data-aos-duration="1000">
              <div className="services__item--icon--box">{ item.icon}</div>
             <h5 className="about__call--question u-margin-bottom-small font-bold">{ item.serviceName}</h5>
              <p className="paragraph">{item.serviceDesc}</p>
              <button className="btn services__item--btn hideshow"><BsArrowRight/></button>
        </div>)
        })}
         <div className="services__item bg-primary" data-aos="zoom-in"data-aos-duration="1000" >
              <h1 className="services__item--call u-margin-bottom-small">Call Us For Quote</h1>
             <p className="paragraph u-margin-bottom-small">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
             <h4 className=" about__call--number text-white">+012 345 6789</h4>
        </div>
       
      </div>
    </div>
  )
}

export default Services