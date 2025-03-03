interface AddClassroomButtonProps {
    onClick: () => void;
}

export const AddClassroomButton = ({ onClick }: AddClassroomButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors"
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
                    d="M12 4v16m8-8H4"
                />
            </svg>
            <span>Add Classroom</span>
        </button>
    );
};
