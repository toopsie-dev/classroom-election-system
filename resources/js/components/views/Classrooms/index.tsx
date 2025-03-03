import { useMemo, useState } from "react";
import { Sidebar } from "../../layout/Sidebar";
import { TopNav } from "../../layout/TopNav";
import { Classroom, User } from "../Dashboard/types";
import { AddClassroomButton } from "./AddClassroomButton";
import { ClassroomModal } from "./ClassroomModal";
import { ClassroomSearch } from "./ClassroomSearch";
import { ClassroomTable } from "./ClassroomTable";

const mockUser: User = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://ui-avatars.com/api/?name=John+Doe&background=7C3AED&color=fff",
    role: "student",
};

const mockClassrooms: Classroom[] = [
    {
        id: 1,
        name: "Class A",
        president: "Alice Smith",
        adviser: "Dr. John Smith",
        totalStudents: 30,
    },
    {
        id: 2,
        name: "Class B",
        president: "Bob Johnson",
        adviser: "Prof. Sarah Wilson",
        totalStudents: 25,
    },
    {
        id: 3,
        name: "Class C",
        president: "Carol White",
        adviser: "Dr. Michael Brown",
        totalStudents: 28,
    },
    {
        id: 4,
        name: "Class D",
        president: "David Brown",
        adviser: "Prof. Emily Davis",
        totalStudents: 32,
    },
    {
        id: 5,
        name: "Class E",
        president: "Emily Green",
        adviser: "Dr. Robert Taylor",
        totalStudents: 35,
    },
    {
        id: 6,
        name: "Class F",
        president: "Frank White",
        adviser: "Prof. Lisa Anderson",
        totalStudents: 38,
    },
    {
        id: 7,
        name: "Class G",
        president: "George Brown",
        adviser: "Dr. James Wilson",
        totalStudents: 40,
    },
    {
        id: 8,
        name: "Class H",
        president: "Helen Green",
        adviser: "Prof. Mary Johnson",
        totalStudents: 42,
    },
];

export const Classrooms = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [classrooms, setClassrooms] = useState<Classroom[]>(mockClassrooms);
    const [selectedClassroom, setSelectedClassroom] = useState<
        Classroom | undefined
    >();

    const filteredClassrooms = useMemo(() => {
        const searchLower = searchTerm.toLowerCase();
        return classrooms.filter(
            (classroom) =>
                classroom.name.toLowerCase().includes(searchLower) ||
                classroom.president.toLowerCase().includes(searchLower) ||
                classroom.adviser.toLowerCase().includes(searchLower)
        );
    }, [classrooms, searchTerm]);

    const handleDelete = (id: number) => {
        setClassrooms(classrooms.filter((classroom) => classroom.id !== id));
    };

    const handleEdit = (classroom: Classroom) => {
        setSelectedClassroom(classroom);
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setSelectedClassroom(undefined);
        setIsModalOpen(true);
    };

    const handleSave = (classroomData: Omit<Classroom, "id">) => {
        if (selectedClassroom) {
            // Edit existing classroom
            setClassrooms(
                classrooms.map((classroom) =>
                    classroom.id === selectedClassroom.id
                        ? { ...classroom, ...classroomData }
                        : classroom
                )
            );
        } else {
            // Add new classroom
            const newClassroom = {
                ...classroomData,
                id: Math.max(...classrooms.map((c) => c.id)) + 1,
            };
            setClassrooms([...classrooms, newClassroom]);
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
                            Classrooms
                        </h1>
                        <AddClassroomButton onClick={handleAdd} />
                    </div>

                    <ClassroomSearch
                        searchTerm={searchTerm}
                        onSearchChange={setSearchTerm}
                    />

                    <ClassroomTable
                        classrooms={filteredClassrooms}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />

                    <ClassroomModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onSave={handleSave}
                        classroom={selectedClassroom}
                    />
                </main>
            </div>
        </div>
    );
};
