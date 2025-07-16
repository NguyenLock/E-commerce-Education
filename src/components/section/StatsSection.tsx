import React from "react";
import { stats } from "../../data/mockStats";

export const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`text-center text-white animate-bounce-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
