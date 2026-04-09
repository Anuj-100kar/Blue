import React from 'react'
import { useState, useEffect } from 'react'
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { API_BASE_URL } from '../../config';
import ProtectedRoute from '../../components/ProtectedRoute';



const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [darkMode, setDarkMode] = useState(true);


    const navigate = useNavigate();
    const handlelogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }
        try {

            const res = await axios.post(`${API_BASE_URL}/api/user/login`, {
                email, password
            });

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));

            navigate('/user')
            console.log(res.data);
        } catch (error) {
            console.error(error);
            if (error.response?.status === 404) {
                alert("User not found");
            } else if (error.response?.status === 401) {
                alert("Invalid password");
            } else {
                alert("Login failed ❌");
            }
        }
    };

    useEffect(() => {
        const html = document.documentElement;
        if (darkMode) {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
            <div className="absolute top-4 right-4 md:top-36 md:right-28 z-10">
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-sm rounded border border-gray-400 dark:border-gray-600 hover:opacity-80"
                >
                    {darkMode ? " Light Mode" : " Dark Mode"}
                </button>
            </div>
            {/* Left Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-16 md:px-10 py-8">
                <h1 className="text-4xl font-bold mb-6 leading-tight">
                    Navigate the <br /> Markets with <br /> Confidence
                </h1>

                <div className="flex flex-wrap gap-3 mb-10">
                    <button className="bg-white text-black dark:bg-gray-800 dark:text-white text-sm font-medium px-4 py-2 rounded-full border border-gray-700">
                        Advanced Technical Analysis/Charting Tools
                    </button>
                    <button className="bg-white text-black dark:bg-gray-800 dark:text-white text-sm font-medium px-4 py-2 rounded-full border border-gray-700">
                        Community Feeds
                    </button>
                    <button className="bg-white text-black dark:bg-gray-800 dark:text-white text-sm font-medium px-4 py-2 rounded-full border border-gray-700">
                        Customizable UI for Your Trading Style
                    </button>
                    <button className="bg-white text-black dark:bg-gray-800 dark:text-white text-sm font-medium px-4 py-2 rounded-full border border-gray-700">
                        Customer Support
                    </button>
                </div>

                <div className="text-sm text-gray-400">
                    <p className="italic">
                        Game changing trading software that helped me{" "}
                        <strong className="text-white">analyze market trends</strong> and{" "}
                        <strong className="text-white">make better decisions</strong>.
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                        <img
                            src={assets.prof}
                            alt="profile"
                            className="rounded-full w-8 h-8"
                        />
                        <span className="text-xs text-white">
                            Aaron O'Donnell — <span className="text-cyan-400">Pro Account</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 md:px-10 py-8">
                <div className="w-full max-w-md">
                    <div className="flex gap-2 mb-4">
                        <button className="flex-1 bg-black text-white dark:bg-white dark:text-black  px-4 py-2 rounded font-medium">
                            Sign up with Google
                        </button>
                        <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded font-medium">
                            Sign up with Facebook
                        </button>
                    </div>

                    <div className="space-y-4">


                        <input
                            type="email"
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password}
                            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
                        />
                        
                        <p className="text-xs text-gray-500">
                            At least 8 characters, with numbers and symbols.
                        </p>
                        <div className="flex justify-between items-center text-sm">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="accent-cyan-500" />
                                Remember this device
                            </label>

                            <Link to="/user/forgot-password" className="text-cyan-400 hover:underline">
                                Forgot Password?
                            </Link>
                        </div>

                        <button type='submit' className="w-full bg-cyan-500 text-black font-semibold py-2 rounded hover:bg-cyan-400 transition"
                        onClick={handlelogin}>
                            Login
                        </button>
                        <p className="text-sm text-gray-400 text-center mt-4">
                            Don’t have an account?{" "}
                            <Link to="/user/sign-up" className="text-cyan-400 hover:underline">
                                Create Account
                            </Link>
                        </p>

                        <p className="text-xs text-gray-500 mt-2">
                            By signing up, you agree to our{" "}
                            <span className="underline text-white">terms of service</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserLogin
