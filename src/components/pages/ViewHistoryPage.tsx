import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { ProductCard } from '../Features/ProductCard';
import { Card } from '../UI/Card';
import { ProductCardSkeleton } from '../UI/Skeleton';
import { apiService } from '../../service/api';
import { ProductModal } from '../Features/ProductModal';
import type { Product } from '../../types/index';

interface ViewHistoryPageProps {
  onBack: () => void;
}

export const ViewHistoryPage: React.FC<ViewHistoryPageProps> = ({ onBack }) => {
  const { viewHistory } = useApp();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await apiService.getProducts();
        if (response.success) {
          setProducts(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const viewedProducts = viewHistory
    .map(id => products.find(p => p.id === id))
    .filter((product): product is Product => product !== undefined)
    .reverse();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Lịch sử xem</h1>
        <button
          onClick={onBack}
          className="text-primary-600 hover:text-primary-700 font-medium"
        >
          ← Quay lại
        </button>
      </div>
      
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      ) : viewedProducts.length === 0 ? (
        <Card className="p-6">
          <p className="text-gray-600 text-center">Bạn chưa xem sản phẩm nào.</p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {viewedProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              onViewDetails={setSelectedProduct}
            />
          ))}
        </div>
      )}

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