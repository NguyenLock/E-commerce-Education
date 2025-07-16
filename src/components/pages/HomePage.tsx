import React, { useState, useEffect } from "react";
import type { Product, SearchFilters } from "../../types/index";
import { Header } from "../layout/Header";
import { HeroSection } from "../section/HeroSection";
import { FeaturedCategories } from "../section/FeaturedCategories";
import { StatsSection } from "../section/StatsSection";
import { TestimonialsSection } from "../section/TestimonialsSection";
import { CTASection } from "../section/CTASection";
import { FilterBar } from "../Features/Filterbar";
import { ProductCard } from "../Features/ProductCard";
import { ProductModal } from "../Features/ProductModal";
import { Suggestions } from "../Features/Suggestions";
import { Chatbot } from "../Features/Chatbot";
import { ProductCardSkeleton } from "../UI/Skeleton";
import { apiService } from "../../service/api";
import { useApp } from "../../context/AppContext";
import type { HomePageProps } from "../../types/index";

export const HomePage: React.FC<HomePageProps> = ({
  onShowFavorites,
  onShowHistory,
  onShowCart,
  onShowAuth,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showProductSection, setShowProductSection] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    query: "",
    priceRange: "all",
    category: "Tất cả",
    level: "Tất cả",
  });

  const { favorites, showToast } = useApp();

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, filters]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await apiService.getProducts();
      if (response.success) {
        setProducts(response.data);
      } else {
        showToast("Không thể tải sản phẩm", "error");
      }
    } catch (error) {
      showToast("Có lỗi xảy ra khi tải sản phẩm", "error");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const filterProducts = () => {
    let filtered = products;

    if (filters.query) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(filters.query.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(filters.query.toLowerCase())
      );
    }

    if (filters.priceRange !== "all") {
      filtered = filtered.filter((product) => {
        switch (filters.priceRange) {
          case "under500":
            return product.price < 500000;
          case "500to1000":
            return product.price >= 500000 && product.price <= 1000000;
          case "over1000":
            return product.price > 1000000;
          default:
            return true;
        }
      });
    }

    if (filters.category !== "Tất cả") {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.level !== "Tất cả") {
      filtered = filtered.filter((product) => product.level === filters.level);
    }

    setFilteredProducts(filtered);
  };

  const handleSearchChange = (query: string) => {
    setFilters((prev) => ({ ...prev, query }));
    if (query && !showProductSection) {
      setShowProductSection(true);
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleExploreClick = () => {
    setShowProductSection(true);

    setTimeout(() => {
      const element = document.getElementById("products-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleCategoryClick = (category: string) => {
    setFilters((prev) => ({ ...prev, category }));
    setShowProductSection(true);

    setTimeout(() => {
      const element = document.getElementById("products-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onSearchChange={handleSearchChange}
        onFavoritesClick={onShowFavorites}
        onViewHistoryClick={onShowHistory}
        onCartClick={onShowCart}
        onAuthClick={onShowAuth}
        favoritesCount={favorites.length}
      />

      <main>
        <HeroSection onExploreClick={handleExploreClick} />

        <FeaturedCategories onCategoryClick={handleCategoryClick} />

        <StatsSection />

        <TestimonialsSection />

        {showProductSection && (
          <section id="products-section" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Suggestions onProductClick={handleProductClick} />

              <FilterBar filters={filters} onFiltersChange={setFilters} />

              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Tất cả khóa học ({filteredProducts.length})
                  </h2>
                </div>

                {loading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[...Array(8)].map((_, i) => (
                      <ProductCardSkeleton key={i} />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onViewDetails={handleProductClick}
                      />
                    ))}
                  </div>
                )}

                {!loading && filteredProducts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">
                      Không tìm thấy khóa học phù hợp với bộ lọc của bạn
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        <CTASection onGetStarted={handleExploreClick} />
      </main>

      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <Chatbot />
    </div>
  );
};
