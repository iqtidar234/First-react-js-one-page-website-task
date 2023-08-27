import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionTitle = ({ heading, subHeading }) => {
  AOS.init({
    
    once: true,
  })

  return (<>
    <div className="feature" data-aos="fade-up" data-aos-duration="1000" >
    <div className="feature__title text-center">
          <h5 className="tags ">{ heading}</h5>
          <h1 className="heading--secondary">{subHeading }</h1>
    </div>
    <div className="div2">
         <div className="div2__inner"></div>
      </div>
      </div>
    </>
  )
}

export default SectionTitle