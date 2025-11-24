import React from 'react';
import {
    Sidebar,
    Star,
    Search,
    Sun,
    Moon,
    History,
    Bell,
    PanelRight
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="h-16 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between px-6 bg-white dark:bg-[#1C1C1C] transition-colors duration-300">
            <div className="flex items-center gap-4">
                <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <Sidebar size={20} />
                </button>
                <button className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300">
                    <Star size={20} />
                </button>
                <div className="flex items-center text-sm text-gray-400 breadcrumbs">
                    <span className="hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer">Dashboards</span>
                    <span className="mx-2">/</span>
                    <span className="text-gray-900 dark:text-white font-medium">Default</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative">
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-gray-100 dark:bg-gray-800 border-none rounded-lg pl-9 pr-4 py-1.5 text-sm w-48 focus:ring-2 focus:ring-blue-100 dark:focus:ring-gray-700 focus:outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                    />
                    <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">⌘/</span>
                </div>

                <button onClick={toggleTheme} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
                <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <History size={20} />
                </button>
                <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <Bell size={20} />
                </button>
                <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <PanelRight size={20} />
                </button>
            </div>
        </header>
    );
};

export default Header;
