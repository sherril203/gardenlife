
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';
import { useNavigate } from 'react-router-dom';
import indoor from '../../assets/indoor-plant.jpg';
import Outdoor from '../../assets/outdoor-plants.webp';
import Bamboo from '../../assets/bamboo-plants.webp';
import Soils from '../../assets/soil.webp'
import Fertilizer from '../../assets/fertilizers.jpg'
const Garden = () => {

    const [data, setdata] = useState(null);
    const [loading, setLoading] = useState(true);

    const API = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();
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
        path:"soils"
    },
    {
        name:"Fertilizers",
        image:Fertilizer,
        path:"fertilizers"
    }
];
    // GET PRODUCTS
    const getdata = async () => {
        try {
            const response = await fetch(`${API}/display`);

            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            const result = await response.json();

            // Handle different API response structures
            const products = Array.isArray(result)
                ? result
                : Array.isArray(result.data?.data)
                    ? result.data.data
                    : Array.isArray(result.data)
                        ? result.data
                        : Array.isArray(result.products)
                            ? result.products
                            : [];

            setdata(products);

        } catch (error) {
            console.error("GET error:", error.message);
            setdata([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getdata();
    }, []);
const AddtoCart = async (product) => {
    try {
        const response = await fetch(`${API}/addcart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                product_image: product.product_image,
                product_name: product.product_name,
                Description: product.Description,
                product_price: product.product_price,
                original_price: product.original_price,
                Quantity: 1,
                Category: product.Category,
                Status: "Active"
            })
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message);
        }

        alert("Product added to cart successfully!");

    } catch (err) {
        console.error("Add to cart error:", err);
        alert("Failed to add product");
    }
};
    return (
        <div>
            <Navbar />

            {/* Heading */}
            <div className="p-3 text-2xl font-semibold">
                <p>Flowers and Gardens</p>
            </div>

            {/* Plant Collection */}
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
            {/* Product Display */}
            <div className="p-5">

                <h2 className="text-2xl font-bold mb-5">
                    Our Products
                </h2>

                {loading ? (
                    <p className="text-center p-5">Loading products...</p>
                ) : data.length === 0 ? (
                    <p className="text-center p-5">
                        No products available.
                    </p>
                ) : (

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

                        {data.map((product) => {

                            const imageName = product.product_image;

                            const imageSrc = imageName
                                ? `${API}/files/${String(imageName).split(/[\\/]/).pop()}`
                                : indoor;

                            return (
                                <div
                                    key={product._id}
                                    className="border rounded-lg p-4 shadow-sm ">

                                    <img
                                        src={imageSrc}
                                        alt={product.product_name}
                                        className="w-[300px] h-[200px] object-contain rounded-md bg-white"
                                         onClick={() => navigate(`/product/${product._id}`)}
                                        onError={(e) => {
                                            e.currentTarget.src = indoor;
                                        }}
                                    />

                                    <div className="mt-3 space-y-2">
                                        <p className="text-sm text-gray-600">
                                            {product.Category}
                                        </p>
                                        <h3 className="text-lg font-semibold"  onClick={() => navigate(`/product/${product._id}`)}>
                                            {product.product_name}
                                        </h3>
                                        <div className="flex justify-center gap-3">
                                            <p className="text-green-700 font-bold">
                                            ₹{product.product_price}
                                        </p>

                                        <p className="text-gray-400 line-through">
                                            ₹{product.original_price}
                                        </p>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Quantity: {product.Quantity}
                                        </p>
                                        <div className='flex justify-center gap-3'>
                                            <button className='bg-green-600 p-3 rounded-2xl text-white'>Shop now</button>
                                            <button className='bg-orange-500 p-3 rounded-2xl text-white'  onClick={() => AddtoCart(product)}> add to cart</button>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}

                    </div>
                )}

            </div>

            <Footer />
        </div>
    );
};

export default Garden;
