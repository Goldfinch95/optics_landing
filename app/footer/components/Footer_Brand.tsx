'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialLink } from '../types/footer.types'

interface FooterBrandProps {
  name: string
  description: string
  social: SocialLink[]
}

export function FooterBrand({ name, description, social }: FooterBrandProps) {
  return (
    <div>
      <p className="text-[15px] font-bold tracking-[0.08em] uppercase text-[#111] mb-3">
        {name}
      </p>
      <p className="text-[13px] text-[#666] leading-[1.7] mb-5 max-w-[260px]">
        {description}
      </p>
      <div className="flex flex-wrap gap-[10px]">
        {social.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-[34px] h-[34px] rounded-full border border-[#ddd] flex items-center justify-center text-[#666] text-[13px] transition-colors duration-200 hover:border-[#111] hover:text-[#111]"
          >
            <FontAwesomeIcon icon={item.icon} className="w-[13px] h-[13px]" />
          </motion.a>
        ))}
      </div>
    </div>
  )
}