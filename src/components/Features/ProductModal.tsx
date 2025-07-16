import React from "react";
import { Star, Clock, User, BookOpen, Heart, ShoppingCart, ThumbsUp, Briefcase } from "lucide-react";
import type { ProductModalProps } from "../../types/index";
import { Modal } from "../UI/Modal";
import { Button } from "../UI/Button";
import { Badge } from "../UI/Badget";
import { useApp } from "../../context/AppContext";

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const {
    favorites,
    addToFavorites,
    removeFromFavorites,
    addToViewHistory,
    addToCart,
  } = useApp();

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
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const discountPercent = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
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
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover rounded-lg"
            />
            {discountPercent > 0 && (
              <Badge variant="warning" className="absolute top-4 left-4">
                -{discountPercent}%
              </Badge>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="accent">{product.category}</Badge>
                <Badge variant="secondary">{product.level}</Badge>
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
                {isFavorite ? "Đã thích" : "Yêu thích"}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          {/* Instructor Section */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Thông tin giảng viên
            </h3>
            <div className="flex items-start space-x-4">
              <img
                src={product.instructor.avatar}
                alt={product.instructor.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900">
                  {product.instructor.name}
                </h4>
                <div className="flex items-center text-gray-600 mb-2">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span>{product.instructor.title}</span>
                </div>
                <p className="text-gray-600">{product.instructor.bio}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Mô tả khóa học
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

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

          {/* Reviews Section */}
          {product.reviewList && product.reviewList.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Đánh giá từ học viên
              </h3>
              <div className="space-y-6">
                {product.reviewList.map((review) => (
                  <div key={review.id} className="bg-white rounded-lg border p-4">
                    <div className="flex items-start space-x-4">
                      <img
                        src={review.userAvatar}
                        alt={review.userName}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-gray-900">
                            {review.userName}
                          </h4>
                          <span className="text-sm text-gray-500">
                            {formatDate(review.date)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-3">{review.comment}</p>
                        <div className="flex items-center text-gray-500 text-sm">
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          <span>{review.helpful} người thấy hữu ích</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

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
