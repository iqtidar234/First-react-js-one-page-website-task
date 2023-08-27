import React from 'react'
import { FaCircleArrowLeft, FaPhone } from "react-icons/fa6";
import { quoteItems } from '../constant/Constant';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Quote = () => {

    AOS.init({
    once: true,
    })
    
  return (
      <section className="container quote" >
          <div className="about">
              <div className="about__text">
                  <div className="about__title">   
                  <h5 className="about__title--tags text-primary">REQUEST A QUOTE</h5>
                  <h1 className="heading--secondary">Need A Free Quote? Please Feel Free to Contact Us</h1>
                  </div>
                  
                  <div className="about__options">
                      {quoteItems.map((item) => {   
                          return(
                              <h5 className="about__option" style={{animation:'zoomIn 1s ease'}}>{ item.icon}{ item.text}</h5>
)                      })}
                  </div>

                  <p className="paragraph u-margin-bottom-small">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>

                  <div className="about__call">
                      <div className=" bg-primary counter__elements--icon text-white"><FaPhone /> </div>
                      <div className="about__call--detail"><h5 className="about__call--question">Call to ask any question</h5>
                      <h4 className="text-primary about__call--number">+012 345 6789</h4></div>
                  </div>
              </div>
              <div className="quote__right bg-primary" data-aos="zoom-in" data-aos-duration="1000" >
                  <form action="">
                      <div className="quote__inputs">
                          <div className="quote__inputs--box">
                              <input type="text" className="quote__inputs--input height-5" placeholder='Your Name'/>
                          </div>
                          <div className="quote__inputs--box">
                              <input type="text" className="quote__inputs--input height-5" placeholder='Your Email'/>
                          </div>
                          <div className="quote__inputs--box">
                              <select name="cars" id="cars" className="quote__inputs--input height-5">
                                 <option value="volvo" selected>Select a Service</option>
                                 <option value="saab">service 1</option>
                                 <option value="mercedes">service 2</option>
                                 <option value="audi">service 3</option>
                            </select>
                          </div>
                          <div className="quote__inputs--box">
                              
                              <textarea name="" id=""  rows="3" placeholder='Message' className="quote__inputs--input" ></textarea>
                          </div>
                          <div className="quote__inputs--box">
                              
                             <button className="quote__inputs--input height-5 bg-dark text-white">Request A Quote</button>
                          </div>
                      </div>
                      
                  </form>
              </div>
          </div>
    </section>
  )
}

export default Quote