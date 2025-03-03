import { useState } from "react";
import { Classroom } from "../Dashboard/types";

interface ClassroomModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (classroom: Omit<Classroom, "id">) => void;
    classroom?: Classroom;
}

export const ClassroomModal = ({
    isOpen,
    onClose,
    onSave,
    classroom,
}: ClassroomModalProps) => {
    const [formData, setFormData] = useState({
        name: classroom?.name || "",
        president: classroom?.president || "",
        adviser: classroom?.adviser || "",
        totalStudents: classroom?.totalStudents || 0,
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-white mb-6">
                    {classroom ? "Edit" : "Add"} Classroom
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            className="block text-gray-300 mb-2"
                            htmlFor="name"
                        >
                            Classroom Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                            className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>
                    <div>
                        <label
                            className="block text-gray-300 mb-2"
                            htmlFor="adviser"
                        >
                            Adviser Name
                        </label>
                        <input
                            type="text"
                            id="adviser"
                            value={formData.adviser}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    adviser: e.target.value,
                                })
                            }
                            className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
                        >
                            {classroom ? "Save Changes" : "Add Classroom"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
