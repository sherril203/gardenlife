import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div  className='flex justify-between items-center  bg-green-100'>
        <div>
            <p className='text-green-400 font-bold text-2xl p-3'>gardenlife</p>
        </div>
        <div >
             <nav >
        <ul className='flex justify-center items-center p-3 gap-3 text-xl'>
            <li><Link to="/">Home</Link></li>
             <li><Link to="/gardens">Flowers and Gardens</Link></li>
            <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
        </div>
     
      <div className='flex justify-center items-center'>
        <p><Link to="/cart" className='p-3 text-xl'>Cart</Link></p>
        <button className='bg-green-400 text-white p-2 rounded-xl text-xl'>Login</button>
      </div>
    </div>
  )
}

export default Navbar
