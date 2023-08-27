import React, {useEffect,useRef } from 'react'
import SectionTitle from '../components/SectionTitle'
import Carousal from './Carousal'
import { carousalItems } from '../constant/Constant'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Testimonial = () => {
  const sliderRef = useRef(null);

  AOS.init({
    once: true,
  })

  // Function to move to the next slide
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  useEffect(() => {
    // Change slide every 5 seconds
    const interval = setInterval(nextSlide, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  //  const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     centerMode: true,
  //     slidesToShow: 3,
  //     slidesToScroll: 1
  //   };

  const slideOptions = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

     responsive: [
      {
        breakpoint: 1000, // Example breakpoint for mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // Other responsive settings...
        },
      },
    ],
    // centerMode:true,
  }
  
  return (
      <section className="container testimonial">
      <SectionTitle heading={'TESTIMONIAL'} subHeading={'What Our Clients Say About Our Digital Services'} />

      {/* CAROUSAL TESTIMONIAL */}

      <div className="testimonial__carousal" data-aos="fade-up" data-aos-duration="2000">
         <Slider  ref={sliderRef} {...slideOptions}>
          {carousalItems.map((item) => {
            return(
            <Carousal item={item}/>
            )
          })}
        </Slider>
        
        </div>
    </section>
  )
}

export default Testimonial;