import { BRANDS } from '../data/brands.data';
import './brands.css';

export function Brands() {
  // Duplicamos para el loop infinito
  const duplicated = [...BRANDS, ...BRANDS];

  return (
    <section className="bg-[#1a1a1a] py-12 px-8 overflow-hidden">
      {/* Header */}
      <div className="mb-9">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#555] mb-1">
          Trabajamos con
        </p>
        <h2 className="text-[22px] font-bold text-white">Nuestras Marcas</h2>
      </div>

      {/* Carrusel */}
      <div className="brands-outer">
        <div className="brands-track">
          {duplicated.map((brand, index) => (
            <>
              <span
                key={`${brand.id}-${index}`}
                className={`brands-item ${brand.isScript ? 'brands-item--script' : ''}`}
              >
                {brand.name}
              </span>
              <span key={`dot-${brand.id}-${index}`} className="brands-dot" />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}