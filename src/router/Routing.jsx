import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../pages/Layout'
import About from '../pages/About'
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';

const Routing = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route path='/' element={<Home />}/>
                  <Route path='/about' element={<About />}/>
                  <Route path='/blog' element={<Blog/>}></Route>
                  <Route path='/services' element={<Services />}></Route>
                  <Route path='/contact' element={<Contact />}></Route>
                  </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default Routing