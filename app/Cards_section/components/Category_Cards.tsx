'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CATEGORY_CARDS } from '../data/cards.data';

export function CategoryCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8 py-4">
      {CATEGORY_CARDS.map((card, index) => (
        <motion.a
          key={card.id}
          href={card.href}
          className={`
            relative overflow-hidden cursor-pointer block group rounded-none sm:rounded-xl
            h-[260px] sm:h-[320px] md:h-[400px] lg:h-[500px]
            ${index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}
          `}
          whileHover="hover"
        >
          {/* Imagen con zoom en hover */}
          <motion.div
            className="absolute inset-0"
            variants={{
              hover: { scale: 1.08 },
            }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Image
              src={card.image}
              alt={card.label}
              fill
              style={{ objectFit: 'cover' }}
            />
          </motion.div>

          {/* Capa oscura */}
          <div className="absolute inset-0 bg-black/45 group-hover:bg-black/30 transition-colors duration-300 z-10" />

          {/* Texto */}
          <span className="absolute top-4 left-4 text-white font-bold text-base md:text-lg tracking-wide z-20 drop-shadow-md">
            {card.label}
          </span>
        </motion.a>
      ))}
    </section>
  );
}