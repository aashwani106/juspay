import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', current: 15, previous: 10 },
    { name: 'Feb', current: 10, previous: 18 },
    { name: 'Mar', current: 11, previous: 15 },
    { name: 'Apr', current: 18, projection: 18, previous: 12 },
    { name: 'May', projection: 22, previous: 16 },
    { name: 'Jun', projection: 22, previous: 25 },
];

const RevenueChart = () => {
    return (
        <div className="bg-[#F7F9FB] dark:bg-[#262626] p-6 rounded-2xl h-full transition-colors duration-300">
            <div className="flex items-center gap-6 mb-8">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-700 pr-6 py-1">Revenue</h3>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white"></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">Current Week <span className="font-semibold text-gray-900 dark:text-white ml-1">$58,211</span></span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">Previous Week <span className="font-semibold text-gray-900 dark:text-white ml-1">$68,768</span></span>
                </div>
            </div>

            <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" className="dark:stroke-gray-700" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            dy={10}
                            padding={{ left: 20, right: 20 }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            tickCount={4}
                            domain={[0, 30]}
                            tickFormatter={(value) => `${value}M`}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        {/* Solid Current Week Line */}
                        <Line
                            type="monotone"
                            dataKey="current"
                            stroke="currentColor"
                            className="text-gray-900 dark:text-white"
                            strokeWidth={2}
                            dot={false}
                        />
                        {/* Dashed Projection Line */}
                        <Line
                            type="monotone"
                            dataKey="projection"
                            stroke="currentColor"
                            className="text-gray-900 dark:text-white"
                            strokeWidth={2}
                            strokeDasharray="4 4"
                            dot={false}
                        />
                        {/* Previous Week Line */}
                        <Line
                            type="monotone"
                            dataKey="previous"
                            stroke="#A8C5DA"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RevenueChart;
