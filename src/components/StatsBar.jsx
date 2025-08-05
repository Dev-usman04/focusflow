import React from 'react';

const StatsBar = ({ stats }) => {
  const statsConfig = [
    {
      label: 'Total Tasks',
      value: stats.total,
      color: 'text-white',
      bgColor: 'text-purple-300'
    },
    {
      label: 'Active Tasks',
      value: stats.active,
      color: 'text-blue-400',
      bgColor: 'text-purple-300'
    },
    {
      label: 'Completed',
      value: stats.completed,
      color: 'text-green-400',
      bgColor: 'text-purple-300'
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {statsConfig.map((stat, index) => (
        <div
          key={stat.label}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15 transform hover:-translate-y-1"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className={`text-2xl font-bold ${stat.color}`}>
            {stat.value}
          </div>
          <div className={`text-sm ${stat.bgColor}`}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;