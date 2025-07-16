import React from 'react';
import { Star, Clock, User, BookOpen, Heart, ShoppingCart } from 'lucide-react';
import  type { ProductModalProps } from '../../types/index';
import { Modal } from '../UI/Modal';
import { Button } from '../UI/Button';
import { Badge } from '../UI/Badget';
import { useApp } from '../../context/AppContext';


export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const { favorites, addToFavorites, removeFromFavorites, addToViewHistory, addToCart } = useApp();

  if (!product) return null;

  const isFavorite = favorites.includes(product.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product.id);
    }
  };

  const handleAddToCart = () => {
    addToCart(product.id);
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

  React.useEffect(() => {
    if (isOpen && product) {
      addToViewHistory(product.id);
    }
  }, [isOpen, product, addToViewHistory]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover rounded-lg"
            />
            {discountPercent > 0 && (
              <Badge
                variant="warning"
                className="absolute top-4 left-4"
              >
                -{discountPercent}%
              </Badge>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="accent">
                  {product.category}
                </Badge>
                <Badge variant="secondary">
                  {product.level}
                </Badge>
              </div>

              <h1 className="text-3xl font-bold text-gray-900">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  {product.instructor.name}
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {product.duration}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-lg font-semibold">
                    {product.rating}
                  </span>
                  <span className="ml-1 text-gray-600">
                    ({product.reviews} đánh giá)
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-primary-600">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            <div className="flex space-x-4">
              <Button
                variant="primary"
                size="lg"
                icon={ShoppingCart}
                className="flex-1"
                onClick={handleAddToCart}
              >
                Thêm vào giỏ
              </Button>
              <Button
                variant={isFavorite ? "warning" : "outline"}
                size="lg"
                icon={Heart}
                onClick={handleFavoriteClick}
                className={isFavorite ? "text-white" : ""}
              >
                {isFavorite ? 'Đã thích' : 'Yêu thích'}
              </Button>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-8 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Mô tả khóa học
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Nội dung khóa học
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <BookOpen className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Thẻ tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};