
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';
import indoor from '../../assets/indoor-plant.jpg';

const Product = () => {
    const { id } = useParams();

    const [data, setdata] = useState(null);
    const [loading, setLoading] = useState(true);

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

        } catch (error) {
            console.error("GET error:", error);
            setdata(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getdata();
    }, [id]);

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

                        <div className="md:w-1/2 space-y-4">
                            <h2 className="text-3xl font-bold">
                                {data.product_name}
                            </h2>
                            
                            <p className=" text-gray-600 font-bold text-2xl">
                                {data.Category || data.category}
                            </p>

                            <div className="flex gap-4 items-center">
                                <p className="text-green-700 font-bold text-2xl">
                                    ₹{data.product_price}
                                </p>

                                <p className="text-gray-400 line-through">
                                    ₹{data.original_price}
                                </p>
                            </div>

                            <p className="text-gray-600">
                                Quantity: {data.Quantity}
                            </p>
                            <p className="text-gray-600 font-bold">
                                Description 
                                
                            </p>
                            <p>
                               {data.Description}
                            </p>

                            <div className="flex gap-3 pt-4">
                                <button className="bg-green-600 p-3 rounded-xl text-white">
                                    Shop now
                                </button>

                                <button className="bg-orange-500 p-3 rounded-xl text-white">
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
