import React from 'react';
import {
    LayoutDashboard,
    ShoppingBag,
    FolderOpen,
    BookOpen,
    User,
    Settings,
    Users,
    FileText,
    MessageSquare,
    ChevronRight,
    ChevronDown,
    Dot
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active, hasSubmenu, expanded, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`flex items-center justify-between px-3 py-1.5 rounded-lg cursor-pointer text-sm mb-1 transition-colors ${active ? 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`}
        >
            <div className="flex items-center gap-2">
                {active && <div className="absolute left-0 w-1 h-4 bg-black dark:bg-white rounded-r-full" />}
                {Icon && <Icon size={16} />}
                {!Icon && <Dot size={16} />}
                <span>{label}</span>
            </div>
            {hasSubmenu && (
                expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />
            )}
        </div>
    );
};

const SectionHeader = ({ title }) => (
    <div className="px-3 mt-6 mb-2 text-xs font-medium text-gray-400 dark:text-gray-500">
        {title}
    </div>
);

const Sidebar = ({ currentView, onNavigate }) => {
    return (
        <div className="hidden lg:flex lg:w-56 xl:w-64 h-screen bg-white dark:bg-[#1C1C1C] border-r border-gray-100 dark:border-gray-800 flex-col p-4 sticky top-0 overflow-y-auto transition-colors duration-300">
            {/* User Profile */}
            <div className="flex items-center gap-3 mb-8 px-1">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <img src="https://ui-avatars.com/api/?name=Bye+Wind&background=random" alt="User" />
                </div>
                <span className="font-medium text-sm text-gray-900 dark:text-white">ByeWind</span>
            </div>

            <div className="flex-1">
                <div className="flex gap-4 px-1 mb-4 text-gray-400 text-sm">
                    <span className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300">Favorites</span>
                    <span className="cursor-pointer hover:text-gray-600 dark:hover:text-gray-300">Recently</span>
                </div>

                <ul className="space-y-1">
                    <SidebarItem label="Overview" icon={Dot} />
                    <SidebarItem label="Projects" icon={Dot} />
                </ul>

                <SectionHeader title="Dashboards" />
                <ul className="space-y-1">
                    <SidebarItem
                        label="Default"
                        icon={LayoutDashboard}
                        active={currentView === 'dashboard'}
                        onClick={() => onNavigate('dashboard')}
                    />
                    <SidebarItem
                        label="Order List"
                        icon={ShoppingBag}
                        active={currentView === 'orderList'}
                        onClick={() => onNavigate('orderList')}
                    />
                    <SidebarItem label="eCommerce" icon={ShoppingBag} />
                    <SidebarItem label="Projects" icon={FolderOpen} />
                    <SidebarItem label="Online Courses" icon={BookOpen} />
                </ul>

                <SectionHeader title="Pages" />
                <ul className="space-y-1">
                    <SidebarItem label="User Profile" icon={User} hasSubmenu expanded />
                    <div className="pl-6 space-y-1 mt-1">
                        <SidebarItem label="Overview" />
                        <SidebarItem label="Projects" />
                        <SidebarItem label="Campaigns" />
                        <SidebarItem label="Documents" />
                        <SidebarItem label="Followers" />
                    </div>
                    <SidebarItem label="Account" icon={Settings} hasSubmenu />
                    <SidebarItem label="Corporate" icon={Users} hasSubmenu />
                    <SidebarItem label="Blog" icon={FileText} hasSubmenu />
                    <SidebarItem label="Social" icon={MessageSquare} hasSubmenu />
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
