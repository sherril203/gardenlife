import React from 'react'
import Navbar from '../../common/Navbar'
import Footer from '../../common/Footer'
import {useState,useEffect} from 'react'
const Contact = () => {
        const initialState = {
            name: '',
            email: '',
            Message:''
        };
    
        const [data, setdata] = useState(initialState);
        const API = import.meta.env.VITE_BACKEND_URL;
    
     const handleChange = (e) => {
        const { name, value } = e.target;

        setdata((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        if (!API) {
            console.error("Backend URL is missing");
            return;
        }

        try {
            const response = await fetch(`${API}/postfeed`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Feedback posting failed");
            }

            alert("Feedback posted successfully!");

            setdata(initialState);

        } catch (err) {
            console.error("Post error:", err);
            alert("Failed to submit feedback");
        }
    };
 return (
        <div>
            <Navbar />

            <div className="p-8 border-2 rounded-2xl mx-auto max-w-lg mt-15">

                <h2 className="text-xl font-semibold mb-5 flex justify-center">
                    Feedback Form
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <div>
                        <label className="block mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            required
                            className="border p-2 w-full rounded"
                        />
                    </div>

                    <div>
                        <label className="block mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            required
                            className="border p-2 w-full rounded"
                        />
                    </div>

                    <div>
                        <label className="block mb-1">Message</label>
                        <textarea
                            name="Message"
                            value={data.Message}
                            onChange={handleChange}
                            rows="3"
                            required
                            className="border p-2 w-full rounded"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-green-700 text-white py-2 px-5 rounded hover:bg-green-800"
                    >
                        Submit
                    </button>

                </form>
            </div>
            <br/>
            <Footer />
        </div>
    );

}

export default Contact
