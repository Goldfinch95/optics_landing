import { FooterData } from '../types/footer.types'
import {
  faInstagram,
  faFacebookF,
  faWhatsapp,
  faTiktok,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'

export const footerData: FooterData = {
  brand: {
    name: 'Óptica Prisma',
    description:
      'Tu óptica de confianza. Ofrecemos las mejores marcas en anteojos de sol, receta y lentes de contacto.',
  },
  social: [
    { label: 'Instagram', href: 'https://instagram.com', icon: faInstagram },
    { label: 'Facebook',  href: 'https://facebook.com',  icon: faFacebookF },
    { label: 'WhatsApp',  href: 'https://wa.me/',        icon: faWhatsapp  },
    { label: 'TikTok',    href: 'https://tiktok.com',    icon: faTiktok    },
    { label: 'YouTube',   href: 'https://youtube.com',   icon: faYoutube   },
  ],
  navigation: [
    { label: 'Anteojos de Sol',                  href: '#anteojos-sol',           hasArrow: true  },
    { label: 'Anteojos de Receta',               href: '#anteojos-receta',        hasArrow: true  },
    { label: 'Lentes de Contacto',               href: '#lentes-contacto',        hasArrow: true  },
    { label: 'Cristales',                        href: '#cristales',              hasArrow: false },
    { label: 'Cristales Multifocales',           href: '#cristales-multifocales', hasArrow: false },
    { label: 'Preguntas Frecuentes',             href: '#faq',                    hasArrow: false },
    { label: 'Cómo Comprar',                     href: '#como-comprar',           hasArrow: false },
    { label: 'Política de Cambios y Devolución', href: '#politica',               hasArrow: false },
  ],
  contact: [
    { icon: faPhone,       value: '+54 11 0000-0000'           },
    { icon: faWhatsapp,    value: '+54 11 0000-0000'           },
    { icon: faEnvelope,    value: 'contacto@opticaprisma.com'  },
    { icon: faLocationDot, value: 'Av. Corrientes 1234,\nBuenos Aires' },
  ],
  hours: [
    { day: 'Lun — Vie', time: '9:00 — 18:00' },
    { day: 'Sábado', time: '9:00 — 13:00' },
    { day: 'Domingo', time: 'Cerrado' },
  ],
  copyright: '© 2026 Óptica Prisma. Todos los derechos reservados.',
  credit: {
    text: 'Hecho con ❤ por el equipo de',
    company: 'UNDEVCODE',
    url: 'https://undevcode.com',
  },
}