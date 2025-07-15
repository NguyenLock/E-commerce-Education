import React, { useState, useEffect } from "react";
import { Heart, ArrowLeft } from "lucide-react";
import type { Product } from "../../types/index";
import { Button } from "../UI/Button";
import { ProductCard } from "../Features/ProductCard";
import { ProductModal } from "../Features/ProductModal";
import { apiService } from "../../service/api";
import { useApp } from "../../context/AppContext";

interface FavoritesPageProps {
  onBack: () => void;
}

export const FavoritesPage: React.FC<FavoritesPageProps> = ({ onBack }) => {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { favorites, showToast } = useApp();

  useEffect(() => {
    fetchFavoriteProducts();
  }, [favorites]);

  const fetchFavoriteProducts = async () => {
    setLoading(true);
    try {
      const response = await apiService.getProducts();
      if (response.success) {
        const filtered = response.data.filter((product) =>
          favorites.includes(product.id)
        );
        setFavoriteProducts(filtered);
      } else {
        showToast("Không thể tải sản phẩm yêu thích", "error");
      }
    } catch (error) {
      showToast("Có lỗi xảy ra khi tải sản phẩm yêu thích", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
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
            <Heart className="w-8 h-8 text-red-500 fill-current" />
            <h1 className="text-3xl font-bold text-gray-900">
              Sản phẩm yêu thích
            </h1>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
            <p className="text-gray-500 mt-4">Đang tải...</p>
          </div>
        ) : favoriteProducts.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Chưa có sản phẩm yêu thích
            </h2>
            <p className="text-gray-500 mb-6">
              Hãy thêm những khóa học bạn quan tâm vào danh sách yêu thích
            </p>
            <Button variant="primary" onClick={onBack}>
              Khám phá khóa học
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600">
                Bạn có {favoriteProducts.length} sản phẩm yêu thích
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favoriteProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={handleProductClick}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
