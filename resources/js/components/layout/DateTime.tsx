import { useEffect, useState } from "react";

export const DateTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatDate = (date: Date) => {
        return date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        });
    };

    return (
        <div className="flex items-center space-x-6">
            <div className="text-right">
                <p className="text-gray-400 text-sm">
                    {formatDate(currentTime)}
                </p>
                <p className="text-purple-400 font-medium">
                    {formatTime(currentTime)}
                </p>
            </div>
        </div>
    );
};
