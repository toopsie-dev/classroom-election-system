interface UserProfileProps {
    name: string;
    email: string;
    avatar?: string;
}

export const UserProfile = ({ name, email, avatar }: UserProfileProps) => {
    return (
        <div className="flex flex-col items-center mb-8 pb-6 border-b border-gray-700/30">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500/30 mb-4">
                <img
                    src={avatar}
                    alt="User avatar"
                    className="w-full h-full object-cover"
                />
            </div>
            <h3 className="text-white font-medium">{name}</h3>
            <p className="text-gray-400 text-sm">{email}</p>
        </div>
    );
};
