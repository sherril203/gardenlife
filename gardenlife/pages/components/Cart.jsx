
import React, { useState, useEffect } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';

const Cart = () => {

    const [data, setdata] = useState(null);
    const [loading, setLoading] = useState(true);

    const API = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();
    // GET PRODUCTS
    const getCartdata = async () => {
        try {
            const response = await fetch(`${API}/getcart`);

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
        getCartdata();
    }, []);
   const removeCart = async (id) => {
    try {
        const response = await fetch(`${API}/deletecart/${id}`, {
            method: "DELETE"
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Failed to remove cart");
        }

        // Refresh cart after deletion
        getCartdata();

    } catch (error) {
        console.error("Delete error:", error.message);
    }
};

    return (
        <div>
            <Navbar />
            <div className="p-5">

                <h2 className="text-2xl font-bold mb-5">
                   Cart
                </h2>

                {loading ? (
                    <p className="text-center p-5">Loading products...</p>
                ) : data.length === 0 ? (
                    <p className="text-center p-5">
                        No cart products available.
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
                                            <button className='bg-green-300 p-3 rounded-2xl text-white'>Shop now</button>
                                            <button className='bg-orange-300 p-3 rounded-2xl text-white'
                                             onClick={() => removeCart(product._id)}>Remove Cart</button>
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
}

export default Cart;
