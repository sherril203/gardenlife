import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'

const Contact = () => {
  return (
    <div>
        <Navbar/>
      <div className='flex justify-center text-2xl font-bold p-3'>
       <p>Contact Us</p>
      </div>
      <div className='flex justify-center gap-3'>
        <div className=' border-2 p-3 rounded-xl '>
              <div>
                <p className='font-bold'>mobile no</p>
                <p>+91 1234567890</p>
            </div>
            <div>
                <p className='font-bold'>email</p>
                <p>gardenlife@gmail.com</p>
            </div>
        </div>
        <form action="" className=' border-2 p-3 rounded-xl '>
            <div className='p-3'>
                <label htmlFor="">Name</label> <br />
                <input type="text" className=' border-2 p-3 rounded-xl  '/>
            </div>
             <div className='p-3'>
                <label htmlFor="">Email</label> <br />
                <input type="email" className=' border-2 p-3 rounded-xl '/>
            </div> 
            <div className='p-3'>
                <label htmlFor="">Message</label> <br />
                <textarea className=' border-2 p-3 rounded-xl '/>
            </div>
            <div>
                <button className='bg-blue-400 text-white text-2xl p-3 rounded-xl'>Submit</button>
            </div>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
