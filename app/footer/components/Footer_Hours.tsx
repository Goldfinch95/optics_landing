'use client'

import { HourRow } from '../types/footer.types'

interface FooterHoursProps {
  hours: HourRow[]
}

export function FooterHours({ hours }: FooterHoursProps) {
  return (
    <div>
      <p className="text-xl sm:text-2xl font-bold tracking-[0.15em] uppercase text-[#111] mb-4">
        Horarios
      </p>
      <div className="flex flex-col gap-[6px]">
        {hours.map((row) => (
          <div key={row.day} className="flex justify-between gap-3 text-base sm:text-lg">
            <span className="text-[#888]">{row.day}</span>
            <span className="text-[#111] font-medium">{row.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}