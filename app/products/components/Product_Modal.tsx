'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Product } from '../types/products.type';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 bg-black/55 z-50 flex items-end sm:items-center justify-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white w-full sm:rounded-2xl overflow-hidden sm:max-w-xl md:max-w-3xl lg:max-w-4xl relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full border border-gray-200 bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
            >
              <FontAwesomeIcon icon={faXmark} className="text-sm" />
            </button>

            {/* Layout: columna en mobile, fila en sm+ */}
            <div className="flex flex-col sm:flex-row">

              {/* Imagen */}
              <div className="relative w-full h-[240px] sm:w-[280px] sm:h-auto md:w-[380px] lg:w-[500px] sm:min-h-[400px] bg-gray-50 flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>

              {/* Info */}
              <div className="flex-1 p-5 sm:p-6 flex flex-col gap-3 sm:gap-4">

                {/* Nombre */}
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">
                    {product.brand}
                  </p>
                  <p className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                    {product.name}
                  </p>
                </div>

                <hr className="border-gray-100" />

                {/* Precios */}
                <div>
                  <p className="text-lg sm:text-xl font-bold text-gray-900">{product.price}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{product.cashPrice}</p>
                  <p className="text-xs text-blue-600 font-semibold mt-0.5">{product.installments}</p>
                </div>

                <hr className="border-gray-100" />

                {/* Specs */}
                <div className="flex flex-col gap-1.5">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between text-xs">
                      <span className="text-gray-400">{spec.label}</span>
                      <span className="text-gray-900 font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Botón WhatsApp */}
                <a
                  href={product.whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-lg py-3 flex items-center justify-center gap-2 font-bold text-xs tracking-widest uppercase transition-colors"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}