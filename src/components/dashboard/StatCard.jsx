import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ title, value, change, isPositive, className = '' }) => {
  return (
    <div className={`p-6 rounded-2xl flex flex-col justify-between h-full ${className} group transition-colors duration-300`}>
      <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">{title}</h3>
      <div className="flex items-center gap-3 mt-4 transition-all duration-300 group-hover:bg-black/5 dark:group-hover:bg-white/10 group-hover:px-3 group-hover:py-1 group-hover:rounded-xl group-hover:flex-row-reverse group-hover:justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">{value}</span>
        <div className="flex items-center gap-1 text-xs font-medium">
          <span className="text-gray-900 dark:text-gray-100">{change > 0 ? '+' : ''}{change}%</span>
          {isPositive ? (
            <TrendingUp size={16} className="text-gray-900 dark:text-gray-100" />
          ) : (
            <TrendingDown size={16} className="text-gray-900 dark:text-gray-100" />
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
