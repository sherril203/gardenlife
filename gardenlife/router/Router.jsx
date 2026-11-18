import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/components/Home';
import Garden from '../pages/components/Garden';
import Service from '../pages/components/Service';
import Contact from '../pages/components/Contact';
import PostForm from '../pages/components/PostForm';
const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gardens" element={<Garden/>}/>
        <Route path="/services" element={<Service/>}/>
         <Route path="/contact" element={<Contact/>}/>
        <Route path="/post" element={<PostForm/>}/>
    </Routes>
  )
}

export default Router
