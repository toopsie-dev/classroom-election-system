import { Sidebar } from "../../layout/Sidebar";
import { TopNav } from "../../layout/TopNav";
import { ClassroomCard } from "./ClassroomCard";
import { StatsCard } from "./StatsCard";
import { Classroom, Stats, User } from "./types";

const mockUser: User = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://ui-avatars.com/api/?name=John+Doe&background=7C3AED&color=fff",
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
        totalStudents: 28,
        adviser: "",
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
        adviser: "Dr. Michael Brown",
        totalStudents: 40,
    },
    {
        id: 8,
        name: "Class H",
        president: "Helen Green",
        adviser: "Prof. Sarah Wilson",
        totalStudents: 42,
    },
];

const stats: Stats[] = [
    {
        title: "Total Classrooms",
        value: mockClassrooms.length,
        icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z",
    },
    {
        title: "Total Users",
        value: 256,
        icon: "M12 4.354a4 4 0 110 5.292V12H5.69a4 4 0 110-5.292V4.354a4 4 0 110 5.292v2.354A4 4 0 1112 4.354z",
    },
    {
        title: "Total Candidates",
        value: 32,
        icon: "M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z",
    },
];

export const Dashboard = () => {
    return (
        <div className="dashboard-layout">
            <Sidebar user={mockUser} />
            <div className="dashboard-main">
                <TopNav />
                <main className="p-20">
                    {/* Stats Section */}
                    <div className="flex items-center space-x-4">
                        <h1 className="text-4xl font-semibold text-white mb-10">
                            Dashboard
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {stats.map((stat) => (
                            <StatsCard key={stat.title} {...stat} />
                        ))}
                    </div>

                    {/* Classroom Presidents Section */}
                    <div className="flex items-center space-x-4">
                        <h1 className="text-2xl font-semibold text-white mb-10">
                            Classroom Presidents
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {mockClassrooms.map((classroom) => (
                            <ClassroomCard key={classroom.id} {...classroom} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};
