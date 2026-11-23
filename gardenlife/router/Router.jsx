import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/components/Home';
import Garden from '../pages/components/Garden';
import Service from '../pages/components/Service';
import Contact from '../pages/components/Contact';
import PostForm from '../pages/components/PostForm';
import Product from '../pages/components/Product'
import Collection from '../pages/components/Collection'
import Cart from '../pages/components/Cart';
import Admin from '../pages/admin/Admin';
import Products from '../pages/admin/Products';
import Profile from '../pages/admin/Profile';
const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/gardens" element={<Garden/>}/>
        <Route path="/services" element={<Service/>}/>
         <Route path="/contact" element={<Contact/>}/>
        <Route path="/post" element={<PostForm/>}/>
           <Route path="/plants/:plantName" element={<Collection />} />
           <Route path="/product/:id" element={<Product />} />
           <Route path="/cart" element={<Cart/>}/>
           <Route path="/admin" element={<Admin/>}/>
           <Route path="/products" element={<Products/>}/>
           <Route path="/feedback" element={<Profile/>}/>
           <Route/>
            </Routes>
  )
}

export default Router
