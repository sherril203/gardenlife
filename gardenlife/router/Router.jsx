import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/components/Home';
import Garden from '../pages/components/Garden';
import Service from '../pages/components/Service';
import Contact from '../pages/components/Contact';
const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gardens" element={<Garden/>}/>
        <Route path="/services" element={<Service/>}/>
         <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default Router
