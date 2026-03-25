'use client'

import { footerData } from '../data/footer.data'
import { FooterBrand } from './Footer_Brand'
import { FooterNav } from './Footer_Nav'
import { FooterContact } from './Footer_Contact'
import { FooterHours } from './Footer_Hours'
import { FooterBottom } from './Footer_Bottom'

export function Footer() {
  const { brand, social, navigation, contact, hours, copyright, credit } = footerData

  return (
    <footer className="bg-white border-t border-[#eee] font-[Barlow,sans-serif]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 lg:gap-10 px-6 sm:px-8 lg:px-10 py-10 lg:py-12">
        {/* Brand ocupa ancho completo en mobile, 2 cols en sm */}
        <div className="sm:col-span-2 lg:col-span-1">
          <FooterBrand name={brand.name} description={brand.description} social={social} />
        </div>
        <FooterNav links={navigation} />
        <FooterContact items={contact} />
        <FooterHours hours={hours} />
      </div>

      <FooterBottom copyright={copyright} credit={credit} />
    </footer>
  )
}