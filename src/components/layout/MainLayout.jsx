import React from 'react';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import Header from './Header';

const MainLayout = ({ children, currentView, onNavigate }) => {
    return (
        <div className="flex min-h-screen bg-white dark:bg-[#1C1C1C] transition-colors duration-300">
            <Sidebar currentView={currentView} onNavigate={onNavigate} />
            <div className="flex-1 flex flex-col min-w-0">
                <Header />
                <main className="flex-1 p-6 overflow-y-auto bg-white dark:bg-[#1C1C1C] transition-colors duration-300">
                    {children}
                </main>
            </div>
            <RightSidebar />
        </div>
    );
};

export default MainLayout;
