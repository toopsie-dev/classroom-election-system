interface ClassroomCardProps {
    name: string;
    president: string;
    totalStudents: number;
}

export const ClassroomCard = ({
    name,
    president,
    totalStudents,
}: ClassroomCardProps) => {
    return (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-white mb-4">{name}</h3>
            <div className="space-y-2">
                <p className="text-gray-300">
                    President:{" "}
                    <span className="text-purple-400">{president}</span>
                </p>
                <p className="text-gray-300">Total Students: {totalStudents}</p>
            </div>
        </div>
    );
};
