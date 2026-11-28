import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
const Login = () => {
    
    const initialState={
        email:"",
        password:""
    }
    const [data,setdata]=useState(initialState)
     const API = import.meta.env.VITE_BACKEND_URL;

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setdata((prev)=>({
          ...prev,
          [name]:value
        }))
    }
    const handleSubmit=async(e)=>{
        try{
            const response=await fetch(`${API}/`,{
                method:"POST",
                headers:{
                    "Content-Type":"applicataion/json"
                },
                body:JSON.stringify(data)
            })
            const result=await response.json()
            alert("login successfully")
            setdata(initialState)
        }
        catch(err){
alert("login failed");
        }
    }
 return (
        <div>
            <div className="p-8 border-2 rounded-2xl mx-auto max-w-100 mt-15">

                <h2 className="text-xl font-semibold mb-5 flex justify-center">
                    Login Form
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                 

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
                        <label className="block mb-1">Password</label>
                        <input
                            type="text"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            required
                            className="border p-2 w-full rounded"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-green-700 text-white py-2 px-5 rounded hover:bg-green-800"
                    >
                        Login
                    </button>
                    <p> new account <Link to="/signup" className='text-blue-500'>Sign up</Link></p>
                    
                </form>
            </div>
            <br/>
        </div>
    );
}

export default Login
