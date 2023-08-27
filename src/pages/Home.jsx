import React from 'react'
import Header from '../components/Header'
import Counter from '../components/Counter'
import About from '../components/About'
import Feature from '../components/Feature'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import Quote from '../components/Quote'
import Testimonial from '../components/Testimonial'
import Team from '../components/Team'
import Blog from '../components/Blog'
import Brands from '../components/Brands'
import Footer from '../components/Footer'


const Home = () => {
 
  
  return (
    <div><Header />
      
        <Counter end={12345} />
        
      <About />
   <Feature />
                  <Services />
      <Pricing />
      <Quote />
      <Testimonial />
      <Team />
      <Blog />
      <Brands />
      <Footer/>
    
    </div>
  )
}

export default Home