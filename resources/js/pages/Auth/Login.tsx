import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement login logic
        console.log("Login attempt:", formData);
    };

    return (
        <div className="auth-background flex items-center justify-center">
            <div className="auth-card-container">
                <div className="glass-card p-8 relative">
                    <div className="auth-icon-circle">
                        <svg
                            className="w-12 h-12 text-gray-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div>
                            <input
                                type="email"
                                placeholder="Email ID"
                                className="auth-input"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="auth-input"
                                value={formData.password}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        password: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center text-gray-300">
                                <input
                                    type="checkbox"
                                    className="auth-checkbox"
                                />
                                Remember me
                            </label>
                            <Link to="/forgot-password" className="auth-link">
                                Forgot Password?
                            </Link>
                        </div>

                        <button type="submit" className="auth-button">
                            Login
                        </button>

                        <p className="text-center text-gray-400">
                            Don't have an account?{" "}
                            <Link to="/signup" className="auth-link">
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};
