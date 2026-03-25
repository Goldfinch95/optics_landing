import Image from "next/image";
import { Product } from "../types/products.type";

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      onClick={() => onClick(product)}
      className="bg-white rounded-xl flex border border-gray-100 hover:shadow-lg transition-shadow duration-200 cursor-pointer overflow-hidden h-[140px] sm:h-[180px] md:h-[200px] lg:h-[220px]"
    >
      {/* Imagen */}
      <div className="relative w-[120px] sm:w-[150px] md:w-[160px] flex-shrink-0 h-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col justify-center p-3 sm:p-4 min-w-0">
        <p className="text-xs sm:text-sm font-bold text-gray-900 mb-2 leading-snug line-clamp-2">
          {product.name}
        </p>
        <p className="text-sm sm:text-base font-semibold text-gray-900">{product.price}</p>
        <p className="text-[11px] sm:text-xs text-gray-500 mt-1 hidden sm:block">{product.cashPrice}</p>
        <p className="text-[11px] sm:text-xs text-blue-600 font-medium mt-1 line-clamp-2">
          {product.installments}
        </p>
      </div>
    </div>
  );
}