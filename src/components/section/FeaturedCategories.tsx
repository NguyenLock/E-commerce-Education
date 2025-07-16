import React from 'react';
import { Card } from '../UI/Card';
import { categories } from '../../data/mockCategories';

interface FeaturedCategoriesProps {
  onCategoryClick: (category: string) => void;
}

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({ onCategoryClick }) => {
  const handleCategoryClick = (categoryName: string) => {
    const categoryMap: { [key: string]: string } = {
      'Lập trình': 'Programming',
      'Ngoại ngữ': 'Language Learning',
      'Thiết kế': 'Design',
      'Marketing': 'Marketing',
      'Nhiếp ảnh': 'Photography',
      'Data Science': 'Data Science',
      'Âm nhạc': 'Music',
      'Kinh doanh': 'Business'
    };
    onCategoryClick(categoryMap[categoryName] || categoryName);
  };

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
                onClick={() => handleCategoryClick(category.name)}
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