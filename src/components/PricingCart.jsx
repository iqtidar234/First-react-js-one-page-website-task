import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { MdOutlineClear } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PricingCart = ({ bgColor, duration }) => {
    
     AOS.init({
    once: true,
     })
    
  return (
      <div className={`pricing-cart ${bgColor}`} data-aos="fade-up" data-aos-duration={`${duration}00`}  >
          <div className="pricing-cart__tags ">
              <h4 className="tags">Basic Plan</h4>
              <p className="paragraph text-uppercase">FOR SMALL SIZE BUSINESS</p>
          </div>

          <div className="pricing-cart__packages">
              <h1 className="pricing-cart__prize">
                  <small className="pricing-cart__dollar">$</small>
                  49.00 
                  <small className="pricing-cart__month">/ Month</small>
              </h1>
              <div className="pricing-cart__package"><span className="paragraph">HTML5 & CSS3</span> <FaCheck className='pricing-cart__package--icon font-bold text-primary' /></div>
              <div className="pricing-cart__package"><span className="paragraph">Responsive</span> <FaCheck className='pricing-cart__package--icon font-bold text-primary' /></div>
              <div className="pricing-cart__package"><span className="paragraph">Bootstrap v5</span> <FaCheck className='pricing-cart__package--icon font-bold text-primary' /></div>
              <div className="pricing-cart__package"><span className="paragraph">Cross-browser Support</span> <MdOutlineClear className='pricing-cart__package--icon font-bold text-red'/></div>
              <button className="btn pricing-cart__button">Order Now</button>
          </div>
    </div>
  )
}

export default PricingCart