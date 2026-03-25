'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SLIDES } from '../data/carrousel.data';
import { useCarousel } from '../hooks/use_carrousel';

export function Hero() {
  const { current, goTo } = useCarousel(SLIDES.length);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-neutral-900 rounded-b-3xl lg:rounded-bl-3xl lg:rounded-br-none">
      {/* Slides */}
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 6, ease: 'easeOut' }}
        >
          <Image
            src={SLIDES[current].image}
            alt={SLIDES[current].alt}
            fill
            style={{
              objectFit: 'cover',
              objectPosition: SLIDES[current].objectPosition ?? 'center',
            }}
            priority={SLIDES[current].id === 1}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-4 left-5 flex gap-2 z-10">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goTo(index)}
            aria-label={`Ir al slide ${index + 1}`}
            className={`
              w-2.5 h-2.5 rounded-full border-2 border-white p-0 cursor-pointer
              transition-all duration-200
              [filter:drop-shadow(0px_0px_2px_rgba(0,0,0,0.8))]
              ${index === current
                ? 'bg-white'
                : 'bg-white/30 hover:bg-white/50'
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}