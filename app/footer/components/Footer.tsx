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
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 px-10 py-12">
        <FooterBrand name={brand.name} description={brand.description} social={social} />
        <FooterNav links={navigation} />
        <FooterContact items={contact} />
        <FooterHours hours={hours} />
      </div>

      <FooterBottom copyright={copyright} credit={credit} />
    </footer>
  )
}