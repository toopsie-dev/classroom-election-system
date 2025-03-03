import { Classroom } from "../Dashboard/types";

interface ClassroomTableProps {
    classrooms: Classroom[];
    onEdit: (classroom: Classroom) => void;
    onDelete: (id: number) => void;
}

export const ClassroomTable = ({
    classrooms,
    onEdit,
    onDelete,
}: ClassroomTableProps) => {
    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/30 overflow-hidden">
            <table className="w-full text-left">
                <thead className="bg-gray-800/80">
                    <tr>
                        <th className="px-6 py-4 text-gray-300 font-semibold">
                            Name
                        </th>
                        <th className="px-6 py-4 text-gray-300 font-semibold">
                            President
                        </th>
                        <th className="px-6 py-4 text-gray-300 font-semibold">
                            Adviser
                        </th>
                        <th className="px-6 py-4 text-gray-300 font-semibold text-center">
                            Students
                        </th>
                        <th className="px-6 py-4 text-gray-300 font-semibold text-right">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/30">
                    {classrooms.map((classroom) => (
                        <tr key={classroom.id} className="hover:bg-gray-700/20">
                            <td className="px-6 py-4 text-white">
                                {classroom.name}
                            </td>
                            <td className="px-6 py-4">
                                <span className="text-white">
                                    {classroom.president}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <span className="text-blue-400">
                                    {classroom.adviser}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full">
                                    {classroom.totalStudents} students
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex justify-end space-x-3">
                                    <button
                                        className="text-blue-400 hover:text-blue-300 transition-colors"
                                        onClick={() => onEdit(classroom)}
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
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        className="text-red-400 hover:text-red-300 transition-colors"
                                        onClick={() => onDelete(classroom.id)}
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
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
