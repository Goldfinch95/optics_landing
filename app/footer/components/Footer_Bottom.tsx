'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

interface FooterBottomProps {
  copyright: string
  credit: {
    company: string
    url: string
  }
}

export function FooterBottom({ copyright, credit }: FooterBottomProps) {
  return (
    <div className="border-t border-[#eee] px-10 py-4 flex items-center justify-between bg-[#2e2e2e]">
      <p className="text-[12px] text-[#aaa]">{copyright}</p>

      <div className="group flex items-center gap-1 text-[12px] text-[#aaa]">
        <span>Desarrollado con</span>
        <FontAwesomeIcon
          icon={faHeart}
          className="w-[11px] h-[11px] text-[#aaa] group-hover:text-[#888] group-active:text-[#111] transition-colors duration-200 cursor-default"
        />
        <span>por el equipo de</span>
        <Link
          href={credit.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#aaa] hover:text-[#888] active:text-[#111] transition-colors duration-200"
        >
          {credit.company}
        </Link>
      </div>
    </div>
  )
}