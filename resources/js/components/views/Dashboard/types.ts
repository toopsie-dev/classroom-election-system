export interface Classroom {
    id: number;
    name: string;
    president: string;
    adviser: string;
    totalStudents: number;
}

export interface Stats {
    title: string;
    value: number;
    icon: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
    role: "admin" | "teacher" | "student";
    classroom?: string;
}
