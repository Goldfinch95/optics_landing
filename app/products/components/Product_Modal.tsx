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
        // Backdrop
        <motion.div
          className="fixed inset-0 bg-black/55 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Modal */}
          <motion.div
            className="bg-white rounded-2xl overflow-hidden w-full max-w-4xl relative"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full border border-gray-200 bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
            >
              <FontAwesomeIcon icon={faXmark} className="text-sm" />
            </button>

            <div className="flex">
              {/* Imagen */}
              <div className="relative w-[500px] min-w-[500px] h-[500px] bg-gray-50 flex-shrink-0">
      <Image
        src={product.image}
        alt={product.name}
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
    </div>

              {/* Info */}
              <div className="flex-1 p-6 flex flex-col gap-4">
                {/* Nombre */}
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">
                    {product.brand}
                  </p>
                  <p className="text-lg font-bold text-gray-900 leading-snug">
                    {product.name}
                  </p>
                </div>

                <hr className="border-gray-100" />

                {/* Precios */}
                <div>
                  <p className="text-xl font-bold text-gray-900">{product.price}</p>
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