import React from 'react';
import { Code, Languages, Palette, Camera, TrendingUp, Cpu, Music, Briefcase } from 'lucide-react';
import { Card } from '../UI/Card';

const categories = [
  {
    icon: Code,
    name: 'Lập trình',
    count: '2,500+ khóa học',
    color: 'bg-blue-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600'
  },
  {
    icon: Languages,
    name: 'Ngoại ngữ',
    count: '1,800+ khóa học',
    color: 'bg-green-500',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600'
  },
  {
    icon: Palette,
    name: 'Thiết kế',
    count: '1,200+ khóa học',
    color: 'bg-purple-500',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600'
  },
  {
    icon: TrendingUp,
    name: 'Marketing',
    count: '900+ khóa học',
    color: 'bg-orange-500',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600'
  },
  {
    icon: Camera,
    name: 'Nhiếp ảnh',
    count: '600+ khóa học',
    color: 'bg-pink-500',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-600'
  },
  {
    icon: Cpu,
    name: 'Data Science',
    count: '800+ khóa học',
    color: 'bg-indigo-500',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600'
  },
  {
    icon: Music,
    name: 'Âm nhạc',
    count: '400+ khóa học',
    color: 'bg-red-500',
    bgColor: 'bg-red-50',
    textColor: 'text-red-600'
  },
  {
    icon: Briefcase,
    name: 'Kinh doanh',
    count: '700+ khóa học',
    color: 'bg-teal-500',
    bgColor: 'bg-teal-50',
    textColor: 'text-teal-600'
  }
];

export const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Khám phá theo danh mục
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tìm kiếm khóa học phù hợp với sở thích và mục tiêu của bạn
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.name}
                hover
                className={`text-center cursor-pointer group animate-fade-in delay-[${index * 100}ms]`}
              >
                <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${category.textColor}`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">{category.count}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};