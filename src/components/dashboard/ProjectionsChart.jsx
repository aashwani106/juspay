import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', projection: 22, actual: 18 },
    { name: 'Feb', projection: 28, actual: 22 },
    { name: 'Mar', projection: 24, actual: 20 },
    { name: 'Apr', projection: 30, actual: 24 },
    { name: 'May', projection: 20, actual: 16 },
    { name: 'Jun', projection: 26, actual: 22 },
];

const ProjectionsChart = () => {
    return (
        <div className="bg-[#F7F9FB] dark:bg-[#262626] p-6 rounded-2xl h-full transition-colors duration-300">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-6">Projections vs Actuals</h3>
            <div className="h-[160px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} barSize={24} barGap={-24}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" className="dark:stroke-gray-700" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            tickCount={4}
                        />
                        <Tooltip
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar dataKey="projection" fill="#E5ECF6" radius={[4, 4, 0, 0]} className="dark:fill-gray-700" />
                        <Bar dataKey="actual" fill="#A8C5DA" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ProjectionsChart;
