import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Make API request to login
        fetch("http://localhost:5000/apiTender/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Store response in local storage

                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user.data));
                // Navigate to the desired page
                const user = data.user.data
                if(user.userRole == "admin") navigate("/dashboard/admin");
                else navigate("/");
                console.log("Login successful");
            })
            .catch((error) => {
                // Handle error
                console.error(error);
            });

    };

    return (
        <>
            <Navbar />

            <div className="min-h-screen flex justify-center items-center">
                <div className="p-6 bg-white rounded-lg shadow-md flex">
                    <div className="w-1/2">
                        <img
                            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            alt="Illustration"
                        />
                    </div>
                    <div className="w-1/2 bg-white">
                        <h1 className="text-3xl font-bold mb-4">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    placeholder="Enter your email"
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    placeholder="Enter your password"
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <button
                                    className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                    type="submit"
                                >
                                    Sign In
                                </button>
                                <a
                                    className="text-red-700 hover:text-red-800 text-sm font-medium cursor-pointer"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                        </form>
                        <div className="text-center">
                            Don't have an account?{" "}
                            <Link
                                to="/signup"
                                className="text-red-700 hover:text-red-800 text-sm font-medium"
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
