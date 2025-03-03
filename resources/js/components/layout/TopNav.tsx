import { DateTime } from "./DateTime";

export const TopNav = () => {
    return (
        <nav className="dashboard-topnav">
            <div className="flex items-center space-x-4">
                <h1 className="text-xl font-semibold text-white">
                    C-Election System
                </h1>
            </div>
            <DateTime />
        </nav>
    );
};
