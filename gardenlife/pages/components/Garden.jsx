import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='p-3 text-2xl'>
                <p>Flowers and Gardens</p>
            </div>
            <div className='p-3'>
                <p className='flex justify-center font-bold text-2xl'>Type of plant</p>
                <div className='flex items-center justify-center gap-3 text-xl'>
                    <div>
                        <p>Indoor plants</p>
                    </div>
                    <div>
                        <p>Outdoor plants</p>
                    </div>
                    <div>
                        <p>lucky bamboo plants</p>
                    </div>
                </div>
            </div>
            <div className='p-3'>
                <p className='flex justify-center font-bold text-2xl'>seed collection</p>
                <div className='flex items-center justify-center gap-3 text-xl'>
                    <div>
                        <p>Flower seeds</p>
                    </div>
                    <div>
                        <p>Fruits and vegetables seeds</p>
                    </div>
                    <div>
                        <p>Herbs seeds</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
