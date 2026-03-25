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
    <div className="border-t h-16.5 border-[#eee] bg-[#2e2e2e]">
      <div className="px-6 sm:px-8 lg:px-10 py-4 flex flex-col sm:flex-row items-center gap-2 sm:justify-between">
        <p className="text-base text-[#aaa] text-center sm:text-left">{copyright}</p>

        <div className="group flex items-center gap-1 text-base text-[#aaa]">
          <span>Desarrollado con</span>
          <FontAwesomeIcon
            icon={faHeart}
            className="w-[11px] h-[11px] text-[#aaa] group-hover:text-[#888] transition-colors duration-200 cursor-default"
          />
          <span>por el equipo de</span>
          <Link
            href={credit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#aaa] hover:text-[#888] transition-colors duration-200"
          >
            {credit.company}
          </Link>
        </div>
      </div>
    </div>
  )
}