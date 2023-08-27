import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";
import { NavLink } from 'react-router-dom';


const Header = () => {
  const [index, setIndex] = useState(0);
  const [slider,setSlider]=useState([{
  id:1,
  img: 'https://themewagon.github.io/startup2/img/carousel-2.jpg',
  subHeading: 'CREATIVE & INNOVATIVE',
  mainHeading:'Creative & Innovative Digital Solution'
}, {
  id:2,
  img: 'https://themewagon.github.io/startup2/img/carousel-1.jpg',
  subHeading: 'CREATIVE & INNOVATIVE',
  mainHeading:'Creative & Innovative Digital Solution'
}])
  
  const checkNumber = (number) => {
    if (number > slider.length - 1) {
      return 0
    }
    if (number < 0) {
      return  slider.length - 1;
    }
    return number
  }
  const previousButton = () => {
    setIndex(() => {
      let newIndex=index-1
    return checkNumber(newIndex)
    })
    console.log("clicked")
  }
  
   const nextButton = () => {
   setIndex(() => {
      let newIndex=index+1
    return checkNumber(newIndex)
   })
     console.log("clicked")
  }
  
  useEffect(() => {
    const slider=setInterval(() => {
        setIndex(()=>checkNumber(index+1))
    }, 5000);

    return ()=>clearInterval(slider)
  },[index])

  const { id,img,subHeading,mainHeading } = slider[index];
  return (
    <>
      <header className="header" key={id}
        style={{
          backgroundImage: `linear-gradient(rgba(9, 30, 62, .7), rgba(9, 30, 62, .7)), url("${img}")`
        }}
      >
             
      <div className="header__text-box">
        <h1 className="heading-primary">
            <span className="heading-primary-sub">{subHeading }</span>
            <h1 className="heading-primary-main">{ mainHeading}</h1>
          </h1>
          <button className='btn btn__hero btn__animation-left'>Free Quote</button>
          <button className=' btn__transparent btn__hero btn__animation-right'>Free Quote</button>
        </div>

        {/* ****************SLIDER BUTTONS**************** */}
        <div className="header__previous-icon " onClick={()=>previousButton()}><FiChevronLeft /></div> 
         <div className="header__next-icon " onClick={nextButton}><FiChevronRight/></div>
    </header>
      </>
  )
}

export default Header