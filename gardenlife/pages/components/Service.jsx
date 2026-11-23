import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'

const Home = () => {
    const services=[{title:"Fully-Grown Plants",description:"Nursery-mature, not 4-inch saplings"},
        {title:"Next-Day Delivery",
            description:"At your door tomorrow — not a 4–7 day wait"
        },{title:"Nursery-Fresh",description:"Ready to flourish, no growing-in"},
        {title:"Lowest Prices",description:"Straight from local growers"}]
    return (
        <div>
            <Navbar />
            <div className='p-3'>
                <p className='flex justify-center font-bold text-2xl'>Our Services</p>
              <div className='flex flex-wrap items-center justify-center gap-6 text-xl mt-5'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='border border-green-400 rounded-lg p-5 shadow-md'>
                            <p className='font-bold flex justify-center'>{service.title}</p>
                             <p>{service.description}</p>
                        </div>
                    ))}
                </div>
               
             
            </div>
        
            <Footer />
        </div>
    )
}

export default Home
