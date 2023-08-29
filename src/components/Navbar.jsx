import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaUser, FaBars } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { menuItems } from '../constant/Constant';


const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const [stickyNavBar, setStickyNavBar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 10 && window.innerWidth >= 996) {
      setStickyNavBar(true)
    }
    else {
      setStickyNavBar(false)
    }
  }

  const documentClick = (e) => {
    if (!e.target.className.startsWith('nav')) {
      setMenu(false)
    }
  }

  window.addEventListener('resize', changeBackground)

  window.addEventListener('scroll', changeBackground)

  document.addEventListener('click', documentClick)
  // useEffect(() => {
  // }, [menu])

  return (
    <nav className={`${stickyNavBar ? 'nav stickey' : 'nav'}`}>
      <Link to='/' className={`nav__logo ${stickyNavBar ? 'text-primary' : null}`}><FaUser className='nav__logo--icon' /> <span>Startup</span></Link>

      <div className={`nav__menu ${menu ? 'burger-active' : null}`} onClick={() => setMenu(!menu)}>
        <FaBars />
      </div>

      <ul className={`nav__list ${menu ? 'open' : ''}`} >
        {menuItems.map((menu) => {
          return (
            <li className="nav__items " ><NavLink
              className={`nav__links ${stickyNavBar ? 'text-primary' : null}`}
              onClick={() => setMenu(!menu)}
              to={menu.link}>
              {menu.text}</NavLink>
            </li>
          )
        })}


        <li className="nav__items"><NavLink className={`nav__links ${stickyNavBar ? 'text-primary' : null} nav__links--search`}><FaSearch /></NavLink></li>
        <li className="nav__items"><button className="btn">Download pro version</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar