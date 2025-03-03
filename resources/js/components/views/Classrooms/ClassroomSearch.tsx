interface ClassroomSearchProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
}

export const ClassroomSearch = ({
    searchTerm,
    onSearchChange,
}: ClassroomSearchProps) => {
    return (
        <div className="mb-6">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search classrooms..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full bg-gray-800/50 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700/30"
                />
                <svg
                    className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
        </div>
    );
};
