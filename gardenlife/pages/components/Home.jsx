import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import indoor from '../../assets/indoor-plant.jpg'
import Outdoor from '../../assets/outdoor-plants.webp'
import Bamboo from '../../assets/bamboo-plants.webp'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='p-3 text-2xl'>
                <p>Welcome to gardenlife</p>
                <p>You can see the various plants for our garden make beautiful</p>
                <button>Shop Now</button>
            </div>
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
            <div className='p-3'>
                <p className='flex justify-center font-bold text-2xl'>Type of plant</p>
                <div className="flex flex-wrap items-center justify-center gap-8 text-xl">

                    <div className="text-center p-3">
                        <Link to="/indoor_plants">
                        <img
                            src={indoor}
                            alt="Indoor plants"
                            className="w-48 h-48 object-cover rounded-lg"
                        />
                         <p className="mt-2">Indoor Plants</p>
                        </Link>
                   
                        
                    </div>

                    <div className="text-center">
                        <Link to="/outdoor_plants">
                        <img
                            src={Outdoor}
                            alt="Outdoor plants"
                            className="w-48 h-48 object-cover rounded-lg"
                        />
                        <p className="mt-2">Outdoor Plants</p>
                        </Link>
                    </div>

                    <div className="text-center">
                        <Link to="/bamboo_plants">
                        <img
                            src={Bamboo}
                            alt="Lucky bamboo plants"
                            className="w-48 h-48 object-cover rounded-lg"
                        />
                        <p className="mt-2">Lucky Bamboo Plants</p>
                        </Link>
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
