import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

interface UserSearchProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
}

export const UserSearch: React.FC<UserSearchProps> = ({
    searchTerm,
    onSearchChange,
}) => {
    return (
        <div className="relative mb-6">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
                type="text"
                placeholder="Search users by name, email, role or classroom..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500"
            />
        </div>
    );
};
