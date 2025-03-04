import apiService from "@/services/api";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface SignupFormData {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const initialFormData: SignupFormData = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
};

export const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<SignupFormData>(initialFormData);
    const [error, setError] = useState<string>("");

    const signupMutation = useMutation({
        mutationFn: async (data: SignupFormData) => {
            const response = await apiService.post<{ message: string }>(
                "/signup",
                data
            );
            return response.data;
        },
        onSuccess: (data) => {
            setFormData(initialFormData);
            navigate("/login");
        },
        onError: (error) => {
            setError("Signup failed. Please try again.");
            console.error("Signup error:", error);
        },
    });

    const validateForm = (): boolean => {
        if (formData.password !== formData.password_confirmation) {
            setError("Passwords do not match");
            return false;
        }
        if (formData.password.length < 8) {
            setError("Password must be at least 8 characters long");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!validateForm()) return;

        signupMutation.mutate(formData);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
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
                                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                            />
                        </svg>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        {error && (
                            <div className="text-red-500 text-sm text-center">
                                {error}
                            </div>
                        )}
                        {signupMutation.isSuccess && (
                            <div className="text-green-500 text-sm text-center">
                                Account created successfully! Redirecting to
                                login...
                            </div>
                        )}

                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                className="auth-input"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                disabled={signupMutation.isPending}
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email ID"
                                className="auth-input"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                disabled={signupMutation.isPending}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="auth-input"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                                disabled={signupMutation.isPending}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password_confirmation"
                                placeholder="Confirm Password"
                                className="auth-input"
                                value={formData.password_confirmation}
                                onChange={handleInputChange}
                                required
                                disabled={signupMutation.isPending}
                            />
                        </div>

                        <button
                            type="submit"
                            className="auth-button"
                            disabled={signupMutation.isPending}
                        >
                            {signupMutation.isPending
                                ? "Signing up..."
                                : "Sign up"}
                        </button>

                        <p className="text-center text-gray-400">
                            Already have an account?{" "}
                            <Link to="/login" className="auth-link">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};
