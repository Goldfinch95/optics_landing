'use client';

import { BRANDS } from '../data/brands.data';

export function Brands() {
  const duplicated = [...BRANDS, ...BRANDS];

  return (
    <section className="bg-[#1a1a1a] py-12 sm:py-16 lg:py-24 overflow-hidden">

      {/* Header */}
      <div className="mb-6 sm:mb-8 lg:mb-10 px-4 sm:px-8">
        <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#555] mb-1">
          Trabajamos con
        </p>
        <h2 className="text-lg sm:text-[22px] lg:text-[28px] font-bold text-white">
          Nuestras Marcas
        </h2>
      </div>

      {/* Carrusel */}
      <div
        className="overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 100px, black calc(100% - 100px), transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 100px, black calc(100% - 100px), transparent)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 'max-content',
            animation: 'brands-scroll 22s linear infinite',
          }}
        >
          {duplicated.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <span
                className="whitespace-nowrap cursor-pointer select-none transition-colors duration-300 text-[#3a3a3a] hover:text-white"
                style={
                  brand.isScript
                    ? {
                        fontFamily: "'Playfair Display', serif",
                        fontStyle: 'italic',
                        fontWeight: 700,
                        fontSize: 'clamp(26px, 4vw, 56px)',
                        letterSpacing: '0.02em',
                        padding: '0 clamp(24px, 3vw, 52px)',
                      }
                    : {
                        fontWeight: 700,
                        fontSize: 'clamp(18px, 3vw, 40px)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase' as const,
                        padding: '0 clamp(24px, 3vw, 52px)',
                      }
                }
              >
                {brand.name}
              </span>
              <span
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: '#333',
                  flexShrink: 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');
        @keyframes brands-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}