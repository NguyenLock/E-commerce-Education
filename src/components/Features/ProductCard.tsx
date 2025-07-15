import React from 'react';
import { Heart } from 'lucide-react';
import { Card } from '../UI/Card';
import { Button } from '../UI/Button';
import { useApp } from '../../context/AppContext';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
}) => {
  const { favorites, addToFavorites, removeFromFavorites } = useApp();
  const isFavorite = favorites.includes(product.id);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const calculateDiscount = (original: number, discounted: number) => {
    return Math.round(((original - discounted) / original) * 100);
  };

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent card click when clicking on favorite button or view detail button
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    onViewDetails(product);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product.id);
    }
  };

  return (
    <Card
      hover
      className="flex flex-col h-full overflow-hidden group"
      padding="none"
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <div className="relative w-full pt-[56.25%]">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Discount Badge */}
        {product.originalPrice && product.originalPrice > product.price && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
            -{calculateDiscount(product.originalPrice, product.price)}%
          </div>
        )}
        {/* Favorite Button */}
        <button
          onClick={handleToggleFavorite}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center transition-transform hover:scale-110"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        {/* Category & Level */}
        <div className="flex gap-2 mb-2">
          <span className="px-2 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded">
            {product.category}
          </span>
          <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">
            {product.level}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Instructor */}
        <div className="flex items-center mt-auto mb-4">
          <img
            src={product.instructor.avatar}
            alt={product.instructor.name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">
              {product.instructor.name}
            </p>
            <p className="text-xs text-gray-500">{product.instructor.title}</p>
          </div>
        </div>

        {/* Price & Duration */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="text-xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </p>
            {product.originalPrice && product.originalPrice > product.price && (
              <p className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </p>
            )}
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">{product.duration}</p>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★</span>
              <span className="text-sm font-medium">
                {product.rating.toFixed(1)}
              </span>
              <span className="text-sm text-gray-500">
                ({product.reviews} đánh giá)
              </span>
            </div>
          </div>
        </div>

        {/* View Detail Button */}
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(product);
          }}
          className="w-full"
          variant="outline"
        >
          Xem chi tiết
        </Button>
      </div>
    </Card>
  );
};