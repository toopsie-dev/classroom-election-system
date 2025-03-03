import { User } from "../Dashboard/types";

interface UserTableProps {
    users: User[];
    onEdit: (user: User) => void;
    onDelete: (id: number) => void;
}

export const UserTable = ({ users, onEdit, onDelete }: UserTableProps) => {
    const getRoleColor = (role: User["role"]) => {
        switch (role) {
            case "admin":
                return "text-red-400";
            case "teacher":
                return "text-blue-400";
            case "student":
                return "text-green-400";
            default:
                return "text-gray-400";
        }
    };

    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/30 overflow-hidden">
            <table className="w-full text-left">
                <thead className="bg-gray-800/80">
                    <tr>
                        <th className="px-6 py-4 text-gray-300 font-semibold">
                            Name
                        </th>
                        <th className="px-6 py-4 text-gray-300 font-semibold">
                            Email
                        </th>
                        <th className="px-6 py-4 text-gray-300 font-semibold">
                            Role
                        </th>
                        <th className="px-6 py-4 text-gray-300 font-semibold">
                            Classroom
                        </th>
                        <th className="px-6 py-4 text-gray-300 font-semibold text-right">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/30">
                    {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-700/20">
                            <td className="px-6 py-4">
                                <div className="flex items-center space-x-3">
                                    <img
                                        src={user.avatar}
                                        alt={user.name}
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span className="text-white">
                                        {user.name}
                                    </span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-gray-300">
                                {user.email}
                            </td>
                            <td className="px-6 py-4">
                                <span
                                    className={`capitalize ${getRoleColor(
                                        user.role
                                    )}`}
                                >
                                    {user.role}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                {user.classroom ? (
                                    <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full">
                                        {user.classroom}
                                    </span>
                                ) : (
                                    <span className="text-gray-500">
                                        Not assigned
                                    </span>
                                )}
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex justify-end space-x-3">
                                    <button
                                        className="text-blue-400 hover:text-blue-300 transition-colors"
                                        onClick={() => onEdit(user)}
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        className="text-red-400 hover:text-red-300 transition-colors"
                                        onClick={() => onDelete(user.id)}
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
