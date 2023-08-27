import React from 'react'
import { brandsItems } from '../constant/Constant'
import BrandItem from './BrandItem'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Brands = () => {

     AOS.init({
    once: true,
     })
    
  return (
      <section className="container brands" data-aos="fade-up" data-aos-duration={`1000`}>
          <div className="brands__items">
          {brandsItems.map((img) => {
              return (
                  <BrandItem img={img} />
              )
          })}
              </div>
    </section>
  )
}

export default Brands