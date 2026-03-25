import { faInstagram, faFacebookF, faWhatsapp, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const NAV_LINKS = [
  { label: 'Anteojos de Sol',                  href: '#anteojos-sol',           hasArrow: true  },
  { label: 'Anteojos de Receta',               href: '#anteojos-receta',        hasArrow: true  },
  { label: 'Lentes de Contacto',               href: '#lentes-contacto',        hasArrow: true  },
  { label: 'Cristales',                        href: '#cristales',              hasArrow: false },
  { label: 'Cristales Multifocales',           href: '#cristales-multifocales', hasArrow: false },
  { label: 'Preguntas Frecuentes',             href: '#faq',                    hasArrow: false },
  { label: 'Cómo Comprar',                     href: '#como-comprar',           hasArrow: false },
  { label: 'Política de Cambios y Devolución', href: '#politica',               hasArrow: false },
];

export const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com', icon: faInstagram },
  { label: 'Facebook',  href: 'https://facebook.com',  icon: faFacebookF },
  { label: 'WhatsApp',  href: 'https://wa.me/',        icon: faWhatsapp  },
  { label: 'TikTok',    href: 'https://tiktok.com',    icon: faTiktok    },
  { label: 'YouTube',   href: 'https://youtube.com',   icon: faYoutube   },
];