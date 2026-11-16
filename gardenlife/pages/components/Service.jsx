import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='p-3'>
                <p className='flex justify-center font-bold text-2xl'>Our Services</p>
                <div className='flex items-center justify-center gap-3 text-xl'>
                    <div>
                        <p>Fully-Grown Plants</p>
                    </div>
                    <div>
                        <p>Next-Day Delivery</p>
                    </div>
                    <div>
                        <p>Nursery-Fresh</p>
                    </div>
                     <div>
                        <p>Lowest Prices</p>
                    </div>
                </div>
            </div>
        
            <Footer />
        </div>
    )
}

export default Home
