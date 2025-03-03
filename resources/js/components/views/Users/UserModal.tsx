import { useState } from "react";
import { User } from "../Dashboard/types";

interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (userData: Omit<User, "id" | "avatar">) => void;
    user?: User;
    classrooms: string[];
}

export const UserModal = ({
    isOpen,
    onClose,
    onSave,
    user,
    classrooms,
}: UserModalProps) => {
    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        role: user?.role || "student",
        classroom: user?.classroom || "",
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-white mb-6">
                    {user ? "Edit" : "Add"} User
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            className="block text-gray-300 mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                            className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="block text-gray-300 mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                            className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="block text-gray-300 mb-2"
                            htmlFor="role"
                        >
                            Role
                        </label>
                        <select
                            id="role"
                            value={formData.role}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    role: e.target.value as User["role"],
                                })
                            }
                            className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        >
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div>
                        <label
                            className="block text-gray-300 mb-2"
                            htmlFor="classroom"
                        >
                            Classroom
                        </label>
                        <select
                            id="classroom"
                            value={formData.classroom}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    classroom: e.target.value,
                                })
                            }
                            className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="">Not assigned</option>
                            {classrooms.map((classroom) => (
                                <option key={classroom} value={classroom}>
                                    {classroom}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
                        >
                            {user ? "Save Changes" : "Add User"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
