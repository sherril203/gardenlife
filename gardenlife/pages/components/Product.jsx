
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';
import indoor from '../../assets/indoor-plant.jpg';

const Product = () => {

    const { id } = useParams();

    const [data, setdata] = useState(null);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(1);

    const API = import.meta.env.VITE_BACKEND_URL;

    const getdata = async () => {
        try {
            setLoading(true);

            const response = await fetch(`${API}/display/${id}`);
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Product not found");
            }

            setdata(result.data || result);
            setCount(1);

        } catch (error) {
            console.error("GET error:", error);
            setdata(null);
        } finally {
            setLoading(false);
        }
    };

    // Increase count
    const increaseCount = () => {
        if (count < Number(data?.Quantity)) {
            setCount(prev => prev + 1);
        }
    };

    // Decrease count
    const decreaseCount = () => {
        setCount(prev => Math.max(prev - 1, 1));
    };

    useEffect(() => {
        getdata();
    }, [id]);

    // Total price calculation
    const totalPrice = Number(data?.product_price || 0) * count;

    const originalTotalPrice =
        Number(data?.original_price || 0) * count;

    // Product image
    const imageName = data?.product_image;

    const imageSrc = imageName
        ? `${API}/files/${String(imageName).split(/[\\/]/).pop()}`
        : indoor;

    return (
        <div>

            <Navbar />

            <div className="p-5">

                {loading ? (

                    <p className="text-center p-5">
                        Loading product...
                    </p>

                ) : !data ? (

                    <p className="text-center p-5">
                        Product not found.
                    </p>

                ) : (

                    <div className="flex flex-col md:flex-row gap-8 border rounded-xl p-6 shadow-md max-w-5xl m-auto">

                        {/* Product Image */}

                        <div className="md:w-1/2 flex justify-center">

                            <img
                                src={imageSrc}
                                alt={data.product_name}
                                className="w-full max-w-[450px] h-[350px] object-contain rounded-md bg-white"
                                onError={(e) => {
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src = indoor;
                                }}
                            />

                        </div>

                        {/* Product Details */}

                        <div className="md:w-1/2 space-y-4">

                            <h2 className="text-3xl font-bold">
                                {data.product_name}
                            </h2>

                            <p className="text-gray-600 font-bold text-2xl">
                                {data.Category || data.category}
                            </p>

                            {/* Price */}

                            <div className="flex justify-start gap-3 items-center">

                                <p className="text-green-700 font-bold text-2xl">
                                    ₹{totalPrice}
                                </p>

                                <p className="text-gray-400 line-through">
                                    ₹{originalTotalPrice}
                                </p>

                            </div>

                            {/* Count */}

                            <div className="flex justify-start items-center gap-4">

                                <button
                                    onClick={decreaseCount}
                                    disabled={count <= 1}
                                    className="bg-red-400 px-4 py-2 rounded-lg text-white disabled:opacity-50"
                                >
                                    -
                                </button>

                                <span className="font-bold text-lg">
                                    {count}
                                </span>

                                <button
                                    onClick={increaseCount}
                                    disabled={count >= Number(data.Quantity)}
                                    className="bg-green-500 px-4 py-2 rounded-lg text-white disabled:opacity-50"
                                >
                                    +
                                </button>

                            </div>

                            {/* Stock */}

                            <p className="text-gray-600">
                                Available Quantity: {data.Quantity}
                            </p>

                            {/* Description */}

                            <p className="text-gray-600 font-bold">
                                Description
                            </p>

                            <p>
                                {data.Description}
                            </p>

                            {/* Buttons */}

                            <div className="flex gap-3 pt-4">

                                <button
                                    className="bg-green-600 p-3 rounded-xl text-white"
                                >
                                    Shop now
                                </button>

                                <button
                                    className="bg-orange-500 p-3 rounded-xl text-white"
                                >
                                    Add to cart
                                </button>

                            </div>

                        </div>

                    </div>

                )}

            </div>

            <Footer />

        </div>
    );
};

export default Product;
