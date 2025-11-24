import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { name: 'Direct', value: 300.56, color: '#1C1C1C', darkColor: '#FFFFFF' },
    { name: 'Affiliate', value: 135.18, color: '#BAEDBD', darkColor: '#BAEDBD' },
    { name: 'Sponsored', value: 154.02, color: '#95A4FC', darkColor: '#95A4FC' },
    { name: 'E-mail', value: 48.96, color: '#B1E3FF', darkColor: '#B1E3FF' },
];

const TotalSalesChart = () => {
    // Chart data ordered visually: Sponsored -> Direct -> Affiliate -> E-mail (Clockwise from top-left)
    const chartData = [
        data[2], // Sponsored
        data[0], // Direct
        data[1], // Affiliate
        data[3], // E-mail
    ];

    return (
        <div className="bg-[#F7F9FB] dark:bg-[#262626] p-6 rounded-2xl h-full transition-colors duration-300 flex flex-col">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-6">Total Sales</h3>

            <div className="relative h-48 w-full flex items-center justify-center mb-6">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={60}
                            paddingAngle={5}
                            cornerRadius={10}
                            startAngle={120}
                            endAngle={-240}
                            dataKey="value"
                            stroke="none"
                        >
                            {chartData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.name === 'Direct' ? 'currentColor' : entry.color}
                                    className={entry.name === 'Direct' ? 'text-gray-900 dark:text-white' : ''}
                                />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value) => `$${value}`}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                    </PieChart>
                </ResponsiveContainer>

                {/* 38.6% Badge Overlay */}
                <div className="absolute top-[62%] left-[25%] bg-[#383838] text-white text-xs font-medium px-2 py-1 rounded-lg shadow-sm transform -translate-x-1/2 -translate-y-1/2">
                    38.6%
                </div>
            </div>

            <div className="space-y-4 mt-auto">
                {data.map((item) => (
                    <div key={item.name} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                            <div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: item.name === 'Direct' ? 'var(--color-direct)' : item.color }}
                            >
                                {/* Hack for Direct color in dark mode using CSS variable or class if possible,
                                    but inline style is tricky for dark mode.
                                    Let's use a class based approach for the dot. */}
                                <div className={`w-2 h-2 rounded-full ${item.name === 'Direct' ? 'bg-gray-900 dark:bg-white' : ''}`} style={{ backgroundColor: item.name !== 'Direct' ? item.color : undefined }}></div>
                            </div>
                            <span className="text-gray-600 dark:text-gray-300">{item.name}</span>
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white">${item.value.toFixed(2)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TotalSalesChart;
