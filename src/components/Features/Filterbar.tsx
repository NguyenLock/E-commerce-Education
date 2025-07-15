import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import  type { SearchFilters } from '../../types/index';
import { Button } from '../UI/Button';
import { Card } from '../UI/Card';

interface FilterBarProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ filters, onFiltersChange }) => {
  const priceRanges = [
    { value: 'all', label: 'Tất cả' },
    { value: 'under500', label: 'Dưới 500K' },
    { value: '500to1000', label: '500K - 1 triệu' },
    { value: 'over1000', label: 'Trên 1 triệu' }
  ];

  const categories = [
    'Tất cả',
    'Language Learning',
    'Programming',
    'Marketing',
    'Data Science',
    'Design',
    'Photography',
    'Blockchain'
  ];

  const levels = [
    'Tất cả',
    'Beginner',
    'Intermediate',
    'Advanced'
  ];

  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <Card className="mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <SlidersHorizontal className="w-5 h-5 text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-900">Bộ lọc</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Khoảng giá
          </label>
          <div className="flex flex-wrap gap-2">
            {priceRanges.map((range) => (
              <Button
                key={range.value}
                variant={filters.priceRange === range.value ? 'primary' : 'outline'}
                size="sm"
                onClick={() => handleFilterChange('priceRange', range.value)}
              >
                {range.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Danh mục
          </label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cấp độ
          </label>
          <select
            value={filters.level}
            onChange={(e) => handleFilterChange('level', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>
    </Card>
  );
};