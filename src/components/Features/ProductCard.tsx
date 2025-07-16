import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Card } from '../UI/Card';
import { Button } from '../UI/Button';
import { useApp } from '../../context/AppContext';
import type { ProductCardProps } from '../../types/index';

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  compact = false,
}) => {
  const { favorites, addToFavorites, removeFromFavorites, addToCart } = useApp();
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
          {!compact && (
            <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">
              {product.level}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={`text-lg font-semibold text-gray-900 mb-2 line-clamp-2 ${compact ? 'min-h-0' : 'min-h-[3.5rem]'}`}>
          {product.name}
        </h3>

        {/* Description */}
        {!compact && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
            {product.description}
          </p>
        )}

        {/* Rating & Duration */}
        {!compact && (
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★</span>
              <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
              <span className="text-sm text-gray-500">({product.reviews} đánh giá) </span>
            </div>
            <p className="text-sm text-gray-500">{product.duration}</p>
          </div>
        )}

        {/* Price */}
        <div className="flex flex-col mb-4">
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </p>
            {product.originalPrice && product.originalPrice > product.price && (
              <p className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </p>
            )}
          </div>
        </div>

        {/* View Detail Button */}
        <div className="flex gap-2">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="flex-1"
            variant="outline"
          >
            Xem chi tiết
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product.id);
            }}
            className="flex-shrink-0"
            variant="primary"
            icon={ShoppingCart}
          />
        </div>
      </div>
    </Card>
  );
};