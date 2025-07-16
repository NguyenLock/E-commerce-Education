import React, { useState, useEffect } from "react";
import {
  Minus,
  Plus,
  X,
  ArrowLeft,
  ShoppingBag,
  Trash2,
  CreditCard,
  Gift,
} from "lucide-react";
import { useApp } from "../../context/AppContext";
import { ProductCard } from "../Features/ProductCard";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import { Badge } from "../UI/Badget";
import { ProductModal } from "../Features/ProductModal";
import { ProductCardSkeleton } from "../UI/Skeleton";
import { apiService } from "../../service/api";
import type { Product } from "../../types/index";

interface CartPageProps {
  onBack: () => void;
}

export const CartPage: React.FC<CartPageProps> = ({ onBack }) => {
  const { cart, updateCartQuantity, removeFromCart, clearCart, showToast } =
    useApp();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await apiService.getProducts();
        if (response.success) {
          setProducts(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
        showToast("Không thể tải sản phẩm", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [showToast]);

  const cartProducts = cart
    .map((item) => ({
      ...products.find((p) => p.id === item.productId),
      quantity: item.quantity,
    }))
    .filter(
      (item): item is Product & { quantity: number } => item.id !== undefined
    );

  const calculateSubtotal = () => {
    return cartProducts.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateDiscount = () => {
    return cartProducts.reduce((total, item) => {
      const discount = item.originalPrice
        ? (item.originalPrice - item.price) * item.quantity
        : 0;
      return total + discount;
    }, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal();
  };

  const getSimilarProducts = () => {
    if (cartProducts.length === 0) return [];

    const cartCategories = new Set(cartProducts.map((p) => p.category));
    const cartTags = new Set(cartProducts.flatMap((p) => p.tags));

    return products
      .filter(
        (p) =>
          !cart.some((item) => item.productId === p.id) &&
          (cartCategories.has(p.category) ||
            p.tags.some((tag) => cartTags.has(tag)))
      )
      .slice(0, 4);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const handleCheckout = async () => {
    setCheckoutLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    showToast("Đặt hàng thành công! Cảm ơn bạn đã mua hàng.", "success");
    clearCart();
    setCheckoutLoading(false);
    onBack();
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Button
            variant="ghost"
            icon={ArrowLeft}
            onClick={onBack}
            className="text-gray-600 hover:text-gray-900"
          >
            Quay lại
          </Button>
          <div className="flex items-center space-x-3">
            <ShoppingBag className="w-8 h-8 text-primary-500" />
            <h1 className="text-3xl font-bold text-gray-900">
              Giỏ hàng ({getTotalItems()} sản phẩm)
            </h1>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 gap-6">
            {[...Array(3)].map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        ) : cartProducts.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Giỏ hàng của bạn đang trống
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Hãy khám phá các khóa học tuyệt vời và thêm chúng vào giỏ hàng để
              bắt đầu hành trình học tập!
            </p>
            <Button variant="primary" onClick={onBack} size="lg">
              Khám phá khóa học
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            <div className="xl:col-span-3 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">
                  Sản phẩm trong giỏ hàng
                </h2>
                <Button
                  variant="ghost"
                  icon={Trash2}
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-600"
                  size="sm"
                >
                  Xóa tất cả
                </Button>
              </div>

              <div className="space-y-4">
                {cartProducts.map((item) => (
                  <Card
                    key={item.id}
                    className="p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="relative flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-32 h-32 object-cover rounded-lg"
                        />
                        {item.originalPrice && (
                          <Badge
                            variant="warning"
                            className="absolute -top-2 -right-2"
                            size="sm"
                          >
                            -
                            {Math.round(
                              ((item.originalPrice - item.price) /
                                item.originalPrice) *
                                100
                            )}
                            %
                          </Badge>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {item.name}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                              <Badge variant="accent" size="sm">
                                {item.category}
                              </Badge>
                              <Badge variant="secondary" size="sm">
                                {item.level}
                              </Badge>
                            </div>
                            <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                              {item.description}
                            </p>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            icon={X}
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-xl font-bold text-primary-600">
                              {formatPrice(item.price)}
                            </span>
                            {item.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">
                                {formatPrice(item.originalPrice)}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center space-x-3">
                            <span className="text-sm text-gray-600">
                              Số lượng:
                            </span>
                            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                icon={Minus}
                                onClick={() =>
                                  updateCartQuantity(item.id, item.quantity - 1)
                                }
                                disabled={item.quantity <= 1}
                                className="w-8 h-8 p-0"
                              />
                              <span className="w-8 text-center font-medium">
                                {item.quantity}
                              </span>
                              <Button
                                variant="ghost"
                                size="sm"
                                icon={Plus}
                                onClick={() =>
                                  updateCartQuantity(item.id, item.quantity + 1)
                                }
                                className="w-8 h-8 p-0"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="xl:col-span-1">
              <div className="sticky top-8 space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Tóm tắt đơn hàng
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Tạm tính ({getTotalItems()} sản phẩm)</span>
                      <span>{formatPrice(calculateSubtotal())}</span>
                    </div>

                    {calculateDiscount() > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Giảm giá</span>
                        <span>-{formatPrice(calculateDiscount())}</span>
                      </div>
                    )}

                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-semibold text-gray-900">
                        <span>Tổng cộng</span>
                        <span className="text-primary-600">
                          {formatPrice(calculateTotal())}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={CreditCard}
                    onClick={handleCheckout}
                    loading={checkoutLoading}
                    className="mb-3"
                  >
                    Thanh toán
                  </Button>

                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                      <Gift className="w-4 h-4" />
                      <span>Miễn phí giao hàng cho đơn trên 500K</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Có thể bạn cũng thích
                  </h3>
                  <div className="space-y-4">
                    {getSimilarProducts()
                      .slice(0, 3)
                      .map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onViewDetails={setSelectedProduct}
                          compact
                        />
                      ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};
