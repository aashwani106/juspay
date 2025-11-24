import React from 'react';
import { Plus, Filter, ArrowUpDown, Search, Calendar, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

const orders = [
    { id: '#CM9801', user: { name: 'Natali Craig', initials: 'NC', color: 'bg-blue-600' }, project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress', statusColor: 'text-blue-500' },
    { id: '#CM9802', user: { name: 'Kate Morrison', initials: 'KM', color: 'bg-purple-600' }, project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete', statusColor: 'text-green-500' },
    { id: '#CM9803', user: { name: 'Drew Cano', initials: 'DC', color: 'bg-indigo-600' }, project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending', statusColor: 'text-blue-300' },
    { id: '#CM9804', user: { name: 'Orlando Diggs', initials: 'OD', color: 'bg-cyan-500' }, project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved', statusColor: 'text-yellow-500' },
    { id: '#CM9805', user: { name: 'Andi Lane', initials: 'AL', color: 'bg-lime-500' }, project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected', statusColor: 'text-gray-400' },
    { id: '#CM9801', user: { name: 'Natali Craig', initials: 'NC', color: 'bg-blue-600' }, project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress', statusColor: 'text-blue-500' },
    { id: '#CM9802', user: { name: 'Kate Morrison', initials: 'KM', color: 'bg-purple-600' }, project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete', statusColor: 'text-green-500' },
    { id: '#CM9803', user: { name: 'Drew Cano', initials: 'DC', color: 'bg-indigo-600' }, project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending', statusColor: 'text-blue-300' },
    { id: '#CM9804', user: { name: 'Orlando Diggs', initials: 'OD', color: 'bg-cyan-500' }, project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved', statusColor: 'text-yellow-500' },
    { id: '#CM9805', user: { name: 'Andi Lane', initials: 'AL', color: 'bg-lime-500' }, project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected', statusColor: 'text-gray-400' },
];

const OrderList = () => {
    return (
        <div className="p-4 sm:p-6 max-w-7xl mx-auto">
            <h2 className="text-sm font-semibold mb-6 text-gray-900 dark:text-white">Order List</h2>

            <div className="bg-[#F7F9FB] dark:bg-[#262626] p-1.5 rounded-xl mb-6 flex items-center justify-between transition-colors duration-300">
                <div className="flex items-center gap-1">
                    <button className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-500 dark:text-gray-400">
                        <Plus size={18} />
                    </button>
                    <button className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-500 dark:text-gray-400">
                        <Filter size={18} />
                    </button>
                    <button className="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-500 dark:text-gray-400">
                        <ArrowUpDown size={18} />
                    </button>
                </div>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={14} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-9 pr-4 py-1.5 bg-white dark:bg-[#1C1C1C] border border-gray-200 dark:border-gray-700 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white w-32 sm:w-48 transition-colors"
                    />
                </div>
            </div>

            <div className="bg-white dark:bg-[#1C1C1C] rounded-none overflow-x-auto transition-colors duration-300">
                <table className="w-full min-w-[800px] text-xs text-left">
                    <thead>
                        <tr className="text-gray-400 border-b border-gray-100 dark:border-gray-800">
                            <th className="py-2 pl-4 w-10">
                                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5" />
                            </th>
                            <th className="py-2 font-normal">Order ID</th>
                            <th className="py-2 font-normal">User</th>
                            <th className="py-2 font-normal">Project</th>
                            <th className="py-2 font-normal hidden sm:table-cell">Address</th>
                            <th className="py-2 font-normal">Date</th>
                            <th className="py-2 font-normal">Status</th>
                            <th className="py-2 pr-4"></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-900 dark:text-gray-200">
                        {orders.map((order, index) => (
                            <tr key={index} className="border-b border-gray-50 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <td className="py-2 pl-4">
                                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5" />
                                </td>
                                <td className="py-2">{order.id}</td>
                                <td className="py-2">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-6 h-6 rounded-full ${order.user.color} flex items-center justify-center text-[10px] text-white font-medium`}>
                                            {order.user.initials}
                                        </div>
                                        <span>{order.user.name}</span>
                                    </div>
                                </td>
                                <td className="py-2">{order.project}</td>
                                <td className="py-2 hidden sm:table-cell">{order.address}</td>
                                <td className="py-2">
                                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                                        <Calendar size={12} />
                                        <span>{order.date}</span>
                                    </div>
                                </td>
                                <td className="py-2">
                                    <div className="flex items-center gap-1.5">
                                        <div className={`w-1.5 h-1.5 rounded-full bg-current ${order.statusColor}`}></div>
                                        <span className={order.statusColor}>{order.status}</span>
                                    </div>
                                </td>
                                <td className="py-2 pr-4 text-right text-gray-400">
                                    <MoreHorizontal size={14} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-end items-center gap-2 mt-6">
                <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                    <ChevronLeft size={16} />
                </button>
                <button className="w-6 h-6 flex items-center justify-center rounded bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-900 dark:text-white">1</button>
                <button className="w-6 h-6 flex items-center justify-center rounded text-xs font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400">2</button>
                <button className="w-6 h-6 flex items-center justify-center rounded text-xs font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400">3</button>
                <button className="w-6 h-6 flex items-center justify-center rounded text-xs font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400">4</button>
                <button className="w-6 h-6 flex items-center justify-center rounded text-xs font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400">5</button>
                <button className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default OrderList;
