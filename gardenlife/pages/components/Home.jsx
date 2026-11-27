import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import indoor from '../../assets/indoor-plant.jpg'
import Outdoor from '../../assets/outdoor-plants.webp'
import Bamboo from '../../assets/bamboo-plants.webp'
import Soils from '../../assets/soil.webp'
import Fertilizer from '../../assets/fertilizers.jpg'
import { Link } from 'react-router-dom';
const Home = () => {
    const categories = [
        {
            name: "Indoor Plants",
            image: indoor,
            path: "indoor_plants"
        },
        {
            name: "Outdoor Plants",
            image: Outdoor,
            path: "outdoor_plants"
        },
        {
            name: "Lucky Bamboo Plants",
            image: Bamboo,
            path: "Bamboo_plants"
        },{
            name:"Soils",
            image:Soils,
            path:"Soils"
        },
        {
            name:"Fertilizers",
            image:Fertilizer,
            path:"Fertilizers"
        }
    ];
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
            <div className="p-5">
            
                            <p className="flex justify-center font-bold text-2xl mb-5">
                                categories
                            </p>
            
                            <div className="flex flex-wrap items-center justify-center gap-8 text-xl">
            
               {categories.map((category) => (
                <div key={category.path} className="text-center">
                    <Link to={`/category/${category.path}`}>
                        <img
                            src={category.image}
                            alt={category.name}
                            className="w-48 h-48 object-cover rounded-lg"
                        />
                        <p className="mt-2">{category.name}</p>
                    </Link>
                </div>
            ))}
            
            </div>
                        </div>
            <Footer />
        </div>
    )
}

export default Home
