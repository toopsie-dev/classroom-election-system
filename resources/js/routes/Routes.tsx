import { Classrooms } from "@/components/views/Classrooms";
import { Dashboard } from "@/components/views/Dashboard";
import { Users } from "@/components/views/Users";
import { Login, Signup } from "@/pages/Auth";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/classrooms" element={<Classrooms />} />
            <Route path="/users" element={<Users />} />
        </Routes>
    );
};
