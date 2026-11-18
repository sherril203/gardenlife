
import React, { useState, useEffect } from 'react';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';

import indoor from '../../assets/indoor-plant.jpg';
import Outdoor from '../../assets/outdoor-plants.webp';
import Bamboo from '../../assets/bamboo-plants.webp';

const Garden = () => {

    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);

    const API = import.meta.env.VITE_BACKEND_URL;

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
                    Type of Plant
                </p>

                <div className="flex flex-wrap items-center justify-center gap-8 text-xl">

                    <div className="text-center">
                        <img
                            src={indoor}
                            alt="Indoor plants"
                            className="w-48 h-48 object-cover rounded-lg"
                        />
                        <p className="mt-2">Indoor Plants</p>
                    </div>

                    <div className="text-center">
                        <img
                            src={Outdoor}
                            alt="Outdoor plants"
                            className="w-48 h-48 object-cover rounded-lg"
                        />
                        <p className="mt-2">Outdoor Plants</p>
                    </div>

                    <div className="text-center">
                        <img
                            src={Bamboo}
                            alt="Lucky bamboo plants"
                            className="w-48 h-48 object-cover rounded-lg"
                        />
                        <p className="mt-2">Lucky Bamboo Plants</p>
                    </div>

                </div>
            </div>

            {/* Seed Collection */}
            <div className="p-5">

                <p className="flex justify-center font-bold text-2xl mb-5">
                    Seed Collection
                </p>

                <div className="flex flex-wrap items-center justify-center gap-8 text-lg">

                    <p>Flower Seeds</p>
                    <p>Fruits and Vegetable Seeds</p>
                    <p>Herbs Seeds</p>

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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {data.map((product) => {

                            const imageName = product.product_image;

                            const imageSrc = imageName
                                ? `${API}/files/${String(imageName).split(/[\\/]/).pop()}`
                                : indoor;

                            return (
                                <div
                                    key={product._id}
                                    className="border rounded-lg p-4 shadow-sm "
                                >

                                    <img
                                        src={imageSrc}
                                        alt={product.product_name}
                                        className="w-[300px] h-[200px] object-contain rounded-md bg-white"
                                        onError={(e) => {
                                            e.currentTarget.src = indoor;
                                        }}
                                    />

                                    <div className="mt-3 space-y-2">
                                        <p className="text-sm text-gray-600">
                                            {product.Category}
                                        </p>
                                        <h3 className="text-lg font-semibold">
                                            {product.product_name}
                                        </h3>

                                        <p className="text-gray-600">
                                            {product.Description}
                                        </p>
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
                                            <button className='bg-green-00 p-3 rounded-2xl text-white'>Shop now</button>
                                            <button className='bg-orange-300 p-3 rounded-2xl text-white'> add to cart</button>
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
