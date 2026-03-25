'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CATEGORY_CARDS } from '../data/cards.data';

export function CategoryCards() {
  return (
    <section className="grid grid-cols-3 gap-8 py-4 ">
      {CATEGORY_CARDS.map((card) => (
        <motion.a
          key={card.id}
          href={card.href}
          className="relative h-[500px] w-3/3 rounded-xl overflow-hidden cursor-pointer block group"
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
          <span className="absolute top-4 left-4 text-white font-bold text-lg tracking-wide z-20 drop-shadow-md">
            {card.label}
          </span>
        </motion.a>
      ))}
    </section>
  );
}