import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";

interface AddUserButtonProps {
    onClick: () => void;
}

export const AddUserButton: React.FC<AddUserButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
            <PlusIcon className="w-5 h-5 mr-2" />
            Add User
        </button>
    );
};
