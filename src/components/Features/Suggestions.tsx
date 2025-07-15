import React, { useState } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';
import  type { Product } from '../../types/index';
import { Button } from '../UI/Button';
import { Card } from '../UI/Card';
import { ProductCard } from './ProductCard';
import { ProductCardSkeleton } from '../UI/Skeleton';
import { apiService } from '../../service/api';
import { useApp } from '../../context/AppContext';

interface SuggestionsProps {
  onProductClick: (product: Product) => void;
}

export const Suggestions: React.FC<SuggestionsProps> = ({ onProductClick }) => {
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { showToast } = useApp();

  const fetchSuggestions = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await apiService.getSuggestions('user123');
      if (response.success) {
        setSuggestions(response.data);
        showToast('Đã tải gợi ý thành công!', 'success');
      } else {
        setError(response.message || 'Có lỗi xảy ra');
        showToast(response.message || 'Có lỗi xảy ra', 'error');
      }
    } catch (err) {
      setError('Không thể kết nối đến server');
      showToast('Không thể kết nối đến server', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Sparkles className="w-6 h-6 text-primary-500" />
          <h2 className="text-xl font-bold text-gray-900">
            Gợi ý AI dành cho bạn
          </h2>
        </div>
        <Button
          variant="primary"
          icon={RefreshCw}
          onClick={fetchSuggestions}
          loading={loading}
        >
          Lấy gợi ý
        </Button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      )}

      {suggestions.length > 0 && !loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {suggestions.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onProductClick}
            />
          ))}
        </div>
      )}

      {suggestions.length === 0 && !loading && !error && (
        <div className="text-center py-12">
          <Sparkles className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">
            Nhấn "Lấy gợi ý" để nhận các khóa học phù hợp với bạn
          </p>
        </div>
      )}
    </Card>
  );
};