'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContactItem } from '../types/footer.types'

interface FooterContactProps {
  items: ContactItem[]
}

export function FooterContact({ items }: FooterContactProps) {
  return (
    <div>
      <p className="text-xl sm:text-2xl tracking-[0.15em] uppercase text-[#111] mb-4">
        Contacto
      </p>
      <div className="flex flex-col">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-2 mb-[10px]">
            <FontAwesomeIcon
              icon={item.icon}
              className="text-base sm:text-lg text-[#888] mt-[2px] w-[13px] h-[13px] shrink-0"
            />
            <span className="text-base sm:text-lg text-[#666] leading-[1.5] whitespace-pre-line">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}