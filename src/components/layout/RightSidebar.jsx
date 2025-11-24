import React from 'react';
import { Bug, UserPlus, Radio, User } from 'lucide-react';

const NotificationItem = ({ icon: Icon, title, time, active }) => (
    <div className="flex gap-3 mb-4 items-start">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${active ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}>
            <Icon size={16} />
        </div>
        <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">{title}</p>
            <p className="text-xs text-gray-400 mt-0.5">{time}</p>
        </div>
    </div>
);

const ActivityItem = ({ avatar, title, time }) => (
    <div className="flex gap-3 mb-4 items-start relative">
        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden flex-shrink-0 z-10">
            <img src={avatar} alt="User" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
            <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">{title}</p>
            <p className="text-xs text-gray-400 mt-0.5">{time}</p>
        </div>
        {/* Vertical line for timeline effect - simplified */}
        <div className="absolute left-4 top-8 bottom-[-16px] w-px bg-gray-200 dark:bg-gray-800 -z-0 last:hidden"></div>
    </div>
);

const ContactItem = ({ avatar, name }) => (
    <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <span className="text-sm font-medium text-gray-900 dark:text-white">{name}</span>
    </div>
);

const RightSidebar = () => {
    return (
        <div className="w-72 h-screen bg-white dark:bg-[#1C1C1C] border-l border-gray-100 dark:border-gray-800 p-5 sticky top-0 overflow-y-auto hidden xl:block transition-colors duration-300">
            <div className="mb-8">
                <h3 className="font-semibold text-sm mb-4 text-gray-900 dark:text-white">Notifications</h3>
                <NotificationItem
                    icon={Bug}
                    title="You have a bug that needs..."
                    time="Just now"
                />
                <NotificationItem
                    icon={UserPlus}
                    title="New user registered"
                    time="59 minutes ago"
                />
                <NotificationItem
                    icon={Bug}
                    title="You have a bug that needs..."
                    time="12 hours ago"
                />
                <NotificationItem
                    icon={Radio}
                    title="Andi Lane subscribed to you"
                    time="Today, 11:59 AM"
                />
            </div>

            <div className="mb-8">
                <h3 className="font-semibold text-sm mb-4 text-gray-900 dark:text-white">Activities</h3>
                <ActivityItem
                    avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=faces"
                    title="You have a bug that needs..."
                    time="Just now"
                />
                <ActivityItem
                    avatar="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces"
                    title="Released a new version"
                    time="59 minutes ago"
                />
                <ActivityItem
                    avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces"
                    title="Submitted a bug"
                    time="12 hours ago"
                />
                <ActivityItem
                    avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
                    title="Modified A data in Page X"
                    time="Today, 11:59 AM"
                />
                <ActivityItem
                    avatar="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop&crop=faces"
                    title="Deleted a page in Project X"
                    time="Feb 2, 2023"
                />
            </div>

            <div>
                <h3 className="font-semibold text-sm mb-4 text-gray-900 dark:text-white">Contacts</h3>
                <ContactItem name="Natali Craig" avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces" />
                <ContactItem name="Drew Cano" avatar="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=faces" />
                <ContactItem name="Orlando Diggs" avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=faces" />
                <ContactItem name="Andi Lane" avatar="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces" />
                <ContactItem name="Kate Morrison" avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces" />
                <ContactItem name="Koray Okumus" avatar="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop&crop=faces" />
            </div>
        </div>
    );
};

export default RightSidebar;
