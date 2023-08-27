import React, { useEffect, useRef, useState } from 'react'
import { FaUsers, FaCheck, FaAward } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Counter = ({end}) => {
    const [counter, setCounter] = useState(null)
    const ref = useRef(0) 
    
    const accumalator = end / 1000;
    
    const updateCounterState = () => {
        if (ref.current < end) {
            const result = Math.ceil(ref.current + accumalator)
            if(result>end) return setCounter(end)
            setCounter(result)
        ref.current=result
    }
    
    setTimeout(updateCounterState, .01);
}

AOS.init();
    useEffect(() => {
        let isMounted=true
        if (isMounted) {
            updateCounterState()
        }

        return ()=>(isMounted=false)
    }, [end])
    

  return (
      <div className='counter'>
          <div className="counter__box bg-primary "
              data-aos="zoom-in"
            //   style={{ animation: 'zoomIn .5s ease-in' }}
          >
              <div className="counter__elements" >
                  <div className=" bg-white counter__elements--icon"><FaUsers/> </div>
                  <div className="counter__elements--text text-white"> <h5>Happy Clients</h5><h1>{counter}</h1> </div>
              </div>
          </div>
          <div className="counter__box bg-white "
              data-aos="zoom-in"
            //   style={{ animation: 'zoomIn .7s ease-in' }}
          >
              <div className="counter__elements">
                  <div className="counter__elements--icon bg-primary text-white"><FaCheck/></div>
                  <div className="counter__elements--text"> <h5>Happy Clients</h5><h1>{counter}</h1></div>
              </div>
          </div>
          <div className="counter__box bg-primary "
              data-aos="zoom-in"
            //   style={{ animation: 'zoomIn .9s ease-in' }}
          >
              <div className="counter__elements">
                  <div className="counter__elements--icon bg-white "><FaAward/></div>
                  <div className="counter__elements--text text-white"> <h5>Happy Clients</h5><h1>{counter}</h1></div>
              </div>
          </div>
    </div>
  )
}

export default Counter