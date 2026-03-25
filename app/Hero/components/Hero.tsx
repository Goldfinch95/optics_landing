'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SLIDES } from '../data/carrousel.data';
import { useCarousel } from '../hooks/use_carrousel';
import './hero.css';

export function Hero() {
  const { current, goTo } = useCarousel(SLIDES.length);

  return (
    <section className="hero">
      {/* Slides */}
      <AnimatePresence>
        <motion.div
          key={current}
          className="hero-slide"
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
      <div className="hero-dots">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            className={`hero-dot ${index === current ? 'hero-dot--active' : ''}`}
            onClick={() => goTo(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}