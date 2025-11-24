import React from 'react';
import StatCard from './StatCard';
import ProjectionsChart from './ProjectionsChart';
import RevenueChart from './RevenueChart';
import LocationCard from './LocationCard';
import TotalSalesChart from './TotalSalesChart';

const Dashboard = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-sm font-semibold mb-6 text-gray-900 dark:text-white">eCommerce</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
                {/* Top Left Block */}
                <div className="col-span-1 lg:col-span-1 xl:col-span-2 space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="col-span-1 h-32">
                            <StatCard title="Customers" value="3,781" change={11.01} isPositive={true} className="bg-[#E3F5FF] dark:bg-[#262626]" />
                        </div>
                        <div className="col-span-1 h-32">
                            <StatCard title="Orders" value="1,219" change={-0.03} isPositive={false} className="bg-[#F7F9FB] dark:bg-[#262626]" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="col-span-1 h-32">
                            <StatCard title="Revenue" value="$695" change={15.03} isPositive={true} className="bg-[#F7F9FB] dark:bg-[#262626]" />
                        </div>
                        <div className="col-span-1 h-32">
                            <StatCard title="Growth" value="30.1%" change={6.08} isPositive={true} className="bg-[#E5ECF6] dark:bg-[#262626]" />
                        </div>
                    </div>
                </div>

                {/* Top Right Block - Projections */}
                <div className="col-span-1 lg:col-span-1 xl:col-span-2 h-full min-h-[280px]">
                    <ProjectionsChart />
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="xl:col-span-3 h-[360px]">
                    <RevenueChart />
                </div>
                <div className="xl:col-span-1 h-[360px]">
                    <LocationCard />
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 sm:gap-6">
                <div className="xl:col-span-3 bg-[#F7F9FB] dark:bg-[#262626] p-4 sm:p-6 rounded-2xl min-h-[200px] transition-colors duration-300 overflow-x-auto">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Top Selling Products</h3>
                    <table className="w-full min-w-[500px] text-sm text-left">
                        <thead>
                            <tr className="text-gray-400 border-b border-gray-200 dark:border-gray-700">
                                <th className="py-2 font-normal">Name</th>
                                <th className="py-2 font-normal">Price</th>
                                <th className="py-2 font-normal">Quantity</th>
                                <th className="py-2 font-normal">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-900 dark:text-gray-200">
                            <tr className="border-b border-gray-100 dark:border-gray-800">
                                <td className="py-4">ASOS Ridley High Waist</td>
                                <td className="py-4">$79.49</td>
                                <td className="py-4">82</td>
                                <td className="py-4">$6,518.18</td>
                            </tr>
                            <tr className="border-b border-gray-100 dark:border-gray-800">
                                <td className="py-4">Marco Lightweight Shirt</td>
                                <td className="py-4">$128.50</td>
                                <td className="py-4">37</td>
                                <td className="py-4">$4,754.50</td>
                            </tr>
                            <tr className="border-b border-gray-100 dark:border-gray-800">
                                <td className="py-4">Half Sleeve Shirt</td>
                                <td className="py-4">$39.99</td>
                                <td className="py-4">64</td>
                                <td className="py-4">$2,559.36</td>
                            </tr>
                            <tr className="border-b border-gray-100 dark:border-gray-800">
                                <td className="py-4">Lightweight Jacket</td>
                                <td className="py-4">$20.00</td>
                                <td className="py-4">184</td>
                                <td className="py-4">$3,680.00</td>
                            </tr>
                            <tr>
                                <td className="py-4">Marco Shoes</td>
                                <td className="py-4">$79.49</td>
                                <td className="py-4">64</td>
                                <td className="py-4">$1,965.81</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="xl:col-span-1 h-[360px]">
                    <TotalSalesChart />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
