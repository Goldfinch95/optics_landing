'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FEATURED_PRODUCTS, PRODUCTS_PER_PAGE } from '../data/products.data';
import { usePagination } from '../hooks/use_pagination';
import { ProductCard } from './Product_Card';
import { ProductModal } from './Product_Modal';
import { Product } from '../types/products.type';

export function FeaturedProducts() {
  const { current, prev, next, canPrev, canNext } = usePagination(
    FEATURED_PRODUCTS,
    PRODUCTS_PER_PAGE
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <section className="bg-gray-100 p-4 sm:p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Destacados</h2>
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={!canPrev}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-gray-300 bg-gray-200 text-gray-500 flex items-center justify-center transition-all duration-200 hover:border-gray-500 hover:bg-gray-300 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
            </button>
            <button
              onClick={next}
              disabled={!canNext}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-gray-300 bg-gray-200 text-gray-500 flex items-center justify-center transition-all duration-200 hover:border-gray-500 hover:bg-gray-300 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
            </button>
          </div>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
          {current.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={setSelectedProduct}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}