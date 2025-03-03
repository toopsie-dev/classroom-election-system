interface StatsCardProps {
    title: string;
    value: number;
    icon: string;
}

export const StatsCard = ({ title, value, icon }: StatsCardProps) => {
    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-700/30">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-gray-400 text-sm">{title}</p>
                    <p className="text-3xl font-semibold text-white mt-2">
                        {value}
                    </p>
                </div>
                <div className="bg-purple-500/10 p-3 rounded-lg">
                    <svg
                        className="w-8 h-8 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={icon}
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};
