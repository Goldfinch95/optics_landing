import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface SocialLink {
  label: string
  href: string
  icon: IconDefinition
}

export interface NavLink {
  label: string
  href: string
  hasArrow?: boolean
}

export interface ContactItem {
  icon: IconDefinition
  value: string
}

export interface HourRow {
  day: string
  time: string
}

export interface FooterData {
  brand: {
    name: string
    description: string
  }
  social: SocialLink[]
  navigation: NavLink[]
  contact: ContactItem[]
  hours: HourRow[]
  copyright: string
  credit: {
    text: string
    company: string
    url: string
  }
}