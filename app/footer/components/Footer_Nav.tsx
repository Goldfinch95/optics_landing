'use client'

import Link from 'next/link'
import { NavLink } from '../types/footer.types'

interface FooterNavProps {
  links: NavLink[]
}

export function FooterNav({ links }: FooterNavProps) {
  return (
    <div>
      <p className="text-xl sm:text-2xl font-bold tracking-[0.15em] uppercase text-[#111] mb-4">
        Navegación
      </p>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-base sm:text-lg text-[#666] hover:text-blue-600 transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}