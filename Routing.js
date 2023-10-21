import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Slide from './Slide';
import About from './About';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import NoPage from './NoPage';
const Routing = () => {
  return (
    <div claasName='container-fluid p-0'>
      <Routes>
        <Route path='/' element={<Slide/>}></Route>
        <Route path='/about' element={<About/>}></Route> 
        <Route path='/course' element={<Gallery/>}></Route>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </div>
  )
}

export default Routing
