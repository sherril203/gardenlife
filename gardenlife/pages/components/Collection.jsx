
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';
import indoor from '../../assets/indoor-plant.jpg';

const Collection = () => {

    const { plantName } = useParams();

    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);

    const API = import.meta.env.VITE_BACKEND_URL;

    const getdata = async () => {
        try {
            setLoading(true);

            const response = await fetch(`${API}/display`);

            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }

            const result = await response.json();

            const products = Array.isArray(result)
                ? result
                : Array.isArray(result.data?.data)
                    ? result.data.data
                    : Array.isArray(result.data)
                        ? result.data
                        : Array.isArray(result.products)
                            ? result.products
                            : [];

            console.log("All products:", products);
            console.log("Selected plant:", plantName);

            const selectedCategory = plantName.replace(/_/g, " ").toLowerCase().trim();

            const filteredProducts = products.filter((product) => {
                const category = product.Category || product.category;

                return Array.isArray(category)
                    ? category.some(item =>
                        String(item).toLowerCase().trim() === selectedCategory
                    )
                    : String(category || "").toLowerCase().trim() === selectedCategory;
            });

            console.log("Filtered products:", filteredProducts);

            setdata(filteredProducts);

        } catch (error) {
            console.error("GET error:", error);
            setdata([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getdata();
    }, [plantName]);

    return (
        <div>
            <Navbar />

            <div className="p-5">

                <h2 className="text-2xl font-bold mb-5 capitalize">
    {decodeURIComponent(plantName).replace(/_/g, " ")}
</h2>

                {loading ? (
                    <p className="text-center p-5">
                        Loading products...
                    </p>
                ) : data.length === 0 ? (
                    <p className="text-center p-5">
                        No products available in this category.
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
                                    className="border rounded-lg p-4 shadow-sm"
                                >

                                    <img
                                        src={imageSrc}
                                        alt={product.product_name}
                                        className="w-full h-[200px] object-contain rounded-md bg-white"
                                        onError={(e) => {
                                            e.currentTarget.src = indoor;
                                        }}
                                    />

                                    <div className="mt-3 space-y-2">

                                        <p className="text-sm text-gray-600">
                                            {product.Category || product.category}
                                        </p>

                                        <h3 className="text-lg font-semibold">
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

                                        <div className="flex justify-center gap-3">
                                            <button className="bg-green-300 p-3 rounded-2xl text-white">
                                                Shop now
                                            </button>

                                            <button className="bg-orange-300 p-3 rounded-2xl text-white">
                                                Add to cart
                                            </button>
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

export default Collection;
