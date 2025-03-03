import { useMemo, useState } from "react";
import { Sidebar } from "../../layout/Sidebar";
import { TopNav } from "../../layout/TopNav";
import { User } from "../Dashboard/types";
import { AddUserButton } from "./AddUserButton";
import { UserModal } from "./UserModal";
import { UserSearch } from "./UserSearch";
import { UserTable } from "./UserTable";

const mockUser: User = {
    id: 0,
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://ui-avatars.com/api/?name=John+Doe&background=7C3AED&color=fff",
    role: "admin",
};

const mockUsers: User[] = [
    {
        id: 1,
        name: "Alice Smith",
        email: "alice@example.com",
        avatar: "https://ui-avatars.com/api/?name=Vhin+Lilis&background=7C3AED&color=fff",
        role: "student",
        classroom: "Class A",
    },
    {
        id: 2,
        name: "Bob Johnson",
        email: "bob@example.com",
        avatar: "https://ui-avatars.com/api/?name=Bob+Johnson&background=7C3AED&color=fff",
        role: "student",
        classroom: "Class B",
    },
    {
        id: 3,
        name: "Dr. John Smith",
        email: "john.smith@example.com",
        avatar: "https://ui-avatars.com/api/?name=John+Smith&background=7C3AED&color=fff",
        role: "teacher",
        classroom: "Class A",
    },
    {
        id: 4,
        name: "Prof. Sarah Wilson",
        email: "sarah@example.com",
        avatar: "https://ui-avatars.com/api/?name=Sarah+Wilson&background=7C3AED&color=fff",
        role: "teacher",
        classroom: "Class B",
    },
    {
        id: 5,
        name: "Admin User",
        email: "admin@example.com",
        avatar: "https://ui-avatars.com/api/?name=Admin+User&background=7C3AED&color=fff",
        role: "admin",
    },
];

const mockClassrooms = ["Class A", "Class B", "Class C", "Class D"];

export const Users = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [users, setUsers] = useState<User[]>(mockUsers);
    const [selectedUser, setSelectedUser] = useState<User | undefined>();

    const filteredUsers = useMemo(() => {
        const searchLower = searchTerm.toLowerCase();
        return users.filter(
            (user) =>
                user.name.toLowerCase().includes(searchLower) ||
                user.email.toLowerCase().includes(searchLower) ||
                user.role.toLowerCase().includes(searchLower) ||
                (user.classroom?.toLowerCase() || "").includes(searchLower)
        );
    }, [users, searchTerm]);

    const handleDelete = (id: number) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const handleEdit = (user: User) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setSelectedUser(undefined);
        setIsModalOpen(true);
    };

    const handleSave = (userData: Omit<User, "id" | "avatar">) => {
        if (selectedUser) {
            // Edit existing user
            setUsers(
                users.map((user) =>
                    user.id === selectedUser.id
                        ? {
                              ...user,
                              ...userData,
                          }
                        : user
                )
            );
        } else {
            // Add new user
            const newUser = {
                ...userData,
                id: Math.max(...users.map((u) => u.id)) + 1,
                avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    userData.name
                )}&background=7C3AED&color=fff`,
            };
            setUsers([...users, newUser]);
        }
    };

    return (
        <div className="dashboard-layout">
            <Sidebar user={mockUser} />
            <div className="dashboard-main">
                <TopNav />
                <main className="p-20">
                    <div className="flex justify-between items-center mb-10">
                        <h1 className="text-4xl font-semibold text-white">
                            Users
                        </h1>
                        <AddUserButton onClick={handleAdd} />
                    </div>

                    <UserSearch
                        searchTerm={searchTerm}
                        onSearchChange={setSearchTerm}
                    />

                    <UserTable
                        users={filteredUsers}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />

                    <UserModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onSave={handleSave}
                        user={selectedUser}
                        classrooms={mockClassrooms}
                    />
                </main>
            </div>
        </div>
    );
};
