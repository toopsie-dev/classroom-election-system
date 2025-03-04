import { Link, useLocation } from "react-router-dom";
import { sidebarLinks } from "../../config/navigation";
import { UserProfile } from "./UserProfile";

interface SidebarProps {
    user: {
        name: string;
        email: string;
        avatar?: string;
    };
}

export const Sidebar = ({ user }: SidebarProps) => {
    const location = useLocation();

    return (
        <aside className="dashboard-sidebar">
            <UserProfile {...user} />
            <nav className="space-y-2">
                {sidebarLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={
                            "sidebar-link " +
                            (location.pathname === link.path ? "active" : "")
                        }
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={link.icon}
                            />
                        </svg>
                        <span>{link.name}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
};
