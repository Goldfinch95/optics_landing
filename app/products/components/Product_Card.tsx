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
  className="bg-white rounded-xl h-[300px]  flex border border-gray-100 hover:shadow-lg transition-shadow duration-200 cursor-pointer overflow-hidden"
>
  {/* Imagen — ocupa todo el alto */}
  <div className="relative w-100 h-full flex-shrink-0">
    <Image
      src={product.image}
      alt={product.name}
      fill
      style={{ objectFit: 'cover' }}
    />
  </div>

  {/* Info */}
  <div className="flex-1 flex flex-col justify-center p-4">
    <p className="text-sm font-bold text-gray-900 mb-3 leading-snug">
      {product.name}
    </p>
    <p className="text-sm font-semibold text-gray-900">{product.price}</p>
    <p className="text-xs text-gray-500 mt-1">{product.cashPrice}</p>
    <p className="text-xs text-blue-600 font-medium mt-1">
      {product.installments}
    </p>
  </div>
</div>
  );
}
