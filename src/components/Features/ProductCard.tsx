import React from 'react';
import { Star, Heart, Clock, User} from 'lucide-react';
import  type { Product } from '../../types/index';
import { Card } from '../UI/Card';
import { Button } from '../UI/Button';
import { Badge } from '../UI/Badget';
import { useApp } from '../../context/AppContext';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useApp();
  const isFavorite = favorites.includes(product.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product.id);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card hover className="group">
      <div className="relative cursor-pointer" onClick={() => onViewDetails(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
        />
        {discountPercent > 0 && (
          <Badge
            variant="warning"
            className="absolute top-2 left-2"
          >
            -{discountPercent}%
          </Badge>
        )}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-200 ${
            isFavorite
              ? 'bg-red-500 text-white'
              : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
          }`}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="accent" size="sm">
            {product.category}
          </Badge>
          <Badge variant="secondary" size="sm">
            {product.level}
          </Badge>
        </div>

        <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>

        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {product.instructor}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {product.duration}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm text-gray-600">
                {product.rating} ({product.reviews})
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary-600">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <Button
            variant="primary"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
          >
            Xem chi tiết
          </Button>
        </div>
      </div>
    </Card>
  );
};