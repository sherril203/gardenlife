
import React, { useState } from 'react';

const PostForm = () => {

    const initialState = {
        product_image: null,
        product_name: '',
        product_price: '',
        original_price: '',
        Description: '',
        Quantity: '',
        Category: '',
        Status:''
    };

    const [data, setdata] = useState(initialState);
    const API = import.meta.env.VITE_BACKEND_URL;

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setdata((prev) => ({
            ...prev,
            [name]: name === 'product_image' ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!API) {
            console.error("Backend URL is missing");
            return;
        }

        if (!data.product_image) {
            alert("Please select an image");
            return;
        }

        try {
            const formdata = new FormData();

            Object.entries(data).forEach(([key, value]) => {
                if (value !== null) {
                    formdata.append(key, value);
                }
            });

            const response = await fetch(`${API}/post`, {
                method: "POST",
                body: formdata
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Product posting failed");
            }

            alert("Product posted successfully!");
            setdata(initialState);
            e.target.reset();

        } catch (err) {
            console.error("Post error:", err);
        }
    };

  
return (
    <div className="p-8 border-2 rounded-2xl mx-auto max-w-lg mt-15 ">

        <h2 className="text-xl font-semibold mb-5 flex justify-center">
            Post Products
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">

            <div>
                <label className="block mb-1">Product Image</label>
                <input
                    type="file"
                    name="product_image"
                    accept="image/*"
                    onChange={handleChange}
                    required
                    className="border p-2 w-full rounded"
                />
            </div>

            <div>
                <label className="block mb-1">Product Name</label>
                <input
                    type="text"
                    name="product_name"
                    value={data.product_name}
                    onChange={handleChange}
                    required
                    className="border p-2 w-full rounded"
                />
            </div>

            <div>
                <label className="block mb-1">Product Price</label>
                <input
                    type="text"
                    name="product_price"
                    value={data.product_price}
                    onChange={handleChange}
                    required
                    className="border p-2 w-full rounded"
                />
            </div>

            <div>
                <label className="block mb-1">Original Price</label>
                <input
                    type="text"
                    name="original_price"
                    value={data.original_price}
                    onChange={handleChange}
                    className="border p-2 w-full rounded"
                />
            </div>

            <div>
                <label className="block mb-1">Description</label>
                <textarea
                    name="Description"
                    value={data.Description}
                    onChange={handleChange}
                    rows="3"
                    className="border p-2 w-full rounded"
                />
            </div>

            <div>
                <label className="block mb-1">Quantity</label>
                <input
                    type="number"
                    name="Quantity"
                    value={data.Quantity}
                    onChange={handleChange}
                    required
                    className="border p-2 w-full rounded"
                />
            </div>
            <div>
                <label className="block mb-1">Category</label>
                <select
                    name="Category"
                    value={data.Category}
                    onChange={handleChange}
                    required
                    className="border p-2 w-full rounded bg-white"
                >
                    <option value="">Select Category</option>
                    <option value="Indoor plants">Indoor plants</option>
                    <option value="Outdoor plants">Outdoor plants</option>
                     <option value="Bamboo plants">Bamboo plants</option>
                    <option value="Fruits and vegetable seeds">
                        Fruits and vegetable seeds
                    </option>
                    <option value="Soil">Soil</option>
                    <option value="Ferilizers">Fertilizers</option>
                </select>
            </div>
            <div>
                <label className="block mb-1">Stock Status</label>
                <select
                    name="Status"
                    value={data.Status}
                    onChange={handleChange}
                    required
                    className="border p-2 w-full rounded bg-white"
                >
                    <option value="">Select Status</option>
                    <option value="Available">Available</option>
                    <option value="Out of Stock">Out of Stock</option>
                    <option value=" low stock">
                        low stock
                    </option>
                </select>
            </div>

            <button
                type="submit"
                className="bg-green-700 text-white py-2 px-5 rounded hover:bg-green-800 max-w-lg"
            >
                Post
            </button>

        </form>
    </div>
);

};

export default PostForm;
