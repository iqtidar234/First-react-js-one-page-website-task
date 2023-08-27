import React from 'react'
import SubNavbar from '../components/SubNavbar'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'


const Layout = () => {
    return (
      <div>
        <div ><SubNavbar />
          <Navbar/>
            </div>
           <div> <Outlet /></div>
            </div>
  )
}

export default Layout;