import { NavItem } from '@/types/nav'

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    github: string
    docs: string
  }
}

export const siteConfig: SiteConfig = {
  name: 'Next.js',
  description:
    'Beautifully designed components built with Radix UI and Tailwind CSS.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
  ],
  links: {
    github: 'https://github.com/iuryfranca?tab=repositories',
    docs: 'https://ui.shadcn.com',
  },
}
